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
        f = i(1),
        d = function (t) {
            function e() {
                r(this, e);
                var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                    antialias: window.devicePixelRatio <= 1,
                    alpha: !0
                }));
                return (0, f.qs)(".canvas").appendChild(t.domElement), t.setSize(u.default.width, u.default.height), t.setPixelRatio(window.devicePixelRatio), t.setClearColor(0, 1), t.autoClear = !1, t.onResize = t.onResize.bind(t), t.bind(), t
            }

            return a(e, t), s(e, [{
                key: "bind",
                value: function () {
                    p.default.on(p.default.RESIZE, this.onResize)
                }
            }, {
                key: "onResize",
                value: function (t, e) {
                    this.setSize(t, e)
                }
            }]), e
        }(h.WebGLRenderer);
    e.default = d
}