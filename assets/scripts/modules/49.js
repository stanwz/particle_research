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
}