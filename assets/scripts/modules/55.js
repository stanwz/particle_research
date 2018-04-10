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
}