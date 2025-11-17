//import { transformExtent } from 'ol/proj';
var createTextStyle = function(feature, resolution, labelText, labelFont,
                               labelFill, placement, bufferColor,
                               bufferWidth) {

    if (feature.hide || !labelText) {
        return; 
    } 

    if (bufferWidth == 0) {
        var bufferStyle = null;
    } else {
        var bufferStyle = new ol.style.Stroke({
            color: bufferColor,
            width: bufferWidth
        })
    }
    
    var textStyle = new ol.style.Text({
        font: labelFont,
        text: labelText,
        textBaseline: "middle",
        textAlign: "left",
        offsetX: 8,
        offsetY: 3,
        placement: placement,
        maxAngle: 0,
        fill: new ol.style.Fill({
          color: labelFill
        }),
        stroke: bufferStyle
    });

    return textStyle;
};



/**
 * Converts a WGS84 (EPSG:4326) extent into a Web Mercator (EPSG:3857) extent.
 * This is useful for setting the view extent on a 3857 map using lat/lon bounds.
 *
 * @param {Array<number>} extent4326 - The extent in [minLon, minLat, maxLon, maxLat] (EPSG:4326).
 * @returns {Array<number>} The extent in [minX, minY, maxX, maxY] (EPSG:3857).
 */
function getWebMercatorExtent(extent4326) {
    // Check if the input array has exactly 4 numbers
    if (!Array.isArray(extent4326) || extent4326.length !== 4) {
        console.error("Input extent must be an array of 4 numbers: [minLon, minLat, maxLon, maxLat]");
        return null;
    }

    // transformExtent(extent, source, destination)
    const extent3857 = ol.proj.transformExtent(
        extent4326,
        'EPSG:4326', // Source projection (WGS84/LatLon)
        'EPSG:3857'  // Destination projection (Web Mercator)
    );

    return extent3857;
}

function getSimpleExtent(left,right,top, bottom){
    return [left,bottom,right, top];
}
function getSimpleMercatorExtent(left,right,top, bottom){
    return getWebMercatorExtent([left,bottom,right, top]);
}
function stripe(stripeWidth, gapWidth, angle, color) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = screen.width;
    canvas.height = stripeWidth + gapWidth;
    context.fillStyle = color;
    context.lineWidth = stripeWidth;
    context.fillRect(0, 0, canvas.width, stripeWidth);
    innerPattern = context.createPattern(canvas, 'repeat');

    var outerCanvas = document.createElement('canvas');
    var outerContext = outerCanvas.getContext('2d');
    outerCanvas.width = screen.width;
    outerCanvas.height = screen.height;
    outerContext.rotate((Math.PI / 180) * angle);
    outerContext.translate(-(screen.width/2), -(screen.height/2));
    outerContext.fillStyle = innerPattern;
    outerContext.fillRect(0,0,screen.width,screen.height);

    return outerContext.createPattern(outerCanvas, 'no-repeat');
};
