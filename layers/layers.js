var wms_layers = [];


        var lyr_OpenStreetmap_0 = new ol.layer.Tile({
            'title': 'Open Street map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pre1800MissingRoads_1 = new ol.format.GeoJSON();
var features_Pre1800MissingRoads_1 = format_Pre1800MissingRoads_1.readFeatures(json_Pre1800MissingRoads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pre1800MissingRoads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pre1800MissingRoads_1.addFeatures(features_Pre1800MissingRoads_1);
var lyr_Pre1800MissingRoads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pre1800MissingRoads_1, 
                style: style_Pre1800MissingRoads_1,
                popuplayertitle: 'Pre 1800 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/Pre1800MissingRoads_1.png" /> Pre 1800 Missing Roads'
            });
var format_Sevensisters_2 = new ol.format.GeoJSON();
var features_Sevensisters_2 = format_Sevensisters_2.readFeatures(json_Sevensisters_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sevensisters_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sevensisters_2.addFeatures(features_Sevensisters_2);
var lyr_Sevensisters_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sevensisters_2, 
                style: style_Sevensisters_2,
                popuplayertitle: 'Seven sisters',
                interactive: true,
                title: '<img src="styles/legend/Sevensisters_2.png" /> Seven sisters'
            });
var format_Pre1800Roads_3 = new ol.format.GeoJSON();
var features_Pre1800Roads_3 = format_Pre1800Roads_3.readFeatures(json_Pre1800Roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pre1800Roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pre1800Roads_3.addFeatures(features_Pre1800Roads_3);
var lyr_Pre1800Roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pre1800Roads_3, 
                style: style_Pre1800Roads_3,
                popuplayertitle: 'Pre 1800 Roads',
                interactive: true,
                title: '<img src="styles/legend/Pre1800Roads_3.png" /> Pre 1800 Roads'
            });
var format_18001860MissingRoads_4 = new ol.format.GeoJSON();
var features_18001860MissingRoads_4 = format_18001860MissingRoads_4.readFeatures(json_18001860MissingRoads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18001860MissingRoads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18001860MissingRoads_4.addFeatures(features_18001860MissingRoads_4);
var lyr_18001860MissingRoads_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18001860MissingRoads_4, 
                style: style_18001860MissingRoads_4,
                popuplayertitle: '1800-1860 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/18001860MissingRoads_4.png" /> 1800-1860 Missing Roads'
            });
var format_18001860_5 = new ol.format.GeoJSON();
var features_18001860_5 = format_18001860_5.readFeatures(json_18001860_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18001860_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18001860_5.addFeatures(features_18001860_5);
var lyr_18001860_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18001860_5, 
                style: style_18001860_5,
                popuplayertitle: '1800-1860',
                interactive: true,
                title: '<img src="styles/legend/18001860_5.png" /> 1800-1860'
            });
var format_18601880MissingRoads_6 = new ol.format.GeoJSON();
var features_18601880MissingRoads_6 = format_18601880MissingRoads_6.readFeatures(json_18601880MissingRoads_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18601880MissingRoads_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18601880MissingRoads_6.addFeatures(features_18601880MissingRoads_6);
var lyr_18601880MissingRoads_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18601880MissingRoads_6, 
                style: style_18601880MissingRoads_6,
                popuplayertitle: '1860-1880 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/18601880MissingRoads_6.png" /> 1860-1880 Missing Roads'
            });
var format_18801900MissingRoads_7 = new ol.format.GeoJSON();
var features_18801900MissingRoads_7 = format_18801900MissingRoads_7.readFeatures(json_18801900MissingRoads_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18801900MissingRoads_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18801900MissingRoads_7.addFeatures(features_18801900MissingRoads_7);
var lyr_18801900MissingRoads_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18801900MissingRoads_7, 
                style: style_18801900MissingRoads_7,
                popuplayertitle: '1880-1900 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/18801900MissingRoads_7.png" /> 1880-1900 Missing Roads'
            });
var format_18801900_8 = new ol.format.GeoJSON();
var features_18801900_8 = format_18801900_8.readFeatures(json_18801900_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18801900_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18801900_8.addFeatures(features_18801900_8);
var lyr_18801900_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18801900_8, 
                style: style_18801900_8,
                popuplayertitle: '1880-1900',
                interactive: true,
                title: '<img src="styles/legend/18801900_8.png" /> 1880-1900'
            });
