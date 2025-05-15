var wms_layers = [];


        var lyr_OpenStreetmap_0 = new ol.layer.Tile({
            'title': 'Open Street map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_18001850Roads_1 = new ol.format.GeoJSON();
var features_18001850Roads_1 = format_18001850Roads_1.readFeatures(json_18001850Roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18001850Roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18001850Roads_1.addFeatures(features_18001850Roads_1);
var lyr_18001850Roads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18001850Roads_1, 
                style: style_18001850Roads_1,
                popuplayertitle: '1800-1850 Roads',
                interactive: true,
                title: '<img src="styles/legend/18001850Roads_1.png" /> 1800-1850 Roads'
            });
var format_Pre1800MissingRoads_2 = new ol.format.GeoJSON();
var features_Pre1800MissingRoads_2 = format_Pre1800MissingRoads_2.readFeatures(json_Pre1800MissingRoads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pre1800MissingRoads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pre1800MissingRoads_2.addFeatures(features_Pre1800MissingRoads_2);
var lyr_Pre1800MissingRoads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pre1800MissingRoads_2, 
                style: style_Pre1800MissingRoads_2,
                popuplayertitle: 'Pre 1800 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/Pre1800MissingRoads_2.png" /> Pre 1800 Missing Roads'
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
var format_18001850MissingRoads_4 = new ol.format.GeoJSON();
var features_18001850MissingRoads_4 = format_18001850MissingRoads_4.readFeatures(json_18001850MissingRoads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18001850MissingRoads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18001850MissingRoads_4.addFeatures(features_18001850MissingRoads_4);
var lyr_18001850MissingRoads_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18001850MissingRoads_4, 
                style: style_18001850MissingRoads_4,
                popuplayertitle: '1800-1850 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/18001850MissingRoads_4.png" /> 1800-1850 Missing Roads'
            });
var format_18501880Roads_5 = new ol.format.GeoJSON();
var features_18501880Roads_5 = format_18501880Roads_5.readFeatures(json_18501880Roads_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18501880Roads_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18501880Roads_5.addFeatures(features_18501880Roads_5);
var lyr_18501880Roads_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18501880Roads_5, 
                style: style_18501880Roads_5,
                popuplayertitle: '1850-1880 Roads',
                interactive: true,
                title: '<img src="styles/legend/18501880Roads_5.png" /> 1850-1880 Roads'
            });
var format_18501880MissingRoads_6 = new ol.format.GeoJSON();
var features_18501880MissingRoads_6 = format_18501880MissingRoads_6.readFeatures(json_18501880MissingRoads_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18501880MissingRoads_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18501880MissingRoads_6.addFeatures(features_18501880MissingRoads_6);
var lyr_18501880MissingRoads_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18501880MissingRoads_6, 
                style: style_18501880MissingRoads_6,
                popuplayertitle: '1850-1880 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/18501880MissingRoads_6.png" /> 1850-1880 Missing Roads'
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
var format_18801900Roads_8 = new ol.format.GeoJSON();
var features_18801900Roads_8 = format_18801900Roads_8.readFeatures(json_18801900Roads_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18801900Roads_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18801900Roads_8.addFeatures(features_18801900Roads_8);
var lyr_18801900Roads_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18801900Roads_8, 
                style: style_18801900Roads_8,
                popuplayertitle: '1880-1900 Roads',
                interactive: true,
                title: '<img src="styles/legend/18801900Roads_8.png" /> 1880-1900 Roads'
            });
var format_19001910Roads_9 = new ol.format.GeoJSON();
var features_19001910Roads_9 = format_19001910Roads_9.readFeatures(json_19001910Roads_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19001910Roads_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19001910Roads_9.addFeatures(features_19001910Roads_9);
var lyr_19001910Roads_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19001910Roads_9, 
                style: style_19001910Roads_9,
                popuplayertitle: '1900-1910 Roads',
                interactive: true,
                title: '<img src="styles/legend/19001910Roads_9.png" /> 1900-1910 Roads'
            });
var format_19001910MissingRoads_10 = new ol.format.GeoJSON();
var features_19001910MissingRoads_10 = format_19001910MissingRoads_10.readFeatures(json_19001910MissingRoads_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19001910MissingRoads_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19001910MissingRoads_10.addFeatures(features_19001910MissingRoads_10);
var lyr_19001910MissingRoads_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19001910MissingRoads_10, 
                style: style_19001910MissingRoads_10,
                popuplayertitle: '1900-1910 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/19001910MissingRoads_10.png" /> 1900-1910 Missing Roads'
            });
