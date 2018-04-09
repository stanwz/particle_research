/* eslint-disable vars-on-top, no-var */
(function epicHello() {
    var userAgent = navigator.userAgent.toLowerCase();
    var supported = /(chrome|firefox)/;

    if (supported.test(userAgent.toLowerCase())) {
        var dark = [
            'padding: 20px 5px 16px',
            'background-color: #171718',
            'color: #bc994e',
        ].join(';');

        if (userAgent.indexOf('chrome') > -1) {
            dark += ';';
            dark += [
                'padding: 20px 5px 16px 40px',
                'background-image: url(http://epic.net/img/signature/epic-logo.png)',
                'background-position: 10px 9px',
                'background-repeat: no-repeat',
                'background-size: 26px 30px',
            ].join(';');
        }

        var gold = [
            'padding: 20px 5px 16px',
            'background-color: #bc994e',
            'color: #ffffff',
        ].join(';');

        var spacer = [
            'background-color: transparent',
        ].join(';');

        var msg = '\n\n %c Crafted with ♥︎ by EPIC %c https://www.epic.net %c \n\n\n';

        console.log(msg, dark, gold, spacer);
    } else if (window.console) {
        console.log('Crafted with love by EPIC - https://www.epic.net');
    }
}());
!function (t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var r = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }

    var i = {};
    e.m = t, e.c = i, e.d = function (t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, e.n = function (t) {
        var i = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(i, "a", i), i
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "/dist", e(e.s = 10)
}
([
    function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            s = function t(e, i, n) {
                null === e && (e = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(e, i);
                if (void 0 === r) {
                    var o = Object.getPrototypeOf(e);
                    return null === o ? void 0 : t(o, i, n)
                }
                if ("value" in r) return r.value;
                var a = r.get;
                if (void 0 !== a) return a.call(n)
            },
            h = i(17),
            c = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(h),
            u = function (t) {
                function e() {
                    return n(this, e), r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }

                return o(e, t), a(e, [{
                    key: "emit",
                    value: function () {
                        for (var t, i = arguments.length, n = Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                        var o = n[0];
                        n.slice(1);
                        this.logBlacklist && this.logBlacklist.indexOf(o), (t = s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this)).call.apply(t, [this].concat(n))
                    }
                }]), e
            }(c.default),
            l = new u;
        l.logBlacklist = [], l.RESIZE = "resize", l.logBlacklist.push(l.RESIZE), l.SCROLL = "scroll", l.logBlacklist.push(l.SCROLL), l.RAF = "raf", l.logBlacklist.push(l.RAF), l.PANEL_NEXT = "panelNext", l.PANEL_PREV = "panelPrev", l.PANEL_CHANGE = "panelChange", l.PANEL_END = "panelEnd", l.HOME_READY = "homeReady", l.WORLD_READY = "worldReady", l.MOUSE_MOVE = "mouseMove", l.logBlacklist.push(l.MOUSE_MOVE), l.DEVICE_MOVE = "deviceMove", l.logBlacklist.push(l.DEVICE_MOVE), l.CAMERA_UPDATE = "cameraUpdate", e.default = l
    },
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
    },
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
    },
    //-------------assuming threejs ------------//
    function (t, e) {
        var i;
        i = function () {
            return this
        }();
        try {
            i = i || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (i = window)
        }
        t.exports = i
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = i(18),
            s = n(a),
            h = i(0),
            c = n(h),
            u = function () {
                function t() {
                    r(this, t), this.width = t.calculateWidth(), this.height = t.calculateHeight(), this.ratio = this.width / this.height, this.bind()
                }

                return o(t, [{
                    key: "bind",
                    value: function () {
                        this.onResize = this.onResize.bind(this), window.addEventListener("resize", this.onResize)
                    }
                }, {
                    key: "onResize",
                    value: function () {
                        this.width = t.calculateWidth(), this.height = t.calculateHeight(), this.ratio = this.width / this.height, c.default.emit(c.default.RESIZE, this.width, this.height, this.ratio)
                    }
                }], [{
                    key: "calculateWidth",
                    value: function () {
                        return s.default.viewportW()
                    }
                }, {
                    key: "calculateHeight",
                    value: function () {
                        return s.default.viewportH()
                    }
                }]), t
            }();
        e.default = new u
    },
    function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            o = i(0),
            a = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(o),
            s = function () {
                function t() {
                    n(this, t), this.fps = void 0, this.time = window.performance.now(), this.start = this.start.bind(this), this.pause = this.pause.bind(this), this.onTick = this.onTick.bind(this), this.start(), this.bind(), window.requestAnimationFrame(this.onTick)
                }

                return r(t, [{
                    key: "bind",
                    value: function () {
                        a.default.on(a.default.VISIBILITY_HIDDEN, this.pause), a.default.on(a.default.VISIBILITY_VISIBLE, this.start)
                    }
                }, {
                    key: "start",
                    value: function () {
                        this.startTime = window.performance.now(), this.oldTime = this.startTime, this.isPaused = !1
                    }
                }, {
                    key: "pause",
                    value: function () {
                        this.isPaused = !0
                    }
                }, {
                    key: "onTick",
                    value: function (t) {
                        this.time = t, this.isPaused || (this.delta = (t - this.oldTime) / 1e3, this.oldTime = t, a.default.emit(a.default.RAF, this.delta, t)), window.requestAnimationFrame(this.onTick)
                    }
                }]), t
            }();
        e.default = new s
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function () {
                var t = {};
                try {
                    var e = document.createElement("canvas"),
                        i = e.getContext("webgl") || e.getContext("experimental-webgl"),
                        n = i.getExtension("WEBGL_debug_renderer_info");
                    return n && (t.vendor = i.getParameter(n.UNMASKED_VENDOR_WEBGL), t.card = i.getParameter(n.UNMASKED_RENDERER_WEBGL)), t.renderer = i.getParameter(i.RENDERER), t.version = i.getParameter(i.VERSION), t.glsl = i.getParameter(i.SHADING_LANGUAGE_VERSION), t.MAX_TEXTURE_SIZE = i.getParameter(i.MAX_TEXTURE_SIZE), t.MAX_TEXTURE_IMAGE_UNITS = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), t
                } catch (e) {
                    return t
                }
            }(),
            r = {
                postprocessing: !0,
                antialias: !0,
                gyroscope: !0,
                mouseTiltCamera: !0,
                shadow: !0,
                shadowSize: 2048,
                dpr: window.devicePixelRatio || 1,
                ratioScreen: 1,
                cameraBoarding: !0,
                objectBoarding: !0,
                debugStats: !1,
                logoDisplacement: !0
            };
        n.card && "mali-g71" === n.card.toLowerCase() && (r.logoDisplacement = !1), window.devicePixelRatio > 1 && (r.antialias = !1), r.dpr = Math.min(2, window.devicePixelRatio), window.Modernizr.tablet && (r.shadow = !1), window.Modernizr.mobile && (r.shadowSize = 512), window.Modernizr.android && (r.shadow = !1), e.default = r
    },
    function (t, e, i) {
        "use strict";
        var n = n || i(3);
        n.GPUParticleSystem = function (t) {
            var e = this;
            t = t || {}, e.PARTICLE_COUNT = t.maxParticles || 1e6, e.PARTICLE_CONTAINERS = t.containerCount || 1, e.PARTICLE_NOISE_TEXTURE = t.particleNoiseTex || null, e.PARTICLE_SPRITE_TEXTURE = t.particleSpriteTex || null, e.PARTICLES_PER_CONTAINER = Math.ceil(e.PARTICLE_COUNT / e.PARTICLE_CONTAINERS), e.PARTICLE_CURSOR = 0, e.time = 0;
            var i = {
                vertexShader: ["precision highp float;", "const vec4 bitSh = vec4(256. * 256. * 256., 256. * 256., 256., 1.);", "const vec4 bitMsk = vec4(0.,vec3(1./256.0));", "const vec4 bitShifts = vec4(1.) / bitSh;", "#define FLOAT_MAX\t1.70141184e38", "#define FLOAT_MIN\t1.17549435e-38", "lowp vec4 encode_float(highp float v) {", "highp float av = abs(v);", "//Handle special cases", "if(av < FLOAT_MIN) {", "return vec4(0.0, 0.0, 0.0, 0.0);", "} else if(v > FLOAT_MAX) {", "return vec4(127.0, 128.0, 0.0, 0.0) / 255.0;", "} else if(v < -FLOAT_MAX) {", "return vec4(255.0, 128.0, 0.0, 0.0) / 255.0;", "}", "highp vec4 c = vec4(0,0,0,0);", "//Compute exponent and mantissa", "highp float e = floor(log2(av));", "highp float m = av * pow(2.0, -e) - 1.0;", "c[1] = floor(128.0 * m);", "m -= c[1] / 128.0;", "c[2] = floor(32768.0 * m);", "m -= c[2] / 32768.0;", "c[3] = floor(8388608.0 * m);", "//Unpack exponent", "highp float ebias = e + 127.0;", "c[0] = floor(ebias / 2.0);", "ebias -= c[0] * 2.0;", "c[1] += floor(ebias) * 128.0;", "//Unpack sign bit", "c[0] += 128.0 * step(0.0, -v);", "//Scale back to range", "return c / 255.0;", "}", "vec4 pack(const in float depth)", "{", "const vec4 bit_shift = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);", "const vec4 bit_mask\t= vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);", "vec4 res = mod(depth*bit_shift*vec4(255), vec4(256))/vec4(255);", "res -= res.xxyz * bit_mask;", "return res;", "}", "float unpack(const in vec4 rgba_depth)", "{", "const vec4 bit_shift = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);", "float depth = dot(rgba_depth, bit_shift);", "return depth;", "}", "uniform float uTime;", "uniform float uScale;", "uniform sampler2D tNoise;", "attribute vec4 particlePositionsStartTime;", "attribute vec4 particleVelColSizeLife;", "attribute vec3 particleVelocity;", "attribute float particleTurbulence;", "varying vec4 vColor;", "varying float lifeLeft;", "void main() {", "// unpack things from our attributes", "vColor = encode_float( particleVelColSizeLife.y );", "// convert our velocity back into a value we can use", "vec3 velocity = particleVelocity;", "float turbulence = particleTurbulence;", "vec3 newPosition;", "float timeElapsed = uTime - particlePositionsStartTime.a;", "lifeLeft = 1. - (timeElapsed / particleVelColSizeLife.w);", "gl_PointSize = ( uScale * particleVelColSizeLife.z ) * lifeLeft;", "newPosition = particlePositionsStartTime.xyz + ( velocity * 10. ) * ( uTime - particlePositionsStartTime.a );", "vec3 noise = texture2D( tNoise, vec2( newPosition.x * .015 + (uTime * .05), newPosition.y * .02 + (uTime * .015) )).rgb;", "vec3 noiseVel = ( noise.rgb - .5 ) * 30.;", "newPosition = mix(newPosition, newPosition + vec3(noiseVel * ( turbulence * 5. ) ), (timeElapsed / particleVelColSizeLife.a) );", "if( velocity.y > 0. && velocity.y < .05 ) {", "lifeLeft = 0.;", "}", "if( velocity.x < -1.45 ) {", "lifeLeft = 0.;", "}", "if( timeElapsed > 0. ) {", "gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );", "} else {", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "lifeLeft = 0.;", "gl_PointSize = 0.;", "}", "}"].join("\n"),
                fragmentShader: ["float scaleLinear(float value, vec2 valueDomain) {", "return (value - valueDomain.x) / (valueDomain.y - valueDomain.x);", "}", "float scaleLinear(float value, vec2 valueDomain, vec2 valueRange) {", "return mix(valueRange.x, valueRange.y, scaleLinear(value, valueDomain));", "}", "varying vec4 vColor;", "varying float lifeLeft;", "uniform sampler2D tSprite;", "void main() {", "float alpha = 0.;", "if( lifeLeft > .995 ) {", "alpha = scaleLinear( lifeLeft, vec2(1., .995), vec2(0., 1.));//mix( 0., 1., ( lifeLeft - .95 ) * 100. ) * .75;", "} else {", "alpha = lifeLeft * .75;", "}", "vec4 tex = texture2D( tSprite, gl_PointCoord );", "gl_FragColor = vec4( vColor.rgb * tex.a, alpha * tex.a );", "}"].join("\n")
            };
            e.rand = [];
            for (var r = 1e5; r > 0; r--) e.rand.push(Math.random() - .5);
            e.random = function () {
                return ++r >= e.rand.length ? e.rand[r = 1] : e.rand[r]
            };
            var o = new n.TextureLoader;
            e.particleNoiseTex = e.PARTICLE_NOISE_TEXTURE || o.load("assets/3d/perlin-512.png"), e.particleNoiseTex.wrapS = e.particleNoiseTex.wrapT = n.RepeatWrapping, e.particleSpriteTex = e.PARTICLE_SPRITE_TEXTURE || o.load("assets/3d/particle.png"), e.particleSpriteTex.wrapS = e.particleSpriteTex.wrapT = n.RepeatWrapping, e.particleShaderMat = new n.ShaderMaterial({
                transparent: !0,
                depthWrite: !1,
                uniforms: {
                    uTime: {
                        value: 0
                    },
                    uScale: {
                        value: 1
                    },
                    tNoise: {
                        value: e.particleNoiseTex
                    },
                    tSprite: {
                        value: e.particleSpriteTex
                    }
                },
                blending: n.AdditiveBlending,
                vertexShader: i.vertexShader,
                fragmentShader: i.fragmentShader
            }), e.particleShaderMat.defaultAttributeValues.particlePositionsStartTime = [0, 0, 0, 0], e.particleShaderMat.defaultAttributeValues.particleVelColSizeLife = [0, 0, 0, 0], e.particleContainers = [], n.Object3D.apply(this, arguments), this.init = function () {
                for (var t = 0; t < e.PARTICLE_CONTAINERS; t++) {
                    var i = new n.GPUParticleContainer(e.PARTICLES_PER_CONTAINER, e);
                    e.particleContainers.push(i), e.add(i)
                }
            }, this.spawnParticle = function (t) {
                ++e.PARTICLE_CURSOR >= e.PARTICLE_COUNT && (e.PARTICLE_CURSOR = 1), e.particleContainers[Math.floor(e.PARTICLE_CURSOR / e.PARTICLES_PER_CONTAINER)].spawnParticle(t)
                ++e.PARTICLE_CURSOR >= e.PARTICLE_COUNT && (e.PARTICLE_CURSOR = 1), e.particleContainers[Math.floor(e.PARTICLE_CURSOR / e.PARTICLES_PER_CONTAINER)].spawnParticle(t)
            }, this.update = function (t) {
                for (var i = 0; i < e.PARTICLE_CONTAINERS; i++) e.particleContainers[i].update(t)
            }, this.init()
        }, n.GPUParticleSystem.prototype = Object.create(n.Object3D.prototype), n.GPUParticleSystem.prototype.constructor = n.GPUParticleSystem, n.GPUParticleContainer = function (t, e) {
            function i(t, e, i, n) {
                return a[0] = Math.floor(n), a[1] = Math.floor(i), a[2] = Math.floor(e), a[3] = Math.floor(t), s[0]
            }

            function r(t) {
                var e = t >> 16,
                    i = (65280 & t) >> 8,
                    n = 255 & t;
                return e > 0 && e--, i > 0 && i--, n > 0 && n--, [e, i, n]
            }

            var o = this;
            o.PARTICLE_COUNT = t || 1e5, o.PARTICLE_CURSOR = 0, o.time = 0, o.DPR = window.devicePixelRatio, o.GPUParticleSystem = e;
            Math.floor(o.PARTICLE_COUNT / o.MAX_ATTRIBUTES);
            n.Object3D.apply(this, arguments);
            var a = new Uint8Array(4),
                s = new Float32Array(a.buffer);
            o.particles = [], o.deadParticles = [], o.particlesAvailableSlot = [], o.particleUpdate = !1, o.particleShaderGeo = new n.BufferGeometry, o.particleVertices = new Float32Array(3 * o.PARTICLE_COUNT), o.particlePositionsStartTime = new Float32Array(4 * o.PARTICLE_COUNT), o.particleVelocity = new Float32Array(3 * o.PARTICLE_COUNT), o.particleTurbulence = new Float32Array(o.PARTICLE_COUNT), o.particleVelColSizeLife = new Float32Array(4 * o.PARTICLE_COUNT);
            for (var h = 0; h < o.PARTICLE_COUNT; h++) o.particlePositionsStartTime[4 * h + 0] = 100, o.particlePositionsStartTime[4 * h + 1] = 0, o.particlePositionsStartTime[4 * h + 2] = 0, o.particlePositionsStartTime[4 * h + 3] = 0, o.particleVertices[3 * h + 0] = 0, o.particleVertices[3 * h + 1] = 0, o.particleVertices[3 * h + 2] = 0, o.particleVelColSizeLife[4 * h + 0] = i(128, 128, 0, 0), o.particleVelColSizeLife[4 * h + 1] = i(0, 254, 0, 254), o.particleVelColSizeLife[4 * h + 2] = 1, o.particleVelColSizeLife[4 * h + 3] = 0;
            o.particleShaderGeo.addAttribute("position", new n.BufferAttribute(o.particleVertices, 3)), o.particleShaderGeo.addAttribute("particlePositionsStartTime", new n.BufferAttribute(o.particlePositionsStartTime, 4).setDynamic(!0)), o.particleShaderGeo.addAttribute("particleVelColSizeLife", new n.BufferAttribute(o.particleVelColSizeLife, 4).setDynamic(!0)), o.particleShaderGeo.addAttribute("particleVelocity", new n.BufferAttribute(o.particleVelocity, 3).setDynamic(!0)), o.particleShaderGeo.addAttribute("particleTurbulence", new n.BufferAttribute(o.particleTurbulence, 1).setDynamic(!0)), o.posStart = o.particleShaderGeo.getAttribute("particlePositionsStartTime"), o.velCol = o.particleShaderGeo.getAttribute("particleVelColSizeLife"), o.velocityAttr = o.particleShaderGeo.getAttribute("particleVelocity"), o.turbulenceAttr = o.particleShaderGeo.getAttribute("particleTurbulence"), o.particleShaderMat = o.GPUParticleSystem.particleShaderMat, this.init = function () {
                o.particleSystem = new n.Points(o.particleShaderGeo, o.particleShaderMat), o.particleSystem.frustumCulled = !1, this.add(o.particleSystem)
            };
            var h, c = new n.Vector3,
                u = new n.Vector3,
                l = 0,
                p = 0,
                f = 16777215,
                d = 0,
                m = .5,
                v = 0,
                g = 0,
                y = 0,
                _ = !1;
            this.offset = 0, this.count = 0, this.spawnParticle = function (t) {
                t = t || {}, c = void 0 !== t.position ? c.copy(t.position) : c.set(0, 0, 0), u = void 0 !== t.velocity ? u.copy(t.velocity) : u.set(0, 0, 0), l = void 0 !== t.positionRandomness ? t.positionRandomness : 0, p = void 0 !== t.velocityRandomness ? t.velocityRandomness : 0, f = void 0 !== t.color ? t.color : 16777215, d = void 0 !== t.colorRandomness ? t.colorRandomness : 1, m = void 0 !== t.turbulence ? t.turbulence : 1, v = void 0 !== t.lifetime ? t.lifetime : 5, g = void 0 !== t.size ? t.size : 10, y = void 0 !== t.sizeRandomness ? t.sizeRandomness : 0, _ = void 0 !== t.smoothPosition && t.smoothPosition, void 0 !== o.DPR && (g *= o.DPR), h = o.PARTICLE_CURSOR, o.posStart.array[4 * h + 0] = c.x + e.random() * l, o.posStart.array[4 * h + 1] = c.y + e.random() * l, o.posStart.array[4 * h + 2] = c.z + e.random() * l, o.posStart.array[4 * h + 3] = o.time + .02 * e.random(), !0 === _ && (o.posStart.array[4 * h + 0] += -u.x * e.random(), o.posStart.array[4 * h + 1] += -u.y * e.random(), o.posStart.array[4 * h + 2] += -u.z * e.random());
                var n = u.x + e.random() * p,
                    a = u.y + e.random() * p,
                    s = u.z + e.random() * p;
                o.turbulenceAttr.array[h] = m, o.velocityAttr.array[3 * h + 0] = n, o.velocityAttr.array[3 * h + 1] = a, o.velocityAttr.array[3 * h + 2] = s;
                for (var x = r(f), b = 0; b < x.length; b++) x[b] = Math.floor(x[b] + e.random() * d * 254), x[b] > 254 && (x[b] = 254), x[b] < 0 && (x[b] = 0);
                o.velCol.array[4 * h + 1] = i(x[0], x[1], x[2], 254), o.velCol.array[4 * h + 2] = g + e.random() * y, o.velCol.array[4 * h + 3] = v, 0 == this.offset && (this.offset = o.PARTICLE_CURSOR), o.count++, o.PARTICLE_CURSOR++, o.PARTICLE_CURSOR >= o.PARTICLE_COUNT && (o.PARTICLE_CURSOR = 0), o.particleUpdate = !0
            }, this.update = function (t) {
                o.time = t, o.particleShaderMat.uniforms.uTime.value = t, this.geometryUpdate()
            }, this.geometryUpdate = function () {
                1 == o.particleUpdate && (o.particleUpdate = !1, o.offset + o.count < o.PARTICLE_COUNT ? (o.posStart.updateRange.offset = o.velCol.updateRange.offset = 4 * o.offset, o.posStart.updateRange.count = o.velCol.updateRange.count = 4 * o.count) : (o.posStart.updateRange.offset = 0, o.posStart.updateRange.count = o.velCol.updateRange.count = 4 * o.PARTICLE_COUNT), o.posStart.needsUpdate = !0, o.velCol.needsUpdate = !0, o.velocityAttr.needsUpdate = !0, o.turbulenceAttr.needsUpdate = !0, o.offset = 0, o.count = 0)
            }, this.init()
        }, n.GPUParticleContainer.prototype = Object.create(n.Object3D.prototype), n.GPUParticleContainer.prototype.constructor = n.GPUParticleContainer, t.exports = n.GPUParticleSystem
    },
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
    },
    function (t, e, i) {
        t.exports = i(11)
    },
    function (t, e, i) {
        "use strict";
        (function (t) {
            function e(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            var n = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }();
            i(12), i(13), i(14);
            var r = i(16),
                o = function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(r);
            t.debug = !1, new (function () {
                function t() {
                    e(this, t), Promise.all([t.domReady()]).then(t.init)
                }

                return n(t, null, [{
                    key: "domReady",
                    value: function () {
                        return new Promise(function (t) {
                            document.addEventListener("DOMContentLoaded", t)
                        })
                    }
                }, {
                    key: "init",
                    value: function () {
                        new o.default;
                        t.show()
                    }
                }, {
                    key: "show",
                    value: function () {
                        document.documentElement.classList.add("ready")
                    }
                }]), t
            }())
        }).call(e, i(4))
    },
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
    },
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
    },
    function (t, e, i) {
        "use strict";
        i(15)()
    },
    function (t, e, i) {
        "use strict";

        function n(t, e) {
            return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E"
        }

        function r(t) {
            if (t.srcset && !g && window.picturefill) {
                var e = window.picturefill._;
                t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
                    reselect: !0
                }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, {
                    reselect: !0
                })), t.currentSrc = t[e.ns].curSrc || t.src
            }
        }

        function o(t) {
            for (var e, i = getComputedStyle(t).fontFamily, n = {}; null !== (e = p.exec(i));) n[e[1]] = e[2];
            return n
        }

        function a(t, e, i) {
            var r = n(e || 1, i || 0);
            y.call(t, "src") !== r && _.call(t, "src", r)
        }

        function s(t, e) {
            t.naturalWidth ? e(t) : setTimeout(s, 100, t, e)
        }

        function h(t) {
            var e = o(t),
                i = t[l];
            if (e["object-fit"] = e["object-fit"] || "fill", !i.img) {
                if ("fill" === e["object-fit"]) return;
                if (!i.skipTest && d && !e["object-position"]) return
            }
            if (!i.img) {
                i.img = new Image(t.width, t.height), i.img.srcset = y.call(t, "data-ofi-srcset") || t.srcset, i.img.src = y.call(t, "data-ofi-src") || t.src, _.call(t, "data-ofi-src", t.src), t.srcset && _.call(t, "data-ofi-srcset", t.srcset), a(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = "");
                try {
                    c(t)
                } catch (t) {
                    window.console
                }
            }
            r(i.img), t.style.backgroundImage = 'url("' + (i.img.currentSrc || i.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = e["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(e["object-fit"]) ? s(i.img, function () {
                i.img.naturalWidth > t.width || i.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto"
            }) : t.style.backgroundSize = e["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), s(i.img, function (e) {
                a(t, e.naturalWidth, e.naturalHeight)
            })
        }

        function c(t) {
            var e = {
                get: function (e) {
                    return t[l].img[e || "src"]
                },
                set: function (e, i) {
                    return t[l].img[i || "src"] = e, _.call(t, "data-ofi-" + i, e), h(t), e
                }
            };
            Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", {
                get: function () {
                    return e.get("currentSrc")
                }
            }), Object.defineProperty(t, "srcset", {
                get: function () {
                    return e.get("srcset")
                },
                set: function (t) {
                    return e.set(t, "srcset")
                }
            })
        }

        function u(t, e) {
            var i = !x && !t;
            if (e = e || {}, t = t || "img", m && !e.skipTest || !v) return !1;
            "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]);
            for (var n = 0; n < t.length; n++) t[n][l] = t[n][l] || {
                skipTest: e.skipTest
            }, h(t[n]);
            i && (document.body.addEventListener("load", function (t) {
                "IMG" === t.target.tagName && u(t.target, {
                    skipTest: e.skipTest
                })
            }, !0), x = !0, t = "img"), e.watchMQ && window.addEventListener("resize", u.bind(null, t, {
                skipTest: e.skipTest
            }))
        }

        /*! npm.im/object-fit-images 3.2.3 */
        var l = "bfred-it:object-fit-images",
            p = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
            f = "undefined" == typeof Image ? {
                style: {
                    "object-position": 1
                }
            } : new Image,
            d = "object-fit" in f.style,
            m = "object-position" in f.style,
            v = "background-size" in f.style,
            g = "string" == typeof f.currentSrc,
            y = f.getAttribute,
            _ = f.setAttribute,
            x = !1;
        u.supportsObjectFit = d, u.supportsObjectPosition = m,
            function () {
                function t(t, e) {
                    return t[l] && t[l].img && ("src" === e || "srcset" === e) ? t[l].img : t
                }

                m || (HTMLImageElement.prototype.getAttribute = function (e) {
                    return y.call(t(this, e), e)
                }, HTMLImageElement.prototype.setAttribute = function (e, i) {
                    return _.call(t(this, e), e, String(i))
                })
            }(), t.exports = u
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = i(6),
            s = (n(a), i(5)),
            h = (n(s), i(19)),
            c = (n(h), i(1)),
            u = i(0),
            l = n(u),
            p = i(25),
            f = n(p),
            d = i(26),
            m = n(d),
            v = i(43),
            g = n(v),
            y = i(53),
            _ = n(y),
            x = i(54),
            b = n(x),
            w = i(55),
            M = n(w),
            T = i(59),
            S = n(T),
            A = i(60),
            P = n(A),
            E = function () {
                function t() {
                    r(this, t), this.$refs = {
                        loader: (0, c.qs)(".loader"),
                        ui: (0, c.qs)(".ui"),
                        pagination: (0, c.qs)(".pagination")
                    }, this.ready = this.ready.bind(this), this.init()
                }

                return o(t, [{
                    key: "init",
                    value: function () {
                        var t = this;
                        f.default && !window.location.href.match(/fallback/) ? (l.default.on(l.default.WORLD_READY, this.ready), this.home = new b.default((0, c.qs)('[data-panel="home"]')), this.world = new m.default, this.sound = new M.default((0, c.qs)('[data-component="sound"]'))) : (window.EVS_FALLBACK = !0, document.documentElement.classList.add("is-fallback"), this.fallback = new P.default((0, c.qs)('[data-component="canvas"]')), this.fallback.init().then(function () {
                            t.home = new b.default((0, c.qs)('[data-panel="home"]')), l.default.emit(l.default.HOME_READY), t.ready()
                        }))
                    }
                }, {
                    key: "ready",
                    value: function () {
                        this.panels = new g.default((0, c.qs)('[data-component="panel"]')), this.ui = new _.default((0, c.qs)('[data-component="ui"]')), this.form = new S.default((0, c.qs)('[data-component="form"]')), this.show()
                    }
                }, {
                    key: "show",
                    value: function () {
                        this.$refs.loader.remove(), this.ui.show()
                    }
                }]), t
            }();
        e.default = E
    },
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
    },
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
    },
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
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = i(1),
            s = function () {
                function t() {
                    r(this, t), this.supportsWebShare = Boolean(navigator.share), this.$refs = {
                        items: [].concat(n((0, a.qsa)("[data-share]")))
                    }, this.init()
                }

                return o(t, [{
                    key: "init",
                    value: function () {
                        this.bind()
                    }
                }, {
                    key: "bind",
                    value: function () {
                        this.$refs.items.forEach(function (e) {
                            (0, a.$on)(e, "click", t.onClick)
                        })
                    }
                }], [{
                    key: "onClick",
                    value: function (e) {
                        e.preventDefault(), t[e.currentTarget.dataset.share]()
                    }
                }, {
                    key: "facebook",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href,
                            i = t.e(e),
                            n = "https://www.facebook.com/sharer.php?u=" + i;
                        return t.openPopup(n, "Share on facebook", 575, 300)
                    }
                }, {
                    key: "twitter",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href,
                            i = t.e("Happy New Year! Are you ready to immerse yourself with EVS into 2018?"),
                            n = t.e(e),
                            r = "https://twitter.com/intent/tweet?url=" + n + "&text=" + i;
                        return t.openPopup(r, "Share on Twitter", 550, 255)
                    }
                }, {
                    key: "linkedin",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href,
                            i = t.e(e),
                            n = "https://www.linkedin.com/shareArticle?mini=true&url=" + i;
                        return t.openPopup(n, "Share on Linkedin", 550, 255)
                    }
                }, {
                    key: "e",
                    value: function (t) {
                        return encodeURIComponent(t)
                    }
                }, {
                    key: "openPopup",
                    value: function (t, e, i, n) {
                        var r = (window.screen.width - i) / 2,
                            o = (window.screen.height - n) / 2;
                        return window.open(t, e, "status=no,resizable=yes,height=" + n + ",width=" + i + ",top=" + o + ",left=" + r + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no")
                    }
                }]), t
            }();
        e.default = new s
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(t, e, i, n) {
            return t && (e || i) ? "hybrid" : t && Object.keys(n.detectHover).filter(function (t) {
                return "update" !== t
            }).every(function (t) {
                return !1 === n.detectHover[t]
            }) && Object.keys(n.detectPointer).filter(function (t) {
                return "update" !== t
            }).every(function (t) {
                return !1 === n.detectPointer[t]
            }) ? window.navigator && /android/.test(window.navigator.userAgent.toLowerCase()) ? "touchOnly" : "hybrid" : t ? "touchOnly" : "mouseOnly"
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(21),
            a = n(o),
            s = i(22),
            h = n(s),
            c = i(23),
            u = n(c),
            l = i(24),
            p = n(l),
            f = {
                state: {
                    detectHover: a.default,
                    detectPointer: h.default,
                    detectTouchEvents: u.default,
                    detectPassiveEvents: p.default
                },
                update: function () {
                    f.state.detectHover.update(), f.state.detectPointer.update(), f.state.detectTouchEvents.update(), f.state.detectPassiveEvents.update(), f.updateOnlyOwnProperties()
                },
                updateOnlyOwnProperties: function () {
                    if ("undefined" != typeof window) {
                        f.passiveEvents = f.state.detectPassiveEvents.hasSupport || !1, f.hasTouch = f.state.detectTouchEvents.hasSupport || !1, f.deviceType = r(f.hasTouch, f.state.detectHover.anyHover, f.state.detectPointer.anyFine, f.state), f.hasMouse = "touchOnly" !== f.deviceType, f.primaryInput = "mouseOnly" === f.deviceType && "mouse" || "touchOnly" === f.deviceType && "touch" || f.state.detectHover.hover && "mouse" || f.state.detectHover.none && "touch" || "mouse";
                        /windows/.test(window.navigator.userAgent.toLowerCase()) && /chrome/.test(window.navigator.userAgent.toLowerCase()) && function (t) {
                            return t >= 59 && t < 62
                        }(parseInt(/Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1], 10)) && f.hasTouch && (f.deviceType = "hybrid", f.hasMouse = !0, f.primaryInput = "mouse")
                    }
                }
            };
        f.updateOnlyOwnProperties(), e.default = f
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = {
            update: function () {
                "undefined" != typeof window && "function" == typeof window.matchMedia && (n.hover = window.matchMedia("(hover: hover)").matches, n.none = window.matchMedia("(hover: none)").matches || window.matchMedia("(hover: on-demand)").matches, n.anyHover = window.matchMedia("(any-hover: hover)").matches, n.anyNone = window.matchMedia("(any-hover: none)").matches || window.matchMedia("(any-hover: on-demand)").matches)
            }
        };
        n.update(), e.default = n
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = {
            update: function () {
                "undefined" != typeof window && "function" == typeof window.matchMedia && (n.fine = window.matchMedia("(pointer: fine)").matches, n.coarse = window.matchMedia("(pointer: coarse)").matches, n.none = window.matchMedia("(pointer: none)").matches, n.anyFine = window.matchMedia("(any-pointer: fine)").matches, n.anyCoarse = window.matchMedia("(any-pointer: coarse)").matches, n.anyNone = window.matchMedia("(any-pointer: none)").matches)
            }
        };
        n.update(), e.default = n
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = {
            update: function () {
                "undefined" != typeof window && (n.hasSupport = "ontouchstart" in window, n.browserSupportsApi = Boolean(window.TouchEvent))
            }
        };
        n.update(), e.default = n
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = {
            update: function () {
                if ("undefined" != typeof window && "function" == typeof window.addEventListener) {
                    var t = !1,
                        e = Object.defineProperty({}, "passive", {
                            get: function () {
                                t = !0
                            }
                        }),
                        i = function () {
                        };
                    window.addEventListener("testPassiveEventSupport", i, e), window.removeEventListener("testPassiveEventSupport", i, e), n.hasSupport = t
                }
            }
        };
        n.update(), e.default = n
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function () {
            try {
                var t = document.createElement("canvas"),
                    e = t.getContext("webgl") || t.getContext("experimental-webgl");
                return Boolean(window.WebGLRenderingContext) && e && e.getExtension("OES_texture_float") && 0 !== e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
            } catch (t) {
                return !1
            }
        }();
        e.default = n
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = i(3),
            s = i(2),
            h = i(6),
            c = (n(h), i(5)),
            u = n(c),
            l = i(0),
            p = n(l),
            f = i(27),
            d = n(f),
            m = i(28),
            v = n(m),
            g = i(29),
            y = n(g),
            _ = i(38),
            x = n(_),
            b = i(39),
            w = n(b),
            M = i(40),
            T = n(M),
            S = function () {
                function t() {
                    r(this, t), this.width = u.default.width, this.height = u.default.height, this.hasIllus = !1, this.update = this.update.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceMove = this.onDeviceMove.bind(this), this.init(), this.bind()
                }

                return o(t, [{
                    key: "init",
                    value: function () {
                        var t = this;
                        this.renderer = new d.default, this.camera = new v.default, this.cameraGroup = new a.Object3D, this.scene = new a.Scene, this.cameraGroup.add(this.camera), this.scene.add(this.cameraGroup), this.illus = new y.default(this.renderer, this.camera, this.scene), this.circle = new x.default(this.renderer, this.camera, this.scene), this.particles = new w.default(this.renderer, this.camera, this.scene), this.background = new T.default(this.renderer, this.camera, this.scene), Promise.all([this.circle.init(), this.particles.init(), this.background.init()]).then(function () {
                            return t.render(), p.default.emit(p.default.HOME_READY), t.illus.init()
                        }).then(this.ready.bind(this))
                    }
                }, {
                    key: "bind",
                    value: function () {
                        p.default.on(p.default.MOUSE_MOVE, this.onMouseMove), p.default.on(p.default.DEVICE_MOVE, this.onDeviceMove)
                    }
                }, {
                    key: "ready",
                    value: function () {
                        p.default.emit(p.default.WORLD_READY), this.hasIllus = !0
                    }
                }, {
                    key: "render",
                    value: function () {
                        this.update()
                    }
                }, {
                    key: "update",
                    value: function (t) {
                        requestAnimationFrame(this.update);
                        var e = (t - (this.last || t)) / 1e3,
                            i = Math.round(1 / e);
                        this.last = t, this.hasIllus && this.illus.update(), this.background.update(), this.circle.update(), this.particles.update(t, i), this.renderer.render(this.scene, this.camera)
                    }
                }, {
                    key: "onMouseMove",
                    value: function (t, e) {
                        this.move(.75 * e, .75 * t)
                    }
                }, {
                    key: "onDeviceMove",
                    value: function (t, e) {
                        this.move(.25 * e, .25 * t)
                    }
                }, {
                    key: "move",
                    value: function (t, e) {
                        s.TweenLite.to(this.cameraGroup.rotation, 2, {
                            x: t,
                            y: e,
                            ease: s.Power2.easeOut
                        })
                    }
                }]), t
            }();
        e.default = S
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            h = i(3),
            c = i(5),
            u = n(c),
            l = i(0),
            p = n(l),
            f = i(1),
            d = function (t) {
                function e() {
                    r(this, e);
                    var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                        antialias: window.devicePixelRatio <= 1,
                        alpha: !0
                    }));
                    return (0, f.qs)(".canvas").appendChild(t.domElement), t.setSize(u.default.width, u.default.height), t.setPixelRatio(window.devicePixelRatio), t.setClearColor(0, 1), t.autoClear = !1, t.onResize = t.onResize.bind(t), t.bind(), t
                }

                return a(e, t), s(e, [{
                    key: "bind",
                    value: function () {
                        p.default.on(p.default.RESIZE, this.onResize)
                    }
                }, {
                    key: "onResize",
                    value: function (t, e) {
                        this.setSize(t, e)
                    }
                }]), e
            }(h.WebGLRenderer);
        e.default = d
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            h = i(3),
            c = i(5),
            u = n(c),
            l = i(0),
            p = n(l),
            f = function (t) {
                function e() {
                    r(this, e);
                    var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, 60, u.default.ratio, .1, 2e3));
                    return t.lookAt(new h.Vector3), t.position.x = 0, t.position.y = 0, t.position.z = 1, t.onResize = t.onResize.bind(t), t.bind(), t
                }

                return a(e, t), s(e, [{
                    key: "bind",
                    value: function () {
                        p.default.on(p.default.RESIZE, this.onResize)
                    }
                }, {
                    key: "onResize",
                    value: function (t, e, i) {
                        this.aspect = i, this.updateProjectionMatrix(), p.default.emit(p.default.CAMERA_UPDATE)
                    }
                }]), e
            }(h.PerspectiveCamera);
        e.default = f
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
            return Array.from(t)
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            s = i(3),
            h = i(2),
            c = i(0),
            u = n(c),
            l = i(7),
            p = n(l),
            f = i(30),
            d = i(33),
            m = n(d),
            v = i(34),
            g = i(35),
            y = i(36),
            _ = i(37),
            x = function () {
                function t(e, i, n) {
                    o(this, t), this.renderer = e, this.camera = i, this.scene = n, this.time = 0, this.textureWidth = 256, this.textureHeight = 256, this.isAnimating = !1, this.data = {
                        brain: {
                            camera: [0, 0, 2],
                            color: .5,
                            position: [.5, 0, 0]
                        },
                        gloves: {
                            camera: [.5, 0, 1],
                            color: .95,
                            position: [-.25, 0, 0]
                        },
                        stadium: {
                            camera: [-.75, .8, .8],
                            color: 0,
                            position: [.15, -.15, .15]
                        },
                        lsm: {
                            camera: [1.5, .8, 1],
                            color: .85,
                            position: [-.5, 0, 0]
                        }
                    }, this.mousePos = new s.Vector2(0, 0), this.targetMousePos = new s.Vector2(0, 0), this.impactVector = new s.Vector3(0, 0, 0), this.targetImpact = new s.Vector3(0, 0, 0), this.impactFollowSpeed = .1, this.colliderMaterial = new s.MeshPhongMaterial({
                        color: 16711680,
                        transparent: !0,
                        depthWrite: !1,
                        opacity: 0
                    }), this.cameraTarget = new s.Vector3, this.update = this.update.bind(this), this.onChange = this.onChange.bind(this), this.mouseMove = this.mouseMove.bind(this)
                }

                return a(t, [{
                    key: "init",
                    value: function () {
                        return Promise.all([this.loadTextures(), this.loadColliders()]).then(this.afterInit.bind(this))
                    }
                }, {
                    key: "loadTextures",
                    value: function () {
                        var t = this;
                        return Promise.all(Object.keys(this.data).map(function (e) {
                            return t.loadTexture(e)
                        })).then(function (e) {
                            e.forEach(function (e) {
                                t.data[e.name].texture = e.texture
                            })
                        })
                    }
                }, {
                    key: "loadTexture",
                    value: function (e) {
                        var i = this;
                        return fetch("assets/data/" + e + "_pos.json").then(function (t) {
                            return t.json()
                        }).then(function (n) {
                            return {
                                texture: t.createTexture(n.positions, i.textureWidth, i.textureHeight, e, 1),
                                name: e
                            }
                        })
                    }
                }, {
                    key: "loadColliders",
                    value: function () {
                        var e = this;
                        return Promise.all(Object.keys(this.data).map(function (e) {
                            return t.loadCollider(e)
                        })).then(function (t) {
                            t.forEach(function (t) {
                                var i = t.name,
                                    n = new s.Mesh(t.geometry, e.colliderMaterial);
                                n.visible = !1, n.name = i, n.position.z = .01, e.scene.add(n), e.data[i].collider = n
                            })
                        })
                    }
                }, {
                    key: "afterInit",
                    value: function () {
                        var e;
                        this.data.home = {
                            camera: [0, 0, 1],
                            collider: null,
                            color: .5,
                            position: [0, 0, 0],
                            texture: t.createTexture([], this.textureWidth, this.textureHeight, "home", 1)
                        }, this.data.end = {
                            camera: [0, 0, 1],
                            collider: null,
                            color: .5,
                            position: [0, 0, 0],
                            texture: t.createTexture([], this.textureWidth, this.textureHeight, "home", 1)
                        }, this.currentName = "home", (e = this.camera.position).set.apply(e, r(this.data[this.currentName].camera)), this.simulationShader = new s.ShaderMaterial({
                            uniforms: {
                                tFrom: {
                                    value: this.data[this.currentName].texture
                                },
                                tTo: {
                                    value: this.data[this.currentName].texture
                                },
                                tMorph: {
                                    value: 0
                                },
                                timer: {
                                    value: 0
                                },
                                mousePosition: {
                                    value: this.mousePos
                                },
                                impactPosition: {
                                    value: this.impactVector
                                }
                            },
                            vertexShader: y,
                            fragmentShader: _
                        }), this.fbo = new m.default(this.textureWidth, this.renderer, this.simulationShader);
                        for (var i = new s.Geometry, n = 0, o = this.textureWidth * this.textureHeight; n < o; n++) {
                            var a = new s.Vector3;
                            a.x = n % this.textureWidth / this.textureWidth, a.y = Math.floor(n / this.textureWidth) / this.textureHeight, i.vertices.push(a)
                        }
                        this.renderShader = new s.ShaderMaterial({
                            uniforms: {
                                map: {
                                    value: this.fbo.rtt.texture
                                },
                                width: {
                                    value: this.textureWidth
                                },
                                height: {
                                    value: this.textureHeight
                                },
                                pointSize: {
                                    value: 1
                                },
                                effector: {
                                    value: 0
                                },
                                density: {
                                    value: p.default.dpr
                                },
                                timer: {
                                    value: 0
                                },
                                tMorph: {
                                    value: 0
                                },
                                color: {
                                    value: 0
                                },
                                texture: {
                                    value: (new s.TextureLoader).load("assets/3d/particle.png", function (t) {
                                        t.wrapS = s.RepeatWrapping, t.wrapT = s.RepeatWrapping
                                    })
                                }
                            },
                            vertexShader: v,
                            fragmentShader: g,
                            depthTest: !0,
                            transparent: !0
                        }), this.mesh = new s.Points(i, this.renderShader), this.scene.add(this.mesh), this.raycaster = new s.Raycaster, this.mouseV2 = new s.Vector2, this.currentCollider = this.data[this.currentName].collider, this.bind()
                    }
                }, {
                    key: "bind",
                    value: function () {
                        var t = this;
                        u.default.on(u.default.MOUSE_MOVE, this.mouseMove), u.default.on(u.default.PANEL_CHANGE, this.onChange), (0, f.register)("m", {
                            match: function () {
                                t.updateMeshPosition(1, t.currentName)
                            },
                            unmatch: function () {
                                t.updateMeshPosition(1, t.currentName)
                            }
                        })
                    }
                }, {
                    key: "getMeshPosition",
                    value: function (t, e) {
                        return (0, f.isMoreThan)("m") ? this.data[t].position[e] : [0, -.25, 0][e]
                    }
                }, {
                    key: "updateMeshPosition",
                    value: function (t, e) {
                        var i = this;
                        h.TweenMax.to([this.cameraTarget], t, {
                            x: this.getMeshPosition(e, 0),
                            y: this.getMeshPosition(e, 1),
                            z: this.getMeshPosition(e, 2),
                            ease: h.Back.easeOut,
                            onUpdate: function () {
                                i.camera.lookAt(i.cameraTarget)
                            }
                        })
                    }
                }, {
                    key: "onChange",
                    value: function (t, e, i, n) {
                        var o = this;
                        if (!this.isAnimating) {
                            this.isAnimating = !0, this.currentCollider && (this.currentCollider.visible = !1), this.currentCollider = this.data[n].collider, this.currentCollider && (this.currentCollider.visible = !0), this.simulationShader.uniforms.tFrom.value = this.data[i].texture, this.simulationShader.uniforms.tTo.value = this.data[n].texture, this.simulationShader.uniforms.tMorph.value = 0, this.renderShader.uniforms.tMorph.value = 0;
                            new h.TimelineLite({
                                onComplete: function () {
                                    var t;
                                    (t = o.camera.position).set.apply(t, r(o.data[n].camera)), u.default.emit(u.default.PANEL_END), o.isAnimating = !1, o.currentName = n
                                }
                            }).add("start").to([this.simulationShader.uniforms.tMorph, this.renderShader.uniforms.tMorph], 6, {
                                value: 1,
                                ease: h.Linear.easeNone
                            }, "start").to(this.camera.position, 6, {
                                x: this.data[n].camera[0],
                                y: this.data[n].camera[1],
                                z: this.data[n].camera[2],
                                ease: h.Back.easeOut
                            }, "start").to(this.renderShader.uniforms.color, 6, {
                                value: this.data[n].color,
                                ease: h.Power4.easeInOut
                            }, "start"), this.updateMeshPosition(6, n)
                        }
                    }
                }, {
                    key: "mouseMove",
                    value: function (t, e) {
                        this.targetMousePos.x = t, this.targetMousePos.y = -e, this.mouseV2.x = 2 * t, this.mouseV2.y = 2 * -e, this.currentCollider && (this.impactFollowSpeed = .1, this.raycaster.setFromCamera(this.mouseV2, this.camera), this.intersects = this.raycaster.intersectObjects([this.currentCollider]), this.intersects.length ? (this.targetImpact.x = this.intersects[0].point.x, this.targetImpact.y = this.intersects[0].point.y, this.targetImpact.z = this.intersects[0].point.z) : (this.targetImpact.z = 1, this.impactFollowSpeed = .01))
                    }
                }, {
                    key: "update",
                    value: function () {
                        this.time += 1, this.simulationShader.uniforms.timer.value = this.time, this.renderShader.uniforms.timer.value = this.time, this.mousePos.x += .1 * (this.targetMousePos.x - this.mousePos.x), this.mousePos.y += .1 * (this.targetMousePos.y - this.mousePos.y), this.simulationShader.uniforms.mousePosition.value = this.mousePos, this.impactVector.x += (this.targetImpact.x - this.impactVector.x) * this.impactFollowSpeed, this.impactVector.y += (this.targetImpact.y - this.impactVector.y) * this.impactFollowSpeed, this.impactVector.z += (this.targetImpact.z - this.impactVector.z) * this.impactFollowSpeed, this.simulationShader.uniforms.impactPosition.value = this.impactVector, this.fbo.update()
                    }
                }], [{
                    key: "loadCollider",
                    value: function (t) {
                        return new Promise(function (e) {
                            (new s.BufferGeometryLoader).load("assets/data/" + t + "_low.json", function (i) {
                                e({
                                    geometry: i,
                                    name: t
                                })
                            })
                        })
                    }
                }, {
                    key: "createTexture",
                    value: function (e, i, n, r) {
                        var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                            a = t.getTextureData(e, i, n, o),
                            h = new s.DataTexture(a, i, n, s.RGBFormat, s.FloatType);
                        return h.minFilter = s.NearestFilter, h.magFilter = s.NearestFilter, h.name = r, h.needsUpdate = !0, h
                    }
                }, {
                    key: "getTextureData",
                    value: function (t, e, i, n) {
                        for (var r = e * i * 3, o = t.length, a = new Float32Array(r), s = 0; s < r; s++) a[s] = s < o ? t[s] * n : 0;
                        return a
                    }
                }]), t
            }();
        e.default = x
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            var e = void 0,
                i = void 0,
                n = void 0;
            n = "screen and (min-width:" + h[t] + ")";
            for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
            "string" == typeof o[0] ? (e = o[0], i = o[1], n += " and (max-width:" + u(h[e]) + ")") : (e = !1, i = o), s.register(n, i)
        }

        function r(t, e) {
            var i = void 0,
                n = void 0;
            n = "screen and (min-width:" + h[t] + ")", "string" == typeof(arguments.length <= 2 ? void 0 : arguments[2]) ? (i = arguments.length <= 2 ? void 0 : arguments[2], n += " and (max-width:" + u(h[i]) + ")") : i = !1, s.unregister(n, e)
        }

        function o(t) {
            var e = parseInt(h[t], 10);
            return window.innerWidth >= e
        }

        function a(t) {
            var e = parseInt(h[t], 10);
            return window.innerWidth < e
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.register = n, e.unregister = r, e.isMoreThan = o, e.isLessThan = a;
        var s = i(31),
            h = i(32),
            c = function (t) {
                var e = parseInt(t.replace("px", ""), 10);
                return Math.round(e / 16) + "em"
            },
            u = function (t) {
                var e = c(t),
                    i = e.replace("em", "");
                return parseInt(i, 10) - .01 + "em"
            }
    },
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
    },
    function (t, e) {
        t.exports = {
            xxxs: "240px",
            xxs: "320px",
            xs: "400px",
            s: "600px",
            nav: "768px",
            m: "768px",
            l: "1024px",
            xl: "1280px",
            xxl: "1440px",
            xxxl: "1600px"
        }
    },
    function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            o = i(3),
            a = function () {
                function t(e, i, r) {
                    n(this, t);
                    var a = i.getContext();
                    if (!a.getExtension("OES_texture_float")) throw new Error("float textures not supported");
                    if (0 === a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)) throw new Error("vertex shader cannot read textures");
                    this.scene = new o.Scene, this.orthoCamera = new o.OrthographicCamera(-e / 2, e / 2, e / 2, -e / 2, -1e6, 1e6), this.orthoCamera.position.z = 100, this.scene.add(this.orthoCamera), this.rtt = new o.WebGLRenderTarget(e, e, {
                        wrapS: o.RepeatWrapping,
                        wrapT: o.RepeatWrapping,
                        minFilter: o.NearestFilter,
                        magFilter: o.NearestFilter,
                        format: o.RGBAFormat,
                        type: "desktop" === Detectizr.device.type ? o.FloatType : o.HalfFloatType,
                        stencilBuffer: !1
                    });
                    var s = new o.PlaneBufferGeometry(e, e),
                        h = new o.Mesh(s, r);
                    h.position.z = -5e3, this.scene.add(h), this.renderer = i
                }

                return r(t, [{
                    key: "update",
                    value: function () {
                        this.renderer.render(this.scene, this.orthoCamera, this.rtt, !1)
                    }
                }]), t
            }();
        e.default = a
    },
    function (t, e) {
        t.exports = "#define GLSLIFY 1\nuniform sampler2D map;\nuniform float timer;\nuniform float tMorph;\nuniform float width;\nuniform float height;\nuniform float color;\nuniform float pointSize;\nuniform float density;\n\n\n// varying vec2 vUv;\nvarying vec3 vPos;\n// varying float vColor;\nvarying float vPointSize;\n\n\n// Pseudo random number generator\nfloat rand(vec2 co) {\n  return fract(sin(dot(co.xy ,vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n  return mod289(((x * 34.0) + 1.0) * x);\n}\n\nfloat noise(vec2 v) {\n  const vec4 C = vec4(0.211324865405187, // (3.0-sqrt(3.0)) / 6.0\n                      0.366025403784439, // 0.5 * (sqrt(3.0) - 1.0)\n                     -0.577350269189626, // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n  // First corner\n  vec2 i = floor(v + dot(v, C.yy));\n  vec2 x0 = v - i + dot(i, C.xx);\n\n  // Other corners\n  vec2 i1;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n  // Permutations\n  i = mod289(i); // Avoid truncation effects in permutation\n  vec3 p = permute(permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n  // Gradients: 41 points uniformly over a line, mapped onto a diamond.\n  // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n  // Normalise gradients implicitly by scaling m\n  // Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);\n\n  // Compute final noise value at P\n  vec3 g;\n  g.x = a0.x * x0.x + h.x * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n\n  return 130.0 * dot(m, g);\n}\n\nvec3 curl(float x, float y, float z, float timer) {\n  float eps = 1.0, eps2 = 2.0 * eps;\n  float n1, n2, a, b;\n\n  x += timer * 0.05;\n  y += timer * 0.05;\n  z += timer * 0.05;\n\n  vec3 curl = vec3(0.);\n\n  n1 = noise(vec2(x, y + eps));\n  n2 = noise(vec2(x, y - eps));\n  a = (n1 - n2) / eps2;\n\n  n1 = noise(vec2(x, z + eps));\n  n2 = noise(vec2(x, z - eps));\n  b = (n1 - n2) / eps2;\n\n  curl.x = a - b;\n\n  n1 = noise(vec2(y, z + eps));\n  n2 = noise(vec2(y, z - eps));\n  a = (n1 - n2) / eps2;\n\n  n1 = noise(vec2(x + eps, z));\n  n2 = noise(vec2(x + eps, z));\n  b = (n1 - n2) / eps2;\n\n  curl.y = a - b;\n\n  n1 = noise(vec2(x + eps, y));\n  n2 = noise(vec2(x - eps, y));\n  a = (n1 - n2) / eps2;\n\n  n1 = noise(vec2(y + eps, z));\n  n2 = noise(vec2(y - eps, z));\n  b = (n1 - n2) / eps2;\n\n  curl.z = a - b;\n\n  return curl;\n}\n\nvoid main() {\n  vec3 position = texture2D(map, position.xy).xyz;\n  vPos = position;\n  vPointSize = 0.0 +  abs(curl (position.x, position.y, position.z, timer * 0.05).z * 2.0);\n  vPointSize *= (1.0 - sin(tMorph * 3.14));\n  gl_PointSize = vPointSize * density;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n}\n"
    },
    function (t, e) {
        t.exports = "#define GLSLIFY 1\nuniform sampler2D map;\nuniform sampler2D texture;\nuniform float tMorph;\nuniform float effector;\nuniform float color;\n\n// varying vec2 vUv;\nvarying vec3 vPos;\nvarying float vColor;\nvarying float vPointSize;\n\nfloat hue2rgb(float f1, float f2, float hue) {\n  if (hue < 0.0) {\n    hue += 1.0;\n  } else if (hue > 1.0) {\n    hue -= 1.0;\n  }\n\n  float res;\n  if ((6.0 * hue) < 1.0) {\n    res = f1 + (f2 - f1) * 6.0 * hue;\n  } else if ((2.0 * hue) < 1.0) {\n    res = f2;\n  } else if ((3.0 * hue) < 2.0) {\n    res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;\n  } else {\n    res = f1;\n  }\n\n  return res;\n}\n\nvec3 hsl2rgb(vec3 hsl) {\n  vec3 rgb;\n\n  if (hsl.y == 0.0) {\n    rgb = vec3(hsl.z); // Luminance\n  } else {\n    float f2;\n\n    if (hsl.z < 0.5) {\n        f2 = hsl.z * (1.0 + hsl.y);\n    } else {\n        f2 = hsl.z + hsl.y - hsl.y * hsl.z;\n    }\n\n    float f1 = 2.0 * hsl.z - f2;\n\n    rgb.r = hue2rgb(f1, f2, hsl.x + (1.0/3.0));\n    rgb.g = hue2rgb(f1, f2, hsl.x);\n    rgb.b = hue2rgb(f1, f2, hsl.x - (1.0/3.0));\n  }\n\n  return rgb;\n}\n\nvec3 hsl2rgb(float h, float s, float l) {\n  return hsl2rgb(vec3(h, s, l));\n}\n\nvoid main() {\n  // In this step, it is certainly also possible to allocate any constant color.\n  // Instead, each particle gets an individual color, which results from its position in space\n  // float depth = smoothstep(750.0, -500.0, gl_FragCoord.z / gl_FragCoord.w);\n  // gl_FragColor = vec4(texture2D(map, vUv).xyz, depth);\n  // gl_FragColor = vec4(1.0, 0.2, 0.5, depth);\n  // gl_FragColor *= (1.0 + (effector * 1.0)); // The intensity of the color can be controlled here via the effector.\n  //gl_FragColor *= 1.5; // Whiteness Increase for Glow\n\n  // vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);\n  vec2 uv = vec2(vPos.x, vPos.y);\n  vec4 tex = texture2D(texture, uv);\n\n  float colDistance = 0.0;\n  float pointDistance = length(vPos);\n\n  if (pointDistance < .65 ){\n    colDistance = (-.2 + pointDistance * .4);\n  } else if (tMorph < 0.01 && tMorph > 0.09){\n    colDistance += pointDistance * .4;\n  }\n\n  float colPointSize = min( .1, vPointSize * .02);\n\n  float hue = color + colDistance + colPointSize;\n  float saturation = 1.0;\n  float light = 0.5;\n\n  vec3 col = hsl2rgb(hue, saturation, light);\n  tex.rgb = col;\n  tex.a = smoothstep(0.03, 0.09, length(vPos)) * max(0.25, (1.0 - sin(tMorph * 3.14) * .6) * vPointSize * 0.25);\n\n  gl_FragColor = tex;\n}\n"
    },
    function (t, e) {
        t.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main() {\n  // The origin of a texture in WebGL is in the bottom, corner.\n  // So that with the previously in the main program\n  // In order to match the generated indices of the particles,\n  // the vertical components (y) of the UV coordinates must be inverted\n  // The changed UV value will later be displayed in the fragment shader\n  // the position of the particle is read out of the FBO. BUT DOES NOT HAVE AN EFFECT TO HAVE DISABLED.\n  // vUv = vec2(uv.x, 1.0 - uv.y);\n  vUv = vec2(uv.x, uv.y);\n\n  // Transformation of coordinates in eye coordinates and then in clip coordinates\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"
    },
    function (t, e) {
        t.exports = "#define GLSLIFY 1\n#ifndef PI\n#define PI 3.141592653589793\n#endif\n\nfloat backIn_1_0(float t) {\n  return pow(t, 3.0) - t * sin(t * PI);\n}\n\n\n\nfloat map_2_1(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map_2_1(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map_2_1(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map_2_1(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\n\n\n\nuniform sampler2D tFrom;\nuniform sampler2D tTo;\nuniform float tMorph;\nuniform float timer;\nuniform vec3 impactPosition;\n// uniform vec3 velocity;\n\nvarying vec2 vUv;\n\n// Pseudo random number generator\nfloat rand(vec2 co) {\n  return fract(sin(dot(co.xy ,vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n  return mod289(((x * 34.0) + 1.0) * x);\n}\n\nfloat noise(vec2 v) {\n  const vec4 C = vec4(0.211324865405187, // (3.0-sqrt(3.0)) / 6.0\n                      0.366025403784439, // 0.5 * (sqrt(3.0) - 1.0)\n                     -0.577350269189626, // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n  // First corner\n  vec2 i = floor(v + dot(v, C.yy));\n  vec2 x0 = v - i + dot(i, C.xx);\n\n  // Other corners\n  vec2 i1;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n  // Permutations\n  i = mod289(i); // Avoid truncation effects in permutation\n  vec3 p = permute(permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n  // Gradients: 41 points uniformly over a line, mapped onto a diamond.\n  // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n  // Normalise gradients implicitly by scaling m\n  // Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);\n\n  // Compute final noise value at P\n  vec3 g;\n  g.x = a0.x * x0.x + h.x * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n\n  return 130.0 * dot(m, g);\n}\n\nvec3 curl(float x, float y, float z, float timer) {\n  float eps = 1.0, eps2 = 2.0 * eps;\n  float n1, n2, a, b;\n\n  x += timer * 0.05;\n  y += timer * 0.05;\n  z += timer * 0.05;\n\n  vec3 curl = vec3(0.);\n\n  n1 = noise(vec2(x, y + eps));\n  n2 = noise(vec2(x, y - eps));\n  a = (n1 - n2) / eps2;\n\n  n1 = noise(vec2(x, z + eps));\n  n2 = noise(vec2(x, z - eps));\n  b = (n1 - n2) / eps2;\n\n  curl.x = a - b;\n\n  n1 = noise(vec2(y, z + eps));\n  n2 = noise(vec2(y, z - eps));\n  a = (n1 - n2) / eps2;\n\n  n1 = noise(vec2(x + eps, z));\n  n2 = noise(vec2(x + eps, z));\n  b = (n1 - n2) / eps2;\n\n  curl.y = a - b;\n\n  n1 = noise(vec2(x + eps, y));\n  n2 = noise(vec2(x - eps, y));\n  a = (n1 - n2) / eps2;\n\n  n1 = noise(vec2(y + eps, z));\n  n2 = noise(vec2(y - eps, z));\n  b = (n1 - n2) / eps2;\n\n  curl.z = a - b;\n\n  return curl;\n}\n\n// Tests…\n#ifndef PI\n#define PI 3.141592653589793\n#endif\n\nfloat backIn(float t) {\n  return pow(t, 20.0) - t * sin(t * PI);\n}\n\n// https://www.shadertoy.com/view/4sV3zt\n// https://keithmaggio.wordpress.com/2011/02/15/math-magician-lerp-slerp-and-nlerp/\n// http://www.geeks3d.com/20140205/glsl-simple-morph-target-animation-opengl-glslhacker-demo/\nvec3 slerp(vec3 start, vec3 end, float t) {\n     // Dot product - the cosine of the angle between 2 vectors.\n     float dot = dot(start, end);\n     // Clamp it to be in the range of Acos()\n     // This may be unnecessary, but floating point\n     // precision can be a fickle mistress.\n     dot = clamp(dot, -1.0, 1.0);\n     // Acos(dot) returns the angle between start and end,\n     // And multiplying that by time returns the angle between\n     // start and the final result.\n     float theta = acos(dot) * t;\n     vec3 RelativeVec = normalize(end - start * dot);\n\n     return ((start * cos(theta)) + (RelativeVec * sin(theta)));\n}\n\nvec3 anime(vec3 start, vec3 end, float t) {\n  vec3 pos;\n  float back = 0.5;\n  float multiplier = 0.75;\n\n  // pos = slerp(start, end, t);\n\n  if (t <= back) {\n    pos = slerp(start, end, t * multiplier);\n  } else {\n    pos = slerp(start, end, back * multiplier);\n    pos = mix(pos, end, map_2_1(t, 0.5, 1.0, 0.0, 1.0));\n  }\n\n  return pos;\n}\n\nvoid main() {\n\n  vec3 origin = texture2D(tFrom, vUv).rgb;\n  vec3 destination = texture2D(tTo, vUv).rgb;\n\n  //get particle order from 0 to 1\n  float order = (vUv.y + vUv.x / 10.0) / 10.0;\n  // make the order less linear\n  order = pow(order, .3);\n\n  // make the particles move with some delay depending on their order\n  // particle0 start moving at time0, particle1 start moving at time0.5 ...\n  // so calculate morphRatio for each particle\n  float morphRatio = smoothstep (0.0, 1.0, tMorph * 2.0 - order);\n\n  // mix positions\n  vec3 vPos = mix(origin, destination, morphRatio);\n\n  //if (tMorph > .99 || tMorph < 0.01){\n    // mouse attractor\n    float mouseDistance = length(impactPosition - vPos);\n    float attractionMinLimit = 0.0;// + sin(325.0 + timer * 0.05 * 3.14 * 2.0) * .1;\n    float attractionMaxLimit = .35;// + sin(timer * 0.01 * 3.14 * 2.0) * .1;\n    float mouseAttraction = 1.0 - smoothstep(attractionMinLimit, attractionMaxLimit, mouseDistance);\n    mouseAttraction = pow( mouseAttraction, 3.0);\n    vec3 posNormal = normalize(vPos);\n    vPos += posNormal * mouseAttraction * .2;\n    vPos += mouseAttraction *  abs(curl (posNormal.x, posNormal.y, posNormal.z, timer * 0.1) * .2);\n\n    //vPos += pow( mouseAttraction, 2.0) * abs(curl(posNormal.x, posNormal.y, posNormal.z, timer * 0.05) * 1.5);//( .7 + sin(timer * 0.01 * 3.14) * .2 );\n\n  //} else { // while transition\n    // line attractor\n    vec3 attractor1 = vec3(order, 0.0, 0.0);\n    attractor1.y += sin(morphRatio * 3.14 + timer * 0.001) * .5;\n    attractor1.z += cos(morphRatio * 3.14 + 1.0 + timer * 0.003) * .5;\n    attractor1.x += sin(morphRatio * 3.14 + 2.0 + timer * 0.0025) * .2;\n    vPos += (attractor1 - vPos) * sin(morphRatio * 3.14);\n\n    // attractor per vertex\n    vec3 attractor3 = (vPos * .8) + curl(vPos.x, vPos.y, vPos.z, timer * .01);\n    attractor3.x += cos(morphRatio * 3.14) * .25;\n    attractor3.y += sin(morphRatio * 3.14) * .25;\n    vPos += (attractor3 - vPos) * sin(morphRatio * 3.14) * .5;\n  //}\n\n  // make a small wave (always applied)\n  vPos.y += (cos(timer * 0.05 + vPos.x * 3.0 + vPos.z * 3.0) * 0.04 ) * vPos.x;\n\n  // make a big wave (applied from time to time)\n  // decide if we launch a big wave, depending on a noise function\n  float n = noise(vec2( (vPos.x * vPos.z) + timer * 0.002, vPos.y + timer * 0.005));\n  float waveRatio = smoothstep(0.5, 0.9, n);\n\n  // apply big wave\n  vec3 cnoise = curl(vPos.x * 2.0, vPos.y * 2.0, vPos.z * 2.0, timer * 0.05) * waveRatio * 1.5;\n\n  // mix waves and positions\n  vec3 tar = vPos + cnoise;\n  float d = length(vPos - tar) * 0.2;\n  vPos = mix(vPos, tar, pow(d, 2.0));\n  // gl_PointSize = noise( vec2(position.x + position.y + position.z, timer * 0.005)) * 3.0;\n\n  gl_FragColor = vec4(vPos, 1.0);\n}\n"
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = i(3),
            s = i(2),
            h = i(8),
            c = n(h),
            u = i(0),
            l = n(u),
            p = function () {
                function t(e, i, n) {
                    r(this, t), this.renderer = e, this.camera = i, this.scene = n, this.angle = 0, this.distance = .2, this.onChange = this.onChange.bind(this)
                }

                return o(t, [{
                    key: "init",
                    value: function () {
                        return this.clock = new a.Clock, this.tick = 0, this.options = {
                            position: new a.Vector3,
                            positionRandomness: 5e-5,
                            velocity: new a.Vector3,
                            velocityRandomness: .0045,
                            color: 11176191,
                            colorRandomness: .65,
                            turbulence: 0,
                            lifetime: 8.5,
                            size: 2.5,
                            sizeRandomness: 6
                        }, this.spawnerOptions = {
                            spawnRate: 0,
                            horizontalSpeed: -2,
                            verticalSpeed: -2,
                            timeScale: 1
                        }, this.system = new c.default({
                            maxParticles: 25e3
                        }), this.scene.add(this.system), this.in(), this.bind(), Promise.resolve()
                    }
                }, {
                    key: "bind",
                    value: function () {
                        l.default.on(l.default.PANEL_CHANGE, this.onChange)
                    }
                }, {
                    key: "onChange",
                    value: function (t, e) {
                        0 === e ? this.in(3) : this.out()
                    }
                }, {
                    key: "in",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.system.visible = !0, s.TweenMax.set(this.system.scale, {
                            x: 1,
                            y: 1,
                            ease: s.Power4.easeIn
                        }), (new s.TimelineLite).add("start").delay(t).set(this.options, {
                            positionRandomness: 5e-5
                        }).to(this.spawnerOptions, 6, {
                            spawnRate: 2e3,
                            ease: s.Power2.easeIn
                        }, "start").to(this.options, 5, {
                            lifetime: 8.5
                        }, "start").to(this.options, 5, {
                            positionRandomness: .01,
                            ease: s.Power4.easeOut
                        }, "start+=4")
                    }
                }, {
                    key: "out",
                    value: function () {
                        var t = this;
                        s.TweenMax.set(this.options, {
                            lifetime: 0
                        }), new s.TimelineLite({
                            onComplete: function () {
                                t.system.visible = !1
                            }
                        }).add("start").to(this.system.scale, 1, {
                            x: 5,
                            y: 5,
                            ease: s.Power4.easeIn
                        }, "start").to(this.spawnerOptions, 1, {
                            spawnRate: 0,
                            ease: s.Power4.easeIn
                        }, "start").to(this.options, .5, {
                            positionRandomness: 1
                        }, "start")
                    }
                }, {
                    key: "update",
                    value: function () {
                        var t = this.clock.getDelta() * this.spawnerOptions.timeScale;
                        if (this.tick += t, this.tick < 0 && (this.tick = 0), t > 0) {
                            this.options.position.x = .2 * Math.cos(this.tick * this.spawnerOptions.horizontalSpeed), this.options.position.y = .2 * Math.sin(this.tick * this.spawnerOptions.verticalSpeed);
                            for (var e = 0; e < this.spawnerOptions.spawnRate * t; e++) this.system.spawnParticle(this.options)
                        }
                        this.system.update(this.tick)
                    }
                }]), t
            }();
        e.default = p
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = i(3),
            s = i(8),
            h = n(s),
            c = i(0),
            u = n(c),
            l = function () {
                function t(e, i, n) {
                    r(this, t), this.renderer = e, this.camera = i, this.scene = n, this.onChange = this.onChange.bind(this)
                }

                return o(t, [{
                    key: "init",
                    value: function () {
                        return this.clock = new a.Clock, this.tick = 0, this.timer = 0, this.pps = 30, this.options = {
                            position: new a.Vector3,
                            positionRandomness: 1,
                            velocity: new a.Vector3(0, 0, .025),
                            velocityRandomness: .025,
                            color: 15102124,
                            colorRandomness: .65,
                            turbulence: 2e-4,
                            lifetime: 5,
                            size: 8,
                            sizeRandomness: 20
                        }, this.spawnerOptions = {
                            spawnRate: 20,
                            speed: 1,
                            horizontalSpeed: -2,
                            verticalSpeed: -2,
                            timeScale: 1
                        }, this.system = new h.default({
                            maxParticles: 25e3
                        }), this.scene.add(this.system), this.bind(), Promise.resolve()
                    }
                }, {
                    key: "bind",
                    value: function () {
                        u.default.on(u.default.PANEL_CHANGE, this.onChange)
                    }
                }, {
                    key: "onChange",
                    value: function (t, e, i, n) {
                        switch ("home" === n || "end" === n ? (this.pps = 30, this.options.size = 8) : (this.pps = 20, this.options.size = 8), n) {
                            case "brain":
                                this.options.color = 12716074, this.options.position = new a.Vector3(.35, 0, 0), this.options.velocity = new a.Vector3(0, 0, -.025);
                                break;
                            case "gloves":
                                this.options.color = 9030492, this.options.position = new a.Vector3(.5, 0, 0), this.options.velocity = new a.Vector3(.0125, 0, .0125);
                                break;
                            case "stadium":
                                this.options.color = 5226477, this.options.position = new a.Vector3(-.5, 0, 0), this.options.velocity = new a.Vector3(0, 0, 0);
                                break;
                            case "lsm":
                                this.options.color = 15102124, this.options.position = new a.Vector3(.25, .15, 0), this.options.velocity = new a.Vector3(.0125, 0, 0);
                                break;
                            case "end":
                                this.options.color = 15346232, this.options.position = new a.Vector3, this.options.velocity = new a.Vector3(0, 0, .025);
                                break;
                            case "home":
                            default:
                                this.options.color = 15102124, this.options.position = new a.Vector3, this.options.velocity = new a.Vector3(0, 0, .025)
                        }
                    }
                }, {
                    key: "update",
                    value: function (t, e) {
                        var i = this.clock.getDelta() * this.spawnerOptions.timeScale;
                        this.tick += i, this.timer += 1, this.tick < 0 && (this.tick = 0);
                        var n = this.timer / e * this.pps || 0;
                        if (i > 0 && n >= 1) {
                            for (var r = 0; r < this.spawnerOptions.spawnRate * i; r++) this.system.spawnParticle(this.options);
                            this.timer = 0
                        }
                        this.system.update(this.tick)
                    }
                }]), t
            }();
        e.default = l
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = i(3),
            s = i(2),
            h = i(0),
            c = n(h),
            u = i(7),
            l = (n(u), i(41)),
            p = i(42),
            f = function () {
                function t(e, i, n) {
                    r(this, t), this.renderer = e, this.camera = i, this.scene = n, this.settings = {
                        home: {
                            color: .66
                        },
                        brain: {
                            color: .5
                        },
                        gloves: {
                            color: .85
                        },
                        stadium: {
                            color: .95
                        },
                        lsm: {
                            color: .7
                        },
                        end: {
                            color: .9
                        }
                    }, this.update = this.update.bind(this), this.onChange = this.onChange.bind(this), this.updateSize = this.updateSize.bind(this), this.mouseMove = this.mouseMove.bind(this), this.bind()
                }

                return o(t, [{
                    key: "init",
                    value: function () {
                        return this.geometry = new a.PlaneBufferGeometry(1, 1, 1, 1), this.material = new a.ShaderMaterial({
                            uniforms: {
                                color: {
                                    value: this.settings.home.color
                                },
                                timer: {
                                    value: 0
                                },
                                transition: {
                                    value: 0
                                },
                                mousePosition: {
                                    value: this.mousePos
                                }
                            },
                            vertexShader: l,
                            fragmentShader: p
                        }), this.time = 0, this.mousePos = new a.Vector2(0, 0), this.targetMousePos = new a.Vector2(0, 0), this.mesh = new a.Mesh(this.geometry, this.material), this.mesh.position.z = -10, this.camera.add(this.mesh), this.updateSize(), Promise.resolve()
                    }
                }, {
                    key: "bind",
                    value: function () {
                        c.default.on(c.default.PANEL_CHANGE, this.onChange), c.default.on(c.default.CAMERA_UPDATE, this.updateSize), c.default.on(c.default.MOUSE_MOVE, this.mouseMove)
                    }
                }, {
                    key: "updateSize",
                    value: function () {
                        var t = this.camera.position.z - this.mesh.position.z,
                            e = this.camera.fov * Math.PI / 180,
                            i = 2 * Math.tan(e / 2) * Math.abs(t),
                            n = i * this.camera.aspect;
                        this.mesh.scale.x = n, this.mesh.scale.y = i
                    }
                }, {
                    key: "mouseMove",
                    value: function (t, e) {
                        this.targetMousePos.x = t + .5, this.targetMousePos.y = .5 - e
                    }
                }, {
                    key: "onChange",
                    value: function (t, e, i, n) {
                        var r = this;
                        s.TweenMax.to(this.material.uniforms.color, 6, {
                            value: this.settings[n].color,
                            ease: s.Power4.easeOut
                        }), s.TweenMax.to(this.material.uniforms.transition, 3, {
                            value: 1,
                            ease: s.Linear.easeNone,
                            onComplete: function () {
                                r.material.uniforms.transition.value = 0
                            }
                        })
                    }
                }, {
                    key: "update",
                    value: function () {
                        this.time += 1, this.material.uniforms.timer.value = this.time, this.mousePos.x += .1 * (this.targetMousePos.x - this.mousePos.x), this.mousePos.y += .1 * (this.targetMousePos.y - this.mousePos.y), this.material.uniforms.mousePosition.value = this.mousePos
                    }
                }]), t
            }();
        e.default = f
    },
    function (t, e) {
        t.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\nuniform float color;\nuniform float timer;\n\nvoid main() {\n  vUv = vec2(uv.x, uv.y);\n\n  // Transformation of coordinates in eye coordinates and then in clip coordinates\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"
    },
    function (t, e) {
        t.exports = "#define GLSLIFY 1\nuniform float color;\nuniform float timer;\nuniform float transition;\nuniform vec2 mousePosition;\nvarying vec2 vUv;\n\nfloat mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\nvec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\nvec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}\n\nfloat rand(vec2 co){\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nfloat noise(vec3 p){\n    vec3 a = floor(p);\n    vec3 d = p - a;\n    d = d * d * (3.0 - 2.0 * d);\n\n    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);\n    vec4 k1 = perm(b.xyxy);\n    vec4 k2 = perm(k1.xyxy + b.zzww);\n\n    vec4 c = k2 + a.zzzz;\n    vec4 k3 = perm(c);\n    vec4 k4 = perm(c + 1.0);\n\n    vec4 o1 = fract(k3 * (1.0 / 41.0));\n    vec4 o2 = fract(k4 * (1.0 / 41.0));\n\n    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);\n    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);\n\n    return o4.y * d.y + o4.x * (1.0 - d.y);\n}\n\nfloat hue2rgb(float f1, float f2, float hue) {\n  if (hue < 0.0) {\n    hue += 1.0;\n  } else if (hue > 1.0) {\n    hue -= 1.0;\n  }\n\n  float res;\n  if ((6.0 * hue) < 1.0) {\n    res = f1 + (f2 - f1) * 6.0 * hue;\n  } else if ((2.0 * hue) < 1.0) {\n    res = f2;\n  } else if ((3.0 * hue) < 2.0) {\n    res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;\n  } else {\n    res = f1;\n  }\n\n  return res;\n}\n\nvec3 hsl2rgb(vec3 hsl) {\n  vec3 rgb;\n\n  if (hsl.y == 0.0) {\n    rgb = vec3(hsl.z); // Luminance\n  } else {\n    float f2;\n\n    if (hsl.z < 0.5) {\n        f2 = hsl.z * (1.0 + hsl.y);\n    } else {\n        f2 = hsl.z + hsl.y - hsl.y * hsl.z;\n    }\n\n    float f1 = 2.0 * hsl.z - f2;\n\n    rgb.r = hue2rgb(f1, f2, hsl.x + (1.0/3.0));\n    rgb.g = hue2rgb(f1, f2, hsl.x);\n    rgb.b = hue2rgb(f1, f2, hsl.x - (1.0/3.0));\n  }\n\n  return rgb;\n}\n\nvec3 hsl2rgb(float h, float s, float l) {\n  return hsl2rgb(vec3(h, s, l));\n}\n\nfloat fbm(vec2 pos, float t){\n  float r;\n        r \t= \tnoise( vec3( pos, t ) * 01.0 ) * 01.0000;\n        r \t+= \tnoise( vec3( pos, t ) * 02.0 ) * 00.5000;\n        r \t+= \tnoise( vec3( pos, t ) * 04.0 ) * 00.2500;\n        //r \t+= \tnoise( vec3( pos, t ) * 08.0 ) * 00.1250;\n        //r \t+= \tnoise( vec3( pos, t ) * 16.0 ) * 00.0625;\n  return r / 1.75;\n}\n\n\nvoid main() {\n\n  vec2 pos = vUv;\n  float p = fbm( pos * 1.0, timer * .001);\n\tvec2 pos2 = pos + vec2(p);\n  float q = fbm( pos2 * 2.0, timer * .002);\n\tvec2 pos3 = pos + vec2(q);\n\n  float hue = color - .05 + length(pos3) * .1;//color  -.05 + pos3.x * .1;\n  float saturation = 1.0;//1.0 - sin(transition * 3.14) * .3;\n\n\n  // Light\n  float normX = vUv.x * 2.0 -1.0;\n  float normY = vUv.y * 2.0 -1.0;\n  float dist = length(vec2(normX, normY));\n  float vignette = 1.0 - dist * .5;\n  float highlightClouds = pos3.x * 0.02;\n  float baseLight = .15;\n  float transitionLight = sin(transition * 3.14 * 2.0) * .2;\n  float mouseDistance = length( mousePosition - vUv );\n  float radiusBase = 0.1;\n  float mouseShadow = 1.0 - smoothstep( 0.0, radiusBase, mouseDistance )  ;\n\n  float light = baseLight + highlightClouds;\n  light *= vignette + transitionLight;\n  light += mouseShadow * 0.05;\n  hue += mouseShadow * .01;\n\n  vec3 col = hsl2rgb(hue, saturation, light);\n\n  gl_FragColor = vec4(col, 1.0);\n}\n"
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
            return Array.from(t)
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            s = i(2),
            h = i(1),
            c = i(0),
            u = n(c),
            l = i(44),
            p = n(l),
            f = i(45),
            d = n(f),
            m = i(48),
            v = n(m),
            g = i(50),
            y = n(g),
            _ = i(52),
            x = n(_),
            b = function () {
                function t(e) {
                    o(this, t), this.$el = e, this.$refs = {
                        panels: []
                    }, this.current = 0, this.isAnimating = !1, this.next = this.next.bind(this), this.prev = this.prev.bind(this), this.onEnd = this.onEnd.bind(this), this.init()
                }

                return a(t, [{
                    key: "init",
                    value: function () {
                        var t = this;
                        [].concat(r((0, h.qsa)("[data-panel]", this.$el))).forEach(function (e) {
                            t.$refs.panels.push(new y.default(e))
                        }), this.pagination = new x.default(this.$refs.panels.length), this.bind()
                    }
                }, {
                    key: "bind",
                    value: function () {
                        this.keyboard = new p.default([{
                            key: 40,
                            callback: this.next
                        }, {
                            key: 38,
                            callback: this.prev
                        }]), this.mouse = new d.default(this.prev, this.next), this.swipe = new v.default(this.prev, this.next), u.default.on(u.default.PANEL_NEXT, this.next), u.default.on(u.default.PANEL_PREV, this.prev)
                    }
                }, {
                    key: "next",
                    value: function () {
                        this.jump(this.current + 1)
                    }
                }, {
                    key: "prev",
                    value: function () {
                        this.jump(this.current - 1)
                    }
                }, {
                    key: "jump",
                    value: function (t) {
                        var e = this;
                        if (!this.isAnimating && !(this.current === t || t >= this.$refs.panels.length || t < 0)) {
                            this.isAnimating = !0;
                            var i = this.current,
                                n = this.getPanel(),
                                r = this.getPanel(t),
                                o = t > i ? "next" : "prev";
                            this.pagination.jump(t, n.name, r.name), document.body.classList.add("is-" + r.name), document.body.classList.remove("is-" + n.name), u.default.emit(u.default.PANEL_CHANGE, i, t, n.name, r.name), r.activate(), window.EVS_FALLBACK || u.default.on(u.default.PANEL_END, this.onEnd);
                            var a = new s.TimelineMax({
                                    onComplete: function () {
                                        n.deactivate(), n.clean(), window.EVS_FALLBACK && (e.isAnimating = !1)
                                    }
                                }),
                                h = n["to" + r.name],
                                c = r["from" + n.name];
                            h || (h = n.out), c || (c = r.in), a.add("start"), a.add(h.call(n, o), "start"), a.add(c.call(r, o), "start"), this.current = t
                        }
                    }
                }, {
                    key: "getPanel",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.current;
                        return this.$refs.panels[t]
                    }
                }, {
                    key: "onEnd",
                    value: function () {
                        this.isAnimating = !1, u.default.off(u.default.PANEL_END, this.onEnd)
                    }
                }]), t
            }();
        e.default = b
    },
    function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            o = i(1),
            a = function () {
                function t(e) {
                    n(this, t), this.binds = e, this.onKeyDown = this.onKeyDown.bind(this), this.init()
                }

                return r(t, [{
                    key: "init",
                    value: function () {
                        this.bind()
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.unbind()
                    }
                }, {
                    key: "bind",
                    value: function () {
                        (0, o.$on)(document, "keydown", this.onKeyDown)
                    }
                }, {
                    key: "unbind",
                    value: function () {
                        (0, o.$off)(document, "keydown", this.onKeyDown)
                    }
                }, {
                    key: "onKeyDown",
                    value: function (t) {
                        for (var e = t.keyCode, i = 0; i < this.binds.length; i++) {
                            var n = this.binds[i];
                            if (e === n.key) {
                                t.preventDefault(), n.callback();
                                break
                            }
                        }
                    }
                }]), t
            }();
        e.default = a
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = i(46),
            s = i(47),
            h = i(1),
            c = i(5),
            u = n(c),
            l = i(0),
            p = n(l),
            f = function () {
                function t(e, i) {
                    r(this, t), this.prev = e, this.next = i, this.onWheel = this.onWheel.bind(this), this.init()
                }

                return o(t, [{
                    key: "init",
                    value: function () {
                        this.lethargy = new a.Lethargy, this.bind()
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.unbind()
                    }
                }, {
                    key: "bind",
                    value: function () {
                        (0, h.$on)(document, "mousewheel", this.onWheel, {
                            capture: !1,
                            passive: !0
                        }), (0, h.$on)(document, "wheel", this.onWheel, {
                            capture: !1,
                            passive: !0
                        }), (0, h.$on)(document, "mousemove", t.onMove)
                    }
                }, {
                    key: "unbind",
                    value: function () {
                        (0, h.$off)(document, "mousewheel", this.onWheel), (0, h.$off)(document, "wheel", this.onWheel), (0, h.$off)(document, "mousemove", t.onMove)
                    }
                }, {
                    key: "onWheel",
                    value: function (t) {
                        var e = this.lethargy.check(t);
                        !1 !== e && (-1 === e && this.next(), 1 === e && this.prev())
                    }
                }], [{
                    key: "onMove",
                    value: function (t) {
                        var e = u.default.width / 2,
                            i = u.default.height / 2,
                            n = t.clientX - e,
                            r = t.clientY - i,
                            o = (0, s.map)(n, -e, e, -.5, .5),
                            a = (0, s.map)(r, -i, i, -.5, .5);
                        p.default.emit(p.default.MOUSE_MOVE, o, a)
                    }
                }]), t
            }();
        e.default = f
    },
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
    },
    function (t, e, i) {
        "use strict";

        function n(t, e, i) {
            return Math.min(e, Math.max(t, i))
        }

        function r(t) {
            return t < 0 ? 0 : t > 1 ? 1 : t
        }

        function o(t, e) {
            return e < t ? 0 : 1
        }

        function a(t, e, i, n, r) {
            return (t - e) / (i - e) * (r - n) + n
        }

        function s(t, e) {
            return Math.sqrt(t * t + e * e)
        }

        function h(t, e, i, n) {
            var r = t - i,
                o = e - n;
            return Math.sqrt(r * r + o * o)
        }

        function c(t, e, i) {
            var n = Math.max(0, Math.min(1, (i - t) / (e - t)));
            return n * n * (3 - 2 * n)
        }

        function u(t, e, i) {
            return t + (e - t) * i
        }

        function l(t, e, i) {
            return (i - t) / (e - t)
        }

        function p(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
            return parseFloat(Math.min(t + Math.random() * (e - t), e).toFixed(i))
        }

        function f(t, e) {
            return Math.floor(Math.random() * (e - t + 1) + t)
        }

        function d() {
            return Math.random() > .5 ? 1 : -1
        }

        function m(t, e, i) {
            var n = i - e;
            if (n <= 0) return 0;
            var r = (t - e) % n;
            return r < 0 && (r += n), r + e
        }

        function v(t) {
            return t * Math.PI / 180
        }

        function g(t) {
            return 180 * t / Math.PI
        }

        function y(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e-4;
            return Math.floor(t + e)
        }

        function _(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e-4;
            return Math.ceil(t + e)
        }

        function x(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-4;
            return Math.abs(t - e) < i
        }

        function b(t, e) {
            return t > e - (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-4)
        }

        function w(t, e) {
            return t < e + (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-4)
        }

        function M(t, e, i) {
            return Math.min(t + e, i)
        }

        function T(t, e, i) {
            return Math.max(t - e, i)
        }

        function S(t) {
            return !!(1 & t)
        }

        function A(t) {
            return !(1 & t)
        }

        function P(t) {
            return 0 !== t && 0 == (t & t - 1)
        }

        function E(t) {
            return Math.pow(2, Math.round(Math.log(t) / Math.log(2)))
        }

        function C(t) {
            return Math.pow(2, Math.ceil(Math.log(t) / Math.log(2)))
        }

        function L(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return t > e || i > e ? 1 : t < i || i > t ? 0 : (t - i) / e
        }

        function N() {
            for (var t = 0, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
            var r = !0,
                o = !1,
                a = void 0;
            try {
                for (var s, h = i[Symbol.iterator](); !(r = (s = h.next()).done); r = !0) {
                    t += +s.value
                }
            } catch (t) {
                o = !0, a = t
            } finally {
                try {
                    !r && h.return && h.return()
                } finally {
                    if (o) throw a
                }
            }
            return t / i.length
        }

        function O(t, e) {
            return Math.abs(t - e)
        }

        function R(t, e, i) {
            return Math.abs(t - e) <= i
        }

        function I(t, e, i) {
            return (i - t) / (e - t)
        }

        function D(t, e, i) {
            return i <= 0 ? t : i >= 1 ? e : t + i * (e - t)
        }

        function k(t, e) {
            var i = F(e - t, 360);
            return i > 180 && (i = Math.abs(i - 360)), i
        }

        function z(t, e) {
            return v(k(g(t), g(e)))
        }

        function U(t) {
            return t - Math.floor(t)
        }

        function F(t, e) {
            return (t % e + e) % e
        }

        function B(t, e, i) {
            return F(t + u(0, k(t, e), i), 360)
        }

        function G(t, e, i) {
            return v(B(g(t), g(e), i))
        }

        function j(t) {
            return Math.pow(t, 2.2)
        }

        function V(t) {
            return Math.pow(t, 1 / 2.2)
        }

        function W(t, e, i) {
            if (t > e) return t;
            var n = 2 * i - e,
                r = 2 * e - 3 * i,
                o = t / e;
            return (n * o + r) * o * o + i
        }

        function H(t, e) {
            var i = t * e;
            return i * Math.exp(1 - i)
        }

        function X(t, e, i) {
            return (i = Math.abs(i - t)) > e ? 0 : 1 - (i /= e) * i * (3 - 2 * i)
        }

        function q(t, e, i) {
            return Math.exp(-e * Math.pow(t, i))
        }

        function Y(t, e) {
            return Math.pow(4 * t * (1 - t), e)
        }

        function $(t, e, i) {
            return Math.pow(e + i, e + i) / (Math.pow(e, e) * Math.pow(i, i)) * Math.pow(t, e) * Math.pow(1 - t, i)
        }

        function Z(t, e, i) {
            var n = Math.exp(-i * t) + Math.exp(-i * e);
            return -Math.log(n) / i
        }

        function J(t, e, i) {
            return Math.log(Math.exp(t) + Math.exp(e)) / i
        }

        function Q(t) {
            return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now()) - t
        }

        function K(t, e) {
            return 0 === e ? t : K(e, t % e)
        }

        function tt(t, e, i, n, r, o, a, s) {
            return (i - t) * (a - r) + (n - e) * (s - o)
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }), i.d(e, "clamp", function () {
            return n
        }), i.d(e, "clamp01", function () {
            return r
        }), i.d(e, "step", function () {
            return o
        }), i.d(e, "map", function () {
            return a
        }), i.d(e, "diagonal", function () {
            return s
        }), i.d(e, "distance", function () {
            return h
        }), i.d(e, "smoothStep", function () {
            return c
        }), i.d(e, "lerp", function () {
            return u
        }), i.d(e, "mix", function () {
            return u
        }), i.d(e, "normalize", function () {
            return l
        }), i.d(e, "randomFloat", function () {
            return p
        }), i.d(e, "randomInt", function () {
            return f
        }), i.d(e, "randomSign", function () {
            return d
        }), i.d(e, "wrap", function () {
            return m
        }), i.d(e, "degToRad", function () {
            return v
        }), i.d(e, "toRadians", function () {
            return v
        }), i.d(e, "radToDeg", function () {
            return g
        }), i.d(e, "toDegrees", function () {
            return g
        }), i.d(e, "fuzzyFloor", function () {
            return y
        }), i.d(e, "fuzzyCeil", function () {
            return _
        }), i.d(e, "fuzzyEqual", function () {
            return x
        }), i.d(e, "fuzzyGreaterThan", function () {
            return b
        }), i.d(e, "fuzzyLessThan", function () {
            return w
        }), i.d(e, "maxAdd", function () {
            return M
        }), i.d(e, "minSub", function () {
            return T
        }), i.d(e, "isOdd", function () {
            return S
        }), i.d(e, "isEven", function () {
            return A
        }), i.d(e, "isPowerOfTwo", function () {
            return P
        }), i.d(e, "closestPowerOfTwo", function () {
            return E
        }), i.d(e, "nextPowerOfTwo", function () {
            return C
        }), i.d(e, "percent01", function () {
            return L
        }), i.d(e, "average", function () {
            return N
        }), i.d(e, "difference", function () {
            return O
        }), i.d(e, "within", function () {
            return R
        }), i.d(e, "inverseLerp", function () {
            return I
        }), i.d(e, "inverseMix", function () {
            return I
        }), i.d(e, "lerpUnclamped", function () {
            return D
        }), i.d(e, "mixUnclamped", function () {
            return D
        }), i.d(e, "deltaAngleDeg", function () {
            return k
        }), i.d(e, "deltaAngle", function () {
            return k
        }), i.d(e, "deltaAngleRad", function () {
            return z
        }), i.d(e, "fract", function () {
            return U
        }), i.d(e, "mod", function () {
            return F
        }), i.d(e, "lerpAngleDeg", function () {
            return B
        }), i.d(e, "lerpAngle", function () {
            return B
        }), i.d(e, "lerpAngleRad", function () {
            return G
        }), i.d(e, "gammaToLinearSpace", function () {
            return j
        }), i.d(e, "linearToGammaSpace", function () {
            return V
        }), i.d(e, "almostIdentity", function () {
            return W
        }), i.d(e, "impulse", function () {
            return H
        }), i.d(e, "cubicPulse", function () {
            return X
        }), i.d(e, "expStep", function () {
            return q
        }), i.d(e, "parabola", function () {
            return Y
        }), i.d(e, "powerCurve", function () {
            return $
        }), i.d(e, "smoothMin", function () {
            return Z
        }), i.d(e, "smoothMax", function () {
            return J
        }), i.d(e, "deltaTime", function () {
            return Q
        }), i.d(e, "gcd", function () {
            return K
        }), i.d(e, "dotProduct", function () {
            return tt
        })
    },
    function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            o = i(49),
            a = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(o),
            s = function () {
                function t(e, i) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document.body,
                        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    n(this, t), this.$el = r, this.horizontal = o, this.prev = e, this.next = i, this.onSwipe = this.onSwipe.bind(this), this.init()
                }

                return r(t, [{
                    key: "init",
                    value: function () {
                        this.mc = new a.default(this.$el), this.mc.get("swipe").set({
                            direction: this.horizontal ? a.default.DIRECTION_HORIZONTAL : a.default.DIRECTION_VERTICAL
                        }), this.bind()
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.mc.destroy()
                    }
                }, {
                    key: "bind",
                    value: function () {
                        this.horizontal ? this.mc.on("swipeleft swiperight", this.onSwipe) : this.mc.on("swipeup swipedown", this.onSwipe)
                    }
                }, {
                    key: "onSwipe",
                    value: function (t) {
                        return "swipeup" === t.type ? this.next() : "swipedown" === t.type ? this.prev() : "swipeleft" === t.type ? this.next() : "swiperight" === t.type && this.prev()
                    }
                }]), t
            }();
        e.default = s
    },
    function (t, e, i) {
        var n;
        /*! Hammer.JS - v2.0.7 - 2016-04-22
     * http://hammerjs.github.io/
     *
     * Copyright (c) 2016 Jorik Tangelder;
     * Licensed under the MIT license */
        !function (r, o, a, s) {
            "use strict";

            function h(t, e, i) {
                return setTimeout(f(t, i), e)
            }

            function c(t, e, i) {
                return !!Array.isArray(t) && (u(t, i[e], i), !0)
            }

            function u(t, e, i) {
                var n;
                if (t)
                    if (t.forEach) t.forEach(e, i);
                    else if (t.length !== s)
                        for (n = 0; n < t.length;) e.call(i, t[n], n, t), n++;
                    else
                        for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t)
            }

            function l(t, e, i) {
                var n = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";
                return function () {
                    var e = new Error("get-stack-trace"),
                        i = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                        o = r.console && (r.console.warn || r.console.log);
                    return o && o.call(r.console, n, i), t.apply(this, arguments)
                }
            }

            function p(t, e, i) {
                var n, r = e.prototype;
                n = t.prototype = Object.create(r), n.constructor = t, n._super = r, i && dt(n, i)
            }

            function f(t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            }

            function d(t, e) {
                return typeof t == gt ? t.apply(e ? e[0] || s : s, e) : t
            }

            function m(t, e) {
                return t === s ? e : t
            }

            function v(t, e, i) {
                u(x(e), function (e) {
                    t.addEventListener(e, i, !1)
                })
            }

            function g(t, e, i) {
                u(x(e), function (e) {
                    t.removeEventListener(e, i, !1)
                })
            }

            function y(t, e) {
                for (; t;) {
                    if (t == e) return !0;
                    t = t.parentNode
                }
                return !1
            }

            function _(t, e) {
                return t.indexOf(e) > -1
            }

            function x(t) {
                return t.trim().split(/\s+/g)
            }

            function b(t, e, i) {
                if (t.indexOf && !i) return t.indexOf(e);
                for (var n = 0; n < t.length;) {
                    if (i && t[n][i] == e || !i && t[n] === e) return n;
                    n++
                }
                return -1
            }

            function w(t) {
                return Array.prototype.slice.call(t, 0)
            }

            function M(t, e, i) {
                for (var n = [], r = [], o = 0; o < t.length;) {
                    var a = e ? t[o][e] : t[o];
                    b(r, a) < 0 && n.push(t[o]), r[o] = a, o++
                }
                return i && (n = e ? n.sort(function (t, i) {
                    return t[e] > i[e]
                }) : n.sort()), n
            }

            function T(t, e) {
                for (var i, n, r = e[0].toUpperCase() + e.slice(1), o = 0; o < mt.length;) {
                    if (i = mt[o], (n = i ? i + r : e) in t) return n;
                    o++
                }
                return s
            }

            function S() {
                return Mt++
            }

            function A(t) {
                var e = t.ownerDocument || t;
                return e.defaultView || e.parentWindow || r
            }

            function P(t, e) {
                var i = this;
                this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
                    d(t.options.enable, [t]) && i.handler(e)
                }, this.init()
            }

            function E(t) {
                var e = t.options.inputClass;
                return new (e || (At ? j : Pt ? H : St ? q : G))(t, C)
            }

            function C(t, e, i) {
                var n = i.pointers.length,
                    r = i.changedPointers.length,
                    o = e & Ct && n - r == 0,
                    a = e & (Nt | Ot) && n - r == 0;
                i.isFirst = !!o, i.isFinal = !!a, o && (t.session = {}), i.eventType = e, L(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
            }

            function L(t, e) {
                var i = t.session,
                    n = e.pointers,
                    r = n.length;
                i.firstInput || (i.firstInput = R(e)), r > 1 && !i.firstMultiple ? i.firstMultiple = R(e) : 1 === r && (i.firstMultiple = !1);
                var o = i.firstInput,
                    a = i.firstMultiple,
                    s = a ? a.center : o.center,
                    h = e.center = I(n);
                e.timeStamp = xt(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = U(s, h), e.distance = z(s, h), N(i, e), e.offsetDirection = k(e.deltaX, e.deltaY);
                var c = D(e.deltaTime, e.deltaX, e.deltaY);
                e.overallVelocityX = c.x, e.overallVelocityY = c.y, e.overallVelocity = _t(c.x) > _t(c.y) ? c.x : c.y, e.scale = a ? B(a.pointers, n) : 1, e.rotation = a ? F(a.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, O(i, e);
                var u = t.element;
                y(e.srcEvent.target, u) && (u = e.srcEvent.target), e.target = u
            }

            function N(t, e) {
                var i = e.center,
                    n = t.offsetDelta || {},
                    r = t.prevDelta || {},
                    o = t.prevInput || {};
                e.eventType !== Ct && o.eventType !== Nt || (r = t.prevDelta = {
                    x: o.deltaX || 0,
                    y: o.deltaY || 0
                }, n = t.offsetDelta = {
                    x: i.x,
                    y: i.y
                }), e.deltaX = r.x + (i.x - n.x), e.deltaY = r.y + (i.y - n.y)
            }

            function O(t, e) {
                var i, n, r, o, a = t.lastInterval || e,
                    h = e.timeStamp - a.timeStamp;
                if (e.eventType != Ot && (h > Et || a.velocity === s)) {
                    var c = e.deltaX - a.deltaX,
                        u = e.deltaY - a.deltaY,
                        l = D(h, c, u);
                    n = l.x, r = l.y, i = _t(l.x) > _t(l.y) ? l.x : l.y, o = k(c, u), t.lastInterval = e
                } else i = a.velocity, n = a.velocityX, r = a.velocityY, o = a.direction;
                e.velocity = i, e.velocityX = n, e.velocityY = r, e.direction = o
            }

            function R(t) {
                for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
                    clientX: yt(t.pointers[i].clientX),
                    clientY: yt(t.pointers[i].clientY)
                }, i++;
                return {
                    timeStamp: xt(),
                    pointers: e,
                    center: I(e),
                    deltaX: t.deltaX,
                    deltaY: t.deltaY
                }
            }

            function I(t) {
                var e = t.length;
                if (1 === e) return {
                    x: yt(t[0].clientX),
                    y: yt(t[0].clientY)
                };
                for (var i = 0, n = 0, r = 0; r < e;) i += t[r].clientX, n += t[r].clientY, r++;
                return {
                    x: yt(i / e),
                    y: yt(n / e)
                }
            }

            function D(t, e, i) {
                return {
                    x: e / t || 0,
                    y: i / t || 0
                }
            }

            function k(t, e) {
                return t === e ? Rt : _t(t) >= _t(e) ? t < 0 ? It : Dt : e < 0 ? kt : zt
            }

            function z(t, e, i) {
                i || (i = Gt);
                var n = e[i[0]] - t[i[0]],
                    r = e[i[1]] - t[i[1]];
                return Math.sqrt(n * n + r * r)
            }

            function U(t, e, i) {
                i || (i = Gt);
                var n = e[i[0]] - t[i[0]],
                    r = e[i[1]] - t[i[1]];
                return 180 * Math.atan2(r, n) / Math.PI
            }

            function F(t, e) {
                return U(e[1], e[0], jt) + U(t[1], t[0], jt)
            }

            function B(t, e) {
                return z(e[0], e[1], jt) / z(t[0], t[1], jt)
            }

            function G() {
                this.evEl = Wt, this.evWin = Ht, this.pressed = !1, P.apply(this, arguments)
            }

            function j() {
                this.evEl = Yt, this.evWin = $t, P.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
            }

            function V() {
                this.evTarget = Jt, this.evWin = Qt, this.started = !1, P.apply(this, arguments)
            }

            function W(t, e) {
                var i = w(t.touches),
                    n = w(t.changedTouches);
                return e & (Nt | Ot) && (i = M(i.concat(n), "identifier", !0)), [i, n]
            }

            function H() {
                this.evTarget = te, this.targetIds = {}, P.apply(this, arguments)
            }

            function X(t, e) {
                var i = w(t.touches),
                    n = this.targetIds;
                if (e & (Ct | Lt) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
                var r, o, a = w(t.changedTouches),
                    s = [],
                    h = this.target;
                if (o = i.filter(function (t) {
                        return y(t.target, h)
                    }), e === Ct)
                    for (r = 0; r < o.length;) n[o[r].identifier] = !0, r++;
                for (r = 0; r < a.length;) n[a[r].identifier] && s.push(a[r]), e & (Nt | Ot) && delete n[a[r].identifier], r++;
                return s.length ? [M(o.concat(s), "identifier", !0), s] : void 0
            }

            function q() {
                P.apply(this, arguments);
                var t = f(this.handler, this);
                this.touch = new H(this.manager, t), this.mouse = new G(this.manager, t), this.primaryTouch = null, this.lastTouches = []
            }

            function Y(t, e) {
                t & Ct ? (this.primaryTouch = e.changedPointers[0].identifier, $.call(this, e)) : t & (Nt | Ot) && $.call(this, e)
            }

            function $(t) {
                var e = t.changedPointers[0];
                if (e.identifier === this.primaryTouch) {
                    var i = {
                        x: e.clientX,
                        y: e.clientY
                    };
                    this.lastTouches.push(i);
                    var n = this.lastTouches,
                        r = function () {
                            var t = n.indexOf(i);
                            t > -1 && n.splice(t, 1)
                        };
                    setTimeout(r, ee)
                }
            }

            function Z(t) {
                for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                    var r = this.lastTouches[n],
                        o = Math.abs(e - r.x),
                        a = Math.abs(i - r.y);
                    if (o <= ie && a <= ie) return !0
                }
                return !1
            }

            function J(t, e) {
                this.manager = t, this.set(e)
            }

            function Q(t) {
                if (_(t, se)) return se;
                var e = _(t, he),
                    i = _(t, ce);
                return e && i ? se : e || i ? e ? he : ce : _(t, ae) ? ae : oe
            }

            function K(t) {
                this.options = dt({}, this.defaults, t || {}), this.id = S(), this.manager = null, this.options.enable = m(this.options.enable, !0), this.state = le, this.simultaneous = {}, this.requireFail = []
            }

            function tt(t) {
                return t & ve ? "cancel" : t & de ? "end" : t & fe ? "move" : t & pe ? "start" : ""
            }

            function et(t) {
                return t == zt ? "down" : t == kt ? "up" : t == It ? "left" : t == Dt ? "right" : ""
            }

            function it(t, e) {
                var i = e.manager;
                return i ? i.get(t) : t
            }

            function nt() {
                K.apply(this, arguments)
            }

            function rt() {
                nt.apply(this, arguments), this.pX = null, this.pY = null
            }

            function ot() {
                nt.apply(this, arguments)
            }

            function at() {
                K.apply(this, arguments), this._timer = null, this._input = null
            }

            function st() {
                nt.apply(this, arguments)
            }

            function ht() {
                nt.apply(this, arguments)
            }

            function ct() {
                K.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
            }

            function ut(t, e) {
                return e = e || {}, e.recognizers = m(e.recognizers, ut.defaults.preset), new lt(t, e)
            }

            function lt(t, e) {
                this.options = dt({}, ut.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = E(this), this.touchAction = new J(this, this.options.touchAction), pt(this, !0), u(this.options.recognizers, function (t) {
                    var e = this.add(new t[0](t[1]));
                    t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                }, this)
            }

            function pt(t, e) {
                var i = t.element;
                if (i.style) {
                    var n;
                    u(t.options.cssProps, function (r, o) {
                        n = T(i.style, o), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = r) : i.style[n] = t.oldCssProps[n] || ""
                    }), e || (t.oldCssProps = {})
                }
            }

            function ft(t, e) {
                var i = o.createEvent("Event");
                i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i)
            }

            var dt, mt = ["", "webkit", "Moz", "MS", "ms", "o"],
                vt = o.createElement("div"),
                gt = "function",
                yt = Math.round,
                _t = Math.abs,
                xt = Date.now;
            dt = "function" != typeof Object.assign ? function (t) {
                if (t === s || null === t) throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), i = 1; i < arguments.length; i++) {
                    var n = arguments[i];
                    if (n !== s && null !== n)
                        for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r])
                }
                return e
            } : Object.assign;
            var bt = l(function (t, e, i) {
                    for (var n = Object.keys(e), r = 0; r < n.length;) (!i || i && t[n[r]] === s) && (t[n[r]] = e[n[r]]), r++;
                    return t
                }, "extend", "Use `assign`."),
                wt = l(function (t, e) {
                    return bt(t, e, !0)
                }, "merge", "Use `assign`."),
                Mt = 1,
                Tt = /mobile|tablet|ip(ad|hone|od)|android/i,
                St = "ontouchstart" in r,
                At = T(r, "PointerEvent") !== s,
                Pt = St && Tt.test(navigator.userAgent),
                Et = 25,
                Ct = 1,
                Lt = 2,
                Nt = 4,
                Ot = 8,
                Rt = 1,
                It = 2,
                Dt = 4,
                kt = 8,
                zt = 16,
                Ut = It | Dt,
                Ft = kt | zt,
                Bt = Ut | Ft,
                Gt = ["x", "y"],
                jt = ["clientX", "clientY"];
            P.prototype = {
                handler: function () {
                },
                init: function () {
                    this.evEl && v(this.element, this.evEl, this.domHandler), this.evTarget && v(this.target, this.evTarget, this.domHandler), this.evWin && v(A(this.element), this.evWin, this.domHandler)
                },
                destroy: function () {
                    this.evEl && g(this.element, this.evEl, this.domHandler), this.evTarget && g(this.target, this.evTarget, this.domHandler), this.evWin && g(A(this.element), this.evWin, this.domHandler)
                }
            };
            var Vt = {
                    mousedown: Ct,
                    mousemove: Lt,
                    mouseup: Nt
                },
                Wt = "mousedown",
                Ht = "mousemove mouseup";
            p(G, P, {
                handler: function (t) {
                    var e = Vt[t.type];
                    e & Ct && 0 === t.button && (this.pressed = !0), e & Lt && 1 !== t.which && (e = Nt), this.pressed && (e & Nt && (this.pressed = !1), this.callback(this.manager, e, {
                        pointers: [t],
                        changedPointers: [t],
                        pointerType: "mouse",
                        srcEvent: t
                    }))
                }
            });
            var Xt = {
                    pointerdown: Ct,
                    pointermove: Lt,
                    pointerup: Nt,
                    pointercancel: Ot,
                    pointerout: Ot
                },
                qt = {
                    2: "touch",
                    3: "pen",
                    4: "mouse",
                    5: "kinect"
                },
                Yt = "pointerdown",
                $t = "pointermove pointerup pointercancel";
            r.MSPointerEvent && !r.PointerEvent && (Yt = "MSPointerDown", $t = "MSPointerMove MSPointerUp MSPointerCancel"), p(j, P, {
                handler: function (t) {
                    var e = this.store,
                        i = !1,
                        n = t.type.toLowerCase().replace("ms", ""),
                        r = Xt[n],
                        o = qt[t.pointerType] || t.pointerType,
                        a = "touch" == o,
                        s = b(e, t.pointerId, "pointerId");
                    r & Ct && (0 === t.button || a) ? s < 0 && (e.push(t), s = e.length - 1) : r & (Nt | Ot) && (i = !0), s < 0 || (e[s] = t, this.callback(this.manager, r, {
                        pointers: e,
                        changedPointers: [t],
                        pointerType: o,
                        srcEvent: t
                    }), i && e.splice(s, 1))
                }
            });
            var Zt = {
                    touchstart: Ct,
                    touchmove: Lt,
                    touchend: Nt,
                    touchcancel: Ot
                },
                Jt = "touchstart",
                Qt = "touchstart touchmove touchend touchcancel";
            p(V, P, {
                handler: function (t) {
                    var e = Zt[t.type];
                    if (e === Ct && (this.started = !0), this.started) {
                        var i = W.call(this, t, e);
                        e & (Nt | Ot) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                            pointers: i[0],
                            changedPointers: i[1],
                            pointerType: "touch",
                            srcEvent: t
                        })
                    }
                }
            });
            var Kt = {
                    touchstart: Ct,
                    touchmove: Lt,
                    touchend: Nt,
                    touchcancel: Ot
                },
                te = "touchstart touchmove touchend touchcancel";
            p(H, P, {
                handler: function (t) {
                    var e = Kt[t.type],
                        i = X.call(this, t, e);
                    i && this.callback(this.manager, e, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: "touch",
                        srcEvent: t
                    })
                }
            });
            var ee = 2500,
                ie = 25;
            p(q, P, {
                handler: function (t, e, i) {
                    var n = "touch" == i.pointerType,
                        r = "mouse" == i.pointerType;
                    if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                        if (n) Y.call(this, e, i);
                        else if (r && Z.call(this, i)) return;
                        this.callback(t, e, i)
                    }
                },
                destroy: function () {
                    this.touch.destroy(), this.mouse.destroy()
                }
            });
            var ne = T(vt.style, "touchAction"),
                re = ne !== s,
                oe = "auto",
                ae = "manipulation",
                se = "none",
                he = "pan-x",
                ce = "pan-y",
                ue = function () {
                    if (!re) return !1;
                    var t = {},
                        e = r.CSS && r.CSS.supports;
                    return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (i) {
                        t[i] = !e || r.CSS.supports("touch-action", i)
                    }), t
                }();
            J.prototype = {
                set: function (t) {
                    "compute" == t && (t = this.compute()), re && this.manager.element.style && ue[t] && (this.manager.element.style[ne] = t), this.actions = t.toLowerCase().trim()
                },
                update: function () {
                    this.set(this.manager.options.touchAction)
                },
                compute: function () {
                    var t = [];
                    return u(this.manager.recognizers, function (e) {
                        d(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                    }), Q(t.join(" "))
                },
                preventDefaults: function (t) {
                    var e = t.srcEvent,
                        i = t.offsetDirection;
                    if (this.manager.session.prevented) return void e.preventDefault();
                    var n = this.actions,
                        r = _(n, se) && !ue[se],
                        o = _(n, ce) && !ue[ce],
                        a = _(n, he) && !ue[he];
                    if (r) {
                        var s = 1 === t.pointers.length,
                            h = t.distance < 2,
                            c = t.deltaTime < 250;
                        if (s && h && c) return
                    }
                    return a && o ? void 0 : r || o && i & Ut || a && i & Ft ? this.preventSrc(e) : void 0
                },
                preventSrc: function (t) {
                    this.manager.session.prevented = !0, t.preventDefault()
                }
            };
            var le = 1,
                pe = 2,
                fe = 4,
                de = 8,
                me = de,
                ve = 16;
            K.prototype = {
                defaults: {},
                set: function (t) {
                    return dt(this.options, t), this.manager && this.manager.touchAction.update(), this
                },
                recognizeWith: function (t) {
                    if (c(t, "recognizeWith", this)) return this;
                    var e = this.simultaneous;
                    return t = it(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
                },
                dropRecognizeWith: function (t) {
                    return c(t, "dropRecognizeWith", this) ? this : (t = it(t, this), delete this.simultaneous[t.id], this)
                },
                requireFailure: function (t) {
                    if (c(t, "requireFailure", this)) return this;
                    var e = this.requireFail;
                    return t = it(t, this), -1 === b(e, t) && (e.push(t), t.requireFailure(this)), this
                },
                dropRequireFailure: function (t) {
                    if (c(t, "dropRequireFailure", this)) return this;
                    t = it(t, this);
                    var e = b(this.requireFail, t);
                    return e > -1 && this.requireFail.splice(e, 1), this
                },
                hasRequireFailures: function () {
                    return this.requireFail.length > 0
                },
                canRecognizeWith: function (t) {
                    return !!this.simultaneous[t.id]
                },
                emit: function (t) {
                    function e(e) {
                        i.manager.emit(e, t)
                    }

                    var i = this,
                        n = this.state;
                    n < de && e(i.options.event + tt(n)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), n >= de && e(i.options.event + tt(n))
                },
                tryEmit: function (t) {
                    if (this.canEmit()) return this.emit(t);
                    this.state = 32
                },
                canEmit: function () {
                    for (var t = 0; t < this.requireFail.length;) {
                        if (!(this.requireFail[t].state & (32 | le))) return !1;
                        t++
                    }
                    return !0
                },
                recognize: function (t) {
                    var e = dt({}, t);
                    if (!d(this.options.enable, [this, e])) return this.reset(), void(this.state = 32);
                    this.state & (me | ve | 32) && (this.state = le), this.state = this.process(e), this.state & (pe | fe | de | ve) && this.tryEmit(e)
                },
                process: function (t) {
                },
                getTouchAction: function () {
                },
                reset: function () {
                }
            }, p(nt, K, {
                defaults: {
                    pointers: 1
                },
                attrTest: function (t) {
                    var e = this.options.pointers;
                    return 0 === e || t.pointers.length === e
                },
                process: function (t) {
                    var e = this.state,
                        i = t.eventType,
                        n = e & (pe | fe),
                        r = this.attrTest(t);
                    return n && (i & Ot || !r) ? e | ve : n || r ? i & Nt ? e | de : e & pe ? e | fe : pe : 32
                }
            }), p(rt, nt, {
                defaults: {
                    event: "pan",
                    threshold: 10,
                    pointers: 1,
                    direction: Bt
                },
                getTouchAction: function () {
                    var t = this.options.direction,
                        e = [];
                    return t & Ut && e.push(ce), t & Ft && e.push(he), e
                },
                directionTest: function (t) {
                    var e = this.options,
                        i = !0,
                        n = t.distance,
                        r = t.direction,
                        o = t.deltaX,
                        a = t.deltaY;
                    return r & e.direction || (e.direction & Ut ? (r = 0 === o ? Rt : o < 0 ? It : Dt, i = o != this.pX, n = Math.abs(t.deltaX)) : (r = 0 === a ? Rt : a < 0 ? kt : zt, i = a != this.pY, n = Math.abs(t.deltaY))), t.direction = r, i && n > e.threshold && r & e.direction
                },
                attrTest: function (t) {
                    return nt.prototype.attrTest.call(this, t) && (this.state & pe || !(this.state & pe) && this.directionTest(t))
                },
                emit: function (t) {
                    this.pX = t.deltaX, this.pY = t.deltaY;
                    var e = et(t.direction);
                    e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
                }
            }), p(ot, nt, {
                defaults: {
                    event: "pinch",
                    threshold: 0,
                    pointers: 2
                },
                getTouchAction: function () {
                    return [se]
                },
                attrTest: function (t) {
                    return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & pe)
                },
                emit: function (t) {
                    if (1 !== t.scale) {
                        var e = t.scale < 1 ? "in" : "out";
                        t.additionalEvent = this.options.event + e
                    }
                    this._super.emit.call(this, t)
                }
            }), p(at, K, {
                defaults: {
                    event: "press",
                    pointers: 1,
                    time: 251,
                    threshold: 9
                },
                getTouchAction: function () {
                    return [oe]
                },
                process: function (t) {
                    var e = this.options,
                        i = t.pointers.length === e.pointers,
                        n = t.distance < e.threshold,
                        r = t.deltaTime > e.time;
                    if (this._input = t, !n || !i || t.eventType & (Nt | Ot) && !r) this.reset();
                    else if (t.eventType & Ct) this.reset(), this._timer = h(function () {
                        this.state = me, this.tryEmit()
                    }, e.time, this);
                    else if (t.eventType & Nt) return me;
                    return 32
                },
                reset: function () {
                    clearTimeout(this._timer)
                },
                emit: function (t) {
                    this.state === me && (t && t.eventType & Nt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = xt(), this.manager.emit(this.options.event, this._input)))
                }
            }), p(st, nt, {
                defaults: {
                    event: "rotate",
                    threshold: 0,
                    pointers: 2
                },
                getTouchAction: function () {
                    return [se]
                },
                attrTest: function (t) {
                    return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & pe)
                }
            }), p(ht, nt, {
                defaults: {
                    event: "swipe",
                    threshold: 10,
                    velocity: .3,
                    direction: Ut | Ft,
                    pointers: 1
                },
                getTouchAction: function () {
                    return rt.prototype.getTouchAction.call(this)
                },
                attrTest: function (t) {
                    var e, i = this.options.direction;
                    return i & (Ut | Ft) ? e = t.overallVelocity : i & Ut ? e = t.overallVelocityX : i & Ft && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && _t(e) > this.options.velocity && t.eventType & Nt
                },
                emit: function (t) {
                    var e = et(t.offsetDirection);
                    e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
                }
            }), p(ct, K, {
                defaults: {
                    event: "tap",
                    pointers: 1,
                    taps: 1,
                    interval: 300,
                    time: 250,
                    threshold: 9,
                    posThreshold: 10
                },
                getTouchAction: function () {
                    return [ae]
                },
                process: function (t) {
                    var e = this.options,
                        i = t.pointers.length === e.pointers,
                        n = t.distance < e.threshold,
                        r = t.deltaTime < e.time;
                    if (this.reset(), t.eventType & Ct && 0 === this.count) return this.failTimeout();
                    if (n && r && i) {
                        if (t.eventType != Nt) return this.failTimeout();
                        var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                            a = !this.pCenter || z(this.pCenter, t.center) < e.posThreshold;
                        this.pTime = t.timeStamp, this.pCenter = t.center, a && o ? this.count += 1 : this.count = 1, this._input = t;
                        if (0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = h(function () {
                            this.state = me, this.tryEmit()
                        }, e.interval, this), pe) : me
                    }
                    return 32
                },
                failTimeout: function () {
                    return this._timer = h(function () {
                        this.state = 32
                    }, this.options.interval, this), 32
                },
                reset: function () {
                    clearTimeout(this._timer)
                },
                emit: function () {
                    this.state == me && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                }
            }), ut.VERSION = "2.0.7", ut.defaults = {
                domEvents: !1,
                touchAction: "compute",
                enable: !0,
                inputTarget: null,
                inputClass: null,
                preset: [
                    [st, {
                        enable: !1
                    }],
                    [ot, {
                        enable: !1
                    },
                        ["rotate"]
                    ],
                    [ht, {
                        direction: Ut
                    }],
                    [rt, {
                        direction: Ut
                    },
                        ["swipe"]
                    ],
                    [ct],
                    [ct, {
                        event: "doubletap",
                        taps: 2
                    },
                        ["tap"]
                    ],
                    [at]
                ],
                cssProps: {
                    userSelect: "none",
                    touchSelect: "none",
                    touchCallout: "none",
                    contentZooming: "none",
                    userDrag: "none",
                    tapHighlightColor: "rgba(0,0,0,0)"
                }
            };
            lt.prototype = {
                set: function (t) {
                    return dt(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
                },
                stop: function (t) {
                    this.session.stopped = t ? 2 : 1
                },
                recognize: function (t) {
                    var e = this.session;
                    if (!e.stopped) {
                        this.touchAction.preventDefaults(t);
                        var i, n = this.recognizers,
                            r = e.curRecognizer;
                        (!r || r && r.state & me) && (r = e.curRecognizer = null);
                        for (var o = 0; o < n.length;) i = n[o], 2 === e.stopped || r && i != r && !i.canRecognizeWith(r) ? i.reset() : i.recognize(t), !r && i.state & (pe | fe | de) && (r = e.curRecognizer = i), o++
                    }
                },
                get: function (t) {
                    if (t instanceof K) return t;
                    for (var e = this.recognizers, i = 0; i < e.length; i++)
                        if (e[i].options.event == t) return e[i];
                    return null
                },
                add: function (t) {
                    if (c(t, "add", this)) return this;
                    var e = this.get(t.options.event);
                    return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
                },
                remove: function (t) {
                    if (c(t, "remove", this)) return this;
                    if (t = this.get(t)) {
                        var e = this.recognizers,
                            i = b(e, t);
                        -1 !== i && (e.splice(i, 1), this.touchAction.update())
                    }
                    return this
                },
                on: function (t, e) {
                    if (t !== s && e !== s) {
                        var i = this.handlers;
                        return u(x(t), function (t) {
                            i[t] = i[t] || [], i[t].push(e)
                        }), this
                    }
                },
                off: function (t, e) {
                    if (t !== s) {
                        var i = this.handlers;
                        return u(x(t), function (t) {
                            e ? i[t] && i[t].splice(b(i[t], e), 1) : delete i[t]
                        }), this
                    }
                },
                emit: function (t, e) {
                    this.options.domEvents && ft(t, e);
                    var i = this.handlers[t] && this.handlers[t].slice();
                    if (i && i.length) {
                        e.type = t, e.preventDefault = function () {
                            e.srcEvent.preventDefault()
                        };
                        for (var n = 0; n < i.length;) i[n](e), n++
                    }
                },
                destroy: function () {
                    this.element && pt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                }
            }, dt(ut, {
                INPUT_START: Ct,
                INPUT_MOVE: Lt,
                INPUT_END: Nt,
                INPUT_CANCEL: Ot,
                STATE_POSSIBLE: le,
                STATE_BEGAN: pe,
                STATE_CHANGED: fe,
                STATE_ENDED: de,
                STATE_RECOGNIZED: me,
                STATE_CANCELLED: ve,
                STATE_FAILED: 32,
                DIRECTION_NONE: Rt,
                DIRECTION_LEFT: It,
                DIRECTION_RIGHT: Dt,
                DIRECTION_UP: kt,
                DIRECTION_DOWN: zt,
                DIRECTION_HORIZONTAL: Ut,
                DIRECTION_VERTICAL: Ft,
                DIRECTION_ALL: Bt,
                Manager: lt,
                Input: P,
                TouchAction: J,
                TouchInput: H,
                MouseInput: G,
                PointerEventInput: j,
                TouchMouseInput: q,
                SingleTouchInput: V,
                Recognizer: K,
                AttrRecognizer: nt,
                Tap: ct,
                Pan: rt,
                Swipe: ht,
                Pinch: ot,
                Rotate: st,
                Press: at,
                on: v,
                off: g,
                each: u,
                merge: wt,
                extend: bt,
                assign: dt,
                inherit: p,
                bindFn: f,
                prefixed: T
            }), (void 0 !== r ? r : "undefined" != typeof self ? self : {}).Hammer = ut, (n = function () {
                return ut
            }.call(e, i, e, t)) !== s && (t.exports = n)
        }(window, document)
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
            return Array.from(t)
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            s = i(2),
            h = i(51),
            c = n(h),
            u = i(0),
            l = n(u),
            p = i(1),
            f = function () {
                function t(e) {
                    o(this, t), this.$el = e, this.$refs = {
                        title: (0, p.qs)("h1, h2", this.$el),
                        content: (0, p.qs)(".panel__content", this.$el),
                        contentEnd: [].concat(r((0, p.qsa)(".panel-end__content, .panel-end__share, .panel-end__footer", this.$el)))
                    }, this.name = this.$el.dataset.panel, this.isActive = this.$el.classList.contains("is-active"), this.isGrid = this.$el.classList.contains("panel--grid"), this.isGrid && (this.splitTitle = new c.default(this.$refs.title, {
                        type: "chars,lines"
                    }), this.splitContent = new c.default(this.$refs.content, {
                        type: "words,lines"
                    })), this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceMove = this.onDeviceMove.bind(this), this.bind()
                }

                return a(t, [{
                    key: "bind",
                    value: function () {
                        l.default.on(l.default.MOUSE_MOVE, this.onMouseMove), l.default.on(l.default.DEVICE_MOVE, this.onDeviceMove)
                    }
                }, {
                    key: "in",
                    value: function () {
                        var t = new s.TimelineMax;
                        switch (t.add("start"), t.delay(window.EVS_FALLBACK ? 0 : 2), this.name) {
                            case "home":
                                t.fromTo(this.$refs.title, 1.5, {
                                    autoAlpha: 0
                                }, {
                                    autoAlpha: 1,
                                    ease: s.Power4.easeOut
                                }, "start");
                                break;
                            case "end":
                                t.fromTo(this.$refs.title, 2.5, {
                                    autoAlpha: 0
                                }, {
                                    autoAlpha: 1,
                                    ease: s.Power4.easeInOut
                                }, "start+=0.5"), t.fromTo(this.$refs.contentEnd, 2.5, {
                                    autoAlpha: 0
                                }, {
                                    autoAlpha: 1,
                                    ease: s.Power4.easeInOut
                                }, "start+=0.5");
                                break;
                            default:
                                t.set([this.$refs.title, this.$refs.content], {
                                    autoAlpha: 1
                                }).staggerFromTo(this.splitTitle.chars, 1.25, {
                                    autoAlpha: 0,
                                    x: 40
                                }, {
                                    autoAlpha: 1,
                                    x: 0,
                                    ease: s.Power4.easeInOut
                                }, .03, "start");
                                for (var e = this.splitContent.words.length, i = 0; i < e; i++) t.fromTo(this.splitContent.words[i], .5, {
                                    autoAlpha: 0,
                                    scale: .5,
                                    x: 5
                                }, {
                                    autoAlpha: 1,
                                    scale: 1,
                                    x: 0,
                                    ease: s.Power4.easeOut
                                }, .75 + .5 * Math.random())
                        }
                        return t
                    }
                }, {
                    key: "out",
                    value: function () {
                        var t = new s.TimelineMax;
                        switch (t.add("start"), this.name) {
                            case "home":
                            case "end":
                                t.to(this.$refs.title, 1.5, {
                                    autoAlpha: 0,
                                    ease: s.Power4.easeOut
                                }, "start");
                                break;
                            default:
                                t.staggerFromTo(this.splitTitle.chars, 1.25, {
                                    autoAlpha: 1,
                                    x: -0,
                                    ease: s.Power4.easeInOut
                                }, {
                                    autoAlpha: 0,
                                    x: -40,
                                    ease: s.Power4.easeInOut
                                }, .03, "start")
                        }
                        if (this.isGrid)
                            for (var e = this.splitContent.words.length, i = 0; i < e; i++) t.fromTo(this.splitContent.words[i], .5, {
                                autoAlpha: 1,
                                scale: 1,
                                x: 0
                            }, {
                                autoAlpha: 0,
                                scale: .5,
                                x: -5,
                                ease: s.Power4.easeOut
                            }, .5 * Math.random());
                        return "end" === this.name && t.fromTo(this.$refs.contentEnd, 1, {
                            autoAlpha: 1
                        }, {
                            autoAlpha: 0,
                            ease: s.Power4.easeOut
                        }, "start"), t
                    }
                }, {
                    key: "activate",
                    value: function () {
                        this.$el.classList.add("is-active"), this.isActive = !0
                    }
                }, {
                    key: "deactivate",
                    value: function () {
                        this.$el.classList.remove("is-active"), this.isActive = !1
                    }
                }, {
                    key: "clean",
                    value: function () {
                        s.TweenMax.set(this.$el, {
                            clearProps: "all"
                        })
                    }
                }, {
                    key: "onMouseMove",
                    value: function (t, e) {
                        this.move(35 * -t, 35 * -e, 15 * -e, 15 * -t)
                    }
                }, {
                    key: "onDeviceMove",
                    value: function (t, e) {
                        this.move(10 * -t, 10 * -e, 5 * -e, 5 * -t)
                    }
                }, {
                    key: "move",
                    value: function (t, e, i, n) {
                        this.isActive && this.isGrid && !window.EVS_FALLBACK && s.TweenMax.to(this.$el, 2, {
                            rotationX: i,
                            rotationY: n,
                            x: t,
                            y: e,
                            ease: s.Power2.easeOut
                        })
                    }
                }]), t
            }();
        e.default = f
    },
    function (t, e, i) {
        "use strict";
        (function (i) {
            var n, r, o, a = void 0 !== t && t.exports && void 0 !== i ? i : window;
            !function (t) {
                var e = t.GreenSockGlobals || t,
                    i = function (t) {
                        var i, n = t.split("."),
                            r = e;
                        for (i = 0; i < n.length; i++) r[n[i]] = r = r[n[i]] || {};
                        return r
                    }("com.greensock.utils"),
                    n = function t(e) {
                        var i = e.nodeType,
                            n = "";
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += t(e)
                        } else if (3 === i || 4 === i) return e.nodeValue;
                        return n
                    },
                    r = document,
                    o = r.defaultView ? r.defaultView.getComputedStyle : function () {
                    },
                    a = /([A-Z])/g,
                    s = function (t, e, i, n) {
                        var r;
                        return (i = i || o(t, null)) ? (t = i.getPropertyValue(e.replace(a, "-$1").toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), n ? r : parseInt(r, 10) || 0
                    },
                    h = function (t) {
                        return !!(t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
                    },
                    c = function (t) {
                        var e, i, n, r = [],
                            o = t.length;
                        for (e = 0; e < o; e++)
                            if (i = t[e], h(i))
                                for (n = i.length, n = 0; n < i.length; n++) r.push(i[n]);
                            else r.push(i);
                        return r
                    },
                    u = /(?:\r|\n|\t\t)/g,
                    l = /(?:\s\s+)/g,
                    p = function (t) {
                        return (t.charCodeAt(0) - 55296 << 10) + (t.charCodeAt(1) - 56320) + 65536
                    },
                    f = r.all && !r.addEventListener,
                    d = " style='position:relative;display:inline-block;" + (f ? "*display:inline;*zoom:1;'" : "'"),
                    m = function (t, e) {
                        t = t || "";
                        var i = -1 !== t.indexOf("++"),
                            n = 1;
                        return i && (t = t.split("++").join("")),
                            function () {
                                return "<" + e + d + (t ? " class='" + t + (i ? n++ : "") + "'>" : ">")
                            }
                    },
                    v = i.SplitText = e.SplitText = function (t, e) {
                        if ("string" == typeof t && (t = v.selector(t)), !t) throw "cannot split a null element.";
                        this.elements = h(t) ? c(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
                    },
                    g = function t(e, i, n) {
                        var r = e.nodeType;
                        if (1 === r || 9 === r || 11 === r)
                            for (e = e.firstChild; e; e = e.nextSibling) t(e, i, n);
                        else 3 !== r && 4 !== r || (e.nodeValue = e.nodeValue.split(i).join(n))
                    },
                    y = function (t, e) {
                        for (var i = e.length; --i > -1;) t.push(e[i])
                    },
                    _ = function (t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++])) ;
                        return i
                    },
                    x = function (t, e, i) {
                        for (var n; t && t !== e;) {
                            if (n = t._next || t.nextSibling) return n.textContent.charAt(0) === i;
                            t = t.parentNode || t._parent
                        }
                        return !1
                    },
                    b = function t(e) {
                        var i, n, r = _(e.childNodes),
                            o = r.length;
                        for (i = 0; i < o; i++) n = r[i], n._isSplit ? t(n) : (i && 3 === n.previousSibling.nodeType ? n.previousSibling.nodeValue += 3 === n.nodeType ? n.nodeValue : n.firstChild.nodeValue : 3 !== n.nodeType && e.insertBefore(n.firstChild, n), e.removeChild(n))
                    },
                    w = function (t, e, i, n, a, h, c) {
                        var u, l, p, f, d, m, v, _, w, M, T, S, A = o(t),
                            P = s(t, "paddingLeft", A),
                            E = -999,
                            C = s(t, "borderBottomWidth", A) + s(t, "borderTopWidth", A),
                            L = s(t, "borderLeftWidth", A) + s(t, "borderRightWidth", A),
                            N = s(t, "paddingTop", A) + s(t, "paddingBottom", A),
                            O = s(t, "paddingLeft", A) + s(t, "paddingRight", A),
                            R = .2 * s(t, "fontSize"),
                            I = s(t, "textAlign", A, !0),
                            D = [],
                            k = [],
                            z = [],
                            U = e.wordDelimiter || " ",
                            F = e.span ? "span" : "div",
                            B = e.type || e.split || "chars,words,lines",
                            G = a && -1 !== B.indexOf("lines") ? [] : null,
                            j = -1 !== B.indexOf("words"),
                            V = -1 !== B.indexOf("chars"),
                            W = "absolute" === e.position || !0 === e.absolute,
                            H = e.linesClass,
                            X = -1 !== (H || "").indexOf("++"),
                            q = [];
                        for (G && 1 === t.children.length && t.children[0]._isSplit && (t = t.children[0]), X && (H = H.split("++").join("")), l = t.getElementsByTagName("*"), p = l.length, d = [], u = 0; u < p; u++) d[u] = l[u];
                        if (G || W)
                            for (u = 0; u < p; u++) f = d[u], ((m = f.parentNode === t) || W || V && !j) && (S = f.offsetTop, G && m && Math.abs(S - E) > R && "BR" !== f.nodeName && (v = [], G.push(v), E = S), W && (f._x = f.offsetLeft, f._y = S, f._w = f.offsetWidth, f._h = f.offsetHeight), G && ((f._isSplit && m || !V && m || j && m || !j && f.parentNode.parentNode === t && !f.parentNode._isSplit) && (v.push(f), f._x -= P, x(f, t, U) && (f._wordEnd = !0)), "BR" === f.nodeName && f.nextSibling && "BR" === f.nextSibling.nodeName && G.push([])));
                        for (u = 0; u < p; u++) f = d[u], m = f.parentNode === t, "BR" !== f.nodeName ? (W && (w = f.style, j || m || (f._x += f.parentNode._x, f._y += f.parentNode._y), w.left = f._x + "px", w.top = f._y + "px", w.position = "absolute", w.display = "block", w.width = f._w + 1 + "px", w.height = f._h + "px"), !j && V ? f._isSplit ? (f._next = f.nextSibling, f.parentNode.appendChild(f)) : f.parentNode._isSplit ? (f._parent = f.parentNode, !f.previousSibling && f.firstChild && (f.firstChild._isFirst = !0), f.nextSibling && " " === f.nextSibling.textContent && !f.nextSibling.nextSibling && q.push(f.nextSibling), f._next = f.nextSibling && f.nextSibling._isFirst ? null : f.nextSibling, f.parentNode.removeChild(f), d.splice(u--, 1), p--) : m || (S = !f.nextSibling && x(f.parentNode, t, U), f.parentNode._parent && f.parentNode._parent.appendChild(f), S && f.parentNode.appendChild(r.createTextNode(" ")), e.span && (f.style.display = "inline"), D.push(f)) : f.parentNode._isSplit && !f._isSplit && "" !== f.innerHTML ? k.push(f) : V && !f._isSplit && (e.span && (f.style.display = "inline"), D.push(f))) : G || W ? (f.parentNode && f.parentNode.removeChild(f), d.splice(u--, 1), p--) : j || t.appendChild(f);
                        for (u = q.length; --u > -1;) q[u].parentNode.removeChild(q[u]);
                        if (G) {
                            for (W && (M = r.createElement(F), t.appendChild(M), T = M.offsetWidth + "px", S = M.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(M)), w = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                            for (_ = " " === U && (!W || !j && !V), u = 0; u < G.length; u++) {
                                for (v = G[u], M = r.createElement(F), M.style.cssText = "display:block;text-align:" + I + ";position:" + (W ? "absolute;" : "relative;"), H && (M.className = H + (X ? u + 1 : "")), z.push(M), p = v.length, l = 0; l < p; l++) "BR" !== v[l].nodeName && (f = v[l], M.appendChild(f), _ && f._wordEnd && M.appendChild(r.createTextNode(" ")), W && (0 === l && (M.style.top = f._y + "px", M.style.left = P + S + "px"), f.style.top = "0px", S && (f.style.left = f._x - S + "px")));
                                0 === p ? M.innerHTML = "&nbsp;" : j || V || (b(M), g(M, String.fromCharCode(160), " ")), W && (M.style.width = T, M.style.height = f._h + "px"), t.appendChild(M)
                            }
                            t.style.cssText = w
                        }
                        W && (c > t.clientHeight && (t.style.height = c - N + "px", t.clientHeight < c && (t.style.height = c + C + "px")), h > t.clientWidth && (t.style.width = h - O + "px", t.clientWidth < h && (t.style.width = h + L + "px"))), y(i, D), y(n, k), y(a, z)
                    },
                    M = function (t, e, i, o) {
                        var a, s, h, c, f, d, m, v, y, _ = e.span ? "span" : "div",
                            x = e.type || e.split || "chars,words,lines",
                            b = (x.indexOf("words"), -1 !== x.indexOf("chars")),
                            w = "absolute" === e.position || !0 === e.absolute,
                            M = e.wordDelimiter || " ",
                            T = " " !== M ? "" : w ? "&#173; " : " ",
                            S = e.span ? "</span>" : "</div>",
                            A = !0,
                            P = r.createElement("div"),
                            E = t.parentNode;
                        for (E.insertBefore(P, t), P.textContent = t.nodeValue, E.removeChild(t), t = P, a = n(t), m = -1 !== a.indexOf("<"), !1 !== e.reduceWhiteSpace && (a = a.replace(l, " ").replace(u, "")), m && (a = a.split("<").join("{{LT}}")), f = a.length, s = (" " === a.charAt(0) ? T : "") + i(), h = 0; h < f; h++)
                            if ((d = a.charAt(h)) === M && a.charAt(h - 1) !== M && h) {
                                for (s += A ? S : "", A = !1; a.charAt(h + 1) === M;) s += T, h++;
                                h === f - 1 ? s += T : ")" !== a.charAt(h + 1) && (s += T + i(), A = !0)
                            } else "{" === d && "{{LT}}" === a.substr(h, 6) ? (s += b ? o() + "{{LT}}</" + _ + ">" : "{{LT}}", h += 5) : d.charCodeAt(0) >= 55296 && d.charCodeAt(0) <= 56319 || a.charCodeAt(h + 1) >= 65024 && a.charCodeAt(h + 1) <= 65039 ? (v = p(a.substr(h, 2)), y = p(a.substr(h + 2, 2)), c = v >= 127462 && v <= 127487 && y >= 127462 && y <= 127487 || y >= 127995 && y <= 127999 ? 4 : 2, s += b && " " !== d ? o() + a.substr(h, c) + "</" + _ + ">" : a.substr(h, c), h += c - 1) : s += b && " " !== d ? o() + d + "</" + _ + ">" : d;
                        t.outerHTML = s + (A ? S : ""), m && g(E, "{{LT}}", "<")
                    },
                    T = function t(e, i, n, r) {
                        var o, a, h = _(e.childNodes),
                            c = h.length,
                            u = "absolute" === i.position || !0 === i.absolute;
                        if (3 !== e.nodeType || c > 1) {
                            for (i.absolute = !1, o = 0; o < c; o++) a = h[o], (3 !== a.nodeType || /\S+/.test(a.nodeValue)) && (u && 3 !== a.nodeType && "inline" === s(a, "display", null, !0) && (a.style.display = "inline-block", a.style.position = "relative"), a._isSplit = !0, t(a, i, n, r));
                            return i.absolute = u, void(e._isSplit = !0)
                        }
                        M(e, i, n, r)
                    },
                    S = v.prototype;
                S.split = function (t) {
                    this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                    for (var e, i, n, r = this.elements.length, o = t.span ? "span" : "div", a = ("absolute" === t.position || t.absolute, m(t.wordsClass, o)), s = m(t.charsClass, o); --r > -1;) n = this.elements[r], this._originals[r] = n.innerHTML, e = n.clientHeight, i = n.clientWidth, T(n, t, a, s), w(n, t, this.chars, this.words, this.lines, i, e);
                    return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
                }, S.revert = function () {
                    if (!this._originals) throw "revert() call wasn't scoped properly.";
                    for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
                    return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
                }, v.selector = t.$ || t.jQuery || function (e) {
                    var i = t.$ || t.jQuery;
                    return i ? (v.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                }, v.version = "0.5.7"
            }(a),
                function (i) {
                    var s = function () {
                        return (a.GreenSockGlobals || a).SplitText
                    };
                    void 0 !== t && t.exports ? t.exports = s() : (r = [], n = s, void 0 !== (o = "function" == typeof n ? n.apply(e, r) : n) && (t.exports = o))
                }()
        }).call(e, i(4))
    },
    function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            o = i(2),
            a = i(1),
            s = function () {
                function t(e) {
                    n(this, t), this.max = e, this.current = 1, this.init()
                }

                return r(t, [{
                    key: "init",
                    value: function () {
                        this.$el = document.createElement("div"), this.$el.classList.add("pagination"), this.$el.innerHTML = '<div class="pagination__current-outer">\n      <div class="pagination__current-inner">\n        <div class="pagination__prev">\n          ' + (this.current - 1) + '\n        </div>\n        <div class="pagination__current">\n          ' + this.current + '\n        </div>\n        <div class="pagination__next">\n          ' + (this.current + 1) + '\n        </div>\n      </div>\n    </div>\n    <div class="pagination__max">\n      ' + this.max + "\n    </div>", this.$refs = {
                            inner: (0, a.qs)(".pagination__current-inner", this.$el),
                            prev: (0, a.qs)(".pagination__prev", this.$el),
                            current: (0, a.qs)(".pagination__current", this.$el),
                            next: (0, a.qs)(".pagination__next", this.$el)
                        }, document.body.appendChild(this.$el), this.height = this.$refs.current.offsetHeight, o.TweenMax.set(this.$el, {
                            y: -this.height * this.max / 2
                        })
                    }
                }, {
                    key: "jump",
                    value: function (t, e, i) {
                        var n = this,
                            r = t > this.current - 1 ? "+=" + this.height : "-=" + this.height,
                            a = t > this.current - 1 ? "-=" + this.height : "+=" + this.height,
                            s = new o.TimelineLite({
                                onComplete: function () {
                                    n.current = t + 1, n.$refs.current.textContent = n.current, o.TweenMax.set(n.$refs.inner, {
                                        clearProps: "y"
                                    }), n.$refs.prev.textContent = n.current - 1, n.$refs.next.textContent = n.current + 1
                                }
                            }),
                            h = 1.25;
                        (window.EVS_FALLBACK || "end" === e || "end" === i) && (h = 0), s.add("start").delay(h).to(this.$el, 1, {
                            y: r,
                            ease: o.Power4.easeInOut
                        }, "start").to(this.$refs.inner, 1, {
                            y: a,
                            ease: o.Power4.easeInOut
                        }, "start")
                    }
                }]), t
            }();
        e.default = s
    },
    function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            o = i(0),
            a = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(o),
            s = function () {
                function t(e) {
                    n(this, t), this.$el = e, this.isVisible = !1, this.onChange = this.onChange.bind(this), this.init()
                }

                return r(t, [{
                    key: "init",
                    value: function () {
                        this.bind()
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.unbind()
                    }
                }, {
                    key: "bind",
                    value: function () {
                        a.default.on(a.default.PANEL_CHANGE, this.onChange)
                    }
                }, {
                    key: "unbind",
                    value: function () {
                        a.default.off(a.default.PANEL_CHANGE, this.onChange)
                    }
                }, {
                    key: "onChange",
                    value: function (t, e) {
                        clearTimeout(this.t), 0 === e ? this.t = setTimeout(this.show.bind(this, !0), 1e4) : (this.hide(), e < 5 && (this.t = setTimeout(this.show.bind(this), 1e4)))
                    }
                }, {
                    key: "show",
                    value: function () {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.$el.classList.add("is-home"), this.$el.classList.remove("is-hidden")
                    }
                }, {
                    key: "hide",
                    value: function () {
                        var t = this;
                        this.$el.classList.add("is-hidden"), setTimeout(function () {
                            t.$el.classList.remove("is-home")
                        }, 500)
                    }
                }]), t
            }();
        e.default = s
    },
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
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = i(2),
            s = i(1),
            h = i(0),
            c = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(h),
            u = function () {
                function t(e) {
                    r(this, t), this.$el = e, this.$refs = {
                        title: (0, s.qs)(".panel-home__title", this.$el),
                        live: (0, s.qs)(".panel-home__title__live", this.$el),
                        liveSplit: [].concat(n((0, s.qsa)(".panel-home__title__live .panel-home__title__split", this.$el))),
                        life: (0, s.qs)(".panel-home__title__life", this.$el),
                        lifeSplit: [].concat(n((0, s.qsa)(".panel-home__title__life .panel-home__title__split", this.$el))),
                        letter: (0, s.qs)(".panel-home__title__life__letter", this.$el),
                        better: (0, s.qs)(".panel-home__title__better", this.$el)
                    }, this.betterWidth = this.$refs.better.offsetWidth, this.letterWidth = this.$refs.letter.offsetWidth, this.letterHeight = this.$refs.letter.offsetHeight, this.liveWidth = this.$refs.live.offsetWidth, this.lifeWidth = this.$refs.life.offsetWidth, this.onReady = this.onReady.bind(this), this.init()
                }

                return o(t, [{
                    key: "init",
                    value: function () {
                        this.$refs.better.innerHTML = "<span>" + this.$refs.better.textContent + "</span>", this.$refs.better.style.width = this.betterWidth + "px", this.$refs.betterInner = (0, s.qs)("span", this.$refs.better), a.TweenMax.set(this.$refs.betterInner, {
                            width: 0
                        }), this.$refs.life.style.width = this.lifeWidth + "px", this.$refs.letter.innerHTML = "<span>f</span><span>v</span>", this.$refs.letter.style.width = this.letterWidth + "px", this.$refs.letter.style.height = this.letterHeight + "px", this.$refs.f = (0, s.qs)("span:first-child", this.$refs.letter), this.$refs.v = (0, s.qs)("span:last-child", this.$refs.letter), a.TweenMax.set(this.$refs.f, {
                            opacity: 0
                        }), this.start()
                    }
                }, {
                    key: "bind",
                    value: function () {
                        c.default.on(c.default.HOME_READY, this.onReady)
                    }
                }, {
                    key: "onReady",
                    value: function () {
                        this.start()
                    }
                }, {
                    key: "start",
                    value: function () {
                        var t = this;
                        new a.TimelineMax({
                            onComplete: function () {
                                t.loop()
                            }
                        }).add("start").to(this.$refs.title, 2, {
                            autoAlpha: 1,
                            ease: a.Power4.easeOut
                        }).add("split").staggerTo(this.$refs.liveSplit, 2.5, {
                            yPercent: -100,
                            ease: a.Power4.easeInOut
                        }, .1, "split").staggerTo(this.$refs.lifeSplit, 2.5, {
                            yPercent: 85,
                            ease: a.Power4.easeInOut
                        }, .1, "split").to(this.$refs.betterInner, 1, {
                            width: this.betterWidth,
                            ease: a.Power4.easeInOut
                        }, "split+=1.75")
                    }
                }, {
                    key: "loop",
                    value: function () {
                        new a.TimelineMax({
                            repeat: -1,
                            repeatDelay: 3,
                            yoyo: !0
                        }).add("glitch").to(this.$refs.v, .15, {
                            opacity: 0,
                            ease: a.Power4.easeInOut
                        }, "glitch").to(this.$refs.f, .05, {
                            opacity: 1,
                            x: 1,
                            ease: a.Power4.easeInOut
                        }, "glitch").to(this.$refs.f, .05, {
                            className: "+=has-shadow",
                            y: 1,
                            scale: 1.1
                        }).to(this.$refs.f, .1, {
                            x: 0,
                            ease: a.Power4.easeInOut
                        }).to(this.$refs.f, .05, {
                            opacity: 0,
                            ease: a.Power4.easeInOut
                        }).to(this.$refs.f, .05, {
                            opacity: 1,
                            scale: 1,
                            ease: a.Power4.easeInOut
                        }).to(this.$refs.f, .05, {
                            className: "-=has-shadow"
                        }).to(this.$refs.f, .1, {
                            y: 0,
                            ease: a.Power4.easeInOut
                        })
                    }
                }]), t
            }();
        e.default = u
    },
    function (t, e, i) {
        "use strict";
        (function (t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function () {
                    function t(t, e) {
                        var i = [],
                            n = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done) && (i.push(a.value), !e || i.length !== e); n = !0) ;
                        } catch (t) {
                            r = !0, o = t
                        } finally {
                            try {
                                !n && s.return && s.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                        return i
                    }

                    return function (e, i) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e)) return t(e, i);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                a = function () {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    return function (e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(),
                s = i(2),
                h = i(56),
                c = n(h),
                u = i(58),
                l = n(u),
                p = i(1),
                f = i(0),
                d = n(f),
                m = function () {
                    function e(t) {
                        r(this, e), this.$el = t, this.isMuted = !1, this.hasFallback = !1, this.onClick = this.onClick.bind(this), this.onChange = this.onChange.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.init()
                    }

                    return a(e, [{
                        key: "init",
                        value: function () {
                            var t = this;
                            this.muteAnim = new s.TimelineMax({
                                paused: !0,
                                onComplete: function () {
                                    s.TweenMax.set(".cross-left, .cross-right", {
                                        autoAlpha: 0
                                    }), s.TweenMax.set(".wave-left, .wave-right", {
                                        autoAlpha: 1
                                    }), t.pulseAnim.restart()
                                }
                            }), this.muteAnim.add("start").to(l.default.convertToPath("#crossLeft"), 1, {
                                morphSVG: "#waveLeft",
                                ease: s.Power4.easeInOut
                            }, "start").to(l.default.convertToPath("#crossRight"), 1, {
                                morphSVG: "#waveRight",
                                ease: s.Power4.easeInOut
                            }, "start"), this.pulseAnim = new s.TimelineMax({
                                delay: .5,
                                repeatDelay: .8,
                                repeat: -1,
                                paused: !0
                            }), this.pulseAnim.add("up").to("#waveLeft", .4, {
                                xPercent: 10,
                                scaleX: 1.2,
                                scaleY: 1.1,
                                ease: s.Back.easeInOut
                            }, "up").to("#waveRight", .4, {
                                xPercent: 10,
                                scaleX: 1.2,
                                scaleY: 1.1,
                                ease: s.Back.easeInOut
                            }, "up").add("down").to("#waveLeft", .3, {
                                xPercent: 0,
                                scale: 1,
                                ease: s.Back.easeInOut
                            }, "down").to("#waveRight", .3, {
                                xPercent: 0,
                                scale: 1,
                                ease: s.Back.easeInOut
                            }, "down"), Modernizr.webaudio ? this.load() : this.fallback(), this.bind()
                        }
                    }, {
                        key: "load",
                        value: function () {
                            var i = this;
                            Promise.all([e.loadSound(), e.loadEffect()]).then(function (e) {
                                var n = o(e, 2);
                                i.audio = n[0], i.convolver = n[1], t.debug && (i.audio.volume = 0), i.audio.attack = 1, i.audio.release = 1, i.audio.loop = !0, i.lowPassFilter = new c.default.Effects.LowPassFilter({
                                    frequency: 22050,
                                    peak: 10
                                }), i.stereo = new c.default.Effects.StereoPanner({
                                    pan: 0
                                }), i.audio.addEffect(i.convolver), i.audio.addEffect(i.lowPassFilter), i.audio.addEffect(i.stereo), i.audio.play(), i.pulseAnim.play()
                            })
                        }
                    }, {
                        key: "fallback",
                        value: function () {
                            var t = this;
                            this.hasFallback = !0, this.audio = new Audio("assets/media/sharks.mp3"), this.audio.loop = !0;
                            var e = this.audio.play();
                            void 0 !== e && e.then(function () {
                                t.pulseAnim.restart()
                            }).catch(function (e) {
                                t.mute()
                            })
                        }
                    }, {
                        key: "bind",
                        value: function () {
                            (0, p.$on)(this.$el, "click", this.onClick), this.hasFallback || (d.default.on(d.default.PANEL_CHANGE, this.onChange), d.default.on(d.default.MOUSE_MOVE, this.onMouseMove))
                        }
                    }, {
                        key: "onClick",
                        value: function () {
                            this.toggle()
                        }
                    }, {
                        key: "onChange",
                        value: function (t, e) {
                            (new s.TimelineMax).add("in").to(this.stereo, 1, {
                                pan: -.75,
                                ease: s.Power1.easeIn
                            }, "in").to(this.convolver, .75, {
                                mix: .5,
                                ease: s.Power1.easeIn
                            }, "in").to(this.lowPassFilter, .75, {
                                frequency: 200,
                                ease: s.Power1.easeIn
                            }, "in").add("out", "+=1.5").to(this.stereo, .5, {
                                pan: .75,
                                ease: s.Power1.easeIn
                            }, "out").to(this.convolver, 1.875, {
                                mix: 0,
                                ease: s.Power4.easeIn
                            }, "out").to(this.lowPassFilter, 1.875, {
                                frequency: 22050,
                                ease: s.Power4.easeIn
                            }, "out").to(this.stereo, 1, {
                                pan: 0,
                                ease: s.Power1.easeOut
                            }, "out+=1.5")
                        }
                    }, {
                        key: "onMouseMove",
                        value: function (t) {
                            this.hasFallback || s.TweenMax.to(this.stereo, 2, {
                                pan: 2 * t,
                                ease: s.Power1.easeOut
                            })
                        }
                    }, {
                        key: "toggle",
                        value: function () {
                            this.isMuted ? this.unmute() : this.mute()
                        }
                    }, {
                        key: "mute",
                        value: function () {
                            s.TweenMax.set("#crossLeft, #crossRight", {
                                autoAlpha: 1
                            }), s.TweenMax.set("#waveLeft, #waveRight", {
                                autoAlpha: 0
                            }), this.muteAnim.reverse(0), this.hasFallback ? this.audio.muted = !0 : this.audio.stop(), this.isMuted = !0
                        }
                    }, {
                        key: "unmute",
                        value: function () {
                            this.muteAnim.play(0), this.hasFallback ? (this.audio.paused && this.audio.play(), this.audio.muted = !1) : this.audio.play(), this.isMuted = !1
                        }
                    }, {
                        key: "pulse",
                        value: function () {
                        }
                    }], [{
                        key: "loadSound",
                        value: function () {
                            return new Promise(function (t) {
                                var e = new c.default.Sound({
                                    source: "file",
                                    options: {
                                        path: "assets/media/loop.mp3"
                                    }
                                }, function () {
                                    t(e)
                                })
                            })
                        }
                    }, {
                        key: "loadEffect",
                        value: function () {
                            return new Promise(function (t) {
                                var e = new c.default.Effects.Convolver({
                                    impulse: "assets/media/impulse.wav",
                                    mix: 0
                                }, function () {
                                    t(e)
                                })
                            })
                        }
                    }]), e
                }();
            e.default = m
        }).call(e, i(4))
    },
    function (t, e, i) {
        (function (n) {
            var r, o, a;
            !function (n) {
                "use strict";

                function s(t, e) {
                    this.options = {}, t = t || this.options;
                    var i = {
                        frequency: 350,
                        peak: 1
                    };
                    this.inputNode = this.filterNode = l.context.createBiquadFilter(), this.filterNode.type = e, this.outputNode = u.context.createGain(), this.filterNode.connect(this.outputNode);
                    for (var n in i) this[n] = t[n], this[n] = void 0 === this[n] || null === this[n] ? i[n] : this[n]
                }

                function h() {
                    var t, e, i = l.context.sampleRate * this.time,
                        n = u.context.createBuffer(2, i, l.context.sampleRate),
                        r = n.getChannelData(0),
                        o = n.getChannelData(1);
                    for (e = 0; i > e; e++) t = this.reverse ? i - e : e, r[e] = (2 * Math.random() - 1) * Math.pow(1 - t / i, this.decay), o[e] = (2 * Math.random() - 1) * Math.pow(1 - t / i, this.decay);
                    this.reverbNode.buffer = n
                }

                function c(t) {
                    for (var e = l.context.sampleRate, i = new Float32Array(e), n = Math.PI / 180, r = 0; e > r; r++) {
                        var o = 2 * r / e - 1;
                        i[r] = (3 + t) * o * 20 * n / (Math.PI + t * Math.abs(o))
                    }
                    return i
                }

                var u = {},
                    l = u,
                    p = "object" == typeof t && t.exports,
                    f = i(57);
                p ? t.exports = u : f ? (o = [], r = u, void 0 !== (a = "function" == typeof r ? r.apply(e, o) : r) && (t.exports = a)) : n.Pizzicato = n.Pz = u;
                var d = n.AudioContext || n.webkitAudioContext;
                if (d) {
                    u.context = new d;
                    var m = u.context.createGain();
                    m.connect(u.context.destination), u.Util = {
                        isString: function (t) {
                            return "[object String]" === toString.call(t)
                        },
                        isObject: function (t) {
                            return "[object Object]" === toString.call(t)
                        },
                        isFunction: function (t) {
                            return "[object Function]" === toString.call(t)
                        },
                        isNumber: function (t) {
                            return "[object Number]" === toString.call(t) && t === +t
                        },
                        isArray: function (t) {
                            return "[object Array]" === toString.call(t)
                        },
                        isInRange: function (t, e, i) {
                            return !!(l.Util.isNumber(t) && l.Util.isNumber(e) && l.Util.isNumber(i)) && (t >= e && i >= t)
                        },
                        isBool: function (t) {
                            return "boolean" == typeof t
                        },
                        isOscillator: function (t) {
                            return t && "[object OscillatorNode]" === t.toString()
                        },
                        isAudioBufferSourceNode: function (t) {
                            return t && "[object AudioBufferSourceNode]" === t.toString()
                        },
                        isSound: function (t) {
                            return t instanceof l.Sound
                        },
                        isEffect: function (t) {
                            for (var e in u.Effects)
                                if (t instanceof u.Effects[e]) return !0;
                            return !1
                        },
                        normalize: function (t, e, i) {
                            return l.Util.isNumber(t) && l.Util.isNumber(e) && l.Util.isNumber(i) ? (i - e) * t / 1 + e : void 0
                        },
                        getDryLevel: function (t) {
                            return !l.Util.isNumber(t) || t > 1 || 0 > t ? 0 : .5 >= t ? 1 : 1 - 2 * (t - .5)
                        },
                        getWetLevel: function (t) {
                            return !l.Util.isNumber(t) || t > 1 || 0 > t ? 0 : t >= .5 ? 1 : 1 - 2 * (.5 - t)
                        }
                    };
                    var v = u.context.createGain(),
                        g = Object.getPrototypeOf(Object.getPrototypeOf(v)),
                        y = g.connect;
                    g.connect = function (t) {
                        var e = l.Util.isEffect(t) ? t.inputNode : t;
                        return y.call(this, e), t
                    }, Object.defineProperty(u, "volume", {
                        enumerable: !0,
                        get: function () {
                            return m.gain.value
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && m && (m.gain.value = t)
                        }
                    }), Object.defineProperty(u, "masterGainNode", {
                        enumerable: !1,
                        get: function () {
                            return m
                        },
                        set: function (t) {
                        }
                    }), u.Events = {
                        on: function (t, e, i) {
                            if (t && e) {
                                this._events = this._events || {};
                                (this._events[t] || (this._events[t] = [])).push({
                                    callback: e,
                                    context: i || this,
                                    handler: this
                                })
                            }
                        },
                        trigger: function (t) {
                            if (t) {
                                var e, i, n, r;
                                if (this._events = this._events || {}, e = this._events[t] || (this._events[t] = [])) {
                                    for (i = Math.max(0, arguments.length - 1), n = [], r = 0; i > r; r++) n[r] = arguments[r + 1];
                                    for (r = 0; r < e.length; r++) e[r].callback.apply(e[r].context, n)
                                }
                            }
                        },
                        off: function (t) {
                            t ? this._events[t] = void 0 : this._events = {}
                        }
                    }, u.Sound = function (t, e) {
                        function i(t, e) {
                            t = t || {}, this.getRawSourceNode = function () {
                                var e = this.sourceNode ? this.sourceNode.frequency.value : t.frequency,
                                    i = u.context.createOscillator();
                                return i.type = t.type || "sine", i.frequency.value = e || 440, i
                            }, this.sourceNode = this.getRawSourceNode(), this.sourceNode.gainSuccessor = l.context.createGain(), this.sourceNode.connect(this.sourceNode.gainSuccessor), h.isFunction(e) && e()
                        }

                        function n(t, e) {
                            t = h.isArray(t) ? t : [t];
                            var i = new XMLHttpRequest;
                            i.open("GET", t[0], !0), i.responseType = "arraybuffer", i.onload = function (i) {
                                u.context.decodeAudioData(i.target.response, function (t) {
                                    s.getRawSourceNode = function () {
                                        var e = u.context.createBufferSource();
                                        return e.loop = this.loop, e.buffer = t, e
                                    }, h.isFunction(e) && e()
                                }.bind(s), function (i) {
                                    return t.length > 1 ? (t.shift(), void n(t, e)) : (i = i || new Error("Error decoding audio file " + t[0]), void(h.isFunction(e) && e(i)))
                                }.bind(s))
                            }, i.onreadystatechange = function (t) {
                                4 === i.readyState && i.status
                            }, i.send()
                        }

                        function r(t, e) {
                            if (navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, navigator.getUserMedia || navigator.mediaDevices.getUserMedia) {
                                var i = function (t) {
                                        s.getRawSourceNode = function () {
                                            return u.context.createMediaStreamSource(t)
                                        }, h.isFunction(e) && e()
                                    }.bind(s),
                                    n = function (t) {
                                        h.isFunction(e) && e(t)
                                    };
                                navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({
                                    audio: !0
                                }).then(i).catch(n) : navigator.getUserMedia({
                                    audio: !0
                                }, i, n)
                            }
                        }

                        function o(t, e) {
                            var i = h.isFunction(t) ? t : t.audioFunction,
                                n = h.isObject(t) && t.bufferSize ? t.bufferSize : null;
                            if (!n) try {
                                u.context.createScriptProcessor()
                            } catch (t) {
                                n = 2048
                            }
                            this.getRawSourceNode = function () {
                                var t = u.context.createScriptProcessor(n, 1, 1);
                                return t.onaudioprocess = i, t
                            }
                        }

                        function a(t, e) {
                            this.getRawSourceNode = t.sound.getRawSourceNode, t.sound.sourceNode && l.Util.isOscillator(t.sound.sourceNode) && (this.sourceNode = this.getRawSourceNode(), this.frequency = t.sound.frequency)
                        }

                        var s = this,
                            h = u.Util,
                            c = function (t) {
                                var e = ["wave", "file", "input", "script", "sound"];
                                if (t && !h.isFunction(t) && !h.isString(t) && !h.isObject(t)) return "Description type not supported. Initialize a sound using an object, a function or a string.";
                                if (h.isObject(t)) {
                                    if (!h.isString(t.source) || -1 === e.indexOf(t.source)) return "Specified source not supported. Sources can be wave, file, input or script";
                                    if (!("file" !== t.source || t.options && t.options.path)) return "A path is needed for sounds with a file source";
                                    if (!("script" !== t.source || t.options && t.options.audioFunction)) return "An audio function is needed for sounds with a script source"
                                }
                            }(t),
                            p = h.isObject(t) && h.isObject(t.options);
                        if (c) throw new Error("Error initializing Pizzicato Sound: " + c);
                        this.detached = p && t.options.detached, this.masterVolume = u.context.createGain(), this.fadeNode = u.context.createGain(), this.fadeNode.gain.value = 0, this.detached || this.masterVolume.connect(u.masterGainNode), this.lastTimePlayed = 0, this.effects = [], this.effectConnectors = [], this.playing = this.paused = !1, this.loop = p && t.options.loop, this.attack = p && h.isNumber(t.options.attack) ? t.options.attack : .04, this.volume = p && h.isNumber(t.options.volume) ? t.options.volume : 1, p && h.isNumber(t.options.release) ? this.release = t.options.release : p && h.isNumber(t.options.sustain) ? this.release = t.options.sustain : this.release = .04, t ? h.isString(t) ? n.bind(this)(t, e) : h.isFunction(t) ? o.bind(this)(t, e) : "file" === t.source ? n.bind(this)(t.options.path, e) : "wave" === t.source ? i.bind(this)(t.options, e) : "input" === t.source ? r.bind(this)(t, e) : "script" === t.source ? o.bind(this)(t.options, e) : "sound" === t.source && a.bind(this)(t.options, e) : i.bind(this)({}, e)
                    }, u.Sound.prototype = Object.create(u.Events, {
                        play: {
                            enumerable: !0,
                            value: function (t, e) {
                                this.playing || (l.Util.isNumber(e) || (e = this.offsetTime || 0), l.Util.isNumber(t) || (t = 0), this.playing = !0, this.paused = !1, this.sourceNode = this.getSourceNode(), this.applyAttack(), l.Util.isFunction(this.sourceNode.start) && (this.lastTimePlayed = u.context.currentTime - e, this.sourceNode.start(l.context.currentTime + t, e)), this.trigger("play"))
                            }
                        },
                        stop: {
                            enumerable: !0,
                            value: function () {
                                (this.paused || this.playing) && (this.paused = this.playing = !1, this.stopWithRelease(), this.offsetTime = 0, this.trigger("stop"))
                            }
                        },
                        pause: {
                            enumerable: !0,
                            value: function () {
                                if (!this.paused && this.playing) {
                                    this.paused = !0, this.playing = !1, this.stopWithRelease();
                                    var t = l.context.currentTime - this.lastTimePlayed;
                                    this.sourceNode.buffer ? this.offsetTime = t % (this.sourceNode.buffer.length / l.context.sampleRate) : this.offsetTime = t, this.trigger("pause")
                                }
                            }
                        },
                        clone: {
                            enumerable: !0,
                            value: function () {
                                for (var t = new u.Sound({
                                    source: "sound",
                                    options: {
                                        loop: this.loop,
                                        attack: this.attack,
                                        release: this.release,
                                        volume: this.volume,
                                        sound: this
                                    }
                                }), e = 0; e < this.effects.length; e++) t.addEffect(this.effects[e]);
                                return t
                            }
                        },
                        onEnded: {
                            enumerable: !0,
                            value: function (t) {
                                return function () {
                                    this.sourceNode && this.sourceNode !== t || (this.playing && this.stop(), this.paused || this.trigger("end"))
                                }
                            }
                        },
                        addEffect: {
                            enumerable: !0,
                            value: function (t) {
                                if (!l.Util.isEffect(t)) return this;
                                this.effects.push(t);
                                var e = this.effectConnectors.length > 0 ? this.effectConnectors[this.effectConnectors.length - 1] : this.fadeNode;
                                e.disconnect(), e.connect(t);
                                var i = l.context.createGain();
                                return this.effectConnectors.push(i), t.connect(i), i.connect(this.masterVolume), this
                            }
                        },
                        removeEffect: {
                            enumerable: !0,
                            value: function (t) {
                                var e = this.effects.indexOf(t);
                                if (-1 === e) return this;
                                var i = this.playing;
                                i && this.pause();
                                var n = 0 === e ? this.fadeNode : this.effectConnectors[e - 1];
                                n.disconnect();
                                var r = this.effectConnectors[e];
                                r.disconnect(), t.disconnect(r), this.effectConnectors.splice(e, 1), this.effects.splice(e, 1);
                                var o;
                                return o = e > this.effects.length - 1 || 0 === this.effects.length ? this.masterVolume : this.effects[e], n.connect(o), i && this.play(), this
                            }
                        },
                        connect: {
                            enumerable: !0,
                            value: function (t) {
                                return this.masterVolume.connect(t), this
                            }
                        },
                        disconnect: {
                            enumerable: !0,
                            value: function (t) {
                                return this.masterVolume.disconnect(t), this
                            }
                        },
                        connectEffects: {
                            enumerable: !0,
                            value: function () {
                                for (var t = [], e = 0; e < this.effects.length; e++) {
                                    var i = e === this.effects.length - 1,
                                        n = i ? this.masterVolume : this.effects[e + 1].inputNode;
                                    t[e] = l.context.createGain(), this.effects[e].outputNode.disconnect(this.effectConnectors[e]), this.effects[e].outputNode.connect(n)
                                }
                            }
                        },
                        volume: {
                            enumerable: !0,
                            get: function () {
                                return this.masterVolume ? this.masterVolume.gain.value : void 0
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && this.masterVolume && (this.masterVolume.gain.value = t)
                            }
                        },
                        frequency: {
                            enumerable: !0,
                            get: function () {
                                return this.sourceNode && l.Util.isOscillator(this.sourceNode) ? this.sourceNode.frequency.value : null
                            },
                            set: function (t) {
                                this.sourceNode && l.Util.isOscillator(this.sourceNode) && (this.sourceNode.frequency.value = t)
                            }
                        },
                        sustain: {
                            enumerable: !0,
                            get: function () {
                                return this.release
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 10) && (this.release = t)
                            }
                        },
                        getSourceNode: {
                            enumerable: !0,
                            value: function () {
                                if (this.sourceNode) {
                                    var t = this.sourceNode;
                                    t.gainSuccessor.gain.setValueAtTime(t.gainSuccessor.gain.value, l.context.currentTime), t.gainSuccessor.gain.linearRampToValueAtTime(1e-4, l.context.currentTime + .2), setTimeout(function () {
                                        t.disconnect(), t.gainSuccessor.disconnect()
                                    }, 200)
                                }
                                var e = this.getRawSourceNode();
                                return e.gainSuccessor = l.context.createGain(), e.connect(e.gainSuccessor), e.gainSuccessor.connect(this.fadeNode), this.fadeNode.connect(this.getInputNode()), l.Util.isAudioBufferSourceNode(e) && (e.onended = this.onEnded(e).bind(this)), e
                            }
                        },
                        getInputNode: {
                            enumerable: !0,
                            value: function () {
                                return this.effects.length > 0 ? this.effects[0].inputNode : this.masterVolume
                            }
                        },
                        applyAttack: {
                            enumerable: !1,
                            value: function () {
                                if (this.fadeNode.gain.value, this.fadeNode.gain.cancelScheduledValues(l.context.currentTime), !this.attack) return void this.fadeNode.gain.setTargetAtTime(1, l.context.currentTime, .001);
                                var t = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
                                    e = this.attack;
                                t || (e = (1 - this.fadeNode.gain.value) * this.attack), this.fadeNode.gain.setTargetAtTime(1, l.context.currentTime, 2 * e)
                            }
                        },
                        stopWithRelease: {
                            enumerable: !1,
                            value: function (t) {
                                var e = this.sourceNode,
                                    i = function () {
                                        return l.Util.isFunction(e.stop) ? e.stop(0) : e.disconnect()
                                    };
                                if (this.fadeNode.gain.value, this.fadeNode.gain.cancelScheduledValues(l.context.currentTime), !this.release) return this.fadeNode.gain.setTargetAtTime(0, l.context.currentTime, .001), void i();
                                var n = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
                                    r = this.release;
                                n || (r = this.fadeNode.gain.value * this.release), this.fadeNode.gain.setTargetAtTime(1e-5, l.context.currentTime, r / 5), window.setTimeout(function () {
                                    i()
                                }, 1e3 * r)
                            }
                        }
                    }), u.Group = function (t) {
                        t = t || [], this.mergeGainNode = l.context.createGain(), this.masterVolume = l.context.createGain(), this.sounds = [], this.effects = [], this.effectConnectors = [], this.mergeGainNode.connect(this.masterVolume), this.masterVolume.connect(l.masterGainNode);
                        for (var e = 0; e < t.length; e++) this.addSound(t[e])
                    }, u.Group.prototype = Object.create(l.Events, {
                        connect: {
                            enumerable: !0,
                            value: function (t) {
                                return this.masterVolume.connect(t), this
                            }
                        },
                        disconnect: {
                            enumerable: !0,
                            value: function (t) {
                                return this.masterVolume.disconnect(t), this
                            }
                        },
                        addSound: {
                            enumerable: !0,
                            value: function (t) {
                                return l.Util.isSound(t) ? this.sounds.indexOf(t) > -1 ? void 0 : t.detached ? void 0 : (t.disconnect(l.masterGainNode), t.connect(this.mergeGainNode), void this.sounds.push(t)) : void 0
                            }
                        },
                        removeSound: {
                            enumerable: !0,
                            value: function (t) {
                                var e = this.sounds.indexOf(t);
                                return -1 === e ? void 0 : (t.disconnect(this.mergeGainNode), t.connect(l.masterGainNode), void this.sounds.splice(e, 1))
                            }
                        },
                        volume: {
                            enumerable: !0,
                            get: function () {
                                return this.masterVolume ? this.masterVolume.gain.value : void 0
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.masterVolume.gain.value = t)
                            }
                        },
                        play: {
                            enumerable: !0,
                            value: function () {
                                for (var t = 0; t < this.sounds.length; t++) this.sounds[t].play();
                                this.trigger("play")
                            }
                        },
                        stop: {
                            enumerable: !0,
                            value: function () {
                                for (var t = 0; t < this.sounds.length; t++) this.sounds[t].stop();
                                this.trigger("stop")
                            }
                        },
                        pause: {
                            enumerable: !0,
                            value: function () {
                                for (var t = 0; t < this.sounds.length; t++) this.sounds[t].pause();
                                this.trigger("pause")
                            }
                        },
                        addEffect: {
                            enumerable: !0,
                            value: function (t) {
                                if (!l.Util.isEffect(t)) return this;
                                this.effects.push(t);
                                var e = this.effectConnectors.length > 0 ? this.effectConnectors[this.effectConnectors.length - 1] : this.mergeGainNode;
                                e.disconnect(), e.connect(t);
                                var i = l.context.createGain();
                                return this.effectConnectors.push(i), t.connect(i), i.connect(this.masterVolume), this
                            }
                        },
                        removeEffect: {
                            enumerable: !0,
                            value: function (t) {
                                var e = this.effects.indexOf(t);
                                if (-1 === e) return this;
                                var i = 0 === e ? this.mergeGainNode : this.effectConnectors[e - 1];
                                i.disconnect();
                                var n = this.effectConnectors[e];
                                n.disconnect(), t.disconnect(n), this.effectConnectors.splice(e, 1), this.effects.splice(e, 1);
                                var r;
                                return r = e > this.effects.length - 1 || 0 === this.effects.length ? this.masterVolume : this.effects[e], i.connect(r), this
                            }
                        }
                    }), u.Effects = {};
                    var _ = Object.create(null, {
                        connect: {
                            enumerable: !0,
                            value: function (t) {
                                return this.outputNode.connect(t), this
                            }
                        },
                        disconnect: {
                            enumerable: !0,
                            value: function (t) {
                                return this.outputNode.disconnect(t), this
                            }
                        }
                    });
                    u.Effects.Delay = function (t) {
                        this.options = {}, t = t || this.options;
                        var e = {
                            feedback: .5,
                            time: .3,
                            mix: .5
                        };
                        this.inputNode = u.context.createGain(), this.outputNode = u.context.createGain(), this.dryGainNode = u.context.createGain(), this.wetGainNode = u.context.createGain(), this.feedbackGainNode = u.context.createGain(), this.delayNode = u.context.createDelay(), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.delayNode.connect(this.feedbackGainNode), this.feedbackGainNode.connect(this.delayNode), this.inputNode.connect(this.delayNode), this.delayNode.connect(this.wetGainNode), this.wetGainNode.connect(this.outputNode);
                        for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i]
                    }, u.Effects.Delay.prototype = Object.create(_, {
                        mix: {
                            enumerable: !0,
                            get: function () {
                                return this.options.mix
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = u.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = u.Util.getWetLevel(this.mix))
                            }
                        },
                        time: {
                            enumerable: !0,
                            get: function () {
                                return this.options.time
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 180) && (this.options.time = t, this.delayNode.delayTime.value = t)
                            }
                        },
                        feedback: {
                            enumerable: !0,
                            get: function () {
                                return this.options.feedback
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.feedback = parseFloat(t, 10), this.feedbackGainNode.gain.value = this.feedback)
                            }
                        }
                    }), u.Effects.Compressor = function (t) {
                        this.options = {}, t = t || this.options;
                        var e = {
                            threshold: -24,
                            knee: 30,
                            attack: .003,
                            release: .25,
                            ratio: 12
                        };
                        this.inputNode = this.compressorNode = u.context.createDynamicsCompressor(), this.outputNode = u.context.createGain(), this.compressorNode.connect(this.outputNode);
                        for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i]
                    }, u.Effects.Compressor.prototype = Object.create(_, {
                        threshold: {
                            enumerable: !0,
                            get: function () {
                                return this.compressorNode.threshold.value
                            },
                            set: function (t) {
                                u.Util.isInRange(t, -100, 0) && (this.compressorNode.threshold.value = t)
                            }
                        },
                        knee: {
                            enumerable: !0,
                            get: function () {
                                return this.compressorNode.knee.value
                            },
                            set: function (t) {
                                u.Util.isInRange(t, 0, 40) && (this.compressorNode.knee.value = t)
                            }
                        },
                        attack: {
                            enumerable: !0,
                            get: function () {
                                return this.compressorNode.attack.value
                            },
                            set: function (t) {
                                u.Util.isInRange(t, 0, 1) && (this.compressorNode.attack.value = t)
                            }
                        },
                        release: {
                            enumerable: !0,
                            get: function () {
                                return this.compressorNode.release.value
                            },
                            set: function (t) {
                                u.Util.isInRange(t, 0, 1) && (this.compressorNode.release.value = t)
                            }
                        },
                        ratio: {
                            enumerable: !0,
                            get: function () {
                                return this.compressorNode.ratio.value
                            },
                            set: function (t) {
                                u.Util.isInRange(t, 1, 20) && (this.compressorNode.ratio.value = t)
                            }
                        },
                        getCurrentGainReduction: function () {
                            return this.compressorNode.reduction
                        }
                    }), u.Effects.LowPassFilter = function (t) {
                        s.call(this, t, "lowpass")
                    }, u.Effects.HighPassFilter = function (t) {
                        s.call(this, t, "highpass")
                    };
                    var x = Object.create(_, {
                        frequency: {
                            enumerable: !0,
                            get: function () {
                                return this.filterNode.frequency.value
                            },
                            set: function (t) {
                                u.Util.isInRange(t, 10, 22050) && (this.filterNode.frequency.value = t)
                            }
                        },
                        peak: {
                            enumerable: !0,
                            get: function () {
                                return this.filterNode.Q.value
                            },
                            set: function (t) {
                                u.Util.isInRange(t, 1e-4, 1e3) && (this.filterNode.Q.value = t)
                            }
                        }
                    });
                    u.Effects.LowPassFilter.prototype = x, u.Effects.HighPassFilter.prototype = x, u.Effects.Distortion = function (t) {
                        this.options = {}, t = t || this.options;
                        var e = {
                            gain: .5
                        };
                        this.waveShaperNode = u.context.createWaveShaper(), this.inputNode = this.outputNode = this.waveShaperNode;
                        for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i]
                    }, u.Effects.Distortion.prototype = Object.create(_, {
                        gain: {
                            enumerable: !0,
                            get: function () {
                                return this.options.gain
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.gain = t, this.adjustGain())
                            }
                        },
                        adjustGain: {
                            writable: !1,
                            configurable: !1,
                            enumerable: !1,
                            value: function () {
                                for (var t, e = l.Util.isNumber(this.options.gain) ? parseInt(100 * this.options.gain, 10) : 50, i = 44100, n = new Float32Array(i), r = Math.PI / 180, o = 0; i > o; ++o) t = 2 * o / i - 1, n[o] = (3 + e) * t * 20 * r / (Math.PI + e * Math.abs(t));
                                this.waveShaperNode.curve = n
                            }
                        }
                    }), u.Effects.Flanger = function (t) {
                        this.options = {}, t = t || this.options;
                        var e = {
                            time: .45,
                            speed: .2,
                            depth: .1,
                            feedback: .1,
                            mix: .5
                        };
                        this.inputNode = u.context.createGain(), this.outputNode = u.context.createGain(), this.inputFeedbackNode = u.context.createGain(), this.wetGainNode = u.context.createGain(), this.dryGainNode = u.context.createGain(), this.delayNode = u.context.createDelay(), this.oscillatorNode = u.context.createOscillator(), this.gainNode = u.context.createGain(), this.feedbackNode = u.context.createGain(), this.oscillatorNode.type = "sine", this.inputNode.connect(this.inputFeedbackNode), this.inputNode.connect(this.dryGainNode), this.inputFeedbackNode.connect(this.delayNode), this.inputFeedbackNode.connect(this.wetGainNode), this.delayNode.connect(this.wetGainNode), this.delayNode.connect(this.feedbackNode), this.feedbackNode.connect(this.inputFeedbackNode), this.oscillatorNode.connect(this.gainNode), this.gainNode.connect(this.delayNode.delayTime), this.dryGainNode.connect(this.outputNode), this.wetGainNode.connect(this.outputNode), this.oscillatorNode.start(0);
                        for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i]
                    }, u.Effects.Flanger.prototype = Object.create(_, {
                        time: {
                            enumberable: !0,
                            get: function () {
                                return this.options.time
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.time = t, this.delayNode.delayTime.value = l.Util.normalize(t, .001, .02))
                            }
                        },
                        speed: {
                            enumberable: !0,
                            get: function () {
                                return this.options.speed
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.speed = t, this.oscillatorNode.frequency.value = l.Util.normalize(t, .5, 5))
                            }
                        },
                        depth: {
                            enumberable: !0,
                            get: function () {
                                return this.options.depth
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.depth = t, this.gainNode.gain.value = l.Util.normalize(t, 5e-4, .005))
                            }
                        },
                        feedback: {
                            enumberable: !0,
                            get: function () {
                                return this.options.feedback
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.feedback = t, this.feedbackNode.gain.value = l.Util.normalize(t, 0, .8))
                            }
                        },
                        mix: {
                            enumberable: !0,
                            get: function () {
                                return this.options.mix
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = u.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = u.Util.getWetLevel(this.mix))
                            }
                        }
                    }), u.Effects.StereoPanner = function (t) {
                        this.options = {}, t = t || this.options;
                        var e = {
                            pan: 0
                        };
                        this.inputNode = u.context.createGain(), this.outputNode = u.context.createGain(), u.context.createStereoPanner ? (this.pannerNode = u.context.createStereoPanner(), this.inputNode.connect(this.pannerNode), this.pannerNode.connect(this.outputNode)) : u.context.createPanner ? (this.pannerNode = u.context.createPanner(), this.pannerNode.type = "equalpower", this.inputNode.connect(this.pannerNode), this.pannerNode.connect(this.outputNode)) : this.inputNode.connect(this.outputNode);
                        for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i]
                    }, u.Effects.StereoPanner.prototype = Object.create(_, {
                        pan: {
                            enumerable: !0,
                            get: function () {
                                return this.options.pan
                            },
                            set: function (t) {
                                if (l.Util.isInRange(t, -1, 1) && (this.options.pan = t, this.pannerNode)) {
                                    this.pannerNode.toString().indexOf("StereoPannerNode") > -1 ? this.pannerNode.pan.value = t : this.pannerNode.setPosition(t, 0, 1 - Math.abs(t))
                                }
                            }
                        }
                    }), u.Effects.Convolver = function (t, e) {
                        this.options = {}, t = t || this.options;
                        var i = this,
                            n = new XMLHttpRequest,
                            r = {
                                mix: .5
                            };
                        this.callback = e, this.inputNode = u.context.createGain(), this.convolverNode = u.context.createConvolver(), this.outputNode = u.context.createGain(), this.wetGainNode = u.context.createGain(), this.dryGainNode = u.context.createGain(), this.inputNode.connect(this.convolverNode), this.convolverNode.connect(this.wetGainNode), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.wetGainNode.connect(this.outputNode);
                        for (var o in r) this[o] = t[o], this[o] = void 0 === this[o] || null === this[o] ? r[o] : this[o];
                        return t.impulse ? (n.open("GET", t.impulse, !0), n.responseType = "arraybuffer", n.onload = function (t) {
                            var e = t.target.response;
                            u.context.decodeAudioData(e, function (t) {
                                i.convolverNode.buffer = t, i.callback && l.Util.isFunction(i.callback) && i.callback()
                            }, function (t) {
                                t = t || new Error("Error decoding impulse file"), i.callback && l.Util.isFunction(i.callback) && i.callback(t)
                            })
                        }, n.onreadystatechange = function (t) {
                            4 === n.readyState && n.status
                        }, void n.send()) : void 0
                    }, u.Effects.Convolver.prototype = Object.create(_, {
                        mix: {
                            enumerable: !0,
                            get: function () {
                                return this.options.mix
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = u.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = u.Util.getWetLevel(this.mix))
                            }
                        }
                    }), u.Effects.PingPongDelay = function (t) {
                        this.options = {}, t = t || this.options;
                        var e = {
                            feedback: .5,
                            time: .3,
                            mix: .5
                        };
                        this.inputNode = u.context.createGain(), this.outputNode = u.context.createGain(), this.delayNodeLeft = u.context.createDelay(), this.delayNodeRight = u.context.createDelay(), this.dryGainNode = u.context.createGain(), this.wetGainNode = u.context.createGain(), this.feedbackGainNode = u.context.createGain(), this.channelMerger = u.context.createChannelMerger(2), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.delayNodeLeft.connect(this.channelMerger, 0, 0), this.delayNodeRight.connect(this.channelMerger, 0, 1), this.delayNodeLeft.connect(this.delayNodeRight), this.feedbackGainNode.connect(this.delayNodeLeft), this.delayNodeRight.connect(this.feedbackGainNode), this.inputNode.connect(this.feedbackGainNode), this.channelMerger.connect(this.wetGainNode), this.wetGainNode.connect(this.outputNode);
                        for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i]
                    }, u.Effects.PingPongDelay.prototype = Object.create(_, {
                        mix: {
                            enumerable: !0,
                            get: function () {
                                return this.options.mix
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = u.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = u.Util.getWetLevel(this.mix))
                            }
                        },
                        time: {
                            enumerable: !0,
                            get: function () {
                                return this.options.time
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 180) && (this.options.time = t, this.delayNodeLeft.delayTime.value = t, this.delayNodeRight.delayTime.value = t)
                            }
                        },
                        feedback: {
                            enumerable: !0,
                            get: function () {
                                return this.options.feedback
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.feedback = parseFloat(t, 10), this.feedbackGainNode.gain.value = this.feedback)
                            }
                        }
                    }), u.Effects.Reverb = function (t) {
                        this.options = {}, t = t || this.options;
                        var e = {
                            mix: .5,
                            time: .01,
                            decay: .01,
                            reverse: !1
                        };
                        this.inputNode = u.context.createGain(), this.reverbNode = u.context.createConvolver(), this.outputNode = u.context.createGain(), this.wetGainNode = u.context.createGain(), this.dryGainNode = u.context.createGain(), this.inputNode.connect(this.reverbNode), this.reverbNode.connect(this.wetGainNode), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.wetGainNode.connect(this.outputNode);
                        for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i];
                        h.bind(this)()
                    }, u.Effects.Reverb.prototype = Object.create(_, {
                        mix: {
                            enumerable: !0,
                            get: function () {
                                return this.options.mix
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = u.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = u.Util.getWetLevel(this.mix))
                            }
                        },
                        time: {
                            enumerable: !0,
                            get: function () {
                                return this.options.time
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 1e-4, 10) && (this.options.time = t, h.bind(this)())
                            }
                        },
                        decay: {
                            enumerable: !0,
                            get: function () {
                                return this.options.decay
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 1e-4, 10) && (this.options.decay = t, h.bind(this)())
                            }
                        },
                        reverse: {
                            enumerable: !0,
                            get: function () {
                                return this.options.reverse
                            },
                            set: function (t) {
                                l.Util.isBool(t) && (this.options.reverse = t, h.bind(this)())
                            }
                        }
                    }), u.Effects.Tremolo = function (t) {
                        this.options = {}, t = t || this.options;
                        var e = {
                            speed: 4,
                            depth: 1,
                            mix: .8
                        };
                        this.inputNode = u.context.createGain(), this.outputNode = u.context.createGain(), this.dryGainNode = u.context.createGain(), this.wetGainNode = u.context.createGain(), this.tremoloGainNode = u.context.createGain(), this.tremoloGainNode.gain.value = 0, this.lfoNode = u.context.createOscillator(), this.shaperNode = u.context.createWaveShaper(), this.shaperNode.curve = new Float32Array([0, 1]), this.shaperNode.connect(this.tremoloGainNode.gain), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.lfoNode.connect(this.shaperNode), this.lfoNode.type = "sine", this.lfoNode.start(0), this.inputNode.connect(this.tremoloGainNode), this.tremoloGainNode.connect(this.wetGainNode), this.wetGainNode.connect(this.outputNode);
                        for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i]
                    }, u.Effects.Tremolo.prototype = Object.create(_, {
                        mix: {
                            enumerable: !0,
                            get: function () {
                                return this.options.mix
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = u.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = u.Util.getWetLevel(this.mix))
                            }
                        },
                        speed: {
                            enumerable: !0,
                            get: function () {
                                return this.options.speed
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 20) && (this.options.speed = t, this.lfoNode.frequency.value = t)
                            }
                        },
                        depth: {
                            enumerable: !0,
                            get: function () {
                                return this.options.depth
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.depth = t, this.shaperNode.curve = new Float32Array([1 - t, 1]))
                            }
                        }
                    }), u.Effects.DubDelay = function (t) {
                        this.options = {}, t = t || this.options;
                        var e = {
                            feedback: .6,
                            time: .7,
                            mix: .5,
                            cutoff: 700
                        };
                        this.inputNode = u.context.createGain(), this.outputNode = u.context.createGain(), this.dryGainNode = u.context.createGain(), this.wetGainNode = u.context.createGain(), this.feedbackGainNode = u.context.createGain(), this.delayNode = u.context.createDelay(), this.bqFilterNode = u.context.createBiquadFilter(), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.inputNode.connect(this.wetGainNode), this.inputNode.connect(this.feedbackGainNode), this.feedbackGainNode.connect(this.bqFilterNode), this.bqFilterNode.connect(this.delayNode), this.delayNode.connect(this.feedbackGainNode), this.delayNode.connect(this.wetGainNode), this.wetGainNode.connect(this.outputNode);
                        for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i]
                    }, u.Effects.DubDelay.prototype = Object.create(_, {
                        mix: {
                            enumerable: !0,
                            get: function () {
                                return this.options.mix
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = u.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = u.Util.getWetLevel(this.mix))
                            }
                        },
                        time: {
                            enumerable: !0,
                            get: function () {
                                return this.options.time
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 180) && (this.options.time = t, this.delayNode.delayTime.value = t)
                            }
                        },
                        feedback: {
                            enumerable: !0,
                            get: function () {
                                return this.options.feedback
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.feedback = parseFloat(t, 10), this.feedbackGainNode.gain.value = this.feedback)
                            }
                        },
                        cutoff: {
                            enumerable: !0,
                            get: function () {
                                return this.options.cutoff
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 4e3) && (this.options.cutoff = t, this.bqFilterNode.frequency.value = this.cutoff)
                            }
                        }
                    }), u.Effects.RingModulator = function (t) {
                        this.options = {}, t = t || this.options;
                        var e = {
                            speed: 30,
                            distortion: 1,
                            mix: .5
                        };
                        this.inputNode = u.context.createGain(), this.outputNode = u.context.createGain(), this.dryGainNode = u.context.createGain(), this.wetGainNode = u.context.createGain(), this.vIn = u.context.createOscillator(), this.vIn.start(0), this.vInGain = u.context.createGain(), this.vInGain.gain.value = .5, this.vInInverter1 = u.context.createGain(), this.vInInverter1.gain.value = -1, this.vInInverter2 = u.context.createGain(), this.vInInverter2.gain.value = -1, this.vInDiode1 = new b(u.context), this.vInDiode2 = new b(u.context), this.vInInverter3 = u.context.createGain(), this.vInInverter3.gain.value = -1, this.vcInverter1 = u.context.createGain(), this.vcInverter1.gain.value = -1, this.vcDiode3 = new b(u.context), this.vcDiode4 = new b(u.context), this.outGain = u.context.createGain(), this.outGain.gain.value = 3, this.compressor = u.context.createDynamicsCompressor(), this.compressor.threshold.value = -24, this.compressor.ratio.value = 16, this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.inputNode.connect(this.vcInverter1), this.inputNode.connect(this.vcDiode4.node), this.vcInverter1.connect(this.vcDiode3.node), this.vIn.connect(this.vInGain), this.vInGain.connect(this.vInInverter1), this.vInGain.connect(this.vcInverter1), this.vInGain.connect(this.vcDiode4.node), this.vInInverter1.connect(this.vInInverter2), this.vInInverter1.connect(this.vInDiode2.node), this.vInInverter2.connect(this.vInDiode1.node), this.vInDiode1.connect(this.vInInverter3), this.vInDiode2.connect(this.vInInverter3), this.vInInverter3.connect(this.compressor), this.vcDiode3.connect(this.compressor), this.vcDiode4.connect(this.compressor), this.compressor.connect(this.outGain), this.outGain.connect(this.wetGainNode), this.wetGainNode.connect(this.outputNode);
                        for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i]
                    };
                    var b = function (t) {
                        this.context = t, this.node = this.context.createWaveShaper(), this.vb = .2, this.vl = .4, this.h = 1, this.setCurve()
                    };
                    b.prototype.setDistortion = function (t) {
                        return this.h = t, this.setCurve()
                    }, b.prototype.setCurve = function () {
                        var t, e, i, n, r, o, a;
                        for (e = 1024, r = new Float32Array(e), t = o = 0, a = r.length; a >= 0 ? a > o : o > a; t = a >= 0 ? ++o : --o) i = (t - e / 2) / (e / 2), i = Math.abs(i), n = i <= this.vb ? 0 : this.vb < i && i <= this.vl ? this.h * (Math.pow(i - this.vb, 2) / (2 * this.vl - 2 * this.vb)) : this.h * i - this.h * this.vl + this.h * (Math.pow(this.vl - this.vb, 2) / (2 * this.vl - 2 * this.vb)), r[t] = n;
                        return this.node.curve = r
                    }, b.prototype.connect = function (t) {
                        return this.node.connect(t)
                    }, u.Effects.RingModulator.prototype = Object.create(_, {
                        mix: {
                            enumerable: !0,
                            get: function () {
                                return this.options.mix
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = u.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = u.Util.getWetLevel(this.mix))
                            }
                        },
                        speed: {
                            enumerable: !0,
                            get: function () {
                                return this.options.speed
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 2e3) && (this.options.speed = t, this.vIn.frequency.value = t)
                            }
                        },
                        distortion: {
                            enumerable: !0,
                            get: function () {
                                return this.options.distortion
                            },
                            set: function (t) {
                                if (l.Util.isInRange(t, .2, 50)) {
                                    this.options.distortion = parseFloat(t, 10);
                                    for (var e = [this.vInDiode1, this.vInDiode2, this.vcDiode3, this.vcDiode4], i = 0, n = e.length; n > i; i++) e[i].setDistortion(t)
                                }
                            }
                        }
                    }), u.Effects.Quadrafuzz = function (t) {
                        this.options = {}, t = t || this.options;
                        var e = {
                            lowGain: .6,
                            midLowGain: .8,
                            midHighGain: .5,
                            highGain: .6
                        };
                        this.inputNode = l.context.createGain(), this.outputNode = l.context.createGain(), this.dryGainNode = l.context.createGain(), this.wetGainNode = l.context.createGain(), this.lowpassLeft = l.context.createBiquadFilter(), this.lowpassLeft.type = "lowpass", this.lowpassLeft.frequency.value = 147, this.lowpassLeft.Q.value = .7071, this.bandpass1Left = l.context.createBiquadFilter(), this.bandpass1Left.type = "bandpass", this.bandpass1Left.frequency.value = 587, this.bandpass1Left.Q.value = .7071, this.bandpass2Left = l.context.createBiquadFilter(), this.bandpass2Left.type = "bandpass", this.bandpass2Left.frequency.value = 2490, this.bandpass2Left.Q.value = .7071, this.highpassLeft = l.context.createBiquadFilter(), this.highpassLeft.type = "highpass", this.highpassLeft.frequency.value = 4980, this.highpassLeft.Q.value = .7071, this.overdrives = [];
                        for (var i = 0; 4 > i; i++) this.overdrives[i] = l.context.createWaveShaper(), this.overdrives[i].curve = c();
                        this.inputNode.connect(this.wetGainNode), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode);
                        var n = [this.lowpassLeft, this.bandpass1Left, this.bandpass2Left, this.highpassLeft];
                        for (i = 0; i < n.length; i++) this.wetGainNode.connect(n[i]), n[i].connect(this.overdrives[i]), this.overdrives[i].connect(this.outputNode);
                        for (var r in e) this[r] = t[r], this[r] = void 0 === this[r] || null === this[r] ? e[r] : this[r]
                    }, u.Effects.Quadrafuzz.prototype = Object.create(_, {
                        lowGain: {
                            enumerable: !0,
                            get: function () {
                                return this.options.lowGain
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.lowGain = t, this.overdrives[0].curve = c(l.Util.normalize(this.lowGain, 0, 150)))
                            }
                        },
                        midLowGain: {
                            enumerable: !0,
                            get: function () {
                                return this.options.midLowGain
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.midLowGain = t, this.overdrives[1].curve = c(l.Util.normalize(this.midLowGain, 0, 150)))
                            }
                        },
                        midHighGain: {
                            enumerable: !0,
                            get: function () {
                                return this.options.midHighGain
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.midHighGain = t, this.overdrives[2].curve = c(l.Util.normalize(this.midHighGain, 0, 150)))
                            }
                        },
                        highGain: {
                            enumerable: !0,
                            get: function () {
                                return this.options.highGain
                            },
                            set: function (t) {
                                l.Util.isInRange(t, 0, 1) && (this.options.highGain = t, this.overdrives[3].curve = c(l.Util.normalize(this.highGain, 0, 150)))
                            }
                        }
                    })
                }
            }("undefined" != typeof window ? window : n)
        }).call(e, i(4))
    },
    function (t, e) {
        (function (e) {
            t.exports = e
        }).call(e, {})
    },
    function (t, e, i) {
        "use strict";
        (function (n) {
            var r, o, a, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                h = void 0 !== t && t.exports && void 0 !== n ? n : window;
            (h._gsQueue || (h._gsQueue = [])).push(function () {
                var t = Math.PI / 180,
                    e = 180 / Math.PI,
                    i = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                    n = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                    r = /(^[#\.]|[a-y][a-z])/gi,
                    o = /[achlmqstvz]/gi,
                    a = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
                    c = h._gsDefine.globals.TweenLite,
                    u = function (t) {
                        h.console
                    },
                    l = function (e, i) {
                        var n, r, o, a, s, h, c = Math.ceil(Math.abs(i) / 90),
                            u = 0,
                            l = [];
                        for (e *= t, i *= t, n = i / c, r = 4 / 3 * Math.sin(n / 2) / (1 + Math.cos(n / 2)), h = 0; h < c; h++) o = e + h * n, a = Math.cos(o), s = Math.sin(o), l[u++] = a - r * s, l[u++] = s + r * a, o += n, a = Math.cos(o), s = Math.sin(o), l[u++] = a + r * s, l[u++] = s - r * a, l[u++] = a, l[u++] = s;
                        return l
                    },
                    p = function (i, n, r, o, a, s, h, c, u) {
                        if (i !== c || n !== u) {
                            r = Math.abs(r), o = Math.abs(o);
                            var p = a % 360 * t,
                                f = Math.cos(p),
                                d = Math.sin(p),
                                m = (i - c) / 2,
                                v = (n - u) / 2,
                                g = f * m + d * v,
                                y = -d * m + f * v,
                                _ = r * r,
                                x = o * o,
                                b = g * g,
                                w = y * y,
                                M = b / _ + w / x;
                            M > 1 && (r = Math.sqrt(M) * r, o = Math.sqrt(M) * o, _ = r * r, x = o * o);
                            var T = s === h ? -1 : 1,
                                S = (_ * x - _ * w - x * b) / (_ * w + x * b);
                            S < 0 && (S = 0);
                            var A = T * Math.sqrt(S),
                                P = A * (r * y / o),
                                E = A * (-o * g / r),
                                C = (i + c) / 2,
                                L = (n + u) / 2,
                                N = C + (f * P - d * E),
                                O = L + (d * P + f * E),
                                R = (g - P) / r,
                                I = (y - E) / o,
                                D = (-g - P) / r,
                                k = (-y - E) / o,
                                z = Math.sqrt(R * R + I * I),
                                U = R;
                            T = I < 0 ? -1 : 1;
                            var F = T * Math.acos(U / z) * e;
                            z = Math.sqrt((R * R + I * I) * (D * D + k * k)), U = R * D + I * k, T = R * k - I * D < 0 ? -1 : 1;
                            var B = T * Math.acos(U / z) * e;
                            !h && B > 0 ? B -= 360 : h && B < 0 && (B += 360), B %= 360, F %= 360;
                            var G, j, V, W = l(F, B),
                                H = f * r,
                                X = d * r,
                                q = d * -o,
                                Y = f * o,
                                $ = W.length - 2;
                            for (G = 0; G < $; G += 2) j = W[G], V = W[G + 1], W[G] = j * H + V * q + N, W[G + 1] = j * X + V * Y + O;
                            return W[W.length - 2] = c, W[W.length - 1] = u, W
                        }
                    },
                    f = function (t) {
                        var e, n, r, o, s, h, c, l, f, d, m, v, g, y = (t + "").replace(a, function (t) {
                                var e = +t;
                                return e < 1e-4 && e > -1e-4 ? 0 : e
                            }).match(i) || [],
                            _ = [],
                            x = 0,
                            b = 0,
                            w = y.length,
                            M = 2,
                            T = 0;
                        if (!t || !isNaN(y[0]) || isNaN(y[1])) return u(), _;
                        for (e = 0; e < w; e++)
                            if (g = s, isNaN(y[e]) ? (s = y[e].toUpperCase(), h = s !== y[e]) : e--, r = +y[e + 1], o = +y[e + 2], h && (r += x, o += b), 0 === e && (l = r, f = o), "M" === s) c && c.length < 8 && (_.length -= 1, M = 0), x = l = r, b = f = o, c = [r, o], T += M, M = 2, _.push(c), e += 2, s = "L";
                            else if ("C" === s) c || (c = [0, 0]), c[M++] = r, c[M++] = o, h || (x = b = 0), c[M++] = x + 1 * y[e + 3], c[M++] = b + 1 * y[e + 4], c[M++] = x += 1 * y[e + 5], c[M++] = b += 1 * y[e + 6], e += 6;
                            else if ("S" === s) "C" === g || "S" === g ? (d = x - c[M - 4], m = b - c[M - 3], c[M++] = x + d, c[M++] = b + m) : (c[M++] = x, c[M++] = b), c[M++] = r, c[M++] = o, h || (x = b = 0), c[M++] = x += 1 * y[e + 3], c[M++] = b += 1 * y[e + 4], e += 4;
                            else if ("Q" === s) d = r - x, m = o - b, c[M++] = x + 2 * d / 3, c[M++] = b + 2 * m / 3, h || (x = b = 0), x += 1 * y[e + 3], b += 1 * y[e + 4], d = r - x, m = o - b, c[M++] = x + 2 * d / 3, c[M++] = b + 2 * m / 3, c[M++] = x, c[M++] = b, e += 4;
                            else if ("T" === s) d = x - c[M - 4], m = b - c[M - 3], c[M++] = x + d, c[M++] = b + m, d = x + 1.5 * d - r, m = b + 1.5 * m - o, c[M++] = r + 2 * d / 3, c[M++] = o + 2 * m / 3, c[M++] = x = r, c[M++] = b = o, e += 2;
                            else if ("H" === s) o = b, c[M++] = x + (r - x) / 3, c[M++] = b + (o - b) / 3, c[M++] = x + 2 * (r - x) / 3, c[M++] = b + 2 * (o - b) / 3, c[M++] = x = r, c[M++] = o, e += 1;
                            else if ("V" === s) o = r, r = x, h && (o += b - x), c[M++] = r, c[M++] = b + (o - b) / 3, c[M++] = r, c[M++] = b + 2 * (o - b) / 3, c[M++] = r, c[M++] = b = o, e += 1;
                            else if ("L" === s || "Z" === s) "Z" === s && (r = l, o = f, c.closed = !0), ("L" === s || Math.abs(x - r) > .5 || Math.abs(b - o) > .5) && (c[M++] = x + (r - x) / 3, c[M++] = b + (o - b) / 3, c[M++] = x + 2 * (r - x) / 3, c[M++] = b + 2 * (o - b) / 3, c[M++] = r, c[M++] = o, "L" === s && (e += 2)), x = r, b = o;
                            else if ("A" === s) {
                                if (v = p(x, b, 1 * y[e + 1], 1 * y[e + 2], 1 * y[e + 3], 1 * y[e + 4], 1 * y[e + 5], (h ? x : 0) + 1 * y[e + 6], (h ? b : 0) + 1 * y[e + 7]))
                                    for (n = 0; n < v.length; n++) c[M++] = v[n];
                                x = c[M - 2], b = c[M - 1], e += 7
                            } else u();
                        return _.totalPoints = T + M, _
                    },
                    d = function (t, e) {
                        var i, n, r, o, a, s, h, c, u, l, p, f, d, m, v = 0,
                            g = t.length,
                            y = e / ((g - 2) / 6);
                        for (d = 2; d < g; d += 6)
                            for (v += y; v > .999999;) i = t[d - 2], n = t[d - 1], r = t[d], o = t[d + 1], a = t[d + 2], s = t[d + 3], h = t[d + 4], c = t[d + 5], m = 1 / (Math.floor(v) + 1), u = i + (r - i) * m, p = r + (a - r) * m, u += (p - u) * m, p += (a + (h - a) * m - p) * m, l = n + (o - n) * m, f = o + (s - o) * m, l += (f - l) * m, f += (s + (c - s) * m - f) * m, t.splice(d, 4, i + (r - i) * m, n + (o - n) * m, u, l, u + (p - u) * m, l + (f - l) * m, p, f, a + (h - a) * m, s + (c - s) * m), d += 6, g += 6, v--;
                        return t
                    },
                    m = function (t) {
                        var e, i, n, r, o = "",
                            a = t.length;
                        for (i = 0; i < a; i++) {
                            for (r = t[i], o += "M" + r[0] + "," + r[1] + " C", e = r.length, n = 2; n < e; n++) o += (100 * r[n++] | 0) / 100 + "," + (100 * r[n++] | 0) / 100 + " " + (100 * r[n++] | 0) / 100 + "," + (100 * r[n++] | 0) / 100 + " " + (100 * r[n++] | 0) / 100 + "," + (100 * r[n] | 0) / 100 + " ";
                            r.closed && (o += "z")
                        }
                        return o
                    },
                    v = function (t) {
                        for (var e = [], i = t.length - 1, n = 0; --i > -1;) e[n++] = t[i], e[n++] = t[i + 1], i--;
                        for (i = 0; i < n; i++) t[i] = e[i];
                        t.reversed = !t.reversed
                    },
                    g = function (t) {
                        var e, i = t.length,
                            n = 0,
                            r = 0;
                        for (e = 0; e < i; e++) n += t[e++], r += t[e];
                        return [n / (i / 2), r / (i / 2)]
                    },
                    y = function (t) {
                        var e, i, n, r = t.length,
                            o = t[0],
                            a = o,
                            s = t[1],
                            h = s;
                        for (n = 6; n < r; n += 6) e = t[n], i = t[n + 1], e > o ? o = e : e < a && (a = e), i > s ? s = i : i < h && (h = i);
                        return t.centerX = (o + a) / 2, t.centerY = (s + h) / 2, t.size = (o - a) * (s - h)
                    },
                    _ = function (t) {
                        for (var e, i, n, r, o, a = t.length, s = t[0][0], h = s, c = t[0][1], u = c; --a > -1;)
                            for (o = t[a], e = o.length, r = 6; r < e; r += 6) i = o[r], n = o[r + 1], i > s ? s = i : i < h && (h = i), n > c ? c = n : n < u && (u = n);
                        return t.centerX = (s + h) / 2, t.centerY = (c + u) / 2, t.size = (s - h) * (c - u)
                    },
                    x = function (t, e) {
                        return e.length - t.length
                    },
                    b = function (t, e) {
                        var i = t.size || y(t),
                            n = e.size || y(e);
                        return Math.abs(n - i) < (i + n) / 20 ? e.centerX - t.centerX || e.centerY - t.centerY : n - i
                    },
                    w = function (t, e) {
                        var i, n, r = t.slice(0),
                            o = t.length,
                            a = o - 2;
                        for (e |= 0, i = 0; i < o; i++) n = (i + e) % a, t[i++] = r[n], t[i] = r[n + 1]
                    },
                    M = function (t, e, i, n, r) {
                        var o, a, s, h, c = t.length,
                            u = 0,
                            l = c - 2;
                        for (i *= 6, a = 0; a < c; a += 6) o = (a + i) % l, h = t[o] - (e[a] - n), s = t[o + 1] - (e[a + 1] - r), u += Math.sqrt(s * s + h * h);
                        return u
                    },
                    T = function (t, e, i) {
                        var n, r, o, a = t.length,
                            s = g(t),
                            h = g(e),
                            c = h[0] - s[0],
                            u = h[1] - s[1],
                            l = M(t, e, 0, c, u),
                            p = 0;
                        for (o = 6; o < a; o += 6) (r = M(t, e, o / 6, c, u)) < l && (l = r, p = o);
                        if (i)
                            for (n = t.slice(0), v(n), o = 6; o < a; o += 6) (r = M(n, e, o / 6, c, u)) < l && (l = r, p = -o);
                        return p / 6
                    },
                    S = function (t, e, i) {
                        for (var n, r, o, a, s, h, c = t.length, u = 99999999999, l = 0, p = 0; --c > -1;)
                            for (n = t[c], h = n.length, s = 0; s < h; s += 6) r = n[s] - e, o = n[s + 1] - i, (a = Math.sqrt(r * r + o * o)) < u && (u = a, l = n[s], p = n[s + 1]);
                        return [l, p]
                    },
                    A = function (t, e, i, n, r, o) {
                        var a, s, h, c, u = e.length,
                            l = 0,
                            p = Math.min(t.size || y(t), e[i].size || y(e[i])) * n,
                            f = 999999999999,
                            d = t.centerX + r,
                            m = t.centerY + o;
                        for (a = i; a < u && !((e[a].size || y(e[a])) < p); a++) s = e[a].centerX - d, h = e[a].centerY - m, (c = Math.sqrt(s * s + h * h)) < f && (l = a, f = c);
                        return c = e[l], e.splice(l, 1), c
                    },
                    P = function (t, e, i, n) {
                        var r, o, a, h, c, l, p, f = e.length - t.length,
                            m = f > 0 ? e : t,
                            g = f > 0 ? t : e,
                            M = 0,
                            P = "complexity" === n ? x : b,
                            E = "position" === n ? 0 : "number" == typeof n ? n : .8,
                            C = g.length,
                            L = "object" === (void 0 === i ? "undefined" : s(i)) && i.push ? i.slice(0) : [i],
                            N = "reverse" === L[0] || L[0] < 0,
                            O = "log" === i;
                        if (g[0]) {
                            if (m.length > 1 && (t.sort(P), e.sort(P), l = m.size || _(m), l = g.size || _(g), l = m.centerX - g.centerX, p = m.centerY - g.centerY, P === b))
                                for (C = 0; C < g.length; C++) m.splice(C, 0, A(g[C], m, C, E, l, p));
                            if (f)
                                for (f < 0 && (f = -f), m[0].length > g[0].length && d(g[0], (m[0].length - g[0].length) / 6 | 0), C = g.length; M < f;) h = m[C].size || y(m[C]), a = S(g, m[C].centerX, m[C].centerY), h = a[0], c = a[1], g[C++] = [h, c, h, c, h, c, h, c], g.totalPoints += 8, M++;
                            for (C = 0; C < t.length; C++) r = e[C], o = t[C], f = r.length - o.length, f < 0 ? d(r, -f / 6 | 0) : f > 0 && d(o, f / 6 | 0), N && !o.reversed && v(o), (i = L[C] || 0 === L[C] ? L[C] : "auto") && (o.closed || Math.abs(o[0] - o[o.length - 2]) < .5 && Math.abs(o[1] - o[o.length - 1]) < .5 ? "auto" === i || "log" === i ? (L[C] = i = T(o, r, 0 === C), i < 0 && (N = !0, v(o), i = -i), w(o, 6 * i)) : "reverse" !== i && (C && i < 0 && v(o), w(o, 6 * (i < 0 ? -i : i))) : !N && ("auto" === i && Math.abs(r[0] - o[0]) + Math.abs(r[1] - o[1]) + Math.abs(r[r.length - 2] - o[o.length - 2]) + Math.abs(r[r.length - 1] - o[o.length - 1]) > Math.abs(r[0] - o[o.length - 2]) + Math.abs(r[1] - o[o.length - 1]) + Math.abs(r[r.length - 2] - o[0]) + Math.abs(r[r.length - 1] - o[1]) || i % 2) ? (v(o), L[C] = -1, N = !0) : "auto" === i ? L[C] = 0 : "reverse" === i && (L[C] = -1), o.closed !== r.closed && (o.closed = r.closed = !1));
                            return O && u(L.join(",")), L
                        }
                    },
                    E = function (t, e, i, n) {
                        var r = f(t[0]),
                            o = f(t[1]);
                        P(r, o, e || 0 === e ? e : "auto", i) && (t[0] = m(r), t[1] = m(o), "log" !== n && !0 !== n || u((t[0], t[1])))
                    },
                    C = function (t, e, i) {
                        return e || i || t || 0 === t ? function (n) {
                            E(n, t, e, i)
                        } : E
                    },
                    L = function (t, e) {
                        if (!e) return t;
                        var i, r, o, a = t.match(n) || [],
                            s = a.length,
                            h = "";
                        for ("reverse" === e ? (r = s - 1, i = -2) : (r = (2 * (parseInt(e, 10) || 0) + 1 + 100 * s) % s, i = 2), o = 0; o < s; o += 2) h += a[r - 1] + "," + a[r] + " ", r = (r + i) % s;
                        return h
                    },
                    N = function (t, e) {
                        var i, n, r, o, a, s, h, c = 0,
                            u = parseFloat(t[0]),
                            l = parseFloat(t[1]),
                            p = u + "," + l + " ";
                        for (r = t.length, i = .5 * e / (.5 * r - 1), n = 0; n < r - 2; n += 2) {
                            if (c += i, s = parseFloat(t[n + 2]), h = parseFloat(t[n + 3]), c > .999999)
                                for (a = 1 / (Math.floor(c) + 1), o = 1; c > .999999;) p += (u + (s - u) * a * o).toFixed(2) + "," + (l + (h - l) * a * o).toFixed(2) + " ", c--, o++;
                            p += s + "," + h + " ", u = s, l = h
                        }
                        return p
                    },
                    O = function (t) {
                        var e = t[0].match(n) || [],
                            i = t[1].match(n) || [],
                            r = i.length - e.length;
                        r > 0 ? t[0] = N(e, r) : t[1] = N(i, -r)
                    },
                    R = function (t) {
                        return isNaN(t) ? O : function (e) {
                            O(e), e[1] = L(e[1], parseInt(t, 10))
                        }
                    },
                    I = function (t, e) {
                        var i, n = h.document.createElementNS("http://www.w3.org/2000/svg", "path"),
                            r = Array.prototype.slice.call(t.attributes),
                            o = r.length;
                        for (e = "," + e + ","; --o > -1;) i = r[o].nodeName.toLowerCase(), -1 === e.indexOf("," + i + ",") && n.setAttributeNS(null, i, r[o].nodeValue);
                        return n
                    },
                    D = function (t, e) {
                        var i, r, o, a, s, h, c, u, l, p, f, d, m, v, g, y, _, x, b, w, M, T = t.tagName.toLowerCase(),
                            S = .552284749831;
                        return "path" !== T && t.getBBox ? (h = I(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), "rect" === T ? (a = +t.getAttribute("rx") || 0, s = +t.getAttribute("ry") || 0, r = +t.getAttribute("x") || 0, o = +t.getAttribute("y") || 0, p = (+t.getAttribute("width") || 0) - 2 * a, f = (+t.getAttribute("height") || 0) - 2 * s, a || s ? (d = r + a * (1 - S), m = r + a, v = m + p, g = v + a * S, y = v + a, _ = o + s * (1 - S), x = o + s, b = x + f, w = b + s * S, M = b + s, i = "M" + y + "," + x + " V" + b + " C" + [y, w, g, M, v, M, v - (v - m) / 3, M, m + (v - m) / 3, M, m, M, d, M, r, w, r, b, r, b - (b - x) / 3, r, x + (b - x) / 3, r, x, r, _, d, o, m, o, m + (v - m) / 3, o, v - (v - m) / 3, o, v, o, g, o, y, _, y, x].join(",") + "z") : i = "M" + (r + p) + "," + o + " v" + f + " h" + -p + " v" + -f + " h" + p + "z") : "circle" === T || "ellipse" === T ? ("circle" === T ? (a = s = +t.getAttribute("r") || 0, u = a * S) : (a = +t.getAttribute("rx") || 0, s = +t.getAttribute("ry") || 0, u = s * S), r = +t.getAttribute("cx") || 0, o = +t.getAttribute("cy") || 0, c = a * S, i = "M" + (r + a) + "," + o + " C" + [r + a, o + u, r + c, o + s, r, o + s, r - c, o + s, r - a, o + u, r - a, o, r - a, o - u, r - c, o - s, r, o - s, r + c, o - s, r + a, o - u, r + a, o].join(",") + "z") : "line" === T ? i = "M" + (t.getAttribute("x1") || 0) + "," + (t.getAttribute("y1") || 0) + " L" + (t.getAttribute("x2") || 0) + "," + (t.getAttribute("y2") || 0) : "polyline" !== T && "polygon" !== T || (l = (t.getAttribute("points") + "").match(n) || [], r = l.shift(), o = l.shift(), i = "M" + r + "," + o + " L" + l.join(","), "polygon" === T && (i += "," + r + "," + o + "z")), h.setAttribute("d", i), e && t.parentNode && (t.parentNode.insertBefore(h, t), t.parentNode.removeChild(t)), h) : t
                    },
                    k = function (t, e, i) {
                        var o, a, s = "string" == typeof t;
                        return (!s || r.test(t) || (t.match(n) || []).length < 3) && (o = s ? c.selector(t) : t && t[0] ? t : [t], o && o[0] ? (o = o[0], a = o.nodeName.toUpperCase(), e && "PATH" !== a && (o = D(o, !1), a = "PATH"), t = o.getAttribute("PATH" === a ? "d" : "points") || "", o === i && (t = o.getAttributeNS(null, "data-original") || t)) : (u(), t = !1)), t
                    },
                    z = h._gsDefine.plugin({
                        propName: "morphSVG",
                        API: 2,
                        global: !0,
                        version: "0.8.11",
                        init: function (t, e, i, n) {
                            var r, a, h, c, l;
                            return "function" == typeof t.setAttribute && ("function" == typeof e && (e = e(n, t)), r = t.nodeName.toUpperCase(), l = "POLYLINE" === r || "POLYGON" === r, "PATH" === r || l ? (a = "PATH" === r ? "d" : "points", ("string" == typeof e || e.getBBox || e[0]) && (e = {
                                shape: e
                            }), c = k(e.shape || e.d || e.points || "", "d" === a, t), l && o.test(c) ? (u(), !1) : (c && (this._target = t, t.getAttributeNS(null, "data-original") || t.setAttributeNS(null, "data-original", t.getAttribute(a)), (h = this._addTween(t, "setAttribute", t.getAttribute(a) + "", c + "", "morphSVG", !1, a, "object" === s(e.precompile) ? function (t) {
                                t[0] = e.precompile[0], t[1] = e.precompile[1]
                            } : "d" === a ? C(e.shapeIndex, e.map || z.defaultMap, e.precompile) : R(e.shapeIndex))) && (this._overwriteProps.push("morphSVG"), h.end = c, h.endProp = a)), !0)) : (u(), !1))
                        },
                        set: function (t) {
                            var e;
                            if (this._super.setRatio.call(this, t), 1 === t)
                                for (e = this._firstPT; e;) e.end && this._target.setAttribute(e.endProp, e.end), e = e._next
                        }
                    });
                z.pathFilter = E, z.pointsFilter = O, z.subdivideRawBezier = d, z.defaultMap = "size", z.pathDataToRawBezier = function (t) {
                    return f(k(t, !0))
                }, z.equalizeSegmentQuantity = P, z.convertToPath = function (t, e) {
                    "string" == typeof t && (t = c.selector(t));
                    for (var i = t && 0 !== t.length ? t.length && t[0] && t[0].nodeType ? Array.prototype.slice.call(t, 0) : [t] : [], n = i.length; --n > -1;) i[n] = D(i[n], !1 !== e);
                    return i
                }, z.pathDataToBezier = function (t, e) {
                    var i, n, r, o, a, s, h, u, l = f(k(t, !0))[0] || [],
                        p = 0;
                    if (e = e || {}, u = e.align || e.relative, o = e.matrix || [1, 0, 0, 1, 0, 0], a = e.offsetX || 0, s = e.offsetY || 0, "relative" === u || !0 === u ? (a -= l[0] * o[0] + l[1] * o[2], s -= l[0] * o[1] + l[1] * o[3], p = "+=") : (a += o[4], s += o[5], u && (u = "string" == typeof u ? c.selector(u) : u && u[0] ? u : [u]) && u[0] && (h = u[0].getBBox() || {
                            x: 0,
                            y: 0
                        }, a -= h.x, s -= h.y)), i = [], r = l.length, o && "1,0,0,1,0,0" !== o.join(","))
                        for (n = 0; n < r; n += 2) i.push({
                            x: p + (l[n] * o[0] + l[n + 1] * o[2] + a),
                            y: p + (l[n] * o[1] + l[n + 1] * o[3] + s)
                        });
                    else
                        for (n = 0; n < r; n += 2) i.push({
                            x: p + (l[n] + a),
                            y: p + (l[n + 1] + s)
                        });
                    return i
                }
            }), h._gsDefine && h._gsQueue.pop()(),
                function (n) {
                    var s = function () {
                        return (h.GreenSockGlobals || h).MorphSVGPlugin
                    };
                    void 0 !== t && t.exports ? (i(9), t.exports = s()) : (o = [i(9)], r = s, void 0 !== (a = "function" == typeof r ? r.apply(e, o) : r) && (t.exports = a))
                }()
        }).call(e, i(4))
    },
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
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = i(2),
            s = i(1),
            h = function () {
                function t(e) {
                    r(this, t), this.$el = e, this.$refs = {
                        inner: (0, s.qs)(".panel-end__content-inner", this.$el),
                        title: (0, s.qs)(".panel-end__title"),
                        items: [].concat(n((0, s.qsa)('[type="radio"]', this.$el))),
                        go: (0, s.qs)('[type="button"]', this.$el),
                        email: (0, s.qs)('[type="email"]', this.$el),
                        submit: (0, s.qs)('[type="submit"]', this.$el)
                    }, this.onCheck = this.onCheck.bind(this), this.onGo = this.onGo.bind(this), this.onSubmit = this.onSubmit.bind(this), this.init()
                }

                return o(t, [{
                    key: "init",
                    value: function () {
                        this.bind()
                    }
                }, {
                    key: "bind",
                    value: function () {
                        var t = this;
                        this.$refs.items.forEach(function (e) {
                            (0, s.$on)(e, "change", t.onCheck)
                        }), (0, s.$on)(this.$refs.go, "click", this.onGo), (0, s.$on)(this.$el, "submit", this.onSubmit)
                    }
                }, {
                    key: "onCheck",
                    value: function () {
                        this.$refs.go.disabled = !1
                    }
                }, {
                    key: "onGo",
                    value: function () {
                        (new a.TimelineLite).set(this.$refs.email, {
                            width: 180
                        }).set(this.$refs.submit, {
                            width: "auto"
                        }).add("shrink").to(this.$refs.go, .35, {
                            width: 0
                        }, "shrink").add("grow").from([this.$refs.email, this.$refs.submit], .5, {
                            width: 0
                        }, "grow")
                    }
                }, {
                    key: "onSubmit",
                    value: function (t) {
                        t.preventDefault(), this.send()
                    }
                }, {
                    key: "send",
                    value: function () {
                        var t = this,
                            e = new FormData(this.$el);
                        fetch("process.php", {
                            method: "POST",
                            body: e
                        }).then(function (e) {
                            return t.status = e.status, e.text()
                        }).then(function (e) {
                            t.displayMessage(t.status, e)
                        })
                    }
                }, {
                    key: "displayMessage",
                    value: function (t, e) {
                        var i = this;
                        this.msg = document.createElement("div"), this.msg.classList.add("panel-end__content__message"), this.msg.innerHTML = "<strong>" + (200 === t ? "Thank you!" : "Oups!") + "</strong>\n      " + e + '<br>\n      <button type="button">' + (200 === t ? "Got it" : "Try again") + "</button>", (0, s.$insertAfter)(this.msg, this.$refs.inner), (new a.TimelineLite).to([this.$refs.title, this.$refs.inner], 1, {
                            autoAlpha: 0
                        }).to(this.msg, 1, {
                            autoAlpha: 1
                        });
                        var n = (0, s.qs)("button", this.msg);
                        (0, s.$on)(n, "click", function () {
                            200 === t ? location.reload() : i.reset()
                        })
                    }
                }, {
                    key: "reset",
                    value: function () {
                        var t = this;
                        new a.TimelineLite({
                            onComplete: function () {
                                t.msg.remove()
                            }
                        }).to(this.msg, 1, {
                            autoAlpha: 0
                        }).to([this.$refs.title, this.$refs.inner], 1, {
                            autoAlpha: 1
                        })
                    }
                }]), t
            }();
        e.default = h
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = i(61),
            s = n(a),
            h = i(0),
            c = n(h),
            u = function () {
                function t(e) {
                    r(this, t), this.panels = [{
                        name: "home",
                        img: "assets/images/bg-home-b676bd0cc2.png",
                        imgSmall: "assets/images/bg-home-small-6ae8308343.png"
                    }, {
                        name: "brain",
                        img: "assets/images/bg-brain-a8ff4f2868.png",
                        imgSmall: "assets/images/bg-brain-small-ae2481bbc2.png"
                    }, {
                        name: "gloves",
                        img: "assets/images/bg-gloves-d54f82fbaa.png",
                        imgSmall: "assets/images/bg-gloves-small-3919cb79ee.png"
                    }, {
                        name: "stadium",
                        img: "assets/images/bg-stadium-a34c07989d.png",
                        imgSmall: "assets/images/bg-stadium-small-8e1234d071.png"
                    }, {
                        name: "lsm",
                        img: "assets/images/bg-lsm-1f5e1a1d35.png",
                        imgSmall: "assets/images/bg-lsm-small-9f95aff441.png"
                    }, {
                        name: "end",
                        img: "assets/images/bg-end-65607c2cbe.png",
                        imgSmall: "assets/images/bg-end-small-5643f70c57.png"
                    }], this.$el = e, this.$refs = {
                        images: []
                    }, this.onChange = this.onChange.bind(this)
                }

                return o(t, [{
                    key: "init",
                    value: function () {
                        var t = this;
                        return new Promise(function (e) {
                            t.panels.forEach(function (e) {
                                var i = new Image;
                                i.src = e.img, i.setAttribute("srcset", e.imgSmall + " 768w, " + e.img + " 1440w"), i.setAttribute("sizes", "(max-width: 768px) 320px, 1440px"), i.dataset.image = e.name, t.$refs.images.push(i), t.$el.appendChild(i)
                            }), t.$refs.images[0].classList.add("is-active"), t.bind(), (0, s.default)(t.$el, e)
                        })
                    }
                }, {
                    key: "bind",
                    value: function () {
                        c.default.on(c.default.PANEL_CHANGE, this.onChange)
                    }
                }, {
                    key: "onChange",
                    value: function (t, e) {
                        this.$refs.images[t].classList.remove("is-active"), this.$refs.images[e].classList.add("is-active")
                    }
                }]), t
            }();
        e.default = u
    },
    function (t, e, i) {
        var n, r;
        /*!
     * imagesLoaded v4.1.4
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */
        !function (o, a) {
            "use strict";
            n = [i(62)], void 0 !== (r = function (t) {
                return a(o, t)
            }.apply(e, n)) && (t.exports = r)
        }("undefined" != typeof window ? window : this, function (t, e) {
            "use strict";

            function i(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            }

            function n(t) {
                return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? c.call(t) : [t]
            }

            function r(t, e, o) {
                if (!(this instanceof r)) return new r(t, e, o);
                var a = t;
                if ("string" == typeof t && (a = document.querySelectorAll(t)), !a) return void h.error("Bad element for imagesLoaded " + (a || t));
                this.elements = n(a), this.options = i({}, this.options), "function" == typeof e ? o = e : i(this.options, e), o && this.on("always", o), this.getImages(), s && (this.jqDeferred = new s.Deferred), setTimeout(this.check.bind(this))
            }

            function o(t) {
                this.img = t
            }

            function a(t, e) {
                this.url = t, this.element = e, this.img = new Image
            }

            var s = t.jQuery,
                h = t.console,
                c = Array.prototype.slice;
            r.prototype = Object.create(e.prototype), r.prototype.options = {}, r.prototype.getImages = function () {
                this.images = [], this.elements.forEach(this.addElementImages, this)
            }, r.prototype.addElementImages = function (t) {
                "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                var e = t.nodeType;
                if (e && u[e]) {
                    for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                        var r = i[n];
                        this.addImage(r)
                    }
                    if ("string" == typeof this.options.background) {
                        var o = t.querySelectorAll(this.options.background);
                        for (n = 0; n < o.length; n++) {
                            var a = o[n];
                            this.addElementBackgroundImages(a)
                        }
                    }
                }
            };
            var u = {
                1: !0,
                9: !0,
                11: !0
            };
            return r.prototype.addElementBackgroundImages = function (t) {
                var e = getComputedStyle(t);
                if (e)
                    for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                        var r = n && n[2];
                        r && this.addBackground(r, t), n = i.exec(e.backgroundImage)
                    }
            }, r.prototype.addImage = function (t) {
                var e = new o(t);
                this.images.push(e)
            }, r.prototype.addBackground = function (t, e) {
                var i = new a(t, e);
                this.images.push(i)
            }, r.prototype.check = function () {
                function t(t, i, n) {
                    setTimeout(function () {
                        e.progress(t, i, n)
                    })
                }

                var e = this;
                if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
                this.images.forEach(function (e) {
                    e.once("progress", t), e.check()
                })
            }, r.prototype.progress = function (t, e, i) {
                this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && h && h.log("progress: " + i, t, e)
            }, r.prototype.complete = function () {
                var t = this.hasAnyBroken ? "fail" : "done";
                if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                    var e = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[e](this)
                }
            }, o.prototype = Object.create(e.prototype), o.prototype.check = function () {
                if (this.getIsImageComplete()) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src
            }, o.prototype.getIsImageComplete = function () {
                return this.img.complete && this.img.naturalWidth
            }, o.prototype.confirm = function (t, e) {
                this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
            }, o.prototype.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, o.prototype.onload = function () {
                this.confirm(!0, "onload"), this.unbindEvents()
            }, o.prototype.onerror = function () {
                this.confirm(!1, "onerror"), this.unbindEvents()
            }, o.prototype.unbindEvents = function () {
                this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
            }, a.prototype = Object.create(o.prototype), a.prototype.check = function () {
                this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
            }, a.prototype.unbindEvents = function () {
                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
            }, a.prototype.confirm = function (t, e) {
                this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
            }, r.makeJQueryPlugin = function (e) {
                (e = e || t.jQuery) && (s = e, s.fn.imagesLoaded = function (t, e) {
                    return new r(this, t, e).jqDeferred.promise(s(this))
                })
            }, r.makeJQueryPlugin(), r
        })
    },
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
    }]);