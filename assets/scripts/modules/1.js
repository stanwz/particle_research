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
        return (e || document).querySelector(t)
    }

    function o(t, e) {
        return (e || document).querySelectorAll(t)
    }

    function a(t, e) {
        if (t.parentNode && "function" == typeof t.parentNode.matches) return t.parentNode.matches(e) ? t.parentNode : a(t.parentNode, e)
    }

    function s(t) {
        return {
            top: t.getBoundingClientRect().top + document.body.scrollTop,
            left: t.getBoundingClientRect().left + document.body.scrollLeft
        }
    }

    function h(t) {
        var e = t.offsetWidth,
            i = getComputedStyle(t);
        return e += parseInt(i.marginLeft, 10) + parseInt(i.marginRight, 10)
    }

    function c(t) {
        var e = t.offsetHeight,
            i = getComputedStyle(t);
        return e += parseInt(i.marginTop, 10) + parseInt(i.marginBottom, 10)
    }

    function u(t, e) {
        e.parentNode.insertBefore(t, e.nextSibling)
    }

    function l(t, e) {
        t.parentNode.insertBefore(e, t), e.appendChild(t)
    }

    function p(t) {
        return [].concat(n(t.parentNode.children)).filter(function (e) {
            return e !== t
        })
    }

    function f(t) {
        for (var e = [], i = t.nextElementSibling; i;) e.push(i), i = i.nextElementSibling;
        return e
    }

    function d(t, e, i) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                capture: !1
            },
            r = !0 === x.default.passiveEvents ? n : n.capture;
        t.addEventListener(e, i, r)
    }

    function m(t, e, i) {
        t.removeEventListener(e, i)
    }

    function v(t, e, i, n) {
        function r(i) {
            var r = i.target,
                a = o(e, t);
            Array.prototype.indexOf.call(a, r) >= 0 && n.call(r, i)
        }

        d(t, i, r, "blur" === i || "focus" === i)
    }

    function g(t, e) {
        return void 0 === t.forEach ? Object.keys(t).forEach(function (i) {
            e(t[i], i)
        }) : t.forEach(e), t
    }

    function y(t, e) {
        return void 0 === t.map ? Object.keys(t).map(function (i) {
            return e(t[i], i)
        }) : t.map(e)
    }

    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.map = e.forEach = e.$delegate = e.$off = e.$on = e.$nextSiblings = e.$siblings = e.$wrap = e.$insertAfter = e.$outerHeight = e.$outerWidth = e.$offset = e.$parent = e.qsa = e.qs = void 0;
    var _ = i(20),
        x = function (t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(_);
    e.qs = r, e.qsa = o, e.$parent = a, e.$offset = s, e.$outerWidth = h, e.$outerHeight = c, e.$insertAfter = u, e.$wrap = l, e.$siblings = p, e.$nextSiblings = f, e.$on = d, e.$off = m, e.$delegate = v, e.forEach = g, e.map = y
}