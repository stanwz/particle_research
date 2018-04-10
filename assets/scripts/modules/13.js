function (t, e, i) {
    "use strict";
    /*!
 * Detectizr v2.2.0
 * http://barisaydinoglu.github.com/Detectizr/
 *
 * Written by Baris Aydinoglu (http://baris.aydinoglu.info) - Copyright 2012
 * Released under the MIT license
 *
 * Date: 2015-09-28T21:37Z
 */
    window.Detectizr = function (t, e, i, n) {
        function r(t, e) {
            var i, n, o;
            if (arguments.length > 2)
                for (i = 1, n = arguments.length; i < n; i += 1) r(t, arguments[i]);
            else
                for (o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            return t
        }

        function o(t) {
            return x.browser.userAgent.indexOf(t) > -1
        }

        function a(t) {
            return t.test(x.browser.userAgent)
        }

        function s(t) {
            return t.exec(x.browser.userAgent)
        }

        function h(t) {
            return t.replace(/^\s+|\s+$/g, "")
        }

        function c(t) {
            return null === t || t === n ? "" : String(t).replace(/((\s|\-|\.)+[a-z0-9])/g, function (t) {
                return t.toUpperCase().replace(/(\s|\-|\.)/g, "")
            })
        }

        function u(t, e) {
            var i = e || "",
                n = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(S, " ") : "");
            if (n) {
                for (; n.indexOf(" " + i + " ") >= 0;) n = n.replace(" " + i + " ", " ");
                t.className = e ? h(n) : ""
            }
        }

        function l(t, e, i) {
            t && (t = c(t), e && (e = c(e), p(t + e, !0), i && p(t + e + "_" + i, !0)))
        }

        function p(t, e) {
            t && b && (M.addAllFeaturesAsClass ? b.addTest(t, e) : (e = "function" == typeof e ? e() : e, e ? b.addTest(t, !0) : (delete b[t], u(A, t))))
        }

        function f(t, e) {
            t.version = e;
            var i = e.split(".");
            i.length > 0 ? (i = i.reverse(), t.major = i.pop(), i.length > 0 ? (t.minor = i.pop(), i.length > 0 ? (i = i.reverse(), t.patch = i.join(".")) : t.patch = "0") : t.minor = "0") : t.major = "0"
        }

        function d() {
            t.clearTimeout(y), y = t.setTimeout(function () {
                _ = x.device.orientation, t.innerHeight > t.innerWidth ? x.device.orientation = "portrait" : x.device.orientation = "landscape", p(x.device.orientation, !0), _ !== x.device.orientation && p(_, !1)
            }, 10)
        }

        function m(t) {
            var i, n, r, o, a, s = e.plugins;
            for (o = s.length - 1; o >= 0; o--) {
                for (i = s[o], n = i.name + i.description, r = 0, a = t.length; a >= 0; a--) -1 !== n.indexOf(t[a]) && (r += 1);
                if (r === t.length) return !0
            }
            return !1
        }

        function v(t) {
            var e;
            for (e = t.length - 1; e >= 0; e--) try {
                new ActiveXObject(t[e])
            } catch (t) {
            }
            return !1
        }

        function g(n) {
            var h, u, g, y, _, S, A;
            if (M = r({}, M, n || {}), M.detectDevice) {
                for (x.device = {
                    type: "",
                    model: "",
                    orientation: ""
                }, g = x.device, a(/googletv|smarttv|smart-tv|internet.tv|netcast|nettv|appletv|boxee|kylo|roku|dlnadoc|roku|pov_tv|hbbtv|ce\-html/) ? (g.type = w[0], g.model = "smartTv") : a(/xbox|playstation.3|wii/) ? (g.type = w[0], g.model = "gameConsole") : a(/ip(a|ro)d/) ? (g.type = w[1], g.model = "ipad") : a(/tablet/) && !a(/rx-34/) || a(/folio/) ? (g.type = w[1], g.model = String(s(/playbook/) || "")) : a(/linux/) && a(/android/) && !a(/fennec|mobi|htc.magic|htcX06ht|nexus.one|sc-02b|fone.945/) ? (g.type = w[1], g.model = "android") : a(/kindle/) || a(/mac.os/) && a(/silk/) ? (g.type = w[1], g.model = "kindle") : a(/gt-p10|sc-01c|shw-m180s|sgh-t849|sch-i800|shw-m180l|sph-p100|sgh-i987|zt180|htc(.flyer|\_flyer)|sprint.atp51|viewpad7|pandigital(sprnova|nova)|ideos.s7|dell.streak.7|advent.vega|a101it|a70bht|mid7015|next2|nook/) || a(/mb511/) && a(/rutem/) ? (g.type = w[1], g.model = "android") : a(/bb10/) ? (g.type = w[1], g.model = "blackberry") : (g.model = s(/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec|j2me/), null !== g.model ? (g.type = w[2], g.model = String(g.model)) : (g.model = "", a(/bolt|fennec|iris|maemo|minimo|mobi|mowser|netfront|novarra|prism|rx-34|skyfire|tear|xv6875|xv6975|google.wireless.transcoder/) ? g.type = w[2] : a(/opera/) && a(/windows.nt.5/) && a(/htc|xda|mini|vario|samsung\-gt\-i8000|samsung\-sgh\-i9/) ? g.type = w[2] : a(/windows.(nt|xp|me|9)/) && !a(/phone/) || a(/win(9|.9|nt)/) || a(/\(windows 8\)/) ? g.type = w[3] : a(/macintosh|powerpc/) && !a(/silk/) ? (g.type = w[3], g.model = "mac") : a(/linux/) && a(/x11/) ? g.type = w[3] : a(/solaris|sunos|bsd/) ? g.type = w[3] : a(/cros/) ? g.type = w[3] : a(/bot|crawler|spider|yahoo|ia_archiver|covario-ids|findlinks|dataparksearch|larbin|mediapartners-google|ng-search|snappy|teoma|jeeves|tineye/) && !a(/mobile/) ? (g.type = w[3], g.model = "crawler") : g.type = w[2])), h = 0, u = w.length; h < u; h += 1) p(w[h], g.type === w[h]);
                M.detectDeviceModel && p(c(g.model), !0)
            }
            if (M.detectScreen && (g.screen = {}, b && b.mq && (b.mq("only screen and (max-width: 240px)") ? (g.screen.size = "veryVerySmall", p("veryVerySmallScreen", !0)) : b.mq("only screen and (max-width: 320px)") ? (g.screen.size = "verySmall", p("verySmallScreen", !0)) : b.mq("only screen and (max-width: 480px)") && (g.screen.size = "small", p("smallScreen", !0)), g.type !== w[1] && g.type !== w[2] || b.mq("only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)") && (g.screen.resolution = "high", p("highresolution", !0))), g.type === w[1] || g.type === w[2] ? (t.onresize = function (t) {
                    d(t)
                }, d()) : (g.orientation = "landscape", p(g.orientation, !0))), M.detectOS && (x.os = {}, y = x.os, "" !== g.model && ("ipad" === g.model || "iphone" === g.model || "ipod" === g.model ? (y.name = "ios", f(y, (a(/os\s([\d_]+)/) ? RegExp.$1 : "").replace(/_/g, "."))) : "android" === g.model ? (y.name = "android", f(y, a(/android\s([\d\.]+)/) ? RegExp.$1 : "")) : "blackberry" === g.model ? (y.name = "blackberry", f(y, a(/version\/([^\s]+)/) ? RegExp.$1 : "")) : "playbook" === g.model && (y.name = "blackberry", f(y, a(/os ([^\s]+)/) ? RegExp.$1.replace(";", "") : ""))), y.name || (o("win") || o("16bit") ? (y.name = "windows", o("windows nt 10") ? f(y, "10") : o("windows nt 6.3") ? f(y, "8.1") : o("windows nt 6.2") || a(/\(windows 8\)/) ? f(y, "8") : o("windows nt 6.1") ? f(y, "7") : o("windows nt 6.0") ? f(y, "vista") : o("windows nt 5.2") || o("windows nt 5.1") || o("windows xp") ? f(y, "xp") : o("windows nt 5.0") || o("windows 2000") ? f(y, "2k") : o("winnt") || o("windows nt") ? f(y, "nt") : o("win98") || o("windows 98") ? f(y, "98") : (o("win95") || o("windows 95")) && f(y, "95")) : o("mac") || o("darwin") ? (y.name = "mac os", o("68k") || o("68000") ? f(y, "68k") : o("ppc") || o("powerpc") ? f(y, "ppc") : o("os x") && f(y, (a(/os\sx\s([\d_]+)/) ? RegExp.$1 : "os x").replace(/_/g, "."))) : o("webtv") ? y.name = "webtv" : o("x11") || o("inux") ? y.name = "linux" : o("sunos") ? y.name = "sun" : o("irix") ? y.name = "irix" : o("freebsd") ? y.name = "freebsd" : o("bsd") && (y.name = "bsd")), y.name && (p(y.name, !0), y.major && (l(y.name, y.major), y.minor && l(y.name, y.major, y.minor))), a(/\sx64|\sx86|\swin64|\swow64|\samd64/) ? y.addressRegisterSize = "64bit" : y.addressRegisterSize = "32bit", p(y.addressRegisterSize, !0)), M.detectBrowser && (_ = x.browser, a(/opera|webtv/) || !a(/msie\s([\d\w\.]+)/) && !o("trident") ? o("firefox") ? (_.engine = "gecko", _.name = "firefox", f(_, a(/firefox\/([\d\w\.]+)/) ? RegExp.$1 : "")) : o("gecko/") ? _.engine = "gecko" : o("opera") ? (_.name = "opera", _.engine = "presto", f(_, a(/version\/([\d\.]+)/) ? RegExp.$1 : a(/opera(\s|\/)([\d\.]+)/) ? RegExp.$2 : "")) : o("konqueror") ? _.name = "konqueror" : o("edge") ? (_.engine = "webkit", _.name = "edge", f(_, a(/edge\/([\d\.]+)/) ? RegExp.$1 : "")) : o("chrome") ? (_.engine = "webkit", _.name = "chrome", f(_, a(/chrome\/([\d\.]+)/) ? RegExp.$1 : "")) : o("iron") ? (_.engine = "webkit", _.name = "iron") : o("crios") ? (_.name = "chrome", _.engine = "webkit", f(_, a(/crios\/([\d\.]+)/) ? RegExp.$1 : "")) : o("applewebkit/") ? (_.name = "safari", _.engine = "webkit", f(_, a(/version\/([\d\.]+)/) ? RegExp.$1 : "")) : o("mozilla/") && (_.engine = "gecko") : (_.engine = "trident", _.name = "ie", !t.addEventListener && i.documentMode && 7 === i.documentMode ? f(_, "8.compat") : a(/trident.*rv[ :](\d+)\./) ? f(_, RegExp.$1) : f(_, a(/trident\/4\.0/) ? "8" : RegExp.$1)), _.name && (p(_.name, !0), _.major && (l(_.name, _.major), _.minor && l(_.name, _.major, _.minor))), p(_.engine, !0), _.language = e.userLanguage || e.language, p(_.language, !0)), M.detectPlugins) {
                for (_.plugins = [], h = T.length - 1; h >= 0; h--) S = T[h], A = !1, t.ActiveXObject ? A = v(S.progIds) : e.plugins && (A = m(S.substrs)), A && (_.plugins.push(S.name), p(S.name, !0));
                e.javaEnabled() && (_.plugins.push("java"), p("java", !0))
            }
        }

        var y, _, x = {},
            b = t.Modernizr,
            w = ["tv", "tablet", "mobile", "desktop"],
            M = {
                addAllFeaturesAsClass: !1,
                detectDevice: !0,
                detectDeviceModel: !0,
                detectScreen: !0,
                detectOS: !0,
                detectBrowser: !0,
                detectPlugins: !0
            },
            T = [{
                name: "adobereader",
                substrs: ["Adobe", "Acrobat"],
                progIds: ["AcroPDF.PDF", "PDF.PDFCtrl.5"]
            }, {
                name: "flash",
                substrs: ["Shockwave Flash"],
                progIds: ["ShockwaveFlash.ShockwaveFlash.1"]
            }, {
                name: "wmplayer",
                substrs: ["Windows Media"],
                progIds: ["wmplayer.ocx"]
            }, {
                name: "silverlight",
                substrs: ["Silverlight"],
                progIds: ["AgControl.AgControl"]
            }, {
                name: "quicktime",
                substrs: ["QuickTime"],
                progIds: ["QuickTime.QuickTime"]
            }],
            S = /[\t\r\n]/g,
            A = i.documentElement;
        return x.detect = function (t) {
            return g(t)
        }, x.init = function () {
            x !== n && (x.browser = {
                userAgent: (e.userAgent || e.vendor || t.opera).toLowerCase()
            }, x.detect())
        }, x.init(), x
    }(window, window.navigator, window.document)
}