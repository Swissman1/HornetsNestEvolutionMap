var wms_layers = [];


        var lyr_OpenStreetmap = new ol.layer.Tile({
            'title': 'Open Street map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sevensisters = new ol.format.GeoJSON();
var features_Sevensisters = format_Sevensisters.readFeatures(json_Sevensisters, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sevensisters = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sevensisters.addFeatures(features_Sevensisters);
var lyr_Sevensisters = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sevensisters, 
                style: style_Sevensisters,
                popuplayertitle: 'Seven sisters',
                interactive: true,
                title: '<img src="styles/legend/Sevensisters.png" /> Seven sisters'
            });
var format_Pre1800Roads = new ol.format.GeoJSON();
var features_Pre1800Roads = format_Pre1800Roads.readFeatures(json_Pre1800Roads, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pre1800Roads = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pre1800Roads.addFeatures(features_Pre1800Roads);
var lyr_Pre1800Roads = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pre1800Roads, 
                style: style_Pre1800Roads,
                popuplayertitle: 'Pre 1800 Roads',
                interactive: true,
                title: '<img src="styles/legend/Pre1800Roads.png" /> Pre 1800 Roads'
            });
var format_Pre1800MissingRoads = new ol.format.GeoJSON();
var features_Pre1800MissingRoads = format_Pre1800MissingRoads.readFeatures(json_Pre1800MissingRoads, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pre1800MissingRoads = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pre1800MissingRoads.addFeatures(features_Pre1800MissingRoads);
var lyr_Pre1800MissingRoads = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pre1800MissingRoads, 
                style: style_Pre1800MissingRoads,
                popuplayertitle: 'Pre 1800 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/Pre1800MissingRoads.png" /> Pre 1800 Missing Roads'
            });
var format_18001860MissingRoads = new ol.format.GeoJSON();
var features_18001860MissingRoads = format_18001860MissingRoads.readFeatures(json_18001860MissingRoads, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18001860MissingRoads = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18001860MissingRoads.addFeatures(features_18001860MissingRoads);
var lyr_18001860MissingRoads = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18001860MissingRoads, 
                style: style_18001860MissingRoads,
                popuplayertitle: '1800-1860 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/18001860MissingRoads.png" /> 1800-1860 Missing Roads'
            });
var format_18001860 = new ol.format.GeoJSON();
var features_18001860 = format_18001860.readFeatures(json_18001860, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18001860 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18001860.addFeatures(features_18001860);
var lyr_18001860 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18001860, 
                style: style_18001860,
                popuplayertitle: '1800-1860',
                interactive: true,
                title: '<img src="styles/legend/18001860.png" /> 1800-1860'
            });
var format_18601880MissingRoads = new ol.format.GeoJSON();
var features_18601880MissingRoads = format_18601880MissingRoads.readFeatures(json_18601880MissingRoads, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18601880MissingRoads = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18601880MissingRoads.addFeatures(features_18601880MissingRoads);
var lyr_18601880MissingRoads = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18601880MissingRoads, 
                style: style_18601880MissingRoads,
                popuplayertitle: '1860-1880 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/18601880MissingRoads.png" /> 1860-1880 Missing Roads'
            });
var format_18801900MissingRoads = new ol.format.GeoJSON();
var features_18801900MissingRoads = format_18801900MissingRoads.readFeatures(json_18801900MissingRoads, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18801900MissingRoads = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18801900MissingRoads.addFeatures(features_18801900MissingRoads);
var lyr_18801900MissingRoads = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18801900MissingRoads, 
                style: style_18801900MissingRoads,
                popuplayertitle: '1880-1900 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/18801900MissingRoads.png" /> 1880-1900 Missing Roads'
            });
var format_18801900 = new ol.format.GeoJSON();
var features_18801900 = format_18801900.readFeatures(json_18801900, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18801900 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18801900.addFeatures(features_18801900);
var lyr_18801900 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18801900, 
                style: style_18801900,
                popuplayertitle: '1880-1900',
                interactive: true,
                title: '<img src="styles/legend/18801900.png" /> 1880-1900'
            });
var format_19001920MissingRoads = new ol.format.GeoJSON();
var features_19001920MissingRoads = format_19001920MissingRoads.readFeatures(json_19001920MissingRoads, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19001920MissingRoads = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19001920MissingRoads.addFeatures(features_19001920MissingRoads);
var lyr_19001920MissingRoads = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19001920MissingRoads, 
                style: style_19001920MissingRoads,
                popuplayertitle: '1900-1920 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/19001920MissingRoads.png" /> 1900-1920 Missing Roads'
            });