var format_19001920MissingRoads_9 = new ol.format.GeoJSON();
var features_19001920MissingRoads_9 = format_19001920MissingRoads_9.readFeatures(json_19001920MissingRoads_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19001920MissingRoads_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19001920MissingRoads_9.addFeatures(features_19001920MissingRoads_9);
var lyr_19001920MissingRoads_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19001920MissingRoads_9, 
                style: style_19001920MissingRoads_9,
                popuplayertitle: '1900-1920 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/19001920MissingRoads_9.png" /> 1900-1920 Missing Roads'
            });
var format_19001920_10 = new ol.format.GeoJSON();
var features_19001920_10 = format_19001920_10.readFeatures(json_19001920_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19001920_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19001920_10.addFeatures(features_19001920_10);
var lyr_19001920_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19001920_10, 
                style: style_19001920_10,
                popuplayertitle: '1900-1920',
                interactive: true,
                title: '<img src="styles/legend/19001920_10.png" /> 1900-1920'
            });
var format_19201950MissingRoads_11 = new ol.format.GeoJSON();
var features_19201950MissingRoads_11 = format_19201950MissingRoads_11.readFeatures(json_19201950MissingRoads_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19201950MissingRoads_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19201950MissingRoads_11.addFeatures(features_19201950MissingRoads_11);
var lyr_19201950MissingRoads_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19201950MissingRoads_11, 
                style: style_19201950MissingRoads_11,
                popuplayertitle: '1920-1950 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/19201950MissingRoads_11.png" /> 1920-1950 Missing Roads'
            });
var format_19201950_12 = new ol.format.GeoJSON();
var features_19201950_12 = format_19201950_12.readFeatures(json_19201950_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19201950_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19201950_12.addFeatures(features_19201950_12);
var lyr_19201950_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19201950_12, 
                style: style_19201950_12,
                popuplayertitle: '1920-1950',
                interactive: true,
                title: '<img src="styles/legend/19201950_12.png" /> 1920-1950'
            });
var format_19501980_13 = new ol.format.GeoJSON();
var features_19501980_13 = format_19501980_13.readFeatures(json_19501980_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19501980_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19501980_13.addFeatures(features_19501980_13);
var lyr_19501980_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19501980_13, 
                style: style_19501980_13,
                popuplayertitle: '1950-1980',
                interactive: true,
                title: '<img src="styles/legend/19501980_13.png" /> 1950-1980'
            });
var format_19501980MissingRoads_14 = new ol.format.GeoJSON();
var features_19501980MissingRoads_14 = format_19501980MissingRoads_14.readFeatures(json_19501980MissingRoads_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19501980MissingRoads_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19501980MissingRoads_14.addFeatures(features_19501980MissingRoads_14);
var lyr_19501980MissingRoads_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19501980MissingRoads_14, 
                style: style_19501980MissingRoads_14,
                popuplayertitle: '1950-1980 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/19501980MissingRoads_14.png" /> 1950-1980 Missing Roads'
            });
var format_19801995_15 = new ol.format.GeoJSON();
var features_19801995_15 = format_19801995_15.readFeatures(json_19801995_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19801995_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19801995_15.addFeatures(features_19801995_15);
var lyr_19801995_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19801995_15, 
                style: style_19801995_15,
                popuplayertitle: '1980-1995',
                interactive: true,
                title: '<img src="styles/legend/19801995_15.png" /> 1980-1995'
            });
var format_Pointsofinterest_16 = new ol.format.GeoJSON();
var features_Pointsofinterest_16 = format_Pointsofinterest_16.readFeatures(json_Pointsofinterest_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointsofinterest_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointsofinterest_16.addFeatures(features_Pointsofinterest_16);
var lyr_Pointsofinterest_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pointsofinterest_16, 
                style: style_Pointsofinterest_16,
                popuplayertitle: 'Points of interest',
                interactive: true,
                title: '<img src="styles/legend/Pointsofinterest_16.png" /> Points of interest'
            });
