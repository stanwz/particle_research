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
        o = i(1),
        a = function () {
            function t(e) {
                n(this, t), this.binds = e, this.onKeyDown = this.onKeyDown.bind(this), this.init()
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
                    (0, o.$on)(document, "keydown", this.onKeyDown)
                }
            }, {
                key: "unbind",
                value: function () {
                    (0, o.$off)(document, "keydown", this.onKeyDown)
                }
            }, {
                key: "onKeyDown",
                value: function (t) {
                    for (var e = t.keyCode, i = 0; i < this.binds.length; i++) {
                        var n = this.binds[i];
                        if (e === n.key) {
                            t.preventDefault(), n.callback();
                            break
                        }
                    }
                }
            }]), t
        }();
    e.default = a
}