var wms_layers = [];


        var lyr_OSMStandard = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_streetcarstreets = new ol.format.GeoJSON();
var features_streetcarstreets = format_streetcarstreets.readFeatures(json_streetcarstreets, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_streetcarstreets = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_streetcarstreets.addFeatures(features_streetcarstreets);
var lyr_streetcarstreets = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_streetcarstreets, 
                style: style_streetcarstreets,
                popuplayertitle: '1935 street',
                interactive: true,
                title: '<img src="styles/legend/streetcarstreets.png" />1935 streets'
            });
var format_streetcardisp = new ol.format.GeoJSON();
var features_streetcardisp = format_streetcardisp.readFeatures(json_streetcardisp, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_streetcardisp = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_streetcardisp.addFeatures(features_streetcardisp);
var lyr_streetcardisp = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_streetcardisp, 
                style: style_streetcardisp,
                popuplayertitle: 'Streetcar Line',
                interactive: true,
    title: 'Streetcar Lines<br />\
    <img src="styles/legend/streetcardisp_1.png" /> 4th Ward Line<br />\
    <img src="styles/legend/streetcardisp_2.png" /> Brevard Line<br />\
    <img src="styles/legend/streetcardisp_3.png" /> Brooklyn Line<br />\
    <img src="styles/legend/streetcardisp_4.png" /> Combined<br />\
    <img src="styles/legend/streetcardisp_5.png" /> Dilworth Line<br />\
    <img src="styles/legend/streetcardisp_6.png" /> Eastover Line<br />\
    <img src="styles/legend/streetcardisp_7.png" /> Gold/Biddleville Line<br />\
    <img src="styles/legend/streetcardisp_8.png" /> Latta Park Line<br />\
    <img src="styles/legend/streetcardisp_9.png" /> Myers Park Line<br />\
    <img src="styles/legend/streetcardisp_10.png" /> Pegram Line<br />\
    <img src="styles/legend/streetcardisp_11.png" /> Plaza line<br />\
    <img src="styles/legend/streetcardisp_12.png" /> Wilmore Line<br />\
    <img src="styles/legend/streetcardisp_13.png" /> 1st Ward Line<br />\
    <img src="styles/legend/streetcardisp_14.png" /> 1st Ward/Brevard Line<br />' });

lyr_OSMStandard.setVisible(true);lyr_streetcarstreets.setVisible(true);lyr_streetcardisp.setVisible(true);
var layersList = [lyr_OSMStandard,lyr_streetcarstreets,lyr_streetcardisp];
lyr_streetcarstreets.set('fieldAliases', {'Name': 'Name', });
lyr_streetcardisp.set('fieldAliases', {'name': 'Name', });
lyr_streetcarstreets.set('fieldImages', {'Name': 'TextEdit', });
lyr_streetcardisp.set('fieldImages', {'name': 'TextEdit', });
lyr_streetcarstreets.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_streetcardisp.set('fieldLabels', {'name': 'inline label - visible with data', });
lyr_streetcardisp.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});