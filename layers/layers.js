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
var format_1910Roads_1 = new ol.format.GeoJSON();
var features_1910Roads_1 = format_1910Roads_1.readFeatures(json_1910Roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1910Roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1910Roads_1.addFeatures(features_1910Roads_1);
var lyr_1910Roads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1910Roads_1, 
                style: style_1910Roads_1,
                popuplayertitle: '1910 Roads',
                interactive: true,
                title: '<img src="styles/legend/1910Roads_1.png" /> 1910 Roads'
            });
var format_1910Missingroads_2 = new ol.format.GeoJSON();
var features_1910Missingroads_2 = format_1910Missingroads_2.readFeatures(json_1910Missingroads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1910Missingroads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1910Missingroads_2.addFeatures(features_1910Missingroads_2);
var lyr_1910Missingroads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1910Missingroads_2, 
                style: style_1910Missingroads_2,
                popuplayertitle: '1910 Missing roads',
                interactive: true,
                title: '<img src="styles/legend/1910Missingroads_2.png" /> 1910 Missing roads'
            });
var format_1900Roads_3 = new ol.format.GeoJSON();
var features_1900Roads_3 = format_1900Roads_3.readFeatures(json_1900Roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1900Roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1900Roads_3.addFeatures(features_1900Roads_3);
var lyr_1900Roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1900Roads_3, 
                style: style_1900Roads_3,
                popuplayertitle: '1900 Roads',
                interactive: true,
                title: '<img src="styles/legend/1900Roads_3.png" /> 1900 Roads'
            });
var format_1900MissingRoads_4 = new ol.format.GeoJSON();
var features_1900MissingRoads_4 = format_1900MissingRoads_4.readFeatures(json_1900MissingRoads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1900MissingRoads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1900MissingRoads_4.addFeatures(features_1900MissingRoads_4);
var lyr_1900MissingRoads_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1900MissingRoads_4, 
                style: style_1900MissingRoads_4,
                popuplayertitle: '1900 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/1900MissingRoads_4.png" /> 1900 Missing Roads'
            });
var format_1900Rail_5 = new ol.format.GeoJSON();
var features_1900Rail_5 = format_1900Rail_5.readFeatures(json_1900Rail_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1900Rail_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1900Rail_5.addFeatures(features_1900Rail_5);
var lyr_1900Rail_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1900Rail_5, 
                style: style_1900Rail_5,
                popuplayertitle: '1900 Rail',
                interactive: true,
                title: '<img src="styles/legend/1900Rail_5.png" /> 1900 Rail'
            });
var format_1877Roads_6 = new ol.format.GeoJSON();
var features_1877Roads_6 = format_1877Roads_6.readFeatures(json_1877Roads_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1877Roads_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1877Roads_6.addFeatures(features_1877Roads_6);
var lyr_1877Roads_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1877Roads_6, 
                style: style_1877Roads_6,
                popuplayertitle: '1877 Roads',
                interactive: true,
                title: '<img src="styles/legend/1877Roads_6.png" /> 1877 Roads'
            });
var format_1877MissingRoads_7 = new ol.format.GeoJSON();
var features_1877MissingRoads_7 = format_1877MissingRoads_7.readFeatures(json_1877MissingRoads_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1877MissingRoads_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1877MissingRoads_7.addFeatures(features_1877MissingRoads_7);
var lyr_1877MissingRoads_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1877MissingRoads_7, 
                style: style_1877MissingRoads_7,
                popuplayertitle: '1877 Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/1877MissingRoads_7.png" /> 1877 Missing Roads'
            });
var format_1877Rail_8 = new ol.format.GeoJSON();
var features_1877Rail_8 = format_1877Rail_8.readFeatures(json_1877Rail_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1877Rail_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1877Rail_8.addFeatures(features_1877Rail_8);
var lyr_1877Rail_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1877Rail_8, 
                style: style_1877Rail_8,
                popuplayertitle: '1877 Rail',
                interactive: true,
                title: '<img src="styles/legend/1877Rail_8.png" /> 1877 Rail'
            });
var format_Railroads_9 = new ol.format.GeoJSON();
var features_Railroads_9 = format_Railroads_9.readFeatures(json_Railroads_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railroads_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railroads_9.addFeatures(features_Railroads_9);
var lyr_Railroads_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railroads_9, 
                style: style_Railroads_9,
                popuplayertitle: 'Railroads',
                interactive: true,
                title: '<img src="styles/legend/Railroads_9.png" /> Railroads'
            });
var format_Pointsofinterest_10 = new ol.format.GeoJSON();
var features_Pointsofinterest_10 = format_Pointsofinterest_10.readFeatures(json_Pointsofinterest_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointsofinterest_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointsofinterest_10.addFeatures(features_Pointsofinterest_10);
var lyr_Pointsofinterest_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pointsofinterest_10, 
                style: style_Pointsofinterest_10,
                popuplayertitle: 'Points of interest',
                interactive: true,
                title: '<img src="styles/legend/Pointsofinterest_10.png" /> Points of interest'
            });
var group_RoadsandRail = new ol.layer.Group({
                                layers: [lyr_Railroads_9,],
                                fold: 'open',
                                title: 'Roads and Rail'});
var group_1877 = new ol.layer.Group({
                                layers: [lyr_1877Roads_6,lyr_1877MissingRoads_7,lyr_1877Rail_8,],
                                fold: 'open',
                                title: '1877'});
var group_1900 = new ol.layer.Group({
                                layers: [lyr_1900Roads_3,lyr_1900MissingRoads_4,lyr_1900Rail_5,],
                                fold: 'open',
                                title: '1900'});
