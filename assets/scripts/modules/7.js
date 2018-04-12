function (module, moduleExport, __webpack_require__) {
    Object.defineProperty(moduleExport, "__esModule", {
        value: true
    });
    var update = function () {
        var ctx = {};
        try {
            /** @type {!Element} */
            var canvas = document.createElement("canvas");
            var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            var extensionDebugRendererInfo = gl.getExtension("WEBGL_debug_renderer_info");
            return extensionDebugRendererInfo && (ctx.vendor = gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL), ctx.card = gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)), ctx.renderer = gl.getParameter(gl.RENDERER), ctx.version = gl.getParameter(gl.VERSION), ctx.glsl = gl.getParameter(gl.SHADING_LANGUAGE_VERSION), ctx.MAX_TEXTURE_SIZE = gl.getParameter(gl.MAX_TEXTURE_SIZE), ctx.MAX_TEXTURE_IMAGE_UNITS = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS), ctx;
        } catch (e) {
            return ctx;
        }
    }();
    var options = {
        postprocessing: true,
        antialias: true,
        gyroscope: true,
        mouseTiltCamera: true,
        shadow: true,
        shadowSize: 2048,
        dpr: window.devicePixelRatio || 1,
        ratioScreen: 1,
        cameraBoarding: true,
        objectBoarding: true,
        debugStats: false,
        logoDisplacement: true
    };
    if (update.card && "mali-g71" === update.card.toLowerCase()) {
        /** @type {boolean} */
        options.logoDisplacement = false;
    }
    if (window.devicePixelRatio > 1) {
        /** @type {boolean} */
        options.antialias = false;
    }
    /** @type {number} */
    options.dpr = Math.min(2, window.devicePixelRatio);
    if (window.Modernizr.tablet) {
        /** @type {boolean} */
        options.shadow = false;
    }
    if (window.Modernizr.mobile) {
        /** @type {number} */
        options.shadowSize = 512;
    }
    if (window.Modernizr.android) {
        /** @type {boolean} */
        options.shadow = false;
    }
    moduleExport.default = options;
}