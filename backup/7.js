function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function () {
            var t = {};
            try {
                var e = document.createElement("canvas"),
                    i = e.getContext("webgl") || e.getContext("experimental-webgl"),
                    n = i.getExtension("WEBGL_debug_renderer_info");
                return n && (t.vendor = i.getParameter(n.UNMASKED_VENDOR_WEBGL), t.card = i.getParameter(n.UNMASKED_RENDERER_WEBGL)), t.renderer = i.getParameter(i.RENDERER), t.version = i.getParameter(i.VERSION), t.glsl = i.getParameter(i.SHADING_LANGUAGE_VERSION), t.MAX_TEXTURE_SIZE = i.getParameter(i.MAX_TEXTURE_SIZE), t.MAX_TEXTURE_IMAGE_UNITS = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), t
            } catch (e) {
                return t
            }
        }(),
        r = {
            postprocessing: !0,
            antialias: !0,
            gyroscope: !0,
            mouseTiltCamera: !0,
            shadow: !0,
            shadowSize: 2048,
            dpr: window.devicePixelRatio || 1,
            ratioScreen: 1,
            cameraBoarding: !0,
            objectBoarding: !0,
            debugStats: !1,
            logoDisplacement: !0
        };
    n.card && "mali-g71" === n.card.toLowerCase() && (r.logoDisplacement = !1), window.devicePixelRatio > 1 && (r.antialias = !1), r.dpr = Math.min(2, window.devicePixelRatio), window.Modernizr.tablet && (r.shadow = !1), window.Modernizr.mobile && (r.shadowSize = 512), window.Modernizr.android && (r.shadow = !1), e.default = r
}