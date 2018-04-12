function (t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function () {
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
        o = i(3),
        a = function () {
            function t(e, i, r) {
                n(this, t);
                var a = i.getContext();
                if (!a.getExtension("OES_texture_float")) throw new Error("float textures not supported");
                if (0 === a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)) throw new Error("vertex shader cannot read textures");
                this.scene = new o.Scene, this.orthoCamera = new o.OrthographicCamera(-e / 2, e / 2, e / 2, -e / 2, -1e6, 1e6), this.orthoCamera.position.z = 100, this.scene.add(this.orthoCamera), this.rtt = new o.WebGLRenderTarget(e, e, {
                    wrapS: o.RepeatWrapping,
                    wrapT: o.RepeatWrapping,
                    minFilter: o.NearestFilter,
                    magFilter: o.NearestFilter,
                    format: o.RGBAFormat,
                    type: "desktop" === Detectizr.device.type ? o.FloatType : o.HalfFloatType,
                    stencilBuffer: !1
                });
                var s = new o.PlaneBufferGeometry(e, e),
                    h = new o.Mesh(s, r);
                h.position.z = -5e3, this.scene.add(h), this.renderer = i
            }

            return r(t, [{
                key: "update",
                value: function () {
                    this.renderer.render(this.scene, this.orthoCamera, this.rtt, !1)
                }
            }]), t
        }();
    e.default = a
}