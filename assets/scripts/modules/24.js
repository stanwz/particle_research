function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = {
        update: function () {
            if ("undefined" != typeof window && "function" == typeof window.addEventListener) {
                var t = !1,
                    e = Object.defineProperty({}, "passive", {
                        get: function () {
                            t = !0
                        }
                    }),
                    i = function () {
                    };
                window.addEventListener("testPassiveEventSupport", i, e), window.removeEventListener("testPassiveEventSupport", i, e), n.hasSupport = t
            }
        }
    };
    n.update(), e.default = n
}