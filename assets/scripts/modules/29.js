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
}