var format_19001920 = new ol.format.GeoJSON();
var features_19001920 = format_19001920.readFeatures(json_19001920, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19001920 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19001920.addFeatures(features_19001920);
var lyr_19001920 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19001920, 
                style: style_19001920,
                popuplayertitle: '1900-1920',
                interactive: true,
                title: '<img src="styles/legend/19001920.png" /> 1900-1920'
            });
var format_19201950MissingRoads = new ol.format.GeoJSON();
var features_19201950MissingRoads = format_19201950MissingRoads.readFeatures(json_19201950MissingRoads, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19201950MissingRoads = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19201950MissingRoads.addFeatures(features_19201950MissingRoads);
var lyr_19201950MissingRoads = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19201950MissingRoads, 
                style: style_19201950MissingRoads,
                popuplayertitle: '1920-1950 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/19201950MissingRoads.png" /> 1920-1950 Missing Roads'
            });
var format_19201950 = new ol.format.GeoJSON();
var features_19201950 = format_19201950.readFeatures(json_19201950, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19201950 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19201950.addFeatures(features_19201950);
var lyr_19201950 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19201950, 
                style: style_19201950,
                popuplayertitle: '1920-1950',
                interactive: true,
                title: '<img src="styles/legend/19201950.png" /> 1920-1950'
            });
var format_19501980 = new ol.format.GeoJSON();
var features_19501980 = format_19501980.readFeatures(json_19501980, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19501980 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19501980.addFeatures(features_19501980);
var lyr_19501980 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19501980, 
                style: style_19501980,
                popuplayertitle: '1950-1980',
                interactive: true,
                title: '<img src="styles/legend/19501980.png" /> 1950-1980'
            });
var format_19501980MissingRoads = new ol.format.GeoJSON();
var features_19501980MissingRoads = format_19501980MissingRoads.readFeatures(json_19501980MissingRoads, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19501980MissingRoads = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19501980MissingRoads.addFeatures(features_19501980MissingRoads);
var lyr_19501980MissingRoads = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19501980MissingRoads, 
                style: style_19501980MissingRoads,
                popuplayertitle: '1950-1980 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/19501980MissingRoads.png" /> 1950-1980 Missing Roads'
            });
var format_19801995 = new ol.format.GeoJSON();
var features_19801995 = format_19801995.readFeatures(json_19801995, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19801995 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19801995.addFeatures(features_19801995);
var lyr_19801995 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19801995, 
                style: style_19801995,
                popuplayertitle: '1980-1995',
                interactive: true,
                title: '<img src="styles/legend/19801995.png" /> 1980-1995'
            });
var format_Pointsofinterest = new ol.format.GeoJSON();
var features_Pointsofinterest = format_Pointsofinterest.readFeatures(json_Pointsofinterest, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointsofinterest = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointsofinterest.addFeatures(features_Pointsofinterest);
var lyr_Pointsofinterest = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pointsofinterest, 
                style: style_Pointsofinterest,
                popuplayertitle: 'Points of interest',
                interactive: true,
                title: '<img src="styles/legend/Pointsofinterest.png" /> Points of interest'
            });
var format_19952025Roads = new ol.format.GeoJSON();
var features_19952025Roads = format_19952025Roads.readFeatures(json_19952025Roads, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19952025Roads = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19952025Roads.addFeatures(features_19952025Roads);
var lyr_19952025Roads = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19952025Roads, 
                style: style_19952025Roads,
                popuplayertitle: '1995-2025 Roads',
                interactive: true,
                title: '1995-2025 Roads'
            });
var group_RoadsandRail = new ol.layer.Group({
                                layers: [lyr_Sevensisters_1,lyr_Pre1800Roads_2,lyr_Pre1800MissingRoads_3,lyr_18001860MissingRoads_4,lyr_18001860_5,lyr_18601880MissingRoads_6,lyr_18801900MissingRoads_7,lyr_18801900_8,lyr_19001920MissingRoads_9,lyr_19001920_10,lyr_19201950MissingRoads_11,lyr_19201950_12,lyr_19501980_13,lyr_19501980MissingRoads_14,lyr_19801995_15,lyr_Pointsofinterest_16,lyr_19952025Roads_17,],
                                fold: 'open',
                                title: 'Roads and Rail'});
var group_1877 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '1877'});
var group_1900 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '1900'});
var group_1910 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '1910'});
var group_Maps = new ol.layer.Group({
                                layers: [lyr_OpenStreetmap_0,],
                                fold: 'open',
                                title: 'Maps'});

