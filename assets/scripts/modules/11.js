function (t, e, i) {
    "use strict";
    (function (t) {
        function e(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        var n = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }();
        i(12), i(13), i(14);
        var r = i(16),
            o = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(r);
        t.debug = !1, new (function () {
            function t() {
                e(this, t), Promise.all([t.domReady()]).then(t.init)
            }

            return n(t, null, [{
                key: "domReady",
                value: function () {
                    return new Promise(function (t) {
                        document.addEventListener("DOMContentLoaded", t)
                    })
                }
            }, {
                key: "init",
                value: function () {
                    new o.default;
                    t.show()
                }
            }, {
                key: "show",
                value: function () {
                    document.documentElement.classList.add("ready")
                }
            }]), t
        }())
    }).call(e, i(4))
}