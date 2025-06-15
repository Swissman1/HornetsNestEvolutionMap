var wms_layers = [];

// *** IMPORTANT: Ensure your 'map' object is accessible here. ***
// This variable MUST point to your actual ol.Map instance.
// For example, if your map is created as:
// var map = new ol.Map({ ... });
// Make sure 'map' is globally available or passed in.



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

        if (isVisible) {
            // If the feature is visible, return its original layer-specific style.
            // Check if layerBaseStyle is itself a function (for more complex QGIS-exported styles)
            if (typeof layerBaseStyle === 'function') {
                return layerBaseStyle(feature, resolution);
            }
            // Otherwise, assume it's a static style object
            return layerBaseStyle;
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

var lyr_Pre1800MissingRoads = createVectorLayer({
    jsonData: json_Pre1800MissingRoads,
    style: createDynamicRoadStyle(style_Pre1800MissingRoads),
    popuplayertitle: 'Pre 1800 Missing Roads',
    title: '<img src="styles/legend/Pre1800MissingRoads.png" /> Pre 1800 Missing Roads'
});

var lyr_Sevensisters = createVectorLayer({
    jsonData: json_Sevensisters,
    style: createDynamicRoadStyle(style_Sevensisters),
    popuplayertitle: 'Seven sisters',
    title: '<img src="styles/legend/Sevensisters.png" /> Seven sisters'
});

var lyr_Pre1800Roads = createVectorLayer({
    jsonData: json_Pre1800Roads,
    style: createDynamicRoadStyle(style_Pre1800Roads),
    popuplayertitle: 'Pre 1800 Roads',
    title: '<img src="styles/legend/Pre1800Roads.png" /> Pre 1800 Roads'
});

var lyr_18001860MissingRoads = createVectorLayer({
    jsonData: json_18001860MissingRoads,
    style: createDynamicRoadStyle(style_18001860MissingRoads),
    popuplayertitle: '1800-1860 Missing Roads',
    title: '<img src="styles/legend/18001860MissingRoads.png" /> 1800-1860 Missing Roads'
});

var lyr_18001860 = createVectorLayer({
    jsonData: json_18001860,
    style: createDynamicRoadStyle(style_18001860),
    popuplayertitle: '1800-1860',
    title: '<img src="styles/legend/18001860.png" /> 1800-1860'
});

var lyr_18601880MissingRoads = createVectorLayer({
    jsonData: json_18601880MissingRoads,
    style: createDynamicRoadStyle(style_18601880MissingRoads),
    popuplayertitle: '1860-1880 Missing Roads',
    title: '<img src="styles/legend/18601880MissingRoads.png" /> 1860-1880 Missing Roads'
});

var lyr_18801900MissingRoads = createVectorLayer({
    jsonData: json_18801900MissingRoads,
    style: createDynamicRoadStyle(style_18801900MissingRoads),
    popuplayertitle: '1880-1900 Missing Roads',
    title: '<img src="styles/legend/18801900MissingRoads.png" /> 1880-1900 Missing Roads'
});

var lyr_18801900 = createVectorLayer({
    jsonData: json_18801900,
    style: createDynamicRoadStyle(style_18801900),
    popuplayertitle: '1880-1900',
    title: '<img src="styles/legend/18801900.png" /> 1880-1900'
});

var lyr_19001920MissingRoads = createVectorLayer({
    jsonData: json_19001920MissingRoads,
    style: createDynamicRoadStyle(style_19001920MissingRoads),
    popuplayertitle: '1900-1920 Missing Roads',
    title: '<img src="styles/legend/19001920MissingRoads.png" /> 1900-1920 Missing Roads'
});

var lyr_19001920 = createVectorLayer({
    jsonData: json_19001920,
    style: createDynamicRoadStyle(style_19001920),
    popuplayertitle: '1900-1920',
    title: '<img src="styles/legend/19001920.png" /> 1900-1920'
});

var lyr_19201950MissingRoads = createVectorLayer({
    jsonData: json_19201950MissingRoads,
    style: createDynamicRoadStyle(style_19201950MissingRoads),
    popuplayertitle: '1920-1950 Missing Roads',
    title: '<img src="styles/legend/19201950MissingRoads.png" /> 1920-1950 Missing Roads'
});

var lyr_19201950 = createVectorLayer({
    jsonData: json_19201950,
    style: createDynamicRoadStyle(style_19201950),
    popuplayertitle: '1920-1950',
    title: '<img src="styles/legend/19201950.png" /> 1920-1950'
});

var lyr_19501980 = createVectorLayer({
    jsonData: json_19501980,
    style: createDynamicRoadStyle(style_19501980),
    popuplayertitle: '1950-1980',
    title: '<img src="styles/legend/19501980.png" /> 1950-1980'
});

var lyr_19501980MissingRoads = createVectorLayer({
    jsonData: json_19501980MissingRoads,
    style: createDynamicRoadStyle(style_19501980MissingRoads),
    popuplayertitle: '1950-1980 Missing Roads',
    title: '<img src="styles/legend/19501980MissingRoads.png" /> 1950-1980 Missing Roads'
});

var lyr_19801995 = createVectorLayer({
    jsonData: json_19801995,
    style: createDynamicRoadStyle(style_19801995),
    popuplayertitle: '1980-1995',
    title: '<img src="styles/legend/19801995.png" /> 1980-1995'
});
var lyr_19952025 = createVectorLayer({
    jsonData: json_19952025Roads,
    style: createDynamicRoadStyle(style_19952025),
    popuplayertitle: '1995-2025',
    title: '<img src="styles/legend/19952025Roads.png" /> 1995-2025'
});
// This layer might not have a "Road Type" attribute or needs different visibility rules.
// You might want to define a separate style function for it or keep its original style.
// For now, I'll assume it doesn't use the 'Road Type' logic, and if style_Pointsofinterest
// is a static style object, it will be applied always.
var lyr_Pointsofinterest = createVectorLayer({
    jsonData: json_Pointsofinterest,
    style: style_Pointsofinterest, // Assuming this layer does NOT use the 'Road Type' logic
    popuplayertitle: 'Points of interest',
    title: '<img src="styles/legend/Pointsofinterest.png" /> Points of interest'
});

var group_RoadsandRail = new ol.layer.Group({
    layers: [
        lyr_Pre1800MissingRoads,
        lyr_Sevensisters,
        lyr_Pre1800Roads,
        lyr_18001860MissingRoads,
        lyr_18001860,
        lyr_18601880MissingRoads,
        lyr_18801900MissingRoads,
        lyr_18801900,
        lyr_19001920MissingRoads,
        lyr_19001920,
        lyr_19201950MissingRoads,
        lyr_19201950,
        lyr_19501980,
        lyr_19501980MissingRoads,
        lyr_19801995,
        lyr_19952025,
        lyr_Pointsofinterest,
    ],
    fold: 'open',
    title: 'Roads and Rail'
});
var group_TimeSlices = new ol.layer.Group({
    layers: [],
    fold: 'open',
    title: 'Time Slices'
});
var group_1877 = new ol.layer.Group({
    layers: [],
    fold: 'open',
    title: '1877'
});
var group_1900 = new ol.layer.Group({
    layers: [],
    fold: 'open',
    title: '1900'
});
var group_1910 = new ol.layer.Group({
    layers: [],
    fold: 'open',
    title: '1910'
});
var group_Maps = new ol.layer.Group({
    layers: [lyr_OpenStreetmap_0,],
    fold: 'open',
    title: 'Maps'
});

lyr_OpenStreetmap_0.setVisible(true);
// Remove or comment out these individual layer setVisible calls,
// as feature visibility is now controlled by the style functions.
// lyr_Pre1800MissingRoads.setVisible(true);
// lyr_Sevensisters.setVisible(true);
// lyr_Pre1800Roads.setVisible(true);
// lyr_18001860MissingRoads.setVisible(true);
// lyr_18001860.setVisible(true);
// lyr_18601880MissingRoads.setVisible(true);
// lyr_18801900MissingRoads.setVisible(true);
// lyr_18801900.setVisible(true);
// lyr_19001920MissingRoads.setVisible(true);
// lyr_19001920.setVisible(true);
// lyr_19201950MissingRoads.setVisible(true);
// lyr_19201950.setVisible(true);
// lyr_19501980.setVisible(true);
// lyr_19501980MissingRoads.setVisible(true);
// lyr_19801995.setVisible(true);
lyr_Pointsofinterest.setVisible(true); // Keep POI visible if it doesn't use the road style function

var layersList = [group_Maps,group_RoadsandRail];
// Ensure "Road Type" field alias is set for all road layers if it's new
lyr_Pre1800MissingRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', 'Road Type': 'Road Type'});
lyr_Sevensisters.set('fieldAliases', {'Name': 'Name', 'Year': 'Year', 'Road Type': 'Road Type'});
lyr_Pre1800Roads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type'});
lyr_18001860MissingRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', 'Road Type': 'Road Type'});
lyr_18001860.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type'});
lyr_18601880MissingRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', 'Road Type': 'Road Type'});
lyr_18801900MissingRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', 'Road Type': 'Road Type'});
lyr_18801900.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type'});
lyr_19001920MissingRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', 'Road Type': 'Road Type'});
lyr_19001920.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type'});
lyr_19201950MissingRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', 'Road Type': 'Road Type'});
lyr_19201950.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type'});
lyr_19501980.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type'});
lyr_19501980MissingRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', 'Road Type': 'Road Type'});
lyr_19801995.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type'});
lyr_Pointsofinterest.set('fieldAliases', {'Title': 'Title', 'Desc.': 'Desc.', 'Added by': 'Added by', 'Date': 'Date', 'Source': 'Source', 'id': 'id', });

lyr_Pre1800MissingRoads.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', 'Road Type': 'TextEdit'});
lyr_Sevensisters.set('fieldImages', {'Name': 'TextEdit', 'Year': 'Range', 'Road Type': 'TextEdit'});
lyr_Pre1800Roads.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Road Type': 'TextEdit'});
lyr_18001860MissingRoads.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', 'Road Type': 'TextEdit'});
lyr_18001860.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Road Type': 'TextEdit'});
lyr_18601880MissingRoads.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', 'Road Type': 'TextEdit'});
lyr_18801900MissingRoads.set('fieldImages', {'First Seen': 'DateTime', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', 'Road Type': 'TextEdit'});
lyr_18801900.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Road Type': 'TextEdit'});
lyr_19001920MissingRoads.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', 'Road Type': 'TextEdit'});
lyr_19001920.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Road Type': 'TextEdit'});
lyr_19201950MissingRoads.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', 'Road Type': 'TextEdit'});
lyr_19201950.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Road Type': 'TextEdit'});
lyr_19501980.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Road Type': 'TextEdit'});
lyr_19501980MissingRoads.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', 'Road Type': 'TextEdit'});
lyr_19801995.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Road Type': 'TextEdit'});
lyr_Pointsofinterest.set('fieldImages', {'Title': 'TextEdit', 'Desc.': 'TextEdit', 'Added by': 'TextEdit', 'Date': 'DateTime', 'Source': 'TextEdit', 'id': 'TextEdit', });

lyr_Pre1800MissingRoads.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', 'Road Type': 'inline label'});
lyr_Sevensisters.set('fieldLabels', {'Name': 'no label', 'Year': 'no label', 'Road Type': 'inline label'});
lyr_Pre1800Roads.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Road Type': 'inline label'});
lyr_18001860MissingRoads.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', 'Road Type': 'inline label'});
lyr_18001860.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Road Type': 'inline label'});
lyr_18601880MissingRoads.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', 'Road Type': 'inline label'});
lyr_18801900MissingRoads.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', 'Road Type': 'inline label'});
lyr_18801900.set('fieldLabels', {'First Seen': 'no label', 'Name': 'inline label - always visible', 'Road Type': 'inline label'});
lyr_19001920MissingRoads.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', 'Road Type': 'inline label'});
lyr_19001920.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Road Type': 'inline label'});
lyr_19201950MissingRoads.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', 'Road Type': 'inline label'});
lyr_19201950.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Road Type': 'inline label'});
lyr_19501980.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Road Type': 'inline label'});
lyr_19501980MissingRoads.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', 'Road Type': 'inline label'});
lyr_19801995.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Road Type': 'inline label'});
lyr_Pointsofinterest.set('fieldLabels', {'Title': 'no label', 'Desc.': 'no label', 'Added by': 'no label', 'Date': 'no label', 'Source': 'no label', 'id': 'no label', });
lyr_Pointsofinterest.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});