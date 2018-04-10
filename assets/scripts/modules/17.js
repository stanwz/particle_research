function (t, e, i) {
    "use strict";

    function n() {
    }

    function r(t, e, i) {
        this.fn = t, this.context = e, this.once = i || !1
    }

    function o() {
        this._events = new n, this._eventsCount = 0
    }

    var a = Object.prototype.hasOwnProperty,
        s = "~";
    Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (s = !1)), o.prototype.eventNames = function () {
        var t, e, i = [];
        if (0 === this._eventsCount) return i;
        for (e in t = this._events) a.call(t, e) && i.push(s ? e.slice(1) : e);
        return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
    }, o.prototype.listeners = function (t, e) {
        var i = s ? s + t : t,
            n = this._events[i];
        if (e) return !!n;
        if (!n) return [];
        if (n.fn) return [n.fn];
        for (var r = 0, o = n.length, a = new Array(o); r < o; r++) a[r] = n[r].fn;
        return a
    }, o.prototype.emit = function (t, e, i, n, r, o) {
        var a = s ? s + t : t;
        if (!this._events[a]) return !1;
        var h, c, u = this._events[a],
            l = arguments.length;
        if (u.fn) {
            switch (u.once && this.removeListener(t, u.fn, void 0, !0), l) {
                case 1:
                    return u.fn.call(u.context), !0;
                case 2:
                    return u.fn.call(u.context, e), !0;
                case 3:
                    return u.fn.call(u.context, e, i), !0;
                case 4:
                    return u.fn.call(u.context, e, i, n), !0;
                case 5:
                    return u.fn.call(u.context, e, i, n, r), !0;
                case 6:
                    return u.fn.call(u.context, e, i, n, r, o), !0
            }
            for (c = 1, h = new Array(l - 1); c < l; c++) h[c - 1] = arguments[c];
            u.fn.apply(u.context, h)
        } else {
            var p, f = u.length;
            for (c = 0; c < f; c++) switch (u[c].once && this.removeListener(t, u[c].fn, void 0, !0), l) {
                case 1:
                    u[c].fn.call(u[c].context);
                    break;
                case 2:
                    u[c].fn.call(u[c].context, e);
                    break;
                case 3:
                    u[c].fn.call(u[c].context, e, i);
                    break;
                case 4:
                    u[c].fn.call(u[c].context, e, i, n);
                    break;
                default:
                    if (!h)
                        for (p = 1, h = new Array(l - 1); p < l; p++) h[p - 1] = arguments[p];
                    u[c].fn.apply(u[c].context, h)
            }
        }
        return !0
    }, o.prototype.on = function (t, e, i) {
        var n = new r(e, i || this),
            o = s ? s + t : t;
        return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], n] : this._events[o].push(n) : (this._events[o] = n, this._eventsCount++), this
    }, o.prototype.once = function (t, e, i) {
        var n = new r(e, i || this, !0),
            o = s ? s + t : t;
        return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], n] : this._events[o].push(n) : (this._events[o] = n, this._eventsCount++), this
    }, o.prototype.removeListener = function (t, e, i, r) {
        var o = s ? s + t : t;
        if (!this._events[o]) return this;
        if (!e) return 0 == --this._eventsCount ? this._events = new n : delete this._events[o], this;
        var a = this._events[o];
        if (a.fn) a.fn !== e || r && !a.once || i && a.context !== i || (0 == --this._eventsCount ? this._events = new n : delete this._events[o]);
        else {
            for (var h = 0, c = [], u = a.length; h < u; h++) (a[h].fn !== e || r && !a[h].once || i && a[h].context !== i) && c.push(a[h]);
            c.length ? this._events[o] = 1 === c.length ? c[0] : c : 0 == --this._eventsCount ? this._events = new n : delete this._events[o]
        }
        return this
    }, o.prototype.removeAllListeners = function (t) {
        var e;
        return t ? (e = s ? s + t : t, this._events[e] && (0 == --this._eventsCount ? this._events = new n : delete this._events[e])) : (this._events = new n, this._eventsCount = 0), this
    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function () {
        return this
    }, o.prefixed = s, o.EventEmitter = o, t.exports = o
}