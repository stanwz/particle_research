function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
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
    var s = function () {
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
        h = i(3),
        c = i(5),
        u = n(c),
        l = i(0),
        p = n(l),
        f = function (t) {
            function e() {
                r(this, e);
                var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, 60, u.default.ratio, .1, 2e3));
                return t.lookAt(new h.Vector3), t.position.x = 0, t.position.y = 0, t.position.z = 1, t.onResize = t.onResize.bind(t), t.bind(), t
            }

            return a(e, t), s(e, [{
                key: "bind",
                value: function () {
                    p.default.on(p.default.RESIZE, this.onResize)
                }
            }, {
                key: "onResize",
                value: function (t, e, i) {
                    this.aspect = i, this.updateProjectionMatrix(), p.default.emit(p.default.CAMERA_UPDATE)
                }
            }]), e
        }(h.PerspectiveCamera);
    e.default = f
}