var group_1910 = new ol.layer.Group({
                                layers: [lyr_1910Roads_1,lyr_1910Missingroads_2,],
                                fold: 'open',
                                title: '1910'});
var group_Maps = new ol.layer.Group({
                                layers: [lyr_OpenStreetmap_0,],
                                fold: 'open',
                                title: 'Maps'});

lyr_OpenStreetmap_0.setVisible(true);lyr_1910Roads_1.setVisible(true);lyr_1910Missingroads_2.setVisible(true);lyr_1900Roads_3.setVisible(true);lyr_1900MissingRoads_4.setVisible(true);lyr_1900Rail_5.setVisible(true);lyr_1877Roads_6.setVisible(true);lyr_1877MissingRoads_7.setVisible(true);lyr_1877Rail_8.setVisible(true);lyr_Railroads_9.setVisible(true);lyr_Pointsofinterest_10.setVisible(true);
var layersList = [group_Maps,group_1910,group_1900,group_1877,group_RoadsandRail,lyr_Pointsofinterest_10];
lyr_1910Roads_1.set('fieldAliases', {'Name': 'Name', });
lyr_1910Missingroads_2.set('fieldAliases', {'id': 'id', });
lyr_1900Roads_3.set('fieldAliases', {'Name': 'Name', });
lyr_1900MissingRoads_4.set('fieldAliases', {'id': 'id', });
lyr_1900Rail_5.set('fieldAliases', {'id': 'id', });
lyr_1877Roads_6.set('fieldAliases', {'Name': 'Name', 'Date Added': 'Date Added', 'Comments': 'Comments', });
lyr_1877MissingRoads_7.set('fieldAliases', {'Name': 'Name', 'Date Added': 'Date Added', 'Last Seen': 'Last Seen', });
lyr_1877Rail_8.set('fieldAliases', {'Active': 'Active', 'Removed': 'Removed', });
lyr_Railroads_9.set('fieldAliases', {'operator': 'operator', 'owner': 'owner', 'ownerlong': 'ownerlong', 'tracktype': 'tracktype', 'branch': 'branch', 'begmp': 'begmp', 'endmp': 'endmp', 'inservice': 'inservice', 'outservice': 'outservice', 'passservic': 'passservic', 'shape_leng': 'shape_leng', 'connecty': 'connecty', 'hsr': 'hsr', 'shape_le_1': 'shape_le_1', 'name': 'name', 'DateAdded': 'DateAdded', });
lyr_Pointsofinterest_10.set('fieldAliases', {'Title': 'Title', 'Ready': 'Ready', 'Info2': 'Info2', });
lyr_1910Roads_1.set('fieldImages', {'Name': 'TextEdit', });
lyr_1910Missingroads_2.set('fieldImages', {'id': 'TextEdit', });
lyr_1900Roads_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_1900MissingRoads_4.set('fieldImages', {'id': 'TextEdit', });
lyr_1900Rail_5.set('fieldImages', {'id': 'TextEdit', });
lyr_1877Roads_6.set('fieldImages', {'Name': 'TextEdit', 'Date Added': 'DateTime', 'Comments': 'DateTime', });
lyr_1877MissingRoads_7.set('fieldImages', {'Name': 'TextEdit', 'Date Added': 'TextEdit', 'Last Seen': 'TextEdit', });
lyr_1877Rail_8.set('fieldImages', {'Active': 'TextEdit', 'Removed': 'TextEdit', });
lyr_Railroads_9.set('fieldImages', {'operator': 'TextEdit', 'owner': 'TextEdit', 'ownerlong': 'TextEdit', 'tracktype': 'TextEdit', 'branch': 'TextEdit', 'begmp': 'TextEdit', 'endmp': 'TextEdit', 'inservice': 'TextEdit', 'outservice': 'TextEdit', 'passservic': 'TextEdit', 'shape_leng': 'TextEdit', 'connecty': 'TextEdit', 'hsr': 'TextEdit', 'shape_le_1': 'TextEdit', 'name': 'TextEdit', 'DateAdded': 'DateTime', });
lyr_Pointsofinterest_10.set('fieldImages', {'Title': 'TextEdit', 'Ready': 'CheckBox', 'Info2': 'TextEdit', });
lyr_1910Roads_1.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_1910Missingroads_2.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_1900Roads_3.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_1900MissingRoads_4.set('fieldLabels', {'id': 'hidden field', });
lyr_1900Rail_5.set('fieldLabels', {'id': 'no label', });
lyr_1877Roads_6.set('fieldLabels', {'Name': 'inline label - visible with data', 'Date Added': 'inline label - visible with data', 'Comments': 'inline label - visible with data', });
lyr_1877MissingRoads_7.set('fieldLabels', {'Name': 'inline label - visible with data', 'Date Added': 'inline label - visible with data', 'Last Seen': 'inline label - visible with data', });
lyr_1877Rail_8.set('fieldLabels', {'Active': 'inline label - visible with data', 'Removed': 'header label - always visible', });
lyr_Railroads_9.set('fieldLabels', {'operator': 'no label', 'owner': 'no label', 'ownerlong': 'no label', 'tracktype': 'no label', 'branch': 'no label', 'begmp': 'no label', 'endmp': 'no label', 'inservice': 'no label', 'outservice': 'no label', 'passservic': 'no label', 'shape_leng': 'no label', 'connecty': 'no label', 'hsr': 'no label', 'shape_le_1': 'no label', 'name': 'no label', 'DateAdded': 'no label', });
lyr_Pointsofinterest_10.set('fieldLabels', {'Title': 'no label', 'Ready': 'hidden field', 'Info2': 'no label', });
lyr_Pointsofinterest_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});