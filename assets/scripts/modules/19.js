function (t, e, i) {
    "use strict";

    function n(t) {
        if (Array.isArray(t)) {
            for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
            return i
        }
        return Array.from(t)
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
        a = i(1),
        s = function () {
            function t() {
                r(this, t), this.supportsWebShare = Boolean(navigator.share), this.$refs = {
                    items: [].concat(n((0, a.qsa)("[data-share]")))
                }, this.init()
            }

            return o(t, [{
                key: "init",
                value: function () {
                    this.bind()
                }
            }, {
                key: "bind",
                value: function () {
                    this.$refs.items.forEach(function (e) {
                        (0, a.$on)(e, "click", t.onClick)
                    })
                }
            }], [{
                key: "onClick",
                value: function (e) {
                    e.preventDefault(), t[e.currentTarget.dataset.share]()
                }
            }, {
                key: "facebook",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href,
                        i = t.e(e),
                        n = "https://www.facebook.com/sharer.php?u=" + i;
                    return t.openPopup(n, "Share on facebook", 575, 300)
                }
            }, {
                key: "twitter",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href,
                        i = t.e("Happy New Year! Are you ready to immerse yourself with EVS into 2018?"),
                        n = t.e(e),
                        r = "https://twitter.com/intent/tweet?url=" + n + "&text=" + i;
                    return t.openPopup(r, "Share on Twitter", 550, 255)
                }
            }, {
                key: "linkedin",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href,
                        i = t.e(e),
                        n = "https://www.linkedin.com/shareArticle?mini=true&url=" + i;
                    return t.openPopup(n, "Share on Linkedin", 550, 255)
                }
            }, {
                key: "e",
                value: function (t) {
                    return encodeURIComponent(t)
                }
            }, {
                key: "openPopup",
                value: function (t, e, i, n) {
                    var r = (window.screen.width - i) / 2,
                        o = (window.screen.height - n) / 2;
                    return window.open(t, e, "status=no,resizable=yes,height=" + n + ",width=" + i + ",top=" + o + ",left=" + r + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no")
                }
            }]), t
        }();
    e.default = new s
}