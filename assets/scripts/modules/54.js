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
}