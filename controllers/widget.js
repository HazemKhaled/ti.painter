var args = $.args,
    imageBase64 = null;

$.addImage = addImage;
$.toBlob = toBlob;
$.destroy = destroy;

// Set backgroundImage and load the canavas
$.myWebView.addEventListener('load', function(e) {

    $.myWebView.evalJS("init('" + args.backgroundImage + "')");
});

/**
 *
 * Add image to the drawer
 *
 * @param  {String} url  Image local or www url
 * @param  {Object} type all literallycanvas.createShape options
 * @return void
 */
function addImage(url, type) {
    $.myWebView.addEventListener('load', function(e) {
        $.myWebView.evalJS("addImage('" + url + "')");
    });
}

// Pass image in base64 from html to Appc app
var saveimage = function(e) {
    imageBase64 = e.dataUrl;
    $.trigger('save', {
        blob: toBlob()
    });
};
Ti.App.addEventListener('painter:saveimage', saveimage);

/**
 * Convert base64 image to blob
 *
 * @return {Blob} Converted image
 */
function toBlob() {
    if (imageBase64) {
        return Ti.Utils.base64decode(imageBase64.replace('data:image/png;base64,', ''));
    } else {
        return null;
    }
}

/**
 * Cleanup TiApp event
 */
function destroy() {
    Ti.App.removeEventListener('painter:saveimage', saveimage);
}