var group_RoadsandRail = new ol.layer.Group({
                                layers: [lyr_Pre1800MissingRoads_1,lyr_Sevensisters_2,lyr_Pre1800Roads_3,lyr_18001860MissingRoads_4,lyr_18001860_5,lyr_18601880MissingRoads_6,lyr_18801900MissingRoads_7,lyr_18801900_8,lyr_19001920MissingRoads_9,lyr_19001920_10,lyr_19201950MissingRoads_11,lyr_19201950_12,lyr_19501980_13,lyr_19501980MissingRoads_14,lyr_19801995_15,lyr_Pointsofinterest_16,],
                                fold: 'open',
                                title: 'Roads and Rail'});
var group_TimeSlices = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Time Slices'});
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

lyr_OpenStreetmap_0.setVisible(true);lyr_Pre1800MissingRoads_1.setVisible(true);lyr_Sevensisters_2.setVisible(true);lyr_Pre1800Roads_3.setVisible(true);lyr_18001860MissingRoads_4.setVisible(true);lyr_18001860_5.setVisible(true);lyr_18601880MissingRoads_6.setVisible(true);lyr_18801900MissingRoads_7.setVisible(true);lyr_18801900_8.setVisible(true);lyr_19001920MissingRoads_9.setVisible(true);lyr_19001920_10.setVisible(true);lyr_19201950MissingRoads_11.setVisible(true);lyr_19201950_12.setVisible(true);lyr_19501980_13.setVisible(true);lyr_19501980MissingRoads_14.setVisible(true);lyr_19801995_15.setVisible(true);lyr_Pointsofinterest_16.setVisible(true);
var layersList = [group_Maps,group_RoadsandRail];
lyr_Pre1800MissingRoads_1.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_Sevensisters_2.set('fieldAliases', {'Name': 'Name', 'Year': 'Year', });
lyr_Pre1800Roads_3.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', });
lyr_18001860MissingRoads_4.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_18001860_5.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', });
lyr_18601880MissingRoads_6.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_18801900MissingRoads_7.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_18801900_8.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', });
lyr_19001920MissingRoads_9.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_19001920_10.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', });
lyr_19201950MissingRoads_11.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_19201950_12.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', });
lyr_19501980_13.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', });
lyr_19501980MissingRoads_14.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_19801995_15.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', });
lyr_Pointsofinterest_16.set('fieldAliases', {'Title': 'Title', 'Desc.': 'Desc.', 'Added by': 'Added by', 'Date': 'Date', 'Source': 'Source', 'id': 'id', });
lyr_Pre1800MissingRoads_1.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_Sevensisters_2.set('fieldImages', {'Name': 'TextEdit', 'Year': 'Range', });
lyr_Pre1800Roads_3.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', });
lyr_18001860MissingRoads_4.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_18001860_5.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', });
lyr_18601880MissingRoads_6.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_18801900MissingRoads_7.set('fieldImages', {'First Seen': 'DateTime', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_18801900_8.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', });
lyr_19001920MissingRoads_9.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_19001920_10.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', });
lyr_19201950MissingRoads_11.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_19201950_12.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', });
lyr_19501980_13.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', });
lyr_19501980MissingRoads_14.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_19801995_15.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', });
lyr_Pointsofinterest_16.set('fieldImages', {'Title': 'TextEdit', 'Desc.': 'TextEdit', 'Added by': 'TextEdit', 'Date': 'DateTime', 'Source': 'TextEdit', 'id': 'TextEdit', });
lyr_Pre1800MissingRoads_1.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', });
lyr_Sevensisters_2.set('fieldLabels', {'Name': 'no label', 'Year': 'no label', });
lyr_Pre1800Roads_3.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', });
lyr_18001860MissingRoads_4.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', });
lyr_18001860_5.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', });
lyr_18601880MissingRoads_6.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', });
lyr_18801900MissingRoads_7.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', });
lyr_18801900_8.set('fieldLabels', {'First Seen': 'no label', 'Name': 'inline label - always visible', });
lyr_19001920MissingRoads_9.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', });
lyr_19001920_10.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', });
lyr_19201950MissingRoads_11.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', });
lyr_19201950_12.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', });
lyr_19501980_13.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', });
lyr_19501980MissingRoads_14.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', });
lyr_19801995_15.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', });
lyr_Pointsofinterest_16.set('fieldLabels', {'Title': 'no label', 'Desc.': 'no label', 'Added by': 'no label', 'Date': 'no label', 'Source': 'no label', 'id': 'no label', });
lyr_Pointsofinterest_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});