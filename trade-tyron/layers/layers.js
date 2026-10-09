var wms_layers = [];


        var lyr_OSMStandard = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            source: new ol.source.OSM()
        });
var formatOtherPaths = new ol.format.GeoJSON();
var featuresOtherPaths = formatOtherPaths.readFeatures(jsonOtherPaths, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSourceOtherPaths = new ol.source.Vector({
    attributions: ' ',
});
jsonSourceOtherPaths.addFeatures(featuresOtherPaths);
var lyrOtherPaths = new ol.layer.Vector({
                declutter: false,
                source:jsonSourceOtherPaths, 
                style: styleOtherPaths,
                popuplayertitle: 'Other estimated paths',
                interactive: true,
                title: '<img src="styles/legend/OtherPaths.png" />Other estimated paths'
            });
var formatOldTradePaths = new ol.format.GeoJSON();
var featuresOldTradePaths = formatOldTradePaths.readFeatures(jsonOldTradePaths, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSourceOldTradePaths = new ol.source.Vector({
    attributions: ' ',
});
jsonSourceOldTradePaths.addFeatures(featuresOldTradePaths);
var lyrOldTradePaths = new ol.layer.Vector({
                declutter: false,
                source:jsonSourceOldTradePaths, 
                style: styleOldTradePaths,
                popuplayertitle: 'Trade-Tryon estimates',
                interactive: true,
    title: '<img src="styles/legend/OldTradePaths.png" />Trade and Tryon estimated Routes<br/>' });

lyr_OSMStandard.setVisible(true);lyrOtherPaths.setVisible(true);lyrOldTradePaths.setVisible(true);
var layersList = [lyr_OSMStandard,lyrOtherPaths,lyrOldTradePaths];
lyrOtherPaths.set('fieldAliases', {'Name': 'Name', });
lyrOldTradePaths.set('fieldAliases', {'name': 'Name', });
lyrOtherPaths.set('fieldImages', {'Name': 'TextEdit', });
lyrOldTradePaths.set('fieldImages', {'name': 'TextEdit', });
lyrOtherPaths.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyrOldTradePaths.set('fieldLabels', {'name': 'inline label - visible with data', });
lyrOldTradePaths.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});