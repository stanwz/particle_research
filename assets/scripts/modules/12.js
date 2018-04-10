function (t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    !function (t, e, i) {
        function r(t, e) {
            return (void 0 === t ? "undefined" : n(t)) === e
        }

        function o(t) {
            var e = T.className,
                i = M._config.classPrefix || "";
            if (S && (e = e.baseVal), M._config.enableJSClass) {
                var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
                e = e.replace(n, "$1" + i + "js$2")
            }
            M._config.enableClasses && (e += " " + i + t.join(" " + i), S ? T.className.baseVal = e : T.className = e)
        }

        function a() {
            return "function" != typeof e.createElement ? e.createElement(arguments[0]) : S ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
        }

        function s() {
            var t = e.body;
            return t || (t = a(S ? "svg" : "body"), t.fake = !0), t
        }

        function h(t, i, n, r) {
            var o, h, c, u, l = "modernizr",
                p = a("div"),
                f = s();
            if (parseInt(n, 10))
                for (; n--;) c = a("div"), c.id = r ? r[n] : l + (n + 1), p.appendChild(c);
            return o = a("style"), o.type = "text/css", o.id = "s" + l, (f.fake ? f : p).appendChild(o), f.appendChild(p), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(e.createTextNode(t)), p.id = l, f.fake && (f.style.background = "", f.style.overflow = "hidden", u = T.style.overflow, T.style.overflow = "hidden", T.appendChild(f)), h = i(p, t), f.fake ? (f.parentNode.removeChild(f), T.style.overflow = u, T.offsetHeight) : p.parentNode.removeChild(p), !!h
        }

        function c(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function u(t) {
            return t.replace(/([a-z])-([a-z])/g, function (t, e, i) {
                return e + i.toUpperCase()
            }).replace(/^-/, "")
        }

        function l(t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }

        function p(t, e, i) {
            var n;
            for (var o in t)
                if (t[o] in e) return !1 === i ? t[o] : (n = e[t[o]], r(n, "function") ? l(n, i || e) : n);
            return !1
        }

        function f(t) {
            return t.replace(/([A-Z])/g, function (t, e) {
                return "-" + e.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }

        function d(e, i, n) {
            var r;
            if ("getComputedStyle" in t) {
                r = getComputedStyle.call(t, e, i);
                var o = t.console;
                if (null !== r) n && (r = r.getPropertyValue(n));
                else if (o) {
                    var a = o.error ? "error" : "log";
                    o[a].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                }
            } else r = !i && e.currentStyle && e.currentStyle[n];
            return r
        }

        function m(e, n) {
            var r = e.length;
            if ("CSS" in t && "supports" in t.CSS) {
                for (; r--;)
                    if (t.CSS.supports(f(e[r]), n)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in t) {
                for (var o = []; r--;) o.push("(" + f(e[r]) + ":" + n + ")");
                return o = o.join(" or "), h("@supports (" + o + ") { #modernizr { position: absolute; } }", function (t) {
                    return "absolute" == d(t, null, "position")
                })
            }
            return i
        }

        function v(t, e, n, o) {
            function s() {
                l && (delete O.style, delete O.modElem)
            }

            if (o = !r(o, "undefined") && o, !r(n, "undefined")) {
                var h = m(t, n);
                if (!r(h, "undefined")) return h
            }
            for (var l, p, f, d, v, g = ["modernizr", "tspan", "samp"]; !O.style && g.length;) l = !0, O.modElem = a(g.shift()), O.style = O.modElem.style;
            for (f = t.length, p = 0; p < f; p++)
                if (d = t[p], v = O.style[d], c(d, "-") && (d = u(d)), O.style[d] !== i) {
                    if (o || r(n, "undefined")) return s(), "pfx" != e || d;
                    try {
                        O.style[d] = n
                    } catch (t) {
                    }
                    if (O.style[d] != v) return s(), "pfx" != e || d
                }
            return s(), !1
        }

        function g(t, e, i, n, o) {
            var a = t.charAt(0).toUpperCase() + t.slice(1),
                s = (t + " " + C.join(a + " ") + a).split(" ");
            return r(e, "string") || r(e, "undefined") ? v(s, e, n, o) : (s = (t + " " + L.join(a + " ") + a).split(" "), p(s, e, i))
        }

        function y(t, e, n) {
            return g(t, i, i, e, n)
        }

        function _(t, e) {
            if ("object" == (void 0 === t ? "undefined" : n(t)))
                for (var i in t) R(t, i) && _(i, t[i]);
            else {
                t = t.toLowerCase();
                var r = t.split("."),
                    a = M[r[0]];
                if (2 == r.length && (a = a[r[1]]), void 0 !== a) return M;
                e = "function" == typeof e ? e() : e, 1 == r.length ? M[r[0]] = e : (!M[r[0]] || M[r[0]] instanceof Boolean || (M[r[0]] = new Boolean(M[r[0]])), M[r[0]][r[1]] = e), o([(e && 0 != e ? "" : "no-") + r.join("-")]), M._trigger(t, e)
            }
            return M
        }

        var x = [],
            b = [],
            w = {
                _version: "3.5.0",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function (t, e) {
                    var i = this;
                    setTimeout(function () {
                        e(i[t])
                    }, 0)
                },
                addTest: function (t, e, i) {
                    b.push({
                        name: t,
                        fn: e,
                        options: i
                    })
                },
                addAsyncTest: function (t) {
                    b.push({
                        name: null,
                        fn: t
                    })
                }
            },
            M = function () {
            };
        M.prototype = w, M = new M,
            /*!
          {
            "name": "Cookies",
            "property": "cookies",
            "tags": ["storage"],
            "authors": ["tauren"]
          }
          !*/
            M.addTest("cookies", function () {
                try {
                    e.cookie = "cookietest=1";
                    var t = -1 != e.cookie.indexOf("cookietest=");
                    return e.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
                } catch (t) {
                    return !1
                }
            }),
            /*!
          {
            "name": "Web Audio API",
            "property": "webaudio",
            "caniuse": "audio-api",
            "polyfills": ["xaudiojs", "dynamicaudiojs", "audiolibjs"],
            "tags": ["audio", "media"],
            "builderAliases": ["audio_webaudio_api"],
            "authors": ["Addy Osmani"],
            "notes": [{
              "name": "W3 Specification",
              "href": "https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html"
            }]
          }
          !*/
            M.addTest("webaudio", function () {
                var e = "webkitAudioContext" in t,
                    i = "AudioContext" in t;
                return M._config.usePrefixes ? e || i : i
            });
        var T = e.documentElement,
            S = "svg" === T.nodeName.toLowerCase(),
            A = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        w._prefixes = A;
        var P = w.testStyles = h;
        /*!
      {
        "name": "Touch Events",
        "property": "touchevents",
        "caniuse" : "touch",
        "tags": ["media", "attribute"],
        "notes": [{
          "name": "Touch Events spec",
          "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
        }],
        "warnings": [
          "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
        ],
        "knownBugs": [
          "False-positive on some configurations of Nokia N900",
          "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
        ]
      }
      !*/
        M.addTest("touchevents", function () {
            var i;
            if ("ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch) i = !0;
            else {
                var n = ["@media (", A.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                P(n, function (t) {
                    i = 9 === t.offsetTop
                })
            }
            return i
        });
        var E = "Moz O ms Webkit",
            C = w._config.usePrefixes ? E.split(" ") : [];
        w._cssomPrefixes = C;
        var L = w._config.usePrefixes ? E.toLowerCase().split(" ") : [];
        w._domPrefixes = L;
        var N = {
            elem: a("modernizr")
        };
        M._q.push(function () {
            delete N.elem
        });
        var O = {
            style: N.elem.style
        };
        M._q.unshift(function () {
            delete O.style
        }), w.testAllProps = g, w.testAllProps = y,
            /*!
          {
            "name": "CSS Background Clip Text",
            "property": "backgroundcliptext",
            "authors": ["ausi"],
            "tags": ["css"],
            "notes": [
              {
                "name": "CSS Tricks Article",
                "href": "https://css-tricks.com/image-under-text/"
              },
              {
                "name": "MDN Docs",
                "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip"
              },
              {
                "name": "Related Github Issue",
                "href": "https://github.com/Modernizr/Modernizr/issues/199"
              }
            ]
          }
          !*/
            M.addTest("backgroundcliptext", function () {
                return y("backgroundClip", "text")
            });
        var R;
        !function () {
            var t = {}.hasOwnProperty;
            R = r(t, "undefined") || r(t.call, "undefined") ? function (t, e) {
                return e in t && r(t.constructor.prototype[e], "undefined")
            } : function (e, i) {
                return t.call(e, i)
            }
        }(), w._l = {}, w.on = function (t, e) {
            this._l[t] || (this._l[t] = []), this._l[t].push(e), M.hasOwnProperty(t) && setTimeout(function () {
                M._trigger(t, M[t])
            }, 0)
        }, w._trigger = function (t, e) {
            if (this._l[t]) {
                var i = this._l[t];
                setTimeout(function () {
                    var t;
                    for (t = 0; t < i.length; t++) (0, i[t])(e)
                }, 0), delete this._l[t]
            }
        }, M._q.push(function () {
            w.addTest = _
        }),
            function () {
                var t, e, i, n, o, a, s;
                for (var h in b)
                    if (b.hasOwnProperty(h)) {
                        if (t = [], e = b[h], e.name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                            for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
                        for (n = r(e.fn, "function") ? e.fn() : e.fn, o = 0; o < t.length; o++) a = t[o], s = a.split("."), 1 === s.length ? M[s[0]] = n : (!M[s[0]] || M[s[0]] instanceof Boolean || (M[s[0]] = new Boolean(M[s[0]])), M[s[0]][s[1]] = n), x.push((n ? "" : "no-") + s.join("-"))
                    }
            }(), o(x), delete w.addTest, delete w.addAsyncTest;
        for (var I = 0; I < M._q.length; I++) M._q[I]();
        t.Modernizr = M
    }(window, document)
}