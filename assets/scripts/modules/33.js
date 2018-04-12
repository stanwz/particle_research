function (module, moduleExport, __webpack_require__) {
    /**
     * @param {!AudioNode} service
     * @param {!Function} name
     * @return {undefined}
     */
    function _get(service, name) {
        if (!(service instanceof name)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    Object.defineProperty(moduleExport, "__esModule", {
        value: true
    });
    var defineProperties = function () {
        /**
         * @param {!Function} target
         * @param {string} props
         * @return {undefined}
         */
        function defineProperty(target, props) {
            /** @type {number} */
            var i = 0;
            for (; i < props.length; i++) {
                var property = props[i];
                property.enumerable = property.enumerable || false;
                /** @type {boolean} */
                property.configurable = true;
                if ("value" in property) {
                    /** @type {boolean} */
                    property.writable = true;
                }
                Object.defineProperty(target, property.key, property);
            }
        }

        return function (target, prototypeProperties, instanceProperties) {
            if (prototypeProperties) {
                defineProperty(target.prototype, prototypeProperties);
            }
            if (instanceProperties) {
                defineProperty(target, instanceProperties);
            }
            return target;
        };
    }();
    var THREE = __webpack_require__(3);
    var newOrg = function () {
        /**
         * @param {number} textureWidth
         * @param {!Object} renderer
         * @param {?} shaderMaterial
         * @return {undefined}
         */
        function init(textureWidth, renderer, shaderMaterial) {
            _get(this, init);
            var context = renderer.getContext();
            if (!context.getExtension("OES_texture_float")) {
                throw new Error("float textures not supported");
            }
            if (0 === context.getParameter(context.MAX_VERTEX_TEXTURE_IMAGE_UNITS)) {
                throw new Error("vertex shader cannot read textures");
            }
            this.scene = new THREE.Scene;
            this.orthoCamera = new THREE.OrthographicCamera(-textureWidth / 2, textureWidth / 2, textureWidth / 2, -textureWidth / 2, -1e6, 1e6);
            /** @type {number} */
            this.orthoCamera.position.z = 100;
            this.scene.add(this.orthoCamera);
            /**
             * A render target is a buffer where the video card draws pixels for a scene that is being rendered in the background.
             * It is used in different effects, such as applying postprocessing to a rendered image before displaying it on the screen.
             **/
            this.rtt = new THREE.WebGLRenderTarget(textureWidth, textureWidth, {
                wrapS: THREE.RepeatWrapping,
                wrapT: THREE.RepeatWrapping,
                minFilter: THREE.NearestFilter,
                magFilter: THREE.NearestFilter,
                format: THREE.RGBAFormat,
                type: "desktop" === Detectizr.device.type ? THREE.FloatType : THREE.HalfFloatType,
                stencilBuffer: false
            });
            var geometry = new THREE.PlaneBufferGeometry(textureWidth, textureWidth);
            var mesh = new THREE.Mesh(geometry, shaderMaterial);
            /** @type {number} */
            mesh.position.z = -5e3;
            this.scene.add(mesh);
            /** @type {!Object} */
            this.renderer = renderer;
        }

        defineProperties(init, [{
            key: "update",
            value: function () {
                this.renderer.render(this.scene, this.orthoCamera, this.rtt, false);
            }
        }]);

        return init;
    }();
    moduleExport.default = newOrg;
}