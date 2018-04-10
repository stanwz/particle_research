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
}