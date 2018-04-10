function (t, e) {
    /*!
 * verge 1.10.2+201705300050
 * http://npm.im/verge
 * MIT Ryan Van Etten
 */
    !function (e, i, n) {
        void 0 !== t && t.exports ? t.exports = n() : e.verge = n()
    }(this, 0, function () {
        function t() {
            return {
                width: u(),
                height: l()
            }
        }

        function e(t, e) {
            var i = {};
            return e = +e || 0, i.width = (i.right = t.right + e) - (i.left = t.left - e), i.height = (i.bottom = t.bottom + e) - (i.top = t.top - e), i
        }

        function i(t, i) {
            return !(!(t = t && !t.nodeType ? t[0] : t) || 1 !== t.nodeType) && e(t.getBoundingClientRect(), i)
        }

        function n(e) {
            e = null == e ? t() : 1 === e.nodeType ? i(e) : e;
            var n = e.height,
                r = e.width;
            return n = "function" == typeof n ? n.call(e) : n, (r = "function" == typeof r ? r.call(e) : r) / n
        }

        var r = {},
            o = "undefined" != typeof window && window,
            a = "undefined" != typeof document && document,
            s = a && a.documentElement,
            h = o.matchMedia || o.msMatchMedia,
            c = h ? function (t) {
                return !!h.call(o, t).matches
            } : function () {
                return !1
            },
            u = r.viewportW = function () {
                var t = s.clientWidth,
                    e = o.innerWidth;
                return t < e ? e : t
            },
            l = r.viewportH = function () {
                var t = s.clientHeight,
                    e = o.innerHeight;
                return t < e ? e : t
            };
        return r.mq = c, r.matchMedia = h ? function () {
            return h.apply(o, arguments)
        } : function () {
            return {}
        }, r.viewport = t, r.scrollX = function () {
            return o.pageXOffset || s.scrollLeft
        }, r.scrollY = function () {
            return o.pageYOffset || s.scrollTop
        }, r.rectangle = i, r.aspect = n, r.inX = function (t, e) {
            var n = i(t, e);
            return !!n && n.right >= 0 && n.left <= u()
        }, r.inY = function (t, e) {
            var n = i(t, e);
            return !!n && n.bottom >= 0 && n.top <= l()
        }, r.inViewport = function (t, e) {
            var n = i(t, e);
            return !!n && n.bottom >= 0 && n.right >= 0 && n.top <= l() && n.left <= u()
        }, r
    })
}