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
        o = i(0),
        a = function (t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o),
        s = function () {
            function t(e) {
                n(this, t), this.$el = e, this.isVisible = !1, this.onChange = this.onChange.bind(this), this.init()
            }

            return r(t, [{
                key: "init",
                value: function () {
                    this.bind()
                }
            }, {
                key: "destroy",
                value: function () {
                    this.unbind()
                }
            }, {
                key: "bind",
                value: function () {
                    a.default.on(a.default.PANEL_CHANGE, this.onChange)
                }
            }, {
                key: "unbind",
                value: function () {
                    a.default.off(a.default.PANEL_CHANGE, this.onChange)
                }
            }, {
                key: "onChange",
                value: function (t, e) {
                    clearTimeout(this.t), 0 === e ? this.t = setTimeout(this.show.bind(this, !0), 1e4) : (this.hide(), e < 5 && (this.t = setTimeout(this.show.bind(this), 1e4)))
                }
            }, {
                key: "show",
                value: function () {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.$el.classList.add("is-home"), this.$el.classList.remove("is-hidden")
                }
            }, {
                key: "hide",
                value: function () {
                    var t = this;
                    this.$el.classList.add("is-hidden"), setTimeout(function () {
                        t.$el.classList.remove("is-home")
                    }, 500)
                }
            }]), t
        }();
    e.default = s
}