var format_19101920Roads_11 = new ol.format.GeoJSON();
var features_19101920Roads_11 = format_19101920Roads_11.readFeatures(json_19101920Roads_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19101920Roads_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19101920Roads_11.addFeatures(features_19101920Roads_11);
var lyr_19101920Roads_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19101920Roads_11, 
                style: style_19101920Roads_11,
                popuplayertitle: '1910-1920 Roads',
                interactive: true,
                title: '<img src="styles/legend/19101920Roads_11.png" /> 1910-1920 Roads'
            });
var format_19101920MissingRoads_12 = new ol.format.GeoJSON();
var features_19101920MissingRoads_12 = format_19101920MissingRoads_12.readFeatures(json_19101920MissingRoads_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19101920MissingRoads_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19101920MissingRoads_12.addFeatures(features_19101920MissingRoads_12);
var lyr_19101920MissingRoads_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19101920MissingRoads_12, 
                style: style_19101920MissingRoads_12,
                popuplayertitle: '1910-1920 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/19101920MissingRoads_12.png" /> 1910-1920 Missing Roads'
            });
var group_RoadsandRail = new ol.layer.Group({
                                layers: [lyr_18001850Roads_1,lyr_Pre1800MissingRoads_2,lyr_Pre1800Roads_3,lyr_18001850MissingRoads_4,lyr_18501880Roads_5,lyr_18501880MissingRoads_6,lyr_18801900MissingRoads_7,lyr_18801900Roads_8,lyr_19001910Roads_9,lyr_19001910MissingRoads_10,lyr_19101920Roads_11,lyr_19101920MissingRoads_12,],
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

lyr_OpenStreetmap_0.setVisible(true);lyr_18001850Roads_1.setVisible(true);lyr_Pre1800MissingRoads_2.setVisible(true);lyr_Pre1800Roads_3.setVisible(true);lyr_18001850MissingRoads_4.setVisible(true);lyr_18501880Roads_5.setVisible(true);lyr_18501880MissingRoads_6.setVisible(true);lyr_18801900MissingRoads_7.setVisible(true);lyr_18801900Roads_8.setVisible(true);lyr_19001910Roads_9.setVisible(true);lyr_19001910MissingRoads_10.setVisible(true);lyr_19101920Roads_11.setVisible(true);lyr_19101920MissingRoads_12.setVisible(true);
var layersList = [group_Maps,group_RoadsandRail];
lyr_18001850Roads_1.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', });
lyr_Pre1800MissingRoads_2.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_Pre1800Roads_3.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', });
lyr_18001850MissingRoads_4.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_18501880Roads_5.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', });
lyr_18501880MissingRoads_6.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_18801900MissingRoads_7.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_18801900Roads_8.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', });
lyr_19001910Roads_9.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', });
lyr_19001910MissingRoads_10.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_19101920Roads_11.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', });
lyr_19101920MissingRoads_12.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', });
lyr_18001850Roads_1.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', });
lyr_Pre1800MissingRoads_2.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_Pre1800Roads_3.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', });
lyr_18001850MissingRoads_4.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_18501880Roads_5.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', });
lyr_18501880MissingRoads_6.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_18801900MissingRoads_7.set('fieldImages', {'First Seen': 'DateTime', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_18801900Roads_8.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', });
lyr_19001910Roads_9.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', });
lyr_19001910MissingRoads_10.set('fieldImages', {'First Seen': 'DateTime', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_19101920Roads_11.set('fieldImages', {'First Seen': 'TextEdit', 'Name': 'TextEdit', });
lyr_19101920MissingRoads_12.set('fieldImages', {'First Seen': 'DateTime', 'Name': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_18001850Roads_1.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', });
lyr_Pre1800MissingRoads_2.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', });
lyr_Pre1800Roads_3.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', });
lyr_18001850MissingRoads_4.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', });
lyr_18501880Roads_5.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', });
lyr_18501880MissingRoads_6.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', });
lyr_18801900MissingRoads_7.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', });
lyr_18801900Roads_8.set('fieldLabels', {'First Seen': 'no label', 'Name': 'inline label - always visible', });
lyr_19001910Roads_9.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', });
lyr_19001910MissingRoads_10.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', });
lyr_19101920Roads_11.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', });
lyr_19101920MissingRoads_12.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', });
lyr_19101920MissingRoads_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});