function (t, e, i) {
    var n, r;
    !function (o, a) {
        n = a, void 0 !== (r = "function" == typeof n ? n.call(e, i, e, t) : n) && (t.exports = r)
    }("undefined" != typeof window && window, function () {
        "use strict";

        function t() {
        }

        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this
            }
        }, e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[t] = i[t] || {})[e] = !0, this
            }
        }, e.off = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this
            }
        }, e.emitEvent = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                i = i.slice(0), e = e || [];
                for (var n = this._onceEvents && this._onceEvents[t], r = 0; r < i.length; r++) {
                    var o = i[r];
                    n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e)
                }
                return this
            }
        }, e.allOff = function () {
            delete this._events, delete this._onceEvents
        }, t
    })
}