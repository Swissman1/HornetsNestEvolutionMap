// A simple function to create an OpenLayers style for a GeoJSON feature
function createStyle() {
    return new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#0e3399ff', // Pink/Magenta for visibility
            width: 1.1
        })
    });
}
console.log(good.features.length);
const features = (new ol.format.GeoJSON()).readFeatures(good, {
    // This tells OpenLayers what CRS your GeoJSON data is in (EPSG:4326 or CRS84)
    dataProjection: 'EPSG:4326', 
    
    // This tells OpenLayers what CRS to convert the data to (the map's default)
    featureProjection: 'EPSG:3857' 
});

const vectorSource = new ol.source.Vector({
    features: features // <-- Load features directly from the object
});
// 2. Define the Vector Layer
const vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: createStyle()
});

// 3. Define the Base Tile Layer (e.g., OpenStreetMap)
const osmLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
});

// 4. Create the Map
const map = new ol.Map({
    target: 'map',
    layers: [
        osmLayer,
        vectorLayer
    ],
    view: new ol.View({
        // Default center, will be overridden by fit() below
        center: ol.proj.fromLonLat([0, 0]), 
        zoom: 2
    })
});

// 5. Optional: Zoom to the extent of your data 
// (It's immediately ready, so we don't need the 'once' listener)
if (vectorSource.getExtent()) {
    map.getView().fit(vectorSource.getExtent(), {
        size: map.getSize(),
        padding: [50, 50, 50, 50] // Add some margin
    });
}