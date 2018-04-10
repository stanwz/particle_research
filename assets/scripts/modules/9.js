function (t, e, i) {
    (function (i) {
        var n, r;
        /*!
     * VERSION: 1.20.3
     * DATE: 2017-10-02
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */
        !function (i, o) {
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
                                        if ("TweenLite" === i) {
                                            t.exports = a.TweenLite = v;
                                            for (g in a) v[g] = a[g]
                                        } else a.TweenLite && (a.TweenLite[m] = v);
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