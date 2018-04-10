function (t, e, i) {
    "use strict";
    var n;
    !function (r, o, a) {
        var s = window.matchMedia;
        void 0 !== t && t.exports ? t.exports = a(s) : void 0 !== (n = function () {
            return o.enquire = a(s)
        }.call(e, i, e, t)) && (t.exports = n)
    }(0, void 0, function (t) {
        function e(t, e) {
            var i = 0,
                n = t.length;
            for (i; i < n && !1 !== e(t[i], i); i++) ;
        }

        function i(t) {
            return "[object Array]" === Object.prototype.toString.apply(t)
        }

        function n(t) {
            return "function" == typeof t
        }

        function r(t) {
            this.options = t, !t.deferSetup && this.setup()
        }

        function o(e, i) {
            this.query = e, this.isUnconditional = i, this.handlers = [], this.mql = t(e);
            var n = this;
            this.listener = function (t) {
                n.mql = t, n.assess()
            }, this.mql.addListener(this.listener)
        }

        function a() {
            if (!t) throw new Error("matchMedia not present, legacy browsers require a polyfill");
            this.queries = {}, this.browserIsIncapable = !t("only all").matches
        }

        return r.prototype = {
            setup: function () {
                this.options.setup && this.options.setup(), this.initialised = !0
            },
            on: function () {
                !this.initialised && this.setup(), this.options.match && this.options.match()
            },
            off: function () {
                this.options.unmatch && this.options.unmatch()
            },
            destroy: function () {
                this.options.destroy ? this.options.destroy() : this.off()
            },
            equals: function (t) {
                return this.options === t || this.options.match === t
            }
        }, o.prototype = {
            addHandler: function (t) {
                var e = new r(t);
                this.handlers.push(e), this.matches() && e.on()
            },
            removeHandler: function (t) {
                var i = this.handlers;
                e(i, function (e, n) {
                    if (e.equals(t)) return e.destroy(), !i.splice(n, 1)
                })
            },
            matches: function () {
                return this.mql.matches || this.isUnconditional
            },
            clear: function () {
                e(this.handlers, function (t) {
                    t.destroy()
                }), this.mql.removeListener(this.listener), this.handlers.length = 0
            },
            assess: function () {
                var t = this.matches() ? "on" : "off";
                e(this.handlers, function (e) {
                    e[t]()
                })
            }
        }, a.prototype = {
            register: function (t, r, a) {
                var s = this.queries,
                    h = a && this.browserIsIncapable;
                return s[t] || (s[t] = new o(t, h)), n(r) && (r = {
                    match: r
                }), i(r) || (r = [r]), e(r, function (e) {
                    n(e) && (e = {
                        match: e
                    }), s[t].addHandler(e)
                }), this
            },
            unregister: function (t, e) {
                var i = this.queries[t];
                return i && (e ? i.removeHandler(e) : (i.clear(), delete this.queries[t])), this
            }
        }, new a
    })
}