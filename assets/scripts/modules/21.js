function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = {
        update: function () {
            "undefined" != typeof window && "function" == typeof window.matchMedia && (n.hover = window.matchMedia("(hover: hover)").matches, n.none = window.matchMedia("(hover: none)").matches || window.matchMedia("(hover: on-demand)").matches, n.anyHover = window.matchMedia("(any-hover: hover)").matches, n.anyNone = window.matchMedia("(any-hover: none)").matches || window.matchMedia("(any-hover: on-demand)").matches)
        }
    };
    n.update(), e.default = n
}