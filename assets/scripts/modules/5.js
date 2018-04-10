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
        a = i(18),
        s = n(a),
        h = i(0),
        c = n(h),
        u = function () {
            function t() {
                r(this, t), this.width = t.calculateWidth(), this.height = t.calculateHeight(), this.ratio = this.width / this.height, this.bind()
            }

            return o(t, [{
                key: "bind",
                value: function () {
                    this.onResize = this.onResize.bind(this), window.addEventListener("resize", this.onResize)
                }
            }, {
                key: "onResize",
                value: function () {
                    this.width = t.calculateWidth(), this.height = t.calculateHeight(), this.ratio = this.width / this.height, c.default.emit(c.default.RESIZE, this.width, this.height, this.ratio)
                }
            }], [{
                key: "calculateWidth",
                value: function () {
                    return s.default.viewportW()
                }
            }, {
                key: "calculateHeight",
                value: function () {
                    return s.default.viewportH()
                }
            }]), t
        }();
    e.default = new u
}