function (t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function () {
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
        o = i(49),
        a = function (t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o),
        s = function () {
            function t(e, i) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document.body,
                    o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                n(this, t), this.$el = r, this.horizontal = o, this.prev = e, this.next = i, this.onSwipe = this.onSwipe.bind(this), this.init()
            }

            return r(t, [{
                key: "init",
                value: function () {
                    this.mc = new a.default(this.$el), this.mc.get("swipe").set({
                        direction: this.horizontal ? a.default.DIRECTION_HORIZONTAL : a.default.DIRECTION_VERTICAL
                    }), this.bind()
                }
            }, {
                key: "destroy",
                value: function () {
                    this.mc.destroy()
                }
            }, {
                key: "bind",
                value: function () {
                    this.horizontal ? this.mc.on("swipeleft swiperight", this.onSwipe) : this.mc.on("swipeup swipedown", this.onSwipe)
                }
            }, {
                key: "onSwipe",
                value: function (t) {
                    return "swipeup" === t.type ? this.next() : "swipedown" === t.type ? this.prev() : "swipeleft" === t.type ? this.next() : "swiperight" === t.type && this.prev()
                }
            }]), t
        }();
    e.default = s
}