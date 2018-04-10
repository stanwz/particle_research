function (t, e) {
    (function () {
        var t;
        t = void 0 !== e && null !== e ? e : this, t.Lethargy = function () {
            function t(t, e, i, n) {
                this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != n ? n : 150, this.lastUpDeltas = function () {
                    var t, e, i;
                    for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                    return i
                }.call(this), this.lastDownDeltas = function () {
                    var t, e, i;
                    for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                    return i
                }.call(this), this.deltasTimestamp = function () {
                    var t, e, i;
                    for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                    return i
                }.call(this)
            }

            return t.prototype.check = function (t) {
                var e;
                return t = t.originalEvent || t, null != t.wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
            }, t.prototype.isInertia = function (t) {
                var e, i, n, r, o, a, s;
                return e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas, null === e[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (n = e.slice(0, this.stability), i = e.slice(this.stability, 2 * this.stability), s = n.reduce(function (t, e) {
                    return t + e
                }), o = i.reduce(function (t, e) {
                    return t + e
                }), a = s / n.length, r = o / i.length, Math.abs(a) < Math.abs(r * this.tolerance) && this.sensitivity < Math.abs(r) && t)
            }, t.prototype.showLastUpDeltas = function () {
                return this.lastUpDeltas
            }, t.prototype.showLastDownDeltas = function () {
                return this.lastDownDeltas
            }, t
        }()
    }).call(this)
}