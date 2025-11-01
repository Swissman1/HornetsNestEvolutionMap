function interpolateColor(color1, color2, factor) {
    let result = color1.slice(); // Create a copy
    for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - result[i]));
    }
    return 'rgb(' + result.join(',') + ')';
}
function getColorForYear(year, thresYear) {


    // Define your color stops (year percentage and corresponding RGB color)
    // You can add more color stops for more complex gradients
    const newColor = [150,180,50];
    const colorStops = [
        { yearRatio: 0.0, color: [10, 3, 106] },         
        //{ yearRatio: 0.16, color: [30, 20, 205] },    
        //{ yearRatio: 0.35, color: [206, 120, 0] },    
        
        {yearRatio: 0.59, color: [154,15,51]},
        //{yearRatio: 0.64, color: [74,58,26]},
       
        //{yearRatio: 0.76, color: [190,69,163]},
        //{ yearRatio: 0.87, color: [243, 140, 0] },
        
        {yearRatio: 1, color: [172,190,5]}  
    ]; 

    if (year > thresYear) {
        return 'rgb(' +newColor.join(',') + ')';
    }


    return '#1a50a1ff'; // Fallback default color
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
function createDynamicRoadStyle(layerBaseStyle) {
    return function(feature, resolution) {
        // Ensure 'map' is defined before trying to access its view
        if (!map) {
            console.warn("Map object is not defined. Cannot apply zoom-based styling.");
            // If map is not available, return the base style without zoom/type checks
            return typeof layerBaseStyle === 'function' ? layerBaseStyle(feature, resolution) : layerBaseStyle;
        }
        if(!cullFactor){
            cullFactor =1
        }
        const roadType = feature.get('Road Type'); // Get the "Road Type" attribute from the feature
        const currentZoom = map.getView().getZoom();;

        let isVisible = false;

        // Define visibility rules based on "Road Type" and zoom thresholds
        // Adjust these zoom levels and road type strings to match your data and requirements
        switch (roadType) {
            case 'Highway':
                // Major roads visible from zoom level 6 and higher
                isVisible = currentZoom >= 7*cullFactor;

                break;
            case 'Freeway':
                // Freeway roads visible from zoom level 5 and higher
                isVisible = currentZoom >= 8*cullFactor;
                break;
            case 'Major Road':
                // Major roads visible from zoom level 8 and higher
                isVisible = currentZoom >= 9*cullFactor;
                break;
            case 'Minor Road':
                // Minor roads visible from zoom level 10 and higher
                isVisible = currentZoom >= 10.75*cullFactor;
                break;
            case 'RAMP':
                // RAMP roads visible from zoom level 12 and higher
                isVisible = currentZoom >= 11.5*cullFactor;
                break;
            case 'Collecting Residential Road':
                // Residential visible from zoom level 14 and higher
                isVisible = currentZoom >= 11.25*cullFactor;
                break;
                
            case 'Trunk Road':
                // Major roads visible from zoom level 6 and higher
                isVisible = currentZoom >= 9.0*cullFactor;
                break;
            case 'Neighborhood Road':
                // Missing roads might appear at higher zoom levels for detail
                isVisible = currentZoom >= 12.15*cullFactor;
                break;
            // Add more cases for other 'Road Type' values as needed
            default:
                // If 'Road Type' is unknown, not set, or doesn't match, hide by default
                isVisible = currentZoom >= 12.5*cullFactor;
                break;
        }
        const roadAdd = feature.get('First Seen');

        if(feature.get('Name')=='Old Central Ave'){
            console.log("");
        }
        let featureYear = null;
    
        if (isVisible) {
             // Get the base style
            featureYear = new Date(roadAdd).getFullYear();
            let style = typeof layerBaseStyle === 'function' ? layerBaseStyle(feature, resolution) : layerBaseStyle;

            // Ensure style is an array of styles, or convert it to one
            let stylesArray = Array.isArray(style) ? style : [style];

            // Iterate over each style and modify the stroke color
            stylesArray.forEach(s => {
                let stroke = s.getStroke();
                if (stroke) {
                    if (featureYear !== null) {
                        const interpolatedColor = getColorForYear(featureYear, lastYear );
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

function setWidthByClass(feature, stroke){
        const roadType = feature.get('Road Type'); // Get the "Road Type" attribute from the feature
            // Define visibility rules based on "Road Type" and zoom thresholds
        // Adjust these zoom levels and road type strings to match your data and requirements
        
        switch (roadType) {
            case 'Highway':
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
                stroke.setWidth(2.9)
                break;
            // Add more cases for other 'Road Type' values as needed
            default:

                
                break;
        }
}
var lyr_OpenStreetmap = new ol.layer.Tile({
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

var lyr_Roads = createVectorLayer({
    jsonData: json_Roads,
    style: createDynamicRoadStyle(style_Roads),
    popuplayertitle: 'Road',
    title: 'Existing roads'
 });
var lyr_MissingRoads = createVectorLayer({
    jsonData: json_MissingRoads,
    style: createDynamicRoadStyle(style_MissingRoads),
    popuplayertitle: 'Road',
    title: 'Missing roads'
 });
/*var lyr_Annex = createVectorLayer({
    jsonData: json_Annexation_History,
    style: createDynamicAnnexStyle( style_Annexation_History),
    popuplayertitle: 'Annexation History',
    title: 'Annexation History'
})*/
var group_RoadsandRail = new ol.layer.Group({
    layers: [
        lyr_Roads, lyr_MissingRoads

    ],
    fold: 'open',
    title: 'Roads'
});

//lyr_Annex.setOpacity(0.6)
lyr_OpenStreetmap.setVisible(true);


var layersList = [lyr_OpenStreetmap,group_RoadsandRail];
    //lyr_Annex,group_RoadsandRail];
// Ensure "Road Type" field alias is set for all road layers if it's new
//lyr_Sevensisters.set('fieldAliases', {'Name': 'Name', 'Year': 'Year', });
//lyr_Pointsofinterest.set('fieldAliases', {'Title': 'Title', 'Desc.': 'Desc.', 'Added by': 'Added by', 'Date': 'Date', 'Source': 'Source', 'id': 'id', });
lyr_MissingRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', 'Road Type': 'Road Type', });
lyr_Roads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type', });
//lyr_Sevensisters.set('fieldImages', {'Name': 'TextEdit', 'Year': 'Range', });
//lyr_Pointsofinterest.set('fieldImages', {'Title': 'TextEdit', 'Desc.': 'TextEdit', 'Added by': 'TextEdit', 'Date': 'DateTime', 'Source': 'TextEdit', 'id': 'TextEdit', });
lyr_MissingRoads.set('fieldImages', {'First Seen': 'DateTime', 'Name': 'TextEdit', 'Last Seen': 'DateTime', 'Road Type': '', });
lyr_Roads.set('fieldImages', {'First Seen': 'DateTime', 'Name': 'TextEdit', 'Road Type': 'TextEdit', });
//lyr_Sevensisters.set('fieldLabels', {'Name': 'inline label - visible with data', 'Year': 'inline label - visible with data', });
//lyr_Pointsofinterest.set('fieldLabels', {'Title': 'no label', 'Desc.': 'no label', 'Added by': 'no label', 'Date': 'no label', 'Source': 'no label', 'id': 'no label', });
lyr_MissingRoads.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', 'Road Type': 'no label', });
lyr_Roads.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Road Type': 'no label', });
lyr_Roads.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
