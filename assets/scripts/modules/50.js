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
}