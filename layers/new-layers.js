var wms_layers = [];

// *** IMPORTANT: Ensure your 'map' object is accessible here. ***
// This variable MUST point to your actual ol.Map instance.
// For example, if your map is created as:
// var map = new ol.Map({ ... });
// Make sure 'map' is globally available or passed in.

var filterMinYear = 1800;
var filterMaxYear =2025;
// Helper function to interpolate between two colors (RGB interpolation)
// Colors should be in [R, G, B] format (0-255)
function interpolateColor(color1, color2, factor) {
    let result = color1.slice(); // Create a copy
    for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - result[i]));
    }
    return 'rgb(' + result.join(',') + ')';
}
function getColorForYear(year, minYear, maxYear) {
    // Normalize the year to a 0-1 range
    const normalizedYear = (year - minYear) / (maxYear - minYear);

    // Define your color stops (year percentage and corresponding RGB color)
    // You can add more color stops for more complex gradients
    const colorStops = [
        { yearRatio: 0.0, color: [80, 3, 16] }, 
        { yearRatio: 0.25, color: [200, 100, 0] },    
        {yearRatio: 0.5, color: [100,172,16]},
        {yearRatio: 0.75, color: [240,142,35]},
        {yearRatio: 0.85, color: [200,200,200]},
        { yearRatio: 1.0, color: [40, 45, 240] }      
    ];

    if (normalizedYear <= colorStops[0].yearRatio) {
        return 'rgb(' + colorStops[0].color.join(',') + ')';
    }
    if (normalizedYear >= colorStops[colorStops.length - 1].yearRatio) {
        return 'rgb(' + colorStops[colorStops.length - 1].color.join(',') + ')';
    }

    for (let i = 0; i < colorStops.length - 1; i++) {
        const stop1 = colorStops[i];
        const stop2 = colorStops[i + 1];

        if (normalizedYear >= stop1.yearRatio && normalizedYear < stop2.yearRatio) {
            const factor = (normalizedYear - stop1.yearRatio) / (stop2.yearRatio - stop1.yearRatio);
            return interpolateColor(stop1.color, stop2.color, factor);
        }
    }
    return '#333333'; // Fallback default color
}

// This helper function creates a style function for each layer.
// It wraps your original layer-specific style (e.g., style_Pre1800Roads)
// and applies visibility rules based on the feature's "Road Type" attribute and the current zoom level.
function createDynamicRoadStyle(layerBaseStyle) {
    return function(feature, resolution) {
        // Ensure 'map' is defined before trying to access its view
        if (!map) {
            console.warn("Map object is not defined. Cannot apply zoom-based styling.");
            // If map is not available, return the base style without zoom/type checks
            return typeof layerBaseStyle === 'function' ? layerBaseStyle(feature, resolution) : layerBaseStyle;
        }

        const roadType = feature.get('Road Type'); // Get the "Road Type" attribute from the feature
        const currentZoom = map.getView().getZoom();;

        let isVisible = false;

        // Define visibility rules based on "Road Type" and zoom thresholds
        // Adjust these zoom levels and road type strings to match your data and requirements
        switch (roadType) {
            case 'Highway':
                // Major roads visible from zoom level 6 and higher
                isVisible = currentZoom >= 7;
                break;
            case 'Freeway':
                // Freeway roads visible from zoom level 5 and higher
                isVisible = currentZoom >= 7;
                break;
            case 'Major Road':
                // Major roads visible from zoom level 8 and higher
                isVisible = currentZoom >= 9;
                break;
            case 'Minor Road':
                // Minor roads visible from zoom level 10 and higher
                isVisible = currentZoom >= 11;
                break;
            case 'RAMP':
                // RAMP roads visible from zoom level 12 and higher
                isVisible = currentZoom >= 12;
                break;
            case 'Collecting Residential Road':
                // Residential visible from zoom level 14 and higher
                isVisible = currentZoom >= 12;
                break;
                
            case 'Trunk Road':
                // Major roads visible from zoom level 6 and higher
                isVisible = currentZoom >= 9;
                break;
            case 'Neighborhood Road':
                // Missing roads might appear at higher zoom levels for detail
                isVisible = currentZoom >= 13;
                break;
            // Add more cases for other 'Road Type' values as needed
            default:
                // If 'Road Type' is unknown, not set, or doesn't match, hide by default
                isVisible = currentZoom >= 13;
                break;
        }
        const roadAdd = feature.get('First Seen');
        const roadRemove = feature.set('Last Seen')
        
        let featureYear = null;
        if(isVisible && roadAdd){
            featureYear = new Date(roadAdd).getFullYear();
            isVisible =   featureYear >= filterMinYear && featureYear <= filterMaxYear;
            if(isVisible && roadRemove){
                var removeYear =new Date(roadRemove).getFullYear()
                isVisible =  removeYear >= filterMinYear && removeYear <= filterMaxYear;

            }

        }
        if (isVisible) {
             // Get the base style
            let style = typeof layerBaseStyle === 'function' ? layerBaseStyle(feature, resolution) : layerBaseStyle;

            // Ensure style is an array of styles, or convert it to one
            let stylesArray = Array.isArray(style) ? style : [style];

            // Iterate over each style and modify the stroke color
            stylesArray.forEach(s => {
                let stroke = s.getStroke();
                if (stroke) {
                    if (featureYear !== null) {
                        const interpolatedColor = getColorForYear(featureYear, 1800, 2025);
                        stroke.setColor(interpolatedColor);
                    } else {
                        stroke.setColor('#333333'); // Default color if year is not available
                    }
                }
            });
            return stylesArray;
        } else {
            return null; // Hide the feature if it's not visible at the current zoom/road type
        }
    };
}

var lyr_OpenStreetmap_0 = new ol.layer.Tile({
    'title': 'Open Street map',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
        url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});

// Refactored: Reusable function for vector layer creation
function createVectorLayer(params) {
    const format = new ol.format.GeoJSON();
    const features = format.readFeatures(params.jsonData, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857'
    });
    const source = new ol.source.Vector({
        attributions: ' ',
    });
    source.addFeatures(features);
    return new ol.layer.Vector({
        declutter: false,
        source: source,
        style: params.style,
        popuplayertitle: params.popuplayertitle,
        interactive: true,
        title: params.title
    });
}

var lyr_FullRoads = createVectorLayer({
    jsonData: json_FullRoads,
    style: createDynamicRoadStyle(style_FullRoads),
    popuplayertitle: 'Road',
    title: 'Existing roads'
 });
var lyr_MissingRoads = createVectorLayer({
    jsonData: json_MissingRoads,
    style: createDynamicRoadStyle(style_2025MissingRoads),
    popuplayertitle: 'Road',
    title: 'Missing roads'
 });

var group_RoadsandRail = new ol.layer.Group({
    layers: [
        lyr_FullRoads, lyr_MissingRoads

    ],
    fold: 'open',
    title: 'Roads'
});
var group_Maps = new ol.layer.Group({
    layers: [lyr_OpenStreetmap_0,],
    fold: 'open',
    title: 'Maps'
});

lyr_OpenStreetmap_0.setVisible(true);


var layersList = [group_Maps,group_RoadsandRail];
// Ensure "Road Type" field alias is set for all road layers if it's new
lyr_FullRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type'});
lyr_FullRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', 'Road Type': 'Road Type'});
