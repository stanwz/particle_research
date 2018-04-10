function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function () {
        try {
            var t = document.createElement("canvas"),
                e = t.getContext("webgl") || t.getContext("experimental-webgl");
            return Boolean(window.WebGLRenderingContext) && e && e.getExtension("OES_texture_float") && 0 !== e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
        } catch (t) {
            return !1
        }
    }();
    e.default = n
}