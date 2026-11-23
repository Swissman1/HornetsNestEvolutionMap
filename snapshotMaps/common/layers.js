const ROAD_CONFIG = {
    'Freeway':                     { minZoom: 8.0,   width: 7.0  },
    'Highway':                     { minZoom: 7.0,   width: 6.77 },
    'Trunk Road':                  { minZoom: 9.0,   width: 5.6  },
    'Major Road':                  { minZoom: 9.0,   width: 5.3  },
    'Minor Road':                  { minZoom: 10.75, width: 4.45 },
    'Collecting Residential Road': { minZoom: 11.25, width: 3.5  },
    'RAMP':                        { minZoom: 11.5,  width: 2.95 },
    'Neighborhood Road':           { minZoom: 12.15, width: 2.9  },
    'default':                     { minZoom: 12.5,  width: null }
};

function interpolateColor(color1, color2, factor) {
    const result = color1.slice();
    for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - result[i]));
    }
    return 'rgb(' + result.join(',') + ')';
}

function getColorForYear(year, thresYear) {
    return year > thresYear ? 'rgb(100,210,100)' : null;
}

function createDynamicAnnexStyle(layerBaseStyle) {
    return function(feature, resolution) {
        if (typeof map === 'undefined' || !map) {
            return typeof layerBaseStyle === 'function' ? layerBaseStyle(feature, resolution) : layerBaseStyle;
        }
        const roadAdd = feature.get('effdate');
        let isVisible = false;
        if (roadAdd && typeof filterMinYear !== 'undefined' && typeof filterMaxYear !== 'undefined') {
            const featureYear = new Date(roadAdd).getFullYear();
            isVisible = featureYear >= filterMinYear && featureYear <= filterMaxYear;
        }
        if (!isVisible) return null;

        const style = typeof layerBaseStyle === 'function' ? layerBaseStyle(feature, resolution) : layerBaseStyle;
        return Array.isArray(style) ? style : [style];
    };
}

function createDynamicRoadStyle(layerBaseStyle) {
    return function(feature, resolution) {
        if (typeof map === 'undefined' || !map) {
            return typeof layerBaseStyle === 'function' ? layerBaseStyle(feature, resolution) : layerBaseStyle;
        }

        const factor = window.cullFactor || 1;
        const roadType = feature.get('Road Type');
        const config = ROAD_CONFIG[roadType] || ROAD_CONFIG['default'];
        const currentZoom = map.getView().getZoom();

        if (currentZoom < config.minZoom * factor) {
            return null;
        }

        const roadAdd = feature.get('First Seen');
        const featureYear = roadAdd ? new Date(roadAdd).getFullYear() : null;
        const base = typeof layerBaseStyle === 'function' ? layerBaseStyle(feature, resolution) : layerBaseStyle;
        const stylesArray = Array.isArray(base) ? base : [base];

        return stylesArray.map(s => {
            const cloned = s.clone();
            const stroke = cloned.getStroke();
            if (stroke) {
                if (featureYear !== null && typeof lastYear !== 'undefined') {
                    const highlightColor = getColorForYear(featureYear, lastYear);
                    if (highlightColor) stroke.setColor(highlightColor);
                }
                if (config.width) stroke.setWidth(config.width);
            }
            return cloned;
        });
    };
}

var lyr_OpenStreetmap = new ol.layer.Tile({
    title: 'Open Street map',
    opacity: 1.0,
    visible: true,
    source: new ol.source.XYZ({
        attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});

function createVectorLayer({ jsonData, style, popuplayertitle, title, fieldAliases, fieldImages, fieldLabels }) {
    const features = new ol.format.GeoJSON().readFeatures(jsonData, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857'
    });
    const source = new ol.source.Vector({ attributions: ' ' });
    source.addFeatures(features);

    const layer = new ol.layer.Vector({
        declutter: false,
        source: source,
        style: style,
        popuplayertitle: popuplayertitle,
        interactive: true,
        title: title
    });

    if (fieldAliases) layer.set('fieldAliases', fieldAliases);
    if (fieldImages) layer.set('fieldImages', fieldImages);
    if (fieldLabels) layer.set('fieldLabels', fieldLabels);

    return layer;
}

var lyr_Roads = createVectorLayer({
    jsonData: json_Roads,
    style: createDynamicRoadStyle(style_Roads),
    popuplayertitle: 'Road',
    title: 'Existing roads',
    fieldAliases: { 'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type' },
    fieldImages: { 'First Seen': 'DateTime', 'Name': 'TextEdit', 'Road Type': 'TextEdit' },
    fieldLabels: { 'First Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Road Type': 'inline label - visible with data' }
});

var lyr_MissingRoads = createVectorLayer({
    jsonData: json_MissingRoads,
    style: createDynamicRoadStyle(style_MissingRoads),
    popuplayertitle: 'Road',
    title: 'Missing roads',
    fieldAliases: { 'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', 'Road Type': 'Road Type' },
    fieldImages: { 'First Seen': 'DateTime', 'Last Seen': 'DateTime', 'Name': 'TextEdit', 'Road Type': '' },
    fieldLabels: { 'First Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Last Seen': 'inline label - visible with data', 'Road Type': 'inline label - visible with data' }
});

lyr_Roads.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

var group_RoadsandRail = new ol.layer.Group({
    layers: [lyr_Roads, lyr_MissingRoads],
    fold: 'open',
    title: 'Roads'
});

var layersList = [lyr_OpenStreetmap, group_RoadsandRail];
