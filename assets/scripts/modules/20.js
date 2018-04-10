function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r(t, e, i, n) {
        return t && (e || i) ? "hybrid" : t && Object.keys(n.detectHover).filter(function (t) {
            return "update" !== t
        }).every(function (t) {
            return !1 === n.detectHover[t]
        }) && Object.keys(n.detectPointer).filter(function (t) {
            return "update" !== t
        }).every(function (t) {
            return !1 === n.detectPointer[t]
        }) ? window.navigator && /android/.test(window.navigator.userAgent.toLowerCase()) ? "touchOnly" : "hybrid" : t ? "touchOnly" : "mouseOnly"
    }

    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(21),
        a = n(o),
        s = i(22),
        h = n(s),
        c = i(23),
        u = n(c),
        l = i(24),
        p = n(l),
        f = {
            state: {
                detectHover: a.default,
                detectPointer: h.default,
                detectTouchEvents: u.default,
                detectPassiveEvents: p.default
            },
            update: function () {
                f.state.detectHover.update(), f.state.detectPointer.update(), f.state.detectTouchEvents.update(), f.state.detectPassiveEvents.update(), f.updateOnlyOwnProperties()
            },
            updateOnlyOwnProperties: function () {
                if ("undefined" != typeof window) {
                    f.passiveEvents = f.state.detectPassiveEvents.hasSupport || !1, f.hasTouch = f.state.detectTouchEvents.hasSupport || !1, f.deviceType = r(f.hasTouch, f.state.detectHover.anyHover, f.state.detectPointer.anyFine, f.state), f.hasMouse = "touchOnly" !== f.deviceType, f.primaryInput = "mouseOnly" === f.deviceType && "mouse" || "touchOnly" === f.deviceType && "touch" || f.state.detectHover.hover && "mouse" || f.state.detectHover.none && "touch" || "mouse";
                    /windows/.test(window.navigator.userAgent.toLowerCase()) && /chrome/.test(window.navigator.userAgent.toLowerCase()) && function (t) {
                        return t >= 59 && t < 62
                    }(parseInt(/Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1], 10)) && f.hasTouch && (f.deviceType = "hybrid", f.hasMouse = !0, f.primaryInput = "mouse")
                }
            }
        };
    f.updateOnlyOwnProperties(), e.default = f
}