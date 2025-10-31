var wms_layers = [];


        var lyr_OpenStreetmap = new ol.layer.Tile({
            'title': 'Open Street map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MissingRoads = new ol.format.GeoJSON();
var features_MissingRoads = format_MissingRoads.readFeatures(json_MissingRoads, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MissingRoads = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MissingRoads.addFeatures(features_MissingRoads);
var lyr_MissingRoads = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MissingRoads, 
                style: style_MissingRoads,
                popuplayertitle: 'Missing Roads',
                interactive: true,
                title: '<img src="styles/legend/MissingRoads.png" /> Missing Roads'
            });
var format_Roads = new ol.format.GeoJSON();
var features_Roads = format_Roads.readFeatures(json_Roads, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads.addFeatures(features_Roads);
var lyr_Roads = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads, 
                style: style_Roads,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads.png" /> Roads'
            });
var group_1965 = new ol.layer.Group({
                                layers: [lyr_MissingRoads,lyr_Roads,],
                                fold: 'open',
                                title: '1965'});
var group_Maps = new ol.layer.Group({
                                layers: [lyr_OpenStreetmap,],
                                fold: 'open',
                                title: 'Maps'});

lyr_OpenStreetmap.setVisible(true);lyr_MissingRoads.setVisible(true);lyr_Roads.setVisible(true);
var layersList = [group_Maps,group_1965];
lyr_MissingRoads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Last Seen': 'Last Seen', 'Road Type': 'Road Type', });
lyr_Roads.set('fieldAliases', {'First Seen': 'First Seen', 'Name': 'Name', 'Road Type': 'Road Type', });
lyr_MissingRoads.set('fieldImages', {'First Seen': 'DateTime', 'Name': 'TextEdit', 'Last Seen': 'DateTime', 'Road Type': 'TextEdit', });
lyr_Roads.set('fieldImages', {'First Seen': 'DateTime', 'Name': 'TextEdit', 'Road Type': 'TextEdit', });
lyr_MissingRoads.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Last Seen': 'no label', 'Road Type': 'no label', });
lyr_Roads.set('fieldLabels', {'First Seen': 'no label', 'Name': 'no label', 'Road Type': 'no label', });
lyr_Roads.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});