function (t, e, i) {
    "use strict";

    function n(t) {
        var e = void 0,
            i = void 0,
            n = void 0;
        n = "screen and (min-width:" + h[t] + ")";
        for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
        "string" == typeof o[0] ? (e = o[0], i = o[1], n += " and (max-width:" + u(h[e]) + ")") : (e = !1, i = o), s.register(n, i)
    }

    function r(t, e) {
        var i = void 0,
            n = void 0;
        n = "screen and (min-width:" + h[t] + ")", "string" == typeof(arguments.length <= 2 ? void 0 : arguments[2]) ? (i = arguments.length <= 2 ? void 0 : arguments[2], n += " and (max-width:" + u(h[i]) + ")") : i = !1, s.unregister(n, e)
    }

    function o(t) {
        var e = parseInt(h[t], 10);
        return window.innerWidth >= e
    }

    function a(t) {
        var e = parseInt(h[t], 10);
        return window.innerWidth < e
    }

    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.register = n, e.unregister = r, e.isMoreThan = o, e.isLessThan = a;
    var s = i(31),
        h = i(32),
        c = function (t) {
            var e = parseInt(t.replace("px", ""), 10);
            return Math.round(e / 16) + "em"
        },
        u = function (t) {
            var e = c(t),
                i = e.replace("em", "");
            return parseInt(i, 10) - .01 + "em"
        }
}