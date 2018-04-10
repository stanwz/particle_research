function (t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        s = function t(e, i, n) {
            null === e && (e = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(e, i);
            if (void 0 === r) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, i, n)
            }
            if ("value" in r) return r.value;
            var a = r.get;
            if (void 0 !== a) return a.call(n)
        },
        h = i(17),
        c = function (t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(h),
        u = function (t) {
            function e() {
                return n(this, e), r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }

            return o(e, t), a(e, [{
                key: "emit",
                value: function () {
                    for (var t, i = arguments.length, n = Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    var o = n[0];
                    n.slice(1);
                    this.logBlacklist && this.logBlacklist.indexOf(o), (t = s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this)).call.apply(t, [this].concat(n))
                }
            }]), e
        }(c.default),
        l = new u;
    l.logBlacklist = [], l.RESIZE = "resize", l.logBlacklist.push(l.RESIZE), l.SCROLL = "scroll", l.logBlacklist.push(l.SCROLL), l.RAF = "raf", l.logBlacklist.push(l.RAF), l.PANEL_NEXT = "panelNext", l.PANEL_PREV = "panelPrev", l.PANEL_CHANGE = "panelChange", l.PANEL_END = "panelEnd", l.HOME_READY = "homeReady", l.WORLD_READY = "worldReady", l.MOUSE_MOVE = "mouseMove", l.logBlacklist.push(l.MOUSE_MOVE), l.DEVICE_MOVE = "deviceMove", l.logBlacklist.push(l.DEVICE_MOVE), l.CAMERA_UPDATE = "cameraUpdate", e.default = l
}