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
}