function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = {
        update: function () {
            "undefined" != typeof window && (n.hasSupport = "ontouchstart" in window, n.browserSupportsApi = Boolean(window.TouchEvent))
        }
    };
    n.update(), e.default = n
}