lyr_OpenStreetmap.setVisible(true);lyr_Sevensisters.setVisible(true);lyr_Pre1800Roads.setVisible(true);lyr_Pre1800MissingRoads.setVisible(true);lyr_18001860MissingRoads.setVisible(true);lyr_18001860.setVisible(true);lyr_18601880MissingRoads.setVisible(true);lyr_18801900MissingRoads.setVisible(true);lyr_18801900.setVisible(true);lyr_19001920MissingRoads.setVisible(true);lyr_19001920.setVisible(true);lyr_19201950MissingRoads.setVisible(true);lyr_19201950.setVisible(true);lyr_19501980.setVisible(true);lyr_19501980MissingRoads.setVisible(true);lyr_19801995.setVisible(true);lyr_Pointsofinterest.setVisible(true);lyr_19952025Roads.setVisible(true);
var layersList = [group_Maps,group_RoadsandRail];
lyr_Sevensisters.set('fieldAliases', {'Name': 'Name', 'Year': 'Year', });
lyr_Pre1800Roads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type', });
lyr_Pre1800MissingRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_18001860MissingRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_18001860.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type', });
lyr_18601880MissingRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_18801900MissingRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_18801900.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type', });
lyr_19001920MissingRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_19001920.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type', });
lyr_19201950MissingRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_19201950.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type', });
lyr_19501980.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type', });
lyr_19501980MissingRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_19801995.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type', });
lyr_Pointsofinterest.set('fieldAliases', {'Title': 'Title', 'Desc.': 'Desc.', 'Added by': 'Added by', 'Date': 'Date', 'Source': 'Source', 'id': 'id', });
lyr_19952025Roads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type', });
lyr_Sevensisters.set('fieldImages', {'Name': 'TextEdit', 'Year': 'Range', });
lyr_Pre1800Roads.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Road Type': '', });
lyr_Pre1800MissingRoads.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_18001860MissingRoads.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_18001860.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Road Type': 'TextEdit', });
lyr_18601880MissingRoads.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_18801900MissingRoads.set('fieldImages', {'First Seen': 'DateTime', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_18801900.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Road Type': 'TextEdit', });
lyr_19001920MissingRoads.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_19001920.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Road Type': 'TextEdit', });
lyr_19201950MissingRoads.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_19201950.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Road Type': 'TextEdit', });
lyr_19501980.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Road Type': 'TextEdit', });
lyr_19501980MissingRoads.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_19801995.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Road Type': 'TextEdit', });
lyr_Pointsofinterest.set('fieldImages', {'Title': 'TextEdit', 'Desc.': 'TextEdit', 'Added by': 'TextEdit', 'Date': 'DateTime', 'Source': 'TextEdit', 'id': 'TextEdit', });
lyr_19952025Roads.set('fieldImages', {'First Seen': 'DateTime', 'Name': 'TextEdit', 'Road Type': 'TextEdit', });
lyr_Sevensisters.set('fieldLabels', {'Name': 'inline label - visible with data', 'Year': 'inline label - visible with data', });
lyr_Pre1800Roads.set('fieldLabels', {'First Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Road Type': 'inline label - visible with data', });
lyr_Pre1800MissingRoads.set('fieldLabels', {'First Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Last Seen': 'inline label - visible with data', });
lyr_18001860MissingRoads.set('fieldLabels', {'First Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Last Seen': 'inline label - visible with data', });
lyr_18001860.set('fieldLabels', {'First Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Road Type': 'inline label - visible with data', });
lyr_18601880MissingRoads.set('fieldLabels', {'First Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Last Seen': 'inline label - visible with data', });
lyr_18801900MissingRoads.set('fieldLabels', {'First Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Last Seen': 'inline label - visible with data', });
lyr_18801900.set('fieldLabels', {'First Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Road Type': 'no label', });
lyr_19001920MissingRoads.set('fieldLabels', {'First Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Last Seen': 'inline label - visible with data', });
lyr_19001920.set('fieldLabels', {'First Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Road Type': 'no label', });
lyr_19201950MissingRoads.set('fieldLabels', {'First Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Last Seen': 'inline label - visible with data', });
lyr_19201950.set('fieldLabels', {'First Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Road Type': 'inline label - visible with data', });
lyr_19501980.set('fieldLabels', {'First Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Road Type': 'inline label - visible with data', });
lyr_19501980MissingRoads.set('fieldLabels', {'First Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Last Seen': 'inline label - visible with data', });
lyr_19801995.set('fieldLabels', {'First Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Road Type': 'inline label - visible with data', });
lyr_Pointsofinterest.set('fieldLabels', {'Title': 'no label', 'Desc.': 'no label', 'Added by': 'no label', 'Date': 'no label', 'Source': 'no label', 'id': 'no label', });
lyr_19952025Roads.set('fieldLabels', {'First Seen': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Road Type': 'inline label - visible with data', });
lyr_19952025Roads.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});