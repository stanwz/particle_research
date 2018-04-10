function (t, e, i) {
    "use strict";

    function n(t, e) {
        return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E"
    }

    function r(t) {
        if (t.srcset && !g && window.picturefill) {
            var e = window.picturefill._;
            t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
                reselect: !0
            }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, {
                reselect: !0
            })), t.currentSrc = t[e.ns].curSrc || t.src
        }
    }

    function o(t) {
        for (var e, i = getComputedStyle(t).fontFamily, n = {}; null !== (e = p.exec(i));) n[e[1]] = e[2];
        return n
    }

    function a(t, e, i) {
        var r = n(e || 1, i || 0);
        y.call(t, "src") !== r && _.call(t, "src", r)
    }

    function s(t, e) {
        t.naturalWidth ? e(t) : setTimeout(s, 100, t, e)
    }

    function h(t) {
        var e = o(t),
            i = t[l];
        if (e["object-fit"] = e["object-fit"] || "fill", !i.img) {
            if ("fill" === e["object-fit"]) return;
            if (!i.skipTest && d && !e["object-position"]) return
        }
        if (!i.img) {
            i.img = new Image(t.width, t.height), i.img.srcset = y.call(t, "data-ofi-srcset") || t.srcset, i.img.src = y.call(t, "data-ofi-src") || t.src, _.call(t, "data-ofi-src", t.src), t.srcset && _.call(t, "data-ofi-srcset", t.srcset), a(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = "");
            try {
                c(t)
            } catch (t) {
                window.console
            }
        }
        r(i.img), t.style.backgroundImage = 'url("' + (i.img.currentSrc || i.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = e["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(e["object-fit"]) ? s(i.img, function () {
            i.img.naturalWidth > t.width || i.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto"
        }) : t.style.backgroundSize = e["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), s(i.img, function (e) {
            a(t, e.naturalWidth, e.naturalHeight)
        })
    }

    function c(t) {
        var e = {
            get: function (e) {
                return t[l].img[e || "src"]
            },
            set: function (e, i) {
                return t[l].img[i || "src"] = e, _.call(t, "data-ofi-" + i, e), h(t), e
            }
        };
        Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", {
            get: function () {
                return e.get("currentSrc")
            }
        }), Object.defineProperty(t, "srcset", {
            get: function () {
                return e.get("srcset")
            },
            set: function (t) {
                return e.set(t, "srcset")
            }
        })
    }

    function u(t, e) {
        var i = !x && !t;
        if (e = e || {}, t = t || "img", m && !e.skipTest || !v) return !1;
        "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]);
        for (var n = 0; n < t.length; n++) t[n][l] = t[n][l] || {
            skipTest: e.skipTest
        }, h(t[n]);
        i && (document.body.addEventListener("load", function (t) {
            "IMG" === t.target.tagName && u(t.target, {
                skipTest: e.skipTest
            })
        }, !0), x = !0, t = "img"), e.watchMQ && window.addEventListener("resize", u.bind(null, t, {
            skipTest: e.skipTest
        }))
    }

    /*! npm.im/object-fit-images 3.2.3 */
    var l = "bfred-it:object-fit-images",
        p = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
        f = "undefined" == typeof Image ? {
            style: {
                "object-position": 1
            }
        } : new Image,
        d = "object-fit" in f.style,
        m = "object-position" in f.style,
        v = "background-size" in f.style,
        g = "string" == typeof f.currentSrc,
        y = f.getAttribute,
        _ = f.setAttribute,
        x = !1;
    u.supportsObjectFit = d, u.supportsObjectPosition = m,
        function () {
            function t(t, e) {
                return t[l] && t[l].img && ("src" === e || "srcset" === e) ? t[l].img : t
            }

            m || (HTMLImageElement.prototype.getAttribute = function (e) {
                return y.call(t(this, e), e)
            }, HTMLImageElement.prototype.setAttribute = function (e, i) {
                return _.call(t(this, e), e, String(i))
            })
        }(), t.exports = u
}