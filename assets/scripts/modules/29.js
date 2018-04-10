function (module, moduleExport, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * @param {!Array} array
     * @return {?}
     */
    function makeArray(array) {
        if (Array.isArray(array)) {
            /** @type {number} */
            var i = 0;
            /** @type {!Array} */
            var ret = Array(array.length);
            for (; i < array.length; i++) {
                ret[i] = array[i];
            }
            return ret;
        }
        return Array.from(array);
    }

    /**
     * @param {!AudioNode} t
     * @param {!Function} e
     * @return {undefined}
     */
    function _get(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    Object.defineProperty(moduleExport, "__esModule", {
        value: true
    });
    var eqPartial = function () {
        /**
         * @param {!Function} renderer
         * @param {string} props
         * @return {undefined}
         */
        function defineProperties(renderer, props) {
            /** @type {number} */
            var i = 0;
            for (; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                /** @type {boolean} */
                descriptor.configurable = true;
                if ("value" in descriptor) {
                    /** @type {boolean} */
                    descriptor.writable = true;
                }
                Object.defineProperty(renderer, descriptor.key, descriptor);
            }
        }

        return function (renderer, prototypeFuncs, funcs) {
            if (prototypeFuncs) {
                defineProperties(renderer.prototype, prototypeFuncs);
            }
            if (funcs) {
                defineProperties(renderer, funcs);
            }
            // return n && t(renderer.prototype, n), a && t(renderer, a), renderer;
            return renderer;
        };
    }();
    var THREE = __webpack_require__(3);
    var _globals = __webpack_require__(2);
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _normalizeDataUri = __webpack_require__(7);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = __webpack_require__(30);
    var _deepAssign = __webpack_require__(33);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var VertexShader = __webpack_require__(34);
    var FragmentShader = __webpack_require__(35);
    var VertexShader2 = __webpack_require__(36);
    var FragmentShader2 = __webpack_require__(37);
    var newOrg = function () {
        /**
         * @param {!Object} renderer
         * @param {!Object} camera
         * @param {string} scene
         * @return {undefined}
         */
        function render(renderer, camera, scene) {
            _get(this, render);
            /** @type {!Object} */
            this.renderer = renderer;
            /** @type {!Object} */
            this.camera = camera;
            /** @type {string} */
            this.scene = scene;
            /** @type {number} */
            this.time = 0;
            /** @type {number} */
            this.textureWidth = 256;
            /** @type {number} */
            this.textureHeight = 256;
            /** @type {boolean} */
            this.isAnimating = false;
            this.data = {
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
            };
            this.mousePos = new THREE.Vector2(0, 0);
            this.targetMousePos = new THREE.Vector2(0, 0);
            this.impactVector = new THREE.Vector3(0, 0, 0);
            this.targetImpact = new THREE.Vector3(0, 0, 0);
            /** @type {number} */
            this.impactFollowSpeed = .1;
            this.colliderMaterial = new THREE.MeshPhongMaterial({
                color: 16711680,
                transparent: true,
                depthWrite: false,
                opacity: 0
            });
            this.cameraTarget = new THREE.Vector3;
            this.update = this.update.bind(this);
            this.onChange = this.onChange.bind(this);
            this.mouseMove = this.mouseMove.bind(this);
        }

        return eqPartial(render, [{
            key: "init",
            value: function () {
                return Promise.all([this.loadTextures(), this.loadColliders()]).then(this.afterInit.bind(this));
            }
        }, {
            key: "loadTextures",
            value: function () {
                var context = this;
                return Promise.all(Object.keys(this.data).map(function (value) {
                    return context.loadTexture(value);
                })).then(function (textureData) {
                    textureData.forEach(function (data) {
                        context.data[data.name].texture = data.texture;
                    });
                });
            }
        }, {
            key: "loadTexture",
            value: function (type) {
                var options = this;
                return fetch("assets/data/" + type + "_pos.json").then(function (rawResp) {
                    return rawResp.json();
                }).then(function (state) {
                    return {
                        texture: render.createTexture(state.positions, options.textureWidth, options.textureHeight, type, 1),
                        name: type
                    };
                });
            }
        }, {
            key: "loadColliders",
            value: function () {
                var self = this;
                return Promise.all(Object.keys(this.data).map(function (type) {
                    return render.loadCollider(type);
                })).then(function (geometryData) {
                    geometryData.forEach(function (data) {
                        var name = data.name;
                        var mesh = new THREE.Mesh(data.geometry, self.colliderMaterial);
                        /** @type {boolean} */
                        mesh.visible = false;
                        mesh.name = name;
                        /** @type {number} */
                        mesh.position.z = .01;
                        self.scene.add(mesh);
                        self.data[name].collider = mesh;
                    });
                });
            }
        }, {
            key: "afterInit",
            value: function () {
                var position;
                this.data.home = {
                    camera: [0, 0, 1],
                    collider: null,
                    color: .5,
                    position: [0, 0, 0],
                    texture: render.createTexture([], this.textureWidth, this.textureHeight, "home", 1)
                };
                this.data.end = {
                    camera: [0, 0, 1],
                    collider: null,
                    color: .5,
                    position: [0, 0, 0],
                    texture: render.createTexture([], this.textureWidth, this.textureHeight, "home", 1)
                };
                /** @type {string} */
                this.currentName = "home";
                //equivalent to this.camera.position.set(this.data[this.currentName].camera);
                (position = this.camera.position).set.apply(position, makeArray(this.data[this.currentName].camera));

                //custom shader material:
                //docs: https://threejs.org/docs/#api/materials/ShaderMaterial
                this.simulationShader = new THREE.ShaderMaterial({
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
                    vertexShader: VertexShader2,
                    fragmentShader: FragmentShader2
                });

                this.fbo = new _deepAssign2.default(this.textureWidth, this.renderer, this.simulationShader);


                var geometry = new THREE.Geometry;
                //w: 256, h: 256
                var totalVertices = this.textureWidth * this.textureHeight;
                for (var y = 0; y < totalVertices; y++) {
                    var vertice = new THREE.Vector3;
                    vertice.x = y % this.textureWidth / this.textureWidth;
                    vertice.y = Math.floor(y / this.textureWidth) / this.textureHeight;
                    geometry.vertices.push(vertice);
                }
                this.renderShader = new THREE.ShaderMaterial({
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
                            value: _normalizeDataUri2.default.dpr //1
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
                            value: (new THREE.TextureLoader).load("assets/3d/particle.png", function (texture) {
                                texture.wrapS = THREE.RepeatWrapping;
                                texture.wrapT = THREE.RepeatWrapping;
                            })
                        }
                    },
                    vertexShader: VertexShader,
                    fragmentShader: FragmentShader,
                    depthTest: true,
                    transparent: true
                });
                this.mesh = new THREE.Points(geometry, this.renderShader);
                this.scene.add(this.mesh);
                this.raycaster = new THREE.Raycaster;
                this.mouseV2 = new THREE.Vector2;
                this.currentCollider = this.data[this.currentName].collider;
                this.bind();
            }
        }, {
            key: "bind",
            value: function () {
                var options = this;
                _prepareStyleProperties2.default.on(_prepareStyleProperties2.default.MOUSE_MOVE, this.mouseMove);
                _prepareStyleProperties2.default.on(_prepareStyleProperties2.default.PANEL_CHANGE, this.onChange);
                (0, _UiIcon.register)("m", {
                    match: function () {
                        options.updateMeshPosition(1, options.currentName);
                    },
                    unmatch: function () {
                        options.updateMeshPosition(1, options.currentName);
                    }
                });
            }
        }, {
            key: "getMeshPosition",
            value: function (type, name) {
                return (0, _UiIcon.isMoreThan)("m") ? this.data[type].position[name] : [0, -.25, 0][name];
            }
        }, {
            key: "updateMeshPosition",
            value: function (value, name) {
                var self = this;
                _globals.TweenMax.to([this.cameraTarget], value, {
                    x: this.getMeshPosition(name, 0),
                    y: this.getMeshPosition(name, 1),
                    z: this.getMeshPosition(name, 2),
                    ease: _globals.Back.easeOut,
                    onUpdate: function () {
                        self.camera.lookAt(self.cameraTarget);
                    }
                });
            }
        }, {
            key: "onChange",
            value: function (type, name, prop, i) {
                var state = this;
                if (!this.isAnimating) {
                    /** @type {boolean} */
                    this.isAnimating = true;
                    if (this.currentCollider) {
                        /** @type {boolean} */
                        this.currentCollider.visible = false;
                    }
                    this.currentCollider = this.data[i].collider;
                    if (this.currentCollider) {
                        /** @type {boolean} */
                        this.currentCollider.visible = true;
                    }
                    this.simulationShader.uniforms.tFrom.value = this.data[prop].texture;
                    this.simulationShader.uniforms.tTo.value = this.data[i].texture;
                    /** @type {number} */
                    this.simulationShader.uniforms.tMorph.value = 0;
                    /** @type {number} */
                    this.renderShader.uniforms.tMorph.value = 0;
                    (new _globals.TimelineLite({
                        onComplete: function () {
                            var obj1;
                            (obj1 = state.camera.position).set.apply(obj1, makeArray(state.data[i].camera));
                            _prepareStyleProperties2.default.emit(_prepareStyleProperties2.default.PANEL_END);
                            /** @type {boolean} */
                            state.isAnimating = false;
                            /** @type {string} */
                            state.currentName = i;
                        }
                    }))
                        .add("start")
                        .to([this.simulationShader.uniforms.tMorph, this.renderShader.uniforms.tMorph], 6, {
                            value: 1,
                            ease: _globals.Linear.easeNone
                        }, "start")
                        .to(this.camera.position, 6, {
                            x: this.data[i].camera[0],
                            y: this.data[i].camera[1],
                            z: this.data[i].camera[2],
                            ease: _globals.Back.easeOut
                        }, "start")
                        .to(this.renderShader.uniforms.color, 6, {
                            value: this.data[i].color,
                            ease: _globals.Power4.easeInOut
                        }, "start");
                    this.updateMeshPosition(6, i);
                }
            }
        }, {
            key: "mouseMove",
            value: function (value, name) {
                /** @type {number} */
                this.targetMousePos.x = value;
                /** @type {number} */
                this.targetMousePos.y = -name;
                /** @type {number} */
                this.mouseV2.x = 2 * value;
                /** @type {number} */
                this.mouseV2.y = 2 * -name;
                if (this.currentCollider) {
                    /** @type {number} */
                    this.impactFollowSpeed = .1;
                    this.raycaster.setFromCamera(this.mouseV2, this.camera);
                    this.intersects = this.raycaster.intersectObjects([this.currentCollider]);
                    if (this.intersects.length) {
                        this.targetImpact.x = this.intersects[0].point.x;
                        this.targetImpact.y = this.intersects[0].point.y;
                        this.targetImpact.z = this.intersects[0].point.z;
                    } else {
                        /** @type {number} */
                        this.targetImpact.z = 1;
                        /** @type {number} */
                        this.impactFollowSpeed = .01;
                    }
                }
            }
        }, {
            key: "update",
            value: function () {
                this.time += 1;
                this.simulationShader.uniforms.timer.value = this.time;
                this.renderShader.uniforms.timer.value = this.time;
                this.mousePos.x += .1 * (this.targetMousePos.x - this.mousePos.x);
                this.mousePos.y += .1 * (this.targetMousePos.y - this.mousePos.y);
                this.simulationShader.uniforms.mousePosition.value = this.mousePos;
                this.impactVector.x += (this.targetImpact.x - this.impactVector.x) * this.impactFollowSpeed;
                this.impactVector.y += (this.targetImpact.y - this.impactVector.y) * this.impactFollowSpeed;
                this.impactVector.z += (this.targetImpact.z - this.impactVector.z) * this.impactFollowSpeed;
                this.simulationShader.uniforms.impactPosition.value = this.impactVector;
                this.fbo.update();
            }
        }], [{
            key: "loadCollider",
            value: function (type) {
                return new Promise(function (resolve) {
                    (new THREE.BufferGeometryLoader).load("assets/data/" + type + "_low.json", function (geojsonGeom) {
                        resolve({
                            geometry: geojsonGeom,
                            name: type
                        });
                    });
                });
            }
        }, {
            key: "createTexture",
            value: function (positions, width, height, name) {
                var flag = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
                var data = render.getTextureData(positions, width, height, flag);
                var texture = new THREE.DataTexture(data, width, height, THREE.RGBFormat, THREE.FloatType);
                //return texture.minFilter = THREE.NearestFilter, texture.magFilter = THREE.NearestFilter, texture.name = name, texture.needsUpdate = true, texture;
                texture.minFilter = THREE.NearestFilter;
                texture.magFilter = THREE.NearestFilter;
                texture.name = name;
                texture.needsUpdate = true;
                return texture;
            }
        }, {
            key: "getTextureData",
            value: function (positions, width, height, flag) {
                /** @type {number} */
                var bufferSize = width * height * 3;
                var totalPositions = positions.length;
                /** @type {!Float32Array} */
                var buffer = new Float32Array(bufferSize);
                /** @type {number} */
                for (var j = 0; j < bufferSize; j++) {
                    /** @type {number} */
                    //flag is always 1
                    buffer[j] = j < totalPositions ? positions[j] * flag : 0;
                }
                return buffer;
            }
        }]), render;
    }();
    moduleExport.default = newOrg;
}