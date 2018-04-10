function (t, e, i) {
    (function (i) {
        var n, r, o = void 0 !== t && t.exports && void 0 !== i ? i : this || window;
        (o._gsQueue || (o._gsQueue = [])).push(function () {
            "use strict";
            o._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
                var n = function (t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++])) ;
                        return i
                    },
                    r = function (t, e, i) {
                        var n, r, o = t.cycle;
                        for (n in o) r = o[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                        delete t.cycle
                    },
                    o = function (t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = o.prototype.render
                    },
                    a = i._internals,
                    s = a.isSelector,
                    h = a.isArray,
                    c = o.prototype = i.to({}, .1, {}),
                    u = [];
                o.version = "1.20.3", c.constructor = o, c.kill()._gc = !1, o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf, o.getTweensOf = i.getTweensOf, o.lagSmoothing = i.lagSmoothing, o.ticker = i.ticker, o.render = i.render, c.invalidate = function () {
                    return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
                }, c.updateTo = function (t, e) {
                    var n, r = this.ratio,
                        o = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || o)
                        if (e) this._initted = !1, o && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                            var a = this._totalTime;
                            this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                        } else if (this._initted = !1, this._init(), this._time > 0 || o)
                            for (var s, h = 1 / (1 - r), c = this._firstPT; c;) s = c.s + c.c, c.c *= h, c.s = s - c.c, c = c._next;
                    return this
                }, c.render = function (t, e, n) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var r, o, s, h, c, u, l, p, f, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._time,
                        v = this._totalTime,
                        g = this._cycle,
                        y = this._duration,
                        _ = this._rawPrevTime;
                    if (t >= d - 1e-7 && t >= 0 ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, o = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (_ < 0 || t <= 0 && t >= -1e-7 || 1e-10 === _ && "isPause" !== this.data) && _ !== t && (n = !0, _ > 1e-10 && (o = "onReverseComplete")), this._rawPrevTime = p = !e || t || _ === t ? t : 1e-10)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== v || 0 === y && _ > 0) && (o = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || n) && (_ >= 0 && (n = !0), this._rawPrevTime = p = !e || t || _ === t ? t : 1e-10)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = y + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && v <= t && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (f = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== f || this._initted ? this._yoyoEase = f = !0 === f ? this._ease : f instanceof Ease ? f : Ease.map[f] : (f = this.vars.ease, this._yoyoEase = f = f ? f instanceof Ease ? f : "function" == typeof f ? new Ease(f, this.vars.easeParams) : Ease.map[f] || i.defaultEase : i.defaultEase)), this.ratio = f ? 1 - f.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !f ? (c = this._time / y, u = this._easeType, l = this._easePower, (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === l ? c *= c : 2 === l ? c *= c * c : 3 === l ? c *= c * c * c : 4 === l && (c *= c * c * c * c), 1 === u ? this.ratio = 1 - c : 2 === u ? this.ratio = c : this._time / y < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : f || (this.ratio = this._ease.getRatio(this._time / y))), m === this._time && !n && g === this._cycle) return void(v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = v, this._rawPrevTime = _, this._cycle = g, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                        !this._time || r || f ? r && this._ease._calcEnd && !f && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y)
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === v && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : o || (o = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== y || e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, n), e || (this._totalTime !== v || o) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), o && (this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o), 0 === y && 1e-10 === this._rawPrevTime && 1e-10 !== p && (this._rawPrevTime = 0)))
                }, o.to = function (t, e, i) {
                    return new o(t, e, i)
                }, o.from = function (t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new o(t, e, i)
                }, o.fromTo = function (t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new o(t, e, n)
                }, o.staggerTo = o.allTo = function (t, e, a, c, l, p, f) {
                    c = c || 0;
                    var d, m, v, g, y = 0,
                        _ = [],
                        x = function () {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), l.apply(f || a.callbackScope || this, p || u)
                        },
                        b = a.cycle,
                        w = a.startAt && a.startAt.cycle;
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), s(t) && (t = n(t))), t = t || [], c < 0 && (t = n(t), t.reverse(), c *= -1), d = t.length - 1, v = 0; v <= d; v++) {
                        m = {};
                        for (g in a) m[g] = a[g];
                        if (b && (r(m, t, v), null != m.duration && (e = m.duration, delete m.duration)), w) {
                            w = m.startAt = {};
                            for (g in a.startAt) w[g] = a.startAt[g];
                            r(m.startAt, t, v)
                        }
                        m.delay = y + (m.delay || 0), v === d && l && (m.onComplete = x), _[v] = new o(t[v], e, m), y += c
                    }
                    return _
                }, o.staggerFrom = o.allFrom = function (t, e, i, n, r, a, s) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, o.staggerTo(t, e, i, n, r, a, s)
                }, o.staggerFromTo = o.allFromTo = function (t, e, i, n, r, a, s, h) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, o.staggerTo(t, e, n, r, a, s, h)
                }, o.delayedCall = function (t, e, i, n, r) {
                    return new o(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, o.set = function (t, e) {
                    return new o(t, 0, e)
                }, o.isTweening = function (t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var l = function (t, e) {
                        for (var n = [], r = 0, o = t._first; o;) o instanceof i ? n[r++] = o : (e && (n[r++] = o), n = n.concat(l(o, e)), r = n.length), o = o._next;
                        return n
                    },
                    p = o.getAllTweens = function (e) {
                        return l(t._rootTimeline, e).concat(l(t._rootFramesTimeline, e))
                    };
                o.killAll = function (t, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var o, a, s, h = p(0 != r),
                        c = h.length,
                        u = i && n && r;
                    for (s = 0; s < c; s++) a = h[s], (u || a instanceof e || (o = a.target === a.vars.onComplete) && n || i && !o) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, o.killChildTweensOf = function (t, e) {
                    if (null != t) {
                        var r, c, u, l, p, f = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), s(t) && (t = n(t)), h(t))
                            for (l = t.length; --l > -1;) o.killChildTweensOf(t[l], e);
                        else {
                            r = [];
                            for (u in f)
                                for (c = f[u].target.parentNode; c;) c === t && (r = r.concat(f[u].tweens)), c = c.parentNode;
                            for (p = r.length, l = 0; l < p; l++) e && r[l].totalTime(r[l].totalDuration()), r[l]._enabled(!1, !1)
                        }
                    }
                };
                var f = function (t, i, n, r) {
                    i = !1 !== i, n = !1 !== n, r = !1 !== r;
                    for (var o, a, s = p(r), h = i && n && r, c = s.length; --c > -1;) a = s[c], (h || a instanceof e || (o = a.target === a.vars.onComplete) && n || i && !o) && a.paused(t)
                };
                return o.pauseAll = function (t, e, i) {
                    f(!0, t, e, i)
                }, o.resumeAll = function (t, e, i) {
                    f(!1, t, e, i)
                }, o.globalTimeScale = function (e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || 1e-10, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, c.progress = function (t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, c.totalProgress = function (t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, c.time = function (t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.duration = function (e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, c.totalDuration = function (t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, c.repeat = function (t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function (t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function (t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, o
            }, !0), o._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
                var n = function (t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r) i = r[n], h(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = i._internals,
                    a = n._internals = {},
                    s = r.isSelector,
                    h = r.isArray,
                    c = r.lazyTweens,
                    u = r.lazyRender,
                    l = o._gsDefine.globals,
                    p = function (t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    f = function (t, e, i) {
                        var n, r, o = t.cycle;
                        for (n in o) r = o[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                        delete t.cycle
                    },
                    d = a.pauseCallback = function () {
                    },
                    m = function (t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++])) ;
                        return i
                    },
                    v = n.prototype = new e;
                return n.version = "1.20.3", v.constructor = n, v.kill()._gc = v._forcingPlayhead = v._hasPause = !1, v.to = function (t, e, n, r) {
                    var o = n.repeat && l.TweenMax || i;
                    return e ? this.add(new o(t, e, n), r) : this.set(t, n, r)
                }, v.from = function (t, e, n, r) {
                    return this.add((n.repeat && l.TweenMax || i).from(t, e, n), r)
                }, v.fromTo = function (t, e, n, r, o) {
                    var a = r.repeat && l.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, n, r), o) : this.set(t, r, o)
                }, v.staggerTo = function (t, e, r, o, a, h, c, u) {
                    var l, d, v = new n({
                            onComplete: h,
                            onCompleteParams: c,
                            callbackScope: u,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        g = r.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], s(t) && (t = m(t)), o = o || 0, o < 0 && (t = m(t), t.reverse(), o *= -1), d = 0; d < t.length; d++) l = p(r), l.startAt && (l.startAt = p(l.startAt), l.startAt.cycle && f(l.startAt, t, d)), g && (f(l, t, d), null != l.duration && (e = l.duration, delete l.duration)), v.to(t[d], e, l, d * o);
                    return this.add(v, a)
                }, v.staggerFrom = function (t, e, i, n, r, o, a, s) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, o, a, s)
                }, v.staggerFromTo = function (t, e, i, n, r, o, a, s, h) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, o, a, s, h)
                }, v.call = function (t, e, n, r) {
                    return this.add(i.delayedCall(0, t, e, n), r)
                }, v.set = function (t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function (t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, o, a, s, h = new n(t),
                        c = h._timeline;
                    for (null == e && (e = !0), c._remove(h, !0), h._startTime = 0, h._rawPrevTime = h._time = h._totalTime = c._time, a = c._first; a;) s = a._next, e && a instanceof i && a.target === a.vars.onComplete || (o = a._startTime - a._delay, o < 0 && (r = 1), h.add(a, o)), a = s;
                    return c.add(h, 0), r && h.totalDuration(), h
                }, v.add = function (r, o, a, s) {
                    var c, u, l, p, f, d;
                    if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && h(r)) {
                            for (a = a || "normal", s = s || 0, c = o, u = r.length, l = 0; l < u; l++) h(p = r[l]) && (p = new n({
                                tweens: p
                            })), this.add(p, c), "string" != typeof p && "function" != typeof p && ("sequence" === a ? c = p._startTime + p.totalDuration() / p._timeScale : "start" === a && (p._startTime -= p.delay())), c += s;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, o);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, o), r._time && r.render((this.rawTime() - r._startTime) * r._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = this, d = f.rawTime() > r._startTime; f._timeline;) d && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                    return this
                }, v.remove = function (e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && h(e)) {
                        for (var n = e.length; --n > -1;) this.remove(e[n]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, v._remove = function (t, i) {
                    return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, v.append = function (t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, v.insert = v.insertMultiple = function (t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, v.appendMultiple = function (t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, v.addLabel = function (t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, v.addPause = function (t, e, n, r) {
                    var o = i.delayedCall(0, d, n, r || this);
                    return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t)
                }, v.removeLabel = function (t) {
                    return delete this._labels[t], this
                }, v.getLabelTime = function (t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, v._parseTimeOrLabel = function (e, i, n, r) {
                    var o, a;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && h(r)))
                        for (a = r.length; --a > -1;) r[a] instanceof t && r[a].timeline === this && this.remove(r[a]);
                    if (o = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - o : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = o);
                    else {
                        if (-1 === (a = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = o + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1)), e = a > 1 ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, n) : o
                    }
                    return Number(e) + i
                }, v.seek = function (t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                }, v.stop = function () {
                    return this.paused(!0)
                }, v.gotoAndPlay = function (t, e) {
                    return this.play(t, e)
                }, v.gotoAndStop = function (t, e) {
                    return this.pause(t, e)
                }, v.render = function (t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, r, o, a, s, h, l, p = this._time,
                        f = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._startTime,
                        m = this._timeScale,
                        v = this._paused;
                    if (p !== this._time && (t += this._time - p), t >= f - 1e-7 && t >= 0) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", s = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (s = !0, this._rawPrevTime > 1e-10 && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = f + 1e-4;
                    else if (t < 1e-7)
                        if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (a = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (s = r = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (s = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                            t = 0, this._initted || (s = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= p)
                                for (n = this._first; n && n._startTime <= t && !h;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !h;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n), n = n._prev;
                            h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== p && this._first || i || s || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (l = this._time) >= p)
                            for (n = this._first; n && (o = n._next, l === this._time && (!this._paused || v));) (n._active || n._startTime <= l && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                        else
                            for (n = this._last; n && (o = n._prev, l === this._time && (!this._paused || v));) {
                                if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                                    if (h === n) {
                                        for (h = n._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                                        h = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = o
                            }
                        this._onUpdate && (e || (c.length && u(), this._callback("onUpdate"))), a && (this._gc || d !== this._startTime && m === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (r && (c.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                    }
                }, v._hasPausedChild = function () {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, v.getChildren = function (t, e, n, r) {
                    r = r || -9999999999;
                    for (var o = [], a = this._first, s = 0; a;) a._startTime < r || (a instanceof i ? !1 !== e && (o[s++] = a) : (!1 !== n && (o[s++] = a), !1 !== t && (o = o.concat(a.getChildren(!0, e, n)), s = o.length))), a = a._next;
                    return o
                }, v.getTweensOf = function (t, e) {
                    var n, r, o = this._gc,
                        a = [],
                        s = 0;
                    for (o && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;) (n[r].timeline === this || e && this._contains(n[r])) && (a[s++] = n[r]);
                    return o && this._enabled(!1, !0), a
                }, v.recent = function () {
                    return this._recent
                }, v._contains = function (t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, v.shiftChildren = function (t, e, i) {
                    i = i || 0;
                    for (var n, r = this._first, o = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (n in o) o[n] >= i && (o[n] += t);
                    return this._uncache(!0)
                }, v._kill = function (t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                    return r
                }, v.clear = function (t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}), this._uncache(!0)
                }, v.invalidate = function () {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, v._enabled = function (t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, v.totalTime = function (e, i, n) {
                    this._forcingPlayhead = !0;
                    var r = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, v.duration = function (t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, v.totalDuration = function (t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, r = this._last, o = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(r, r._startTime - r._delay), this._calculatingDuration = 0) : o = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale, this._time -= r._startTime, this._totalTime -= r._startTime, this._rawPrevTime -= r._startTime), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, v.paused = function (e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, v.usesFrames = function () {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, v.rawTime = function (t) {
                    return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                }, n
            }, !0), o._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
                var n = function (e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                    },
                    r = e._internals,
                    a = r.lazyTweens,
                    s = r.lazyRender,
                    h = o._gsDefine.globals,
                    c = new i(null, null, 1, 0),
                    u = n.prototype = new t;
                return u.constructor = n, u.kill()._gc = !1, n.version = "1.20.3", u.invalidate = function () {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, u.addCallback = function (t, i, n, r) {
                    return this.add(e.delayedCall(0, t, n, r), i)
                }, u.removeCallback = function (t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                    return this
                }, u.removePause = function (e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, u.tweenTo = function (t, i) {
                    i = i || {};
                    var n, r, o, a = {
                            ease: c,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        },
                        s = i.repeat && h.TweenMax || e;
                    for (r in i) a[r] = i[r];
                    return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, o = new s(this, n, a), a.onStart = function () {
                        o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || o, i.onStartParams || [])
                    }, o
                }, u.tweenFromTo = function (t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = !1 !== i.immediateRender;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, u.render = function (t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, r, o, h, c, u, l, p, f = this._time,
                        d = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._duration,
                        v = this._totalTime,
                        g = this._startTime,
                        y = this._timeScale,
                        _ = this._rawPrevTime,
                        x = this._paused,
                        b = this._cycle;
                    if (f !== this._time && (t += this._time - f), t >= d - 1e-7 && t >= 0) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, h = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || _ < 0 || 1e-10 === _) && _ !== t && this._first && (c = !0, _ > 1e-10 && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
                    else if (t < 1e-7)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== f || 0 === m && 1e-10 !== _ && (_ > 0 || t < 0 && _ >= 0) && !this._locked) && (h = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = r = !0, h = "onReverseComplete") : _ >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                            t = 0, this._initted || (c = !0)
                        }
                    else if (0 === m && _ < 0 && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = m + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && v <= t && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if ((t = this._time) >= f || this._repeat && b !== this._cycle)
                            for (n = this._first; n && n._startTime <= t && !l;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (l = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !l;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (l = n), n = n._prev;
                        l && l._startTime < m && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== b && !this._locked) {
                        var w = this._yoyo && 0 != (1 & b),
                            M = w === (this._yoyo && 0 != (1 & this._cycle)),
                            T = this._totalTime,
                            S = this._cycle,
                            A = this._rawPrevTime,
                            P = this._time;
                        if (this._totalTime = b * m, this._cycle < b ? w = !w : this._totalTime += m, this._time = f, this._rawPrevTime = 0 === m ? _ - 1e-4 : _, this._cycle = b, this._locked = !0, f = w ? 0 : m, this.render(f, e, 0 === m), e || this._gc || this.vars.onRepeat && (this._cycle = S, this._locked = !1, this._callback("onRepeat")), f !== this._time) return;
                        if (M && (this._cycle = b, this._locked = !0, f = w ? m + 1e-4 : -1e-4, this.render(f, !0, !1)), this._locked = !1, this._paused && !x) return;
                        this._time = P, this._totalTime = T, this._cycle = S, this._rawPrevTime = A
                    }
                    if (!(this._time !== f && this._first || i || c || l)) return void(v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== v && t > 0 && (this._active = !0), 0 === v && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (p = this._time) >= f)
                        for (n = this._first; n && (o = n._next, p === this._time && (!this._paused || x));) (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (l === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                    else
                        for (n = this._last; n && (o = n._prev, p === this._time && (!this._paused || x));) {
                            if (n._active || n._startTime <= f && !n._paused && !n._gc) {
                                if (l === n) {
                                    for (l = n._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                                    l = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = o
                        }
                    this._onUpdate && (e || (a.length && s(), this._callback("onUpdate"))), h && (this._locked || this._gc || g !== this._startTime && y === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (r && (a.length && s(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
                }, u.getActive = function (t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, r, o = [],
                        a = this.getChildren(t, e, i),
                        s = 0,
                        h = a.length;
                    for (n = 0; n < h; n++) r = a[n], r.isActive() && (o[s++] = r);
                    return o
                }, u.getLabelAfter = function (t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; e < n; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, u.getLabelBefore = function (t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, u.getLabelsArray = function () {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function (t, e) {
                        return t.time - e.time
                    }), e
                }, u.invalidate = function () {
                    return this._locked = !1, t.prototype.invalidate.call(this)
                }, u.progress = function (t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
                }, u.totalProgress = function (t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
                }, u.totalDuration = function (e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, u.time = function (t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, u.repeat = function (t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function (t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function (t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, u.currentLabel = function (t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
                function () {
                    var t = 180 / Math.PI,
                        e = [],
                        i = [],
                        n = [],
                        r = {},
                        a = o._gsDefine.globals,
                        s = function (t, e, i, n) {
                            i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                        },
                        h = function (t, e, i, n) {
                            var r = {
                                    a: t
                                },
                                o = {},
                                a = {},
                                s = {
                                    c: n
                                },
                                h = (t + e) / 2,
                                c = (e + i) / 2,
                                u = (i + n) / 2,
                                l = (h + c) / 2,
                                p = (c + u) / 2,
                                f = (p - l) / 8;
                            return r.b = h + (t - h) / 4, o.b = l + f, r.c = o.a = (r.b + o.b) / 2, o.c = a.a = (l + p) / 2, a.b = p - f, s.b = u + (n - u) / 4, a.c = s.a = (a.b + s.b) / 2, [r, o, a, s]
                        },
                        c = function (t, r, o, a, s) {
                            var c, u, l, p, f, d, m, v, g, y, _, x, b, w = t.length - 1,
                                M = 0,
                                T = t[0].a;
                            for (c = 0; c < w; c++) f = t[M], u = f.a, l = f.d, p = t[M + 1].d, s ? (_ = e[c], x = i[c], b = (x + _) * r * .25 / (a ? .5 : n[c] || .5), d = l - (l - u) * (a ? .5 * r : 0 !== _ ? b / _ : 0), m = l + (p - l) * (a ? .5 * r : 0 !== x ? b / x : 0), v = l - (d + ((m - d) * (3 * _ / (_ + x) + .5) / 4 || 0))) : (d = l - (l - u) * r * .5, m = l + (p - l) * r * .5, v = l - (d + m) / 2), d += v, m += v, f.c = g = d, f.b = 0 !== c ? T : T = f.a + .6 * (f.c - f.a), f.da = l - u, f.ca = g - u, f.ba = T - u, o ? (y = h(u, T, g, l), t.splice(M, 1, y[0], y[1], y[2], y[3]), M += 4) : M++, T = m;
                            f = t[M], f.b = T, f.c = T + .4 * (f.d - T), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = T - f.a, o && (y = h(f.a, T, f.c, f.d), t.splice(M, 1, y[0], y[1], y[2], y[3]))
                        },
                        u = function (t, n, r, o) {
                            var a, h, c, u, l, p, f = [];
                            if (o)
                                for (t = [o].concat(t), h = t.length; --h > -1;) "string" == typeof(p = t[h][n]) && "=" === p.charAt(1) && (t[h][n] = o[n] + Number(p.charAt(0) + p.substr(2)));
                            if ((a = t.length - 2) < 0) return f[0] = new s(t[0][n], 0, 0, t[0][n]), f;
                            for (h = 0; h < a; h++) c = t[h][n], u = t[h + 1][n], f[h] = new s(c, 0, 0, u), r && (l = t[h + 2][n], e[h] = (e[h] || 0) + (u - c) * (u - c), i[h] = (i[h] || 0) + (l - u) * (l - u));
                            return f[h] = new s(t[h][n], 0, 0, t[h + 1][n]), f
                        },
                        l = function (t, o, a, s, h, l) {
                            var p, f, d, m, v, g, y, _, x = {},
                                b = [],
                                w = l || t[0];
                            h = "string" == typeof h ? "," + h + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == o && (o = 1);
                            for (f in t[0]) b.push(f);
                            if (t.length > 1) {
                                for (_ = t[t.length - 1], y = !0, p = b.length; --p > -1;)
                                    if (f = b[p], Math.abs(w[f] - _[f]) > .05) {
                                        y = !1;
                                        break
                                    }
                                y && (t = t.concat(), l && t.unshift(l), t.push(t[1]), l = t[t.length - 3])
                            }
                            for (e.length = i.length = n.length = 0, p = b.length; --p > -1;) f = b[p], r[f] = -1 !== h.indexOf("," + f + ","), x[f] = u(t, f, r[f], l);
                            for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
                            if (!s) {
                                for (p = b.length; --p > -1;)
                                    if (r[f])
                                        for (d = x[b[p]], g = d.length - 1, m = 0; m < g; m++) v = d[m + 1].da / i[m] + d[m].da / e[m] || 0, n[m] = (n[m] || 0) + v * v;
                                for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                            }
                            for (p = b.length, m = a ? 4 : 1; --p > -1;) f = b[p], d = x[f], c(d, o, a, s, r[f]), y && (d.splice(0, m), d.splice(d.length - m, m));
                            return x
                        },
                        p = function (t, e, i) {
                            e = e || "soft";
                            var n, r, o, a, h, c, u, l, p, f, d, m = {},
                                v = "cubic" === e ? 3 : 2,
                                g = "soft" === e,
                                y = [];
                            if (g && i && (t = [i].concat(t)), null == t || t.length < v + 1) throw "invalid Bezier data";
                            for (p in t[0]) y.push(p);
                            for (c = y.length; --c > -1;) {
                                for (p = y[c], m[p] = h = [], f = 0, l = t.length, u = 0; u < l; u++) n = null == i ? t[u][p] : "string" == typeof(d = t[u][p]) && "=" === d.charAt(1) ? i[p] + Number(d.charAt(0) + d.substr(2)) : Number(d), g && u > 1 && u < l - 1 && (h[f++] = (n + h[f - 2]) / 2), h[f++] = n;
                                for (l = f - v + 1, f = 0, u = 0; u < l; u += v) n = h[u], r = h[u + 1], o = h[u + 2], a = 2 === v ? 0 : h[u + 3], h[f++] = d = 3 === v ? new s(n, r, o, a) : new s(n, (2 * r + n) / 3, (2 * r + o) / 3, o);
                                h.length = f
                            }
                            return m
                        },
                        f = function (t, e, i) {
                            for (var n, r, o, a, s, h, c, u, l, p, f, d = 1 / i, m = t.length; --m > -1;)
                                for (p = t[m], o = p.a, a = p.d - o, s = p.c - o, h = p.b - o, n = r = 0, u = 1; u <= i; u++) c = d * u, l = 1 - c, n = r - (r = (c * c * a + 3 * l * (c * s + l * h)) * c), f = m * i + u - 1, e[f] = (e[f] || 0) + n * n
                        },
                        d = function (t, e) {
                            e = e >> 0 || 6;
                            var i, n, r, o, a = [],
                                s = [],
                                h = 0,
                                c = 0,
                                u = e - 1,
                                l = [],
                                p = [];
                            for (i in t) f(t[i], a, e);
                            for (r = a.length, n = 0; n < r; n++) h += Math.sqrt(a[n]), o = n % e, p[o] = h, o === u && (c += h, o = n / e >> 0, l[o] = p, s[o] = c, h = 0, p = []);
                            return {
                                length: c,
                                lengths: s,
                                segments: l
                            }
                        },
                        m = o._gsDefine.plugin({
                            propName: "bezier",
                            priority: -1,
                            version: "1.3.8",
                            API: 2,
                            global: !0,
                            init: function (t, e, i) {
                                this._target = t, e instanceof Array && (e = {
                                    values: e
                                }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                                var n, r, o, a, s, h = e.values || [],
                                    c = {},
                                    u = h[0],
                                    f = e.autoRotate || i.vars.orientToBezier;
                                this._autoRotate = f ? f instanceof Array ? f : [
                                    ["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]
                                ] : null;
                                for (n in u) this._props.push(n);
                                for (o = this._props.length; --o > -1;) n = this._props[o], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], c[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), s || c[n] !== h[0][n] && (s = c);
                                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? l(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, s) : p(h, e.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                                    var m = d(this._beziers, this._timeRes);
                                    this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                                }
                                if (f = this._autoRotate)
                                    for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), o = f.length; --o > -1;) {
                                        for (a = 0; a < 3; a++) n = f[o][a], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                        n = f[o][2], this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                                    }
                                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                            },
                            set: function (e) {
                                var i, n, r, o, a, s, h, c, u, l, p = this._segCount,
                                    f = this._func,
                                    d = this._target,
                                    m = e !== this._startRatio;
                                if (this._timeRes) {
                                    if (u = this._lengths, l = this._curSeg, e *= this._length, r = this._li, e > this._l2 && r < p - 1) {
                                        for (c = p - 1; r < c && (this._l2 = u[++r]) <= e;) ;
                                        this._l1 = u[r - 1], this._li = r, this._curSeg = l = this._segments[r], this._s2 = l[this._s1 = this._si = 0]
                                    } else if (e < this._l1 && r > 0) {
                                        for (; r > 0 && (this._l1 = u[--r]) >= e;) ;
                                        0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = u[r], this._li = r, this._curSeg = l = this._segments[r], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si]
                                    }
                                    if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < l.length - 1) {
                                        for (c = l.length - 1; r < c && (this._s2 = l[++r]) <= e;) ;
                                        this._s1 = l[r - 1], this._si = r
                                    } else if (e < this._s1 && r > 0) {
                                        for (; r > 0 && (this._s1 = l[--r]) >= e;) ;
                                        0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = l[r], this._si = r
                                    }
                                    s = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                                } else i = e < 0 ? 0 : e >= 1 ? p - 1 : p * e >> 0, s = (e - i * (1 / p)) * p;
                                for (n = 1 - s, r = this._props.length; --r > -1;) o = this._props[r], a = this._beziers[o][i], h = (s * s * a.da + 3 * n * (s * a.ca + n * a.ba)) * s + a.a, this._mod[o] && (h = this._mod[o](h, d)), f[o] ? d[o](h) : d[o] = h;
                                if (this._autoRotate) {
                                    var v, g, y, _, x, b, w, M = this._autoRotate;
                                    for (r = M.length; --r > -1;) o = M[r][2], b = M[r][3] || 0, w = !0 === M[r][4] ? 1 : t, a = this._beziers[M[r][0]], v = this._beziers[M[r][1]], a && v && (a = a[i], v = v[i], g = a.a + (a.b - a.a) * s, _ = a.b + (a.c - a.b) * s, g += (_ - g) * s, _ += (a.c + (a.d - a.c) * s - _) * s, y = v.a + (v.b - v.a) * s, x = v.b + (v.c - v.b) * s, y += (x - y) * s, x += (v.c + (v.d - v.c) * s - x) * s, h = m ? Math.atan2(x - y, _ - g) * w + b : this._initialRotations[r], this._mod[o] && (h = this._mod[o](h, d)), f[o] ? d[o](h) : d[o] = h)
                                }
                            }
                        }),
                        v = m.prototype;
                    m.bezierThrough = l, m.cubicToQuadratic = h, m._autoCSS = !0, m.quadraticToCubic = function (t, e, i) {
                        return new s(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                    }, m._cssRegister = function () {
                        var t = a.CSSPlugin;
                        if (t) {
                            var e = t._internals,
                                i = e._parseToProxy,
                                n = e._setPluginRatio,
                                r = e.CSSPropTween;
                            e._registerComplexSpecialProp("bezier", {
                                parser: function (t, e, o, a, s, h) {
                                    e instanceof Array && (e = {
                                        values: e
                                    }), h = new m;
                                    var c, u, l, p = e.values,
                                        f = p.length - 1,
                                        d = [],
                                        v = {};
                                    if (f < 0) return s;
                                    for (c = 0; c <= f; c++) l = i(t, p[c], a, s, h, f !== c), d[c] = l.end;
                                    for (u in e) v[u] = e[u];
                                    return v.values = d, s = new r(t, "bezier", 0, 0, l.pt, 2), s.data = l, s.plugin = h, s.setRatio = n, 0 === v.autoRotate && (v.autoRotate = !0), !v.autoRotate || v.autoRotate instanceof Array || (c = !0 === v.autoRotate ? 0 : Number(v.autoRotate), v.autoRotate = null != l.end.left ? [
                                        ["left", "top", "rotation", c, !1]
                                    ] : null != l.end.x && [
                                        ["x", "y", "rotation", c, !1]
                                    ]), v.autoRotate && (a._transform || a._enableTransforms(!1), l.autoRotate = a._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), h._onInitTween(l.proxy, v, a._tween), s
                                }
                            })
                        }
                    }, v._mod = function (t) {
                        for (var e, i = this._overwriteProps, n = i.length; --n > -1;) (e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
                    }, v._kill = function (t) {
                        var e, i, n = this._props;
                        for (e in this._beziers)
                            if (e in t)
                                for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                        if (n = this._autoRotate)
                            for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
                        return this._super._kill.call(this, t)
                    }
                }(), o._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
                var i, n, r, a, s = function () {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
                    },
                    h = o._gsDefine.globals,
                    c = {},
                    u = s.prototype = new t("css");
                u.constructor = s, s.version = "1.20.3", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, u = "px", s.suffixMap = {
                    top: u,
                    right: u,
                    bottom: u,
                    left: u,
                    width: u,
                    height: u,
                    fontSize: u,
                    padding: u,
                    margin: u,
                    perspective: u,
                    lineHeight: ""
                };
                var l, p, f, d, m, v, g, y, _ = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    x = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    M = /(?:\d|\-|\+|=|#|\.)*/g,
                    T = /opacity *= *([^)]*)/i,
                    S = /opacity:([^;]*)/i,
                    A = /alpha\(opacity *=.+?\)/i,
                    P = /^(rgb|hsl)/,
                    E = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    L = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    N = function (t, e) {
                        return e.toUpperCase()
                    },
                    O = /(?:Left|Right|Width)/i,
                    R = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    I = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    D = /,(?=[^\)]*(?:\(|$))/gi,
                    k = /[\s,\(]/i,
                    z = Math.PI / 180,
                    U = 180 / Math.PI,
                    F = {},
                    B = {
                        style: {}
                    },
                    G = o.document || {
                        createElement: function () {
                            return B
                        }
                    },
                    j = function (t, e) {
                        return G.createElementNS ? G.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : G.createElement(t)
                    },
                    V = j("div"),
                    W = j("img"),
                    H = s._internals = {
                        _specialProps: c
                    },
                    X = (o.navigator || {}).userAgent || "",
                    q = function () {
                        var t = X.indexOf("Android"),
                            e = j("a");
                        return f = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === t || parseFloat(X.substr(t + 8, 2)) > 3), m = f && parseFloat(X.substr(X.indexOf("Version/") + 8, 2)) < 6, d = -1 !== X.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (v = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    Y = function (t) {
                        return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    $ = function (t) {
                        o.console
                    },
                    Z = "",
                    J = "",
                    Q = function (t, e) {
                        e = e || V;
                        var i, n, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];) ;
                        return n >= 0 ? (J = 3 === n ? "ms" : i[n], Z = "-" + J.toLowerCase() + "-", J + t) : null
                    },
                    K = G.defaultView ? G.defaultView.getComputedStyle : function () {
                    },
                    tt = s.getStyle = function (t, e, i, n, r) {
                        var o;
                        return q || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || K(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(E, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : Y(t)
                    },
                    et = H.convertToPixels = function (t, i, n, r, o) {
                        if ("px" === r || !r && "lineHeight" !== i) return n;
                        if ("auto" === r || !n) return 0;
                        var a, h, c, u = O.test(i),
                            l = t,
                            p = V.style,
                            f = n < 0,
                            d = 1 === n;
                        if (f && (n = -n), d && (n *= 100), "lineHeight" !== i || r)
                            if ("%" === r && -1 !== i.indexOf("border")) a = n / 100 * (u ? t.clientWidth : t.clientHeight);
                            else {
                                if (p.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;", "%" !== r && l.appendChild && "v" !== r.charAt(0) && "rem" !== r) p[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                                else {
                                    if (l = t.parentNode || G.body, -1 !== tt(l, "display").indexOf("flex") && (p.position = "absolute"), h = l._gsCache, c = e.ticker.frame, h && u && h.time === c) return h.width * n / 100;
                                    p[u ? "width" : "height"] = n + r
                                }
                                l.appendChild(V), a = parseFloat(V[u ? "offsetWidth" : "offsetHeight"]), l.removeChild(V), u && "%" === r && !1 !== s.cacheWidths && (h = l._gsCache = l._gsCache || {}, h.time = c, h.width = a / n * 100), 0 !== a || o || (a = et(t, i, n, r, !0))
                            }
                        else h = K(t).lineHeight, t.style.lineHeight = n, a = parseFloat(K(t).lineHeight), t.style.lineHeight = h;
                        return d && (a /= 100), f ? -a : a
                    },
                    it = H.calculateOffset = function (t, e, i) {
                        if ("absolute" !== tt(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = tt(t, "margin" + n, i);
                        return t["offset" + n] - (et(t, e, parseFloat(r), r.replace(M, "")) || 0)
                    },
                    nt = function (t, e) {
                        var i, n, r, o = {};
                        if (e = e || K(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], -1 !== r.indexOf("-transform") && Lt !== r || (o[r.replace(C, N)] = e.getPropertyValue(r));
                            else
                                for (i in e) -1 !== i.indexOf("Transform") && Ct !== i || (o[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(C, N)] = e[i]);
                        return q || (o.opacity = Y(t)), n = Wt(t, e, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, Ot && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o
                    },
                    rt = function (t, e, i, n, r) {
                        var o, a, s, h = {},
                            c = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (o = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" != typeof o && "string" != typeof o || (h[a] = "auto" !== o || "left" !== a && "top" !== a ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[a] || "" === e[a].replace(w, "") ? o : 0 : it(t, a), void 0 !== c[a] && (s = new _t(c, a, c[a], s))));
                        if (n)
                            for (a in n) "className" !== a && (h[a] = n[a]);
                        return {
                            difs: h,
                            firstMPT: s
                        }
                    },
                    ot = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    st = function (t, e, i) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (i || K(t))[e] || 0;
                        if (t.getCTM && Gt(t)) return t.getBBox()[e] || 0;
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = ot[e],
                            o = r.length;
                        for (i = i || K(t, null); --o > -1;) n -= parseFloat(tt(t, "padding" + r[o], i, !0)) || 0, n -= parseFloat(tt(t, "border" + r[o] + "Width", i, !0)) || 0;
                        return n
                    },
                    ht = function (t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        null != t && "" !== t || (t = "0 0");
                        var i, n = t.split(" "),
                            r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                            o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                        if (n.length > 3 && !e) {
                            for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(ht(n[i]));
                            return t.join(",")
                        }
                        return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + o + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== o.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(r.replace(w, "")), e.oy = parseFloat(o.replace(w, "")), e.v = t), e || t
                    },
                    ct = function (t, e) {
                        return "function" == typeof t && (t = t(y, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                    },
                    ut = function (t, e) {
                        return "function" == typeof t && (t = t(y, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                    },
                    lt = function (t, e, i, n) {
                        var r, o, a, s, h;
                        return "function" == typeof t && (t = t(y, g)), null == t ? s = e : "number" == typeof t ? s = t : (r = 360, o = t.split("_"), h = "=" === t.charAt(1), a = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : U) - (h ? 0 : e), o.length && (n && (n[i] = e + a), -1 !== t.indexOf("short") && (a %= r) !== a % (r / 2) && (a = a < 0 ? a + r : a - r), -1 !== t.indexOf("_cw") && a < 0 ? a = (a + 9999999999 * r) % r - (a / r | 0) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)), s = e + a), s < 1e-6 && s > -1e-6 && (s = 0), s
                    },
                    pt = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ft = function (t, e, i) {
                        return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    dt = s.parseColor = function (t, e) {
                        var i, n, r, o, a, s, h, c, u, l, p;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), pt[t]) i = pt[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), o = t.charAt(3), t = "#" + n + n + r + r + o + o), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = p = t.match(_), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(x)
                                    } else a = Number(i[0]) % 360 / 360, s = Number(i[1]) / 100, h = Number(i[2]) / 100, r = h <= .5 ? h * (s + 1) : h + s - h * s, n = 2 * h - r, i.length > 3 && (i[3] = Number(i[3])), i[0] = ft(a + 1 / 3, n, r), i[1] = ft(a, n, r), i[2] = ft(a - 1 / 3, n, r);
                                else i = t.match(_) || pt.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = pt.black;
                        return e && !p && (n = i[0] / 255, r = i[1] / 255, o = i[2] / 255, c = Math.max(n, r, o), u = Math.min(n, r, o), h = (c + u) / 2, c === u ? a = s = 0 : (l = c - u, s = h > .5 ? l / (2 - c - u) : l / (c + u), a = c === n ? (r - o) / l + (r < o ? 6 : 0) : c === r ? (o - n) / l + 2 : (n - r) / l + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * s + .5 | 0, i[2] = 100 * h + .5 | 0), i
                    },
                    mt = function (t, e) {
                        var i, n, r, o = t.match(vt) || [],
                            a = 0,
                            s = "";
                        if (!o.length) return t;
                        for (i = 0; i < o.length; i++) n = o[i], r = t.substr(a, t.indexOf(n, a) - a), a += r.length + n.length, n = dt(n, e), 3 === n.length && n.push(1), s += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return s + t.substr(a)
                    },
                    vt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (u in pt) vt += "|" + u + "\\b";
                vt = new RegExp(vt + ")", "gi"), s.colorStringFilter = function (t) {
                    var e, i = t[0] + " " + t[1];
                    vt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = mt(t[0], e), t[1] = mt(t[1], e)), vt.lastIndex = 0
                }, e.defaultStringFilter || (e.defaultStringFilter = s.colorStringFilter);
                var gt = function (t, e, i, n) {
                        if (null == t) return function (t) {
                            return t
                        };
                        var r, o = e ? (t.match(vt) || [""])[0] : "",
                            a = t.split(o).join("").match(b) || [],
                            s = t.substr(0, t.indexOf(a[0])),
                            h = ")" === t.charAt(t.length - 1) ? ")" : "",
                            c = -1 !== t.indexOf(" ") ? " " : ",",
                            u = a.length,
                            l = u > 0 ? a[0].replace(_, "") : "";
                        return u ? r = e ? function (t) {
                            var e, p, f, d;
                            if ("number" == typeof t) t += l;
                            else if (n && D.test(t)) {
                                for (d = t.replace(D, "|").split("|"), f = 0; f < d.length; f++) d[f] = r(d[f]);
                                return d.join(",")
                            }
                            if (e = (t.match(vt) || [o])[0], p = t.split(e).join("").match(b) || [], f = p.length, u > f--)
                                for (; ++f < u;) p[f] = i ? p[(f - 1) / 2 | 0] : a[f];
                            return s + p.join(c) + c + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function (t) {
                            var e, o, p;
                            if ("number" == typeof t) t += l;
                            else if (n && D.test(t)) {
                                for (o = t.replace(D, "|").split("|"), p = 0; p < o.length; p++) o[p] = r(o[p]);
                                return o.join(",")
                            }
                            if (e = t.match(b) || [], p = e.length, u > p--)
                                for (; ++p < u;) e[p] = i ? e[(p - 1) / 2 | 0] : a[p];
                            return s + e.join(c) + h
                        } : function (t) {
                            return t
                        }
                    },
                    yt = function (t) {
                        return t = t.split(","),
                            function (e, i, n, r, o, a, s) {
                                var h, c = (i + "").split(" ");
                                for (s = {}, h = 0; h < 4; h++) s[t[h]] = c[h] = c[h] || c[(h - 1) / 2 >> 0];
                                return r.parse(e, s, o, a)
                            }
                    },
                    _t = (H._setPluginRatio = function (t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, o, a = this.data, s = a.proxy, h = a.firstMPT; h;) e = s[h.v], h.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), h.t[h.p] = e, h = h._next;
                        if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(s.rotation, this.t) : s.rotation), 1 === t || 0 === t)
                            for (h = a.firstMPT, o = 1 === t ? "e" : "b"; h;) {
                                if (i = h.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                        i[o] = r
                                    }
                                } else i[o] = i.s + i.xs0;
                                h = h._next
                            }
                    }, function (t, e, i, n, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                    }),
                    xt = (H._parseToProxy = function (t, e, i, n, r, o) {
                        var a, s, h, c, u, l = n,
                            p = {},
                            f = {},
                            d = i._transform,
                            m = F;
                        for (i._transform = null, F = e, n = u = i.parse(t, e, n, r), F = m, o && (i._transform = d, l && (l._prev = null, l._prev && (l._prev._next = null))); n && n !== l;) {
                            if (n.type <= 1 && (s = n.p, f[s] = n.s + n.c, p[s] = n.s, o || (c = new _t(n, "s", s, c, n.r), n.c = 0), 1 === n.type))
                                for (a = n.l; --a > 0;) h = "xn" + a, s = n.p + "_" + h, f[s] = n.data[h], p[s] = n[h], o || (c = new _t(n, h, s, c, n.rxp[h]));
                            n = n._next
                        }
                        return {
                            proxy: p,
                            end: f,
                            firstMPT: c,
                            pt: u
                        }
                    }, H.CSSPropTween = function (t, e, n, r, o, s, h, c, u, l, p) {
                        this.t = t, this.p = e, this.s = n, this.c = r, this.n = h || e, t instanceof xt || a.push(this.n), this.r = c, this.type = s || 0, u && (this.pr = u, i = !0), this.b = void 0 === l ? n : l, this.e = void 0 === p ? n + r : p, o && (this._next = o, o._prev = this)
                    }),
                    bt = function (t, e, i, n, r, o) {
                        var a = new xt(t, e, i, n - i, r, -1, o);
                        return a.b = i, a.e = a.xs0 = n, a
                    },
                    wt = s.parseComplex = function (t, e, i, n, r, o, a, h, c, u) {
                        i = i || o || "", "function" == typeof n && (n = n(y, g)), a = new xt(t, e, 0, 0, a, u ? 2 : 1, null, !1, h, i, n), n += "", r && vt.test(n + i) && (n = [i, n], s.colorStringFilter(n), i = n[0], n = n[1]);
                        var p, f, d, m, v, b, w, M, T, S, A, P, E, C = i.split(", ").join(",").split(" "),
                            L = n.split(", ").join(",").split(" "),
                            N = C.length,
                            O = !1 !== l;
                        for (-1 === n.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (C = C.join(" ").replace(D, ", ").split(" "), L = L.join(" ").replace(D, ", ").split(" ")) : (C = C.join(" ").split(",").join(", ").split(" "), L = L.join(" ").split(",").join(", ").split(" ")), N = C.length), N !== L.length && (C = (o || "").split(" "), N = C.length), a.plugin = c, a.setRatio = u, vt.lastIndex = 0, p = 0; p < N; p++)
                            if (m = C[p], v = L[p], (M = parseFloat(m)) || 0 === M) a.appendXtra("", M, ct(v, M), v.replace(x, ""), O && -1 !== v.indexOf("px"), !0);
                            else if (r && vt.test(m)) P = v.indexOf(")") + 1, P = ")" + (P ? v.substr(P) : ""), E = -1 !== v.indexOf("hsl") && q, S = v, m = dt(m, E), v = dt(v, E), T = m.length + v.length > 6, T && !q && 0 === v[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(L[p]).join("transparent")) : (q || (T = !1), E ? a.appendXtra(S.substr(0, S.indexOf("hsl")) + (T ? "hsla(" : "hsl("), m[0], ct(v[0], m[0]), ",", !1, !0).appendXtra("", m[1], ct(v[1], m[1]), "%,", !1).appendXtra("", m[2], ct(v[2], m[2]), T ? "%," : "%" + P, !1) : a.appendXtra(S.substr(0, S.indexOf("rgb")) + (T ? "rgba(" : "rgb("), m[0], v[0] - m[0], ",", !0, !0).appendXtra("", m[1], v[1] - m[1], ",", !0).appendXtra("", m[2], v[2] - m[2], T ? "," : P, !0), T && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (v.length < 4 ? 1 : v[3]) - m, P, !1))), vt.lastIndex = 0;
                            else if (b = m.match(_)) {
                                if (!(w = v.match(x)) || w.length !== b.length) return a;
                                for (d = 0, f = 0; f < b.length; f++) A = b[f], S = m.indexOf(A, d), a.appendXtra(m.substr(d, S - d), Number(A), ct(w[f], A), "", O && "px" === m.substr(S + A.length, 2), 0 === f), d = S + A.length;
                                a["xs" + a.l] += m.substr(d)
                            } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + v : v;
                        if (-1 !== n.indexOf("=") && a.data) {
                            for (P = a.xs0 + a.data.s, p = 1; p < a.l; p++) P += a["xs" + p] + a.data["xn" + p];
                            a.e = P + a["xs" + p]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    Mt = 9;
                for (u = xt.prototype, u.l = u.pr = 0; --Mt > 0;) u["xn" + Mt] = 0, u["xs" + Mt] = "";
                u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function (t, e, i, n, r, o) {
                    var a = this,
                        s = a.l;
                    return a["xs" + s] += o && (s || a["xs" + s]) ? " " + t : t || "", i || 0 === s || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", s > 0 ? (a.data["xn" + s] = e + i, a.rxp["xn" + s] = r, a["xn" + s] = e, a.plugin || (a.xfirst = new xt(a, "xn" + s, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + s] += e + (n || ""), a)
                };
                var Tt = function (t, e) {
                        e = e || {}, this.p = e.prefix ? Q(t) || t : t, c[t] = c[this.p] = this, this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    St = H._registerComplexSpecialProp = function (t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r = t.split(","),
                            o = e.defaultValue;
                        for (i = i || [o], n = 0; n < r.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, new Tt(r[n], e)
                    },
                    At = H._registerPluginProp = function (t) {
                        if (!c[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            St(t, {
                                parser: function (t, i, n, r, o, a, s) {
                                    var u = h.com.greensock.plugins[e];
                                    return u ? (u._cssRegister(), c[n].parse(t, i, n, r, o, a, s)) : ($(), o)
                                }
                            })
                        }
                    };
                u = Tt.prototype, u.parseComplex = function (t, e, i, n, r, o) {
                    var a, s, h, c, u, l, p = this.keyword;
                    if (this.multi && (D.test(i) || D.test(e) ? (s = e.replace(D, "|").split("|"), h = i.replace(D, "|").split("|")) : p && (s = [e], h = [i])), h) {
                        for (c = h.length > s.length ? h.length : s.length, a = 0; a < c; a++) e = s[a] = s[a] || this.dflt, i = h[a] = h[a] || this.dflt, p && (u = e.indexOf(p), l = i.indexOf(p), u !== l && (-1 === l ? s[a] = s[a].split(p).join("") : -1 === u && (s[a] += " " + p)));
                        e = s.join(", "), i = h.join(", ")
                    }
                    return wt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o)
                }, u.parse = function (t, e, i, n, o, a, s) {
                    return this.parseComplex(t.style, this.format(tt(t, this.p, r, !1, this.dflt)), this.format(e), o, a)
                }, s.registerSpecialProp = function (t, e, i) {
                    St(t, {
                        parser: function (t, n, r, o, a, s, h) {
                            var c = new xt(t, r, 0, 0, a, 2, r, !1, i);
                            return c.plugin = s, c.setRatio = e(t, n, o._tween, r), c
                        },
                        priority: i
                    })
                }, s.useSVGTransformAttr = !0;
                var Pt,
                    Et = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Ct = Q("transform"),
                    Lt = Z + "transform",
                    Nt = Q("transformOrigin"),
                    Ot = null !== Q("perspective"),
                    Rt = H.Transform = function () {
                        this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = !(!1 === s.defaultForce3D || !Ot) && (s.defaultForce3D || "auto")
                    },
                    It = o.SVGElement,
                    Dt = function (t, e, i) {
                        var n, r = G.createElementNS("http://www.w3.org/2000/svg", t),
                            o = /([a-z])([A-Z])/g;
                        for (n in i) r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(r), r
                    },
                    kt = G.documentElement || {},
                    zt = function () {
                        var t, e, i, n = v || /Android/i.test(X) && !o.chrome;
                        return G.createElementNS && !n && (t = Dt("svg", kt), e = Dt("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Nt] = "50% 50%", e.style[Ct] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(d && Ot), kt.removeChild(t)), n
                    }(),
                    Ut = function (t, e, i, n, r, o) {
                        var a, h, c, u, l, p, f, d, m, v, g, y, _, x, b = t._gsTransform,
                            w = Vt(t, !0);
                        b && (_ = b.xOrigin, x = b.yOrigin), (!n || (a = n.split(" ")).length < 2) && (f = t.getBBox(), 0 === f.x && 0 === f.y && f.width + f.height === 0 && (f = {
                            x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                            y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), e = ht(e).split(" "), a = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = u = parseFloat(a[0]), i.yOrigin = l = parseFloat(a[1]), n && w !== jt && (p = w[0], f = w[1], d = w[2], m = w[3], v = w[4], g = w[5], (y = p * m - f * d) && (h = u * (m / y) + l * (-d / y) + (d * g - m * v) / y, c = u * (-f / y) + l * (p / y) - (p * g - f * v) / y, u = i.xOrigin = a[0] = h, l = i.yOrigin = a[1] = c)), b && (o && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), r || !1 !== r && !1 !== s.defaultSmoothOrigin ? (h = u - _, c = l - x, b.xOffset += h * w[0] + c * w[2] - h, b.yOffset += h * w[1] + c * w[3] - c) : b.xOffset = b.yOffset = 0), o || t.setAttribute("data-svg-origin", a.join(" "))
                    },
                    Ft = function (t) {
                        var e,
                            i = j("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            n = this.parentNode,
                            r = this.nextSibling,
                            o = this.style.cssText;
                        if (kt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                            e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ft
                        } catch (t) {
                        } else this._originalGetBBox && (e = this._originalGetBBox());
                        return r ? n.insertBefore(this, r) : n.appendChild(this), kt.removeChild(i), this.style.cssText = o, e
                    },
                    Bt = function (t) {
                        try {
                            return t.getBBox()
                        } catch (e) {
                            return Ft.call(t, !0)
                        }
                    },
                    Gt = function (t) {
                        return !(!It || !t.getCTM || t.parentNode && !t.ownerSVGElement || !Bt(t))
                    },
                    jt = [1, 0, 0, 1, 0, 0],
                    Vt = function (t, e) {
                        var i, n, r, o, a, s, h = t._gsTransform || new Rt,
                            c = t.style;
                        if (Ct ? n = tt(t, Lt, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(R), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), h.x || 0, h.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Ct || !(s = !K(t) || "none" === K(t).display) && t.parentNode || (s && (o = c.display, c.display = "block"), t.parentNode || (a = 1, kt.appendChild(t)), n = tt(t, Lt, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, o ? c.display = o : s && Yt(c, "display"), a && kt.removeChild(t)), (h.svg || t.getCTM && Gt(t)) && (i && -1 !== (c[Ct] + "").indexOf("matrix") && (n = c[Ct], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return jt;
                        for (r = (n || "").match(_) || [], Mt = r.length; --Mt > -1;) o = Number(r[Mt]), r[Mt] = (a = o - (o |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + o : o;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    Wt = H.getTransform = function (t, i, n, r) {
                        if (t._gsTransform && n && !r) return t._gsTransform;
                        var o, a, h, c, u, l, p = n ? t._gsTransform || new Rt : new Rt,
                            f = p.scaleX < 0,
                            d = Ot ? parseFloat(tt(t, Nt, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                            m = parseFloat(s.defaultTransformPerspective) || 0;
                        if (p.svg = !(!t.getCTM || !Gt(t)), p.svg && (Ut(t, tt(t, Nt, i, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), Pt = s.useSVGTransformAttr || zt), (o = Vt(t)) !== jt) {
                            if (16 === o.length) {
                                var v, g, y, _, x, b = o[0],
                                    w = o[1],
                                    M = o[2],
                                    T = o[3],
                                    S = o[4],
                                    A = o[5],
                                    P = o[6],
                                    E = o[7],
                                    C = o[8],
                                    L = o[9],
                                    N = o[10],
                                    O = o[12],
                                    R = o[13],
                                    I = o[14],
                                    D = o[11],
                                    k = Math.atan2(P, N);
                                p.zOrigin && (I = -p.zOrigin, O = C * I - o[12], R = L * I - o[13], I = N * I + p.zOrigin - o[14]), p.rotationX = k * U, k && (_ = Math.cos(-k), x = Math.sin(-k), v = S * _ + C * x, g = A * _ + L * x, y = P * _ + N * x, C = S * -x + C * _, L = A * -x + L * _, N = P * -x + N * _, D = E * -x + D * _, S = v, A = g, P = y), k = Math.atan2(-M, N), p.rotationY = k * U, k && (_ = Math.cos(-k), x = Math.sin(-k), v = b * _ - C * x, g = w * _ - L * x, y = M * _ - N * x, L = w * x + L * _, N = M * x + N * _, D = T * x + D * _, b = v, w = g, M = y), k = Math.atan2(w, b), p.rotation = k * U, k && (_ = Math.cos(k), x = Math.sin(k), v = b * _ + w * x, g = S * _ + A * x, y = C * _ + L * x, w = w * _ - b * x, A = A * _ - S * x, L = L * _ - C * x, b = v, S = g, C = y), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY), k = Math.atan2(S, A), p.scaleX = (1e5 * Math.sqrt(b * b + w * w + M * M) + .5 | 0) / 1e5, p.scaleY = (1e5 * Math.sqrt(A * A + P * P) + .5 | 0) / 1e5, p.scaleZ = (1e5 * Math.sqrt(C * C + L * L + N * N) + .5 | 0) / 1e5, b /= p.scaleX, S /= p.scaleY, w /= p.scaleX, A /= p.scaleY, Math.abs(k) > 2e-5 ? (p.skewX = k * U, S = 0, "simple" !== p.skewType && (p.scaleY *= 1 / Math.cos(k))) : p.skewX = 0, p.perspective = D ? 1 / (D < 0 ? -D : D) : 0, p.x = O, p.y = R, p.z = I, p.svg && (p.x -= p.xOrigin - (p.xOrigin * b - p.yOrigin * S), p.y -= p.yOrigin - (p.yOrigin * w - p.xOrigin * A))
                            } else if (!Ot || r || !o.length || p.x !== o[4] || p.y !== o[5] || !p.rotationX && !p.rotationY) {
                                var z = o.length >= 6,
                                    F = z ? o[0] : 1,
                                    B = o[1] || 0,
                                    G = o[2] || 0,
                                    j = z ? o[3] : 1;
                                p.x = o[4] || 0, p.y = o[5] || 0, h = Math.sqrt(F * F + B * B), c = Math.sqrt(j * j + G * G), u = F || B ? Math.atan2(B, F) * U : p.rotation || 0, l = G || j ? Math.atan2(G, j) * U + u : p.skewX || 0, p.scaleX = h, p.scaleY = c, p.rotation = u, p.skewX = l, Ot && (p.rotationX = p.rotationY = p.z = 0, p.perspective = m, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * F + p.yOrigin * G), p.y -= p.yOrigin - (p.xOrigin * B + p.yOrigin * j))
                            }
                            Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (f ? (p.scaleX *= -1, p.skewX += p.rotation <= 0 ? 180 : -180, p.rotation += p.rotation <= 0 ? 180 : -180) : (p.scaleY *= -1, p.skewX += p.skewX <= 0 ? 180 : -180)), p.zOrigin = d;
                            for (a in p) p[a] < 2e-5 && p[a] > -2e-5 && (p[a] = 0)
                        }
                        return n && (t._gsTransform = p, p.svg && (Pt && t.style[Ct] ? e.delayedCall(.001, function () {
                            Yt(t.style, Ct)
                        }) : !Pt && t.getAttribute("transform") && e.delayedCall(.001, function () {
                            t.removeAttribute("transform")
                        }))), p
                    },
                    Ht = function (t) {
                        var e, i, n = this.data,
                            r = -n.rotation * z,
                            o = r + n.skewX * z,
                            a = (Math.cos(r) * n.scaleX * 1e5 | 0) / 1e5,
                            s = (Math.sin(r) * n.scaleX * 1e5 | 0) / 1e5,
                            h = (Math.sin(o) * -n.scaleY * 1e5 | 0) / 1e5,
                            c = (Math.cos(o) * n.scaleY * 1e5 | 0) / 1e5,
                            u = this.t.style,
                            l = this.t.currentStyle;
                        if (l) {
                            i = s, s = -h, h = -i, e = l.filter, u.filter = "";
                            var p, f, d = this.t.offsetWidth,
                                m = this.t.offsetHeight,
                                g = "absolute" !== l.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + s + ", M21=" + h + ", M22=" + c,
                                _ = n.x + d * n.xPercent / 100,
                                x = n.y + m * n.yPercent / 100;
                            if (null != n.ox && (p = (n.oxp ? d * n.ox * .01 : n.ox) - d / 2, f = (n.oyp ? m * n.oy * .01 : n.oy) - m / 2, _ += p - (p * a + f * s), x += f - (p * h + f * c)), g ? (p = d / 2, f = m / 2, y += ", Dx=" + (p - (p * a + f * s) + _) + ", Dy=" + (f - (p * h + f * c) + x) + ")") : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(I, y) : u.filter = y + " " + e, 0 !== t && 1 !== t || 1 === a && 0 === s && 0 === h && 1 === c && (g && -1 === y.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !g) {
                                var b, w, S, A = v < 8 ? 1 : -1;
                                for (p = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((d - ((a < 0 ? -a : a) * d + (s < 0 ? -s : s) * m)) / 2 + _), n.ieOffsetY = Math.round((m - ((c < 0 ? -c : c) * m + (h < 0 ? -h : h) * d)) / 2 + x), Mt = 0; Mt < 4; Mt++) w = at[Mt], b = l[w], i = -1 !== b.indexOf("px") ? parseFloat(b) : et(this.t, w, parseFloat(b), b.replace(M, "")) || 0, S = i !== n[w] ? Mt < 2 ? -n.ieOffsetX : -n.ieOffsetY : Mt < 2 ? p - n.ieOffsetX : f - n.ieOffsetY, u[w] = (n[w] = Math.round(i - S * (0 === Mt || 2 === Mt ? 1 : A))) + "px"
                            }
                        }
                    },
                    Xt = H.set3DTransformRatio = H.setTransformRatio = function (t) {
                        var e, i, n, r, o, a, s, h, c, u, l, p, f, m, v, g, y, _, x, b, w, M, T, S = this.data,
                            A = this.t.style,
                            P = S.rotation,
                            E = S.rotationX,
                            C = S.rotationY,
                            L = S.scaleX,
                            N = S.scaleY,
                            O = S.scaleZ,
                            R = S.x,
                            I = S.y,
                            D = S.z,
                            k = S.svg,
                            U = S.perspective,
                            F = S.force3D,
                            B = S.skewY,
                            G = S.skewX;
                        if (B && (G += B, P += B), ((1 === t || 0 === t) && "auto" === F && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !F) && !D && !U && !C && !E && 1 === O || Pt && k || !Ot) return void(P || G || k ? (P *= z, M = G * z, T = 1e5, i = Math.cos(P) * L, o = Math.sin(P) * L, n = Math.sin(P - M) * -N, a = Math.cos(P - M) * N, M && "simple" === S.skewType && (e = Math.tan(M - B * z), e = Math.sqrt(1 + e * e), n *= e, a *= e, B && (e = Math.tan(B * z), e = Math.sqrt(1 + e * e), i *= e, o *= e)), k && (R += S.xOrigin - (S.xOrigin * i + S.yOrigin * n) + S.xOffset, I += S.yOrigin - (S.xOrigin * o + S.yOrigin * a) + S.yOffset, Pt && (S.xPercent || S.yPercent) && (v = this.t.getBBox(), R += .01 * S.xPercent * v.width, I += .01 * S.yPercent * v.height), v = 1e-6, R < v && R > -v && (R = 0), I < v && I > -v && (I = 0)), x = (i * T | 0) / T + "," + (o * T | 0) / T + "," + (n * T | 0) / T + "," + (a * T | 0) / T + "," + R + "," + I + ")", k && Pt ? this.t.setAttribute("transform", "matrix(" + x) : A[Ct] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + x) : A[Ct] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + L + ",0,0," + N + "," + R + "," + I + ")");
                        if (d && (v = 1e-4, L < v && L > -v && (L = O = 2e-5), N < v && N > -v && (N = O = 2e-5), !U || S.z || S.rotationX || S.rotationY || (U = 0)), P || G) P *= z, g = i = Math.cos(P), y = o = Math.sin(P), G && (P -= G * z, g = Math.cos(P), y = Math.sin(P), "simple" === S.skewType && (e = Math.tan((G - B) * z), e = Math.sqrt(1 + e * e), g *= e, y *= e, S.skewY && (e = Math.tan(B * z), e = Math.sqrt(1 + e * e), i *= e, o *= e))), n = -y, a = g;
                        else {
                            if (!(C || E || 1 !== O || U || k)) return void(A[Ct] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + R + "px," + I + "px," + D + "px)" + (1 !== L || 1 !== N ? " scale(" + L + "," + N + ")" : ""));
                            i = a = 1, n = o = 0
                        }
                        u = 1, r = s = h = c = l = p = 0, f = U ? -1 / U : 0, m = S.zOrigin, v = 1e-6, b = ",", w = "0", P = C * z, P && (g = Math.cos(P), y = Math.sin(P), h = -y, l = f * -y, r = i * y, s = o * y, u = g, f *= g, i *= g, o *= g), P = E * z, P && (g = Math.cos(P), y = Math.sin(P), e = n * g + r * y, _ = a * g + s * y, c = u * y, p = f * y, r = n * -y + r * g, s = a * -y + s * g, u *= g, f *= g, n = e, a = _), 1 !== O && (r *= O, s *= O, u *= O, f *= O), 1 !== N && (n *= N, a *= N, c *= N, p *= N), 1 !== L && (i *= L, o *= L, h *= L, l *= L), (m || k) && (m && (R += r * -m, I += s * -m, D += u * -m + m), k && (R += S.xOrigin - (S.xOrigin * i + S.yOrigin * n) + S.xOffset, I += S.yOrigin - (S.xOrigin * o + S.yOrigin * a) + S.yOffset), R < v && R > -v && (R = w), I < v && I > -v && (I = w), D < v && D > -v && (D = 0)), x = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", x += (i < v && i > -v ? w : i) + b + (o < v && o > -v ? w : o) + b + (h < v && h > -v ? w : h), x += b + (l < v && l > -v ? w : l) + b + (n < v && n > -v ? w : n) + b + (a < v && a > -v ? w : a), E || C || 1 !== O ? (x += b + (c < v && c > -v ? w : c) + b + (p < v && p > -v ? w : p) + b + (r < v && r > -v ? w : r), x += b + (s < v && s > -v ? w : s) + b + (u < v && u > -v ? w : u) + b + (f < v && f > -v ? w : f) + b) : x += ",0,0,0,0,1,0,", x += R + b + I + b + D + b + (U ? 1 + -D / U : 1) + ")", A[Ct] = x
                    };
                u = Rt.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function (t, e, i, n, o, a, h) {
                        if (n._lastParsedTransform === h) return o;
                        n._lastParsedTransform = h;
                        var c, u = h.scale && "function" == typeof h.scale ? h.scale : 0;
                        "function" == typeof h[i] && (c = h[i], h[i] = e), u && (h.scale = u(y, t));
                        var l, p, f, d, m, v, _, x, b, w = t._gsTransform,
                            M = t.style,
                            T = Et.length,
                            S = h,
                            A = {},
                            P = Wt(t, r, !0, S.parseTransform),
                            E = S.transform && ("function" == typeof S.transform ? S.transform(y, g) : S.transform);
                        if (P.skewType = S.skewType || P.skewType || s.defaultSkewType, n._transform = P, E && "string" == typeof E && Ct) p = V.style, p[Ct] = E, p.display = "block", p.position = "absolute", G.body.appendChild(V), l = Wt(V, null, !1), "simple" === P.skewType && (l.scaleY *= Math.cos(l.skewX * z)), P.svg && (v = P.xOrigin, _ = P.yOrigin, l.x -= P.xOffset, l.y -= P.yOffset, (S.transformOrigin || S.svgOrigin) && (E = {}, Ut(t, ht(S.transformOrigin), E, S.svgOrigin, S.smoothOrigin, !0), v = E.xOrigin, _ = E.yOrigin, l.x -= E.xOffset - P.xOffset, l.y -= E.yOffset - P.yOffset), (v || _) && (x = Vt(V, !0), l.x -= v - (v * x[0] + _ * x[2]), l.y -= _ - (v * x[1] + _ * x[3]))), G.body.removeChild(V), l.perspective || (l.perspective = P.perspective), null != S.xPercent && (l.xPercent = ut(S.xPercent, P.xPercent)), null != S.yPercent && (l.yPercent = ut(S.yPercent, P.yPercent));
                        else if ("object" == typeof S) {
                            if (l = {
                                    scaleX: ut(null != S.scaleX ? S.scaleX : S.scale, P.scaleX),
                                    scaleY: ut(null != S.scaleY ? S.scaleY : S.scale, P.scaleY),
                                    scaleZ: ut(S.scaleZ, P.scaleZ),
                                    x: ut(S.x, P.x),
                                    y: ut(S.y, P.y),
                                    z: ut(S.z, P.z),
                                    xPercent: ut(S.xPercent, P.xPercent),
                                    yPercent: ut(S.yPercent, P.yPercent),
                                    perspective: ut(S.transformPerspective, P.perspective)
                                }, null != (m = S.directionalRotation))
                                if ("object" == typeof m)
                                    for (p in m) S[p] = m[p];
                                else S.rotation = m;
                            "string" == typeof S.x && -1 !== S.x.indexOf("%") && (l.x = 0, l.xPercent = ut(S.x, P.xPercent)), "string" == typeof S.y && -1 !== S.y.indexOf("%") && (l.y = 0, l.yPercent = ut(S.y, P.yPercent)), l.rotation = lt("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : "rotationZ" in S ? S.rotationZ : P.rotation, P.rotation, "rotation", A), Ot && (l.rotationX = lt("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : P.rotationX || 0, P.rotationX, "rotationX", A), l.rotationY = lt("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : P.rotationY || 0, P.rotationY, "rotationY", A)), l.skewX = lt(S.skewX, P.skewX), l.skewY = lt(S.skewY, P.skewY)
                        }
                        for (Ot && null != S.force3D && (P.force3D = S.force3D, d = !0), f = P.force3D || P.z || P.rotationX || P.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, f || null == S.scale || (l.scaleZ = 1); --T > -1;) b = Et[T], ((E = l[b] - P[b]) > 1e-6 || E < -1e-6 || null != S[b] || null != F[b]) && (d = !0, o = new xt(P, b, P[b], E, o), b in A && (o.e = A[b]), o.xs0 = 0, o.plugin = a, n._overwriteProps.push(o.n));
                        return E = S.transformOrigin, P.svg && (E || S.svgOrigin) && (v = P.xOffset, _ = P.yOffset, Ut(t, ht(E), l, S.svgOrigin, S.smoothOrigin), o = bt(P, "xOrigin", (w ? P : l).xOrigin, l.xOrigin, o, "transformOrigin"), o = bt(P, "yOrigin", (w ? P : l).yOrigin, l.yOrigin, o, "transformOrigin"), v === P.xOffset && _ === P.yOffset || (o = bt(P, "xOffset", w ? v : P.xOffset, P.xOffset, o, "transformOrigin"), o = bt(P, "yOffset", w ? _ : P.yOffset, P.yOffset, o, "transformOrigin")), E = "0px 0px"), (E || Ot && f && P.zOrigin) && (Ct ? (d = !0, b = Nt, E = (E || tt(t, b, r, !1, "50% 50%")) + "", o = new xt(M, b, 0, 0, o, -1, "transformOrigin"), o.b = M[b], o.plugin = a, Ot ? (p = P.zOrigin, E = E.split(" "), P.zOrigin = (E.length > 2 && (0 === p || "0px" !== E[2]) ? parseFloat(E[2]) : p) || 0, o.xs0 = o.e = E[0] + " " + (E[1] || "50%") + " 0px", o = new xt(P, "zOrigin", 0, 0, o, -1, o.n), o.b = p, o.xs0 = o.e = P.zOrigin) : o.xs0 = o.e = E) : ht(E + "", P)), d && (n._transformType = P.svg && Pt || !f && 3 !== this._transformType ? 2 : 3), c && (h[i] = c), u && (h.scale = u), o
                    },
                    prefix: !0
                }), St("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), St("borderRadius", {
                    defaultValue: "0px",
                    parser: function (t, e, i, o, a, s) {
                        e = this.format(e);
                        var h, c, u, l, p, f, d, m, v, g, y, _, x, b, w, M,
                            T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            S = t.style;
                        for (v = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), h = e.split(" "), c = 0; c < T.length; c++) this.p.indexOf("border") && (T[c] = Q(T[c])), p = l = tt(t, T[c], r, !1, "0px"), -1 !== p.indexOf(" ") && (l = p.split(" "), p = l[0], l = l[1]), f = u = h[c], d = parseFloat(p), _ = p.substr((d + "").length), x = "=" === f.charAt(1), x ? (m = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), m *= parseFloat(f), y = f.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(f), y = f.substr((m + "").length)), "" === y && (y = n[i] || _), y !== _ && (b = et(t, "borderLeft", d, _), w = et(t, "borderTop", d, _), "%" === y ? (p = b / v * 100 + "%", l = w / g * 100 + "%") : "em" === y ? (M = et(t, "borderLeft", 1, "em"), p = b / M + "em", l = w / M + "em") : (p = b + "px", l = w + "px"), x && (f = parseFloat(p) + m + y, u = parseFloat(l) + m + y)), a = wt(S, T[c], p + " " + l, f + " " + u, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: gt("0px 0px 0px 0px", !1, !0)
                }), St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function (t, e, i, n, o, a) {
                        return wt(t.style, i, this.format(tt(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", o)
                    },
                    prefix: !0,
                    formatter: gt("0px 0px", !1, !0)
                }), St("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function (t, e, i, n, o, a) {
                        var s, h, c, u, l, p, f = "background-position",
                            d = r || K(t, null),
                            m = this.format((d ? v ? d.getPropertyValue(f + "-x") + " " + d.getPropertyValue(f + "-y") : d.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (p = tt(t, "backgroundImage").replace(L, "")) && "none" !== p) {
                            for (s = m.split(" "), h = g.split(" "), W.setAttribute("src", p), c = 2; --c > -1;) m = s[c], (u = -1 !== m.indexOf("%")) !== (-1 !== h[c].indexOf("%")) && (l = 0 === c ? t.offsetWidth - W.width : t.offsetHeight - W.height, s[c] = u ? parseFloat(m) / 100 * l + "px" : parseFloat(m) / l * 100 + "%");
                            m = s.join(" ")
                        }
                        return this.parseComplex(t.style, m, g, o, a)
                    },
                    formatter: ht
                }), St("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function (t) {
                        return t += "", ht(-1 === t.indexOf(" ") ? t + " " + t : t)
                    }
                }), St("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), St("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), St("transformStyle", {
                    prefix: !0
                }), St("backfaceVisibility", {
                    prefix: !0
                }), St("userSelect", {
                    prefix: !0
                }), St("margin", {
                    parser: yt("marginTop,marginRight,marginBottom,marginLeft")
                }), St("padding", {
                    parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), St("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function (t, e, i, n, o, a) {
                        var s, h, c;
                        return v < 9 ? (h = t.currentStyle, c = v < 8 ? " " : ",", s = "rect(" + h.clipTop + c + h.clipRight + c + h.clipBottom + c + h.clipLeft + ")", e = this.format(e).split(",").join(c)) : (s = this.format(tt(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, s, e, o, a)
                    }
                }), St("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), St("autoRound,strictUnits", {
                    parser: function (t, e, i, n, r) {
                        return r
                    }
                }), St("border", {
                    defaultValue: "0px solid #000",
                    parser: function (t, e, i, n, o, a) {
                        var s = tt(t, "borderTopWidth", r, !1, "0px"),
                            h = this.format(e).split(" "),
                            c = h[0].replace(M, "");
                        return "px" !== c && (s = parseFloat(s) / et(t, "borderTopWidth", 1, c) + c), this.parseComplex(t.style, this.format(s + " " + tt(t, "borderTopStyle", r, !1, "solid") + " " + tt(t, "borderTopColor", r, !1, "#000")), h.join(" "), o, a)
                    },
                    color: !0,
                    formatter: function (t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(vt) || ["#000"])[0]
                    }
                }), St("borderWidth", {
                    parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), St("float,cssFloat,styleFloat", {
                    parser: function (t, e, i, n, r, o) {
                        var a = t.style,
                            s = "cssFloat" in a ? "cssFloat" : "styleFloat";
                        return new xt(a, s, 0, 0, r, -1, i, !1, 0, a[s], e)
                    }
                });
                var qt = function (t) {
                    var e, i = this.t,
                        n = i.filter || tt(this.data, "filter") || "",
                        r = this.s + this.c * t | 0;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !tt(this.data, "filter")) : (i.filter = n.replace(A, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(T, "opacity=" + r))
                };
                St("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (t, e, i, n, o, a) {
                        var s = parseFloat(tt(t, "opacity", r, !1, "1")),
                            h = t.style,
                            c = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + s), c && 1 === s && "hidden" === tt(t, "visibility", r) && 0 !== e && (s = 0), q ? o = new xt(h, "opacity", s, e - s, o) : (o = new xt(h, "opacity", 100 * s, 100 * (e - s), o), o.xn1 = c ? 1 : 0, h.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = a, o.setRatio = qt), c && (o = new xt(h, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
                    }
                });
                var Yt = function (t, e) {
                        e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(E, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    $t = function (t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Yt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                St("className", {
                    parser: function (t, e, n, o, a, s, h) {
                        var c, u, l, p, f, d = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (a = o._classNamePT = new xt(t, n, 0, 0, a, 2), a.setRatio = $t, a.pr = -11, i = !0, a.b = d, u = nt(t, r), l = t._gsClassPT) {
                            for (p = {}, f = l.data; f;) p[f.p] = 1, f = f._next;
                            l.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), c = rt(t, u, nt(t), h, p), t.setAttribute("class", d), a.data = c.firstMPT, t.style.cssText = m, a = a.xfirst = o.parse(t, c.difs, a, s)
                    }
                });
                var Zt = function (t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, r, o, a = this.t.style,
                            s = c.transform.parse;
                        if ("all" === this.e) a.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], c[i] && (c[i].parse === s ? r = !0 : i = "transformOrigin" === i ? Nt : c[i].p), Yt(a, i);
                        r && (Yt(a, Ct), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (St("clearProps", {
                    parser: function (t, e, n, r, o) {
                        return o = new xt(t, n, 0, 0, o, 2), o.setRatio = Zt, o.e = e, o.pr = -10, o.data = r._tween, i = !0, o
                    }
                }), u = "bezier,throwProps,physicsProps,physics2D".split(","), Mt = u.length; Mt--;) At(u[Mt]);
                u = s.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function (t, e, o, h) {
                    if (!t.nodeType) return !1;
                    this._target = g = t, this._tween = o, this._vars = e, y = h, l = e.autoRound, i = !1, n = e.suffixMap || s.suffixMap, r = K(t, ""), a = this._overwriteProps;
                    var u, d, v, _, x, b, w, M, T, A = t.style;
                    if (p && "" === A.zIndex && ("auto" !== (u = tt(t, "zIndex", r)) && "" !== u || this._addLazySet(A, "zIndex", 0)), "string" == typeof e && (_ = A.cssText, u = nt(t, r), A.cssText = _ + ";" + e, u = rt(t, u, nt(t)).difs, !q && S.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, A.cssText = _), e.className ? this._firstPT = d = c.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = d = this.parse(t, e, null), this._transformType) {
                        for (T = 3 === this._transformType, Ct ? f && (p = !0, "" === A.zIndex && ("auto" !== (w = tt(t, "zIndex", r)) && "" !== w || this._addLazySet(A, "zIndex", 0)), m && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : A.zoom = 1, v = d; v && v._next;) v = v._next;
                        M = new xt(t, "transform", 0, 0, null, 2), this._linkCSSP(M, null, v), M.setRatio = Ct ? Xt : Ht, M.data = this._transform || Wt(t, r, !0), M.tween = o, M.pr = -1, a.pop()
                    }
                    if (i) {
                        for (; d;) {
                            for (b = d._next, v = _; v && v.pr > d.pr;) v = v._next;
                            (d._prev = v ? v._prev : x) ? d._prev._next = d : _ = d, (d._next = v) ? v._prev = d : x = d, d = b
                        }
                        this._firstPT = _
                    }
                    return !0
                }, u.parse = function (t, e, i, o) {
                    var a, s, h, u, p, f, d, m, v, _, x = t.style;
                    for (a in e) {
                        if (f = e[a], "function" == typeof f && (f = f(y, g)), s = c[a]) i = s.parse(t, f, a, this, i, o, e);
                        else {
                            if ("--" === a.substr(0, 2)) {
                                this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", K(t).getPropertyValue(a) + "", f + "", a, !1, a);
                                continue
                            }
                            p = tt(t, a, r) + "", v = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || v && P.test(f) ? (v || (f = dt(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = wt(x, a, p, f, !0, "transparent", i, 0, o)) : v && k.test(f) ? i = wt(x, a, p, f, !0, null, i, 0, o) : (h = parseFloat(p), d = h || 0 === h ? p.substr((h + "").length) : "", "" !== p && "auto" !== p || ("width" === a || "height" === a ? (h = st(t, a, r), d = "px") : "left" === a || "top" === a ? (h = it(t, a, r), d = "px") : (h = "opacity" !== a ? 0 : 1, d = "")), _ = v && "=" === f.charAt(1), _ ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(M, "")) : (u = parseFloat(f), m = v ? f.replace(M, "") : ""), "" === m && (m = a in n ? n[a] : d), f = u || 0 === u ? (_ ? u + h : u) + m : e[a], d !== m && ("" === m && "lineHeight" !== a || (u || 0 === u) && h && (h = et(t, a, h, d), "%" === m ? (h /= et(t, a, 100, "%") / 100, !0 !== e.strictUnits && (p = h + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? h /= et(t, a, 1, m) : "px" !== m && (u = et(t, a, u, m), m = "px"), _ && (u || 0 === u) && (f = u + h + m))), _ && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== x[a] && (f || f + "" != "NaN" && null != f) ? (i = new xt(x, a, u || h || 0, 0, i, -1, a, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : p) : $(e[a]) : (i = new xt(x, a, h, u - h, i, 0, a, !1 !== l && ("px" === m || "zIndex" === a), 0, p, f), i.xs0 = m))
                        }
                        o && i && !i.plugin && (i.plugin = o)
                    }
                    return i
                }, u.setRatio = function (t) {
                    var e, i, n, r = this._firstPT;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                        else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                        else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                        else {
                                            for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                            r.t[r.p] = i
                                        } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                    else
                        for (; r;) {
                            if (2 !== r.type)
                                if (r.r && -1 !== r.type)
                                    if (e = Math.round(r.s + r.c), r.type) {
                                        if (1 === r.type) {
                                            for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                            r.t[r.p] = i
                                        }
                                    } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                            else r.setRatio(t);
                            r = r._next
                        }
                }, u._enableTransforms = function (t) {
                    this._transform = this._transform || Wt(this._target, r, !0), this._transformType = this._transform.svg && Pt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Jt = function (t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                u._addLazySet = function (t, e, i) {
                    var n = this._firstPT = new xt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Jt, n.data = this
                }, u._linkCSSP = function (t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, u._mod = function (t) {
                    for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                }, u._kill = function (e) {
                    var i, n, r, o = e;
                    if (e.autoAlpha || e.alpha) {
                        o = {};
                        for (n in e) o[n] = e[n];
                        o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                    }
                    for (e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
                    return t.prototype._kill.call(this, o)
                };
                var Qt = function (t, e, i) {
                    var n, r, o, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Qt(t[r], e, i);
                    else
                        for (n = t.childNodes, r = n.length; --r > -1;) o = n[r], a = o.type, o.style && (e.push(nt(o)), i && i.push(o)), 1 !== a && 9 !== a && 11 !== a || !o.childNodes.length || Qt(o, e, i)
                };
                return s.cascadeTo = function (t, i, n) {
                    var r, o, a, s, h = e.to(t, i, n),
                        c = [h],
                        u = [],
                        l = [],
                        p = [],
                        f = e._internals.reservedProps;
                    for (t = h._targets || h.target, Qt(t, u, p), h.render(i, !0, !0), Qt(t, l), h.render(0, !0, !0), h._enabled(!0), r = p.length; --r > -1;)
                        if (o = rt(p[r], u[r], l[r]), o.firstMPT) {
                            o = o.difs;
                            for (a in n) f[a] && (o[a] = n[a]);
                            s = {};
                            for (a in o) s[a] = u[r][a];
                            c.push(e.fromTo(p[r], i, s, o))
                        }
                    return c
                }, t.activate([s]), s
            }, !0),
                function () {
                    var t = o._gsDefine.plugin({
                            propName: "roundProps",
                            version: "1.6.0",
                            priority: -1,
                            API: 2,
                            init: function (t, e, i) {
                                return this._tween = i, !0
                            }
                        }),
                        e = function (t) {
                            for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
                        },
                        i = t.prototype;
                    i._onInitAllProps = function () {
                        for (var t, i, n, r = this._tween, o = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), a = o.length, s = {}, h = r._propLookup.roundProps; --a > -1;) s[o[a]] = Math.round;
                        for (a = o.length; --a > -1;)
                            for (t = o[a], i = r._firstPT; i;) n = i._next, i.pg ? i.t._mod(s) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[t] = h)), i = n;
                        return !1
                    }, i._add = function (t, e, i, n) {
                        this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
                    }
                }(),
                function () {
                    o._gsDefine.plugin({
                        propName: "attr",
                        API: 2,
                        version: "0.6.1",
                        init: function (t, e, i, n) {
                            var r, o;
                            if ("function" != typeof t.setAttribute) return !1;
                            for (r in e) o = e[r], "function" == typeof o && (o = o(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", o + "", r, !1, r), this._overwriteProps.push(r);
                            return !0
                        }
                    })
                }(), o._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function (t, e, i, n) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var r, o, a, s, h, c, u = !0 === e.useRadians ? 2 * Math.PI : 360;
                    for (r in e) "useRadians" !== r && (s = e[r], "function" == typeof s && (s = s(n, t)), c = (s + "").split("_"), o = c[0], a = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), s = this.finals[r] = "string" == typeof o && "=" === o.charAt(1) ? a + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0, h = s - a, c.length && (o = c.join("_"), -1 !== o.indexOf("short") && (h %= u) !== h % (u / 2) && (h = h < 0 ? h + u : h - u), -1 !== o.indexOf("_cw") && h < 0 ? h = (h + 9999999999 * u) % u - (h / u | 0) * u : -1 !== o.indexOf("ccw") && h > 0 && (h = (h - 9999999999 * u) % u - (h / u | 0) * u)), (h > 1e-6 || h < -1e-6) && (this._addTween(t, r, a, a + h, r), this._overwriteProps.push(r)));
                    return !0
                },
                set: function (t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, o._gsDefine("easing.Back", ["easing.Ease"], function (t) {
                var e, i, n, r = o.GreenSockGlobals || o,
                    a = r.com.greensock,
                    s = 2 * Math.PI,
                    h = Math.PI / 2,
                    c = a._class,
                    u = function (e, i) {
                        var n = c("easing." + e, function () {
                            }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    l = t.register || function () {
                    },
                    p = function (t, e, i, n, r) {
                        var o = c("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return l(o, t), o
                    },
                    f = function (t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    d = function (e, i) {
                        var n = c("easing." + e, function (t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function (t) {
                            return new n(t)
                        }, n
                    },
                    m = p("Back", d("BackOut", function (t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), d("BackIn", function (t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), d("BackInOut", function (t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    v = c("easing.SlowMo", function (t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                    }, !0),
                    g = v.prototype = new t;
                return g.constructor = v, g.getRatio = function (t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, v.ease = new v(.7, .7), g.config = v.config = function (t, e, i) {
                    return new v(t, e, i)
                }, e = c("easing.SteppedEase", function (t, e) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
                }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function (t) {
                    return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
                }, g.config = e.config = function (t, i) {
                    return new e(t, i)
                }, i = c("easing.RoughEase", function (e) {
                    e = e || {};
                    for (var i, n, r, o, a, s, h = e.taper || "none", c = [], u = 0, l = 0 | (e.points || 20), p = l, d = !1 !== e.randomize, m = !0 === e.clamp, v = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = d ? Math.random() : 1 / l * p, n = v ? v.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (o = 1 - i, r = o * o * g) : "in" === h ? r = i * i * g : i < .5 ? (o = 2 * i, r = o * o * .5 * g) : (o = 2 * (1 - i), r = o * o * .5 * g), d ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : n < 0 && (n = 0)), c[u++] = {
                        x: i,
                        y: n
                    };
                    for (c.sort(function (t, e) {
                        return t.x - e.x
                    }), s = new f(1, 1, null), p = l; --p > -1;) a = c[p], s = new f(a.x, a.y, s);
                    this._prev = new f(0, 0, 0 !== s.t ? s : s.next)
                }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function (t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function (t) {
                    return new i(t)
                }, i.ease = new i, p("Bounce", u("BounceOut", function (t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), u("BounceIn", function (t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), u("BounceInOut", function (t) {
                    var e = t < .5;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), p("Circ", u("CircOut", function (t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), u("CircIn", function (t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), u("CircInOut", function (t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function (e, i, n) {
                    var r = c("easing." + e, function (t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0), this._p2 = s / this._p2
                        }, !0),
                        o = r.prototype = new t;
                    return o.constructor = r, o.getRatio = i, o.config = function (t, e) {
                        return new r(t, e)
                    }, r
                }, p("Elastic", n("ElasticOut", function (t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function (t) {
                    return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                }, .3), n("ElasticInOut", function (t) {
                    return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), p("Expo", u("ExpoOut", function (t) {
                    return 1 - Math.pow(2, -10 * t)
                }), u("ExpoIn", function (t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), u("ExpoInOut", function (t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), p("Sine", u("SineOut", function (t) {
                    return Math.sin(t * h)
                }), u("SineIn", function (t) {
                    return 1 - Math.cos(t * h)
                }), u("SineInOut", function (t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), c("easing.EaseLookup", {
                    find: function (e) {
                        return t.map[e]
                    }
                }, !0), l(r.SlowMo, "SlowMo", "ease,"), l(i, "RoughEase", "ease,"), l(e, "SteppedEase", "ease,"), m
            }, !0)
        }), o._gsDefine && o._gsQueue.pop()(),
            function (i, o) {
                "use strict";
                var a = {},
                    s = i.document,
                    h = i.GreenSockGlobals = i.GreenSockGlobals || i;
                if (!h.TweenLite) {
                    var c, u, l, p, f, d = function (t) {
                            var e, i = t.split("."),
                                n = h;
                            for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                            return n
                        },
                        m = d("com.greensock"),
                        v = function (t) {
                            var e, i = [],
                                n = t.length;
                            for (e = 0; e !== n; i.push(t[e++])) ;
                            return i
                        },
                        g = function () {
                        },
                        y = function () {
                            var t = Object.prototype.toString,
                                e = t.call([]);
                            return function (i) {
                                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                            }
                        }(),
                        _ = {},
                        x = function (i, o, s, c) {
                            this.sc = _[i] ? _[i].sc : [], _[i] = this, this.gsClass = null, this.func = s;
                            var u = [];
                            this.check = function (l) {
                                for (var p, f, m, v, g = o.length, y = g; --g > -1;) (p = _[o[g]] || new x(o[g], [])).gsClass ? (u[g] = p.gsClass, y--) : l && p.sc.push(this);
                                if (0 === y && s) {
                                    if (f = ("com.greensock." + i).split("."), m = f.pop(), v = d(f.join("."))[m] = this.gsClass = s.apply(s, u), c)
                                        if (h[m] = a[m] = v, void 0 !== t && t.exports)
                                            if ("TweenMax" === i) {
                                                t.exports = a.TweenMax = v;
                                                for (g in a) v[g] = a[g]
                                            } else a.TweenMax && (a.TweenMax[m] = v);
                                        else n = [], void 0 !== (r = function () {
                                            return v
                                        }.apply(e, n)) && (t.exports = r);
                                    for (g = 0; g < this.sc.length; g++) this.sc[g].check()
                                }
                            }, this.check(!0)
                        },
                        b = i._gsDefine = function (t, e, i, n) {
                            return new x(t, e, i, n)
                        },
                        w = m._class = function (t, e, i) {
                            return e = e || function () {
                            }, b(t, [], function () {
                                return e
                            }, i), e
                        };
                    b.globals = h;
                    var M = [0, 0, 1, 1],
                        T = w("easing.Ease", function (t, e, i, n) {
                            this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? M.concat(e) : M
                        }, !0),
                        S = T.map = {},
                        A = T.register = function (t, e, i, n) {
                            for (var r, o, a, s, h = e.split(","), c = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                                for (o = h[c], r = n ? w("easing." + o, null, !0) : m.easing[o] || {}, a = u.length; --a > -1;) s = u[a], S[o + "." + s] = S[s + o] = r[s] = t.getRatio ? t : t[s] || new t
                        };
                    for (l = T.prototype, l._calcEnd = !1, l.getRatio = function (t) {
                        if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                        var e = this._type,
                            i = this._power,
                            n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                        return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
                    }, c = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], u = c.length; --u > -1;) l = c[u] + ",Power" + u, A(new T(null, null, 1, u), l, "easeOut", !0), A(new T(null, null, 2, u), l, "easeIn" + (0 === u ? ",easeNone" : "")), A(new T(null, null, 3, u), l, "easeInOut");
                    S.linear = m.easing.Linear.easeIn, S.swing = m.easing.Quad.easeInOut;
                    var P = w("events.EventDispatcher", function (t) {
                        this._listeners = {}, this._eventTarget = t || this
                    });
                    l = P.prototype, l.addEventListener = function (t, e, i, n, r) {
                        r = r || 0;
                        var o, a, s = this._listeners[t],
                            h = 0;
                        for (this !== p || f || p.wake(), null == s && (this._listeners[t] = s = []), a = s.length; --a > -1;) o = s[a], o.c === e && o.s === i ? s.splice(a, 1) : 0 === h && o.pr < r && (h = a + 1);
                        s.splice(h, 0, {
                            c: e,
                            s: i,
                            up: n,
                            pr: r
                        })
                    }, l.removeEventListener = function (t, e) {
                        var i, n = this._listeners[t];
                        if (n)
                            for (i = n.length; --i > -1;)
                                if (n[i].c === e) return void n.splice(i, 1)
                    }, l.dispatchEvent = function (t) {
                        var e, i, n, r = this._listeners[t];
                        if (r)
                            for (e = r.length, e > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;) (n = r[e]) && (n.up ? n.c.call(n.s || i, {
                                type: t,
                                target: i
                            }) : n.c.call(n.s || i))
                    };
                    var E = i.requestAnimationFrame,
                        C = i.cancelAnimationFrame,
                        L = Date.now || function () {
                            return (new Date).getTime()
                        },
                        N = L();
                    for (c = ["ms", "moz", "webkit", "o"], u = c.length; --u > -1 && !E;) E = i[c[u] + "RequestAnimationFrame"], C = i[c[u] + "CancelAnimationFrame"] || i[c[u] + "CancelRequestAnimationFrame"];
                    w("Ticker", function (t, e) {
                        var i, n, r, o, a, h = this,
                            c = L(),
                            u = !(!1 === e || !E) && "auto",
                            l = 500,
                            d = 33,
                            m = function (t) {
                                var e, s, u = L() - N;
                                u > l && (c += u - d), N += u, h.time = (N - c) / 1e3, e = h.time - a, (!i || e > 0 || !0 === t) && (h.frame++, a += e + (e >= o ? .004 : o - e), s = !0), !0 !== t && (r = n(m)), s && h.dispatchEvent("tick")
                            };
                        P.call(h), h.time = h.frame = 0, h.tick = function () {
                            m(!0)
                        }, h.lagSmoothing = function (t, e) {
                            if (!arguments.length) return l < 1e10;
                            l = t || 1e10, d = Math.min(e, l, 0)
                        }, h.sleep = function () {
                            null != r && (u && C ? C(r) : clearTimeout(r), n = g, r = null, h === p && (f = !1))
                        }, h.wake = function (t) {
                            null !== r ? h.sleep() : t ? c += -N + (N = L()) : h.frame > 10 && (N = L() - l + 5), n = 0 === i ? g : u && E ? E : function (t) {
                                return setTimeout(t, 1e3 * (a - h.time) + 1 | 0)
                            }, h === p && (f = !0), m(2)
                        }, h.fps = function (t) {
                            if (!arguments.length) return i;
                            i = t, o = 1 / (i || 60), a = this.time + o, h.wake()
                        }, h.useRAF = function (t) {
                            if (!arguments.length) return u;
                            h.sleep(), u = t, h.fps(i)
                        }, h.fps(t), setTimeout(function () {
                            "auto" === u && h.frame < 5 && "hidden" !== s.visibilityState && h.useRAF(!1)
                        }, 1500)
                    }), l = m.Ticker.prototype = new m.events.EventDispatcher, l.constructor = m.Ticker;
                    var O = w("core.Animation", function (t, e) {
                        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Q) {
                            f || p.wake();
                            var i = this.vars.useFrames ? J : Q;
                            i.add(this, i._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    p = O.ticker = new m.Ticker, l = O.prototype, l._dirty = l._gc = l._initted = l._paused = !1, l._totalTime = l._time = 0, l._rawPrevTime = -1, l._next = l._last = l._onUpdate = l._timeline = l.timeline = null, l._paused = !1;
                    var R = function () {
                        f && L() - N > 2e3 && ("hidden" !== s.visibilityState || !p.lagSmoothing()) && p.wake();
                        var t = setTimeout(R, 2e3);
                        t.unref && t.unref()
                    };
                    R(), l.play = function (t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, l.pause = function (t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, l.resume = function (t, e) {
                        return null != t && this.seek(t, e), this.paused(!1)
                    }, l.seek = function (t, e) {
                        return this.totalTime(Number(t), !1 !== e)
                    }, l.restart = function (t, e) {
                        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
                    }, l.reverse = function (t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, l.render = function (t, e, i) {
                    }, l.invalidate = function () {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                    }, l.isActive = function () {
                        var t, e = this._timeline,
                            i = this._startTime;
                        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
                    }, l._enabled = function (t, e) {
                        return f || p.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                    }, l._kill = function (t, e) {
                        return this._enabled(!1, !1)
                    }, l.kill = function (t, e) {
                        return this._kill(t, e), this
                    }, l._uncache = function (t) {
                        for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                        return this
                    }, l._swapSelfInParams = function (t) {
                        for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                        return i
                    }, l._callback = function (t) {
                        var e = this.vars,
                            i = e[t],
                            n = e[t + "Params"],
                            r = e[t + "Scope"] || e.callbackScope || this;
                        switch (n ? n.length : 0) {
                            case 0:
                                i.call(r);
                                break;
                            case 1:
                                i.call(r, n[0]);
                                break;
                            case 2:
                                i.call(r, n[0], n[1]);
                                break;
                            default:
                                i.apply(r, n)
                        }
                    }, l.eventCallback = function (t, e, i, n) {
                        if ("on" === (t || "").substr(0, 2)) {
                            var r = this.vars;
                            if (1 === arguments.length) return r[t];
                            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = y(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                        }
                        return this
                    }, l.delay = function (t) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                    }, l.duration = function (t) {
                        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, l.totalDuration = function (t) {
                        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                    }, l.time = function (t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                    }, l.totalTime = function (t, e, i) {
                        if (f || p.wake(), !arguments.length) return this._totalTime;
                        if (this._timeline) {
                            if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var n = this._totalDuration,
                                    r = this._timeline;
                                if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                                    for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                            }
                            this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (U.length && tt(), this.render(t, e, !1), U.length && tt())
                        }
                        return this
                    }, l.progress = l.totalProgress = function (t, e) {
                        var i = this.duration();
                        return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                    }, l.startTime = function (t) {
                        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                    }, l.endTime = function (t) {
                        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                    }, l.timeScale = function (t) {
                        if (!arguments.length) return this._timeScale;
                        var e, i;
                        for (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming && (e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
                        return this
                    }, l.reversed = function (t) {
                        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, l.paused = function (t) {
                        if (!arguments.length) return this._paused;
                        var e, i, n = this._timeline;
                        return t != this._paused && n && (f || t || p.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                    };
                    var I = w("core.SimpleTimeline", function (t) {
                        O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    l = I.prototype = new O, l.constructor = I, l.kill()._gc = !1, l._first = l._last = l._recent = null, l._sortChildren = !1, l.add = l.insert = function (t, e, i, n) {
                        var r, o;
                        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                            for (o = t._startTime; r && r._startTime > o;) r = r._prev;
                        return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
                    }, l._remove = function (t, e) {
                        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, l.render = function (t, e, i) {
                        var n, r = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
                    }, l.rawTime = function () {
                        return f || p.wake(), this._totalTime
                    };
                    var D = w("TweenLite", function (t, e, n) {
                            if (O.call(this, e, n), this.render = D.prototype.render, null == t) throw "Cannot tween a null target.";
                            this.target = t = "string" != typeof t ? t : D.selector(t) || t;
                            var r, o, a,
                                s = t.jquery || t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType),
                                h = this.vars.overwrite;
                            if (this._overwrite = h = null == h ? Z[D.defaultOverwrite] : "number" == typeof h ? h >> 0 : Z[h], (s || t instanceof Array || t.push && y(t)) && "number" != typeof t[0])
                                for (this._targets = a = v(t), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++) o = a[r], o ? "string" != typeof o ? o.length && o !== i && o[0] && (o[0] === i || o[0].nodeType && o[0].style && !o.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(v(o))) : (this._siblings[r] = et(o, this, !1), 1 === h && this._siblings[r].length > 1 && nt(o, this, null, 1, this._siblings[r])) : "string" == typeof(o = a[r--] = D.selector(o)) && a.splice(r + 1, 1) : a.splice(r--, 1);
                            else this._propLookup = {}, this._siblings = et(t, this, !1), 1 === h && this._siblings.length > 1 && nt(t, this, null, 1, this._siblings);
                            (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
                        }, !0),
                        k = function (t) {
                            return t && t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType)
                        },
                        z = function (t, e) {
                            var i, n = {};
                            for (i in t) $[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!X[i] || X[i] && X[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                            t.css = n
                        };
                    l = D.prototype = new O, l.constructor = D, l.kill()._gc = !1, l.ratio = 0, l._firstPT = l._targets = l._overwrittenProps = l._startAt = null, l._notifyPluginsOfEnabled = l._lazy = !1, D.version = "1.20.3", D.defaultEase = l._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = p, D.autoSleep = 120, D.lagSmoothing = function (t, e) {
                        p.lagSmoothing(t, e)
                    }, D.selector = i.$ || i.jQuery || function (t) {
                        var e = i.$ || i.jQuery;
                        return e ? (D.selector = e, e(t)) : void 0 === s ? t : s.querySelectorAll ? s.querySelectorAll(t) : s.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
                    };
                    var U = [],
                        F = {},
                        B = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        G = /[\+-]=-?[\.\d]/,
                        j = function (t) {
                            for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                        },
                        V = function (t, e, i, n) {
                            var r, o, a, s, h, c, u, l = [],
                                p = 0,
                                f = "",
                                d = 0;
                            for (l.start = t, l.end = e, t = l[0] = t + "", e = l[1] = e + "", i && (i(l), t = l[0], e = l[1]), l.length = 0, r = t.match(B) || [], o = e.match(B) || [], n && (n._next = null, n.blob = 1, l._firstPT = l._applyPT = n), h = o.length, s = 0; s < h; s++) u = o[s], c = e.substr(p, e.indexOf(u, p) - p), f += c || !s ? c : ",", p += c.length, d ? d = (d + 1) % 5 : "rgba(" === c.substr(-5) && (d = 1), u === r[s] || r.length <= s ? f += u : (f && (l.push(f), f = ""), a = parseFloat(r[s]), l.push(a), l._firstPT = {
                                _next: l._firstPT,
                                t: l,
                                p: l.length - 1,
                                s: a,
                                c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - a) || 0,
                                f: 0,
                                m: d && d < 4 ? Math.round : 0
                            }), p += u.length;
                            return f += e.substr(p), f && l.push(f), l.setRatio = j, G.test(e) && (l.end = null), l
                        },
                        W = function (t, e, i, n, r, o, a, s, h) {
                            "function" == typeof n && (n = n(h || 0, t));
                            var c, u = typeof t[e],
                                l = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                                p = "get" !== i ? i : l ? a ? t[l](a) : t[l]() : t[e],
                                f = "string" == typeof n && "=" === n.charAt(1),
                                d = {
                                    t: t,
                                    p: e,
                                    s: p,
                                    f: "function" === u,
                                    pg: 0,
                                    n: r || e,
                                    m: o ? "function" == typeof o ? o : Math.round : 0,
                                    pr: 0,
                                    c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - p || 0
                                };
                            if (("number" != typeof p || "number" != typeof n && !f) && (a || isNaN(p) || !f && isNaN(n) || "boolean" == typeof p || "boolean" == typeof n ? (d.fp = a, c = V(p, f ? parseFloat(d.s) + d.c : n, s || D.defaultStringFilter, d), d = {
                                    t: c,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 2,
                                    pg: 0,
                                    n: r || e,
                                    pr: 0,
                                    m: 0
                                }) : (d.s = parseFloat(p), f || (d.c = parseFloat(n) - d.s || 0))), d.c) return (d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d
                        },
                        H = D._internals = {
                            isArray: y,
                            isSelector: k,
                            lazyTweens: U,
                            blobDif: V
                        },
                        X = D._plugins = {},
                        q = H.tweenLookup = {},
                        Y = 0,
                        $ = H.reservedProps = {
                            ease: 1,
                            delay: 1,
                            overwrite: 1,
                            onComplete: 1,
                            onCompleteParams: 1,
                            onCompleteScope: 1,
                            useFrames: 1,
                            runBackwards: 1,
                            startAt: 1,
                            onUpdate: 1,
                            onUpdateParams: 1,
                            onUpdateScope: 1,
                            onStart: 1,
                            onStartParams: 1,
                            onStartScope: 1,
                            onReverseComplete: 1,
                            onReverseCompleteParams: 1,
                            onReverseCompleteScope: 1,
                            onRepeat: 1,
                            onRepeatParams: 1,
                            onRepeatScope: 1,
                            easeParams: 1,
                            yoyo: 1,
                            immediateRender: 1,
                            repeat: 1,
                            repeatDelay: 1,
                            data: 1,
                            paused: 1,
                            reversed: 1,
                            autoCSS: 1,
                            lazy: 1,
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1,
                            yoyoEase: 1
                        },
                        Z = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            true: 1,
                            false: 0
                        },
                        J = O._rootFramesTimeline = new I,
                        Q = O._rootTimeline = new I,
                        K = 30,
                        tt = H.lazyRender = function () {
                            var t, e = U.length;
                            for (F = {}; --e > -1;) (t = U[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                            U.length = 0
                        };
                    Q._startTime = p.time, J._startTime = p.frame, Q._active = J._active = !0, setTimeout(tt, 1), O._updateRoot = D.render = function () {
                        var t, e, i;
                        if (U.length && tt(), Q.render((p.time - Q._startTime) * Q._timeScale, !1, !1), J.render((p.frame - J._startTime) * J._timeScale, !1, !1), U.length && tt(), p.frame >= K) {
                            K = p.frame + (parseInt(D.autoSleep, 10) || 120);
                            for (i in q) {
                                for (e = q[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                                0 === e.length && delete q[i]
                            }
                            if ((!(i = Q._first) || i._paused) && D.autoSleep && !J._first && 1 === p._listeners.tick.length) {
                                for (; i && i._paused;) i = i._next;
                                i || p.sleep()
                            }
                        }
                    }, p.addEventListener("tick", O._updateRoot);
                    var et = function (t, e, i) {
                            var n, r, o = t._gsTweenID;
                            if (q[o || (t._gsTweenID = o = "t" + Y++)] || (q[o] = {
                                    target: t,
                                    tweens: []
                                }), e && (n = q[o].tweens, n[r = n.length] = e, i))
                                for (; --r > -1;) n[r] === e && n.splice(r, 1);
                            return q[o].tweens
                        },
                        it = function (t, e, i, n) {
                            var r, o, a = t.vars.onOverwrite;
                            return a && (r = a(t, e, i, n)), a = D.onOverwrite, a && (o = a(t, e, i, n)), !1 !== r && !1 !== o
                        },
                        nt = function (t, e, i, n, r) {
                            var o, a, s, h;
                            if (1 === n || n >= 4) {
                                for (h = r.length, o = 0; o < h; o++)
                                    if ((s = r[o]) !== e) s._gc || s._kill(null, t, e) && (a = !0);
                                    else if (5 === n) break;
                                return a
                            }
                            var c, u = e._startTime + 1e-10,
                                l = [],
                                p = 0,
                                f = 0 === e._duration;
                            for (o = r.length; --o > -1;) (s = r[o]) === e || s._gc || s._paused || (s._timeline !== e._timeline ? (c = c || rt(e, 0, f), 0 === rt(s, c, f) && (l[p++] = s)) : s._startTime <= u && s._startTime + s.totalDuration() / s._timeScale > u && ((f || !s._initted) && u - s._startTime <= 2e-10 || (l[p++] = s)));
                            for (o = p; --o > -1;)
                                if (s = l[o], 2 === n && s._kill(i, t, e) && (a = !0), 2 !== n || !s._firstPT && s._initted) {
                                    if (2 !== n && !it(s, e)) continue;
                                    s._enabled(!1, !1) && (a = !0)
                                }
                            return a
                        },
                        rt = function (t, e, i) {
                            for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline;) {
                                if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                                n = n._timeline
                            }
                            return o /= r, o > e ? o - e : i && o === e || !t._initted && o - e < 2e-10 ? 1e-10 : (o += t.totalDuration() / t._timeScale / r) > e + 1e-10 ? 0 : o - e - 1e-10
                        };
                    l._init = function () {
                        var t, e, i, n, r, o, a = this.vars,
                            s = this._overwrittenProps,
                            h = this._duration,
                            c = !!a.immediateRender,
                            u = a.ease;
                        if (a.startAt) {
                            this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                            for (n in a.startAt) r[n] = a.startAt[n];
                            if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = c && !1 !== a.lazy, r.startAt = r.delay = null, r.onUpdate = a.onUpdate, r.onUpdateParams = a.onUpdateParams, r.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = D.to(this.target, 0, r), c)
                                if (this._time > 0) this._startAt = null;
                                else if (0 !== h) return
                        } else if (a.runBackwards && 0 !== h)
                            if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                            else {
                                0 !== this._time && (c = !1), i = {};
                                for (n in a) $[n] && "autoCSS" !== n || (i[n] = a[n]);
                                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = c && !1 !== a.lazy, i.immediateRender = c, this._startAt = D.to(this.target, 0, i), c) {
                                    if (0 === this._time) return
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            }
                        if (this._ease = u = u ? u instanceof T ? u : "function" == typeof u ? new T(u, a.easeParams) : S[u] || D.defaultEase : D.defaultEase, a.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                            for (o = this._targets.length, t = 0; t < o; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], s ? s[t] : null, t) && (e = !0);
                        else e = this._initProps(this.target, this._propLookup, this._siblings, s, 0);
                        if (e && D._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                            for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                        this._onUpdate = a.onUpdate, this._initted = !0
                    }, l._initProps = function (t, e, n, r, o) {
                        var a, s, h, c, u, l;
                        if (null == t) return !1;
                        F[t._gsTweenID] && tt(), this.vars.css || t.style && t !== i && t.nodeType && X.css && !1 !== this.vars.autoCSS && z(this.vars, t);
                        for (a in this.vars)
                            if (l = this.vars[a], $[a]) l && (l instanceof Array || l.push && y(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[a] = l = this._swapSelfInParams(l, this));
                            else if (X[a] && (c = new X[a])._onInitTween(t, this.vars[a], this, o)) {
                                for (this._firstPT = u = {
                                    _next: this._firstPT,
                                    t: c,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: a,
                                    pg: 1,
                                    pr: c._priority,
                                    m: 0
                                }, s = c._overwriteProps.length; --s > -1;) e[c._overwriteProps[s]] = this._firstPT;
                                (c._priority || c._onInitAllProps) && (h = !0), (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                            } else e[a] = W.call(this, t, a, "get", l, a, 0, null, this.vars.stringFilter, o);
                        return r && this._kill(r, t) ? this._initProps(t, e, n, r, o) : this._overwrite > 1 && this._firstPT && n.length > 1 && nt(t, this, e, this._overwrite, n) ? (this._kill(e, t), this._initProps(t, e, n, r, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (F[t._gsTweenID] = !0), h)
                    }, l.render = function (t, e, i) {
                        var n, r, o, a, s = this._time,
                            h = this._duration,
                            c = this._rawPrevTime;
                        if (t >= h - 1e-7 && t >= 0) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (c < 0 || t <= 0 && t >= -1e-7 || 1e-10 === c && "isPause" !== this.data) && c !== t && (i = !0, c > 1e-10 && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || c === t ? t : 1e-10);
                        else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === h && c > 0) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (c >= 0 && (1e-10 !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || c === t ? t : 1e-10)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                        else if (this._totalTime = this._time = t, this._easeType) {
                            var u = t / h,
                                l = this._easeType,
                                p = this._easePower;
                            (1 === l || 3 === l && u >= .5) && (u = 1 - u), 3 === l && (u *= 2), 1 === p ? u *= u : 2 === p ? u *= u * u : 3 === p ? u *= u * u * u : 4 === p && (u *= u * u * u * u), this.ratio = 1 === l ? 1 - u : 2 === l ? u : t / h < .5 ? u / 2 : 1 - u / 2
                        } else this.ratio = this._ease.getRatio(t / h);
                        if (this._time !== s || i) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = s, this._rawPrevTime = c, U.push(this), void(this._lazy = [t, e]);
                                this._time && !n ? this.ratio = this._ease.getRatio(this._time / h) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== s && t >= 0 && (this._active = !0), 0 === s && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== h || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                            this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== s || n || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === h && 1e-10 === this._rawPrevTime && 1e-10 !== a && (this._rawPrevTime = 0)))
                        }
                    }, l._kill = function (t, e, i) {
                        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                        e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                        var n, r, o, a, s, h, c, u, l,
                            p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                        if ((y(e) || k(e)) && "number" != typeof e[0])
                            for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (h = !0);
                        else {
                            if (this._targets) {
                                for (n = this._targets.length; --n > -1;)
                                    if (e === this._targets[n]) {
                                        s = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                        break
                                    }
                            } else {
                                if (e !== this.target) return !1;
                                s = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                            }
                            if (s) {
                                if (c = t || s, u = t !== r && "all" !== r && t !== s && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                                    for (o in c) s[o] && (l || (l = []), l.push(o));
                                    if ((l || !t) && !it(this, i, e, l)) return !1
                                }
                                for (o in c) (a = s[o]) && (p && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, h = !0), a.pg && a.t._kill(c) && (h = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete s[o]), u && (r[o] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return h
                    }, l.invalidate = function () {
                        return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
                    }, l._enabled = function (t, e) {
                        if (f || p.wake(), t && this._gc) {
                            var i, n = this._targets;
                            if (n)
                                for (i = n.length; --i > -1;) this._siblings[i] = et(n[i], this, !0);
                            else this._siblings = et(this.target, this, !0)
                        }
                        return O.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && D._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                    }, D.to = function (t, e, i) {
                        return new D(t, e, i)
                    }, D.from = function (t, e, i) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
                    }, D.fromTo = function (t, e, i, n) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new D(t, e, n)
                    }, D.delayedCall = function (t, e, i, n, r) {
                        return new D(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            callbackScope: n,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: r,
                            overwrite: 0
                        })
                    }, D.set = function (t, e) {
                        return new D(t, 0, e)
                    }, D.getTweensOf = function (t, e) {
                        if (null == t) return [];
                        t = "string" != typeof t ? t : D.selector(t) || t;
                        var i, n, r, o;
                        if ((y(t) || k(t)) && "number" != typeof t[0]) {
                            for (i = t.length, n = []; --i > -1;) n = n.concat(D.getTweensOf(t[i], e));
                            for (i = n.length; --i > -1;)
                                for (o = n[i], r = i; --r > -1;) o === n[r] && n.splice(i, 1)
                        } else if (t._gsTweenID)
                            for (n = et(t).concat(), i = n.length; --i > -1;) (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                        return n || []
                    }, D.killTweensOf = D.killDelayedCallsTo = function (t, e, i) {
                        "object" == typeof e && (i = e, e = !1);
                        for (var n = D.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
                    };
                    var ot = w("plugins.TweenPlugin", function (t, e) {
                        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = ot.prototype
                    }, !0);
                    if (l = ot.prototype, ot.version = "1.19.0", ot.API = 2, l._firstPT = null, l._addTween = W, l.setRatio = j, l._kill = function (t) {
                            var e, i = this._overwriteProps,
                                n = this._firstPT;
                            if (null != t[this._propName]) this._overwriteProps = [];
                            else
                                for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                            for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                            return !1
                        }, l._mod = l._roundProps = function (t) {
                            for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                        }, D._onPluginEvent = function (t, e) {
                            var i, n, r, o, a, s = e._firstPT;
                            if ("_onInitAllProps" === t) {
                                for (; s;) {
                                    for (a = s._next, n = r; n && n.pr > s.pr;) n = n._next;
                                    (s._prev = n ? n._prev : o) ? s._prev._next = s : r = s, (s._next = n) ? n._prev = s : o = s, s = a
                                }
                                s = e._firstPT = r
                            }
                            for (; s;) s.pg && "function" == typeof s.t[t] && s.t[t]() && (i = !0), s = s._next;
                            return i
                        }, ot.activate = function (t) {
                            for (var e = t.length; --e > -1;) t[e].API === ot.API && (X[(new t[e])._propName] = t[e]);
                            return !0
                        }, b.plugin = function (t) {
                            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                            var e, i = t.propName,
                                n = t.priority || 0,
                                r = t.overwriteProps,
                                o = {
                                    init: "_onInitTween",
                                    set: "setRatio",
                                    kill: "_kill",
                                    round: "_mod",
                                    mod: "_mod",
                                    initAll: "_onInitAllProps"
                                },
                                a = w("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                                    ot.call(this, i, n), this._overwriteProps = r || []
                                }, !0 === t.global),
                                s = a.prototype = new ot(i);
                            s.constructor = a, a.API = t.API;
                            for (e in o) "function" == typeof t[e] && (s[o[e]] = t[e]);
                            return a.version = t.version, ot.activate([a]), a
                        }, c = i._gsQueue) {
                        for (u = 0; u < c.length; u++) c[u]();
                        for (l in _) _[l].func || i.console.log("GSAP encountered missing dependency: " + l)
                    }
                    f = !1
                }
            }(void 0 !== t && t.exports && void 0 !== i ? i : this || window)
    }).call(e, i(4))
}