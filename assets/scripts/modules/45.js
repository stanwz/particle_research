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

    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function () {
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
        a = i(46),
        s = i(47),
        h = i(1),
        c = i(5),
        u = n(c),
        l = i(0),
        p = n(l),
        f = function () {
            function t(e, i) {
                r(this, t), this.prev = e, this.next = i, this.onWheel = this.onWheel.bind(this), this.init()
            }

            return o(t, [{
                key: "init",
                value: function () {
                    this.lethargy = new a.Lethargy, this.bind()
                }
            }, {
                key: "destroy",
                value: function () {
                    this.unbind()
                }
            }, {
                key: "bind",
                value: function () {
                    (0, h.$on)(document, "mousewheel", this.onWheel, {
                        capture: !1,
                        passive: !0
                    }), (0, h.$on)(document, "wheel", this.onWheel, {
                        capture: !1,
                        passive: !0
                    }), (0, h.$on)(document, "mousemove", t.onMove)
                }
            }, {
                key: "unbind",
                value: function () {
                    (0, h.$off)(document, "mousewheel", this.onWheel), (0, h.$off)(document, "wheel", this.onWheel), (0, h.$off)(document, "mousemove", t.onMove)
                }
            }, {
                key: "onWheel",
                value: function (t) {
                    var e = this.lethargy.check(t);
                    !1 !== e && (-1 === e && this.next(), 1 === e && this.prev())
                }
            }], [{
                key: "onMove",
                value: function (t) {
                    var e = u.default.width / 2,
                        i = u.default.height / 2,
                        n = t.clientX - e,
                        r = t.clientY - i,
                        o = (0, s.map)(n, -e, e, -.5, .5),
                        a = (0, s.map)(r, -i, i, -.5, .5);
                    p.default.emit(p.default.MOUSE_MOVE, o, a)
                }
            }]), t
        }();
    e.default = f
}