var wms_layers = [];

// *** IMPORTANT: Ensure your 'map' object is accessible here. ***
// This variable MUST point to your actual ol.Map instance.
// For example, if your map is created as:
// var map = new ol.Map({ ... });
// Make sure 'map' is globally available or passed in.

var filterMinYear = 1770;
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


    const colorStops =[
    { yearRatio: 0.0, color: [10, 8, 0] },     
    { yearRatio: 0.28, color: [15, 95, 5] },   
    { yearRatio: 0.42, color: [180, 50, 10] }, 
    { yearRatio: 0.58, color: [154, 5, 50] },
    { yearRatio: 0.70, color: [195, 110, 60] },
    { yearRatio: 1, color: [240, 240, 40] }
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
function getRailColorForYear(year, minYear, maxYear) {
    // Normalize the year to a 0-1 range
    const normalizedYear = (year - minYear) / (maxYear - minYear);

    // Define your color stops (year percentage and corresponding RGB color)
    // You can add more color stops for more complex gradients
    const colorStops =[
{ yearRatio: 0.0, color: [80, 100, 0] },
    { yearRatio: 0.30, color: [120, 195, 0] }, // <-- Bright Lime Green Pop for focus area
    { yearRatio: 0.44, color: [80, 120, 60] },
    { yearRatio: 0.87, color: [50, 150, 150] },
    { yearRatio: 1, color: [0, 210, 255] } // <-- Bright Blue End
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
function createDynamicAnnexStyle(layerBaseStyle) {
    return function(feature, resolution) {
        // Ensure 'map' is defined before trying to access its view
        if (!map) {
            console.warn("Map object is not defined. Cannot apply zoom-based styling.");
            // If map is not available, return the base style without zoom/type checks
            return typeof layerBaseStyle === 'function' ? layerBaseStyle(feature, resolution) : layerBaseStyle;
        }
        const roadAdd = feature.get('effdate');


        let featureYear = null;
        if(roadAdd){
            featureYear = new Date(roadAdd).getFullYear();
            isVisible =   featureYear >= filterMinYear && featureYear <= filterMaxYear;
           

        }
        if (isVisible) {
             // Get the base style
            let style = typeof layerBaseStyle === 'function' ? layerBaseStyle(feature, resolution) : layerBaseStyle;

            // Ensure style is an array of styles, or convert it to one
            let stylesArray = Array.isArray(style) ? style : [style];
            return stylesArray;
        } else {
            return null; // Hide the feature if it's not visible at the current zoom/road type
        }
    };
}
// This helper function creates a style function for each layer.
// It wraps your original layer-specific style (e.g., style_Pre1800Roads)
// and applies visibility rules based on the feature's "Road Type" attribute and the current zoom level.
function createDynamicRailStyle(layerBaseStyle) {
    return function(feature, resolution) {
        // Ensure 'map' is defined before trying to access its view
        if (!map) {
            console.warn("Map object is not defined. Cannot apply zoom-based styling.");
            // If map is not available, return the base style without zoom/type checks
            return typeof layerBaseStyle === 'function' ? layerBaseStyle(feature, resolution) : layerBaseStyle;
        }

        const type = feature.get('type');
        const currentZoom = map.getView().getZoom();

        let isVisible = true;

        // Define visibility rules based on "Road Type" and zoom thresholds
        // Adjust these zoom levels and road type strings to match your data and requirements
        switch (type) {
            case 'Main':
                isVisible = currentZoom >= 6;

                break;
            default:
                isVisible = currentZoom >= 11.5;
                break;
        }
        const railAdd = feature.get('First Seen');
        const railRemove = feature.get('Last Seen')


        let featureYear = null;
        if(isVisible && railAdd){
            featureYear = new Date(railAdd).getFullYear();
            isVisible =   featureYear >= filterMinYear && featureYear <= filterMaxYear;
            if(isVisible && railRemove && !showAllMissingRoads){
                var removeYear =new Date(railRemove).getFullYear()
                isVisible =  removeYear >= filterMinYear && removeYear >= filterMaxYear;

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
                        const interpolatedColor = getRailColorForYear(featureYear, 1770, 2025);
                        stroke.setColor(interpolatedColor);
                    } else {
                        stroke.setColor('#ca82baff'); // Default color if year is not available
                    }
                    setRailWidthByClass(feature, stroke);
                }
            });
            return stylesArray;
        } else {
            return null; // Hide the feature if it's not visible at the current zoom/road type
        }
    };
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
                isVisible = currentZoom >= 8;
                break;
            case 'Major Road':
                // Major roads visible from zoom level 8 and higher
                isVisible = currentZoom >= 9;
                break;
            case 'Minor Road':
                // Minor roads visible from zoom level 10 and higher
                isVisible = currentZoom >= 10.75;
                break;
            case 'RAMP':
                // RAMP roads visible from zoom level 12 and higher
                isVisible = currentZoom >= 115;
                break;
            case 'Collecting Residential Road':
                // Residential visible from zoom level 14 and higher
                isVisible = currentZoom >= 11.25;
                break;
                
            case 'Trunk Road':
                // Major roads visible from zoom level 6 and higher
                isVisible = currentZoom >= 9.0;
                break;
            case 'Neighborhood Road':
                // Missing roads might appear at higher zoom levels for detail
                isVisible = currentZoom >= 12.15;
                break;
            // Add more cases for other 'Road Type' values as needed
            default:
                // If 'Road Type' is unknown, not set, or doesn't match, hide by default
                isVisible = currentZoom >= 12.5;
                break;
        }
        const roadAdd = feature.get('First Seen');
        const roadRemove = feature.get('Last Seen')

        if(feature.get('Name')=='Old Central Ave'){
            console.log("");
        }
        let featureYear = null;
        if(isVisible && roadAdd){
            featureYear = new Date(roadAdd).getFullYear();
            isVisible =   featureYear >= filterMinYear && featureYear <= filterMaxYear;
            if(isVisible && roadRemove && !showAllMissingRoads){
                var removeYear =new Date(roadRemove).getFullYear()
                isVisible =  removeYear >= filterMinYear && removeYear >= filterMaxYear;

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
                        const interpolatedColor = getColorForYear(featureYear, 1770, 2025);
                        stroke.setColor(interpolatedColor);
                        setWidthByClass(feature, stroke);
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

function setRailWidthByClass(feature, stroke){
        const roadType = feature.get('type'); // Get the "Road Type" attribute from the feature
            // Define visibility rules based on "Road Type" and zoom thresholds
        // Adjust these zoom levels and road type strings to match your data and requirements
        
        switch (roadType) {
            case 'Main':
                // Major roads visible from zoom level 6 and higher
                stroke.setWidth(4.5)
                break;
            // Add more cases for other 'Road Type' values as needed
            default:

                stroke.setWidth(2.2)
                break;
        }
}
function setWidthByClass(feature, stroke){
        const roadType = feature.get('Type'); // Get the "Road Type" attribute from the feature
            // Define visibility rules based on "Road Type" and zoom thresholds
        // Adjust these zoom levels and road type strings to match your data and requirements
        
        switch (roadType) {
            case 'Main':
                // Major roads visible from zoom level 6 and higher
                stroke.setWidth(6.77)

                break;
            case 'Freeway':
                // Freeway roads visible from zoom level 5 and higher
                stroke.setWidth(7)
                break;
            case 'Major Road':
                // Major roads visible from zoom level 8 and higher
                stroke.setWidth(5.3)
                break;
            case 'Minor Road':
                // Minor roads visible from zoom level 10 and higher
                stroke.setWidth(4.45)
                break;
            case 'RAMP':
                // RAMP roads visible from zoom level 12 and higher
                stroke.setWidth(2.95)
                break;
            case 'Collecting Residential Road':
                // Residential visible from zoom level 14 and higher
                stroke.setWidth(3.5)
                break;
                
            case 'Trunk Road':
                // Major roads visible from zoom level 6 and higher
                stroke.setWidth(5.6)
                break;
            case 'Neighborhood Road':
                // Missing roads might appear at higher zoom levels for detail
                
            // Add more cases for other 'Road Type' values as needed
            default:

                stroke.setWidth(2.9)
                break;
        }
}
var lyr_OpenStreetmap_0 = new ol.layer.Tile({
    'title': 'Open Street map',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
        url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});
var lyr_stadia = new ol.layer.Tile({
    'title': 'Base Map',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
        url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}@2x.png?api_key=ce03ba7c-01c6-4dc4-ad8f-05920d5c9bea'
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

var lyr_Roads = createVectorLayer({
    jsonData: json_FullRoads,
    style: createDynamicRoadStyle(style_FullRoads),
    popuplayertitle: 'Road',
    title: 'Existing roads'
 });
var lyr_MissingRoads = createVectorLayer({
    jsonData: json_MissingRoads,
    style: createDynamicRoadStyle(style_MissingRoads),
    popuplayertitle: 'Removed road',
    title: 'Missing roads'
 });
 var lyr_MissingRail = createVectorLayer({
    jsonData: json_MissingRail,
    style: createDynamicRailStyle(style_MissingRail),
    popuplayertitle: 'Removed Rail',
    title: 'Missing Rail'
 });
 var lyr_Rail = createVectorLayer({
    jsonData: json_Railroads,
    style: createDynamicRailStyle(style_Railroads),
    popuplayertitle: 'Rail',
    title: 'Railroads'
 });
var lyr_Annex = createVectorLayer({
    jsonData: json_Annexation_History,
    style: createDynamicAnnexStyle( style_Annexation_History),
    popuplayertitle: 'Annexation History',
    title: 'Annexation History'
})
var group_Roads = new ol.layer.Group({
    layers: [
        lyr_Roads, lyr_MissingRoads

    ],
    fold: 'open',
    title: 'Roads'
});
var group_Rail = new ol.layer.Group({
    layers: [
        lyr_Rail, lyr_MissingRail
    ],
    fold: 'open',
    title: 'Rail'
}) 

lyr_Annex.setOpacity(0.6)
lyr_OpenStreetmap_0.setVisible(true);
lyr_stadia.setVisible(true);


var layersList = [lyr_stadia,lyr_Annex,group_Rail,group_Roads];
// Ensure "Road Type" field alias is set for all road layers if it's new
//lyr_Sevensisters.set('fieldAliases', {'Name': 'Name', 'Year': 'Year', });
//lyr_Pointsofinterest.set('fieldAliases', {'Title': 'Title', 'Desc.': 'Desc.', 'Added by': 'Added by', 'Date': 'Date', 'Source': 'Source', 'id': 'id', });
lyr_MissingRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', 'Road Type': 'Road Type', });
lyr_Roads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type', });
lyr_Rail.set('fieldAliases', {'operator':'Operator','First Seen': 'First Seen', 'type':'Type', 'operator': 'Operator' });
lyr_MissingRail.set('fieldAliases', {'First Seen': 'First Seen', 'Last Seen': 'Last Seen',  });
lyr_Annex.set('fieldAliases', {'effdate': 'Annexation Date', 'munic_name': 'Name', });
//lyr_Pointsofinterest.set('fieldImages', {'Title': 'TextEdit', 'Desc.': 'TextEdit', 'Added by': 'TextEdit', 'Date': 'DateTime', 'Source': 'TextEdit', 'id': 'TextEdit', });
lyr_MissingRoads.set('fieldImages', {'First Seen': 'DateTime', 'Last Seen': 'DateTime', 'Name': 'TextEdit', 'Road Type': '', });
lyr_Roads.set('fieldImages', {'First Seen': 'DateTime', 'Name': 'TextEdit', 'Road Type': 'TextEdit', });
lyr_MissingRail.set('fieldImages', {'First Seen': 'DateTime',  'Last Seen': 'DateTime', 'type': 'TextEdit', });
lyr_Rail.set('fieldImages', {'First Seen': 'DateTime',  'operator': 'TextEdit','type': 'TextEdit', });
lyr_Annex.set('fieldImages',{'munic_name':'TextEdit','effdate': 'DateTime'})
//lyr_Sevensisters.set('fieldLabels', {'Name': 'inline label - visible with data', 'Year': 'inline label - visible with data', });
//lyr_Pointsofinterest.set('fieldLabels', {'Title': 'inline label - visible with data', 'Desc.': 'inline label - visible with data', 'Added by': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Source': 'inline label - visible with data', 'id': 'inline label - visible with data', });
lyr_MissingRoads.set('fieldLabels', {'First Seen': 'inline label - visible with data',  'Last Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data','Road Type': 'inline label - visible with data', });
lyr_Roads.set('fieldLabels', {'First Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Road Type': 'inline label - visible with data', });
lyr_MissingRail.set('fieldLabels', {'First Seen': 'inline label - visible with data', 'Last Seen': 'inline label - visible with data', 'type': 'inline label - visible with data' });
lyr_MissingRail.set('fieldLabels', {'effdate': 'inline label - visible with data', 'munic_name': 'inline label - visible with data' });
lyr_Rail.set('fieldLabels', {'First Seen': 'inline label - visible with data', 'type': 'inline label - visible with data','operator': 'inline label - visible with data' });
lyr_Annex.set('fieldLabels', {'munic_name': 'inline label - visible with data', 'effdate': 'inline label - visible with data'});
lyr_Roads.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
lyr_Rail.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
