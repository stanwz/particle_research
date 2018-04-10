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
}