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
}