function (t, e, i) {
    "use strict";

    function n() {
    }

    function r(t, e) {
        this.x = t || 0, this.y = e || 0
    }

    function o() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length
    }

    function a(t, e, i, n) {
        this._x = t || 0, this._y = e || 0, this._z = i || 0, this._w = void 0 !== n ? n : 1
    }

    function s(t, e, i) {
        this.x = t || 0, this.y = e || 0, this.z = i || 0
    }

    function h() {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length
    }

    function c(t, e, i, n, o, a, s, u, l, p) {
        Object.defineProperty(this, "id", {
            value: sh++
        }), this.uuid = ah.generateUUID(), this.name = "", this.image = void 0 !== t ? t : c.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : c.DEFAULT_MAPPING, this.wrapS = void 0 !== i ? i : es, this.wrapT = void 0 !== n ? n : es, this.magFilter = void 0 !== o ? o : as, this.minFilter = void 0 !== a ? a : hs, this.anisotropy = void 0 !== l ? l : 1, this.format = void 0 !== s ? s : Ms, this.type = void 0 !== u ? u : cs, this.offset = new r(0, 0), this.repeat = new r(1, 1), this.center = new r(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new h, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== p ? p : Zs, this.version = 0, this.onUpdate = null
    }

    function u(t, e, i, n) {
        this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1
    }

    function l(t, e, i) {
        this.uuid = ah.generateUUID(), this.width = t, this.height = e, this.scissor = new u(0, 0, t, e), this.scissorTest = !1, this.viewport = new u(0, 0, t, e), i = i || {}, void 0 === i.minFilter && (i.minFilter = as), this.texture = new c(void 0, void 0, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
    }

    function p(t, e, i) {
        l.call(this, t, e, i), this.activeCubeFace = 0, this.activeMipMapLevel = 0
    }

    function f(t, e, i, n, r, o, a, s, h, u, l, p) {
        c.call(this, null, o, a, s, h, u, n, r, l, p), this.image = {
            data: t,
            width: e,
            height: i
        }, this.magFilter = void 0 !== h ? h : ns, this.minFilter = void 0 !== u ? u : ns, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }

    function d(t, e, i, n, r, o, a, s, h, u) {
        t = void 0 !== t ? t : [], e = void 0 !== e ? e : qa, c.call(this, t, e, i, n, r, o, a, s, h, u), this.flipY = !1
    }

    function m() {
        this.seq = [], this.map = {}
    }

    function v(t, e, i) {
        var n = t[0];
        if (n <= 0 || n > 0) return t;
        var r = e * i,
            o = uh[r];
        if (void 0 === o && (o = new Float32Array(r), uh[r] = o), 0 !== e) {
            n.toArray(o, 0);
            for (var a = 1, s = 0; a !== e; ++a) s += i, t[a].toArray(o, s)
        }
        return o
    }

    function g(t, e) {
        var i = lh[e];
        void 0 === i && (i = new Int32Array(e), lh[e] = i);
        for (var n = 0; n !== e; ++n) i[n] = t.allocTextureUnit();
        return i
    }

    function y(t, e) {
        t.uniform1f(this.addr, e)
    }

    function _(t, e) {
        t.uniform1i(this.addr, e)
    }

    function x(t, e) {
        void 0 === e.x ? t.uniform2fv(this.addr, e) : t.uniform2f(this.addr, e.x, e.y)
    }

    function b(t, e) {
        void 0 !== e.x ? t.uniform3f(this.addr, e.x, e.y, e.z) : void 0 !== e.r ? t.uniform3f(this.addr, e.r, e.g, e.b) : t.uniform3fv(this.addr, e)
    }

    function w(t, e) {
        void 0 === e.x ? t.uniform4fv(this.addr, e) : t.uniform4f(this.addr, e.x, e.y, e.z, e.w)
    }

    function M(t, e) {
        t.uniformMatrix2fv(this.addr, !1, e.elements || e)
    }

    function T(t, e) {
        void 0 === e.elements ? t.uniformMatrix3fv(this.addr, !1, e) : (fh.set(e.elements), t.uniformMatrix3fv(this.addr, !1, fh))
    }

    function S(t, e) {
        void 0 === e.elements ? t.uniformMatrix4fv(this.addr, !1, e) : (ph.set(e.elements), t.uniformMatrix4fv(this.addr, !1, ph))
    }

    function A(t, e, i) {
        var n = i.allocTextureUnit();
        t.uniform1i(this.addr, n), i.setTexture2D(e || hh, n)
    }

    function P(t, e, i) {
        var n = i.allocTextureUnit();
        t.uniform1i(this.addr, n), i.setTextureCube(e || ch, n)
    }

    function E(t, e) {
        t.uniform2iv(this.addr, e)
    }

    function C(t, e) {
        t.uniform3iv(this.addr, e)
    }

    function L(t, e) {
        t.uniform4iv(this.addr, e)
    }

    function N(t) {
        switch (t) {
            case 5126:
                return y;
            case 35664:
                return x;
            case 35665:
                return b;
            case 35666:
                return w;
            case 35674:
                return M;
            case 35675:
                return T;
            case 35676:
                return S;
            case 35678:
            case 36198:
                return A;
            case 35680:
                return P;
            case 5124:
            case 35670:
                return _;
            case 35667:
            case 35671:
                return E;
            case 35668:
            case 35672:
                return C;
            case 35669:
            case 35673:
                return L
        }
    }

    function O(t, e) {
        t.uniform1fv(this.addr, e)
    }

    function R(t, e) {
        t.uniform1iv(this.addr, e)
    }

    function I(t, e) {
        t.uniform2fv(this.addr, v(e, this.size, 2))
    }

    function D(t, e) {
        t.uniform3fv(this.addr, v(e, this.size, 3))
    }

    function k(t, e) {
        t.uniform4fv(this.addr, v(e, this.size, 4))
    }

    function z(t, e) {
        t.uniformMatrix2fv(this.addr, !1, v(e, this.size, 4))
    }

    function U(t, e) {
        t.uniformMatrix3fv(this.addr, !1, v(e, this.size, 9))
    }

    function F(t, e) {
        t.uniformMatrix4fv(this.addr, !1, v(e, this.size, 16))
    }

    function B(t, e, i) {
        var n = e.length,
            r = g(i, n);
        t.uniform1iv(this.addr, r);
        for (var o = 0; o !== n; ++o) i.setTexture2D(e[o] || hh, r[o])
    }

    function G(t, e, i) {
        var n = e.length,
            r = g(i, n);
        t.uniform1iv(this.addr, r);
        for (var o = 0; o !== n; ++o) i.setTextureCube(e[o] || ch, r[o])
    }

    function j(t) {
        switch (t) {
            case 5126:
                return O;
            case 35664:
                return I;
            case 35665:
                return D;
            case 35666:
                return k;
            case 35674:
                return z;
            case 35675:
                return U;
            case 35676:
                return F;
            case 35678:
                return B;
            case 35680:
                return G;
            case 5124:
            case 35670:
                return R;
            case 35667:
            case 35671:
                return E;
            case 35668:
            case 35672:
                return C;
            case 35669:
            case 35673:
                return L
        }
    }

    function V(t, e, i) {
        this.id = t, this.addr = i, this.setValue = N(e.type)
    }

    function W(t, e, i) {
        this.id = t, this.addr = i, this.size = e.size, this.setValue = j(e.type)
    }

    function H(t) {
        this.id = t, m.call(this)
    }

    function X(t, e) {
        t.seq.push(e), t.map[e.id] = e
    }

    function q(t, e, i) {
        var n = t.name,
            r = n.length;
        for (dh.lastIndex = 0; ;) {
            var o = dh.exec(n),
                a = dh.lastIndex,
                s = o[1],
                h = "]" === o[2],
                c = o[3];
            if (h && (s |= 0), void 0 === c || "[" === c && a + 2 === r) {
                X(i, void 0 === c ? new V(s, t, e) : new W(s, t, e));
                break
            }
            var u = i.map,
                l = u[s];
            void 0 === l && (l = new H(s), X(i, l)), i = l
        }
    }

    function Y(t, e, i) {
        m.call(this), this.renderer = i;
        for (var n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), r = 0; r < n; ++r) {
            var o = t.getActiveUniform(e, r),
                a = o.name;
            q(o, t.getUniformLocation(e, a), this)
        }
    }

    function $(t, e, i) {
        return void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i)
    }

    function Z(t, e) {
        this.min = void 0 !== t ? t : new r(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new r(-1 / 0, -1 / 0)
    }

    function J(t, e, i, n, o) {
        function a() {
            var t = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
                n = new Uint16Array([0, 1, 2, 0, 2, 3]);
            c = e.createBuffer(), u = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, c), e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, u), e.bufferData(e.ELEMENT_ARRAY_BUFFER, n, e.STATIC_DRAW), m = e.createTexture(), v = e.createTexture(), i.bindTexture(e.TEXTURE_2D, m), e.texImage2D(e.TEXTURE_2D, 0, e.RGB, 16, 16, 0, e.RGB, e.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), i.bindTexture(e.TEXTURE_2D, v), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 16, 16, 0, e.RGBA, e.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), l = {
                vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "\tvUV = uv;", "\tvec2 pos = position;", "\tif ( renderType == 2 ) {", "\t\tvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "\t\tvVisibility =        visibility.r / 9.0;", "\t\tvVisibility *= 1.0 - visibility.g / 9.0;", "\t\tvVisibility *=       visibility.b / 9.0;", "\t\tvVisibility *= 1.0 - visibility.a / 9.0;", "\t\tpos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "\t\tpos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "\t}", "\tgl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "\tif ( renderType == 0 ) {", "\t\tgl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "\t} else if ( renderType == 1 ) {", "\t\tgl_FragColor = texture2D( map, vUV );", "\t} else {", "\t\tvec4 texture = texture2D( map, vUV );", "\t\ttexture.a *= opacity * vVisibility;", "\t\tgl_FragColor = texture;", "\t\tgl_FragColor.rgb *= color;", "\t}", "}"].join("\n")
            }, p = h(l), f = {
                vertex: e.getAttribLocation(p, "position"),
                uv: e.getAttribLocation(p, "uv")
            }, d = {
                renderType: e.getUniformLocation(p, "renderType"),
                map: e.getUniformLocation(p, "map"),
                occlusionMap: e.getUniformLocation(p, "occlusionMap"),
                opacity: e.getUniformLocation(p, "opacity"),
                color: e.getUniformLocation(p, "color"),
                scale: e.getUniformLocation(p, "scale"),
                rotation: e.getUniformLocation(p, "rotation"),
                screenPosition: e.getUniformLocation(p, "screenPosition")
            }
        }

        function h(t) {
            var i = e.createProgram(),
                n = e.createShader(e.FRAGMENT_SHADER),
                r = e.createShader(e.VERTEX_SHADER),
                a = "precision " + o.precision + " float;\n";
            return e.shaderSource(n, a + t.fragmentShader), e.shaderSource(r, a + t.vertexShader), e.compileShader(n), e.compileShader(r), e.attachShader(i, n), e.attachShader(i, r), e.linkProgram(i), i
        }

        var c, u, l, p, f, d, m, v;
        this.render = function (t, o, h, l) {
            if (0 !== t.length) {
                var g = new s,
                    y = l.w / l.z,
                    _ = .5 * l.z,
                    x = .5 * l.w,
                    b = 16 / l.w,
                    w = new r(b * y, b),
                    M = new s(1, 1, 0),
                    T = new r(1, 1),
                    S = new Z;
                S.min.set(l.x, l.y), S.max.set(l.x + (l.z - 16), l.y + (l.w - 16)), void 0 === p && a(), i.useProgram(p), i.initAttributes(), i.enableAttribute(f.vertex), i.enableAttribute(f.uv), i.disableUnusedAttributes(), e.uniform1i(d.occlusionMap, 0), e.uniform1i(d.map, 1), e.bindBuffer(e.ARRAY_BUFFER, c), e.vertexAttribPointer(f.vertex, 2, e.FLOAT, !1, 16, 0), e.vertexAttribPointer(f.uv, 2, e.FLOAT, !1, 16, 8), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, u), i.disable(e.CULL_FACE), i.buffers.depth.setMask(!1);
                for (var A = 0, P = t.length; A < P; A++) {
                    b = 16 / l.w, w.set(b * y, b);
                    var E = t[A];
                    if (g.set(E.matrixWorld.elements[12], E.matrixWorld.elements[13], E.matrixWorld.elements[14]), g.applyMatrix4(h.matrixWorldInverse), g.applyMatrix4(h.projectionMatrix), M.copy(g), T.x = l.x + M.x * _ + _ - 8, T.y = l.y + M.y * x + x - 8, !0 === S.containsPoint(T)) {
                        i.activeTexture(e.TEXTURE0), i.bindTexture(e.TEXTURE_2D, null), i.activeTexture(e.TEXTURE1), i.bindTexture(e.TEXTURE_2D, m), e.copyTexImage2D(e.TEXTURE_2D, 0, e.RGB, T.x, T.y, 16, 16, 0), e.uniform1i(d.renderType, 0), e.uniform2f(d.scale, w.x, w.y), e.uniform3f(d.screenPosition, M.x, M.y, M.z), i.disable(e.BLEND), i.enable(e.DEPTH_TEST), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), i.activeTexture(e.TEXTURE0), i.bindTexture(e.TEXTURE_2D, v), e.copyTexImage2D(e.TEXTURE_2D, 0, e.RGBA, T.x, T.y, 16, 16, 0), e.uniform1i(d.renderType, 1), i.disable(e.DEPTH_TEST), i.activeTexture(e.TEXTURE1), i.bindTexture(e.TEXTURE_2D, m), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), E.positionScreen.copy(M), E.customUpdateCallback ? E.customUpdateCallback(E) : E.updateLensFlares(), e.uniform1i(d.renderType, 2), i.enable(e.BLEND);
                        for (var C = 0, L = E.lensFlares.length; C < L; C++) {
                            var N = E.lensFlares[C];
                            N.opacity > .001 && N.scale > .001 && (M.x = N.x, M.y = N.y, M.z = N.z, b = N.size * N.scale / l.w, w.x = b * y, w.y = b, e.uniform3f(d.screenPosition, M.x, M.y, M.z), e.uniform2f(d.scale, w.x, w.y), e.uniform1f(d.rotation, N.rotation), e.uniform1f(d.opacity, N.opacity), e.uniform3f(d.color, N.color.r, N.color.g, N.color.b), i.setBlending(N.blending, N.blendEquation, N.blendSrc, N.blendDst), n.setTexture2D(N.texture, 1), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0))
                        }
                    }
                }
                i.enable(e.CULL_FACE), i.enable(e.DEPTH_TEST), i.buffers.depth.setMask(!0), i.reset()
            }
        }
    }

    function Q(t, e, i, n, r, o, a, s, h) {
        c.call(this, t, e, i, n, r, o, a, s, h), this.needsUpdate = !0
    }

    function K(t, e, i, n, r) {
        function o() {
            var t = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
                i = new Uint16Array([0, 1, 2, 0, 2, 3]);
            u = e.createBuffer(), l = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, u), e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, l), e.bufferData(e.ELEMENT_ARRAY_BUFFER, i, e.STATIC_DRAW), p = h(), f = {
                position: e.getAttribLocation(p, "position"),
                uv: e.getAttribLocation(p, "uv")
            }, d = {
                uvOffset: e.getUniformLocation(p, "uvOffset"),
                uvScale: e.getUniformLocation(p, "uvScale"),
                rotation: e.getUniformLocation(p, "rotation"),
                scale: e.getUniformLocation(p, "scale"),
                color: e.getUniformLocation(p, "color"),
                map: e.getUniformLocation(p, "map"),
                opacity: e.getUniformLocation(p, "opacity"),
                modelViewMatrix: e.getUniformLocation(p, "modelViewMatrix"),
                projectionMatrix: e.getUniformLocation(p, "projectionMatrix"),
                fogType: e.getUniformLocation(p, "fogType"),
                fogDensity: e.getUniformLocation(p, "fogDensity"),
                fogNear: e.getUniformLocation(p, "fogNear"),
                fogFar: e.getUniformLocation(p, "fogFar"),
                fogColor: e.getUniformLocation(p, "fogColor"),
                fogDepth: e.getUniformLocation(p, "fogDepth"),
                alphaTest: e.getUniformLocation(p, "alphaTest")
            };
            var n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
            n.width = 8, n.height = 8;
            var r = n.getContext("2d");
            r.fillStyle = "white", r.fillRect(0, 0, 8, 8), m = new Q(n)
        }

        function h() {
            var t = e.createProgram(),
                i = e.createShader(e.VERTEX_SHADER),
                n = e.createShader(e.FRAGMENT_SHADER);
            return e.shaderSource(i, ["precision " + r.precision + " float;", "#define SHADER_NAME SpriteMaterial", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float fogDepth;", "void main() {", "\tvUV = uvOffset + uv * uvScale;", "\tvec2 alignedPosition = position * scale;", "\tvec2 rotatedPosition;", "\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "\tvec4 mvPosition;", "\tmvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "\tmvPosition.xy += rotatedPosition;", "\tgl_Position = projectionMatrix * mvPosition;", "\tfogDepth = - mvPosition.z;", "}"].join("\n")), e.shaderSource(n, ["precision " + r.precision + " float;", "#define SHADER_NAME SpriteMaterial", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "varying float fogDepth;", "void main() {", "\tvec4 texture = texture2D( map, vUV );", "\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "\tif ( gl_FragColor.a < alphaTest ) discard;", "\tif ( fogType > 0 ) {", "\t\tfloat fogFactor = 0.0;", "\t\tif ( fogType == 1 ) {", "\t\t\tfogFactor = smoothstep( fogNear, fogFar, fogDepth );", "\t\t} else {", "\t\t\tconst float LOG2 = 1.442695;", "\t\t\tfogFactor = exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 );", "\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "\t\t}", "\t\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );", "\t}", "}"].join("\n")), e.compileShader(i), e.compileShader(n), e.attachShader(t, i), e.attachShader(t, n), e.linkProgram(t), t
        }

        function c(t, e) {
            return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : e.id - t.id
        }

        var u, l, p, f, d, m, v = new s,
            g = new a,
            y = new s;
        this.render = function (r, a, s) {
            if (0 !== r.length) {
                void 0 === p && o(), i.useProgram(p), i.initAttributes(), i.enableAttribute(f.position), i.enableAttribute(f.uv), i.disableUnusedAttributes(), i.disable(e.CULL_FACE), i.enable(e.BLEND), e.bindBuffer(e.ARRAY_BUFFER, u), e.vertexAttribPointer(f.position, 2, e.FLOAT, !1, 16, 0), e.vertexAttribPointer(f.uv, 2, e.FLOAT, !1, 16, 8), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, l), e.uniformMatrix4fv(d.projectionMatrix, !1, s.projectionMatrix.elements), i.activeTexture(e.TEXTURE0), e.uniform1i(d.map, 0);
                var h = 0,
                    _ = 0,
                    x = a.fog;
                x ? (e.uniform3f(d.fogColor, x.color.r, x.color.g, x.color.b), x.isFog ? (e.uniform1f(d.fogNear, x.near), e.uniform1f(d.fogFar, x.far), e.uniform1i(d.fogType, 1), h = 1, _ = 1) : x.isFogExp2 && (e.uniform1f(d.fogDensity, x.density), e.uniform1i(d.fogType, 2), h = 2, _ = 2)) : (e.uniform1i(d.fogType, 0), h = 0, _ = 0);
                for (var b = 0, w = r.length; b < w; b++) {
                    var M = r[b];
                    M.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, M.matrixWorld), M.z = -M.modelViewMatrix.elements[14]
                }
                r.sort(c);
                for (var T = [], b = 0, w = r.length; b < w; b++) {
                    var M = r[b],
                        S = M.material;
                    if (!1 !== S.visible) {
                        M.onBeforeRender(t, a, s, void 0, S, void 0), e.uniform1f(d.alphaTest, S.alphaTest), e.uniformMatrix4fv(d.modelViewMatrix, !1, M.modelViewMatrix.elements), M.matrixWorld.decompose(v, g, y), T[0] = y.x, T[1] = y.y;
                        var A = 0;
                        a.fog && S.fog && (A = _), h !== A && (e.uniform1i(d.fogType, A), h = A), null !== S.map ? (e.uniform2f(d.uvOffset, S.map.offset.x, S.map.offset.y), e.uniform2f(d.uvScale, S.map.repeat.x, S.map.repeat.y)) : (e.uniform2f(d.uvOffset, 0, 0), e.uniform2f(d.uvScale, 1, 1)), e.uniform1f(d.opacity, S.opacity), e.uniform3f(d.color, S.color.r, S.color.g, S.color.b), e.uniform1f(d.rotation, S.rotation), e.uniform2fv(d.scale, T), i.setBlending(S.blending, S.blendEquation, S.blendSrc, S.blendDst, S.blendEquationAlpha, S.blendSrcAlpha, S.blendDstAlpha, S.premultipliedAlpha), i.buffers.depth.setTest(S.depthTest), i.buffers.depth.setMask(S.depthWrite), i.buffers.color.setMask(S.colorWrite), n.setTexture2D(S.map || m, 0), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), M.onAfterRender(t, a, s, void 0, S, void 0)
                    }
                }
                i.enable(e.CULL_FACE), i.reset()
            }
        }
    }

    function tt() {
        Object.defineProperty(this, "id", {
            value: xh++
        }), this.uuid = ah.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = ca, this.side = ta, this.flatShading = !1, this.vertexColors = oa, this.opacity = 1, this.transparent = !1, this.blendSrc = Ma, this.blendDst = Ta, this.blendEquation = da, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Ra, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this.userData = {}, this.needsUpdate = !0
    }

    function et(t) {
        tt.call(this), this.type = "MeshDepthMaterial", this.depthPacking = rh, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(t)
    }

    function it(t) {
        tt.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new s, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.lights = !1, this.setValues(t)
    }

    function nt(t, e) {
        this.min = void 0 !== t ? t : new s(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new s(-1 / 0, -1 / 0, -1 / 0)
    }

    function rt(t, e) {
        this.center = void 0 !== t ? t : new s, this.radius = void 0 !== e ? e : 0
    }

    function ot(t, e) {
        this.normal = void 0 !== t ? t : new s(1, 0, 0), this.constant = void 0 !== e ? e : 0
    }

    function at(t, e, i, n, r, o) {
        this.planes = [void 0 !== t ? t : new ot, void 0 !== e ? e : new ot, void 0 !== i ? i : new ot, void 0 !== n ? n : new ot, void 0 !== r ? r : new ot, void 0 !== o ? o : new ot]
    }

    function st(t, e, i) {
        function n(e, i, n, r, o, a) {
            var s = e.geometry,
                h = null,
                c = _,
                u = e.customDepthMaterial;
            if (n && (c = x, u = e.customDistanceMaterial), u) h = u;
            else {
                var l = !1;
                i.morphTargets && (s && s.isBufferGeometry ? l = s.morphAttributes && s.morphAttributes.position && s.morphAttributes.position.length > 0 : s && s.isGeometry && (l = s.morphTargets && s.morphTargets.length > 0)), e.isSkinnedMesh && i.skinning;
                var p = e.isSkinnedMesh && i.skinning,
                    f = 0;
                l && (f |= v), p && (f |= g), h = c[f]
            }
            if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
                var d = h.uuid,
                    m = i.uuid,
                    y = b[d];
                void 0 === y && (y = {}, b[d] = y);
                var w = y[m];
                void 0 === w && (w = h.clone(), y[m] = w), h = w
            }
            h.visible = i.visible, h.wireframe = i.wireframe;
            var M = i.side;
            return L.renderSingleSided && M == ia && (M = ta), L.renderReverseSided && (M === ta ? M = ea : M === ea && (M = ta)), h.side = M, h.clipShadows = i.clipShadows, h.clippingPlanes = i.clippingPlanes, h.clipIntersection = i.clipIntersection, h.wireframeLinewidth = i.wireframeLinewidth, h.linewidth = i.linewidth, n && h.isMeshDistanceMaterial && (h.referencePosition.copy(r), h.nearDistance = o, h.farDistance = a), h
        }

        function a(i, r, o, s) {
            if (!1 !== i.visible) {
                if (i.layers.test(r.layers) && (i.isMesh || i.isLine || i.isPoints) && i.castShadow && (!i.frustumCulled || h.intersectsObject(i))) {
                    i.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse, i.matrixWorld);
                    var c = e.update(i),
                        u = i.material;
                    if (Array.isArray(u))
                        for (var l = c.groups, p = 0, f = l.length; p < f; p++) {
                            var d = l[p],
                                v = u[d.materialIndex];
                            if (v && v.visible) {
                                var g = n(i, v, s, m, o.near, o.far);
                                t.renderBufferDirect(o, null, c, g, i, d)
                            }
                        } else if (u.visible) {
                        var g = n(i, u, s, m, o.near, o.far);
                        t.renderBufferDirect(o, null, c, g, i, null)
                    }
                }
                for (var y = i.children, _ = 0, x = y.length; _ < x; _++) a(y[_], r, o, s)
            }
        }

        for (var h = new at, c = new o, p = new r, f = new r(i, i), d = new s, m = new s, v = 1, g = 2, y = 1 + (v | g), _ = new Array(y), x = new Array(y), b = {}, w = [new s(1, 0, 0), new s(-1, 0, 0), new s(0, 0, 1), new s(0, 0, -1), new s(0, 1, 0), new s(0, -1, 0)], M = [new s(0, 1, 0), new s(0, 1, 0), new s(0, 1, 0), new s(0, 1, 0), new s(0, 0, 1), new s(0, 0, -1)], T = [new u, new u, new u, new u, new u, new u], S = 0; S !== y; ++S) {
            var A = 0 != (S & v),
                P = 0 != (S & g),
                E = new et({
                    depthPacking: oh,
                    morphTargets: A,
                    skinning: P
                });
            _[S] = E;
            var C = new it({
                morphTargets: A,
                skinning: P
            });
            x[S] = C
        }
        var L = this;
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Qo, this.renderReverseSided = !0, this.renderSingleSided = !0, this.render = function (e, i, n) {
            if (!1 !== L.enabled && (!1 !== L.autoUpdate || !1 !== L.needsUpdate) && 0 !== e.length) {
                var r = t.context,
                    o = t.state;
                o.disable(r.BLEND), o.buffers.color.setClear(1, 1, 1, 1), o.buffers.depth.setTest(!0), o.setScissorTest(!1);
                for (var s, u = 0, v = e.length; u < v; u++) {
                    var g = e[u],
                        y = g.shadow,
                        _ = g && g.isPointLight;
                    if (void 0 !== y) {
                        var x = y.camera;
                        if (p.copy(y.mapSize), p.min(f), _) {
                            var b = p.x,
                                S = p.y;
                            T[0].set(2 * b, S, b, S), T[1].set(0, S, b, S), T[2].set(3 * b, S, b, S), T[3].set(b, S, b, S), T[4].set(3 * b, 0, b, S), T[5].set(b, 0, b, S), p.x *= 4, p.y *= 2
                        }
                        if (null === y.map) {
                            var A = {
                                minFilter: ns,
                                magFilter: ns,
                                format: Ms
                            };
                            y.map = new l(p.x, p.y, A), y.map.texture.name = g.name + ".shadowMap", x.updateProjectionMatrix()
                        }
                        y.isSpotLightShadow && y.update(g);
                        var P = y.map,
                            E = y.matrix;
                        m.setFromMatrixPosition(g.matrixWorld), x.position.copy(m), _ ? (s = 6, E.makeTranslation(-m.x, -m.y, -m.z)) : (s = 1, d.setFromMatrixPosition(g.target.matrixWorld), x.lookAt(d), x.updateMatrixWorld(), E.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), E.multiply(x.projectionMatrix), E.multiply(x.matrixWorldInverse)), t.setRenderTarget(P), t.clear();
                        for (var C = 0; C < s; C++) {
                            if (_) {
                                d.copy(x.position), d.add(w[C]), x.up.copy(M[C]), x.lookAt(d), x.updateMatrixWorld();
                                var N = T[C];
                                o.viewport(N)
                            }
                            c.multiplyMatrices(x.projectionMatrix, x.matrixWorldInverse), h.setFromMatrix(c), a(i, n, x, _)
                        }
                    }
                }
                L.needsUpdate = !1
            }
        }
    }

    function ht(t) {
        function e(e, i) {
            var n = e.array,
                r = e.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW,
                o = t.createBuffer();
            t.bindBuffer(i, o), t.bufferData(i, n, r), e.onUploadCallback();
            var a = t.FLOAT;
            return n instanceof Float32Array ? a = t.FLOAT : n instanceof Float64Array || (n instanceof Uint16Array ? a = t.UNSIGNED_SHORT : n instanceof Int16Array ? a = t.SHORT : n instanceof Uint32Array ? a = t.UNSIGNED_INT : n instanceof Int32Array ? a = t.INT : n instanceof Int8Array ? a = t.BYTE : n instanceof Uint8Array && (a = t.UNSIGNED_BYTE)), {
                buffer: o,
                type: a,
                bytesPerElement: n.BYTES_PER_ELEMENT,
                version: e.version
            }
        }

        function i(e, i, n) {
            var r = i.array,
                o = i.updateRange;
            t.bindBuffer(n, e), !1 === i.dynamic ? t.bufferData(n, r, t.STATIC_DRAW) : -1 === o.count ? t.bufferSubData(n, 0, r) : 0 === o.count || (t.bufferSubData(n, o.offset * r.BYTES_PER_ELEMENT, r.subarray(o.offset, o.offset + o.count)), o.count = -1)
        }

        function n(t) {
            return t.isInterleavedBufferAttribute && (t = t.data), a[t.uuid]
        }

        function r(e) {
            e.isInterleavedBufferAttribute && (e = e.data);
            var i = a[e.uuid];
            i && (t.deleteBuffer(i.buffer), delete a[e.uuid])
        }

        function o(t, n) {
            t.isInterleavedBufferAttribute && (t = t.data);
            var r = a[t.uuid];
            void 0 === r ? a[t.uuid] = e(t, n) : r.version < t.version && (i(r.buffer, t, n), r.version = t.version)
        }

        var a = {};
        return {
            get: n,
            remove: r,
            update: o
        }
    }

    function ct(t, e, i, n) {
        this._x = t || 0, this._y = e || 0, this._z = i || 0, this._order = n || ct.DefaultOrder
    }

    function ut() {
        this.mask = 1
    }

    function lt() {
        function t() {
            r.setFromEuler(n, !1)
        }

        function e() {
            n.setFromQuaternion(r, void 0, !1)
        }

        Object.defineProperty(this, "id", {
            value: bh++
        }), this.uuid = ah.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = lt.DefaultUp.clone();
        var i = new s,
            n = new ct,
            r = new a,
            c = new s(1, 1, 1);
        n.onChange(t), r.onChange(e), Object.defineProperties(this, {
            position: {
                enumerable: !0,
                value: i
            },
            rotation: {
                enumerable: !0,
                value: n
            },
            quaternion: {
                enumerable: !0,
                value: r
            },
            scale: {
                enumerable: !0,
                value: c
            },
            modelViewMatrix: {
                value: new o
            },
            normalMatrix: {
                value: new h
            }
        }), this.matrix = new o, this.matrixWorld = new o, this.matrixAutoUpdate = lt.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new ut, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
    }

    function pt() {
        lt.call(this), this.type = "Camera", this.matrixWorldInverse = new o, this.projectionMatrix = new o
    }

    function ft(t, e, i, n, r, o) {
        pt.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = n, this.near = void 0 !== r ? r : .1, this.far = void 0 !== o ? o : 2e3, this.updateProjectionMatrix()
    }

    function dt(t, e, i, n, r, o) {
        this.a = t, this.b = e, this.c = i, this.normal = n && n.isVector3 ? n : new s, this.vertexNormals = Array.isArray(n) ? n : [], this.color = r && r.isColor ? r : new $, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== o ? o : 0
    }

    function mt() {
        Object.defineProperty(this, "id", {
            value: wh += 2
        }), this.uuid = ah.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
            []
        ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
    }

    function vt(t, e, i) {
        if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.uuid = ah.generateUUID(), this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === i, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.onUploadCallback = function () {
        }, this.version = 0
    }

    function gt(t, e, i) {
        vt.call(this, new Int8Array(t), e, i)
    }

    function yt(t, e, i) {
        vt.call(this, new Uint8Array(t), e, i)
    }

    function _t(t, e, i) {
        vt.call(this, new Uint8ClampedArray(t), e, i)
    }

    function xt(t, e, i) {
        vt.call(this, new Int16Array(t), e, i)
    }

    function bt(t, e, i) {
        vt.call(this, new Uint16Array(t), e, i)
    }

    function wt(t, e, i) {
        vt.call(this, new Int32Array(t), e, i)
    }

    function Mt(t, e, i) {
        vt.call(this, new Uint32Array(t), e, i)
    }

    function Tt(t, e, i) {
        vt.call(this, new Float32Array(t), e, i)
    }

    function St(t, e, i) {
        vt.call(this, new Float64Array(t), e, i)
    }

    function At() {
        this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
    }

    function Pt(t) {
        if (0 === t.length) return -1 / 0;
        for (var e = t[0], i = 1, n = t.length; i < n; ++i) t[i] > e && (e = t[i]);
        return e
    }

    function Et() {
        Object.defineProperty(this, "id", {
            value: Mh += 2
        }), this.uuid = ah.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }
    }

    function Ct(t, e, i, n, r, o) {
        mt.call(this), this.type = "BoxGeometry", this.parameters = {
            width: t,
            height: e,
            depth: i,
            widthSegments: n,
            heightSegments: r,
            depthSegments: o
        }, this.fromBufferGeometry(new Lt(t, e, i, n, r, o)), this.mergeVertices()
    }

    function Lt(t, e, i, n, r, o) {
        function a(t, e, i, n, r, o, a, m, v, g, y) {
            var _, x, b = o / v,
                w = a / g,
                M = o / 2,
                T = a / 2,
                S = m / 2,
                A = v + 1,
                P = g + 1,
                E = 0,
                C = 0,
                L = new s;
            for (x = 0; x < P; x++) {
                var N = x * w - T;
                for (_ = 0; _ < A; _++) {
                    var O = _ * b - M;
                    L[t] = O * n, L[e] = N * r, L[i] = S, u.push(L.x, L.y, L.z), L[t] = 0, L[e] = 0, L[i] = m > 0 ? 1 : -1, l.push(L.x, L.y, L.z), p.push(_ / v), p.push(1 - x / g), E += 1
                }
            }
            for (x = 0; x < g; x++)
                for (_ = 0; _ < v; _++) {
                    var R = f + _ + A * x,
                        I = f + _ + A * (x + 1),
                        D = f + (_ + 1) + A * (x + 1),
                        k = f + (_ + 1) + A * x;
                    c.push(R, I, k), c.push(I, D, k), C += 6
                }
            h.addGroup(d, C, y), d += C, f += E
        }

        Et.call(this), this.type = "BoxBufferGeometry", this.parameters = {
            width: t,
            height: e,
            depth: i,
            widthSegments: n,
            heightSegments: r,
            depthSegments: o
        };
        var h = this;
        t = t || 1, e = e || 1, i = i || 1, n = Math.floor(n) || 1, r = Math.floor(r) || 1, o = Math.floor(o) || 1;
        var c = [],
            u = [],
            l = [],
            p = [],
            f = 0,
            d = 0;
        a("z", "y", "x", -1, -1, i, e, t, o, r, 0), a("z", "y", "x", 1, -1, i, e, -t, o, r, 1), a("x", "z", "y", 1, 1, t, i, e, n, o, 2), a("x", "z", "y", 1, -1, t, i, -e, n, o, 3), a("x", "y", "z", 1, -1, t, e, i, n, r, 4), a("x", "y", "z", -1, -1, t, e, -i, n, r, 5), this.setIndex(c), this.addAttribute("position", new Tt(u, 3)), this.addAttribute("normal", new Tt(l, 3)), this.addAttribute("uv", new Tt(p, 2))
    }

    function Nt(t, e, i, n) {
        mt.call(this), this.type = "PlaneGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: i,
            heightSegments: n
        }, this.fromBufferGeometry(new Ot(t, e, i, n)), this.mergeVertices()
    }

    function Ot(t, e, i, n) {
        Et.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: i,
            heightSegments: n
        }, t = t || 1, e = e || 1;
        var r, o, a = t / 2,
            s = e / 2,
            h = Math.floor(i) || 1,
            c = Math.floor(n) || 1,
            u = h + 1,
            l = c + 1,
            p = t / h,
            f = e / c,
            d = [],
            m = [],
            v = [],
            g = [];
        for (o = 0; o < l; o++) {
            var y = o * f - s;
            for (r = 0; r < u; r++) {
                var _ = r * p - a;
                m.push(_, -y, 0), v.push(0, 0, 1), g.push(r / h), g.push(1 - o / c)
            }
        }
        for (o = 0; o < c; o++)
            for (r = 0; r < h; r++) {
                var x = r + u * o,
                    b = r + u * (o + 1),
                    w = r + 1 + u * (o + 1),
                    M = r + 1 + u * o;
                d.push(x, b, M), d.push(b, w, M)
            }
        this.setIndex(d), this.addAttribute("position", new Tt(m, 3)), this.addAttribute("normal", new Tt(v, 3)), this.addAttribute("uv", new Tt(g, 2))
    }

    function Rt(t) {
        tt.call(this), this.type = "MeshBasicMaterial", this.color = new $(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Ua, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(t)
    }

    function It(t) {
        tt.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        }, this.index0AttributeName = void 0, void 0 !== t && (t.attributes, this.setValues(t))
    }

    function Dt(t, e) {
        this.origin = void 0 !== t ? t : new s, this.direction = void 0 !== e ? e : new s
    }

    function kt(t, e) {
        this.start = void 0 !== t ? t : new s, this.end = void 0 !== e ? e : new s
    }

    function zt(t, e, i) {
        this.a = void 0 !== t ? t : new s, this.b = void 0 !== e ? e : new s, this.c = void 0 !== i ? i : new s
    }

    function Ut(t, e) {
        lt.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new Et, this.material = void 0 !== e ? e : new Rt({
            color: 16777215 * Math.random()
        }), this.drawMode = qs, this.updateMorphTargets()
    }

    function Ft(t, e, i, n) {
        function r(e, n, r, l) {
            var p = n.background;
            null === p ? o(c, u) : p && p.isColor && (o(p, 1), l = !0), (t.autoClear || l) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), p && p.isCubeTexture ? (void 0 === h && (h = new Ut(new Lt(1, 1, 1), new It({
                uniforms: _h.cube.uniforms,
                vertexShader: _h.cube.vertexShader,
                fragmentShader: _h.cube.fragmentShader,
                side: ea,
                depthTest: !0,
                depthWrite: !1,
                fog: !1
            })), h.geometry.removeAttribute("normal"), h.geometry.removeAttribute("uv"), h.onBeforeRender = function (t, e, i) {
                this.matrixWorld.copyPosition(i.matrixWorld)
            }, i.update(h.geometry)), h.material.uniforms.tCube.value = p, e.push(h, h.geometry, h.material, 0, null)) : p && p.isTexture && (void 0 === a && (a = new ft(-1, 1, 1, -1, 0, 1), s = new Ut(new Ot(2, 2), new Rt({
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            })), i.update(s.geometry)), s.material.map = p, t.renderBufferDirect(a, null, s.geometry, s.material, s, null))
        }

        function o(t, i) {
            e.buffers.color.setClear(t.r, t.g, t.b, i, n)
        }

        var a, s, h, c = new $(0),
            u = 0;
        return {
            getClearColor: function () {
                return c
            },
            setClearColor: function (t, e) {
                c.set(t), u = void 0 !== e ? e : 1, o(c, u)
            },
            getClearAlpha: function () {
                return u
            },
            setClearAlpha: function (t) {
                u = t, o(c, u)
            },
            render: r
        }
    }

    function Bt(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
    }

    function Gt(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
    }

    function jt() {
        function t() {
            r = 0, o.length = 0, a.length = 0
        }

        function e(t, e, i, s, h) {
            var c = n[r];
            void 0 === c ? (c = {
                id: t.id,
                object: t,
                geometry: e,
                material: i,
                program: i.program,
                renderOrder: t.renderOrder,
                z: s,
                group: h
            }, n[r] = c) : (c.id = t.id, c.object = t, c.geometry = e, c.material = i, c.program = i.program, c.renderOrder = t.renderOrder, c.z = s, c.group = h), (!0 === i.transparent ? a : o).push(c), r++
        }

        function i() {
            o.length > 1 && o.sort(Bt), a.length > 1 && a.sort(Gt)
        }

        var n = [],
            r = 0,
            o = [],
            a = [];
        return {
            opaque: o,
            transparent: a,
            init: t,
            push: e,
            sort: i
        }
    }

    function Vt() {
        function t(t, e) {
            var n = t.id + "," + e.id,
                r = i[n];
            return void 0 === r && (r = new jt, i[n] = r), r
        }

        function e() {
            i = {}
        }

        var i = {};
        return {
            get: t,
            dispose: e
        }
    }

    function Wt(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1])
    }

    function Ht(t) {
        function e(e, r, o, a) {
            var s = e.morphTargetInfluences,
                h = s.length,
                c = i[r.id];
            if (void 0 === c) {
                c = [];
                for (var u = 0; u < h; u++) c[u] = [u, 0];
                i[r.id] = c
            }
            for (var l = o.morphTargets && r.morphAttributes.position, p = o.morphNormals && r.morphAttributes.normal, u = 0; u < h; u++) {
                var f = c[u];
                0 !== f[1] && (l && r.removeAttribute("morphTarget" + u), p && r.removeAttribute("morphNormal" + u))
            }
            for (var u = 0; u < h; u++) {
                var f = c[u];
                f[0] = u, f[1] = s[u]
            }
            c.sort(Wt);
            for (var u = 0; u < 8; u++) {
                var f = c[u];
                if (f) {
                    var d = f[0],
                        m = f[1];
                    if (m) {
                        l && r.addAttribute("morphTarget" + u, l[d]), p && r.addAttribute("morphNormal" + u, p[d]), n[u] = m;
                        continue
                    }
                }
                n[u] = 0
            }
            a.getUniforms().setValue(t, "morphTargetInfluences", n)
        }

        var i = {},
            n = new Float32Array(8);
        return {
            update: e
        }
    }

    function Xt(t, e, i) {
        function n(t) {
            s = t
        }

        function r(t) {
            h = t.type, c = t.bytesPerElement
        }

        function o(e, n) {
            t.drawElements(s, n, h, e * c), i.calls++, i.vertices += n, s === t.TRIANGLES ? i.faces += n / 3 : s === t.POINTS && (i.points += n)
        }

        function a(n, r, o) {
            var a = e.get("ANGLE_instanced_arrays");
            null !== a && (a.drawElementsInstancedANGLE(s, o, h, r * c, n.maxInstancedCount), i.calls++, i.vertices += o * n.maxInstancedCount, s === t.TRIANGLES ? i.faces += n.maxInstancedCount * o / 3 : s === t.POINTS && (i.points += n.maxInstancedCount * o))
        }

        var s, h, c;
        this.setMode = n, this.setIndex = r, this.render = o, this.renderInstances = a
    }

    function qt(t, e, i) {
        function n(t) {
            a = t
        }

        function r(e, n) {
            t.drawArrays(a, e, n), i.calls++, i.vertices += n, a === t.TRIANGLES ? i.faces += n / 3 : a === t.POINTS && (i.points += n)
        }

        function o(n, r, o) {
            var s = e.get("ANGLE_instanced_arrays");
            if (null !== s) {
                var h = n.attributes.position;
                h.isInterleavedBufferAttribute ? (o = h.data.count, s.drawArraysInstancedANGLE(a, 0, o, n.maxInstancedCount)) : s.drawArraysInstancedANGLE(a, r, o, n.maxInstancedCount), i.calls++, i.vertices += o * n.maxInstancedCount, a === t.TRIANGLES ? i.faces += n.maxInstancedCount * o / 3 : a === t.POINTS && (i.points += n.maxInstancedCount * o)
            }
        }

        var a;
        this.setMode = n, this.render = r, this.renderInstances = o
    }

    function Yt(t, e, i) {
        function n(t) {
            var r = t.target,
                o = s[r.id];
            null !== o.index && e.remove(o.index);
            for (var a in o.attributes) e.remove(o.attributes[a]);
            r.removeEventListener("dispose", n), delete s[r.id];
            var c = h[r.id];
            c && (e.remove(c), delete h[r.id]), c = h[o.id], c && (e.remove(c), delete h[o.id]), i.geometries--
        }

        function r(t, e) {
            var r = s[e.id];
            return r || (e.addEventListener("dispose", n), e.isBufferGeometry ? r = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new Et).setFromObject(t)), r = e._bufferGeometry), s[e.id] = r, i.geometries++, r)
        }

        function o(i) {
            var n = i.index,
                r = i.attributes;
            null !== n && e.update(n, t.ELEMENT_ARRAY_BUFFER);
            for (var o in r) e.update(r[o], t.ARRAY_BUFFER);
            var a = i.morphAttributes;
            for (var o in a)
                for (var s = a[o], h = 0, c = s.length; h < c; h++) e.update(s[h], t.ARRAY_BUFFER)
        }

        function a(i) {
            var n = h[i.id];
            if (n) return n;
            var r = [],
                o = i.index,
                a = i.attributes;
            if (null !== o)
                for (var s = o.array, c = 0, u = s.length; c < u; c += 3) {
                    var l = s[c + 0],
                        p = s[c + 1],
                        f = s[c + 2];
                    r.push(l, p, p, f, f, l)
                } else
                for (var s = a.position.array, c = 0, u = s.length / 3 - 1; c < u; c += 3) {
                    var l = c + 0,
                        p = c + 1,
                        f = c + 2;
                    r.push(l, p, p, f, f, l)
                }
            return n = new (Pt(r) > 65535 ? Mt : bt)(r, 1), e.update(n, t.ELEMENT_ARRAY_BUFFER), h[i.id] = n, n
        }

        var s = {},
            h = {};
        return {
            get: r,
            update: o,
            getWireframeAttribute: a
        }
    }

    function $t() {
        var t = {};
        return {
            get: function (e) {
                if (void 0 !== t[e.id]) return t[e.id];
                var i;
                switch (e.type) {
                    case "DirectionalLight":
                        i = {
                            direction: new s,
                            color: new $,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new r
                        };
                        break;
                    case "SpotLight":
                        i = {
                            position: new s,
                            direction: new s,
                            color: new $,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new r
                        };
                        break;
                    case "PointLight":
                        i = {
                            position: new s,
                            color: new $,
                            distance: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new r,
                            shadowCameraNear: 1,
                            shadowCameraFar: 1e3
                        };
                        break;
                    case "HemisphereLight":
                        i = {
                            direction: new s,
                            skyColor: new $,
                            groundColor: new $
                        };
                        break;
                    case "RectAreaLight":
                        i = {
                            color: new $,
                            position: new s,
                            halfWidth: new s,
                            halfHeight: new s
                        }
                }
                return t[e.id] = i, i
            }
        }
    }

    function Zt() {
        function t(t, o, s) {
            for (var h = 0, c = 0, u = 0, l = 0, p = 0, f = 0, d = 0, m = 0, v = s.matrixWorldInverse, g = 0, y = t.length; g < y; g++) {
                var _ = t[g],
                    x = _.color,
                    b = _.intensity,
                    w = _.distance,
                    M = _.shadow && _.shadow.map ? _.shadow.map.texture : null;
                if (_.isAmbientLight) h += x.r * b, c += x.g * b, u += x.b * b;
                else if (_.isDirectionalLight) {
                    var T = e.get(_);
                    if (T.color.copy(_.color).multiplyScalar(_.intensity), T.direction.setFromMatrixPosition(_.matrixWorld), n.setFromMatrixPosition(_.target.matrixWorld), T.direction.sub(n), T.direction.transformDirection(v), T.shadow = _.castShadow, _.castShadow) {
                        var S = _.shadow;
                        T.shadowBias = S.bias, T.shadowRadius = S.radius, T.shadowMapSize = S.mapSize
                    }
                    i.directionalShadowMap[l] = M, i.directionalShadowMatrix[l] = _.shadow.matrix, i.directional[l] = T, l++
                } else if (_.isSpotLight) {
                    var T = e.get(_);
                    if (T.position.setFromMatrixPosition(_.matrixWorld), T.position.applyMatrix4(v), T.color.copy(x).multiplyScalar(b), T.distance = w, T.direction.setFromMatrixPosition(_.matrixWorld), n.setFromMatrixPosition(_.target.matrixWorld), T.direction.sub(n), T.direction.transformDirection(v), T.coneCos = Math.cos(_.angle), T.penumbraCos = Math.cos(_.angle * (1 - _.penumbra)), T.decay = 0 === _.distance ? 0 : _.decay, T.shadow = _.castShadow, _.castShadow) {
                        var S = _.shadow;
                        T.shadowBias = S.bias, T.shadowRadius = S.radius, T.shadowMapSize = S.mapSize
                    }
                    i.spotShadowMap[f] = M, i.spotShadowMatrix[f] = _.shadow.matrix, i.spot[f] = T, f++
                } else if (_.isRectAreaLight) {
                    var T = e.get(_);
                    T.color.copy(x).multiplyScalar(b / (_.width * _.height)), T.position.setFromMatrixPosition(_.matrixWorld), T.position.applyMatrix4(v), a.identity(), r.copy(_.matrixWorld), r.premultiply(v), a.extractRotation(r), T.halfWidth.set(.5 * _.width, 0, 0), T.halfHeight.set(0, .5 * _.height, 0), T.halfWidth.applyMatrix4(a), T.halfHeight.applyMatrix4(a), i.rectArea[d] = T, d++
                } else if (_.isPointLight) {
                    var T = e.get(_);
                    if (T.position.setFromMatrixPosition(_.matrixWorld), T.position.applyMatrix4(v), T.color.copy(_.color).multiplyScalar(_.intensity), T.distance = _.distance, T.decay = 0 === _.distance ? 0 : _.decay, T.shadow = _.castShadow, _.castShadow) {
                        var S = _.shadow;
                        T.shadowBias = S.bias, T.shadowRadius = S.radius, T.shadowMapSize = S.mapSize, T.shadowCameraNear = S.camera.near, T.shadowCameraFar = S.camera.far
                    }
                    i.pointShadowMap[p] = M, i.pointShadowMatrix[p] = _.shadow.matrix, i.point[p] = T, p++
                } else if (_.isHemisphereLight) {
                    var T = e.get(_);
                    T.direction.setFromMatrixPosition(_.matrixWorld), T.direction.transformDirection(v), T.direction.normalize(), T.skyColor.copy(_.color).multiplyScalar(b), T.groundColor.copy(_.groundColor).multiplyScalar(b), i.hemi[m] = T, m++
                }
            }
            i.ambient[0] = h, i.ambient[1] = c, i.ambient[2] = u, i.directional.length = l, i.spot.length = f, i.rectArea.length = d, i.point.length = p, i.hemi.length = m, i.hash = l + "," + p + "," + f + "," + d + "," + m + "," + o.length
        }

        var e = new $t,
            i = {
                hash: "",
                ambient: [0, 0, 0],
                directional: [],
                directionalShadowMap: [],
                directionalShadowMatrix: [],
                spot: [],
                spotShadowMap: [],
                spotShadowMatrix: [],
                rectArea: [],
                point: [],
                pointShadowMap: [],
                pointShadowMatrix: [],
                hemi: []
            },
            n = new s,
            r = new o,
            a = new o;
        return {
            setup: t,
            state: i
        }
    }

    function Jt(t, e) {
        function i(i) {
            var n = e.frame,
                o = i.geometry,
                a = t.get(i, o);
            return r[a.id] !== n && (o.isGeometry && a.updateFromObject(i), t.update(a), r[a.id] = n), a
        }

        function n() {
            r = {}
        }

        var r = {};
        return {
            update: i,
            clear: n
        }
    }

    function Qt(t, e, i) {
        var n = t.createShader(e);
        return t.shaderSource(n, i), t.compileShader(n), t.getShaderParameter(n, t.COMPILE_STATUS), t.getShaderInfoLog(n), n
    }

    function Kt(t) {
        switch (t) {
            case Zs:
                return ["Linear", "( value )"];
            case Js:
                return ["sRGB", "( value )"];
            case Ks:
                return ["RGBE", "( value )"];
            case eh:
                return ["RGBM", "( value, 7.0 )"];
            case ih:
                return ["RGBM", "( value, 16.0 )"];
            case nh:
                return ["RGBD", "( value, 256.0 )"];
            case Qs:
                return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
            default:
                throw new Error("unsupported encoding: " + t)
        }
    }

    function te(t, e) {
        var i = Kt(e);
        return "vec4 " + t + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }"
    }

    function ee(t, e) {
        var i = Kt(e);
        return "vec4 " + t + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }"
    }

    function ie(t, e) {
        var i;
        switch (e) {
            case ja:
                i = "Linear";
                break;
            case Va:
                i = "Reinhard";
                break;
            case Wa:
                i = "Uncharted2";
                break;
            case Ha:
                i = "OptimizedCineon";
                break;
            default:
                throw new Error("unsupported toneMapping: " + e)
        }
        return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
    }

    function ne(t, e, i) {
        return t = t || {}, [t.derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(ae).join("\n")
    }

    function re(t) {
        var e = [];
        for (var i in t) {
            var n = t[i];
            !1 !== n && e.push("#define " + i + " " + n)
        }
        return e.join("\n")
    }

    function oe(t, e) {
        for (var i = {}, n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), r = 0; r < n; r++) {
            var o = t.getActiveAttrib(e, r),
                a = o.name;
            i[a] = t.getAttribLocation(e, a)
        }
        return i
    }

    function ae(t) {
        return "" !== t
    }

    function se(t, e) {
        return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    }

    function he(t) {
        function e(t, e) {
            var i = yh[e];
            if (void 0 === i) throw new Error("Can not resolve #include <" + e + ">");
            return he(i)
        }

        var i = /^[ \t]*#include +<([\w\d.]+)>/gm;
        return t.replace(i, e)
    }

    function ce(t) {
        function e(t, e, i, n) {
            for (var r = "", o = parseInt(e); o < parseInt(i); o++) r += n.replace(/\[ i \]/g, "[ " + o + " ]");
            return r
        }

        var i = /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
        return t.replace(i, e)
    }

    function ue(t, e, i, n, r, o) {
        var a = t.context,
            s = n.defines,
            h = r.vertexShader,
            c = r.fragmentShader,
            u = "SHADOWMAP_TYPE_BASIC";
        o.shadowMapType === Qo ? u = "SHADOWMAP_TYPE_PCF" : o.shadowMapType === Ko && (u = "SHADOWMAP_TYPE_PCF_SOFT");
        var l = "ENVMAP_TYPE_CUBE",
            p = "ENVMAP_MODE_REFLECTION",
            f = "ENVMAP_BLENDING_MULTIPLY";
        if (o.envMap) {
            switch (n.envMap.mapping) {
                case qa:
                case Ya:
                    l = "ENVMAP_TYPE_CUBE";
                    break;
                case Qa:
                case Ka:
                    l = "ENVMAP_TYPE_CUBE_UV";
                    break;
                case $a:
                case Za:
                    l = "ENVMAP_TYPE_EQUIREC";
                    break;
                case Ja:
                    l = "ENVMAP_TYPE_SPHERE"
            }
            switch (n.envMap.mapping) {
                case Ya:
                case Za:
                    p = "ENVMAP_MODE_REFRACTION"
            }
            switch (n.combine) {
                case Ua:
                    f = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case Fa:
                    f = "ENVMAP_BLENDING_MIX";
                    break;
                case Ba:
                    f = "ENVMAP_BLENDING_ADD"
            }
        }
        var d, m, v = t.gammaFactor > 0 ? t.gammaFactor : 1,
            g = ne(n.extensions, o, e),
            y = re(s),
            _ = a.createProgram();
        n.isRawShaderMaterial ? (d = [y].filter(ae).join("\n"), d.length > 0 && (d += "\n"), m = [g, y].filter(ae).join("\n"), m.length > 0 && (m += "\n")) : (d = ["precision " + o.precision + " float;", "precision " + o.precision + " int;", "#define SHADER_NAME " + r.name, y, o.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + v, "#define MAX_BONES " + o.maxBones, o.useFog && o.fog ? "#define USE_FOG" : "", o.useFog && o.fogExp ? "#define FOG_EXP2" : "", o.map ? "#define USE_MAP" : "", o.envMap ? "#define USE_ENVMAP" : "", o.envMap ? "#define " + p : "", o.lightMap ? "#define USE_LIGHTMAP" : "", o.aoMap ? "#define USE_AOMAP" : "", o.emissiveMap ? "#define USE_EMISSIVEMAP" : "", o.bumpMap ? "#define USE_BUMPMAP" : "", o.normalMap ? "#define USE_NORMALMAP" : "", o.displacementMap && o.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", o.specularMap ? "#define USE_SPECULARMAP" : "", o.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", o.metalnessMap ? "#define USE_METALNESSMAP" : "", o.alphaMap ? "#define USE_ALPHAMAP" : "", o.vertexColors ? "#define USE_COLOR" : "", o.flatShading ? "#define FLAT_SHADED" : "", o.skinning ? "#define USE_SKINNING" : "", o.useVertexTexture ? "#define BONE_TEXTURE" : "", o.morphTargets ? "#define USE_MORPHTARGETS" : "", o.morphNormals && !1 === o.flatShading ? "#define USE_MORPHNORMALS" : "", o.doubleSided ? "#define DOUBLE_SIDED" : "", o.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + o.numClippingPlanes, o.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", o.shadowMapEnabled ? "#define " + u : "", o.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", o.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", o.logarithmicDepthBuffer && e.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(ae).join("\n"), m = [g, "precision " + o.precision + " float;", "precision " + o.precision + " int;", "#define SHADER_NAME " + r.name, y, o.alphaTest ? "#define ALPHATEST " + o.alphaTest : "", "#define GAMMA_FACTOR " + v, o.useFog && o.fog ? "#define USE_FOG" : "", o.useFog && o.fogExp ? "#define FOG_EXP2" : "", o.map ? "#define USE_MAP" : "", o.envMap ? "#define USE_ENVMAP" : "", o.envMap ? "#define " + l : "", o.envMap ? "#define " + p : "", o.envMap ? "#define " + f : "", o.lightMap ? "#define USE_LIGHTMAP" : "", o.aoMap ? "#define USE_AOMAP" : "", o.emissiveMap ? "#define USE_EMISSIVEMAP" : "", o.bumpMap ? "#define USE_BUMPMAP" : "", o.normalMap ? "#define USE_NORMALMAP" : "", o.specularMap ? "#define USE_SPECULARMAP" : "", o.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", o.metalnessMap ? "#define USE_METALNESSMAP" : "", o.alphaMap ? "#define USE_ALPHAMAP" : "", o.vertexColors ? "#define USE_COLOR" : "", o.gradientMap ? "#define USE_GRADIENTMAP" : "", o.flatShading ? "#define FLAT_SHADED" : "", o.doubleSided ? "#define DOUBLE_SIDED" : "", o.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + o.numClippingPlanes, "#define UNION_CLIPPING_PLANES " + (o.numClippingPlanes - o.numClipIntersection), o.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", o.shadowMapEnabled ? "#define " + u : "", o.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", o.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", o.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", o.logarithmicDepthBuffer && e.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", o.envMap && e.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", o.toneMapping !== Ga ? "#define TONE_MAPPING" : "", o.toneMapping !== Ga ? yh.tonemapping_pars_fragment : "", o.toneMapping !== Ga ? ie("toneMapping", o.toneMapping) : "", o.dithering ? "#define DITHERING" : "", o.outputEncoding || o.mapEncoding || o.envMapEncoding || o.emissiveMapEncoding ? yh.encodings_pars_fragment : "", o.mapEncoding ? te("mapTexelToLinear", o.mapEncoding) : "", o.envMapEncoding ? te("envMapTexelToLinear", o.envMapEncoding) : "", o.emissiveMapEncoding ? te("emissiveMapTexelToLinear", o.emissiveMapEncoding) : "", o.outputEncoding ? ee("linearToOutputTexel", o.outputEncoding) : "", o.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(ae).join("\n")), h = he(h), h = se(h, o), c = he(c), c = se(c, o), n.isShaderMaterial || (h = ce(h), c = ce(c));
        var x = d + h,
            b = m + c,
            w = Qt(a, a.VERTEX_SHADER, x),
            M = Qt(a, a.FRAGMENT_SHADER, b);
        a.attachShader(_, w), a.attachShader(_, M), void 0 !== n.index0AttributeName ? a.bindAttribLocation(_, 0, n.index0AttributeName) : !0 === o.morphTargets && a.bindAttribLocation(_, 0, "position"), a.linkProgram(_);
        var T = a.getProgramInfoLog(_),
            S = a.getShaderInfoLog(w),
            A = a.getShaderInfoLog(M),
            P = !0,
            E = !0;
        !1 === a.getProgramParameter(_, a.LINK_STATUS) ? P = !1 : "" !== T || "" !== S && "" !== A || (E = !1), E && (this.diagnostics = {
            runnable: P,
            material: n,
            programLog: T,
            vertexShader: {
                log: S,
                prefix: d
            },
            fragmentShader: {
                log: A,
                prefix: m
            }
        }), a.deleteShader(w), a.deleteShader(M);
        var C;
        this.getUniforms = function () {
            return void 0 === C && (C = new Y(a, _, t)), C
        };
        var L;
        return this.getAttributes = function () {
            return void 0 === L && (L = oe(a, _)), L
        }, this.destroy = function () {
            a.deleteProgram(_), this.program = void 0
        }, Object.defineProperties(this, {
            uniforms: {
                get: function () {
                    return this.getUniforms()
                }
            },
            attributes: {
                get: function () {
                    return this.getAttributes()
                }
            }
        }), this.id = Th++, this.code = i, this.usedTimes = 1, this.program = _, this.vertexShader = w, this.fragmentShader = M, this
    }

    function le(t, e, i) {
        function n(t) {
            var e = t.skeleton,
                n = e.bones;
            if (i.floatVertexTextures) return 1024;
            var r = i.maxVertexUniforms,
                o = Math.floor((r - 20) / 4),
                a = Math.min(o, n.length);
            return a < n.length ? 0 : a
        }

        function r(t, e) {
            var i;
            return t ? t.isTexture ? i = t.encoding : t.isWebGLRenderTarget && (i = t.texture.encoding) : i = Zs, i === Zs && e && (i = Qs), i
        }

        var o = [],
            a = {
                MeshDepthMaterial: "depth",
                MeshDistanceMaterial: "distanceRGBA",
                MeshNormalMaterial: "normal",
                MeshBasicMaterial: "basic",
                MeshLambertMaterial: "lambert",
                MeshPhongMaterial: "phong",
                MeshToonMaterial: "phong",
                MeshStandardMaterial: "physical",
                MeshPhysicalMaterial: "physical",
                LineBasicMaterial: "basic",
                LineDashedMaterial: "dashed",
                PointsMaterial: "points",
                ShadowMaterial: "shadow"
            },
            s = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];
        this.getParameters = function (e, o, s, h, c, u, l) {
            var p = a[e.type],
                f = l.isSkinnedMesh ? n(l) : 0,
                d = i.precision;
            null !== e.precision && (d = i.getMaxPrecision(e.precision), e.precision);
            var m = t.getRenderTarget();
            return {
                shaderID: p,
                precision: d,
                supportsVertexTextures: i.vertexTextures,
                outputEncoding: r(m ? m.texture : null, t.gammaOutput),
                map: !!e.map,
                mapEncoding: r(e.map, t.gammaInput),
                envMap: !!e.envMap,
                envMapMode: e.envMap && e.envMap.mapping,
                envMapEncoding: r(e.envMap, t.gammaInput),
                envMapCubeUV: !!e.envMap && (e.envMap.mapping === Qa || e.envMap.mapping === Ka),
                lightMap: !!e.lightMap,
                aoMap: !!e.aoMap,
                emissiveMap: !!e.emissiveMap,
                emissiveMapEncoding: r(e.emissiveMap, t.gammaInput),
                bumpMap: !!e.bumpMap,
                normalMap: !!e.normalMap,
                displacementMap: !!e.displacementMap,
                roughnessMap: !!e.roughnessMap,
                metalnessMap: !!e.metalnessMap,
                specularMap: !!e.specularMap,
                alphaMap: !!e.alphaMap,
                gradientMap: !!e.gradientMap,
                combine: e.combine,
                vertexColors: e.vertexColors,
                fog: !!h,
                useFog: e.fog,
                fogExp: h && h.isFogExp2,
                flatShading: e.flatShading,
                sizeAttenuation: e.sizeAttenuation,
                logarithmicDepthBuffer: i.logarithmicDepthBuffer,
                skinning: e.skinning && f > 0,
                maxBones: f,
                useVertexTexture: i.floatVertexTextures,
                morphTargets: e.morphTargets,
                morphNormals: e.morphNormals,
                maxMorphTargets: t.maxMorphTargets,
                maxMorphNormals: t.maxMorphNormals,
                numDirLights: o.directional.length,
                numPointLights: o.point.length,
                numSpotLights: o.spot.length,
                numRectAreaLights: o.rectArea.length,
                numHemiLights: o.hemi.length,
                numClippingPlanes: c,
                numClipIntersection: u,
                dithering: e.dithering,
                shadowMapEnabled: t.shadowMap.enabled && l.receiveShadow && s.length > 0,
                shadowMapType: t.shadowMap.type,
                toneMapping: t.toneMapping,
                physicallyCorrectLights: t.physicallyCorrectLights,
                premultipliedAlpha: e.premultipliedAlpha,
                alphaTest: e.alphaTest,
                doubleSided: e.side === ia,
                flipSided: e.side === ea,
                depthPacking: void 0 !== e.depthPacking && e.depthPacking
            }
        }, this.getProgramCode = function (e, i) {
            var n = [];
            if (i.shaderID ? n.push(i.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines)
                for (var r in e.defines) n.push(r), n.push(e.defines[r]);
            for (var o = 0; o < s.length; o++) n.push(i[s[o]]);
            return n.push(e.onBeforeCompile.toString()), n.push(t.gammaOutput), n.join()
        }, this.acquireProgram = function (i, n, r, a) {
            for (var s, h = 0, c = o.length; h < c; h++) {
                var u = o[h];
                if (u.code === a) {
                    s = u, ++s.usedTimes;
                    break
                }
            }
            return void 0 === s && (s = new ue(t, e, a, i, n, r), o.push(s)), s
        }, this.releaseProgram = function (t) {
            if (0 == --t.usedTimes) {
                var e = o.indexOf(t);
                o[e] = o[o.length - 1], o.pop(), t.destroy()
            }
        }, this.programs = o
    }

    function pe(t, e, i, n, r, o, a) {
        function s(t, e) {
            if (t.width > e || t.height > e) {
                var i = e / Math.max(t.width, t.height),
                    n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                n.width = Math.floor(t.width * i), n.height = Math.floor(t.height * i);
                return n.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, n.width, n.height), n
            }
            return t
        }

        function h(t) {
            return ah.isPowerOfTwo(t.width) && ah.isPowerOfTwo(t.height)
        }

        function c(t) {
            if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageBitmap) {
                var e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                e.width = ah.floorPowerOfTwo(t.width), e.height = ah.floorPowerOfTwo(t.height);
                return e.getContext("2d").drawImage(t, 0, 0, e.width, e.height), e
            }
            return t
        }

        function u(t) {
            return t.wrapS !== es || t.wrapT !== es || t.minFilter !== ns && t.minFilter !== as
        }

        function l(t, e) {
            return t.generateMipmaps && e && t.minFilter !== ns && t.minFilter !== as
        }

        function p(e) {
            return e === ns || e === rs || e === os ? t.NEAREST : t.LINEAR
        }

        function f(t) {
            var e = t.target;
            e.removeEventListener("dispose", f), m(e), e.isVideoTexture && delete L[e.id], a.textures--
        }

        function d(t) {
            var e = t.target;
            e.removeEventListener("dispose", d), v(e), a.textures--
        }

        function m(e) {
            var i = n.get(e);
            if (e.image && i.__image__webglTextureCube) t.deleteTexture(i.__image__webglTextureCube);
            else {
                if (void 0 === i.__webglInit) return;
                t.deleteTexture(i.__webglTexture)
            }
            n.remove(e)
        }

        function v(e) {
            var i = n.get(e),
                r = n.get(e.texture);
            if (e) {
                if (void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture), e.depthTexture && e.depthTexture.dispose(), e.isWebGLRenderTargetCube)
                    for (var o = 0; o < 6; o++) t.deleteFramebuffer(i.__webglFramebuffer[o]), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer[o]);
                else t.deleteFramebuffer(i.__webglFramebuffer), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer);
                n.remove(e.texture), n.remove(e)
            }
        }

        function g(e, r) {
            var o = n.get(e);
            if (e.version > 0 && o.__version !== e.version) {
                var a = e.image;
                if (void 0 === a) ;
                else if (!1 !== a.complete) return void b(o, e, r)
            }
            i.activeTexture(t.TEXTURE0 + r), i.bindTexture(t.TEXTURE_2D, o.__webglTexture)
        }

        function y(e, c) {
            var u = n.get(e);
            if (6 === e.image.length)
                if (e.version > 0 && u.__version !== e.version) {
                    u.__image__webglTextureCube || (e.addEventListener("dispose", f), u.__image__webglTextureCube = t.createTexture(), a.textures++), i.activeTexture(t.TEXTURE0 + c), i.bindTexture(t.TEXTURE_CUBE_MAP, u.__image__webglTextureCube), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e.flipY);
                    for (var p = e && e.isCompressedTexture, d = e.image[0] && e.image[0].isDataTexture, m = [], v = 0; v < 6; v++) m[v] = p || d ? d ? e.image[v].image : e.image[v] : s(e.image[v], r.maxCubemapSize);
                    var g = m[0],
                        y = h(g),
                        _ = o.convert(e.format),
                        b = o.convert(e.type);
                    x(t.TEXTURE_CUBE_MAP, e, y);
                    for (var v = 0; v < 6; v++)
                        if (p)
                            for (var w, M = m[v].mipmaps, T = 0, S = M.length; T < S; T++) w = M[T], e.format !== Ms && e.format !== ws ? i.getCompressedTextureFormats().indexOf(_) > -1 && i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + v, T, _, w.width, w.height, 0, w.data) : i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + v, T, _, w.width, w.height, 0, _, b, w.data);
                        else d ? i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + v, 0, _, m[v].width, m[v].height, 0, _, b, m[v].data) : i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + v, 0, _, _, b, m[v]);
                    l(e, y) && t.generateMipmap(t.TEXTURE_CUBE_MAP), u.__version = e.version, e.onUpdate && e.onUpdate(e)
                } else i.activeTexture(t.TEXTURE0 + c), i.bindTexture(t.TEXTURE_CUBE_MAP, u.__image__webglTextureCube)
        }

        function _(e, r) {
            i.activeTexture(t.TEXTURE0 + r), i.bindTexture(t.TEXTURE_CUBE_MAP, n.get(e).__webglTexture)
        }

        function x(i, a, s) {
            var h;
            if (s ? (t.texParameteri(i, t.TEXTURE_WRAP_S, o.convert(a.wrapS)), t.texParameteri(i, t.TEXTURE_WRAP_T, o.convert(a.wrapT)), t.texParameteri(i, t.TEXTURE_MAG_FILTER, o.convert(a.magFilter)), t.texParameteri(i, t.TEXTURE_MIN_FILTER, o.convert(a.minFilter))) : (t.texParameteri(i, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(i, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), a.wrapS !== es || a.wrapT, t.texParameteri(i, t.TEXTURE_MAG_FILTER, p(a.magFilter)), t.texParameteri(i, t.TEXTURE_MIN_FILTER, p(a.minFilter)), a.minFilter !== ns && a.minFilter), h = e.get("EXT_texture_filter_anisotropic")) {
                if (a.type === ms && null === e.get("OES_texture_float_linear")) return;
                if (a.type === vs && null === e.get("OES_texture_half_float_linear")) return;
                (a.anisotropy > 1 || n.get(a).__currentAnisotropy) && (t.texParameterf(i, h.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), n.get(a).__currentAnisotropy = a.anisotropy)
            }
        }

        function b(e, n, p) {
            void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", f), e.__webglTexture = t.createTexture(), n.isVideoTexture && (L[n.id] = n), a.textures++), i.activeTexture(t.TEXTURE0 + p), i.bindTexture(t.TEXTURE_2D, e.__webglTexture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, n.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, n.unpackAlignment);
            var d = s(n.image, r.maxTextureSize);
            u(n) && !1 === h(d) && (d = c(d));
            var m = h(d),
                v = o.convert(n.format),
                g = o.convert(n.type);
            x(t.TEXTURE_2D, n, m);
            var y, _ = n.mipmaps;
            if (n.isDepthTexture) {
                var b = t.DEPTH_COMPONENT;
                if (n.type === ms) {
                    if (!C) throw new Error("Float Depth Texture only supported in WebGL2.0");
                    b = t.DEPTH_COMPONENT32F
                } else C && (b = t.DEPTH_COMPONENT16);
                n.format === Ps && b === t.DEPTH_COMPONENT && n.type !== ps && n.type !== ds && (n.type = ps, g = o.convert(n.type)), n.format === Es && (b = t.DEPTH_STENCIL, n.type !== xs && (n.type = xs, g = o.convert(n.type))), i.texImage2D(t.TEXTURE_2D, 0, b, d.width, d.height, 0, v, g, null)
            } else if (n.isDataTexture)
                if (_.length > 0 && m) {
                    for (var w = 0, M = _.length; w < M; w++) y = _[w], i.texImage2D(t.TEXTURE_2D, w, v, y.width, y.height, 0, v, g, y.data);
                    n.generateMipmaps = !1
                } else i.texImage2D(t.TEXTURE_2D, 0, v, d.width, d.height, 0, v, g, d.data);
            else if (n.isCompressedTexture)
                for (var w = 0, M = _.length; w < M; w++) y = _[w], n.format !== Ms && n.format !== ws ? i.getCompressedTextureFormats().indexOf(v) > -1 && i.compressedTexImage2D(t.TEXTURE_2D, w, v, y.width, y.height, 0, y.data) : i.texImage2D(t.TEXTURE_2D, w, v, y.width, y.height, 0, v, g, y.data);
            else if (_.length > 0 && m) {
                for (var w = 0, M = _.length; w < M; w++) y = _[w], i.texImage2D(t.TEXTURE_2D, w, v, v, g, y);
                n.generateMipmaps = !1
            } else i.texImage2D(t.TEXTURE_2D, 0, v, v, g, d);
            l(n, m) && t.generateMipmap(t.TEXTURE_2D), e.__version = n.version, n.onUpdate && n.onUpdate(n)
        }

        function w(e, r, a, s) {
            var h = o.convert(r.texture.format),
                c = o.convert(r.texture.type);
            i.texImage2D(s, 0, h, r.width, r.height, 0, h, c, null), t.bindFramebuffer(t.FRAMEBUFFER, e), t.framebufferTexture2D(t.FRAMEBUFFER, a, s, n.get(r.texture).__webglTexture, 0), t.bindFramebuffer(t.FRAMEBUFFER, null)
        }

        function M(e, i) {
            t.bindRenderbuffer(t.RENDERBUFFER, e), i.depthBuffer && !i.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, i.width, i.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)) : i.depthBuffer && i.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, i.width, i.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)) : t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, i.width, i.height), t.bindRenderbuffer(t.RENDERBUFFER, null)
        }

        function T(e, i) {
            if (i && i.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported");
            if (t.bindFramebuffer(t.FRAMEBUFFER, e), !i.depthTexture || !i.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
            n.get(i.depthTexture).__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image.height === i.height || (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), g(i.depthTexture, 0);
            var r = n.get(i.depthTexture).__webglTexture;
            if (i.depthTexture.format === Ps) t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, r, 0);
            else {
                if (i.depthTexture.format !== Es) throw new Error("Unknown depthTexture format");
                t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, r, 0)
            }
        }

        function S(e) {
            var i = n.get(e),
                r = !0 === e.isWebGLRenderTargetCube;
            if (e.depthTexture) {
                if (r) throw new Error("target.depthTexture not supported in Cube render targets");
                T(i.__webglFramebuffer, e)
            } else if (r) {
                i.__webglDepthbuffer = [];
                for (var o = 0; o < 6; o++) t.bindFramebuffer(t.FRAMEBUFFER, i.__webglFramebuffer[o]), i.__webglDepthbuffer[o] = t.createRenderbuffer(), M(i.__webglDepthbuffer[o], e)
            } else t.bindFramebuffer(t.FRAMEBUFFER, i.__webglFramebuffer), i.__webglDepthbuffer = t.createRenderbuffer(), M(i.__webglDepthbuffer, e);
            t.bindFramebuffer(t.FRAMEBUFFER, null)
        }

        function A(e) {
            var r = n.get(e),
                o = n.get(e.texture);
            e.addEventListener("dispose", d), o.__webglTexture = t.createTexture(), a.textures++;
            var s = !0 === e.isWebGLRenderTargetCube,
                c = h(e);
            if (s) {
                r.__webglFramebuffer = [];
                for (var u = 0; u < 6; u++) r.__webglFramebuffer[u] = t.createFramebuffer()
            } else r.__webglFramebuffer = t.createFramebuffer();
            if (s) {
                i.bindTexture(t.TEXTURE_CUBE_MAP, o.__webglTexture), x(t.TEXTURE_CUBE_MAP, e.texture, c);
                for (var u = 0; u < 6; u++) w(r.__webglFramebuffer[u], e, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + u);
                l(e.texture, c) && t.generateMipmap(t.TEXTURE_CUBE_MAP), i.bindTexture(t.TEXTURE_CUBE_MAP, null)
            } else i.bindTexture(t.TEXTURE_2D, o.__webglTexture), x(t.TEXTURE_2D, e.texture, c), w(r.__webglFramebuffer, e, t.COLOR_ATTACHMENT0, t.TEXTURE_2D), l(e.texture, c) && t.generateMipmap(t.TEXTURE_2D), i.bindTexture(t.TEXTURE_2D, null);
            e.depthBuffer && S(e)
        }

        function P(e) {
            var r = e.texture;
            if (l(r, h(e))) {
                var o = e.isWebGLRenderTargetCube ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D,
                    a = n.get(r).__webglTexture;
                i.bindTexture(o, a), t.generateMipmap(o), i.bindTexture(o, null)
            }
        }

        function E() {
            for (var t in L) L[t].update()
        }

        var C = "undefined" != typeof WebGL2RenderingContext && t instanceof window.WebGL2RenderingContext,
            L = {};
        this.setTexture2D = g, this.setTextureCube = y, this.setTextureCubeDynamic = _, this.setupRenderTarget = A, this.updateRenderTargetMipmap = P, this.updateVideoTextures = E
    }

    function fe() {
        function t(t) {
            var e = t.uuid,
                i = n[e];
            return void 0 === i && (i = {}, n[e] = i), i
        }

        function e(t) {
            delete n[t.uuid]
        }

        function i() {
            n = {}
        }

        var n = {};
        return {
            get: t,
            remove: e,
            clear: i
        }
    }

    function de(t, e, i) {
        function n() {
            var e = !1,
                i = new u,
                n = null,
                r = new u(0, 0, 0, 0);
            return {
                setMask: function (i) {
                    n === i || e || (t.colorMask(i, i, i, i), n = i)
                },
                setLocked: function (t) {
                    e = t
                },
                setClear: function (e, n, o, a, s) {
                    !0 === s && (e *= a, n *= a, o *= a), i.set(e, n, o, a), !1 === r.equals(i) && (t.clearColor(e, n, o, a), r.copy(i))
                },
                reset: function () {
                    e = !1, n = null, r.set(-1, 0, 0, 0)
                }
            }
        }

        function r() {
            var e = !1,
                i = null,
                n = null,
                r = null;
            return {
                setTest: function (e) {
                    e ? p(t.DEPTH_TEST) : f(t.DEPTH_TEST)
                },
                setMask: function (n) {
                    i === n || e || (t.depthMask(n), i = n)
                },
                setFunc: function (e) {
                    if (n !== e) {
                        if (e) switch (e) {
                            case La:
                                t.depthFunc(t.NEVER);
                                break;
                            case Na:
                                t.depthFunc(t.ALWAYS);
                                break;
                            case Oa:
                                t.depthFunc(t.LESS);
                                break;
                            case Ra:
                                t.depthFunc(t.LEQUAL);
                                break;
                            case Ia:
                                t.depthFunc(t.EQUAL);
                                break;
                            case Da:
                                t.depthFunc(t.GEQUAL);
                                break;
                            case ka:
                                t.depthFunc(t.GREATER);
                                break;
                            case za:
                                t.depthFunc(t.NOTEQUAL);
                                break;
                            default:
                                t.depthFunc(t.LEQUAL)
                        } else t.depthFunc(t.LEQUAL);
                        n = e
                    }
                },
                setLocked: function (t) {
                    e = t
                },
                setClear: function (e) {
                    r !== e && (t.clearDepth(e), r = e)
                },
                reset: function () {
                    e = !1, i = null, n = null, r = null
                }
            }
        }

        function o() {
            var e = !1,
                i = null,
                n = null,
                r = null,
                o = null,
                a = null,
                s = null,
                h = null,
                c = null;
            return {
                setTest: function (e) {
                    e ? p(t.STENCIL_TEST) : f(t.STENCIL_TEST)
                },
                setMask: function (n) {
                    i === n || e || (t.stencilMask(n), i = n)
                },
                setFunc: function (e, i, a) {
                    n === e && r === i && o === a || (t.stencilFunc(e, i, a), n = e, r = i, o = a)
                },
                setOp: function (e, i, n) {
                    a === e && s === i && h === n || (t.stencilOp(e, i, n), a = e, s = i, h = n)
                },
                setLocked: function (t) {
                    e = t
                },
                setClear: function (e) {
                    c !== e && (t.clearStencil(e), c = e)
                },
                reset: function () {
                    e = !1, i = null, n = null, r = null, o = null, a = null, s = null, h = null, c = null
                }
            }
        }

        function a(e, i, n) {
            var r = new Uint8Array(4),
                o = t.createTexture();
            t.bindTexture(e, o), t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
            for (var a = 0; a < n; a++) t.texImage2D(i + a, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, r);
            return o
        }

        function s() {
            for (var t = 0, e = I.length; t < e; t++) I[t] = 0
        }

        function h(i) {
            if (I[i] = 1, 0 === D[i] && (t.enableVertexAttribArray(i), D[i] = 1), 0 !== k[i]) {
                e.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(i, 0), k[i] = 0
            }
        }

        function c(i, n) {
            if (I[i] = 1, 0 === D[i] && (t.enableVertexAttribArray(i), D[i] = 1), k[i] !== n) {
                e.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(i, n), k[i] = n
            }
        }

        function l() {
            for (var e = 0, i = D.length; e !== i; ++e) D[e] !== I[e] && (t.disableVertexAttribArray(e), D[e] = 0)
        }

        function p(e) {
            !0 !== z[e] && (t.enable(e), z[e] = !0)
        }

        function f(e) {
            !1 !== z[e] && (t.disable(e), z[e] = !1)
        }

        function d() {
            if (null === U && (U = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1")))
                for (var i = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), n = 0; n < i.length; n++) U.push(i[n]);
            return U
        }

        function m(e) {
            return F !== e && (t.useProgram(e), F = e, !0)
        }

        function v(e, n, r, o, a, s, h, c) {
            if (e !== ha ? p(t.BLEND) : f(t.BLEND), e !== fa) {
                if (e !== B || c !== q) switch (e) {
                    case ua:
                        c ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE, t.ONE, t.ONE)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.SRC_ALPHA, t.ONE));
                        break;
                    case la:
                        c ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR));
                        break;
                    case pa:
                        c ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.SRC_COLOR));
                        break;
                    default:
                        c ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA))
                }
                G = null, j = null, V = null, W = null, H = null, X = null
            } else a = a || n, s = s || r, h = h || o, n === G && a === W || (t.blendEquationSeparate(i.convert(n), i.convert(a)), G = n, W = a), r === j && o === V && s === H && h === X || (t.blendFuncSeparate(i.convert(r), i.convert(o), i.convert(s), i.convert(h)), j = r, V = o, H = s, X = h);
            B = e, q = c
        }

        function g(e, i) {
            e.side === ia ? f(t.CULL_FACE) : p(t.CULL_FACE);
            var n = e.side === ea;
            i && (n = !n), y(n), !0 === e.transparent ? v(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha) : v(ha), N.setFunc(e.depthFunc), N.setTest(e.depthTest), N.setMask(e.depthWrite), L.setMask(e.colorWrite), b(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
        }

        function y(e) {
            Y !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), Y = e)
        }

        function _(e) {
            e !== Ho ? (p(t.CULL_FACE), e !== $ && (e === Xo ? t.cullFace(t.BACK) : e === qo ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : f(t.CULL_FACE), $ = e
        }

        function x(e) {
            e !== Z && (et && t.lineWidth(e), Z = e)
        }

        function b(e, i, n) {
            e ? (p(t.POLYGON_OFFSET_FILL), J === i && Q === n || (t.polygonOffset(i, n), J = i, Q = n)) : f(t.POLYGON_OFFSET_FILL)
        }

        function w(e) {
            e ? p(t.SCISSOR_TEST) : f(t.SCISSOR_TEST)
        }

        function M(e) {
            void 0 === e && (e = t.TEXTURE0 + K - 1), it !== e && (t.activeTexture(e), it = e)
        }

        function T(e, i) {
            null === it && M();
            var n = nt[it];
            void 0 === n && (n = {
                type: void 0,
                texture: void 0
            }, nt[it] = n), n.type === e && n.texture === i || (t.bindTexture(e, i || at[e]), n.type = e, n.texture = i)
        }

        function S() {
            try {
                t.compressedTexImage2D.apply(t, arguments)
            } catch (t) {
            }
        }

        function A() {
            try {
                t.texImage2D.apply(t, arguments)
            } catch (t) {
            }
        }

        function P(e) {
            !1 === rt.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), rt.copy(e))
        }

        function E(e) {
            !1 === ot.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), ot.copy(e))
        }

        function C() {
            for (var e = 0; e < D.length; e++) 1 === D[e] && (t.disableVertexAttribArray(e), D[e] = 0);
            z = {}, U = null, it = null, nt = {}, F = null, B = null, Y = null, $ = null, L.reset(), N.reset(), O.reset()
        }

        var L = new n,
            N = new r,
            O = new o,
            R = t.getParameter(t.MAX_VERTEX_ATTRIBS),
            I = new Uint8Array(R),
            D = new Uint8Array(R),
            k = new Uint8Array(R),
            z = {},
            U = null,
            F = null,
            B = null,
            G = null,
            j = null,
            V = null,
            W = null,
            H = null,
            X = null,
            q = !1,
            Y = null,
            $ = null,
            Z = null,
            J = null,
            Q = null,
            K = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
            tt = parseFloat(/^WebGL\ ([0-9])/.exec(t.getParameter(t.VERSION))[1]),
            et = parseFloat(tt) >= 1,
            it = null,
            nt = {},
            rt = new u,
            ot = new u,
            at = {};
        return at[t.TEXTURE_2D] = a(t.TEXTURE_2D, t.TEXTURE_2D, 1), at[t.TEXTURE_CUBE_MAP] = a(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6), L.setClear(0, 0, 0, 1), N.setClear(1), O.setClear(0), p(t.DEPTH_TEST), N.setFunc(Ra), y(!1), _(Xo), p(t.CULL_FACE), p(t.BLEND), v(ca), {
            buffers: {
                color: L,
                depth: N,
                stencil: O
            },
            initAttributes: s,
            enableAttribute: h,
            enableAttributeAndDivisor: c,
            disableUnusedAttributes: l,
            enable: p,
            disable: f,
            getCompressedTextureFormats: d,
            useProgram: m,
            setBlending: v,
            setMaterial: g,
            setFlipSided: y,
            setCullFace: _,
            setLineWidth: x,
            setPolygonOffset: b,
            setScissorTest: w,
            activeTexture: M,
            bindTexture: T,
            compressedTexImage2D: S,
            texImage2D: A,
            scissor: P,
            viewport: E,
            reset: C
        }
    }

    function me(t, e, i) {
        function n() {
            if (void 0 !== o) return o;
            var i = e.get("EXT_texture_filter_anisotropic");
            return o = null !== i ? t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
        }

        function r(e) {
            if ("highp" === e) {
                if (t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0) return "highp";
                e = "mediump"
            }
            return "mediump" === e && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
        }

        var o, a = void 0 !== i.precision ? i.precision : "highp",
            s = r(a);
        s !== a && (a = s);
        var h = !0 === i.logarithmicDepthBuffer,
            c = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
            u = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            l = t.getParameter(t.MAX_TEXTURE_SIZE),
            p = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
            f = t.getParameter(t.MAX_VERTEX_ATTRIBS),
            d = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
            m = t.getParameter(t.MAX_VARYING_VECTORS),
            v = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
            g = u > 0,
            y = !!e.get("OES_texture_float");
        return {
            getMaxAnisotropy: n,
            getMaxPrecision: r,
            precision: a,
            logarithmicDepthBuffer: h,
            maxTextures: c,
            maxVertexTextures: u,
            maxTextureSize: l,
            maxCubemapSize: p,
            maxAttributes: f,
            maxVertexUniforms: d,
            maxVaryings: m,
            maxFragmentUniforms: v,
            vertexTextures: g,
            floatFragmentTextures: y,
            floatVertexTextures: g && y
        }
    }

    function ve(t, e, i, n) {
        pt.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== n ? n : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    }

    function ge(t) {
        ve.call(this), this.cameras = t || []
    }

    function ye(t) {
        function e() {
            if (null !== n && n.isPresenting) {
                var e = n.getEyeParameters("left"),
                    r = e.renderWidth,
                    o = e.renderHeight;
                f = t.getPixelRatio(), p = t.getSize(), t.setDrawingBufferSize(2 * r, o, 1)
            } else i.enabled && t.setDrawingBufferSize(p.width, p.height, f)
        }

        var i = this,
            n = null,
            r = null,
            a = null;
        "undefined" != typeof window && "VRFrameData" in window && (r = new window.VRFrameData);
        var s = new o,
            h = new ve;
        h.bounds = new u(0, 0, .5, 1), h.layers.enable(1);
        var c = new ve;
        c.bounds = new u(.5, 0, .5, 1), c.layers.enable(2);
        var l = new ge([h, c]);
        l.layers.enable(1), l.layers.enable(2);
        var p, f;
        "undefined" != typeof window && window.addEventListener("vrdisplaypresentchange", e, !1), this.enabled = !1, this.getDevice = function () {
            return n
        }, this.setDevice = function (t) {
            void 0 !== t && (n = t)
        }, this.setPoseTarget = function (t) {
            void 0 !== t && (a = t)
        }, this.getCamera = function (t) {
            if (null === n) return t;
            n.depthNear = t.near, n.depthFar = t.far, n.getFrameData(r);
            var e = r.pose,
                i = null !== a ? a : t;
            if (null !== e.position ? i.position.fromArray(e.position) : i.position.set(0, 0, 0), null !== e.orientation && i.quaternion.fromArray(e.orientation), i.updateMatrixWorld(), !1 === n.isPresenting) return t;
            h.near = t.near, c.near = t.near, h.far = t.far, c.far = t.far, l.matrixWorld.copy(t.matrixWorld), l.matrixWorldInverse.copy(t.matrixWorldInverse), h.matrixWorldInverse.fromArray(r.leftViewMatrix), c.matrixWorldInverse.fromArray(r.rightViewMatrix);
            var o = i.parent;
            null !== o && (s.getInverse(o.matrixWorld), h.matrixWorldInverse.multiply(s), c.matrixWorldInverse.multiply(s)), h.matrixWorld.getInverse(h.matrixWorldInverse), c.matrixWorld.getInverse(c.matrixWorldInverse), h.projectionMatrix.fromArray(r.leftProjectionMatrix), c.projectionMatrix.fromArray(r.rightProjectionMatrix), l.projectionMatrix.copy(h.projectionMatrix);
            var u = n.getLayers();
            if (u.length) {
                var p = u[0];
                null !== p.leftBounds && 4 === p.leftBounds.length && h.bounds.fromArray(p.leftBounds), null !== p.rightBounds && 4 === p.rightBounds.length && c.bounds.fromArray(p.rightBounds)
            }
            return l
        }, this.submitFrame = function () {
            n && n.isPresenting && n.submitFrame()
        }, this.dispose = function () {
            "undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", e)
        }
    }

    function _e(t) {
        var e = {};
        return {
            get: function (i) {
                if (void 0 !== e[i]) return e[i];
                var n;
                switch (i) {
                    case "WEBGL_depth_texture":
                        n = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                        break;
                    case "EXT_texture_filter_anisotropic":
                        n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        break;
                    case "WEBGL_compressed_texture_s3tc":
                        n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                        break;
                    case "WEBGL_compressed_texture_pvrtc":
                        n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                        break;
                    case "WEBGL_compressed_texture_etc1":
                        n = t.getExtension("WEBGL_compressed_texture_etc1");
                        break;
                    default:
                        n = t.getExtension(i)
                }
                return e[i] = n, n
            }
        }
    }

    function xe() {
        function t() {
            u.value !== n && (u.value = n, u.needsUpdate = r > 0), i.numPlanes = r, i.numIntersection = 0
        }

        function e(t, e, n, r) {
            var o = null !== t ? t.length : 0,
                a = null;
            if (0 !== o) {
                if (a = u.value, !0 !== r || null === a) {
                    var h = n + 4 * o,
                        l = e.matrixWorldInverse;
                    c.getNormalMatrix(l), (null === a || a.length < h) && (a = new Float32Array(h));
                    for (var p = 0, f = n; p !== o; ++p, f += 4) s.copy(t[p]).applyMatrix4(l, c), s.normal.toArray(a, f), a[f + 3] = s.constant
                }
                u.value = a, u.needsUpdate = !0
            }
            return i.numPlanes = o, a
        }

        var i = this,
            n = null,
            r = 0,
            o = !1,
            a = !1,
            s = new ot,
            c = new h,
            u = {
                value: null,
                needsUpdate: !1
            };
        this.uniform = u, this.numPlanes = 0, this.numIntersection = 0, this.init = function (t, i, a) {
            var s = 0 !== t.length || i || 0 !== r || o;
            return o = i, n = e(t, a, 0), r = t.length, s
        }, this.beginShadows = function () {
            a = !0, e(null)
        }, this.endShadows = function () {
            a = !1, t()
        }, this.setState = function (i, s, h, c, l, p) {
            if (!o || null === i || 0 === i.length || a && !h) a ? e(null) : t();
            else {
                var f = a ? 0 : r,
                    d = 4 * f,
                    m = l.clippingState || null;
                u.value = m, m = e(i, c, d, p);
                for (var v = 0; v !== d; ++v) m[v] = n[v];
                l.clippingState = m, this.numIntersection = s ? this.numPlanes : 0, this.numPlanes += f
            }
        }
    }

    function be(t, e) {
        function i(i) {
            var n;
            if (i === ts) return t.REPEAT;
            if (i === es) return t.CLAMP_TO_EDGE;
            if (i === is) return t.MIRRORED_REPEAT;
            if (i === ns) return t.NEAREST;
            if (i === rs) return t.NEAREST_MIPMAP_NEAREST;
            if (i === os) return t.NEAREST_MIPMAP_LINEAR;
            if (i === as) return t.LINEAR;
            if (i === ss) return t.LINEAR_MIPMAP_NEAREST;
            if (i === hs) return t.LINEAR_MIPMAP_LINEAR;
            if (i === cs) return t.UNSIGNED_BYTE;
            if (i === gs) return t.UNSIGNED_SHORT_4_4_4_4;
            if (i === ys) return t.UNSIGNED_SHORT_5_5_5_1;
            if (i === _s) return t.UNSIGNED_SHORT_5_6_5;
            if (i === us) return t.BYTE;
            if (i === ls) return t.SHORT;
            if (i === ps) return t.UNSIGNED_SHORT;
            if (i === fs) return t.INT;
            if (i === ds) return t.UNSIGNED_INT;
            if (i === ms) return t.FLOAT;
            if (i === vs && null !== (n = e.get("OES_texture_half_float"))) return n.HALF_FLOAT_OES;
            if (i === bs) return t.ALPHA;
            if (i === ws) return t.RGB;
            if (i === Ms) return t.RGBA;
            if (i === Ts) return t.LUMINANCE;
            if (i === Ss) return t.LUMINANCE_ALPHA;
            if (i === Ps) return t.DEPTH_COMPONENT;
            if (i === Es) return t.DEPTH_STENCIL;
            if (i === da) return t.FUNC_ADD;
            if (i === ma) return t.FUNC_SUBTRACT;
            if (i === va) return t.FUNC_REVERSE_SUBTRACT;
            if (i === _a) return t.ZERO;
            if (i === xa) return t.ONE;
            if (i === ba) return t.SRC_COLOR;
            if (i === wa) return t.ONE_MINUS_SRC_COLOR;
            if (i === Ma) return t.SRC_ALPHA;
            if (i === Ta) return t.ONE_MINUS_SRC_ALPHA;
            if (i === Sa) return t.DST_ALPHA;
            if (i === Aa) return t.ONE_MINUS_DST_ALPHA;
            if (i === Pa) return t.DST_COLOR;
            if (i === Ea) return t.ONE_MINUS_DST_COLOR;
            if (i === Ca) return t.SRC_ALPHA_SATURATE;
            if ((i === Cs || i === Ls || i === Ns || i === Os) && null !== (n = e.get("WEBGL_compressed_texture_s3tc"))) {
                if (i === Cs) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (i === Ls) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (i === Ns) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (i === Os) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT
            }
            if ((i === Rs || i === Is || i === Ds || i === ks) && null !== (n = e.get("WEBGL_compressed_texture_pvrtc"))) {
                if (i === Rs) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (i === Is) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (i === Ds) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (i === ks) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (i === zs && null !== (n = e.get("WEBGL_compressed_texture_etc1"))) return n.COMPRESSED_RGB_ETC1_WEBGL;
            if ((i === ga || i === ya) && null !== (n = e.get("EXT_blend_minmax"))) {
                if (i === ga) return n.MIN_EXT;
                if (i === ya) return n.MAX_EXT
            }
            return i === xs && null !== (n = e.get("WEBGL_depth_texture")) ? n.UNSIGNED_INT_24_8_WEBGL : 0
        }

        return {
            convert: i
        }
    }

    function we(t) {
        function e() {
            return null === et ? vt : 1
        }

        function i() {
            Lt = new _e(Et), Lt.get("WEBGL_depth_texture"), Lt.get("OES_texture_float"), Lt.get("OES_texture_float_linear"), Lt.get("OES_texture_half_float"), Lt.get("OES_texture_half_float_linear"), Lt.get("OES_standard_derivatives"), Lt.get("OES_element_index_uint"), Lt.get("ANGLE_instanced_arrays"), ee = new be(Et, Lt), Nt = new me(Et, Lt, t), Ot = new de(Et, Lt, ee), Ot.scissor(lt.copy(yt).multiplyScalar(vt)), Ot.viewport(ut.copy(gt).multiplyScalar(vt)), Rt = new fe, It = new pe(Et, Lt, Ot, Rt, Nt, ee, At), Dt = new ht(Et), kt = new Yt(Et, Dt, At), zt = new Jt(kt, Pt), Wt = new Ht(Et), Bt = new le(Q, Lt, Nt), Ut = new Zt, Gt = new Vt, jt = new Ft(Q, Ot, kt, j), $t = new qt(Et, Lt, Pt), Qt = new Xt(Et, Lt, Pt), Kt = new J(Q, Et, Ot, It, Nt), te = new K(Q, Et, Ot, It, Nt), Q.info.programs = Bt.programs, Q.context = Et, Q.capabilities = Nt, Q.extensions = Lt, Q.properties = Rt, Q.renderLists = Gt, Q.state = Ot
        }

        function n(t) {
            t.preventDefault(), tt = !0
        }

        function r() {
            tt = !1, i()
        }

        function a(t) {
            var e = t.target;
            e.removeEventListener("dispose", a), h(e)
        }

        function h(t) {
            c(t), Rt.remove(t)
        }

        function c(t) {
            var e = Rt.get(t).program;
            t.program = void 0, void 0 !== e && Bt.releaseProgram(e)
        }

        function l(t, e, i) {
            t.render(function (t) {
                Q.renderBufferImmediate(t, e, i)
            })
        }

        function p(t, e, i, n) {
            if (!i || !i.isInstancedBufferGeometry || null !== Lt.get("ANGLE_instanced_arrays")) {
                void 0 === n && (n = 0), Ot.initAttributes();
                var r = i.attributes,
                    o = e.getAttributes(),
                    a = t.defaultAttributeValues;
                for (var s in o) {
                    var h = o[s];
                    if (h >= 0) {
                        var c = r[s];
                        if (void 0 !== c) {
                            var u = c.normalized,
                                l = c.itemSize,
                                p = Dt.get(c);
                            if (void 0 === p) continue;
                            var f = p.buffer,
                                d = p.type,
                                m = p.bytesPerElement;
                            if (c.isInterleavedBufferAttribute) {
                                var v = c.data,
                                    g = v.stride,
                                    y = c.offset;
                                v && v.isInstancedInterleavedBuffer ? (Ot.enableAttributeAndDivisor(h, v.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = v.meshPerAttribute * v.count)) : Ot.enableAttribute(h), Et.bindBuffer(Et.ARRAY_BUFFER, f), Et.vertexAttribPointer(h, l, d, u, g * m, (n * g + y) * m)
                            } else c.isInstancedBufferAttribute ? (Ot.enableAttributeAndDivisor(h, c.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = c.meshPerAttribute * c.count)) : Ot.enableAttribute(h), Et.bindBuffer(Et.ARRAY_BUFFER, f), Et.vertexAttribPointer(h, l, d, u, 0, n * l * m)
                        } else if (void 0 !== a) {
                            var _ = a[s];
                            if (void 0 !== _) switch (_.length) {
                                case 2:
                                    Et.vertexAttrib2fv(h, _);
                                    break;
                                case 3:
                                    Et.vertexAttrib3fv(h, _);
                                    break;
                                case 4:
                                    Et.vertexAttrib4fv(h, _);
                                    break;
                                default:
                                    Et.vertexAttrib1fv(h, _)
                            }
                        }
                    }
                }
                Ot.disableUnusedAttributes()
            }
        }

        function d() {
            if (!re) {
                var t = ie.getDevice();
                t && t.isPresenting ? t.requestAnimationFrame(m) : window.requestAnimationFrame(m), re = !0
            }
        }

        function m(t) {
            null !== oe && oe(t);
            var e = ie.getDevice();
            e && e.isPresenting ? e.requestAnimationFrame(m) : window.requestAnimationFrame(m)
        }

        function v(t, e, i) {
            if (!1 !== t.visible) {
                if (t.layers.test(e.layers))
                    if (t.isLight) H.push(t), t.castShadow && X.push(t);
                    else if (t.isSprite) t.frustumCulled && !xt.intersectsSprite(t) || $.push(t);
                    else if (t.isLensFlare) Z.push(t);
                    else if (t.isImmediateRenderObject) i && St.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Tt), q.push(t, null, t.material, St.z, null);
                    else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.update(), !t.frustumCulled || xt.intersectsObject(t))) {
                        i && St.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Tt);
                        var n = zt.update(t),
                            r = t.material;
                        if (Array.isArray(r))
                            for (var o = n.groups, a = 0, s = o.length; a < s; a++) {
                                var h = o[a],
                                    c = r[h.materialIndex];
                                c && c.visible && q.push(t, n, c, St.z, h)
                            } else r.visible && q.push(t, n, r, St.z, null)
                    }
                for (var u = t.children, a = 0, s = u.length; a < s; a++) v(u[a], e, i)
            }
        }

        function g(t, e, i, n) {
            for (var r = 0, o = t.length; r < o; r++) {
                var a = t[r],
                    s = a.object,
                    h = a.geometry,
                    c = void 0 === n ? a.material : n,
                    u = a.group;
                if (i.isArrayCamera) {
                    ct = i;
                    for (var l = i.cameras, p = 0, f = l.length; p < f; p++) {
                        var d = l[p];
                        if (s.layers.test(d.layers)) {
                            var m = d.bounds,
                                v = m.x * dt,
                                g = m.y * mt,
                                _ = m.z * dt,
                                x = m.w * mt;
                            Ot.viewport(ut.set(v, g, _, x).multiplyScalar(vt)), y(s, e, d, h, c, u)
                        }
                    }
                } else ct = null, y(s, e, i, h, c, u)
            }
        }

        function y(t, e, i, n, r, o) {
            if (t.onBeforeRender(Q, e, i, n, r, o), t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
                var a = t.isMesh && t.matrixWorld.determinant() < 0;
                Ot.setMaterial(r, a);
                var s = x(i, e.fog, r, t);
                rt = "", l(t, s, r)
            } else Q.renderBufferDirect(i, e.fog, n, r, t, o);
            t.onAfterRender(Q, e, i, n, r, o)
        }

        function _(t, e, i) {
            var n = Rt.get(t),
                r = Bt.getParameters(t, Ut.state, X, e, bt.numPlanes, bt.numIntersection, i),
                o = Bt.getProgramCode(t, r),
                s = n.program,
                h = !0;
            if (void 0 === s) t.addEventListener("dispose", a);
            else if (s.code !== o) c(t);
            else {
                if (void 0 !== r.shaderID) return;
                h = !1
            }
            if (h) {
                if (r.shaderID) {
                    var u = _h[r.shaderID];
                    n.shader = {
                        name: t.type,
                        uniforms: gh.clone(u.uniforms),
                        vertexShader: u.vertexShader,
                        fragmentShader: u.fragmentShader
                    }
                } else n.shader = {
                    name: t.type,
                    uniforms: t.uniforms,
                    vertexShader: t.vertexShader,
                    fragmentShader: t.fragmentShader
                };
                t.onBeforeCompile(n.shader), s = Bt.acquireProgram(t, n.shader, r, o), n.program = s, t.program = s
            }
            var l = s.getAttributes();
            if (t.morphTargets) {
                t.numSupportedMorphTargets = 0;
                for (var p = 0; p < Q.maxMorphTargets; p++) l["morphTarget" + p] >= 0 && t.numSupportedMorphTargets++
            }
            if (t.morphNormals) {
                t.numSupportedMorphNormals = 0;
                for (var p = 0; p < Q.maxMorphNormals; p++) l["morphNormal" + p] >= 0 && t.numSupportedMorphNormals++
            }
            var f = n.shader.uniforms;
            (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (n.numClippingPlanes = bt.numPlanes, n.numIntersection = bt.numIntersection, f.clippingPlanes = bt.uniform), n.fog = e, n.lightsHash = Ut.state.hash, t.lights && (f.ambientLightColor.value = Ut.state.ambient, f.directionalLights.value = Ut.state.directional, f.spotLights.value = Ut.state.spot, f.rectAreaLights.value = Ut.state.rectArea, f.pointLights.value = Ut.state.point, f.hemisphereLights.value = Ut.state.hemi, f.directionalShadowMap.value = Ut.state.directionalShadowMap, f.directionalShadowMatrix.value = Ut.state.directionalShadowMatrix, f.spotShadowMap.value = Ut.state.spotShadowMap, f.spotShadowMatrix.value = Ut.state.spotShadowMatrix, f.pointShadowMap.value = Ut.state.pointShadowMap, f.pointShadowMatrix.value = Ut.state.pointShadowMatrix);
            var d = n.program.getUniforms(),
                m = Y.seqWithValue(d.seq, f);
            n.uniformsList = m
        }

        function x(t, e, i, n) {
            ft = 0;
            var r = Rt.get(i);
            if (wt && (Mt || t !== ot)) {
                var o = t === ot && i.id === nt;
                bt.setState(i.clippingPlanes, i.clipIntersection, i.clipShadows, t, r, o)
            }
            !1 === i.needsUpdate && (void 0 === r.program ? i.needsUpdate = !0 : i.fog && r.fog !== e ? i.needsUpdate = !0 : i.lights && r.lightsHash !== Ut.state.hash ? i.needsUpdate = !0 : void 0 === r.numClippingPlanes || r.numClippingPlanes === bt.numPlanes && r.numIntersection === bt.numIntersection || (i.needsUpdate = !0)), i.needsUpdate && (_(i, e, n), i.needsUpdate = !1);
            var a = !1,
                s = !1,
                h = !1,
                c = r.program,
                u = c.getUniforms(),
                l = r.shader.uniforms;
            if (Ot.useProgram(c.program) && (a = !0, s = !0, h = !0), i.id !== nt && (nt = i.id, s = !0), a || t !== ot) {
                if (u.setValue(Et, "projectionMatrix", t.projectionMatrix), Nt.logarithmicDepthBuffer && u.setValue(Et, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), ot !== (ct || t) && (ot = ct || t, s = !0, h = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.envMap) {
                    var p = u.map.cameraPosition;
                    void 0 !== p && p.setValue(Et, St.setFromMatrixPosition(t.matrixWorld))
                }
                (i.isMeshPhongMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && u.setValue(Et, "viewMatrix", t.matrixWorldInverse)
            }
            if (i.skinning) {
                u.setOptional(Et, n, "bindMatrix"), u.setOptional(Et, n, "bindMatrixInverse");
                var d = n.skeleton;
                if (d) {
                    var m = d.bones;
                    if (Nt.floatVertexTextures) {
                        if (void 0 === d.boneTexture) {
                            var v = Math.sqrt(4 * m.length);
                            v = ah.ceilPowerOfTwo(v), v = Math.max(v, 4);
                            var g = new Float32Array(v * v * 4);
                            g.set(d.boneMatrices);
                            var y = new f(g, v, v, Ms, ms);
                            d.boneMatrices = g, d.boneTexture = y, d.boneTextureSize = v
                        }
                        u.setValue(Et, "boneTexture", d.boneTexture), u.setValue(Et, "boneTextureSize", d.boneTextureSize)
                    } else u.setOptional(Et, d, "boneMatrices")
                }
            }
            return s && (u.setValue(Et, "toneMappingExposure", Q.toneMappingExposure), u.setValue(Et, "toneMappingWhitePoint", Q.toneMappingWhitePoint), i.lights && I(l, h), e && i.fog && S(l, e), i.isMeshBasicMaterial ? b(l, i) : i.isMeshLambertMaterial ? (b(l, i), A(l, i)) : i.isMeshPhongMaterial ? (b(l, i), i.isMeshToonMaterial ? E(l, i) : P(l, i)) : i.isMeshStandardMaterial ? (b(l, i), i.isMeshPhysicalMaterial ? L(l, i) : C(l, i)) : i.isMeshDepthMaterial ? (b(l, i), N(l, i)) : i.isMeshDistanceMaterial ? (b(l, i), O(l, i)) : i.isMeshNormalMaterial ? (b(l, i), R(l, i)) : i.isLineBasicMaterial ? (w(l, i), i.isLineDashedMaterial && M(l, i)) : i.isPointsMaterial ? T(l, i) : i.isShadowMaterial && (l.color.value = i.color, l.opacity.value = i.opacity), void 0 !== l.ltcMat && (l.ltcMat.value = vh.LTC_MAT_TEXTURE), void 0 !== l.ltcMag && (l.ltcMag.value = vh.LTC_MAG_TEXTURE), Y.upload(Et, r.uniformsList, l, Q)), u.setValue(Et, "modelViewMatrix", n.modelViewMatrix), u.setValue(Et, "normalMatrix", n.normalMatrix), u.setValue(Et, "modelMatrix", n.matrixWorld), c
        }

        function b(t, e) {
            t.opacity.value = e.opacity, e.color && (t.diffuse.value = e.color), e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap), e.envMap && (t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap && e.envMap.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity);
            var i;
            if (e.map ? i = e.map : e.specularMap ? i = e.specularMap : e.displacementMap ? i = e.displacementMap : e.normalMap ? i = e.normalMap : e.bumpMap ? i = e.bumpMap : e.roughnessMap ? i = e.roughnessMap : e.metalnessMap ? i = e.metalnessMap : e.alphaMap ? i = e.alphaMap : e.emissiveMap && (i = e.emissiveMap), void 0 !== i) {
                if (i.isWebGLRenderTarget && (i = i.texture), !0 === i.matrixAutoUpdate) {
                    var n = i.offset,
                        r = i.repeat,
                        o = i.rotation,
                        a = i.center;
                    i.matrix.setUvTransform(n.x, n.y, r.x, r.y, o, a.x, a.y)
                }
                t.uvTransform.value.copy(i.matrix)
            }
        }

        function w(t, e) {
            t.diffuse.value = e.color, t.opacity.value = e.opacity
        }

        function M(t, e) {
            t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
        }

        function T(t, e) {
            if (t.diffuse.value = e.color, t.opacity.value = e.opacity, t.size.value = e.size * vt, t.scale.value = .5 * mt, t.map.value = e.map, null !== e.map) {
                if (!0 === e.map.matrixAutoUpdate) {
                    var i = e.map.offset,
                        n = e.map.repeat,
                        r = e.map.rotation,
                        o = e.map.center;
                    e.map.matrix.setUvTransform(i.x, i.y, n.x, n.y, r, o.x, o.y)
                }
                t.uvTransform.value.copy(e.map.matrix)
            }
        }

        function S(t, e) {
            t.fogColor.value = e.color, e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
        }

        function A(t, e) {
            e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
        }

        function P(t, e) {
            t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }

        function E(t, e) {
            P(t, e), e.gradientMap && (t.gradientMap.value = e.gradientMap)
        }

        function C(t, e) {
            t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
        }

        function L(t, e) {
            t.clearCoat.value = e.clearCoat, t.clearCoatRoughness.value = e.clearCoatRoughness, C(t, e)
        }

        function N(t, e) {
            e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }

        function O(t, e) {
            e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
        }

        function R(t, e) {
            e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }

        function I(t, e) {
            t.ambientLightColor.needsUpdate = e, t.directionalLights.needsUpdate = e, t.pointLights.needsUpdate = e, t.spotLights.needsUpdate = e, t.rectAreaLights.needsUpdate = e, t.hemisphereLights.needsUpdate = e
        }

        function D() {
            var t = ft;
            return Nt.maxTextures, ft += 1, t
        }

        t = t || {};
        var k = void 0 !== t.canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
            z = void 0 !== t.context ? t.context : null,
            U = void 0 !== t.alpha && t.alpha,
            F = void 0 === t.depth || t.depth,
            B = void 0 === t.stencil || t.stencil,
            G = void 0 !== t.antialias && t.antialias,
            j = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
            V = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
            W = void 0 !== t.powerPreference ? t.powerPreference : "default",
            H = [],
            X = [],
            q = null,
            $ = [],
            Z = [];
        this.domElement = k, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = ja, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
        var Q = this,
            tt = !1,
            et = null,
            it = null,
            nt = -1,
            rt = "",
            ot = null,
            ct = null,
            ut = new u,
            lt = new u,
            pt = null,
            ft = 0,
            dt = k.width,
            mt = k.height,
            vt = 1,
            gt = new u(0, 0, dt, mt),
            yt = new u(0, 0, dt, mt),
            _t = !1,
            xt = new at,
            bt = new xe,
            wt = !1,
            Mt = !1,
            Tt = new o,
            St = new s,
            At = {
                geometries: 0,
                textures: 0
            },
            Pt = {
                frame: 0,
                calls: 0,
                vertices: 0,
                faces: 0,
                points: 0
            };
        this.info = {
            render: Pt,
            memory: At,
            programs: null
        };
        var Et;
        try {
            var Ct = {
                alpha: U,
                depth: F,
                stencil: B,
                antialias: G,
                premultipliedAlpha: j,
                preserveDrawingBuffer: V,
                powerPreference: W
            };
            if (k.addEventListener("webglcontextlost", n, !1), k.addEventListener("webglcontextrestored", r, !1), null === (Et = z || k.getContext("webgl", Ct) || k.getContext("experimental-webgl", Ct))) throw null !== k.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
            void 0 === Et.getShaderPrecisionFormat && (Et.getShaderPrecisionFormat = function () {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            })
        } catch (t) {
        }
        var Lt, Nt, Ot, Rt, It, Dt, kt, zt, Ut, Bt, Gt, jt, Wt, $t, Qt, Kt, te, ee;
        i();
        var ie = new ye(Q);
        this.vr = ie;
        var ne = new st(Q, zt, Nt.maxTextureSize);
        this.shadowMap = ne, this.getContext = function () {
            return Et
        }, this.getContextAttributes = function () {
            return Et.getContextAttributes()
        }, this.forceContextLoss = function () {
            var t = Lt.get("WEBGL_lose_context");
            t && t.loseContext()
        }, this.forceContextRestore = function () {
            var t = Lt.get("WEBGL_lose_context");
            t && t.restoreContext()
        }, this.getPixelRatio = function () {
            return vt
        }, this.setPixelRatio = function (t) {
            void 0 !== t && (vt = t, this.setSize(dt, mt, !1))
        }, this.getSize = function () {
            return {
                width: dt,
                height: mt
            }
        }, this.setSize = function (t, e, i) {
            var n = ie.getDevice();
            n && n.isPresenting || (dt = t, mt = e, k.width = t * vt, k.height = e * vt, !1 !== i && (k.style.width = t + "px", k.style.height = e + "px"), this.setViewport(0, 0, t, e))
        }, this.getDrawingBufferSize = function () {
            return {
                width: dt * vt,
                height: mt * vt
            }
        }, this.setDrawingBufferSize = function (t, e, i) {
            dt = t, mt = e, vt = i, k.width = t * i, k.height = e * i, this.setViewport(0, 0, t, e)
        }, this.setViewport = function (t, e, i, n) {
            gt.set(t, mt - e - n, i, n), Ot.viewport(ut.copy(gt).multiplyScalar(vt))
        }, this.setScissor = function (t, e, i, n) {
            yt.set(t, mt - e - n, i, n), Ot.scissor(lt.copy(yt).multiplyScalar(vt))
        }, this.setScissorTest = function (t) {
            Ot.setScissorTest(_t = t)
        }, this.getClearColor = function () {
            return jt.getClearColor()
        }, this.setClearColor = function () {
            jt.setClearColor.apply(jt, arguments)
        }, this.getClearAlpha = function () {
            return jt.getClearAlpha()
        }, this.setClearAlpha = function () {
            jt.setClearAlpha.apply(jt, arguments)
        }, this.clear = function (t, e, i) {
            var n = 0;
            (void 0 === t || t) && (n |= Et.COLOR_BUFFER_BIT), (void 0 === e || e) && (n |= Et.DEPTH_BUFFER_BIT), (void 0 === i || i) && (n |= Et.STENCIL_BUFFER_BIT), Et.clear(n)
        }, this.clearColor = function () {
            this.clear(!0, !1, !1)
        }, this.clearDepth = function () {
            this.clear(!1, !0, !1)
        }, this.clearStencil = function () {
            this.clear(!1, !1, !0)
        }, this.clearTarget = function (t, e, i, n) {
            this.setRenderTarget(t), this.clear(e, i, n)
        }, this.dispose = function () {
            k.removeEventListener("webglcontextlost", n, !1), k.removeEventListener("webglcontextrestored", r, !1), Gt.dispose(), ie.dispose()
        }, this.renderBufferImmediate = function (t, e, i) {
            Ot.initAttributes();
            var n = Rt.get(t);
            t.hasPositions && !n.position && (n.position = Et.createBuffer()), t.hasNormals && !n.normal && (n.normal = Et.createBuffer()), t.hasUvs && !n.uv && (n.uv = Et.createBuffer()), t.hasColors && !n.color && (n.color = Et.createBuffer());
            var r = e.getAttributes();
            if (t.hasPositions && (Et.bindBuffer(Et.ARRAY_BUFFER, n.position), Et.bufferData(Et.ARRAY_BUFFER, t.positionArray, Et.DYNAMIC_DRAW), Ot.enableAttribute(r.position), Et.vertexAttribPointer(r.position, 3, Et.FLOAT, !1, 0, 0)), t.hasNormals) {
                if (Et.bindBuffer(Et.ARRAY_BUFFER, n.normal), !i.isMeshPhongMaterial && !i.isMeshStandardMaterial && !i.isMeshNormalMaterial && !0 === i.flatShading)
                    for (var o = 0, a = 3 * t.count; o < a; o += 9) {
                        var s = t.normalArray,
                            h = (s[o + 0] + s[o + 3] + s[o + 6]) / 3,
                            c = (s[o + 1] + s[o + 4] + s[o + 7]) / 3,
                            u = (s[o + 2] + s[o + 5] + s[o + 8]) / 3;
                        s[o + 0] = h, s[o + 1] = c, s[o + 2] = u, s[o + 3] = h, s[o + 4] = c, s[o + 5] = u, s[o + 6] = h, s[o + 7] = c, s[o + 8] = u
                    }
                Et.bufferData(Et.ARRAY_BUFFER, t.normalArray, Et.DYNAMIC_DRAW), Ot.enableAttribute(r.normal), Et.vertexAttribPointer(r.normal, 3, Et.FLOAT, !1, 0, 0)
            }
            t.hasUvs && i.map && (Et.bindBuffer(Et.ARRAY_BUFFER, n.uv), Et.bufferData(Et.ARRAY_BUFFER, t.uvArray, Et.DYNAMIC_DRAW), Ot.enableAttribute(r.uv), Et.vertexAttribPointer(r.uv, 2, Et.FLOAT, !1, 0, 0)), t.hasColors && i.vertexColors !== oa && (Et.bindBuffer(Et.ARRAY_BUFFER, n.color), Et.bufferData(Et.ARRAY_BUFFER, t.colorArray, Et.DYNAMIC_DRAW), Ot.enableAttribute(r.color), Et.vertexAttribPointer(r.color, 3, Et.FLOAT, !1, 0, 0)), Ot.disableUnusedAttributes(), Et.drawArrays(Et.TRIANGLES, 0, t.count), t.count = 0
        }, this.renderBufferDirect = function (t, i, n, r, o, a) {
            var s = o.isMesh && o.matrixWorld.determinant() < 0;
            Ot.setMaterial(r, s);
            var h = x(t, i, r, o),
                c = n.id + "_" + h.id + "_" + (!0 === r.wireframe),
                u = !1;
            c !== rt && (rt = c, u = !0), o.morphTargetInfluences && (Wt.update(o, n, r, h), u = !0);
            var l = n.index,
                f = n.attributes.position,
                d = 1;
            !0 === r.wireframe && (l = kt.getWireframeAttribute(n), d = 2);
            var m, v = $t;
            null !== l && (m = Dt.get(l), v = Qt, v.setIndex(m)), u && (p(r, h, n), null !== l && Et.bindBuffer(Et.ELEMENT_ARRAY_BUFFER, m.buffer));
            var g = 0;
            null !== l ? g = l.count : void 0 !== f && (g = f.count);
            var y = n.drawRange.start * d,
                _ = n.drawRange.count * d,
                b = null !== a ? a.start * d : 0,
                w = null !== a ? a.count * d : 1 / 0,
                M = Math.max(y, b),
                T = Math.min(g, y + _, b + w) - 1,
                S = Math.max(0, T - M + 1);
            if (0 !== S) {
                if (o.isMesh)
                    if (!0 === r.wireframe) Ot.setLineWidth(r.wireframeLinewidth * e()), v.setMode(Et.LINES);
                    else switch (o.drawMode) {
                        case qs:
                            v.setMode(Et.TRIANGLES);
                            break;
                        case Ys:
                            v.setMode(Et.TRIANGLE_STRIP);
                            break;
                        case $s:
                            v.setMode(Et.TRIANGLE_FAN)
                    } else if (o.isLine) {
                    var A = r.linewidth;
                    void 0 === A && (A = 1), Ot.setLineWidth(A * e()), o.isLineSegments ? v.setMode(Et.LINES) : o.isLineLoop ? v.setMode(Et.LINE_LOOP) : v.setMode(Et.LINE_STRIP)
                } else o.isPoints && v.setMode(Et.POINTS);
                n && n.isInstancedBufferGeometry ? n.maxInstancedCount > 0 && v.renderInstances(n, M, S) : v.render(M, S)
            }
        }, this.compile = function (t, e) {
            H.length = 0, X.length = 0, t.traverse(function (t) {
                t.isLight && (H.push(t), t.castShadow && X.push(t))
            }), Ut.setup(H, X, e), t.traverse(function (e) {
                if (e.material)
                    if (Array.isArray(e.material))
                        for (var i = 0; i < e.material.length; i++) _(e.material[i], t.fog, e);
                    else _(e.material, t.fog, e)
            })
        };
        var re = !1,
            oe = null;
        this.animate = function (t) {
            oe = t, d()
        }, this.render = function (t, e, i, n) {
            if (e && e.isCamera && !tt) {
                rt = "", nt = -1, ot = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), ie.enabled && (e = ie.getCamera(e)), Tt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), xt.setFromMatrix(Tt), H.length = 0, X.length = 0, $.length = 0, Z.length = 0, Mt = this.localClippingEnabled, wt = bt.init(this.clippingPlanes, Mt, e), q = Gt.get(t, e), q.init(), v(t, e, Q.sortObjects), !0 === Q.sortObjects && q.sort(), It.updateVideoTextures(), wt && bt.beginShadows(), ne.render(X, t, e), Ut.setup(H, X, e), wt && bt.endShadows(), Pt.frame++, Pt.calls = 0, Pt.vertices = 0, Pt.faces = 0, Pt.points = 0, void 0 === i && (i = null), this.setRenderTarget(i), jt.render(q, t, e, n);
                var r = q.opaque,
                    o = q.transparent;
                if (t.overrideMaterial) {
                    var a = t.overrideMaterial;
                    r.length && g(r, t, e, a), o.length && g(o, t, e, a)
                } else r.length && g(r, t, e), o.length && g(o, t, e);
                te.render($, t, e), Kt.render(Z, t, e, ut), i && It.updateRenderTargetMipmap(i), Ot.buffers.depth.setTest(!0), Ot.buffers.depth.setMask(!0), Ot.buffers.color.setMask(!0), Ot.setPolygonOffset(!1), ie.enabled && ie.submitFrame()
            }
        }, this.setFaceCulling = function (t, e) {
            Ot.setCullFace(t), Ot.setFlipSided(e === $o)
        }, this.allocTextureUnit = D, this.setTexture2D = function () {
            var t = !1;
            return function (e, i) {
                e && e.isWebGLRenderTarget && (t || (t = !0), e = e.texture), It.setTexture2D(e, i)
            }
        }(), this.setTexture = function () {
            var t = !1;
            return function (e, i) {
                t || (t = !0), It.setTexture2D(e, i)
            }
        }(), this.setTextureCube = function () {
            var t = !1;
            return function (e, i) {
                e && e.isWebGLRenderTargetCube && (t || (t = !0), e = e.texture), e && e.isCubeTexture || Array.isArray(e.image) && 6 === e.image.length ? It.setTextureCube(e, i) : It.setTextureCubeDynamic(e, i)
            }
        }(), this.getRenderTarget = function () {
            return et
        }, this.setRenderTarget = function (t) {
            et = t, t && void 0 === Rt.get(t).__webglFramebuffer && It.setupRenderTarget(t);
            var e = null,
                i = !1;
            if (t) {
                var n = Rt.get(t).__webglFramebuffer;
                t.isWebGLRenderTargetCube ? (e = n[t.activeCubeFace], i = !0) : e = n, ut.copy(t.viewport), lt.copy(t.scissor), pt = t.scissorTest
            } else ut.copy(gt).multiplyScalar(vt), lt.copy(yt).multiplyScalar(vt), pt = _t;
            if (it !== e && (Et.bindFramebuffer(Et.FRAMEBUFFER, e), it = e), Ot.viewport(ut), Ot.scissor(lt), Ot.setScissorTest(pt), i) {
                var r = Rt.get(t.texture);
                Et.framebufferTexture2D(Et.FRAMEBUFFER, Et.COLOR_ATTACHMENT0, Et.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, r.__webglTexture, t.activeMipMapLevel)
            }
        }, this.readRenderTargetPixels = function (t, e, i, n, r, o) {
            if (t && t.isWebGLRenderTarget) {
                var a = Rt.get(t).__webglFramebuffer;
                if (a) {
                    var s = !1;
                    a !== it && (Et.bindFramebuffer(Et.FRAMEBUFFER, a), s = !0);
                    try {
                        var h = t.texture,
                            c = h.format,
                            u = h.type;
                        if (c !== Ms && ee.convert(c) !== Et.getParameter(Et.IMPLEMENTATION_COLOR_READ_FORMAT)) return;
                        if (!(u === cs || ee.convert(u) === Et.getParameter(Et.IMPLEMENTATION_COLOR_READ_TYPE) || u === ms && (Lt.get("OES_texture_float") || Lt.get("WEBGL_color_buffer_float")) || u === vs && Lt.get("EXT_color_buffer_half_float"))) return;
                        Et.checkFramebufferStatus(Et.FRAMEBUFFER) === Et.FRAMEBUFFER_COMPLETE && e >= 0 && e <= t.width - n && i >= 0 && i <= t.height - r && Et.readPixels(e, i, n, r, ee.convert(c), ee.convert(u), o)
                    } finally {
                        s && Et.bindFramebuffer(Et.FRAMEBUFFER, it)
                    }
                }
            }
        }
    }

    function Me(t, e) {
        this.name = "", this.color = new $(t), this.density = void 0 !== e ? e : 25e-5
    }

    function Te(t, e, i) {
        this.name = "", this.color = new $(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== i ? i : 1e3
    }

    function Se() {
        lt.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
    }

    function Ae(t, e, i, n, r) {
        lt.call(this), this.lensFlares = [], this.positionScreen = new s, this.customUpdateCallback = void 0, void 0 !== t && this.add(t, e, i, n, r)
    }

    function Pe(t) {
        tt.call(this), this.type = "SpriteMaterial", this.color = new $(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.lights = !1, this.setValues(t)
    }

    function Ee(t) {
        lt.call(this), this.type = "Sprite", this.material = void 0 !== t ? t : new Pe
    }

    function Ce() {
        lt.call(this), this.type = "LOD", Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            }
        })
    }

    function Le(t, e) {
        if (t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === e) this.calculateInverses();
        else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
        else {
            this.boneInverses = [];
            for (var i = 0, n = this.bones.length; i < n; i++) this.boneInverses.push(new o)
        }
    }

    function Ne() {
        lt.call(this), this.type = "Bone"
    }

    function Oe(t, e) {
        Ut.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new o, this.bindMatrixInverse = new o;
        var i = this.initBones(),
            n = new Le(i);
        this.bind(n, this.matrixWorld), this.normalizeSkinWeights()
    }

    function Re(t) {
        tt.call(this), this.type = "LineBasicMaterial", this.color = new $(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(t)
    }

    function Ie(t, e, i) {
        if (1 === i) return new De(t, e);
        lt.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new Et, this.material = void 0 !== e ? e : new Re({
            color: 16777215 * Math.random()
        })
    }

    function De(t, e) {
        Ie.call(this, t, e), this.type = "LineSegments"
    }

    function ke(t, e) {
        Ie.call(this, t, e), this.type = "LineLoop"
    }

    function ze(t) {
        tt.call(this), this.type = "PointsMaterial", this.color = new $(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.lights = !1, this.setValues(t)
    }

    function Ue(t, e) {
        lt.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new Et, this.material = void 0 !== e ? e : new ze({
            color: 16777215 * Math.random()
        })
    }

    function Fe() {
        lt.call(this), this.type = "Group"
    }

    function Be(t, e, i, n, r, o, a, s, h) {
        function u() {
            t.removeEventListener("loadeddata", u, !1), l.needsUpdate = !0
        }

        c.call(this, t, e, i, n, r, o, a, s, h), this.generateMipmaps = !1;
        var l = this;
        t.addEventListener("loadeddata", u, !1)
    }

    function Ge(t, e, i, n, r, o, a, s, h, u, l, p) {
        c.call(this, null, o, a, s, h, u, n, r, l, p), this.image = {
            width: e,
            height: i
        }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
    }

    function je(t, e, i, n, r, o, a, s, h, u) {
        if ((u = void 0 !== u ? u : Ps) !== Ps && u !== Es) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === i && u === Ps && (i = ps), void 0 === i && u === Es && (i = xs), c.call(this, null, n, r, o, a, s, u, i, h), this.image = {
            width: t,
            height: e
        }, this.magFilter = void 0 !== a ? a : ns, this.minFilter = void 0 !== s ? s : ns, this.flipY = !1, this.generateMipmaps = !1
    }

    function Ve(t) {
        Et.call(this), this.type = "WireframeGeometry";
        var e, i, n, r, o, a, h, c, u, l, p = [],
            f = [0, 0],
            d = {},
            m = ["a", "b", "c"];
        if (t && t.isGeometry) {
            var v = t.faces;
            for (e = 0, n = v.length; e < n; e++) {
                var g = v[e];
                for (i = 0; i < 3; i++) h = g[m[i]], c = g[m[(i + 1) % 3]], f[0] = Math.min(h, c), f[1] = Math.max(h, c), u = f[0] + "," + f[1], void 0 === d[u] && (d[u] = {
                    index1: f[0],
                    index2: f[1]
                })
            }
            for (u in d) a = d[u], l = t.vertices[a.index1], p.push(l.x, l.y, l.z), l = t.vertices[a.index2], p.push(l.x, l.y, l.z)
        } else if (t && t.isBufferGeometry) {
            var y, _, x, b, w, M, T, S;
            if (l = new s, null !== t.index) {
                for (y = t.attributes.position, _ = t.index, x = t.groups, 0 === x.length && (x = [{
                    start: 0,
                    count: _.count,
                    materialIndex: 0
                }]), r = 0, o = x.length; r < o; ++r)
                    for (b = x[r], w = b.start, M = b.count, e = w, n = w + M; e < n; e += 3)
                        for (i = 0; i < 3; i++) h = _.getX(e + i), c = _.getX(e + (i + 1) % 3), f[0] = Math.min(h, c), f[1] = Math.max(h, c), u = f[0] + "," + f[1], void 0 === d[u] && (d[u] = {
                            index1: f[0],
                            index2: f[1]
                        });
                for (u in d) a = d[u], l.fromBufferAttribute(y, a.index1), p.push(l.x, l.y, l.z), l.fromBufferAttribute(y, a.index2), p.push(l.x, l.y, l.z)
            } else
                for (y = t.attributes.position, e = 0, n = y.count / 3; e < n; e++)
                    for (i = 0; i < 3; i++) T = 3 * e + i, l.fromBufferAttribute(y, T), p.push(l.x, l.y, l.z), S = 3 * e + (i + 1) % 3, l.fromBufferAttribute(y, S), p.push(l.x, l.y, l.z)
        }
        this.addAttribute("position", new Tt(p, 3))
    }

    function We(t, e, i) {
        mt.call(this), this.type = "ParametricGeometry", this.parameters = {
            func: t,
            slices: e,
            stacks: i
        }, this.fromBufferGeometry(new He(t, e, i)), this.mergeVertices()
    }

    function He(t, e, i) {
        Et.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
            func: t,
            slices: e,
            stacks: i
        };
        var n, r, o = [],
            a = [],
            h = [],
            c = [],
            u = new s,
            l = new s,
            p = new s,
            f = new s,
            d = new s,
            m = e + 1;
        for (n = 0; n <= i; n++) {
            var v = n / i;
            for (r = 0; r <= e; r++) {
                var g = r / e;
                l = t(g, v, l), a.push(l.x, l.y, l.z), g - 1e-5 >= 0 ? (p = t(g - 1e-5, v, p), f.subVectors(l, p)) : (p = t(g + 1e-5, v, p), f.subVectors(p, l)), v - 1e-5 >= 0 ? (p = t(g, v - 1e-5, p), d.subVectors(l, p)) : (p = t(g, v + 1e-5, p), d.subVectors(p, l)), u.crossVectors(f, d).normalize(), h.push(u.x, u.y, u.z), c.push(g, v)
            }
        }
        for (n = 0; n < i; n++)
            for (r = 0; r < e; r++) {
                var y = n * m + r,
                    _ = n * m + r + 1,
                    x = (n + 1) * m + r + 1,
                    b = (n + 1) * m + r;
                o.push(y, _, b), o.push(_, x, b)
            }
        this.setIndex(o), this.addAttribute("position", new Tt(a, 3)), this.addAttribute("normal", new Tt(h, 3)), this.addAttribute("uv", new Tt(c, 2))
    }

    function Xe(t, e, i, n) {
        mt.call(this), this.type = "PolyhedronGeometry", this.parameters = {
            vertices: t,
            indices: e,
            radius: i,
            detail: n
        }, this.fromBufferGeometry(new qe(t, e, i, n)), this.mergeVertices()
    }

    function qe(t, e, i, n) {
        function o(t, e, i, n) {
            var r, o, a = Math.pow(2, n),
                s = [];
            for (r = 0; r <= a; r++) {
                s[r] = [];
                var c = t.clone().lerp(i, r / a),
                    u = e.clone().lerp(i, r / a),
                    l = a - r;
                for (o = 0; o <= l; o++) s[r][o] = 0 === o && r === a ? c : c.clone().lerp(u, o / l)
            }
            for (r = 0; r < a; r++)
                for (o = 0; o < 2 * (a - r) - 1; o++) {
                    var p = Math.floor(o / 2);
                    o % 2 == 0 ? (h(s[r][p + 1]), h(s[r + 1][p]), h(s[r][p])) : (h(s[r][p + 1]), h(s[r + 1][p + 1]), h(s[r + 1][p]))
                }
        }

        function a() {
            for (var t = 0; t < m.length; t += 6) {
                var e = m[t + 0],
                    i = m[t + 2],
                    n = m[t + 4],
                    r = Math.max(e, i, n),
                    o = Math.min(e, i, n);
                r > .9 && o < .1 && (e < .2 && (m[t + 0] += 1), i < .2 && (m[t + 2] += 1), n < .2 && (m[t + 4] += 1))
            }
        }

        function h(t) {
            d.push(t.x, t.y, t.z)
        }

        function c(e, i) {
            var n = 3 * e;
            i.x = t[n + 0], i.y = t[n + 1], i.z = t[n + 2]
        }

        function u() {
            for (var t = new s, e = new s, i = new s, n = new s, o = new r, a = new r, h = new r, c = 0, u = 0; c < d.length; c += 9, u += 6) {
                t.set(d[c + 0], d[c + 1], d[c + 2]), e.set(d[c + 3], d[c + 4], d[c + 5]), i.set(d[c + 6], d[c + 7], d[c + 8]), o.set(m[u + 0], m[u + 1]), a.set(m[u + 2], m[u + 3]), h.set(m[u + 4], m[u + 5]), n.copy(t).add(e).add(i).divideScalar(3);
                var f = p(n);
                l(o, u + 0, t, f), l(a, u + 2, e, f), l(h, u + 4, i, f)
            }
        }

        function l(t, e, i, n) {
            n < 0 && 1 === t.x && (m[e] = t.x - 1), 0 === i.x && 0 === i.z && (m[e] = n / 2 / Math.PI + .5)
        }

        function p(t) {
            return Math.atan2(t.z, -t.x)
        }

        function f(t) {
            return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z))
        }

        Et.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
            vertices: t,
            indices: e,
            radius: i,
            detail: n
        }, i = i || 1, n = n || 0;
        var d = [],
            m = [];
        !function (t) {
            for (var i = new s, n = new s, r = new s, a = 0; a < e.length; a += 3) c(e[a + 0], i), c(e[a + 1], n), c(e[a + 2], r), o(i, n, r, t)
        }(n),
            function (t) {
                for (var e = new s, i = 0; i < d.length; i += 3) e.x = d[i + 0], e.y = d[i + 1], e.z = d[i + 2], e.normalize().multiplyScalar(t), d[i + 0] = e.x, d[i + 1] = e.y, d[i + 2] = e.z
            }(i),
            function () {
                for (var t = new s, e = 0; e < d.length; e += 3) {
                    t.x = d[e + 0], t.y = d[e + 1], t.z = d[e + 2];
                    var i = p(t) / 2 / Math.PI + .5,
                        n = f(t) / Math.PI + .5;
                    m.push(i, 1 - n)
                }
                u(), a()
            }(), this.addAttribute("position", new Tt(d, 3)), this.addAttribute("normal", new Tt(d.slice(), 3)), this.addAttribute("uv", new Tt(m, 2)), 0 === n ? this.computeVertexNormals() : this.normalizeNormals()
    }

    function Ye(t, e) {
        mt.call(this), this.type = "TetrahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new $e(t, e)), this.mergeVertices()
    }

    function $e(t, e) {
        var i = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
            n = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
        qe.call(this, i, n, t, e), this.type = "TetrahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function Ze(t, e) {
        mt.call(this), this.type = "OctahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new Je(t, e)), this.mergeVertices()
    }

    function Je(t, e) {
        var i = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
            n = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
        qe.call(this, i, n, t, e), this.type = "OctahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function Qe(t, e) {
        mt.call(this), this.type = "IcosahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new Ke(t, e)), this.mergeVertices()
    }

    function Ke(t, e) {
        var i = (1 + Math.sqrt(5)) / 2,
            n = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1],
            r = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
        qe.call(this, n, r, t, e), this.type = "IcosahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function ti(t, e) {
        mt.call(this), this.type = "DodecahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new ei(t, e)), this.mergeVertices()
    }

    function ei(t, e) {
        var i = (1 + Math.sqrt(5)) / 2,
            n = 1 / i,
            r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n],
            o = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
        qe.call(this, r, o, t, e), this.type = "DodecahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function ii(t, e, i, n, r, o) {
        mt.call(this), this.type = "TubeGeometry", this.parameters = {
            path: t,
            tubularSegments: e,
            radius: i,
            radialSegments: n,
            closed: r
        };
        var a = new ni(t, e, i, n, r);
        this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals, this.fromBufferGeometry(a), this.mergeVertices()
    }

    function ni(t, e, i, n, o) {
        function a(r) {
            v = t.getPointAt(r / e, v);
            var o = u.normals[r],
                a = u.binormals[r];
            for (p = 0; p <= n; p++) {
                var s = p / n * Math.PI * 2,
                    h = Math.sin(s),
                    c = -Math.cos(s);
                d.x = c * o.x + h * a.x, d.y = c * o.y + h * a.y, d.z = c * o.z + h * a.z, d.normalize(), y.push(d.x, d.y, d.z), f.x = v.x + i * d.x, f.y = v.y + i * d.y, f.z = v.z + i * d.z, g.push(f.x, f.y, f.z)
            }
        }

        function h() {
            for (p = 1; p <= e; p++)
                for (l = 1; l <= n; l++) {
                    var t = (n + 1) * (p - 1) + (l - 1),
                        i = (n + 1) * p + (l - 1),
                        r = (n + 1) * p + l,
                        o = (n + 1) * (p - 1) + l;
                    x.push(t, i, o), x.push(i, r, o)
                }
        }

        function c() {
            for (l = 0; l <= e; l++)
                for (p = 0; p <= n; p++) m.x = l / e, m.y = p / n, _.push(m.x, m.y)
        }

        Et.call(this), this.type = "TubeBufferGeometry", this.parameters = {
            path: t,
            tubularSegments: e,
            radius: i,
            radialSegments: n,
            closed: o
        }, e = e || 64, i = i || 1, n = n || 8, o = o || !1;
        var u = t.computeFrenetFrames(e, o);
        this.tangents = u.tangents, this.normals = u.normals, this.binormals = u.binormals;
        var l, p, f = new s,
            d = new s,
            m = new r,
            v = new s,
            g = [],
            y = [],
            _ = [],
            x = [];
        !function () {
            for (l = 0; l < e; l++) a(l);
            a(!1 === o ? e : 0), c(), h()
        }(), this.setIndex(x), this.addAttribute("position", new Tt(g, 3)), this.addAttribute("normal", new Tt(y, 3)), this.addAttribute("uv", new Tt(_, 2))
    }

    function ri(t, e, i, n, r, o, a) {
        mt.call(this), this.type = "TorusKnotGeometry", this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: i,
            radialSegments: n,
            p: r,
            q: o
        }, this.fromBufferGeometry(new oi(t, e, i, n, r, o)), this.mergeVertices()
    }

    function oi(t, e, i, n, r, o) {
        function a(t, e, i, n, r) {
            var o = Math.cos(t),
                a = Math.sin(t),
                s = i / e * t,
                h = Math.cos(s);
            r.x = n * (2 + h) * .5 * o, r.y = n * (2 + h) * a * .5, r.z = n * Math.sin(s) * .5
        }

        Et.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: i,
            radialSegments: n,
            p: r,
            q: o
        }, t = t || 1, e = e || .4, i = Math.floor(i) || 64, n = Math.floor(n) || 8, r = r || 2, o = o || 3;
        var h, c, u = [],
            l = [],
            p = [],
            f = [],
            d = new s,
            m = new s,
            v = new s,
            g = new s,
            y = new s,
            _ = new s,
            x = new s;
        for (h = 0; h <= i; ++h) {
            var b = h / i * r * Math.PI * 2;
            for (a(b, r, o, t, v), a(b + .01, r, o, t, g), _.subVectors(g, v), x.addVectors(g, v), y.crossVectors(_, x), x.crossVectors(y, _), y.normalize(), x.normalize(), c = 0; c <= n; ++c) {
                var w = c / n * Math.PI * 2,
                    M = -e * Math.cos(w),
                    T = e * Math.sin(w);
                d.x = v.x + (M * x.x + T * y.x), d.y = v.y + (M * x.y + T * y.y), d.z = v.z + (M * x.z + T * y.z), l.push(d.x, d.y, d.z), m.subVectors(d, v).normalize(), p.push(m.x, m.y, m.z), f.push(h / i), f.push(c / n)
            }
        }
        for (c = 1; c <= i; c++)
            for (h = 1; h <= n; h++) {
                var S = (n + 1) * (c - 1) + (h - 1),
                    A = (n + 1) * c + (h - 1),
                    P = (n + 1) * c + h,
                    E = (n + 1) * (c - 1) + h;
                u.push(S, A, E), u.push(A, P, E)
            }
        this.setIndex(u), this.addAttribute("position", new Tt(l, 3)), this.addAttribute("normal", new Tt(p, 3)), this.addAttribute("uv", new Tt(f, 2))
    }

    function ai(t, e, i, n, r) {
        mt.call(this), this.type = "TorusGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: i,
            tubularSegments: n,
            arc: r
        }, this.fromBufferGeometry(new si(t, e, i, n, r)), this.mergeVertices()
    }

    function si(t, e, i, n, r) {
        Et.call(this), this.type = "TorusBufferGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: i,
            tubularSegments: n,
            arc: r
        }, t = t || 1, e = e || .4, i = Math.floor(i) || 8, n = Math.floor(n) || 6, r = r || 2 * Math.PI;
        var o, a, h = [],
            c = [],
            u = [],
            l = [],
            p = new s,
            f = new s,
            d = new s;
        for (o = 0; o <= i; o++)
            for (a = 0; a <= n; a++) {
                var m = a / n * r,
                    v = o / i * Math.PI * 2;
                f.x = (t + e * Math.cos(v)) * Math.cos(m), f.y = (t + e * Math.cos(v)) * Math.sin(m), f.z = e * Math.sin(v), c.push(f.x, f.y, f.z), p.x = t * Math.cos(m), p.y = t * Math.sin(m), d.subVectors(f, p).normalize(), u.push(d.x, d.y, d.z), l.push(a / n), l.push(o / i)
            }
        for (o = 1; o <= i; o++)
            for (a = 1; a <= n; a++) {
                var g = (n + 1) * o + a - 1,
                    y = (n + 1) * (o - 1) + a - 1,
                    _ = (n + 1) * (o - 1) + a,
                    x = (n + 1) * o + a;
                h.push(g, y, x), h.push(y, _, x)
            }
        this.setIndex(h), this.addAttribute("position", new Tt(c, 3)), this.addAttribute("normal", new Tt(u, 3)), this.addAttribute("uv", new Tt(l, 2))
    }

    function hi(t, e, i, n, r) {
        var o, a;
        if (r === Di(t, e, i, n) > 0)
            for (o = e; o < i; o += n) a = Oi(o, t[o], t[o + 1], a);
        else
            for (o = i - n; o >= e; o -= n) a = Oi(o, t[o], t[o + 1], a);
        return a && Ai(a, a.next) && (Ri(a), a = a.next), a
    }

    function ci(t, e) {
        if (!t) return t;
        e || (e = t);
        var i, n = t;
        do {
            if (i = !1, n.steiner || !Ai(n, n.next) && 0 !== Si(n.prev, n, n.next)) n = n.next;
            else {
                if (Ri(n), (n = e = n.prev) === n.next) break;
                i = !0
            }
        } while (i || n !== e);
        return e
    }

    function ui(t, e, i, n, r, o, a) {
        if (t) {
            !a && o && _i(t, n, r, o);
            for (var s, h, c = t; t.prev !== t.next;)
                if (s = t.prev, h = t.next, o ? pi(t, n, r, o) : li(t)) e.push(s.i / i), e.push(t.i / i), e.push(h.i / i), Ri(t), t = h.next, c = h.next;
                else if ((t = h) === c) {
                    a ? 1 === a ? (t = fi(t, e, i), ui(t, e, i, n, r, o, 2)) : 2 === a && di(t, e, i, n, r, o) : ui(ci(t), e, i, n, r, o, 1);
                    break
                }
        }
    }

    function li(t) {
        var e = t.prev,
            i = t,
            n = t.next;
        if (Si(e, i, n) >= 0) return !1;
        for (var r = t.next.next; r !== t.prev;) {
            if (Mi(e.x, e.y, i.x, i.y, n.x, n.y, r.x, r.y) && Si(r.prev, r, r.next) >= 0) return !1;
            r = r.next
        }
        return !0
    }

    function pi(t, e, i, n) {
        var r = t.prev,
            o = t,
            a = t.next;
        if (Si(r, o, a) >= 0) return !1;
        for (var s = r.x < o.x ? r.x < a.x ? r.x : a.x : o.x < a.x ? o.x : a.x, h = r.y < o.y ? r.y < a.y ? r.y : a.y : o.y < a.y ? o.y : a.y, c = r.x > o.x ? r.x > a.x ? r.x : a.x : o.x > a.x ? o.x : a.x, u = r.y > o.y ? r.y > a.y ? r.y : a.y : o.y > a.y ? o.y : a.y, l = bi(s, h, e, i, n), p = bi(c, u, e, i, n), f = t.nextZ; f && f.z <= p;) {
            if (f !== t.prev && f !== t.next && Mi(r.x, r.y, o.x, o.y, a.x, a.y, f.x, f.y) && Si(f.prev, f, f.next) >= 0) return !1;
            f = f.nextZ
        }
        for (f = t.prevZ; f && f.z >= l;) {
            if (f !== t.prev && f !== t.next && Mi(r.x, r.y, o.x, o.y, a.x, a.y, f.x, f.y) && Si(f.prev, f, f.next) >= 0) return !1;
            f = f.prevZ
        }
        return !0
    }

    function fi(t, e, i) {
        var n = t;
        do {
            var r = n.prev,
                o = n.next.next;
            !Ai(r, o) && Pi(r, n, n.next, o) && Ci(r, o) && Ci(o, r) && (e.push(r.i / i), e.push(n.i / i), e.push(o.i / i), Ri(n), Ri(n.next), n = t = o), n = n.next
        } while (n !== t);
        return n
    }

    function di(t, e, i, n, r, o) {
        var a = t;
        do {
            for (var s = a.next.next; s !== a.prev;) {
                if (a.i !== s.i && Ti(a, s)) {
                    var h = Ni(a, s);
                    return a = ci(a, a.next), h = ci(h, h.next), ui(a, e, i, n, r, o), void ui(h, e, i, n, r, o)
                }
                s = s.next
            }
            a = a.next
        } while (a !== t)
    }

    function mi(t, e, i, n) {
        var r, o, a, s, h, c = [];
        for (r = 0, o = e.length; r < o; r++) a = e[r] * n, s = r < o - 1 ? e[r + 1] * n : t.length, h = hi(t, a, s, n, !1), h === h.next && (h.steiner = !0), c.push(wi(h));
        for (c.sort(vi), r = 0; r < c.length; r++) gi(c[r], i), i = ci(i, i.next);
        return i
    }

    function vi(t, e) {
        return t.x - e.x
    }

    function gi(t, e) {
        if (e = yi(t, e)) {
            var i = Ni(e, t);
            ci(i, i.next)
        }
    }

    function yi(t, e) {
        var i, n = e,
            r = t.x,
            o = t.y,
            a = -1 / 0;
        do {
            if (o <= n.y && o >= n.next.y && n.next.y !== n.y) {
                var s = n.x + (o - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                if (s <= r && s > a) {
                    if (a = s, s === r) {
                        if (o === n.y) return n;
                        if (o === n.next.y) return n.next
                    }
                    i = n.x < n.next.x ? n : n.next
                }
            }
            n = n.next
        } while (n !== e);
        if (!i) return null;
        if (r === a) return i.prev;
        var h, c = i,
            u = i.x,
            l = i.y,
            p = 1 / 0;
        for (n = i.next; n !== c;) r >= n.x && n.x >= u && r !== n.x && Mi(o < l ? r : a, o, u, l, o < l ? a : r, o, n.x, n.y) && ((h = Math.abs(o - n.y) / (r - n.x)) < p || h === p && n.x > i.x) && Ci(n, t) && (i = n, p = h), n = n.next;
        return i
    }

    function _i(t, e, i, n) {
        var r = t;
        do {
            null === r.z && (r.z = bi(r.x, r.y, e, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
        } while (r !== t);
        r.prevZ.nextZ = null, r.prevZ = null, xi(r)
    }

    function xi(t) {
        var e, i, n, r, o, a, s, h, c = 1;
        do {
            for (i = t, t = null, o = null, a = 0; i;) {
                for (a++, n = i, s = 0, e = 0; e < c && (s++, n = n.nextZ); e++) ;
                for (h = c; s > 0 || h > 0 && n;) 0 !== s && (0 === h || !n || i.z <= n.z) ? (r = i, i = i.nextZ, s--) : (r = n, n = n.nextZ, h--), o ? o.nextZ = r : t = r, r.prevZ = o, o = r;
                i = n
            }
            o.nextZ = null, c *= 2
        } while (a > 1);
        return t
    }

    function bi(t, e, i, n, r) {
        return t = 32767 * (t - i) * r, e = 32767 * (e - n) * r, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
    }

    function wi(t) {
        var e = t,
            i = t;
        do {
            e.x < i.x && (i = e), e = e.next
        } while (e !== t);
        return i
    }

    function Mi(t, e, i, n, r, o, a, s) {
        return (r - a) * (e - s) - (t - a) * (o - s) >= 0 && (t - a) * (n - s) - (i - a) * (e - s) >= 0 && (i - a) * (o - s) - (r - a) * (n - s) >= 0
    }

    function Ti(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && !Ei(t, e) && Ci(t, e) && Ci(e, t) && Li(t, e)
    }

    function Si(t, e, i) {
        return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
    }

    function Ai(t, e) {
        return t.x === e.x && t.y === e.y
    }

    function Pi(t, e, i, n) {
        return !!(Ai(t, e) && Ai(i, n) || Ai(t, n) && Ai(i, e)) || Si(t, e, i) > 0 != Si(t, e, n) > 0 && Si(i, n, t) > 0 != Si(i, n, e) > 0
    }

    function Ei(t, e) {
        var i = t;
        do {
            if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && Pi(i, i.next, t, e)) return !0;
            i = i.next
        } while (i !== t);
        return !1
    }

    function Ci(t, e) {
        return Si(t.prev, t, t.next) < 0 ? Si(t, e, t.next) >= 0 && Si(t, t.prev, e) >= 0 : Si(t, e, t.prev) < 0 || Si(t, t.next, e) < 0
    }

    function Li(t, e) {
        var i = t,
            n = !1,
            r = (t.x + e.x) / 2,
            o = (t.y + e.y) / 2;
        do {
            i.y > o != i.next.y > o && i.next.y !== i.y && r < (i.next.x - i.x) * (o - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next
        } while (i !== t);
        return n
    }

    function Ni(t, e) {
        var i = new Ii(t.i, t.x, t.y),
            n = new Ii(e.i, e.x, e.y),
            r = t.next,
            o = e.prev;
        return t.next = e, e.prev = t, i.next = r, r.prev = i, n.next = i, i.prev = n, o.next = n, n.prev = o, n
    }

    function Oi(t, e, i, n) {
        var r = new Ii(t, e, i);
        return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r
    }

    function Ri(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
    }

    function Ii(t, e, i) {
        this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
    }

    function Di(t, e, i, n) {
        for (var r = 0, o = e, a = i - n; o < i; o += n) r += (t[a] - t[o]) * (t[o + 1] + t[a + 1]), a = o;
        return r
    }

    function ki(t, e) {
        mt.call(this), this.type = "ExtrudeGeometry", this.parameters = {
            shapes: t,
            options: e
        }, this.fromBufferGeometry(new zi(t, e)), this.mergeVertices()
    }

    function zi(t, e) {
        void 0 !== t && (Et.call(this), this.type = "ExtrudeBufferGeometry", t = Array.isArray(t) ? t : [t], this.addShapeList(t, e), this.computeVertexNormals())
    }

    function Ui(t, e) {
        mt.call(this), this.type = "TextGeometry", this.parameters = {
            text: t,
            parameters: e
        }, this.fromBufferGeometry(new Fi(t, e)), this.mergeVertices()
    }

    function Fi(t, e) {
        e = e || {};
        var i = e.font;
        if (!i || !i.isFont) return new mt;
        var n = i.generateShapes(t, e.size, e.curveSegments);
        e.amount = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), zi.call(this, n, e), this.type = "TextBufferGeometry"
    }

    function Bi(t, e, i, n, r, o, a) {
        mt.call(this), this.type = "SphereGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: i,
            phiStart: n,
            phiLength: r,
            thetaStart: o,
            thetaLength: a
        }, this.fromBufferGeometry(new Gi(t, e, i, n, r, o, a)), this.mergeVertices()
    }

    function Gi(t, e, i, n, r, o, a) {
        Et.call(this), this.type = "SphereBufferGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: i,
            phiStart: n,
            phiLength: r,
            thetaStart: o,
            thetaLength: a
        }, t = t || 1, e = Math.max(3, Math.floor(e) || 8), i = Math.max(2, Math.floor(i) || 6), n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI, o = void 0 !== o ? o : 0, a = void 0 !== a ? a : Math.PI;
        var h, c, u = o + a,
            l = 0,
            p = [],
            f = new s,
            d = new s,
            m = [],
            v = [],
            g = [],
            y = [];
        for (c = 0; c <= i; c++) {
            var _ = [],
                x = c / i;
            for (h = 0; h <= e; h++) {
                var b = h / e;
                f.x = -t * Math.cos(n + b * r) * Math.sin(o + x * a), f.y = t * Math.cos(o + x * a), f.z = t * Math.sin(n + b * r) * Math.sin(o + x * a), v.push(f.x, f.y, f.z), d.set(f.x, f.y, f.z).normalize(), g.push(d.x, d.y, d.z), y.push(b, 1 - x), _.push(l++)
            }
            p.push(_)
        }
        for (c = 0; c < i; c++)
            for (h = 0; h < e; h++) {
                var w = p[c][h + 1],
                    M = p[c][h],
                    T = p[c + 1][h],
                    S = p[c + 1][h + 1];
                (0 !== c || o > 0) && m.push(w, M, S), (c !== i - 1 || u < Math.PI) && m.push(M, T, S)
            }
        this.setIndex(m), this.addAttribute("position", new Tt(v, 3)), this.addAttribute("normal", new Tt(g, 3)), this.addAttribute("uv", new Tt(y, 2))
    }

    function ji(t, e, i, n, r, o) {
        mt.call(this), this.type = "RingGeometry", this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: i,
            phiSegments: n,
            thetaStart: r,
            thetaLength: o
        }, this.fromBufferGeometry(new Vi(t, e, i, n, r, o)), this.mergeVertices()
    }

    function Vi(t, e, i, n, o, a) {
        Et.call(this), this.type = "RingBufferGeometry", this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: i,
            phiSegments: n,
            thetaStart: o,
            thetaLength: a
        }, t = t || .5, e = e || 1, o = void 0 !== o ? o : 0, a = void 0 !== a ? a : 2 * Math.PI, i = void 0 !== i ? Math.max(3, i) : 8, n = void 0 !== n ? Math.max(1, n) : 1;
        var h, c, u, l = [],
            p = [],
            f = [],
            d = [],
            m = t,
            v = (e - t) / n,
            g = new s,
            y = new r;
        for (c = 0; c <= n; c++) {
            for (u = 0; u <= i; u++) h = o + u / i * a, g.x = m * Math.cos(h), g.y = m * Math.sin(h), p.push(g.x, g.y, g.z), f.push(0, 0, 1), y.x = (g.x / e + 1) / 2, y.y = (g.y / e + 1) / 2, d.push(y.x, y.y);
            m += v
        }
        for (c = 0; c < n; c++) {
            var _ = c * (i + 1);
            for (u = 0; u < i; u++) {
                h = u + _;
                var x = h,
                    b = h + i + 1,
                    w = h + i + 2,
                    M = h + 1;
                l.push(x, b, M), l.push(b, w, M)
            }
        }
        this.setIndex(l), this.addAttribute("position", new Tt(p, 3)), this.addAttribute("normal", new Tt(f, 3)), this.addAttribute("uv", new Tt(d, 2))
    }

    function Wi(t, e, i, n) {
        mt.call(this), this.type = "LatheGeometry", this.parameters = {
            points: t,
            segments: e,
            phiStart: i,
            phiLength: n
        }, this.fromBufferGeometry(new Hi(t, e, i, n)), this.mergeVertices()
    }

    function Hi(t, e, i, n) {
        Et.call(this), this.type = "LatheBufferGeometry", this.parameters = {
            points: t,
            segments: e,
            phiStart: i,
            phiLength: n
        }, e = Math.floor(e) || 12, i = i || 0, n = n || 2 * Math.PI, n = ah.clamp(n, 0, 2 * Math.PI);
        var o, a, h, c = [],
            u = [],
            l = [],
            p = 1 / e,
            f = new s,
            d = new r;
        for (a = 0; a <= e; a++) {
            var m = i + a * p * n,
                v = Math.sin(m),
                g = Math.cos(m);
            for (h = 0; h <= t.length - 1; h++) f.x = t[h].x * v, f.y = t[h].y, f.z = t[h].x * g, u.push(f.x, f.y, f.z), d.x = a / e, d.y = h / (t.length - 1), l.push(d.x, d.y)
        }
        for (a = 0; a < e; a++)
            for (h = 0; h < t.length - 1; h++) {
                o = h + a * t.length;
                var y = o,
                    _ = o + t.length,
                    x = o + t.length + 1,
                    b = o + 1;
                c.push(y, _, b), c.push(_, x, b)
            }
        if (this.setIndex(c), this.addAttribute("position", new Tt(u, 3)), this.addAttribute("uv", new Tt(l, 2)), this.computeVertexNormals(), n === 2 * Math.PI) {
            var w = this.attributes.normal.array,
                M = new s,
                T = new s,
                S = new s;
            for (o = e * t.length * 3, a = 0, h = 0; a < t.length; a++, h += 3) M.x = w[h + 0], M.y = w[h + 1], M.z = w[h + 2], T.x = w[o + h + 0], T.y = w[o + h + 1], T.z = w[o + h + 2], S.addVectors(M, T).normalize(), w[h + 0] = w[o + h + 0] = S.x, w[h + 1] = w[o + h + 1] = S.y, w[h + 2] = w[o + h + 2] = S.z
        }
    }

    function Xi(t, e) {
        mt.call(this), this.type = "ShapeGeometry", "object" == typeof e && (e = e.curveSegments), this.parameters = {
            shapes: t,
            curveSegments: e
        }, this.fromBufferGeometry(new qi(t, e)), this.mergeVertices()
    }

    function qi(t, e) {
        function i(t) {
            var i, s, c, u = r.length / 3,
                l = t.extractPoints(e),
                p = l.shape,
                f = l.holes;
            if (!1 === Ah.isClockWise(p))
                for (p = p.reverse(), i = 0, s = f.length; i < s; i++) c = f[i], !0 === Ah.isClockWise(c) && (f[i] = c.reverse());
            var d = Ah.triangulateShape(p, f);
            for (i = 0, s = f.length; i < s; i++) c = f[i], p = p.concat(c);
            for (i = 0, s = p.length; i < s; i++) {
                var m = p[i];
                r.push(m.x, m.y, 0), o.push(0, 0, 1), a.push(m.x, m.y)
            }
            for (i = 0, s = d.length; i < s; i++) {
                var v = d[i],
                    g = v[0] + u,
                    y = v[1] + u,
                    _ = v[2] + u;
                n.push(g, y, _), h += 3
            }
        }

        Et.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
            shapes: t,
            curveSegments: e
        }, e = e || 12;
        var n = [],
            r = [],
            o = [],
            a = [],
            s = 0,
            h = 0;
        if (!1 === Array.isArray(t)) i(t);
        else
            for (var c = 0; c < t.length; c++) i(t[c]), this.addGroup(s, h, c), s += h, h = 0;
        this.setIndex(n), this.addAttribute("position", new Tt(r, 3)), this.addAttribute("normal", new Tt(o, 3)), this.addAttribute("uv", new Tt(a, 2))
    }

    function Yi(t, e) {
        if (e.shapes = [], Array.isArray(t))
            for (var i = 0, n = t.length; i < n; i++) {
                var r = t[i];
                e.shapes.push(r.uuid)
            } else e.shapes.push(t.uuid);
        return e
    }

    function $i(t, e) {
        Et.call(this), this.type = "EdgesGeometry", this.parameters = {
            thresholdAngle: e
        }, e = void 0 !== e ? e : 1;
        var i, n, r, o, a = [],
            s = Math.cos(ah.DEG2RAD * e),
            h = [0, 0],
            c = {},
            u = ["a", "b", "c"];
        t.isBufferGeometry ? (o = new mt, o.fromBufferGeometry(t)) : o = t.clone(), o.mergeVertices(), o.computeFaceNormals();
        for (var l = o.vertices, p = o.faces, f = 0, d = p.length; f < d; f++)
            for (var m = p[f], v = 0; v < 3; v++) i = m[u[v]], n = m[u[(v + 1) % 3]], h[0] = Math.min(i, n), h[1] = Math.max(i, n), r = h[0] + "," + h[1], void 0 === c[r] ? c[r] = {
                index1: h[0],
                index2: h[1],
                face1: f,
                face2: void 0
            } : c[r].face2 = f;
        for (r in c) {
            var g = c[r];
            if (void 0 === g.face2 || p[g.face1].normal.dot(p[g.face2].normal) <= s) {
                var y = l[g.index1];
                a.push(y.x, y.y, y.z), y = l[g.index2], a.push(y.x, y.y, y.z)
            }
        }
        this.addAttribute("position", new Tt(a, 3))
    }

    function Zi(t, e, i, n, r, o, a, s) {
        mt.call(this), this.type = "CylinderGeometry", this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: i,
            radialSegments: n,
            heightSegments: r,
            openEnded: o,
            thetaStart: a,
            thetaLength: s
        }, this.fromBufferGeometry(new Ji(t, e, i, n, r, o, a, s)), this.mergeVertices()
    }

    function Ji(t, e, i, n, o, a, h, c) {
        function u(i) {
            var o, a, u, g = new r,
                x = new s,
                b = 0,
                w = !0 === i ? t : e,
                M = !0 === i ? 1 : -1;
            for (a = v, o = 1; o <= n; o++) f.push(0, y * M, 0), d.push(0, M, 0), m.push(.5, .5), v++;
            for (u = v, o = 0; o <= n; o++) {
                var T = o / n,
                    S = T * c + h,
                    A = Math.cos(S),
                    P = Math.sin(S);
                x.x = w * P, x.y = y * M, x.z = w * A, f.push(x.x, x.y, x.z), d.push(0, M, 0), g.x = .5 * A + .5, g.y = .5 * P * M + .5, m.push(g.x, g.y), v++
            }
            for (o = 0; o < n; o++) {
                var E = a + o,
                    C = u + o;
                !0 === i ? p.push(C, C + 1, E) : p.push(C + 1, C, E), b += 3
            }
            l.addGroup(_, b, !0 === i ? 1 : 2), _ += b
        }

        Et.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: i,
            radialSegments: n,
            heightSegments: o,
            openEnded: a,
            thetaStart: h,
            thetaLength: c
        };
        var l = this;
        t = void 0 !== t ? t : 1, e = void 0 !== e ? e : 1, i = i || 1, n = Math.floor(n) || 8, o = Math.floor(o) || 1, a = void 0 !== a && a, h = void 0 !== h ? h : 0, c = void 0 !== c ? c : 2 * Math.PI;
        var p = [],
            f = [],
            d = [],
            m = [],
            v = 0,
            g = [],
            y = i / 2,
            _ = 0;
        !function () {
            var r, a, u = new s,
                x = new s,
                b = 0,
                w = (e - t) / i;
            for (a = 0; a <= o; a++) {
                var M = [],
                    T = a / o,
                    S = T * (e - t) + t;
                for (r = 0; r <= n; r++) {
                    var A = r / n,
                        P = A * c + h,
                        E = Math.sin(P),
                        C = Math.cos(P);
                    x.x = S * E, x.y = -T * i + y, x.z = S * C, f.push(x.x, x.y, x.z), u.set(E, w, C).normalize(), d.push(u.x, u.y, u.z), m.push(A, 1 - T), M.push(v++)
                }
                g.push(M)
            }
            for (r = 0; r < n; r++)
                for (a = 0; a < o; a++) {
                    var L = g[a][r],
                        N = g[a + 1][r],
                        O = g[a + 1][r + 1],
                        R = g[a][r + 1];
                    p.push(L, N, R), p.push(N, O, R), b += 6
                }
            l.addGroup(_, b, 0), _ += b
        }(), !1 === a && (t > 0 && u(!0), e > 0 && u(!1)), this.setIndex(p), this.addAttribute("position", new Tt(f, 3)), this.addAttribute("normal", new Tt(d, 3)), this.addAttribute("uv", new Tt(m, 2))
    }

    function Qi(t, e, i, n, r, o, a) {
        Zi.call(this, 0, t, e, i, n, r, o, a), this.type = "ConeGeometry", this.parameters = {
            radius: t,
            height: e,
            radialSegments: i,
            heightSegments: n,
            openEnded: r,
            thetaStart: o,
            thetaLength: a
        }
    }

    function Ki(t, e, i, n, r, o, a) {
        Ji.call(this, 0, t, e, i, n, r, o, a), this.type = "ConeBufferGeometry", this.parameters = {
            radius: t,
            height: e,
            radialSegments: i,
            heightSegments: n,
            openEnded: r,
            thetaStart: o,
            thetaLength: a
        }
    }

    function tn(t, e, i, n) {
        mt.call(this), this.type = "CircleGeometry", this.parameters = {
            radius: t,
            segments: e,
            thetaStart: i,
            thetaLength: n
        }, this.fromBufferGeometry(new en(t, e, i, n)), this.mergeVertices()
    }

    function en(t, e, i, n) {
        Et.call(this), this.type = "CircleBufferGeometry", this.parameters = {
            radius: t,
            segments: e,
            thetaStart: i,
            thetaLength: n
        }, t = t || 1, e = void 0 !== e ? Math.max(3, e) : 8, i = void 0 !== i ? i : 0, n = void 0 !== n ? n : 2 * Math.PI;
        var o, a, h = [],
            c = [],
            u = [],
            l = [],
            p = new s,
            f = new r;
        for (c.push(0, 0, 0), u.push(0, 0, 1), l.push(.5, .5), a = 0, o = 3; a <= e; a++, o += 3) {
            var d = i + a / e * n;
            p.x = t * Math.cos(d), p.y = t * Math.sin(d), c.push(p.x, p.y, p.z), u.push(0, 0, 1), f.x = (c[o] / t + 1) / 2, f.y = (c[o + 1] / t + 1) / 2, l.push(f.x, f.y)
        }
        for (o = 1; o <= e; o++) h.push(o, o + 1, 0);
        this.setIndex(h), this.addAttribute("position", new Tt(c, 3)), this.addAttribute("normal", new Tt(u, 3)), this.addAttribute("uv", new Tt(l, 2))
    }

    function nn(t) {
        tt.call(this), this.type = "ShadowMaterial", this.color = new $(0), this.opacity = 1, this.lights = !0, this.transparent = !0, this.setValues(t)
    }

    function rn(t) {
        It.call(this, t), this.type = "RawShaderMaterial"
    }

    function on(t) {
        tt.call(this), this.defines = {
            STANDARD: ""
        }, this.type = "MeshStandardMaterial", this.color = new $(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new $(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new r(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    function an(t) {
        on.call(this), this.defines = {
            PHYSICAL: ""
        }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(t)
    }

    function sn(t) {
        tt.call(this), this.type = "MeshPhongMaterial", this.color = new $(16777215), this.specular = new $(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new $(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new r(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Ua, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    function hn(t) {
        sn.call(this), this.defines = {
            TOON: ""
        }, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(t)
    }

    function cn(t) {
        tt.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new r(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    function un(t) {
        tt.call(this), this.type = "MeshLambertMaterial", this.color = new $(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new $(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Ua, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    function ln(t) {
        Re.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
    }

    function pn(t, e, i) {
        var n = this,
            r = !1,
            o = 0,
            a = 0,
            s = void 0;
        this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function (t) {
            a++, !1 === r && void 0 !== n.onStart && n.onStart(t, o, a), r = !0
        }, this.itemEnd = function (t) {
            o++, void 0 !== n.onProgress && n.onProgress(t, o, a), o === a && (r = !1, void 0 !== n.onLoad && n.onLoad())
        }, this.itemError = function (t) {
            void 0 !== n.onError && n.onError(t)
        }, this.resolveURL = function (t) {
            return s ? s(t) : t
        }, this.setURLModifier = function (t) {
            return s = t, this
        }
    }

    function fn(t) {
        this.manager = void 0 !== t ? t : Lh
    }

    function dn(t) {
        this.manager = void 0 !== t ? t : Lh, this._parser = null
    }

    function mn(t) {
        this.manager = void 0 !== t ? t : Lh, this._parser = null
    }

    function vn(t) {
        this.manager = void 0 !== t ? t : Lh
    }

    function gn(t) {
        this.manager = void 0 !== t ? t : Lh
    }

    function yn(t) {
        this.manager = void 0 !== t ? t : Lh
    }

    function _n() {
        this.type = "Curve", this.arcLengthDivisions = 200
    }

    function xn(t, e, i, n, r, o, a, s) {
        _n.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = i || 1, this.yRadius = n || 1, this.aStartAngle = r || 0, this.aEndAngle = o || 2 * Math.PI, this.aClockwise = a || !1, this.aRotation = s || 0
    }

    function bn(t, e, i, n, r, o) {
        xn.call(this, t, e, i, i, n, r, o), this.type = "ArcCurve"
    }

    function wn() {
        function t(t, o, a, s) {
            e = t, i = a, n = -3 * t + 3 * o - 2 * a - s, r = 2 * t - 2 * o + a + s
        }

        var e = 0,
            i = 0,
            n = 0,
            r = 0;
        return {
            initCatmullRom: function (e, i, n, r, o) {
                t(i, n, o * (n - e), o * (r - i))
            },
            initNonuniformCatmullRom: function (e, i, n, r, o, a, s) {
                var h = (i - e) / o - (n - e) / (o + a) + (n - i) / a,
                    c = (n - i) / a - (r - i) / (a + s) + (r - n) / s;
                h *= a, c *= a, t(i, n, h, c)
            },
            calc: function (t) {
                var o = t * t;
                return e + i * t + n * o + r * (o * t)
            }
        }
    }

    function Mn(t, e, i, n) {
        _n.call(this), this.type = "CatmullRomCurve3", this.points = t || [], this.closed = e || !1, this.curveType = i || "centripetal", this.tension = n || .5
    }

    function Tn(t, e, i, n, r) {
        var o = .5 * (n - e),
            a = .5 * (r - i),
            s = t * t;
        return (2 * i - 2 * n + o + a) * (t * s) + (-3 * i + 3 * n - 2 * o - a) * s + o * t + i
    }

    function Sn(t, e) {
        var i = 1 - t;
        return i * i * e
    }

    function An(t, e) {
        return 2 * (1 - t) * t * e
    }

    function Pn(t, e) {
        return t * t * e
    }

    function En(t, e, i, n) {
        return Sn(t, e) + An(t, i) + Pn(t, n)
    }

    function Cn(t, e) {
        var i = 1 - t;
        return i * i * i * e
    }

    function Ln(t, e) {
        var i = 1 - t;
        return 3 * i * i * t * e
    }

    function Nn(t, e) {
        return 3 * (1 - t) * t * t * e
    }

    function On(t, e) {
        return t * t * t * e
    }

    function Rn(t, e, i, n, r) {
        return Cn(t, e) + Ln(t, i) + Nn(t, n) + On(t, r)
    }

    function In(t, e, i, n) {
        _n.call(this), this.type = "CubicBezierCurve", this.v0 = t || new r, this.v1 = e || new r, this.v2 = i || new r, this.v3 = n || new r
    }

    function Dn(t, e, i, n) {
        _n.call(this), this.type = "CubicBezierCurve3", this.v0 = t || new s, this.v1 = e || new s, this.v2 = i || new s, this.v3 = n || new s
    }

    function kn(t, e) {
        _n.call(this), this.type = "LineCurve", this.v1 = t || new r, this.v2 = e || new r
    }

    function zn(t, e) {
        _n.call(this), this.type = "LineCurve3", this.v1 = t || new s, this.v2 = e || new s
    }

    function Un(t, e, i) {
        _n.call(this), this.type = "QuadraticBezierCurve", this.v0 = t || new r, this.v1 = e || new r, this.v2 = i || new r
    }

    function Fn(t, e, i) {
        _n.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t || new s, this.v1 = e || new s, this.v2 = i || new s
    }

    function Bn(t) {
        _n.call(this), this.type = "SplineCurve", this.points = t || []
    }

    function Gn() {
        _n.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
    }

    function jn(t) {
        Gn.call(this), this.type = "Path", this.currentPoint = new r, t && this.setFromPoints(t)
    }

    function Vn(t) {
        jn.call(this, t), this.uuid = ah.generateUUID(), this.type = "Shape", this.holes = []
    }

    function Wn(t, e) {
        lt.call(this), this.type = "Light", this.color = new $(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
    }

    function Hn(t, e, i) {
        Wn.call(this, t, i), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(lt.DefaultUp), this.updateMatrix(), this.groundColor = new $(e)
    }

    function Xn(t) {
        this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new r(512, 512), this.map = null, this.matrix = new o
    }

    function qn() {
        Xn.call(this, new ve(50, 1, .5, 500))
    }

    function Yn(t, e, i, n, r, o) {
        Wn.call(this, t, e), this.type = "SpotLight", this.position.copy(lt.DefaultUp), this.updateMatrix(), this.target = new lt, Object.defineProperty(this, "power", {
            get: function () {
                return this.intensity * Math.PI
            },
            set: function (t) {
                this.intensity = t / Math.PI
            }
        }), this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== o ? o : 1, this.shadow = new qn
    }

    function $n(t, e, i, n) {
        Wn.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
            get: function () {
                return 4 * this.intensity * Math.PI
            },
            set: function (t) {
                this.intensity = t / (4 * Math.PI)
            }
        }), this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new Xn(new ve(90, 1, .5, 500))
    }

    function Zn() {
        Xn.call(this, new ft(-5, 5, 5, -5, .5, 500))
    }

    function Jn(t, e) {
        Wn.call(this, t, e), this.type = "DirectionalLight", this.position.copy(lt.DefaultUp), this.updateMatrix(), this.target = new lt, this.shadow = new Zn
    }

    function Qn(t, e) {
        Wn.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
    }

    function Kn(t, e, i, n) {
        Wn.call(this, t, e), this.type = "RectAreaLight", this.position.set(0, 1, 0), this.updateMatrix(), this.width = void 0 !== i ? i : 10, this.height = void 0 !== n ? n : 10
    }

    function tr(t, e, i, n) {
        ur.call(this, t, e, i, n)
    }

    function er(t, e, i) {
        ur.call(this, t, e, i)
    }

    function ir(t, e, i, n) {
        this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(i), this.sampleValues = e, this.valueSize = i
    }

    function nr(t, e, i, n) {
        ir.call(this, t, e, i, n)
    }

    function rr(t, e, i, n) {
        ur.call(this, t, e, i, n)
    }

    function or(t, e, i, n) {
        ur.call(this, t, e, i, n)
    }

    function ar(t, e, i, n) {
        ur.call(this, t, e, i, n)
    }

    function sr(t, e, i, n) {
        ir.call(this, t, e, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
    }

    function hr(t, e, i, n) {
        ir.call(this, t, e, i, n)
    }

    function cr(t, e, i, n) {
        ir.call(this, t, e, i, n)
    }

    function ur(t, e, i, n) {
        if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
        this.name = t, this.times = zh.convertArray(e, this.TimeBufferType), this.values = zh.convertArray(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation), this.validate(), this.optimize()
    }

    function lr(t, e, i, n) {
        ur.call(this, t, e, i, n)
    }

    function pr(t, e, i) {
        this.name = t, this.tracks = i, this.duration = void 0 !== e ? e : -1, this.uuid = ah.generateUUID(), this.duration < 0 && this.resetDuration(), this.optimize()
    }

    function fr(t) {
        this.manager = void 0 !== t ? t : Lh, this.textures = {}
    }

    function dr(t) {
        this.manager = void 0 !== t ? t : Lh
    }

    function mr() {
        this.onLoadStart = function () {
        }, this.onLoadProgress = function () {
        }, this.onLoadComplete = function () {
        }
    }

    function vr(t) {
        "boolean" == typeof t && (t = void 0), this.manager = void 0 !== t ? t : Lh, this.withCredentials = !1
    }

    function gr(t) {
        this.manager = void 0 !== t ? t : Lh, this.texturePath = ""
    }

    function yr(t) {
        this.manager = void 0 !== t ? t : Lh, this.options = void 0
    }

    function _r() {
        this.type = "ShapePath", this.subPaths = [], this.currentPath = null
    }

    function xr(t) {
        this.type = "Font", this.data = t
    }

    function br(t) {
        this.manager = void 0 !== t ? t : Lh
    }

    function wr(t) {
        this.manager = void 0 !== t ? t : Lh
    }

    function Mr() {
        this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new ve, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new ve, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
    }

    function Tr(t, e, i) {
        lt.call(this), this.type = "CubeCamera";
        var n = new ve(90, 1, t, e);
        n.up.set(0, -1, 0), n.lookAt(new s(1, 0, 0)), this.add(n);
        var r = new ve(90, 1, t, e);
        r.up.set(0, -1, 0), r.lookAt(new s(-1, 0, 0)), this.add(r);
        var o = new ve(90, 1, t, e);
        o.up.set(0, 0, 1), o.lookAt(new s(0, 1, 0)), this.add(o);
        var a = new ve(90, 1, t, e);
        a.up.set(0, 0, -1), a.lookAt(new s(0, -1, 0)), this.add(a);
        var h = new ve(90, 1, t, e);
        h.up.set(0, -1, 0), h.lookAt(new s(0, 0, 1)), this.add(h);
        var c = new ve(90, 1, t, e);
        c.up.set(0, -1, 0), c.lookAt(new s(0, 0, -1)), this.add(c);
        var u = {
            format: ws,
            magFilter: as,
            minFilter: as
        };
        this.renderTarget = new p(i, i, u), this.renderTarget.texture.name = "CubeCamera", this.update = function (t, e) {
            null === this.parent && this.updateMatrixWorld();
            var i = this.renderTarget,
                s = i.texture.generateMipmaps;
            i.texture.generateMipmaps = !1, i.activeCubeFace = 0, t.render(e, n, i), i.activeCubeFace = 1, t.render(e, r, i), i.activeCubeFace = 2, t.render(e, o, i), i.activeCubeFace = 3, t.render(e, a, i), i.activeCubeFace = 4, t.render(e, h, i), i.texture.generateMipmaps = s, i.activeCubeFace = 5, t.render(e, c, i), t.setRenderTarget(null)
        }, this.clear = function (t, e, i, n) {
            for (var r = this.renderTarget, o = 0; o < 6; o++) r.activeCubeFace = o, t.setRenderTarget(r), t.clear(e, i, n);
            t.setRenderTarget(null)
        }
    }

    function Sr() {
        lt.call(this), this.type = "AudioListener", this.context = Wh.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null
    }

    function Ar(t) {
        lt.call(this), this.type = "Audio", this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.loop = !1, this.startTime = 0, this.offset = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
    }

    function Pr(t) {
        Ar.call(this, t), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
    }

    function Er(t, e) {
        this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
    }

    function Cr(t, e, i) {
        this.binding = t, this.valueSize = i;
        var n, r = Float64Array;
        switch (e) {
            case "quaternion":
                n = this._slerp;
                break;
            case "string":
            case "bool":
                r = Array, n = this._select;
                break;
            default:
                n = this._lerp
        }
        this.buffer = new r(4 * i), this._mixBufferRegion = n, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
    }

    function Lr(t, e, i) {
        var n = i || Nr.parseTrackName(e);
        this._targetGroup = t, this._bindings = t.subscribe_(e, n)
    }

    function Nr(t, e, i) {
        this.path = e, this.parsedPath = i || Nr.parseTrackName(e), this.node = Nr.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
    }

    function Or() {
        this.uuid = ah.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
        var t = {};
        this._indicesByUUID = t;
        for (var e = 0, i = arguments.length; e !== i; ++e) t[arguments[e].uuid] = e;
        this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
        var n = this;
        this.stats = {
            objects: {
                get total() {
                    return n._objects.length
                },
                get inUse() {
                    return this.total - n.nCachedObjects_
                }
            },
            get bindingsPerObject() {
                return n._bindings.length
            }
        }
    }

    function Rr(t, e, i) {
        this._mixer = t, this._clip = e, this._localRoot = i || null;
        for (var n = e.tracks, r = n.length, o = new Array(r), a = {
            endingStart: Ws,
            endingEnd: Ws
        }, s = 0; s !== r; ++s) {
            var h = n[s].createInterpolant(null);
            o[s] = h, h.settings = a
        }
        this._interpolantSettings = a, this._interpolants = o, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Fs, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
    }

    function Ir(t) {
        this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
    }

    function Dr(t) {
        "string" == typeof t && (t = arguments[1]), this.value = t
    }

    function kr() {
        Et.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
    }

    function zr(t, e, i, n) {
        this.uuid = ah.generateUUID(), this.data = t, this.itemSize = e, this.offset = i, this.normalized = !0 === n
    }

    function Ur(t, e) {
        this.uuid = ah.generateUUID(), this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.onUploadCallback = function () {
        }, this.version = 0
    }

    function Fr(t, e, i) {
        Ur.call(this, t, e), this.meshPerAttribute = i || 1
    }

    function Br(t, e, i) {
        vt.call(this, t, e), this.meshPerAttribute = i || 1
    }

    function Gr(t, e, i, n) {
        this.ray = new Dt(t, e), this.near = i || 0, this.far = n || 1 / 0, this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        }, Object.defineProperties(this.params, {
            PointCloud: {
                get: function () {
                    return this.Points
                }
            }
        })
    }

    function jr(t, e) {
        return t.distance - e.distance
    }

    function Vr(t, e, i, n) {
        if (!1 !== t.visible && (t.raycast(e, i), !0 === n))
            for (var r = t.children, o = 0, a = r.length; o < a; o++) Vr(r[o], e, i, !0)
    }

    function Wr(t) {
        this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
    }

    function Hr(t, e, i) {
        return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== i ? i : 0, this
    }

    function Xr(t, e, i) {
        return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== i ? i : 0, this
    }

    function qr(t) {
        lt.call(this), this.material = t, this.render = function () {
        }
    }

    function Yr(t, e, i, n) {
        this.object = t, this.size = void 0 !== e ? e : 1;
        var r = void 0 !== i ? i : 16711680,
            o = void 0 !== n ? n : 1,
            a = 0,
            s = this.object.geometry;
        s && s.isGeometry ? a = 3 * s.faces.length : s && s.isBufferGeometry && (a = s.attributes.normal.count);
        var h = new Et,
            c = new Tt(2 * a * 3, 3);
        h.addAttribute("position", c), De.call(this, h, new Re({
            color: r,
            linewidth: o
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function $r(t, e) {
        lt.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
        for (var i = new Et, n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, o = 1; r < 32; r++, o++) {
            var a = r / 32 * Math.PI * 2,
                s = o / 32 * Math.PI * 2;
            n.push(Math.cos(a), Math.sin(a), 1, Math.cos(s), Math.sin(s), 1)
        }
        i.addAttribute("position", new Tt(n, 3));
        var h = new Re({
            fog: !1
        });
        this.cone = new De(i, h), this.add(this.cone), this.update()
    }

    function Zr(t) {
        var e = [];
        t && t.isBone && e.push(t);
        for (var i = 0; i < t.children.length; i++) e.push.apply(e, Zr(t.children[i]));
        return e
    }

    function Jr(t) {
        for (var e = Zr(t), i = new Et, n = [], r = [], o = new $(0, 0, 1), a = new $(0, 1, 0), s = 0; s < e.length; s++) {
            var h = e[s];
            h.parent && h.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), r.push(o.r, o.g, o.b), r.push(a.r, a.g, a.b))
        }
        i.addAttribute("position", new Tt(n, 3)), i.addAttribute("color", new Tt(r, 3));
        var c = new Re({
            vertexColors: sa,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        });
        De.call(this, i, c), this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
    }

    function Qr(t, e, i) {
        this.light = t, this.light.updateMatrixWorld(), this.color = i;
        var n = new Gi(e, 4, 2),
            r = new Rt({
                wireframe: !0,
                fog: !1
            });
        Ut.call(this, n, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
    }

    function Kr(t, e) {
        lt.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
        var i = new Re({
                fog: !1
            }),
            n = new Et;
        n.addAttribute("position", new vt(new Float32Array(15), 3)), this.line = new Ie(n, i), this.add(this.line), this.update()
    }

    function to(t, e, i) {
        lt.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i;
        var n = new Je(e);
        n.rotateY(.5 * Math.PI), this.material = new Rt({
            wireframe: !0,
            fog: !1
        }), void 0 === this.color && (this.material.vertexColors = sa);
        var r = n.getAttribute("position"),
            o = new Float32Array(3 * r.count);
        n.addAttribute("color", new vt(o, 3)), this.add(new Ut(n, this.material)), this.update()
    }

    function eo(t, e, i, n) {
        t = t || 10, e = e || 10, i = new $(void 0 !== i ? i : 4473924), n = new $(void 0 !== n ? n : 8947848);
        for (var r = e / 2, o = t / e, a = t / 2, s = [], h = [], c = 0, u = 0, l = -a; c <= e; c++, l += o) {
            s.push(-a, 0, l, a, 0, l), s.push(l, 0, -a, l, 0, a);
            var p = c === r ? i : n;
            p.toArray(h, u), u += 3, p.toArray(h, u), u += 3, p.toArray(h, u), u += 3, p.toArray(h, u), u += 3
        }
        var f = new Et;
        f.addAttribute("position", new Tt(s, 3)), f.addAttribute("color", new Tt(h, 3));
        var d = new Re({
            vertexColors: sa
        });
        De.call(this, f, d)
    }

    function io(t, e, i, n, r, o) {
        t = t || 10, e = e || 16, i = i || 8, n = n || 64, r = new $(void 0 !== r ? r : 4473924), o = new $(void 0 !== o ? o : 8947848);
        var a, s, h, c, u, l, p, f = [],
            d = [];
        for (c = 0; c <= e; c++) h = c / e * (2 * Math.PI), a = Math.sin(h) * t, s = Math.cos(h) * t, f.push(0, 0, 0), f.push(a, 0, s), p = 1 & c ? r : o, d.push(p.r, p.g, p.b), d.push(p.r, p.g, p.b);
        for (c = 0; c <= i; c++)
            for (p = 1 & c ? r : o, l = t - t / i * c, u = 0; u < n; u++) h = u / n * (2 * Math.PI), a = Math.sin(h) * l, s = Math.cos(h) * l, f.push(a, 0, s), d.push(p.r, p.g, p.b), h = (u + 1) / n * (2 * Math.PI), a = Math.sin(h) * l, s = Math.cos(h) * l, f.push(a, 0, s), d.push(p.r, p.g, p.b);
        var m = new Et;
        m.addAttribute("position", new Tt(f, 3)), m.addAttribute("color", new Tt(d, 3));
        var v = new Re({
            vertexColors: sa
        });
        De.call(this, m, v)
    }

    function no(t, e, i, n) {
        this.object = t, this.size = void 0 !== e ? e : 1;
        var r = void 0 !== i ? i : 16776960,
            o = void 0 !== n ? n : 1,
            a = 0,
            s = this.object.geometry;
        s && s.isGeometry && (a = s.faces.length);
        var h = new Et,
            c = new Tt(2 * a * 3, 3);
        h.addAttribute("position", c), De.call(this, h, new Re({
            color: r,
            linewidth: o
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function ro(t, e, i) {
        lt.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, void 0 === e && (e = 1);
        var n = new Et;
        n.addAttribute("position", new Tt([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
        var r = new Re({
            fog: !1
        });
        this.lightPlane = new Ie(n, r), this.add(this.lightPlane), n = new Et, n.addAttribute("position", new Tt([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Ie(n, r), this.add(this.targetLine), this.update()
    }

    function oo(t) {
        function e(t, e, n) {
            i(t, n), i(e, n)
        }

        function i(t, e) {
            o.push(0, 0, 0), a.push(e.r, e.g, e.b), void 0 === s[t] && (s[t] = []), s[t].push(o.length / 3 - 1)
        }

        var n = new Et,
            r = new Re({
                color: 16777215,
                vertexColors: aa
            }),
            o = [],
            a = [],
            s = {},
            h = new $(16755200),
            c = new $(16711680),
            u = new $(43775),
            l = new $(16777215),
            p = new $(3355443);
        e("n1", "n2", h), e("n2", "n4", h), e("n4", "n3", h), e("n3", "n1", h), e("f1", "f2", h), e("f2", "f4", h), e("f4", "f3", h), e("f3", "f1", h), e("n1", "f1", h), e("n2", "f2", h), e("n3", "f3", h), e("n4", "f4", h), e("p", "n1", c), e("p", "n2", c), e("p", "n3", c), e("p", "n4", c), e("u1", "u2", u), e("u2", "u3", u), e("u3", "u1", u), e("c", "t", l), e("p", "c", p), e("cn1", "cn2", p), e("cn3", "cn4", p), e("cf1", "cf2", p), e("cf3", "cf4", p), n.addAttribute("position", new Tt(o, 3)), n.addAttribute("color", new Tt(a, 3)), De.call(this, n, r), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update()
    }

    function ao(t, e) {
        this.object = t, void 0 === e && (e = 16776960);
        var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            n = new Float32Array(24),
            r = new Et;
        r.setIndex(new vt(i, 1)), r.addAttribute("position", new vt(n, 3)), De.call(this, r, new Re({
            color: e
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function so(t, e) {
        this.type = "Box3Helper", this.box = t;
        var i = void 0 !== e ? e : 16776960,
            n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            r = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1],
            o = new Et;
        o.setIndex(new vt(n, 1)), o.addAttribute("position", new Tt(r, 3)), De.call(this, o, new Re({
            color: i
        })), this.geometry.computeBoundingSphere()
    }

    function ho(t, e, i) {
        this.type = "PlaneHelper", this.plane = t, this.size = void 0 === e ? 1 : e;
        var n = void 0 !== i ? i : 16776960,
            r = [1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
            o = new Et;
        o.addAttribute("position", new Tt(r, 3)), o.computeBoundingSphere(), Ie.call(this, o, new Re({
            color: n
        }));
        var a = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1],
            s = new Et;
        s.addAttribute("position", new Tt(a, 3)), s.computeBoundingSphere(), this.add(new Ut(s, new Rt({
            color: n,
            opacity: .2,
            transparent: !0,
            depthWrite: !1
        })))
    }

    function co(t, e, i, n, r, o) {
        lt.call(this), void 0 === n && (n = 16776960), void 0 === i && (i = 1), void 0 === r && (r = .2 * i), void 0 === o && (o = .2 * r), void 0 === Hh && (Hh = new Et, Hh.addAttribute("position", new Tt([0, 0, 0, 0, 1, 0], 3)), Xh = new Ji(0, .5, 1, 5, 1), Xh.translate(0, -.5, 0)), this.position.copy(e), this.line = new Ie(Hh, new Re({
            color: n
        })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Ut(Xh, new Rt({
            color: n
        })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(i, r, o)
    }

    function uo(t) {
        t = t || 1;
        var e = [0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
            i = [1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1],
            n = new Et;
        n.addAttribute("position", new Tt(e, 3)), n.addAttribute("color", new Tt(i, 3));
        var r = new Re({
            vertexColors: sa
        });
        De.call(this, n, r)
    }

    function lo(t, e, i, n, r, o, a) {
        return new dt(t, e, i, r, o, a)
    }

    function po(t) {
        return t
    }

    function fo(t) {
        return void 0 === t && (t = []), t.isMultiMaterial = !0, t.materials = t, t.clone = function () {
            return t.slice()
        }, t
    }

    function mo(t, e) {
        return new Ue(t, e)
    }

    function vo(t) {
        return new Ee(t)
    }

    function go(t, e) {
        return new Ue(t, e)
    }

    function yo(t) {
        return new ze(t)
    }

    function _o(t) {
        return new ze(t)
    }

    function xo(t) {
        return new ze(t)
    }

    function bo(t, e, i) {
        return new s(t, e, i)
    }

    function wo(t, e) {
        return new vt(t, e).setDynamic(!0)
    }

    function Mo(t, e) {
        return new gt(t, e)
    }

    function To(t, e) {
        return new yt(t, e)
    }

    function So(t, e) {
        return new _t(t, e)
    }

    function Ao(t, e) {
        return new xt(t, e)
    }

    function Po(t, e) {
        return new bt(t, e)
    }

    function Eo(t, e) {
        return new wt(t, e)
    }

    function Co(t, e) {
        return new Mt(t, e)
    }

    function Lo(t, e) {
        return new Tt(t, e)
    }

    function No(t, e) {
        return new St(t, e)
    }

    function Oo(t) {
        Mn.call(this, t), this.type = "catmullrom", this.closed = !0
    }

    function Ro(t) {
        Mn.call(this, t), this.type = "catmullrom"
    }

    function Io(t) {
        Mn.call(this, t), this.type = "catmullrom"
    }

    function Do(t) {
        return new uo(t)
    }

    function ko(t, e) {
        return new ao(t, e)
    }

    function zo(t, e) {
        return new De(new $i(t.geometry), new Re({
            color: void 0 !== e ? e : 16777215
        }))
    }

    function Uo(t, e) {
        return new De(new Ve(t.geometry), new Re({
            color: void 0 !== e ? e : 16777215
        }))
    }

    function Fo(t) {
        return new fn(t)
    }

    function Bo(t) {
        return new mn(t)
    }

    function Go() {
        this.projectVector = function (t, e) {
            t.project(e)
        }, this.unprojectVector = function (t, e) {
            t.unproject(e)
        }, this.pickingRay = function () {
        }
    }

    function jo() {
        this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), this.clear = function () {
        }, this.render = function () {
        }, this.setClearColor = function () {
        }, this.setSize = function () {
        }
    }

    Object.defineProperty(e, "__esModule", {
        value: !0
    }), i.d(e, "WebGLRenderTargetCube", function () {
        return p
    }), i.d(e, "WebGLRenderTarget", function () {
        return l
    }), i.d(e, "WebGLRenderer", function () {
        return we
    }), i.d(e, "ShaderLib", function () {
        return _h
    }), i.d(e, "UniformsLib", function () {
        return vh
    }), i.d(e, "UniformsUtils", function () {
        return gh
    }), i.d(e, "ShaderChunk", function () {
        return yh
    }), i.d(e, "FogExp2", function () {
        return Me
    }), i.d(e, "Fog", function () {
        return Te
    }), i.d(e, "Scene", function () {
        return Se
    }), i.d(e, "LensFlare", function () {
        return Ae
    }), i.d(e, "Sprite", function () {
        return Ee
    }), i.d(e, "LOD", function () {
        return Ce
    }), i.d(e, "SkinnedMesh", function () {
        return Oe
    }), i.d(e, "Skeleton", function () {
        return Le
    }), i.d(e, "Bone", function () {
        return Ne
    }), i.d(e, "Mesh", function () {
        return Ut
    }), i.d(e, "LineSegments", function () {
        return De
    }), i.d(e, "LineLoop", function () {
        return ke
    }), i.d(e, "Line", function () {
        return Ie
    }), i.d(e, "Points", function () {
        return Ue
    }), i.d(e, "Group", function () {
        return Fe
    }), i.d(e, "VideoTexture", function () {
        return Be
    }), i.d(e, "DataTexture", function () {
        return f
    }), i.d(e, "CompressedTexture", function () {
        return Ge
    }), i.d(e, "CubeTexture", function () {
        return d
    }), i.d(e, "CanvasTexture", function () {
        return Q
    }), i.d(e, "DepthTexture", function () {
        return je
    }), i.d(e, "Texture", function () {
        return c
    }), i.d(e, "CompressedTextureLoader", function () {
        return dn
    }), i.d(e, "DataTextureLoader", function () {
        return mn
    }), i.d(e, "CubeTextureLoader", function () {
        return gn
    }), i.d(e, "TextureLoader", function () {
        return yn
    }), i.d(e, "ObjectLoader", function () {
        return gr
    }), i.d(e, "MaterialLoader", function () {
        return fr
    }), i.d(e, "BufferGeometryLoader", function () {
        return dr
    }), i.d(e, "DefaultLoadingManager", function () {
        return Lh
    }), i.d(e, "LoadingManager", function () {
        return pn
    }), i.d(e, "JSONLoader", function () {
        return vr
    }), i.d(e, "ImageLoader", function () {
        return vn
    }), i.d(e, "ImageBitmapLoader", function () {
        return yr
    }), i.d(e, "FontLoader", function () {
        return br
    }), i.d(e, "FileLoader", function () {
        return fn
    }), i.d(e, "Loader", function () {
        return mr
    }), i.d(e, "LoaderUtils", function () {
        return Fh
    }), i.d(e, "Cache", function () {
        return Ch
    }), i.d(e, "AudioLoader", function () {
        return wr
    }), i.d(e, "SpotLightShadow", function () {
        return qn
    }), i.d(e, "SpotLight", function () {
        return Yn
    }), i.d(e, "PointLight", function () {
        return $n
    }), i.d(e, "RectAreaLight", function () {
        return Kn
    }), i.d(e, "HemisphereLight", function () {
        return Hn
    }), i.d(e, "DirectionalLightShadow", function () {
        return Zn
    }), i.d(e, "DirectionalLight", function () {
        return Jn
    }), i.d(e, "AmbientLight", function () {
        return Qn
    }), i.d(e, "LightShadow", function () {
        return Xn
    }), i.d(e, "Light", function () {
        return Wn
    }), i.d(e, "StereoCamera", function () {
        return Mr
    }), i.d(e, "PerspectiveCamera", function () {
        return ve
    }), i.d(e, "OrthographicCamera", function () {
        return ft
    }), i.d(e, "CubeCamera", function () {
        return Tr
    }), i.d(e, "ArrayCamera", function () {
        return ge
    }), i.d(e, "Camera", function () {
        return pt
    }), i.d(e, "AudioListener", function () {
        return Sr
    }), i.d(e, "PositionalAudio", function () {
        return Pr
    }), i.d(e, "AudioContext", function () {
        return Wh
    }), i.d(e, "AudioAnalyser", function () {
        return Er
    }), i.d(e, "Audio", function () {
        return Ar
    }), i.d(e, "VectorKeyframeTrack", function () {
        return lr
    }), i.d(e, "StringKeyframeTrack", function () {
        return tr
    }), i.d(e, "QuaternionKeyframeTrack", function () {
        return rr
    }), i.d(e, "NumberKeyframeTrack", function () {
        return ar
    }), i.d(e, "ColorKeyframeTrack", function () {
        return or
    }), i.d(e, "BooleanKeyframeTrack", function () {
        return er
    }), i.d(e, "PropertyMixer", function () {
        return Cr
    }), i.d(e, "PropertyBinding", function () {
        return Nr
    }), i.d(e, "KeyframeTrack", function () {
        return ur
    }), i.d(e, "AnimationUtils", function () {
        return zh
    }), i.d(e, "AnimationObjectGroup", function () {
        return Or
    }), i.d(e, "AnimationMixer", function () {
        return Ir
    }), i.d(e, "AnimationClip", function () {
        return pr
    }), i.d(e, "Uniform", function () {
        return Dr
    }), i.d(e, "InstancedBufferGeometry", function () {
        return kr
    }), i.d(e, "BufferGeometry", function () {
        return Et
    }), i.d(e, "Geometry", function () {
        return mt
    }), i.d(e, "InterleavedBufferAttribute", function () {
        return zr
    }), i.d(e, "InstancedInterleavedBuffer", function () {
        return Fr
    }), i.d(e, "InterleavedBuffer", function () {
        return Ur
    }), i.d(e, "InstancedBufferAttribute", function () {
        return Br
    }), i.d(e, "Face3", function () {
        return dt
    }), i.d(e, "Object3D", function () {
        return lt
    }), i.d(e, "Raycaster", function () {
        return Gr
    }), i.d(e, "Layers", function () {
        return ut
    }), i.d(e, "EventDispatcher", function () {
        return n
    }), i.d(e, "Clock", function () {
        return Wr
    }), i.d(e, "QuaternionLinearInterpolant", function () {
        return nr
    }), i.d(e, "LinearInterpolant", function () {
        return hr
    }), i.d(e, "DiscreteInterpolant", function () {
        return cr
    }), i.d(e, "CubicInterpolant", function () {
        return sr
    }), i.d(e, "Interpolant", function () {
        return ir
    }), i.d(e, "Triangle", function () {
        return zt
    }), i.d(e, "Math", function () {
        return ah
    }), i.d(e, "Spherical", function () {
        return Hr
    }), i.d(e, "Cylindrical", function () {
        return Xr
    }), i.d(e, "Plane", function () {
        return ot
    }), i.d(e, "Frustum", function () {
        return at
    }), i.d(e, "Sphere", function () {
        return rt
    }), i.d(e, "Ray", function () {
        return Dt
    }), i.d(e, "Matrix4", function () {
        return o
    }), i.d(e, "Matrix3", function () {
        return h
    }), i.d(e, "Box3", function () {
        return nt
    }), i.d(e, "Box2", function () {
        return Z
    }), i.d(e, "Line3", function () {
        return kt
    }), i.d(e, "Euler", function () {
        return ct
    }), i.d(e, "Vector4", function () {
        return u
    }), i.d(e, "Vector3", function () {
        return s
    }), i.d(e, "Vector2", function () {
        return r
    }), i.d(e, "Quaternion", function () {
        return a
    }), i.d(e, "Color", function () {
        return $
    }), i.d(e, "ImmediateRenderObject", function () {
        return qr
    }), i.d(e, "VertexNormalsHelper", function () {
        return Yr
    }), i.d(e, "SpotLightHelper", function () {
        return $r
    }), i.d(e, "SkeletonHelper", function () {
        return Jr
    }), i.d(e, "PointLightHelper", function () {
        return Qr
    }), i.d(e, "RectAreaLightHelper", function () {
        return Kr
    }), i.d(e, "HemisphereLightHelper", function () {
        return to
    }), i.d(e, "GridHelper", function () {
        return eo
    }), i.d(e, "PolarGridHelper", function () {
        return io
    }), i.d(e, "FaceNormalsHelper", function () {
        return no
    }), i.d(e, "DirectionalLightHelper", function () {
        return ro
    }), i.d(e, "CameraHelper", function () {
        return oo
    }), i.d(e, "BoxHelper", function () {
        return ao
    }), i.d(e, "Box3Helper", function () {
        return so
    }), i.d(e, "PlaneHelper", function () {
        return ho
    }), i.d(e, "ArrowHelper", function () {
        return co
    }), i.d(e, "AxesHelper", function () {
        return uo
    }), i.d(e, "Shape", function () {
        return Vn
    }), i.d(e, "Path", function () {
        return jn
    }), i.d(e, "ShapePath", function () {
        return _r
    }), i.d(e, "Font", function () {
        return xr
    }), i.d(e, "CurvePath", function () {
        return Gn
    }), i.d(e, "Curve", function () {
        return _n
    }), i.d(e, "ShapeUtils", function () {
        return Ah
    }), i.d(e, "SceneUtils", function () {
        return qh
    }), i.d(e, "WebGLUtils", function () {
        return be
    }), i.d(e, "WireframeGeometry", function () {
        return Ve
    }), i.d(e, "ParametricGeometry", function () {
        return We
    }), i.d(e, "ParametricBufferGeometry", function () {
        return He
    }), i.d(e, "TetrahedronGeometry", function () {
        return Ye
    }), i.d(e, "TetrahedronBufferGeometry", function () {
        return $e
    }), i.d(e, "OctahedronGeometry", function () {
        return Ze
    }), i.d(e, "OctahedronBufferGeometry", function () {
        return Je
    }), i.d(e, "IcosahedronGeometry", function () {
        return Qe
    }), i.d(e, "IcosahedronBufferGeometry", function () {
        return Ke
    }), i.d(e, "DodecahedronGeometry", function () {
        return ti
    }), i.d(e, "DodecahedronBufferGeometry", function () {
        return ei
    }), i.d(e, "PolyhedronGeometry", function () {
        return Xe
    }), i.d(e, "PolyhedronBufferGeometry", function () {
        return qe
    }), i.d(e, "TubeGeometry", function () {
        return ii
    }), i.d(e, "TubeBufferGeometry", function () {
        return ni
    }), i.d(e, "TorusKnotGeometry", function () {
        return ri
    }), i.d(e, "TorusKnotBufferGeometry", function () {
        return oi
    }), i.d(e, "TorusGeometry", function () {
        return ai
    }), i.d(e, "TorusBufferGeometry", function () {
        return si
    }), i.d(e, "TextGeometry", function () {
        return Ui
    }), i.d(e, "TextBufferGeometry", function () {
        return Fi
    }), i.d(e, "SphereGeometry", function () {
        return Bi
    }), i.d(e, "SphereBufferGeometry", function () {
        return Gi
    }), i.d(e, "RingGeometry", function () {
        return ji
    }), i.d(e, "RingBufferGeometry", function () {
        return Vi
    }), i.d(e, "PlaneGeometry", function () {
        return Nt
    }), i.d(e, "PlaneBufferGeometry", function () {
        return Ot
    }), i.d(e, "LatheGeometry", function () {
        return Wi
    }), i.d(e, "LatheBufferGeometry", function () {
        return Hi
    }), i.d(e, "ShapeGeometry", function () {
        return Xi
    }), i.d(e, "ShapeBufferGeometry", function () {
        return qi
    }), i.d(e, "ExtrudeGeometry", function () {
        return ki
    }), i.d(e, "ExtrudeBufferGeometry", function () {
        return zi
    }), i.d(e, "EdgesGeometry", function () {
        return $i
    }), i.d(e, "ConeGeometry", function () {
        return Qi
    }), i.d(e, "ConeBufferGeometry", function () {
        return Ki
    }), i.d(e, "CylinderGeometry", function () {
        return Zi
    }), i.d(e, "CylinderBufferGeometry", function () {
        return Ji
    }), i.d(e, "CircleGeometry", function () {
        return tn
    }), i.d(e, "CircleBufferGeometry", function () {
        return en
    }), i.d(e, "BoxGeometry", function () {
        return Ct
    }), i.d(e, "BoxBufferGeometry", function () {
        return Lt
    }), i.d(e, "ShadowMaterial", function () {
        return nn
    }), i.d(e, "SpriteMaterial", function () {
        return Pe
    }), i.d(e, "RawShaderMaterial", function () {
        return rn
    }), i.d(e, "ShaderMaterial", function () {
        return It
    }), i.d(e, "PointsMaterial", function () {
        return ze
    }), i.d(e, "MeshPhysicalMaterial", function () {
        return an
    }), i.d(e, "MeshStandardMaterial", function () {
        return on
    }), i.d(e, "MeshPhongMaterial", function () {
        return sn
    }), i.d(e, "MeshToonMaterial", function () {
        return hn
    }), i.d(e, "MeshNormalMaterial", function () {
        return cn
    }), i.d(e, "MeshLambertMaterial", function () {
        return un
    }), i.d(e, "MeshDepthMaterial", function () {
        return et
    });
    i.d(e, "MeshDistanceMaterial", function () {
        return it
    }), i.d(e, "MeshBasicMaterial", function () {
        return Rt
    }), i.d(e, "LineDashedMaterial", function () {
        return ln
    }), i.d(e, "LineBasicMaterial", function () {
        return Re
    }), i.d(e, "Material", function () {
        return tt
    }), i.d(e, "Float64BufferAttribute", function () {
        return St
    }), i.d(e, "Float32BufferAttribute", function () {
        return Tt
    }), i.d(e, "Uint32BufferAttribute", function () {
        return Mt
    }), i.d(e, "Int32BufferAttribute", function () {
        return wt
    }), i.d(e, "Uint16BufferAttribute", function () {
        return bt
    }), i.d(e, "Int16BufferAttribute", function () {
        return xt
    }), i.d(e, "Uint8ClampedBufferAttribute", function () {
        return _t
    }), i.d(e, "Uint8BufferAttribute", function () {
        return yt
    }), i.d(e, "Int8BufferAttribute", function () {
        return gt
    }), i.d(e, "BufferAttribute", function () {
        return vt
    }), i.d(e, "ArcCurve", function () {
        return bn
    }), i.d(e, "CatmullRomCurve3", function () {
        return Mn
    }), i.d(e, "CubicBezierCurve", function () {
        return In
    }), i.d(e, "CubicBezierCurve3", function () {
        return Dn
    }), i.d(e, "EllipseCurve", function () {
        return xn
    }), i.d(e, "LineCurve", function () {
        return kn
    }), i.d(e, "LineCurve3", function () {
        return zn
    }), i.d(e, "QuadraticBezierCurve", function () {
        return Un
    }), i.d(e, "QuadraticBezierCurve3", function () {
        return Fn
    }), i.d(e, "SplineCurve", function () {
        return Bn
    }), i.d(e, "REVISION", function () {
        return Vo
    }), i.d(e, "MOUSE", function () {
        return Wo
    }), i.d(e, "CullFaceNone", function () {
        return Ho
    }), i.d(e, "CullFaceBack", function () {
        return Xo
    }), i.d(e, "CullFaceFront", function () {
        return qo
    }), i.d(e, "CullFaceFrontBack", function () {
        return Yo
    }), i.d(e, "FrontFaceDirectionCW", function () {
        return $o
    }), i.d(e, "FrontFaceDirectionCCW", function () {
        return Zo
    }), i.d(e, "BasicShadowMap", function () {
        return Jo
    }), i.d(e, "PCFShadowMap", function () {
        return Qo
    }), i.d(e, "PCFSoftShadowMap", function () {
        return Ko
    }), i.d(e, "FrontSide", function () {
        return ta
    }), i.d(e, "BackSide", function () {
        return ea
    }), i.d(e, "DoubleSide", function () {
        return ia
    }), i.d(e, "FlatShading", function () {
        return na
    }), i.d(e, "SmoothShading", function () {
        return ra
    }), i.d(e, "NoColors", function () {
        return oa
    }), i.d(e, "FaceColors", function () {
        return aa
    }), i.d(e, "VertexColors", function () {
        return sa
    }), i.d(e, "NoBlending", function () {
        return ha
    }), i.d(e, "NormalBlending", function () {
        return ca
    }), i.d(e, "AdditiveBlending", function () {
        return ua
    }), i.d(e, "SubtractiveBlending", function () {
        return la
    }), i.d(e, "MultiplyBlending", function () {
        return pa
    }), i.d(e, "CustomBlending", function () {
        return fa
    }), i.d(e, "AddEquation", function () {
        return da
    }), i.d(e, "SubtractEquation", function () {
        return ma
    }), i.d(e, "ReverseSubtractEquation", function () {
        return va
    }), i.d(e, "MinEquation", function () {
        return ga
    }), i.d(e, "MaxEquation", function () {
        return ya
    }), i.d(e, "ZeroFactor", function () {
        return _a
    }), i.d(e, "OneFactor", function () {
        return xa
    }), i.d(e, "SrcColorFactor", function () {
        return ba
    }), i.d(e, "OneMinusSrcColorFactor", function () {
        return wa
    }), i.d(e, "SrcAlphaFactor", function () {
        return Ma
    }), i.d(e, "OneMinusSrcAlphaFactor", function () {
        return Ta
    }), i.d(e, "DstAlphaFactor", function () {
        return Sa
    }), i.d(e, "OneMinusDstAlphaFactor", function () {
        return Aa
    }), i.d(e, "DstColorFactor", function () {
        return Pa
    }), i.d(e, "OneMinusDstColorFactor", function () {
        return Ea
    }), i.d(e, "SrcAlphaSaturateFactor", function () {
        return Ca
    }), i.d(e, "NeverDepth", function () {
        return La
    }), i.d(e, "AlwaysDepth", function () {
        return Na
    }), i.d(e, "LessDepth", function () {
        return Oa
    }), i.d(e, "LessEqualDepth", function () {
        return Ra
    }), i.d(e, "EqualDepth", function () {
        return Ia
    }), i.d(e, "GreaterEqualDepth", function () {
        return Da
    }), i.d(e, "GreaterDepth", function () {
        return ka
    }), i.d(e, "NotEqualDepth", function () {
        return za
    }), i.d(e, "MultiplyOperation", function () {
        return Ua
    }), i.d(e, "MixOperation", function () {
        return Fa
    }), i.d(e, "AddOperation", function () {
        return Ba
    }), i.d(e, "NoToneMapping", function () {
        return Ga
    }), i.d(e, "LinearToneMapping", function () {
        return ja
    }), i.d(e, "ReinhardToneMapping", function () {
        return Va
    }), i.d(e, "Uncharted2ToneMapping", function () {
        return Wa
    }), i.d(e, "CineonToneMapping", function () {
        return Ha
    }), i.d(e, "UVMapping", function () {
        return Xa
    }), i.d(e, "CubeReflectionMapping", function () {
        return qa
    }), i.d(e, "CubeRefractionMapping", function () {
        return Ya
    }), i.d(e, "EquirectangularReflectionMapping", function () {
        return $a
    }), i.d(e, "EquirectangularRefractionMapping", function () {
        return Za
    }), i.d(e, "SphericalReflectionMapping", function () {
        return Ja
    }), i.d(e, "CubeUVReflectionMapping", function () {
        return Qa
    }), i.d(e, "CubeUVRefractionMapping", function () {
        return Ka
    }), i.d(e, "RepeatWrapping", function () {
        return ts
    }), i.d(e, "ClampToEdgeWrapping", function () {
        return es
    }), i.d(e, "MirroredRepeatWrapping", function () {
        return is
    }), i.d(e, "NearestFilter", function () {
        return ns
    }), i.d(e, "NearestMipMapNearestFilter", function () {
        return rs
    }), i.d(e, "NearestMipMapLinearFilter", function () {
        return os
    }), i.d(e, "LinearFilter", function () {
        return as
    }), i.d(e, "LinearMipMapNearestFilter", function () {
        return ss
    }), i.d(e, "LinearMipMapLinearFilter", function () {
        return hs
    }), i.d(e, "UnsignedByteType", function () {
        return cs
    }), i.d(e, "ByteType", function () {
        return us
    }), i.d(e, "ShortType", function () {
        return ls
    }), i.d(e, "UnsignedShortType", function () {
        return ps
    }), i.d(e, "IntType", function () {
        return fs
    }), i.d(e, "UnsignedIntType", function () {
        return ds
    }), i.d(e, "FloatType", function () {
        return ms
    }), i.d(e, "HalfFloatType", function () {
        return vs
    }), i.d(e, "UnsignedShort4444Type", function () {
        return gs
    }), i.d(e, "UnsignedShort5551Type", function () {
        return ys
    }), i.d(e, "UnsignedShort565Type", function () {
        return _s
    }), i.d(e, "UnsignedInt248Type", function () {
        return xs
    }), i.d(e, "AlphaFormat", function () {
        return bs
    }), i.d(e, "RGBFormat", function () {
        return ws
    }), i.d(e, "RGBAFormat", function () {
        return Ms
    }), i.d(e, "LuminanceFormat", function () {
        return Ts
    }), i.d(e, "LuminanceAlphaFormat", function () {
        return Ss
    }), i.d(e, "RGBEFormat", function () {
        return As
    }), i.d(e, "DepthFormat", function () {
        return Ps
    }), i.d(e, "DepthStencilFormat", function () {
        return Es
    }), i.d(e, "RGB_S3TC_DXT1_Format", function () {
        return Cs
    }), i.d(e, "RGBA_S3TC_DXT1_Format", function () {
        return Ls
    }), i.d(e, "RGBA_S3TC_DXT3_Format", function () {
        return Ns
    }), i.d(e, "RGBA_S3TC_DXT5_Format", function () {
        return Os
    }), i.d(e, "RGB_PVRTC_4BPPV1_Format", function () {
        return Rs
    }), i.d(e, "RGB_PVRTC_2BPPV1_Format", function () {
        return Is
    }), i.d(e, "RGBA_PVRTC_4BPPV1_Format", function () {
        return Ds
    }), i.d(e, "RGBA_PVRTC_2BPPV1_Format", function () {
        return ks
    }), i.d(e, "RGB_ETC1_Format", function () {
        return zs
    }), i.d(e, "LoopOnce", function () {
        return Us
    }), i.d(e, "LoopRepeat", function () {
        return Fs
    }), i.d(e, "LoopPingPong", function () {
        return Bs
    }), i.d(e, "InterpolateDiscrete", function () {
        return Gs
    }), i.d(e, "InterpolateLinear", function () {
        return js
    }), i.d(e, "InterpolateSmooth", function () {
        return Vs
    }), i.d(e, "ZeroCurvatureEnding", function () {
        return Ws
    }), i.d(e, "ZeroSlopeEnding", function () {
        return Hs
    }), i.d(e, "WrapAroundEnding", function () {
        return Xs
    }), i.d(e, "TrianglesDrawMode", function () {
        return qs
    }), i.d(e, "TriangleStripDrawMode", function () {
        return Ys
    }), i.d(e, "TriangleFanDrawMode", function () {
        return $s
    }), i.d(e, "LinearEncoding", function () {
        return Zs
    }), i.d(e, "sRGBEncoding", function () {
        return Js
    }), i.d(e, "GammaEncoding", function () {
        return Qs
    }), i.d(e, "RGBEEncoding", function () {
        return Ks
    }), i.d(e, "LogLuvEncoding", function () {
        return th
    }), i.d(e, "RGBM7Encoding", function () {
        return eh
    }), i.d(e, "RGBM16Encoding", function () {
        return ih
    }), i.d(e, "RGBDEncoding", function () {
        return nh
    }), i.d(e, "BasicDepthPacking", function () {
        return rh
    }), i.d(e, "RGBADepthPacking", function () {
        return oh
    }), i.d(e, "CubeGeometry", function () {
        return Ct
    }), i.d(e, "Face4", function () {
        return lo
    }), i.d(e, "LineStrip", function () {
        return Yh
    }), i.d(e, "LinePieces", function () {
        return $h
    }), i.d(e, "MeshFaceMaterial", function () {
        return po
    }), i.d(e, "MultiMaterial", function () {
        return fo
    }), i.d(e, "PointCloud", function () {
        return mo
    }), i.d(e, "Particle", function () {
        return vo
    }), i.d(e, "ParticleSystem", function () {
        return go
    }), i.d(e, "PointCloudMaterial", function () {
        return yo
    }), i.d(e, "ParticleBasicMaterial", function () {
        return _o
    }), i.d(e, "ParticleSystemMaterial", function () {
        return xo
    }), i.d(e, "Vertex", function () {
        return bo
    }), i.d(e, "DynamicBufferAttribute", function () {
        return wo
    }), i.d(e, "Int8Attribute", function () {
        return Mo
    }), i.d(e, "Uint8Attribute", function () {
        return To
    }), i.d(e, "Uint8ClampedAttribute", function () {
        return So
    }), i.d(e, "Int16Attribute", function () {
        return Ao
    }), i.d(e, "Uint16Attribute", function () {
        return Po
    }), i.d(e, "Int32Attribute", function () {
        return Eo
    }), i.d(e, "Uint32Attribute", function () {
        return Co
    }), i.d(e, "Float32Attribute", function () {
        return Lo
    }), i.d(e, "Float64Attribute", function () {
        return No
    }), i.d(e, "ClosedSplineCurve3", function () {
        return Oo
    }), i.d(e, "SplineCurve3", function () {
        return Ro
    }), i.d(e, "Spline", function () {
        return Io
    }), i.d(e, "AxisHelper", function () {
        return Do
    }), i.d(e, "BoundingBoxHelper", function () {
        return ko
    }), i.d(e, "EdgesHelper", function () {
        return zo
    }), i.d(e, "WireframeHelper", function () {
        return Uo
    }), i.d(e, "XHRLoader", function () {
        return Fo
    }), i.d(e, "BinaryTextureLoader", function () {
        return Bo
    }), i.d(e, "GeometryUtils", function () {
        return Zh
    }), i.d(e, "ImageUtils", function () {
        return Jh
    }), i.d(e, "Projector", function () {
        return Go
    }), i.d(e, "CanvasRenderer", function () {
        return jo
    }), void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function (t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }), void 0 === Math.sign && (Math.sign = function (t) {
        return t < 0 ? -1 : t > 0 ? 1 : +t
    }), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", {
        get: function () {
            return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
        }
    }), void 0 === Object.assign && function () {
        Object.assign = function (t) {
            if (void 0 === t || null === t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), i = 1; i < arguments.length; i++) {
                var n = arguments[i];
                if (void 0 !== n && null !== n)
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
    }(), Object.assign(n.prototype, {
        addEventListener: function (t, e) {
            void 0 === this._listeners && (this._listeners = {});
            var i = this._listeners;
            void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e)
        },
        hasEventListener: function (t, e) {
            if (void 0 === this._listeners) return !1;
            var i = this._listeners;
            return void 0 !== i[t] && -1 !== i[t].indexOf(e)
        },
        removeEventListener: function (t, e) {
            if (void 0 !== this._listeners) {
                var i = this._listeners,
                    n = i[t];
                if (void 0 !== n) {
                    var r = n.indexOf(e);
                    -1 !== r && n.splice(r, 1)
                }
            }
        },
        dispatchEvent: function (t) {
            if (void 0 !== this._listeners) {
                var e = this._listeners,
                    i = e[t.type];
                if (void 0 !== i) {
                    t.target = this;
                    for (var n = i.slice(0), r = 0, o = n.length; r < o; r++) n[r].call(this, t)
                }
            }
        }
    });
    var Vo = "89",
        Wo = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
        },
        Ho = 0,
        Xo = 1,
        qo = 2,
        Yo = 3,
        $o = 0,
        Zo = 1,
        Jo = 0,
        Qo = 1,
        Ko = 2,
        ta = 0,
        ea = 1,
        ia = 2,
        na = 1,
        ra = 2,
        oa = 0,
        aa = 1,
        sa = 2,
        ha = 0,
        ca = 1,
        ua = 2,
        la = 3,
        pa = 4,
        fa = 5,
        da = 100,
        ma = 101,
        va = 102,
        ga = 103,
        ya = 104,
        _a = 200,
        xa = 201,
        ba = 202,
        wa = 203,
        Ma = 204,
        Ta = 205,
        Sa = 206,
        Aa = 207,
        Pa = 208,
        Ea = 209,
        Ca = 210,
        La = 0,
        Na = 1,
        Oa = 2,
        Ra = 3,
        Ia = 4,
        Da = 5,
        ka = 6,
        za = 7,
        Ua = 0,
        Fa = 1,
        Ba = 2,
        Ga = 0,
        ja = 1,
        Va = 2,
        Wa = 3,
        Ha = 4,
        Xa = 300,
        qa = 301,
        Ya = 302,
        $a = 303,
        Za = 304,
        Ja = 305,
        Qa = 306,
        Ka = 307,
        ts = 1e3,
        es = 1001,
        is = 1002,
        ns = 1003,
        rs = 1004,
        os = 1005,
        as = 1006,
        ss = 1007,
        hs = 1008,
        cs = 1009,
        us = 1010,
        ls = 1011,
        ps = 1012,
        fs = 1013,
        ds = 1014,
        ms = 1015,
        vs = 1016,
        gs = 1017,
        ys = 1018,
        _s = 1019,
        xs = 1020,
        bs = 1021,
        ws = 1022,
        Ms = 1023,
        Ts = 1024,
        Ss = 1025,
        As = Ms,
        Ps = 1026,
        Es = 1027,
        Cs = 2001,
        Ls = 2002,
        Ns = 2003,
        Os = 2004,
        Rs = 2100,
        Is = 2101,
        Ds = 2102,
        ks = 2103,
        zs = 2151,
        Us = 2200,
        Fs = 2201,
        Bs = 2202,
        Gs = 2300,
        js = 2301,
        Vs = 2302,
        Ws = 2400,
        Hs = 2401,
        Xs = 2402,
        qs = 0,
        Ys = 1,
        $s = 2,
        Zs = 3e3,
        Js = 3001,
        Qs = 3007,
        Ks = 3002,
        th = 3003,
        eh = 3004,
        ih = 3005,
        nh = 3006,
        rh = 3200,
        oh = 3201,
        ah = {
            DEG2RAD: Math.PI / 180,
            RAD2DEG: 180 / Math.PI,
            generateUUID: function () {
                for (var t = [], e = 0; e < 256; e++) t[e] = (e < 16 ? "0" : "") + e.toString(16).toUpperCase();
                return function () {
                    var e = 4294967295 * Math.random() | 0,
                        i = 4294967295 * Math.random() | 0,
                        n = 4294967295 * Math.random() | 0,
                        r = 4294967295 * Math.random() | 0;
                    return t[255 & e] + t[e >> 8 & 255] + t[e >> 16 & 255] + t[e >> 24 & 255] + "-" + t[255 & i] + t[i >> 8 & 255] + "-" + t[i >> 16 & 15 | 64] + t[i >> 24 & 255] + "-" + t[63 & n | 128] + t[n >> 8 & 255] + "-" + t[n >> 16 & 255] + t[n >> 24 & 255] + t[255 & r] + t[r >> 8 & 255] + t[r >> 16 & 255] + t[r >> 24 & 255]
                }
            }(),
            clamp: function (t, e, i) {
                return Math.max(e, Math.min(i, t))
            },
            euclideanModulo: function (t, e) {
                return (t % e + e) % e
            },
            mapLinear: function (t, e, i, n, r) {
                return n + (t - e) * (r - n) / (i - e)
            },
            lerp: function (t, e, i) {
                return (1 - i) * t + i * e
            },
            smoothstep: function (t, e, i) {
                return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t)
            },
            smootherstep: function (t, e, i) {
                return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10)
            },
            randInt: function (t, e) {
                return t + Math.floor(Math.random() * (e - t + 1))
            },
            randFloat: function (t, e) {
                return t + Math.random() * (e - t)
            },
            randFloatSpread: function (t) {
                return t * (.5 - Math.random())
            },
            degToRad: function (t) {
                return t * ah.DEG2RAD
            },
            radToDeg: function (t) {
                return t * ah.RAD2DEG
            },
            isPowerOfTwo: function (t) {
                return 0 == (t & t - 1) && 0 !== t
            },
            ceilPowerOfTwo: function (t) {
                return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
            },
            floorPowerOfTwo: function (t) {
                return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
            }
        };
    Object.defineProperties(r.prototype, {
        width: {
            get: function () {
                return this.x
            },
            set: function (t) {
                this.x = t
            }
        },
        height: {
            get: function () {
                return this.y
            },
            set: function (t) {
                this.y = t
            }
        }
    }), Object.assign(r.prototype, {
        isVector2: !0,
        set: function (t, e) {
            return this.x = t, this.y = e, this
        },
        setScalar: function (t) {
            return this.x = t, this.y = t, this
        },
        setX: function (t) {
            return this.x = t, this
        },
        setY: function (t) {
            return this.y = t, this
        },
        setComponent: function (t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function (t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t)
            }
        },
        clone: function () {
            return new this.constructor(this.x, this.y)
        },
        copy: function (t) {
            return this.x = t.x, this.y = t.y, this
        },
        add: function (t, e) {
            return void 0 !== e ? this.addVectors(t, e) : (this.x += t.x, this.y += t.y, this)
        },
        addScalar: function (t) {
            return this.x += t, this.y += t, this
        },
        addVectors: function (t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this
        },
        addScaledVector: function (t, e) {
            return this.x += t.x * e, this.y += t.y * e, this
        },
        sub: function (t, e) {
            return void 0 !== e ? this.subVectors(t, e) : (this.x -= t.x, this.y -= t.y, this)
        },
        subScalar: function (t) {
            return this.x -= t, this.y -= t, this
        },
        subVectors: function (t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this
        },
        multiply: function (t) {
            return this.x *= t.x, this.y *= t.y, this
        },
        multiplyScalar: function (t) {
            return this.x *= t, this.y *= t, this
        },
        divide: function (t) {
            return this.x /= t.x, this.y /= t.y, this
        },
        divideScalar: function (t) {
            return this.multiplyScalar(1 / t)
        },
        applyMatrix3: function (t) {
            var e = this.x,
                i = this.y,
                n = t.elements;
            return this.x = n[0] * e + n[3] * i + n[6], this.y = n[1] * e + n[4] * i + n[7], this
        },
        min: function (t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
        },
        max: function (t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
        },
        clamp: function (t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
        },
        clampScalar: function () {
            var t = new r,
                e = new r;
            return function (i, n) {
                return t.set(i, i), e.set(n, n), this.clamp(t, e)
            }
        }(),
        clampLength: function (t, e) {
            var i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
        },
        floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        roundToZero: function () {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
        },
        negate: function () {
            return this.x = -this.x, this.y = -this.y, this
        },
        dot: function (t) {
            return this.x * t.x + this.y * t.y
        },
        lengthSq: function () {
            return this.x * this.x + this.y * this.y
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        manhattanLength: function () {
            return Math.abs(this.x) + Math.abs(this.y)
        },
        normalize: function () {
            return this.divideScalar(this.length() || 1)
        },
        angle: function () {
            var t = Math.atan2(this.y, this.x);
            return t < 0 && (t += 2 * Math.PI), t
        },
        distanceTo: function (t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function (t) {
            var e = this.x - t.x,
                i = this.y - t.y;
            return e * e + i * i
        },
        manhattanDistanceTo: function (t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
        },
        setLength: function (t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function (t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
        },
        lerpVectors: function (t, e, i) {
            return this.subVectors(e, t).multiplyScalar(i).add(t)
        },
        equals: function (t) {
            return t.x === this.x && t.y === this.y
        },
        fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
        },
        fromBufferAttribute: function (t, e, i) {
            return this.x = t.getX(e), this.y = t.getY(e), this
        },
        rotateAround: function (t, e) {
            var i = Math.cos(e),
                n = Math.sin(e),
                r = this.x - t.x,
                o = this.y - t.y;
            return this.x = r * i - o * n + t.x, this.y = r * n + o * i + t.y, this
        }
    }), Object.assign(o.prototype, {
        isMatrix4: !0,
        set: function (t, e, i, n, r, o, a, s, h, c, u, l, p, f, d, m) {
            var v = this.elements;
            return v[0] = t, v[4] = e, v[8] = i, v[12] = n, v[1] = r, v[5] = o, v[9] = a, v[13] = s, v[2] = h, v[6] = c, v[10] = u, v[14] = l, v[3] = p, v[7] = f, v[11] = d, v[15] = m, this
        },
        identity: function () {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        clone: function () {
            return (new o).fromArray(this.elements)
        },
        copy: function (t) {
            var e = this.elements,
                i = t.elements;
            return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
        },
        copyPosition: function (t) {
            var e = this.elements,
                i = t.elements;
            return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
        },
        extractBasis: function (t, e, i) {
            return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
        },
        makeBasis: function (t, e, i) {
            return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
        },
        extractRotation: function () {
            var t = new s;
            return function (e) {
                var i = this.elements,
                    n = e.elements,
                    r = 1 / t.setFromMatrixColumn(e, 0).length(),
                    o = 1 / t.setFromMatrixColumn(e, 1).length(),
                    a = 1 / t.setFromMatrixColumn(e, 2).length();
                return i[0] = n[0] * r, i[1] = n[1] * r, i[2] = n[2] * r, i[4] = n[4] * o, i[5] = n[5] * o, i[6] = n[6] * o, i[8] = n[8] * a, i[9] = n[9] * a, i[10] = n[10] * a, this
            }
        }(),
        makeRotationFromEuler: function (t) {
            !t || t.isEuler;
            var e = this.elements,
                i = t.x,
                n = t.y,
                r = t.z,
                o = Math.cos(i),
                a = Math.sin(i),
                s = Math.cos(n),
                h = Math.sin(n),
                c = Math.cos(r),
                u = Math.sin(r);
            if ("XYZ" === t.order) {
                var l = o * c,
                    p = o * u,
                    f = a * c,
                    d = a * u;
                e[0] = s * c, e[4] = -s * u, e[8] = h, e[1] = p + f * h, e[5] = l - d * h, e[9] = -a * s, e[2] = d - l * h, e[6] = f + p * h, e[10] = o * s
            } else if ("YXZ" === t.order) {
                var m = s * c,
                    v = s * u,
                    g = h * c,
                    y = h * u;
                e[0] = m + y * a, e[4] = g * a - v, e[8] = o * h, e[1] = o * u, e[5] = o * c, e[9] = -a, e[2] = v * a - g, e[6] = y + m * a, e[10] = o * s
            } else if ("ZXY" === t.order) {
                var m = s * c,
                    v = s * u,
                    g = h * c,
                    y = h * u;
                e[0] = m - y * a, e[4] = -o * u, e[8] = g + v * a, e[1] = v + g * a, e[5] = o * c, e[9] = y - m * a, e[2] = -o * h, e[6] = a, e[10] = o * s
            } else if ("ZYX" === t.order) {
                var l = o * c,
                    p = o * u,
                    f = a * c,
                    d = a * u;
                e[0] = s * c, e[4] = f * h - p, e[8] = l * h + d, e[1] = s * u, e[5] = d * h + l, e[9] = p * h - f, e[2] = -h, e[6] = a * s, e[10] = o * s
            } else if ("YZX" === t.order) {
                var _ = o * s,
                    x = o * h,
                    b = a * s,
                    w = a * h;
                e[0] = s * c, e[4] = w - _ * u, e[8] = b * u + x, e[1] = u, e[5] = o * c, e[9] = -a * c, e[2] = -h * c, e[6] = x * u + b, e[10] = _ - w * u
            } else if ("XZY" === t.order) {
                var _ = o * s,
                    x = o * h,
                    b = a * s,
                    w = a * h;
                e[0] = s * c, e[4] = -u, e[8] = h * c, e[1] = _ * u + w, e[5] = o * c, e[9] = x * u - b, e[2] = b * u - x, e[6] = a * c, e[10] = w * u + _
            }
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        },
        makeRotationFromQuaternion: function (t) {
            var e = this.elements,
                i = t._x,
                n = t._y,
                r = t._z,
                o = t._w,
                a = i + i,
                s = n + n,
                h = r + r,
                c = i * a,
                u = i * s,
                l = i * h,
                p = n * s,
                f = n * h,
                d = r * h,
                m = o * a,
                v = o * s,
                g = o * h;
            return e[0] = 1 - (p + d), e[4] = u - g, e[8] = l + v, e[1] = u + g, e[5] = 1 - (c + d), e[9] = f - m, e[2] = l - v, e[6] = f + m, e[10] = 1 - (c + p), e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        },
        lookAt: function () {
            var t = new s,
                e = new s,
                i = new s;
            return function (n, r, o) {
                var a = this.elements;
                return i.subVectors(n, r), 0 === i.lengthSq() && (i.z = 1), i.normalize(), t.crossVectors(o, i), 0 === t.lengthSq() && (1 === Math.abs(o.z) ? i.x += 1e-4 : i.z += 1e-4, i.normalize(), t.crossVectors(o, i)), t.normalize(), e.crossVectors(i, t), a[0] = t.x, a[4] = e.x, a[8] = i.x, a[1] = t.y, a[5] = e.y, a[9] = i.y, a[2] = t.z, a[6] = e.z, a[10] = i.z, this
            }
        }(),
        multiply: function (t, e) {
            return void 0 !== e ? this.multiplyMatrices(t, e) : this.multiplyMatrices(this, t)
        },
        premultiply: function (t) {
            return this.multiplyMatrices(t, this)
        },
        multiplyMatrices: function (t, e) {
            var i = t.elements,
                n = e.elements,
                r = this.elements,
                o = i[0],
                a = i[4],
                s = i[8],
                h = i[12],
                c = i[1],
                u = i[5],
                l = i[9],
                p = i[13],
                f = i[2],
                d = i[6],
                m = i[10],
                v = i[14],
                g = i[3],
                y = i[7],
                _ = i[11],
                x = i[15],
                b = n[0],
                w = n[4],
                M = n[8],
                T = n[12],
                S = n[1],
                A = n[5],
                P = n[9],
                E = n[13],
                C = n[2],
                L = n[6],
                N = n[10],
                O = n[14],
                R = n[3],
                I = n[7],
                D = n[11],
                k = n[15];
            return r[0] = o * b + a * S + s * C + h * R, r[4] = o * w + a * A + s * L + h * I, r[8] = o * M + a * P + s * N + h * D, r[12] = o * T + a * E + s * O + h * k, r[1] = c * b + u * S + l * C + p * R, r[5] = c * w + u * A + l * L + p * I, r[9] = c * M + u * P + l * N + p * D, r[13] = c * T + u * E + l * O + p * k, r[2] = f * b + d * S + m * C + v * R, r[6] = f * w + d * A + m * L + v * I, r[10] = f * M + d * P + m * N + v * D, r[14] = f * T + d * E + m * O + v * k, r[3] = g * b + y * S + _ * C + x * R, r[7] = g * w + y * A + _ * L + x * I, r[11] = g * M + y * P + _ * N + x * D, r[15] = g * T + y * E + _ * O + x * k, this
        },
        multiplyScalar: function (t) {
            var e = this.elements;
            return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
        },
        applyToBufferAttribute: function () {
            var t = new s;
            return function (e) {
                for (var i = 0, n = e.count; i < n; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.applyMatrix4(this), e.setXYZ(i, t.x, t.y, t.z);
                return e
            }
        }(),
        determinant: function () {
            var t = this.elements,
                e = t[0],
                i = t[4],
                n = t[8],
                r = t[12],
                o = t[1],
                a = t[5],
                s = t[9],
                h = t[13],
                c = t[2],
                u = t[6],
                l = t[10],
                p = t[14];
            return t[3] * (+r * s * u - n * h * u - r * a * l + i * h * l + n * a * p - i * s * p) + t[7] * (+e * s * p - e * h * l + r * o * l - n * o * p + n * h * c - r * s * c) + t[11] * (+e * h * u - e * a * p - r * o * u + i * o * p + r * a * c - i * h * c) + t[15] * (-n * a * c - e * s * u + e * a * l + n * o * u - i * o * l + i * s * c)
        },
        transpose: function () {
            var t, e = this.elements;
            return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
        },
        setPosition: function (t) {
            var e = this.elements;
            return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
        },
        getInverse: function (t, e) {
            var i = this.elements,
                n = t.elements,
                r = n[0],
                o = n[1],
                a = n[2],
                s = n[3],
                h = n[4],
                c = n[5],
                u = n[6],
                l = n[7],
                p = n[8],
                f = n[9],
                d = n[10],
                m = n[11],
                v = n[12],
                g = n[13],
                y = n[14],
                _ = n[15],
                x = f * y * l - g * d * l + g * u * m - c * y * m - f * u * _ + c * d * _,
                b = v * d * l - p * y * l - v * u * m + h * y * m + p * u * _ - h * d * _,
                w = p * g * l - v * f * l + v * c * m - h * g * m - p * c * _ + h * f * _,
                M = v * f * u - p * g * u - v * c * d + h * g * d + p * c * y - h * f * y,
                T = r * x + o * b + a * w + s * M;
            if (0 === T) {
                var S = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
                if (!0 === e) throw new Error(S);
                return this.identity()
            }
            var A = 1 / T;
            return i[0] = x * A, i[1] = (g * d * s - f * y * s - g * a * m + o * y * m + f * a * _ - o * d * _) * A, i[2] = (c * y * s - g * u * s + g * a * l - o * y * l - c * a * _ + o * u * _) * A, i[3] = (f * u * s - c * d * s - f * a * l + o * d * l + c * a * m - o * u * m) * A, i[4] = b * A, i[5] = (p * y * s - v * d * s + v * a * m - r * y * m - p * a * _ + r * d * _) * A, i[6] = (v * u * s - h * y * s - v * a * l + r * y * l + h * a * _ - r * u * _) * A, i[7] = (h * d * s - p * u * s + p * a * l - r * d * l - h * a * m + r * u * m) * A, i[8] = w * A, i[9] = (v * f * s - p * g * s - v * o * m + r * g * m + p * o * _ - r * f * _) * A, i[10] = (h * g * s - v * c * s + v * o * l - r * g * l - h * o * _ + r * c * _) * A, i[11] = (p * c * s - h * f * s - p * o * l + r * f * l + h * o * m - r * c * m) * A, i[12] = M * A, i[13] = (p * g * a - v * f * a + v * o * d - r * g * d - p * o * y + r * f * y) * A, i[14] = (v * c * a - h * g * a - v * o * u + r * g * u + h * o * y - r * c * y) * A, i[15] = (h * f * a - p * c * a + p * o * u - r * f * u - h * o * d + r * c * d) * A, this
        },
        scale: function (t) {
            var e = this.elements,
                i = t.x,
                n = t.y,
                r = t.z;
            return e[0] *= i, e[4] *= n, e[8] *= r, e[1] *= i, e[5] *= n, e[9] *= r, e[2] *= i, e[6] *= n, e[10] *= r, e[3] *= i, e[7] *= n, e[11] *= r, this
        },
        getMaxScaleOnAxis: function () {
            var t = this.elements,
                e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
                i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
                n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, i, n))
        },
        makeTranslation: function (t, e, i) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
        },
        makeRotationX: function (t) {
            var e = Math.cos(t),
                i = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this
        },
        makeRotationY: function (t) {
            var e = Math.cos(t),
                i = Math.sin(t);
            return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this
        },
        makeRotationZ: function (t) {
            var e = Math.cos(t),
                i = Math.sin(t);
            return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        makeRotationAxis: function (t, e) {
            var i = Math.cos(e),
                n = Math.sin(e),
                r = 1 - i,
                o = t.x,
                a = t.y,
                s = t.z,
                h = r * o,
                c = r * a;
            return this.set(h * o + i, h * a - n * s, h * s + n * a, 0, h * a + n * s, c * a + i, c * s - n * o, 0, h * s - n * a, c * s + n * o, r * s * s + i, 0, 0, 0, 0, 1), this
        },
        makeScale: function (t, e, i) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
        },
        makeShear: function (t, e, i) {
            return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1), this
        },
        compose: function (t, e, i) {
            return this.makeRotationFromQuaternion(e), this.scale(i), this.setPosition(t), this
        },
        decompose: function () {
            var t = new s,
                e = new o;
            return function (i, n, r) {
                var o = this.elements,
                    a = t.set(o[0], o[1], o[2]).length(),
                    s = t.set(o[4], o[5], o[6]).length(),
                    h = t.set(o[8], o[9], o[10]).length();
                this.determinant() < 0 && (a = -a), i.x = o[12], i.y = o[13], i.z = o[14], e.copy(this);
                var c = 1 / a,
                    u = 1 / s,
                    l = 1 / h;
                return e.elements[0] *= c, e.elements[1] *= c, e.elements[2] *= c, e.elements[4] *= u, e.elements[5] *= u, e.elements[6] *= u, e.elements[8] *= l, e.elements[9] *= l, e.elements[10] *= l, n.setFromRotationMatrix(e), r.x = a, r.y = s, r.z = h, this
            }
        }(),
        makePerspective: function (t, e, i, n, r, o) {
            var a = this.elements,
                s = 2 * r / (e - t),
                h = 2 * r / (i - n),
                c = (e + t) / (e - t),
                u = (i + n) / (i - n),
                l = -(o + r) / (o - r),
                p = -2 * o * r / (o - r);
            return a[0] = s, a[4] = 0, a[8] = c, a[12] = 0, a[1] = 0, a[5] = h, a[9] = u, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = l, a[14] = p, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
        },
        makeOrthographic: function (t, e, i, n, r, o) {
            var a = this.elements,
                s = 1 / (e - t),
                h = 1 / (i - n),
                c = 1 / (o - r),
                u = (e + t) * s,
                l = (i + n) * h,
                p = (o + r) * c;
            return a[0] = 2 * s, a[4] = 0, a[8] = 0, a[12] = -u, a[1] = 0, a[5] = 2 * h, a[9] = 0, a[13] = -l, a[2] = 0, a[6] = 0, a[10] = -2 * c, a[14] = -p, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
        },
        equals: function (t) {
            for (var e = this.elements, i = t.elements, n = 0; n < 16; n++)
                if (e[n] !== i[n]) return !1;
            return !0
        },
        fromArray: function (t, e) {
            void 0 === e && (e = 0);
            for (var i = 0; i < 16; i++) this.elements[i] = t[i + e];
            return this
        },
        toArray: function (t, e) {
            void 0 === t && (t = []), void 0 === e && (e = 0);
            var i = this.elements;
            return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
        }
    }), Object.assign(a, {
        slerp: function (t, e, i, n) {
            return i.copy(t).slerp(e, n)
        },
        slerpFlat: function (t, e, i, n, r, o, a) {
            var s = i[n + 0],
                h = i[n + 1],
                c = i[n + 2],
                u = i[n + 3],
                l = r[o + 0],
                p = r[o + 1],
                f = r[o + 2],
                d = r[o + 3];
            if (u !== d || s !== l || h !== p || c !== f) {
                var m = 1 - a,
                    v = s * l + h * p + c * f + u * d,
                    g = v >= 0 ? 1 : -1,
                    y = 1 - v * v;
                if (y > Number.EPSILON) {
                    var _ = Math.sqrt(y),
                        x = Math.atan2(_, v * g);
                    m = Math.sin(m * x) / _, a = Math.sin(a * x) / _
                }
                var b = a * g;
                if (s = s * m + l * b, h = h * m + p * b, c = c * m + f * b, u = u * m + d * b, m === 1 - a) {
                    var w = 1 / Math.sqrt(s * s + h * h + c * c + u * u);
                    s *= w, h *= w, c *= w, u *= w
                }
            }
            t[e] = s, t[e + 1] = h, t[e + 2] = c, t[e + 3] = u
        }
    }), Object.defineProperties(a.prototype, {
        x: {
            get: function () {
                return this._x
            },
            set: function (t) {
                this._x = t, this.onChangeCallback()
            }
        },
        y: {
            get: function () {
                return this._y
            },
            set: function (t) {
                this._y = t, this.onChangeCallback()
            }
        },
        z: {
            get: function () {
                return this._z
            },
            set: function (t) {
                this._z = t, this.onChangeCallback()
            }
        },
        w: {
            get: function () {
                return this._w
            },
            set: function (t) {
                this._w = t, this.onChangeCallback()
            }
        }
    }), Object.assign(a.prototype, {
        set: function (t, e, i, n) {
            return this._x = t, this._y = e, this._z = i, this._w = n, this.onChangeCallback(), this
        },
        clone: function () {
            return new this.constructor(this._x, this._y, this._z, this._w)
        },
        copy: function (t) {
            return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this
        },
        setFromEuler: function (t, e) {
            if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            var i = t._x,
                n = t._y,
                r = t._z,
                o = t.order,
                a = Math.cos,
                s = Math.sin,
                h = a(i / 2),
                c = a(n / 2),
                u = a(r / 2),
                l = s(i / 2),
                p = s(n / 2),
                f = s(r / 2);
            return "XYZ" === o ? (this._x = l * c * u + h * p * f, this._y = h * p * u - l * c * f, this._z = h * c * f + l * p * u, this._w = h * c * u - l * p * f) : "YXZ" === o ? (this._x = l * c * u + h * p * f, this._y = h * p * u - l * c * f, this._z = h * c * f - l * p * u, this._w = h * c * u + l * p * f) : "ZXY" === o ? (this._x = l * c * u - h * p * f, this._y = h * p * u + l * c * f, this._z = h * c * f + l * p * u, this._w = h * c * u - l * p * f) : "ZYX" === o ? (this._x = l * c * u - h * p * f, this._y = h * p * u + l * c * f, this._z = h * c * f - l * p * u, this._w = h * c * u + l * p * f) : "YZX" === o ? (this._x = l * c * u + h * p * f, this._y = h * p * u + l * c * f, this._z = h * c * f - l * p * u, this._w = h * c * u - l * p * f) : "XZY" === o && (this._x = l * c * u - h * p * f, this._y = h * p * u - l * c * f, this._z = h * c * f + l * p * u, this._w = h * c * u + l * p * f), !1 !== e && this.onChangeCallback(), this
        },
        setFromAxisAngle: function (t, e) {
            var i = e / 2,
                n = Math.sin(i);
            return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(i), this.onChangeCallback(), this
        },
        setFromRotationMatrix: function (t) {
            var e, i = t.elements,
                n = i[0],
                r = i[4],
                o = i[8],
                a = i[1],
                s = i[5],
                h = i[9],
                c = i[2],
                u = i[6],
                l = i[10],
                p = n + s + l;
            return p > 0 ? (e = .5 / Math.sqrt(p + 1), this._w = .25 / e, this._x = (u - h) * e, this._y = (o - c) * e, this._z = (a - r) * e) : n > s && n > l ? (e = 2 * Math.sqrt(1 + n - s - l), this._w = (u - h) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (o + c) / e) : s > l ? (e = 2 * Math.sqrt(1 + s - n - l), this._w = (o - c) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (h + u) / e) : (e = 2 * Math.sqrt(1 + l - n - s), this._w = (a - r) / e, this._x = (o + c) / e, this._y = (h + u) / e, this._z = .25 * e), this.onChangeCallback(), this
        },
        setFromUnitVectors: function () {
            var t, e = new s;
            return function (i, n) {
                return void 0 === e && (e = new s), t = i.dot(n) + 1, t < 1e-6 ? (t = 0, Math.abs(i.x) > Math.abs(i.z) ? e.set(-i.y, i.x, 0) : e.set(0, -i.z, i.y)) : e.crossVectors(i, n), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize()
            }
        }(),
        inverse: function () {
            return this.conjugate().normalize()
        },
        conjugate: function () {
            return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
        },
        dot: function (t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        },
        lengthSq: function () {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function () {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function () {
            var t = this.length();
            return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this.onChangeCallback(), this
        },
        multiply: function (t, e) {
            return void 0 !== e ? this.multiplyQuaternions(t, e) : this.multiplyQuaternions(this, t)
        },
        premultiply: function (t) {
            return this.multiplyQuaternions(t, this)
        },
        multiplyQuaternions: function (t, e) {
            var i = t._x,
                n = t._y,
                r = t._z,
                o = t._w,
                a = e._x,
                s = e._y,
                h = e._z,
                c = e._w;
            return this._x = i * c + o * a + n * h - r * s, this._y = n * c + o * s + r * a - i * h, this._z = r * c + o * h + i * s - n * a, this._w = o * c - i * a - n * s - r * h, this.onChangeCallback(), this
        },
        slerp: function (t, e) {
            if (0 === e) return this;
            if (1 === e) return this.copy(t);
            var i = this._x,
                n = this._y,
                r = this._z,
                o = this._w,
                a = o * t._w + i * t._x + n * t._y + r * t._z;
            if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = o, this._x = i, this._y = n, this._z = r, this;
            var s = Math.sqrt(1 - a * a);
            if (Math.abs(s) < .001) return this._w = .5 * (o + this._w), this._x = .5 * (i + this._x), this._y = .5 * (n + this._y), this._z = .5 * (r + this._z), this;
            var h = Math.atan2(s, a),
                c = Math.sin((1 - e) * h) / s,
                u = Math.sin(e * h) / s;
            return this._w = o * c + this._w * u, this._x = i * c + this._x * u, this._y = n * c + this._y * u, this._z = r * c + this._z * u, this.onChangeCallback(), this
        },
        equals: function (t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        },
        fromArray: function (t, e) {
            return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
        },
        onChange: function (t) {
            return this.onChangeCallback = t, this
        },
        onChangeCallback: function () {
        }
    }), Object.assign(s.prototype, {
        isVector3: !0,
        set: function (t, e, i) {
            return this.x = t, this.y = e, this.z = i, this
        },
        setScalar: function (t) {
            return this.x = t, this.y = t, this.z = t, this
        },
        setX: function (t) {
            return this.x = t, this
        },
        setY: function (t) {
            return this.y = t, this
        },
        setZ: function (t) {
            return this.z = t, this
        },
        setComponent: function (t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function (t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t)
            }
        },
        clone: function () {
            return new this.constructor(this.x, this.y, this.z)
        },
        copy: function (t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this
        },
        add: function (t, e) {
            return void 0 !== e ? this.addVectors(t, e) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
        },
        addScalar: function (t) {
            return this.x += t, this.y += t, this.z += t, this
        },
        addVectors: function (t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
        },
        addScaledVector: function (t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
        },
        sub: function (t, e) {
            return void 0 !== e ? this.subVectors(t, e) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
        },
        subScalar: function (t) {
            return this.x -= t, this.y -= t, this.z -= t, this
        },
        subVectors: function (t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
        },
        multiply: function (t, e) {
            return void 0 !== e ? this.multiplyVectors(t, e) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
        },
        multiplyScalar: function (t) {
            return this.x *= t, this.y *= t, this.z *= t, this
        },
        multiplyVectors: function (t, e) {
            return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
        },
        applyEuler: function () {
            var t = new a;
            return function (e) {
                return !e || e.isEuler, this.applyQuaternion(t.setFromEuler(e))
            }
        }(),
        applyAxisAngle: function () {
            var t = new a;
            return function (e, i) {
                return this.applyQuaternion(t.setFromAxisAngle(e, i))
            }
        }(),
        applyMatrix3: function (t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = t.elements;
            return this.x = r[0] * e + r[3] * i + r[6] * n, this.y = r[1] * e + r[4] * i + r[7] * n, this.z = r[2] * e + r[5] * i + r[8] * n, this
        },
        applyMatrix4: function (t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = t.elements,
                o = 1 / (r[3] * e + r[7] * i + r[11] * n + r[15]);
            return this.x = (r[0] * e + r[4] * i + r[8] * n + r[12]) * o, this.y = (r[1] * e + r[5] * i + r[9] * n + r[13]) * o, this.z = (r[2] * e + r[6] * i + r[10] * n + r[14]) * o, this
        },
        applyQuaternion: function (t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = t.x,
                o = t.y,
                a = t.z,
                s = t.w,
                h = s * e + o * n - a * i,
                c = s * i + a * e - r * n,
                u = s * n + r * i - o * e,
                l = -r * e - o * i - a * n;
            return this.x = h * s + l * -r + c * -a - u * -o, this.y = c * s + l * -o + u * -r - h * -a, this.z = u * s + l * -a + h * -o - c * -r, this
        },
        project: function () {
            var t = new o;
            return function (e) {
                return t.multiplyMatrices(e.projectionMatrix, t.getInverse(e.matrixWorld)), this.applyMatrix4(t)
            }
        }(),
        unproject: function () {
            var t = new o;
            return function (e) {
                return t.multiplyMatrices(e.matrixWorld, t.getInverse(e.projectionMatrix)), this.applyMatrix4(t)
            }
        }(),
        transformDirection: function (t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = t.elements;
            return this.x = r[0] * e + r[4] * i + r[8] * n, this.y = r[1] * e + r[5] * i + r[9] * n, this.z = r[2] * e + r[6] * i + r[10] * n, this.normalize()
        },
        divide: function (t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
        },
        divideScalar: function (t) {
            return this.multiplyScalar(1 / t)
        },
        min: function (t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
        },
        max: function (t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
        },
        clamp: function (t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
        },
        clampScalar: function () {
            var t = new s,
                e = new s;
            return function (i, n) {
                return t.set(i, i, i), e.set(n, n, n), this.clamp(t, e)
            }
        }(),
        clampLength: function (t, e) {
            var i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
        },
        floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
        },
        ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
        },
        round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
        },
        roundToZero: function () {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
        },
        negate: function () {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        },
        dot: function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        },
        lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        manhattanLength: function () {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function () {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function (t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function (t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
        },
        lerpVectors: function (t, e, i) {
            return this.subVectors(e, t).multiplyScalar(i).add(t)
        },
        cross: function (t, e) {
            return void 0 !== e ? this.crossVectors(t, e) : this.crossVectors(this, t)
        },
        crossVectors: function (t, e) {
            var i = t.x,
                n = t.y,
                r = t.z,
                o = e.x,
                a = e.y,
                s = e.z;
            return this.x = n * s - r * a, this.y = r * o - i * s, this.z = i * a - n * o, this
        },
        projectOnVector: function (t) {
            var e = t.dot(this) / t.lengthSq();
            return this.copy(t).multiplyScalar(e)
        },
        projectOnPlane: function () {
            var t = new s;
            return function (e) {
                return t.copy(this).projectOnVector(e), this.sub(t)
            }
        }(),
        reflect: function () {
            var t = new s;
            return function (e) {
                return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
            }
        }(),
        angleTo: function (t) {
            var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
            return Math.acos(ah.clamp(e, -1, 1))
        },
        distanceTo: function (t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function (t) {
            var e = this.x - t.x,
                i = this.y - t.y,
                n = this.z - t.z;
            return e * e + i * i + n * n
        },
        manhattanDistanceTo: function (t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
        },
        setFromSpherical: function (t) {
            var e = Math.sin(t.phi) * t.radius;
            return this.x = e * Math.sin(t.theta), this.y = Math.cos(t.phi) * t.radius, this.z = e * Math.cos(t.theta), this
        },
        setFromCylindrical: function (t) {
            return this.x = t.radius * Math.sin(t.theta), this.y = t.y, this.z = t.radius * Math.cos(t.theta), this
        },
        setFromMatrixPosition: function (t) {
            var e = t.elements;
            return this.x = e[12], this.y = e[13], this.z = e[14], this
        },
        setFromMatrixScale: function (t) {
            var e = this.setFromMatrixColumn(t, 0).length(),
                i = this.setFromMatrixColumn(t, 1).length(),
                n = this.setFromMatrixColumn(t, 2).length();
            return this.x = e, this.y = i, this.z = n, this
        },
        setFromMatrixColumn: function (t, e) {
            return this.fromArray(t.elements, 4 * e)
        },
        equals: function (t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        },
        fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
        },
        fromBufferAttribute: function (t, e, i) {
            return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
        }
    }), Object.assign(h.prototype, {
        isMatrix3: !0,
        set: function (t, e, i, n, r, o, a, s, h) {
            var c = this.elements;
            return c[0] = t, c[1] = n, c[2] = a, c[3] = e, c[4] = r, c[5] = s, c[6] = i, c[7] = o, c[8] = h, this
        },
        identity: function () {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        },
        clone: function () {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function (t) {
            var e = this.elements,
                i = t.elements;
            return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
        },
        setFromMatrix4: function (t) {
            var e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
        },
        applyToBufferAttribute: function () {
            var t = new s;
            return function (e) {
                for (var i = 0, n = e.count; i < n; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.applyMatrix3(this), e.setXYZ(i, t.x, t.y, t.z);
                return e
            }
        }(),
        multiply: function (t) {
            return this.multiplyMatrices(this, t)
        },
        premultiply: function (t) {
            return this.multiplyMatrices(t, this)
        },
        multiplyMatrices: function (t, e) {
            var i = t.elements,
                n = e.elements,
                r = this.elements,
                o = i[0],
                a = i[3],
                s = i[6],
                h = i[1],
                c = i[4],
                u = i[7],
                l = i[2],
                p = i[5],
                f = i[8],
                d = n[0],
                m = n[3],
                v = n[6],
                g = n[1],
                y = n[4],
                _ = n[7],
                x = n[2],
                b = n[5],
                w = n[8];
            return r[0] = o * d + a * g + s * x, r[3] = o * m + a * y + s * b, r[6] = o * v + a * _ + s * w, r[1] = h * d + c * g + u * x, r[4] = h * m + c * y + u * b, r[7] = h * v + c * _ + u * w, r[2] = l * d + p * g + f * x, r[5] = l * m + p * y + f * b, r[8] = l * v + p * _ + f * w, this
        },
        multiplyScalar: function (t) {
            var e = this.elements;
            return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
        },
        determinant: function () {
            var t = this.elements,
                e = t[0],
                i = t[1],
                n = t[2],
                r = t[3],
                o = t[4],
                a = t[5],
                s = t[6],
                h = t[7],
                c = t[8];
            return e * o * c - e * a * h - i * r * c + i * a * s + n * r * h - n * o * s
        },
        getInverse: function (t, e) {
            t && t.isMatrix4;
            var i = t.elements,
                n = this.elements,
                r = i[0],
                o = i[1],
                a = i[2],
                s = i[3],
                h = i[4],
                c = i[5],
                u = i[6],
                l = i[7],
                p = i[8],
                f = p * h - c * l,
                d = c * u - p * s,
                m = l * s - h * u,
                v = r * f + o * d + a * m;
            if (0 === v) {
                var g = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
                if (!0 === e) throw new Error(g);
                return this.identity()
            }
            var y = 1 / v;
            return n[0] = f * y, n[1] = (a * l - p * o) * y, n[2] = (c * o - a * h) * y, n[3] = d * y, n[4] = (p * r - a * u) * y, n[5] = (a * s - c * r) * y, n[6] = m * y, n[7] = (o * u - l * r) * y, n[8] = (h * r - o * s) * y, this
        },
        transpose: function () {
            var t, e = this.elements;
            return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
        },
        getNormalMatrix: function (t) {
            return this.setFromMatrix4(t).getInverse(this).transpose()
        },
        transposeIntoArray: function (t) {
            var e = this.elements;
            return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
        },
        setUvTransform: function (t, e, i, n, r, o, a) {
            var s = Math.cos(r),
                h = Math.sin(r);
            this.set(i * s, i * h, -i * (s * o + h * a) + o + t, -n * h, n * s, -n * (-h * o + s * a) + a + e, 0, 0, 1)
        },
        scale: function (t, e) {
            var i = this.elements;
            return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= e, i[4] *= e, i[7] *= e, this
        },
        rotate: function (t) {
            var e = Math.cos(t),
                i = Math.sin(t),
                n = this.elements,
                r = n[0],
                o = n[3],
                a = n[6],
                s = n[1],
                h = n[4],
                c = n[7];
            return n[0] = e * r + i * s, n[3] = e * o + i * h, n[6] = e * a + i * c, n[1] = -i * r + e * s, n[4] = -i * o + e * h, n[7] = -i * a + e * c, this
        },
        translate: function (t, e) {
            var i = this.elements;
            return i[0] += t * i[2], i[3] += t * i[5], i[6] += t * i[8], i[1] += e * i[2], i[4] += e * i[5], i[7] += e * i[8], this
        },
        equals: function (t) {
            for (var e = this.elements, i = t.elements, n = 0; n < 9; n++)
                if (e[n] !== i[n]) return !1;
            return !0
        },
        fromArray: function (t, e) {
            void 0 === e && (e = 0);
            for (var i = 0; i < 9; i++) this.elements[i] = t[i + e];
            return this
        },
        toArray: function (t, e) {
            void 0 === t && (t = []), void 0 === e && (e = 0);
            var i = this.elements;
            return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
        }
    });
    var sh = 0;
    c.DEFAULT_IMAGE = void 0, c.DEFAULT_MAPPING = Xa, c.prototype = Object.assign(Object.create(n.prototype), {
        constructor: c,
        isTexture: !0,
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
        },
        toJSON: function (t) {
            var e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
            var i = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY
            };
            if (void 0 !== this.image) {
                var n = this.image;
                void 0 === n.uuid && (n.uuid = ah.generateUUID()), e || void 0 !== t.images[n.uuid] || (t.images[n.uuid] = {
                    uuid: n.uuid,
                    url: function (t) {
                        var e;
                        if (t instanceof HTMLCanvasElement) e = t;
                        else {
                            e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), e.width = t.width, e.height = t.height;
                            var i = e.getContext("2d");
                            t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height)
                        }
                        return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
                    }(n)
                }), i.image = n.uuid
            }
            return e || (t.textures[this.uuid] = i), i
        },
        dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        },
        transformUv: function (t) {
            if (this.mapping === Xa) {
                if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
                    case ts:
                        t.x = t.x - Math.floor(t.x);
                        break;
                    case es:
                        t.x = t.x < 0 ? 0 : 1;
                        break;
                    case is:
                        1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                }
                if (t.y < 0 || t.y > 1) switch (this.wrapT) {
                    case ts:
                        t.y = t.y - Math.floor(t.y);
                        break;
                    case es:
                        t.y = t.y < 0 ? 0 : 1;
                        break;
                    case is:
                        1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                }
                this.flipY && (t.y = 1 - t.y)
            }
        }
    }), Object.defineProperty(c.prototype, "needsUpdate", {
        set: function (t) {
            !0 === t && this.version++
        }
    }), Object.assign(u.prototype, {
        isVector4: !0,
        set: function (t, e, i, n) {
            return this.x = t, this.y = e, this.z = i, this.w = n, this
        },
        setScalar: function (t) {
            return this.x = t, this.y = t, this.z = t, this.w = t, this
        },
        setX: function (t) {
            return this.x = t, this
        },
        setY: function (t) {
            return this.y = t, this
        },
        setZ: function (t) {
            return this.z = t, this
        },
        setW: function (t) {
            return this.w = t, this
        },
        setComponent: function (t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function (t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t)
            }
        },
        clone: function () {
            return new this.constructor(this.x, this.y, this.z, this.w)
        },
        copy: function (t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
        },
        add: function (t, e) {
            return void 0 !== e ? this.addVectors(t, e) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
        },
        addScalar: function (t) {
            return this.x += t, this.y += t, this.z += t, this.w += t, this
        },
        addVectors: function (t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
        },
        addScaledVector: function (t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
        },
        sub: function (t, e) {
            return void 0 !== e ? this.subVectors(t, e) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
        },
        subScalar: function (t) {
            return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
        },
        subVectors: function (t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
        },
        multiplyScalar: function (t) {
            return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
        },
        applyMatrix4: function (t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = this.w,
                o = t.elements;
            return this.x = o[0] * e + o[4] * i + o[8] * n + o[12] * r, this.y = o[1] * e + o[5] * i + o[9] * n + o[13] * r, this.z = o[2] * e + o[6] * i + o[10] * n + o[14] * r, this.w = o[3] * e + o[7] * i + o[11] * n + o[15] * r, this
        },
        divideScalar: function (t) {
            return this.multiplyScalar(1 / t)
        },
        setAxisAngleFromQuaternion: function (t) {
            this.w = 2 * Math.acos(t.w);
            var e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
        },
        setAxisAngleFromRotationMatrix: function (t) {
            var e, i, n, r, o = t.elements,
                a = o[0],
                s = o[4],
                h = o[8],
                c = o[1],
                u = o[5],
                l = o[9],
                p = o[2],
                f = o[6],
                d = o[10];
            if (Math.abs(s - c) < .01 && Math.abs(h - p) < .01 && Math.abs(l - f) < .01) {
                if (Math.abs(s + c) < .1 && Math.abs(h + p) < .1 && Math.abs(l + f) < .1 && Math.abs(a + u + d - 3) < .1) return this.set(1, 0, 0, 0), this;
                e = Math.PI;
                var m = (a + 1) / 2,
                    v = (u + 1) / 2,
                    g = (d + 1) / 2,
                    y = (s + c) / 4,
                    _ = (h + p) / 4,
                    x = (l + f) / 4;
                return m > v && m > g ? m < .01 ? (i = 0, n = .707106781, r = .707106781) : (i = Math.sqrt(m), n = y / i, r = _ / i) : v > g ? v < .01 ? (i = .707106781, n = 0, r = .707106781) : (n = Math.sqrt(v), i = y / n, r = x / n) : g < .01 ? (i = .707106781, n = .707106781, r = 0) : (r = Math.sqrt(g), i = _ / r, n = x / r), this.set(i, n, r, e), this
            }
            var b = Math.sqrt((f - l) * (f - l) + (h - p) * (h - p) + (c - s) * (c - s));
            return Math.abs(b) < .001 && (b = 1), this.x = (f - l) / b, this.y = (h - p) / b, this.z = (c - s) / b, this.w = Math.acos((a + u + d - 1) / 2), this
        },
        min: function (t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
        },
        max: function (t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
        },
        clamp: function (t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
        },
        clampScalar: function () {
            var t, e;
            return function (i, n) {
                return void 0 === t && (t = new u, e = new u), t.set(i, i, i, i), e.set(n, n, n, n), this.clamp(t, e)
            }
        }(),
        clampLength: function (t, e) {
            var i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
        },
        floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
        },
        ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
        },
        round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
        },
        roundToZero: function () {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
        },
        negate: function () {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
        },
        dot: function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        },
        lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        manhattanLength: function () {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function () {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function (t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function (t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
        },
        lerpVectors: function (t, e, i) {
            return this.subVectors(e, t).multiplyScalar(i).add(t)
        },
        equals: function (t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        },
        fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
        },
        fromBufferAttribute: function (t, e, i) {
            return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
        }
    }), l.prototype = Object.assign(Object.create(n.prototype), {
        constructor: l,
        isWebGLRenderTarget: !0,
        setSize: function (t, e) {
            this.width === t && this.height === e || (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
        },
        dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), p.prototype = Object.create(l.prototype), p.prototype.constructor = p, p.prototype.isWebGLRenderTargetCube = !0, f.prototype = Object.create(c.prototype), f.prototype.constructor = f, f.prototype.isDataTexture = !0, d.prototype = Object.create(c.prototype), d.prototype.constructor = d, d.prototype.isCubeTexture = !0, Object.defineProperty(d.prototype, "images", {
        get: function () {
            return this.image
        },
        set: function (t) {
            this.image = t
        }
    });
    var hh = new c,
        ch = new d,
        uh = [],
        lh = [],
        ph = new Float32Array(16),
        fh = new Float32Array(9);
    H.prototype.setValue = function (t, e) {
        for (var i = this.seq, n = 0, r = i.length; n !== r; ++n) {
            var o = i[n];
            o.setValue(t, e[o.id])
        }
    };
    var dh = /([\w\d_]+)(\])?(\[|\.)?/g;
    Y.prototype.setValue = function (t, e, i) {
        var n = this.map[e];
        void 0 !== n && n.setValue(t, i, this.renderer)
    }, Y.prototype.setOptional = function (t, e, i) {
        var n = e[i];
        void 0 !== n && this.setValue(t, i, n)
    }, Y.upload = function (t, e, i, n) {
        for (var r = 0, o = e.length; r !== o; ++r) {
            var a = e[r],
                s = i[a.id];
            !1 !== s.needsUpdate && a.setValue(t, s.value, n)
        }
    }, Y.seqWithValue = function (t, e) {
        for (var i = [], n = 0, r = t.length; n !== r; ++n) {
            var o = t[n];
            o.id in e && i.push(o)
        }
        return i
    };
    var mh = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    Object.assign($.prototype, {
        isColor: !0,
        r: 1,
        g: 1,
        b: 1,
        set: function (t) {
            return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
        },
        setScalar: function (t) {
            return this.r = t, this.g = t, this.b = t, this
        },
        setHex: function (t) {
            return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
        },
        setRGB: function (t, e, i) {
            return this.r = t, this.g = e, this.b = i, this
        },
        setHSL: function () {
            function t(t, e, i) {
                return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t
            }

            return function (e, i, n) {
                if (e = ah.euclideanModulo(e, 1), i = ah.clamp(i, 0, 1), n = ah.clamp(n, 0, 1), 0 === i) this.r = this.g = this.b = n;
                else {
                    var r = n <= .5 ? n * (1 + i) : n + i - n * i,
                        o = 2 * n - r;
                    this.r = t(o, r, e + 1 / 3), this.g = t(o, r, e), this.b = t(o, r, e - 1 / 3)
                }
                return this
            }
        }(),
        setStyle: function (t) {
            function e(t) {
                void 0 !== t && parseFloat(t)
            }

            var i;
            if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
                var n, r = i[1],
                    o = i[2];
                switch (r) {
                    case "rgb":
                    case "rgba":
                        if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, e(n[5]), this;
                        if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, e(n[5]), this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) {
                            var a = parseFloat(n[1]) / 360,
                                s = parseInt(n[2], 10) / 100,
                                h = parseInt(n[3], 10) / 100;
                            return e(n[5]), this.setHSL(a, s, h)
                        }
                }
            } else if (i = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
                var c = i[1],
                    u = c.length;
                if (3 === u) return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this;
                if (6 === u) return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this
            }
            if (t && t.length > 0) {
                var c = mh[t];
                void 0 !== c && this.setHex(c)
            }
            return this
        },
        clone: function () {
            return new this.constructor(this.r, this.g, this.b)
        },
        copy: function (t) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this
        },
        copyGammaToLinear: function (t, e) {
            return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
        },
        copyLinearToGamma: function (t, e) {
            void 0 === e && (e = 2);
            var i = e > 0 ? 1 / e : 1;
            return this.r = Math.pow(t.r, i), this.g = Math.pow(t.g, i), this.b = Math.pow(t.b, i), this
        },
        convertGammaToLinear: function () {
            var t = this.r,
                e = this.g,
                i = this.b;
            return this.r = t * t, this.g = e * e, this.b = i * i, this
        },
        convertLinearToGamma: function () {
            return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
        },
        getHex: function () {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function () {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function (t) {
            var e, i, n = t || {
                    h: 0,
                    s: 0,
                    l: 0
                },
                r = this.r,
                o = this.g,
                a = this.b,
                s = Math.max(r, o, a),
                h = Math.min(r, o, a),
                c = (h + s) / 2;
            if (h === s) e = 0, i = 0;
            else {
                var u = s - h;
                switch (i = c <= .5 ? u / (s + h) : u / (2 - s - h), s) {
                    case r:
                        e = (o - a) / u + (o < a ? 6 : 0);
                        break;
                    case o:
                        e = (a - r) / u + 2;
                        break;
                    case a:
                        e = (r - o) / u + 4
                }
                e /= 6
            }
            return n.h = e, n.s = i, n.l = c, n
        },
        getStyle: function () {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: function (t, e, i) {
            var n = this.getHSL();
            return n.h += t, n.s += e, n.l += i, this.setHSL(n.h, n.s, n.l), this
        },
        add: function (t) {
            return this.r += t.r, this.g += t.g, this.b += t.b, this
        },
        addColors: function (t, e) {
            return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
        },
        addScalar: function (t) {
            return this.r += t, this.g += t, this.b += t, this
        },
        sub: function (t) {
            return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
        },
        multiply: function (t) {
            return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
        },
        multiplyScalar: function (t) {
            return this.r *= t, this.g *= t, this.b *= t, this
        },
        lerp: function (t, e) {
            return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
        },
        equals: function (t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        },
        fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
        },
        toJSON: function () {
            return this.getHex()
        }
    });
    var vh = {
            common: {
                diffuse: {
                    value: new $(15658734)
                },
                opacity: {
                    value: 1
                },
                map: {
                    value: null
                },
                uvTransform: {
                    value: new h
                },
                alphaMap: {
                    value: null
                }
            },
            specularmap: {
                specularMap: {
                    value: null
                }
            },
            envmap: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                },
                reflectivity: {
                    value: 1
                },
                refractionRatio: {
                    value: .98
                }
            },
            aomap: {
                aoMap: {
                    value: null
                },
                aoMapIntensity: {
                    value: 1
                }
            },
            lightmap: {
                lightMap: {
                    value: null
                },
                lightMapIntensity: {
                    value: 1
                }
            },
            emissivemap: {
                emissiveMap: {
                    value: null
                }
            },
            bumpmap: {
                bumpMap: {
                    value: null
                },
                bumpScale: {
                    value: 1
                }
            },
            normalmap: {
                normalMap: {
                    value: null
                },
                normalScale: {
                    value: new r(1, 1)
                }
            },
            displacementmap: {
                displacementMap: {
                    value: null
                },
                displacementScale: {
                    value: 1
                },
                displacementBias: {
                    value: 0
                }
            },
            roughnessmap: {
                roughnessMap: {
                    value: null
                }
            },
            metalnessmap: {
                metalnessMap: {
                    value: null
                }
            },
            gradientmap: {
                gradientMap: {
                    value: null
                }
            },
            fog: {
                fogDensity: {
                    value: 25e-5
                },
                fogNear: {
                    value: 1
                },
                fogFar: {
                    value: 2e3
                },
                fogColor: {
                    value: new $(16777215)
                }
            },
            lights: {
                ambientLightColor: {
                    value: []
                },
                directionalLights: {
                    value: [],
                    properties: {
                        direction: {},
                        color: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                directionalShadowMap: {
                    value: []
                },
                directionalShadowMatrix: {
                    value: []
                },
                spotLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        direction: {},
                        distance: {},
                        coneCos: {},
                        penumbraCos: {},
                        decay: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                spotShadowMap: {
                    value: []
                },
                spotShadowMatrix: {
                    value: []
                },
                pointLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        decay: {},
                        distance: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {},
                        shadowCameraNear: {},
                        shadowCameraFar: {}
                    }
                },
                pointShadowMap: {
                    value: []
                },
                pointShadowMatrix: {
                    value: []
                },
                hemisphereLights: {
                    value: [],
                    properties: {
                        direction: {},
                        skyColor: {},
                        groundColor: {}
                    }
                },
                rectAreaLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        width: {},
                        height: {}
                    }
                }
            },
            points: {
                diffuse: {
                    value: new $(15658734)
                },
                opacity: {
                    value: 1
                },
                size: {
                    value: 1
                },
                scale: {
                    value: 1
                },
                map: {
                    value: null
                },
                uvTransform: {
                    value: new h
                }
            }
        },
        gh = {
            merge: function (t) {
                for (var e = {}, i = 0; i < t.length; i++) {
                    var n = this.clone(t[i]);
                    for (var r in n) e[r] = n[r]
                }
                return e
            },
            clone: function (t) {
                var e = {};
                for (var i in t) {
                    e[i] = {};
                    for (var n in t[i]) {
                        var r = t[i][n];
                        r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? e[i][n] = r.clone() : Array.isArray(r) ? e[i][n] = r.slice() : e[i][n] = r
                    }
                }
                return e
            }
        },
        yh = {
            alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
            alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
            alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
            aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
            aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
            begin_vertex: "\nvec3 transformed = vec3( position );\n",
            beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n",
            bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.86267 + (0.49788 + 0.01436 * y ) * y;\n\tfloat b = 3.45068 + (4.18814 + y) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = (x > 0.0) ? v : 0.5 * inversesqrt( 1.0 - x * x ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tvec3 result = vec3( LTC_ClippedSphereFormFactor( vectorFormFactor ) );\n\treturn result;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
            bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
            clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",
            clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
            clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",
            clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
            color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
            color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
            color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
            color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
            common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n",
            cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
            defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",
            displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
            displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
            emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
            emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
            encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
            encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",
            envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
            envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
            envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
            envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
            fog_vertex: "\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",
            fog_pars_vertex: "#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",
            fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
            fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
            gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",
            lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
            lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
            lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
            lights_pars: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
            lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
            lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
            lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
            lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tfloat norm = texture2D( ltcMag, uv ).a;\n\t\tvec4 t = texture2D( ltcMat, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3(   1,   0, t.y ),\n\t\t\tvec3(   0, t.z,   0 ),\n\t\t\tvec3( t.w,   0, t.x )\n\t\t);\n\t\treflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
            lights_template: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
            logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
            logdepthbuf_pars_fragment: "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",
            logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",
            logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n",
            map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
            map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
            map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
            map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n",
            metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",
            metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
            morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
            morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
            morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
            normal_fragment: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
            normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
            packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
            premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
            project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",
            dithering_fragment: "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",
            dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
            roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",
            roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
            shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
            shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
            shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
            shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
            skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
            skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
            skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",
            skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
            specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
            specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
            tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
            tonemapping_pars_fragment: "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
            uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
            uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n",
            uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
            uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
            uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
            uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
            worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",
            cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
            cube_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n",
            depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
            depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
            distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",
            distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",
            equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
            equirect_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
            linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
            linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
            meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
            meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
            meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
            meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
            meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
            meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
            normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
            points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
            points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n",
            shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n"
        },
        _h = {
            basic: {
                uniforms: gh.merge([vh.common, vh.specularmap, vh.envmap, vh.aomap, vh.lightmap, vh.fog]),
                vertexShader: yh.meshbasic_vert,
                fragmentShader: yh.meshbasic_frag
            },
            lambert: {
                uniforms: gh.merge([vh.common, vh.specularmap, vh.envmap, vh.aomap, vh.lightmap, vh.emissivemap, vh.fog, vh.lights, {
                    emissive: {
                        value: new $(0)
                    }
                }]),
                vertexShader: yh.meshlambert_vert,
                fragmentShader: yh.meshlambert_frag
            },
            phong: {
                uniforms: gh.merge([vh.common, vh.specularmap, vh.envmap, vh.aomap, vh.lightmap, vh.emissivemap, vh.bumpmap, vh.normalmap, vh.displacementmap, vh.gradientmap, vh.fog, vh.lights, {
                    emissive: {
                        value: new $(0)
                    },
                    specular: {
                        value: new $(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }]),
                vertexShader: yh.meshphong_vert,
                fragmentShader: yh.meshphong_frag
            },
            standard: {
                uniforms: gh.merge([vh.common, vh.envmap, vh.aomap, vh.lightmap, vh.emissivemap, vh.bumpmap, vh.normalmap, vh.displacementmap, vh.roughnessmap, vh.metalnessmap, vh.fog, vh.lights, {
                    emissive: {
                        value: new $(0)
                    },
                    roughness: {
                        value: .5
                    },
                    metalness: {
                        value: .5
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }]),
                vertexShader: yh.meshphysical_vert,
                fragmentShader: yh.meshphysical_frag
            },
            points: {
                uniforms: gh.merge([vh.points, vh.fog]),
                vertexShader: yh.points_vert,
                fragmentShader: yh.points_frag
            },
            dashed: {
                uniforms: gh.merge([vh.common, vh.fog, {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }]),
                vertexShader: yh.linedashed_vert,
                fragmentShader: yh.linedashed_frag
            },
            depth: {
                uniforms: gh.merge([vh.common, vh.displacementmap]),
                vertexShader: yh.depth_vert,
                fragmentShader: yh.depth_frag
            },
            normal: {
                uniforms: gh.merge([vh.common, vh.bumpmap, vh.normalmap, vh.displacementmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: yh.normal_vert,
                fragmentShader: yh.normal_frag
            },
            cube: {
                uniforms: {
                    tCube: {
                        value: null
                    },
                    tFlip: {
                        value: -1
                    },
                    opacity: {
                        value: 1
                    }
                },
                vertexShader: yh.cube_vert,
                fragmentShader: yh.cube_frag
            },
            equirect: {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: yh.equirect_vert,
                fragmentShader: yh.equirect_frag
            },
            distanceRGBA: {
                uniforms: gh.merge([vh.common, vh.displacementmap, {
                    referencePosition: {
                        value: new s
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }]),
                vertexShader: yh.distanceRGBA_vert,
                fragmentShader: yh.distanceRGBA_frag
            },
            shadow: {
                uniforms: gh.merge([vh.lights, vh.fog, {
                    color: {
                        value: new $(0)
                    },
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: yh.shadow_vert,
                fragmentShader: yh.shadow_frag
            }
        };
    _h.physical = {
        uniforms: gh.merge([_h.standard.uniforms, {
            clearCoat: {
                value: 0
            },
            clearCoatRoughness: {
                value: 0
            }
        }]),
        vertexShader: yh.meshphysical_vert,
        fragmentShader: yh.meshphysical_frag
    }, Object.assign(Z.prototype, {
        set: function (t, e) {
            return this.min.copy(t), this.max.copy(e), this
        },
        setFromPoints: function (t) {
            this.makeEmpty();
            for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function () {
            var t = new r;
            return function (e, i) {
                var n = t.copy(i).multiplyScalar(.5);
                return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
            }
        }(),
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.min.copy(t.min), this.max.copy(t.max), this
        },
        makeEmpty: function () {
            return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
        },
        isEmpty: function () {
            return this.max.x < this.min.x || this.max.y < this.min.y
        },
        getCenter: function (t) {
            var e = t || new r;
            return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function (t) {
            var e = t || new r;
            return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
        },
        expandByPoint: function (t) {
            return this.min.min(t), this.max.max(t), this
        },
        expandByVector: function (t) {
            return this.min.sub(t), this.max.add(t), this
        },
        expandByScalar: function (t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this
        },
        containsPoint: function (t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
        },
        containsBox: function (t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
        },
        getParameter: function (t, e) {
            return (e || new r).set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function (t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
        },
        clampPoint: function (t, e) {
            return (e || new r).copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function () {
            var t = new r;
            return function (e) {
                return t.copy(e).clamp(this.min, this.max).sub(e).length()
            }
        }(),
        intersect: function (t) {
            return this.min.max(t.min), this.max.min(t.max), this
        },
        union: function (t) {
            return this.min.min(t.min), this.max.max(t.max), this
        },
        translate: function (t) {
            return this.min.add(t), this.max.add(t), this
        },
        equals: function (t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }), Q.prototype = Object.create(c.prototype), Q.prototype.constructor = Q;
    var xh = 0;
    tt.prototype = Object.assign(Object.create(n.prototype), {
        constructor: tt,
        isMaterial: !0,
        onBeforeCompile: function () {
        },
        setValues: function (t) {
            if (void 0 !== t)
                for (var e in t) {
                    var i = t[e];
                    if (void 0 !== i)
                        if ("shading" !== e) {
                            var n = this[e];
                            void 0 !== n && (n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = "overdraw" === e ? Number(i) : i)
                        } else this.flatShading = i === na
                }
        },
        toJSON: function (t) {
            function e(t) {
                var e = [];
                for (var i in t) {
                    var n = t[i];
                    delete n.metadata, e.push(n)
                }
                return e
            }

            var i = void 0 === t || "string" == typeof t;
            i && (t = {
                textures: {},
                images: {}
            });
            var n = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearCoat && (n.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (n.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, n.reflectivity = this.reflectivity), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ca && (n.blending = this.blending), !0 === this.flatShading && (n.flatShading = this.flatShading), this.side !== ta && (n.side = this.side), this.vertexColors !== oa && (n.vertexColors = this.vertexColors), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, 0 !== this.rotation && (n.rotation = this.rotation), 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.skinning && (n.skinning = !0), !1 === this.visible && (n.visible = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), i) {
                var r = e(t.textures),
                    o = e(t.images);
                r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o)
            }
            return n
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.overdraw = t.overdraw, this.visible = t.visible, this.userData = JSON.parse(JSON.stringify(t.userData)), this.clipShadows = t.clipShadows, this.clipIntersection = t.clipIntersection;
            var e = t.clippingPlanes,
                i = null;
            if (null !== e) {
                var n = e.length;
                i = new Array(n);
                for (var r = 0; r !== n; ++r) i[r] = e[r].clone()
            }
            return this.clippingPlanes = i, this
        },
        dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), et.prototype = Object.create(tt.prototype), et.prototype.constructor = et, et.prototype.isMeshDepthMaterial = !0, et.prototype.copy = function (t) {
        return tt.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
    }, it.prototype = Object.create(tt.prototype), it.prototype.constructor = it, it.prototype.isMeshDistanceMaterial = !0, it.prototype.copy = function (t) {
        return tt.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
    }, Object.assign(nt.prototype, {
        isBox3: !0,
        set: function (t, e) {
            return this.min.copy(t), this.max.copy(e), this
        },
        setFromArray: function (t) {
            for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0, s = 0, h = t.length; s < h; s += 3) {
                var c = t[s],
                    u = t[s + 1],
                    l = t[s + 2];
                c < e && (e = c), u < i && (i = u), l < n && (n = l), c > r && (r = c), u > o && (o = u), l > a && (a = l)
            }
            return this.min.set(e, i, n), this.max.set(r, o, a), this
        },
        setFromBufferAttribute: function (t) {
            for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0, s = 0, h = t.count; s < h; s++) {
                var c = t.getX(s),
                    u = t.getY(s),
                    l = t.getZ(s);
                c < e && (e = c), u < i && (i = u), l < n && (n = l), c > r && (r = c), u > o && (o = u), l > a && (a = l)
            }
            return this.min.set(e, i, n), this.max.set(r, o, a), this
        },
        setFromPoints: function (t) {
            this.makeEmpty();
            for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function () {
            var t = new s;
            return function (e, i) {
                var n = t.copy(i).multiplyScalar(.5);
                return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
            }
        }(),
        setFromObject: function (t) {
            return this.makeEmpty(), this.expandByObject(t)
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.min.copy(t.min), this.max.copy(t.max), this
        },
        makeEmpty: function () {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
        },
        isEmpty: function () {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        getCenter: function (t) {
            var e = t || new s;
            return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function (t) {
            var e = t || new s;
            return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
        },
        expandByPoint: function (t) {
            return this.min.min(t), this.max.max(t), this
        },
        expandByVector: function (t) {
            return this.min.sub(t), this.max.add(t), this
        },
        expandByScalar: function (t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this
        },
        expandByObject: function () {
            function t(t) {
                var o = t.geometry;
                if (void 0 !== o)
                    if (o.isGeometry) {
                        var a = o.vertices;
                        for (i = 0, n = a.length; i < n; i++) r.copy(a[i]), r.applyMatrix4(t.matrixWorld), e.expandByPoint(r)
                    } else if (o.isBufferGeometry) {
                        var s = o.attributes.position;
                        if (void 0 !== s)
                            for (i = 0, n = s.count; i < n; i++) r.fromBufferAttribute(s, i).applyMatrix4(t.matrixWorld), e.expandByPoint(r)
                    }
            }

            var e, i, n, r = new s;
            return function (i) {
                return e = this, i.updateMatrixWorld(!0), i.traverse(t), this
            }
        }(),
        containsPoint: function (t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
        },
        containsBox: function (t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        },
        getParameter: function (t, e) {
            return (e || new s).set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        },
        intersectsBox: function (t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
        },
        intersectsSphere: function () {
            var t = new s;
            return function (e) {
                return this.clampPoint(e.center, t), t.distanceToSquared(e.center) <= e.radius * e.radius
            }
        }(),
        intersectsPlane: function (t) {
            var e, i;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= t.constant && i >= t.constant
        },
        clampPoint: function (t, e) {
            return (e || new s).copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function () {
            var t = new s;
            return function (e) {
                return t.copy(e).clamp(this.min, this.max).sub(e).length()
            }
        }(),
        getBoundingSphere: function () {
            var t = new s;
            return function (e) {
                var i = e || new rt;
                return this.getCenter(i.center), i.radius = .5 * this.getSize(t).length(), i
            }
        }(),
        intersect: function (t) {
            return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
        },
        union: function (t) {
            return this.min.min(t.min), this.max.max(t.max), this
        },
        applyMatrix4: function () {
            var t = [new s, new s, new s, new s, new s, new s, new s, new s];
            return function (e) {
                return this.isEmpty() ? this : (t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(t), this)
            }
        }(),
        translate: function (t) {
            return this.min.add(t), this.max.add(t), this
        },
        equals: function (t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }), Object.assign(rt.prototype, {
        set: function (t, e) {
            return this.center.copy(t), this.radius = e, this
        },
        setFromPoints: function () {
            var t = new nt;
            return function (e, i) {
                var n = this.center;
                void 0 !== i ? n.copy(i) : t.setFromPoints(e).getCenter(n);
                for (var r = 0, o = 0, a = e.length; o < a; o++) r = Math.max(r, n.distanceToSquared(e[o]));
                return this.radius = Math.sqrt(r), this
            }
        }(),
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.center.copy(t.center), this.radius = t.radius, this
        },
        empty: function () {
            return this.radius <= 0
        },
        containsPoint: function (t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function (t) {
            return t.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function (t) {
            var e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e
        },
        intersectsBox: function (t) {
            return t.intersectsSphere(this)
        },
        intersectsPlane: function (t) {
            return Math.abs(t.distanceToPoint(this.center)) <= this.radius
        },
        clampPoint: function (t, e) {
            var i = this.center.distanceToSquared(t),
                n = e || new s;
            return n.copy(t), i > this.radius * this.radius && (n.sub(this.center).normalize(), n.multiplyScalar(this.radius).add(this.center)), n
        },
        getBoundingBox: function (t) {
            var e = t || new nt;
            return e.set(this.center, this.center), e.expandByScalar(this.radius), e
        },
        applyMatrix4: function (t) {
            return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
        },
        translate: function (t) {
            return this.center.add(t), this
        },
        equals: function (t) {
            return t.center.equals(this.center) && t.radius === this.radius
        }
    }), Object.assign(ot.prototype, {
        set: function (t, e) {
            return this.normal.copy(t), this.constant = e, this
        },
        setComponents: function (t, e, i, n) {
            return this.normal.set(t, e, i), this.constant = n, this
        },
        setFromNormalAndCoplanarPoint: function (t, e) {
            return this.normal.copy(t), this.constant = -e.dot(this.normal), this
        },
        setFromCoplanarPoints: function () {
            var t = new s,
                e = new s;
            return function (i, n, r) {
                var o = t.subVectors(r, n).cross(e.subVectors(i, n)).normalize();
                return this.setFromNormalAndCoplanarPoint(o, i), this
            }
        }(),
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.normal.copy(t.normal), this.constant = t.constant, this
        },
        normalize: function () {
            var t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t), this.constant *= t, this
        },
        negate: function () {
            return this.constant *= -1, this.normal.negate(), this
        },
        distanceToPoint: function (t) {
            return this.normal.dot(t) + this.constant
        },
        distanceToSphere: function (t) {
            return this.distanceToPoint(t.center) - t.radius
        },
        projectPoint: function (t, e) {
            return (e || new s).copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
        },
        intersectLine: function () {
            var t = new s;
            return function (e, i) {
                var n = i || new s,
                    r = e.delta(t),
                    o = this.normal.dot(r);
                if (0 !== o) {
                    var a = -(e.start.dot(this.normal) + this.constant) / o;
                    if (!(a < 0 || a > 1)) return n.copy(r).multiplyScalar(a).add(e.start)
                } else if (0 === this.distanceToPoint(e.start)) return n.copy(e.start)
            }
        }(),
        intersectsLine: function (t) {
            var e = this.distanceToPoint(t.start),
                i = this.distanceToPoint(t.end);
            return e < 0 && i > 0 || i < 0 && e > 0
        },
        intersectsBox: function (t) {
            return t.intersectsPlane(this)
        },
        intersectsSphere: function (t) {
            return t.intersectsPlane(this)
        },
        coplanarPoint: function (t) {
            return (t || new s).copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: function () {
            var t = new s,
                e = new h;
            return function (i, n) {
                var r = n || e.getNormalMatrix(i),
                    o = this.coplanarPoint(t).applyMatrix4(i),
                    a = this.normal.applyMatrix3(r).normalize();
                return this.constant = -o.dot(a), this
            }
        }(),
        translate: function (t) {
            return this.constant -= t.dot(this.normal), this
        },
        equals: function (t) {
            return t.normal.equals(this.normal) && t.constant === this.constant
        }
    }), Object.assign(at.prototype, {
        set: function (t, e, i, n, r, o) {
            var a = this.planes;
            return a[0].copy(t), a[1].copy(e), a[2].copy(i), a[3].copy(n), a[4].copy(r), a[5].copy(o), this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            for (var e = this.planes, i = 0; i < 6; i++) e[i].copy(t.planes[i]);
            return this
        },
        setFromMatrix: function (t) {
            var e = this.planes,
                i = t.elements,
                n = i[0],
                r = i[1],
                o = i[2],
                a = i[3],
                s = i[4],
                h = i[5],
                c = i[6],
                u = i[7],
                l = i[8],
                p = i[9],
                f = i[10],
                d = i[11],
                m = i[12],
                v = i[13],
                g = i[14],
                y = i[15];
            return e[0].setComponents(a - n, u - s, d - l, y - m).normalize(), e[1].setComponents(a + n, u + s, d + l, y + m).normalize(), e[2].setComponents(a + r, u + h, d + p, y + v).normalize(), e[3].setComponents(a - r, u - h, d - p, y - v).normalize(), e[4].setComponents(a - o, u - c, d - f, y - g).normalize(), e[5].setComponents(a + o, u + c, d + f, y + g).normalize(), this
        },
        intersectsObject: function () {
            var t = new rt;
            return function (e) {
                var i = e.geometry;
                return null === i.boundingSphere && i.computeBoundingSphere(), t.copy(i.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
            }
        }(),
        intersectsSprite: function () {
            var t = new rt;
            return function (e) {
                return t.center.set(0, 0, 0), t.radius = .7071067811865476, t.applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
            }
        }(),
        intersectsSphere: function (t) {
            for (var e = this.planes, i = t.center, n = -t.radius, r = 0; r < 6; r++) {
                if (e[r].distanceToPoint(i) < n) return !1
            }
            return !0
        },
        intersectsBox: function () {
            var t = new s,
                e = new s;
            return function (i) {
                for (var n = this.planes, r = 0; r < 6; r++) {
                    var o = n[r];
                    t.x = o.normal.x > 0 ? i.min.x : i.max.x, e.x = o.normal.x > 0 ? i.max.x : i.min.x, t.y = o.normal.y > 0 ? i.min.y : i.max.y, e.y = o.normal.y > 0 ? i.max.y : i.min.y, t.z = o.normal.z > 0 ? i.min.z : i.max.z, e.z = o.normal.z > 0 ? i.max.z : i.min.z;
                    var a = o.distanceToPoint(t),
                        s = o.distanceToPoint(e);
                    if (a < 0 && s < 0) return !1
                }
                return !0
            }
        }(),
        containsPoint: function (t) {
            for (var e = this.planes, i = 0; i < 6; i++)
                if (e[i].distanceToPoint(t) < 0) return !1;
            return !0
        }
    }), ct.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], ct.DefaultOrder = "XYZ", Object.defineProperties(ct.prototype, {
        x: {
            get: function () {
                return this._x
            },
            set: function (t) {
                this._x = t, this.onChangeCallback()
            }
        },
        y: {
            get: function () {
                return this._y
            },
            set: function (t) {
                this._y = t, this.onChangeCallback()
            }
        },
        z: {
            get: function () {
                return this._z
            },
            set: function (t) {
                this._z = t, this.onChangeCallback()
            }
        },
        order: {
            get: function () {
                return this._order
            },
            set: function (t) {
                this._order = t, this.onChangeCallback()
            }
        }
    }), Object.assign(ct.prototype, {
        isEuler: !0,
        set: function (t, e, i, n) {
            return this._x = t, this._y = e, this._z = i, this._order = n || this._order, this.onChangeCallback(), this
        },
        clone: function () {
            return new this.constructor(this._x, this._y, this._z, this._order)
        },
        copy: function (t) {
            return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this
        },
        setFromRotationMatrix: function (t, e, i) {
            var n = ah.clamp,
                r = t.elements,
                o = r[0],
                a = r[4],
                s = r[8],
                h = r[1],
                c = r[5],
                u = r[9],
                l = r[2],
                p = r[6],
                f = r[10];
            return e = e || this._order, "XYZ" === e ? (this._y = Math.asin(n(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-u, f), this._z = Math.atan2(-a, o)) : (this._x = Math.atan2(p, c), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-n(u, -1, 1)), Math.abs(u) < .99999 ? (this._y = Math.atan2(s, f), this._z = Math.atan2(h, c)) : (this._y = Math.atan2(-l, o), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(n(p, -1, 1)), Math.abs(p) < .99999 ? (this._y = Math.atan2(-l, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(h, o))) : "ZYX" === e ? (this._y = Math.asin(-n(l, -1, 1)), Math.abs(l) < .99999 ? (this._x = Math.atan2(p, f), this._z = Math.atan2(h, o)) : (this._x = 0, this._z = Math.atan2(-a, c))) : "YZX" === e ? (this._z = Math.asin(n(h, -1, 1)), Math.abs(h) < .99999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-l, o)) : (this._x = 0, this._y = Math.atan2(s, f))) : "XZY" === e && (this._z = Math.asin(-n(a, -1, 1)), Math.abs(a) < .99999 ? (this._x = Math.atan2(p, c), this._y = Math.atan2(s, o)) : (this._x = Math.atan2(-u, f), this._y = 0)), this._order = e, !1 !== i && this.onChangeCallback(), this
        },
        setFromQuaternion: function () {
            var t = new o;
            return function (e, i, n) {
                return t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, i, n)
            }
        }(),
        setFromVector3: function (t, e) {
            return this.set(t.x, t.y, t.z, e || this._order)
        },
        reorder: function () {
            var t = new a;
            return function (e) {
                return t.setFromEuler(this), this.setFromQuaternion(t, e)
            }
        }(),
        equals: function (t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        },
        fromArray: function (t) {
            return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
        },
        toVector3: function (t) {
            return t ? t.set(this._x, this._y, this._z) : new s(this._x, this._y, this._z)
        },
        onChange: function (t) {
            return this.onChangeCallback = t, this
        },
        onChangeCallback: function () {
        }
    }), Object.assign(ut.prototype, {
        set: function (t) {
            this.mask = 1 << t | 0
        },
        enable: function (t) {
            this.mask |= 1 << t | 0
        },
        toggle: function (t) {
            this.mask ^= 1 << t | 0
        },
        disable: function (t) {
            this.mask &= ~(1 << t | 0)
        },
        test: function (t) {
            return 0 != (this.mask & t.mask)
        }
    });
    var bh = 0;
    lt.DefaultUp = new s(0, 1, 0), lt.DefaultMatrixAutoUpdate = !0, lt.prototype = Object.assign(Object.create(n.prototype), {
        constructor: lt,
        isObject3D: !0,
        onBeforeRender: function () {
        },
        onAfterRender: function () {
        },
        applyMatrix: function (t) {
            this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        applyQuaternion: function (t) {
            return this.quaternion.premultiply(t), this
        },
        setRotationFromAxisAngle: function (t, e) {
            this.quaternion.setFromAxisAngle(t, e)
        },
        setRotationFromEuler: function (t) {
            this.quaternion.setFromEuler(t, !0)
        },
        setRotationFromMatrix: function (t) {
            this.quaternion.setFromRotationMatrix(t)
        },
        setRotationFromQuaternion: function (t) {
            this.quaternion.copy(t)
        },
        rotateOnAxis: function () {
            var t = new a;
            return function (e, i) {
                return t.setFromAxisAngle(e, i), this.quaternion.multiply(t), this
            }
        }(),
        rotateOnWorldAxis: function () {
            var t = new a;
            return function (e, i) {
                return t.setFromAxisAngle(e, i), this.quaternion.premultiply(t), this
            }
        }(),
        rotateX: function () {
            var t = new s(1, 0, 0);
            return function (e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        rotateY: function () {
            var t = new s(0, 1, 0);
            return function (e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        rotateZ: function () {
            var t = new s(0, 0, 1);
            return function (e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        translateOnAxis: function () {
            var t = new s;
            return function (e, i) {
                return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(i)), this
            }
        }(),
        translateX: function () {
            var t = new s(1, 0, 0);
            return function (e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        translateY: function () {
            var t = new s(0, 1, 0);
            return function (e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        translateZ: function () {
            var t = new s(0, 0, 1);
            return function (e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        localToWorld: function (t) {
            return t.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: function () {
            var t = new o;
            return function (e) {
                return e.applyMatrix4(t.getInverse(this.matrixWorld))
            }
        }(),
        lookAt: function () {
            var t = new o,
                e = new s;
            return function (i, n, r) {
                i.isVector3 ? e.copy(i) : e.set(i, n, r), this.isCamera ? t.lookAt(this.position, e, this.up) : t.lookAt(e, this.position, this.up), this.quaternion.setFromRotationMatrix(t)
            }
        }(),
        add: function (t) {
            if (arguments.length > 1) {
                for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
                return this
            }
            return t === this ? this : (t && t.isObject3D && (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({
                type: "added"
            }), this.children.push(t)), this)
        },
        remove: function (t) {
            if (arguments.length > 1) {
                for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
                return this
            }
            var i = this.children.indexOf(t);
            return -1 !== i && (t.parent = null, t.dispatchEvent({
                type: "removed"
            }), this.children.splice(i, 1)), this
        },
        getObjectById: function (t) {
            return this.getObjectByProperty("id", t)
        },
        getObjectByName: function (t) {
            return this.getObjectByProperty("name", t)
        },
        getObjectByProperty: function (t, e) {
            if (this[t] === e) return this;
            for (var i = 0, n = this.children.length; i < n; i++) {
                var r = this.children[i],
                    o = r.getObjectByProperty(t, e);
                if (void 0 !== o) return o
            }
        },
        getWorldPosition: function (t) {
            var e = t || new s;
            return this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: function () {
            var t = new s,
                e = new s;
            return function (i) {
                var n = i || new a;
                return this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, n, e), n
            }
        }(),
        getWorldRotation: function () {
            var t = new a;
            return function (e) {
                var i = e || new ct;
                return this.getWorldQuaternion(t), i.setFromQuaternion(t, this.rotation.order, !1)
            }
        }(),
        getWorldScale: function () {
            var t = new s,
                e = new a;
            return function (i) {
                var n = i || new s;
                return this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, n), n
            }
        }(),
        getWorldDirection: function () {
            var t = new a;
            return function (e) {
                var i = e || new s;
                return this.getWorldQuaternion(t), i.set(0, 0, 1).applyQuaternion(t)
            }
        }(),
        raycast: function () {
        },
        traverse: function (t) {
            t(this);
            for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverse(t)
        },
        traverseVisible: function (t) {
            if (!1 !== this.visible) {
                t(this);
                for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverseVisible(t)
            }
        },
        traverseAncestors: function (t) {
            var e = this.parent;
            null !== e && (t(e), e.traverseAncestors(t))
        },
        updateMatrix: function () {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function (t) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
            for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].updateMatrixWorld(t)
        },
        toJSON: function (t) {
            function e(e, i) {
                return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t)), i.uuid
            }

            function i(t) {
                var e = [];
                for (var i in t) {
                    var n = t[i];
                    delete n.metadata, e.push(n)
                }
                return e
            }

            var n = void 0 === t || "string" == typeof t,
                r = {};
            n && (t = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {}
            }, r.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var o = {};
            if (o.uuid = this.uuid, o.type = this.type, "" !== this.name && (o.name = this.name), !0 === this.castShadow && (o.castShadow = !0), !0 === this.receiveShadow && (o.receiveShadow = !0), !1 === this.visible && (o.visible = !1), "{}" !== JSON.stringify(this.userData) && (o.userData = this.userData), o.matrix = this.matrix.toArray(), void 0 !== this.geometry) {
                o.geometry = e(t.geometries, this.geometry);
                var a = this.geometry.parameters;
                if (void 0 !== a && void 0 !== a.shapes) {
                    var s = a.shapes;
                    if (Array.isArray(s))
                        for (var h = 0, c = s.length; h < c; h++) {
                            var u = s[h];
                            e(t.shapes, u)
                        } else e(t.shapes, s)
                }
            }
            if (void 0 !== this.material)
                if (Array.isArray(this.material)) {
                    for (var l = [], h = 0, c = this.material.length; h < c; h++) l.push(e(t.materials, this.material[h]));
                    o.material = l
                } else o.material = e(t.materials, this.material);
            if (this.children.length > 0) {
                o.children = [];
                for (var h = 0; h < this.children.length; h++) o.children.push(this.children[h].toJSON(t).object)
            }
            if (n) {
                var p = i(t.geometries),
                    f = i(t.materials),
                    d = i(t.textures),
                    m = i(t.images),
                    s = i(t.shapes);
                p.length > 0 && (r.geometries = p), f.length > 0 && (r.materials = f), d.length > 0 && (r.textures = d), m.length > 0 && (r.images = m), s.length > 0 && (r.shapes = s)
            }
            return r.object = o, r
        },
        clone: function (t) {
            return (new this.constructor).copy(this, t)
        },
        copy: function (t, e) {
            if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
                for (var i = 0; i < t.children.length; i++) {
                    var n = t.children[i];
                    this.add(n.clone())
                }
            return this
        }
    }), pt.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: pt,
        isCamera: !0,
        copy: function (t, e) {
            return lt.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this
        },
        getWorldDirection: function () {
            var t = new a;
            return function (e) {
                var i = e || new s;
                return this.getWorldQuaternion(t), i.set(0, 0, -1).applyQuaternion(t)
            }
        }(),
        updateMatrixWorld: function (t) {
            lt.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld)
        },
        clone: function () {
            return (new this.constructor).copy(this)
        }
    }), ft.prototype = Object.assign(Object.create(pt.prototype), {
        constructor: ft,
        isOrthographicCamera: !0,
        copy: function (t, e) {
            return pt.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
        },
        setViewOffset: function (t, e, i, n, r, o) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = o, this.updateProjectionMatrix()
        },
        clearViewOffset: function () {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function () {
            var t = (this.right - this.left) / (2 * this.zoom),
                e = (this.top - this.bottom) / (2 * this.zoom),
                i = (this.right + this.left) / 2,
                n = (this.top + this.bottom) / 2,
                r = i - t,
                o = i + t,
                a = n + e,
                s = n - e;
            if (null !== this.view && this.view.enabled) {
                var h = this.zoom / (this.view.width / this.view.fullWidth),
                    c = this.zoom / (this.view.height / this.view.fullHeight),
                    u = (this.right - this.left) / this.view.width,
                    l = (this.top - this.bottom) / this.view.height;
                r += u * (this.view.offsetX / h), o = r + u * (this.view.width / h), a -= l * (this.view.offsetY / c), s = a - l * (this.view.height / c)
            }
            this.projectionMatrix.makeOrthographic(r, o, a, s, this.near, this.far)
        },
        toJSON: function (t) {
            var e = lt.prototype.toJSON.call(this, t);
            return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
        }
    }), Object.assign(dt.prototype, {
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
            for (var e = 0, i = t.vertexNormals.length; e < i; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
            for (var e = 0, i = t.vertexColors.length; e < i; e++) this.vertexColors[e] = t.vertexColors[e].clone();
            return this
        }
    });
    var wh = 0;
    mt.prototype = Object.assign(Object.create(n.prototype), {
        constructor: mt,
        isGeometry: !0,
        applyMatrix: function (t) {
            for (var e = (new h).getNormalMatrix(t), i = 0, n = this.vertices.length; i < n; i++) {
                this.vertices[i].applyMatrix4(t)
            }
            for (var i = 0, n = this.faces.length; i < n; i++) {
                var r = this.faces[i];
                r.normal.applyMatrix3(e).normalize();
                for (var o = 0, a = r.vertexNormals.length; o < a; o++) r.vertexNormals[o].applyMatrix3(e).normalize()
            }
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
        },
        rotateX: function () {
            var t = new o;
            return function (e) {
                return t.makeRotationX(e), this.applyMatrix(t), this
            }
        }(),
        rotateY: function () {
            var t = new o;
            return function (e) {
                return t.makeRotationY(e), this.applyMatrix(t), this
            }
        }(),
        rotateZ: function () {
            var t = new o;
            return function (e) {
                return t.makeRotationZ(e), this.applyMatrix(t), this
            }
        }(),
        translate: function () {
            var t = new o;
            return function (e, i, n) {
                return t.makeTranslation(e, i, n), this.applyMatrix(t), this
            }
        }(),
        scale: function () {
            var t = new o;
            return function (e, i, n) {
                return t.makeScale(e, i, n), this.applyMatrix(t), this
            }
        }(),
        lookAt: function () {
            var t = new lt;
            return function (e) {
                t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
            }
        }(),
        fromBufferGeometry: function (t) {
            function e(t, e, n, r) {
                var o = void 0 !== h ? [p[t].clone(), p[e].clone(), p[n].clone()] : [],
                    a = void 0 !== c ? [i.colors[t].clone(), i.colors[e].clone(), i.colors[n].clone()] : [],
                    s = new dt(t, e, n, o, a, r);
                i.faces.push(s), void 0 !== u && i.faceVertexUvs[0].push([f[t].clone(), f[e].clone(), f[n].clone()]), void 0 !== l && i.faceVertexUvs[1].push([d[t].clone(), d[e].clone(), d[n].clone()])
            }

            var i = this,
                n = null !== t.index ? t.index.array : void 0,
                o = t.attributes,
                a = o.position.array,
                h = void 0 !== o.normal ? o.normal.array : void 0,
                c = void 0 !== o.color ? o.color.array : void 0,
                u = void 0 !== o.uv ? o.uv.array : void 0,
                l = void 0 !== o.uv2 ? o.uv2.array : void 0;
            void 0 !== l && (this.faceVertexUvs[1] = []);
            for (var p = [], f = [], d = [], m = 0, v = 0; m < a.length; m += 3, v += 2) i.vertices.push(new s(a[m], a[m + 1], a[m + 2])), void 0 !== h && p.push(new s(h[m], h[m + 1], h[m + 2])), void 0 !== c && i.colors.push(new $(c[m], c[m + 1], c[m + 2])), void 0 !== u && f.push(new r(u[v], u[v + 1])), void 0 !== l && d.push(new r(l[v], l[v + 1]));
            var g = t.groups;
            if (g.length > 0)
                for (var m = 0; m < g.length; m++)
                    for (var y = g[m], _ = y.start, x = y.count, v = _, b = _ + x; v < b; v += 3) void 0 !== n ? e(n[v], n[v + 1], n[v + 2], y.materialIndex) : e(v, v + 1, v + 2, y.materialIndex);
            else if (void 0 !== n)
                for (var m = 0; m < n.length; m += 3) e(n[m], n[m + 1], n[m + 2]);
            else
                for (var m = 0; m < a.length / 3; m += 3) e(m, m + 1, m + 2);
            return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
        },
        center: function () {
            this.computeBoundingBox();
            var t = this.boundingBox.getCenter().negate();
            return this.translate(t.x, t.y, t.z), t
        },
        normalize: function () {
            this.computeBoundingSphere();
            var t = this.boundingSphere.center,
                e = this.boundingSphere.radius,
                i = 0 === e ? 1 : 1 / e,
                n = new o;
            return n.set(i, 0, 0, -i * t.x, 0, i, 0, -i * t.y, 0, 0, i, -i * t.z, 0, 0, 0, 1), this.applyMatrix(n), this
        },
        computeFaceNormals: function () {
            for (var t = new s, e = new s, i = 0, n = this.faces.length; i < n; i++) {
                var r = this.faces[i],
                    o = this.vertices[r.a],
                    a = this.vertices[r.b],
                    h = this.vertices[r.c];
                t.subVectors(h, a), e.subVectors(o, a), t.cross(e), t.normalize(), r.normal.copy(t)
            }
        },
        computeVertexNormals: function (t) {
            void 0 === t && (t = !0);
            var e, i, n, r, o, a;
            for (a = new Array(this.vertices.length), e = 0, i = this.vertices.length; e < i; e++) a[e] = new s;
            if (t) {
                var h, c, u, l = new s,
                    p = new s;
                for (n = 0, r = this.faces.length; n < r; n++) o = this.faces[n], h = this.vertices[o.a], c = this.vertices[o.b], u = this.vertices[o.c], l.subVectors(u, c), p.subVectors(h, c), l.cross(p), a[o.a].add(l), a[o.b].add(l), a[o.c].add(l)
            } else
                for (this.computeFaceNormals(), n = 0, r = this.faces.length; n < r; n++) o = this.faces[n], a[o.a].add(o.normal), a[o.b].add(o.normal), a[o.c].add(o.normal);
            for (e = 0, i = this.vertices.length; e < i; e++) a[e].normalize();
            for (n = 0, r = this.faces.length; n < r; n++) {
                o = this.faces[n];
                var f = o.vertexNormals;
                3 === f.length ? (f[0].copy(a[o.a]), f[1].copy(a[o.b]), f[2].copy(a[o.c])) : (f[0] = a[o.a].clone(), f[1] = a[o.b].clone(), f[2] = a[o.c].clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeFlatVertexNormals: function () {
            var t, e, i;
            for (this.computeFaceNormals(), t = 0, e = this.faces.length; t < e; t++) {
                i = this.faces[t];
                var n = i.vertexNormals;
                3 === n.length ? (n[0].copy(i.normal), n[1].copy(i.normal), n[2].copy(i.normal)) : (n[0] = i.normal.clone(), n[1] = i.normal.clone(), n[2] = i.normal.clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function () {
            var t, e, i, n, r;
            for (i = 0, n = this.faces.length; i < n; i++)
                for (r = this.faces[i], r.__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r.__originalVertexNormals = []), t = 0, e = r.vertexNormals.length; t < e; t++) r.__originalVertexNormals[t] ? r.__originalVertexNormals[t].copy(r.vertexNormals[t]) : r.__originalVertexNormals[t] = r.vertexNormals[t].clone();
            var o = new mt;
            for (o.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
                if (!this.morphNormals[t]) {
                    this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
                    var a, h, c = this.morphNormals[t].faceNormals,
                        u = this.morphNormals[t].vertexNormals;
                    for (i = 0, n = this.faces.length; i < n; i++) a = new s, h = {
                        a: new s,
                        b: new s,
                        c: new s
                    }, c.push(a), u.push(h)
                }
                var l = this.morphNormals[t];
                o.vertices = this.morphTargets[t].vertices, o.computeFaceNormals(), o.computeVertexNormals();
                var a, h;
                for (i = 0, n = this.faces.length; i < n; i++) r = this.faces[i], a = l.faceNormals[i], h = l.vertexNormals[i], a.copy(r.normal), h.a.copy(r.vertexNormals[0]), h.b.copy(r.vertexNormals[1]), h.c.copy(r.vertexNormals[2])
            }
            for (i = 0, n = this.faces.length; i < n; i++) r = this.faces[i], r.normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
        },
        computeLineDistances: function () {
            for (var t = 0, e = this.vertices, i = 0, n = e.length; i < n; i++) i > 0 && (t += e[i].distanceTo(e[i - 1])), this.lineDistances[i] = t
        },
        computeBoundingBox: function () {
            null === this.boundingBox && (this.boundingBox = new nt), this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function () {
            null === this.boundingSphere && (this.boundingSphere = new rt), this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function (t, e, i) {
            if (t && t.isGeometry) {
                var n, r = this.vertices.length,
                    o = this.vertices,
                    a = t.vertices,
                    s = this.faces,
                    c = t.faces,
                    u = this.faceVertexUvs[0],
                    l = t.faceVertexUvs[0],
                    p = this.colors,
                    f = t.colors;
                void 0 === i && (i = 0), void 0 !== e && (n = (new h).getNormalMatrix(e));
                for (var d = 0, m = a.length; d < m; d++) {
                    var v = a[d],
                        g = v.clone();
                    void 0 !== e && g.applyMatrix4(e), o.push(g)
                }
                for (var d = 0, m = f.length; d < m; d++) p.push(f[d].clone());
                for (d = 0, m = c.length; d < m; d++) {
                    var y, _, x, b = c[d],
                        w = b.vertexNormals,
                        M = b.vertexColors;
                    y = new dt(b.a + r, b.b + r, b.c + r), y.normal.copy(b.normal), void 0 !== n && y.normal.applyMatrix3(n).normalize();
                    for (var T = 0, S = w.length; T < S; T++) _ = w[T].clone(), void 0 !== n && _.applyMatrix3(n).normalize(), y.vertexNormals.push(_);
                    y.color.copy(b.color);
                    for (var T = 0, S = M.length; T < S; T++) x = M[T], y.vertexColors.push(x.clone());
                    y.materialIndex = b.materialIndex + i, s.push(y)
                }
                for (d = 0, m = l.length; d < m; d++) {
                    var A = l[d],
                        P = [];
                    if (void 0 !== A) {
                        for (var T = 0, S = A.length; T < S; T++) P.push(A[T].clone());
                        u.push(P)
                    }
                }
            }
        },
        mergeMesh: function (t) {
            t && t.isMesh && (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix))
        },
        mergeVertices: function () {
            var t, e, i, n, r, o, a, s, h = {},
                c = [],
                u = [],
                l = Math.pow(10, 4);
            for (i = 0, n = this.vertices.length; i < n; i++) t = this.vertices[i], e = Math.round(t.x * l) + "_" + Math.round(t.y * l) + "_" + Math.round(t.z * l), void 0 === h[e] ? (h[e] = i, c.push(this.vertices[i]), u[i] = c.length - 1) : u[i] = u[h[e]];
            var p = [];
            for (i = 0, n = this.faces.length; i < n; i++) {
                r = this.faces[i], r.a = u[r.a], r.b = u[r.b], r.c = u[r.c], o = [r.a, r.b, r.c];
                for (var f = 0; f < 3; f++)
                    if (o[f] === o[(f + 1) % 3]) {
                        p.push(i);
                        break
                    }
            }
            for (i = p.length - 1; i >= 0; i--) {
                var d = p[i];
                for (this.faces.splice(d, 1), a = 0, s = this.faceVertexUvs.length; a < s; a++) this.faceVertexUvs[a].splice(d, 1)
            }
            var m = this.vertices.length - c.length;
            return this.vertices = c, m
        },
        setFromPoints: function (t) {
            this.vertices = [];
            for (var e = 0, i = t.length; e < i; e++) {
                var n = t[e];
                this.vertices.push(new s(n.x, n.y, n.z || 0))
            }
            return this
        },
        sortFacesByMaterialIndex: function () {
            function t(t, e) {
                return t.materialIndex - e.materialIndex
            }

            for (var e = this.faces, i = e.length, n = 0; n < i; n++) e[n]._id = n;
            e.sort(t);
            var r, o, a = this.faceVertexUvs[0],
                s = this.faceVertexUvs[1];
            a && a.length === i && (r = []), s && s.length === i && (o = []);
            for (var n = 0; n < i; n++) {
                var h = e[n]._id;
                r && r.push(a[h]), o && o.push(s[h])
            }
            r && (this.faceVertexUvs[0] = r), o && (this.faceVertexUvs[1] = o)
        },
        toJSON: function () {
            function t(t, e, i) {
                return i ? t | 1 << e : t & ~(1 << e)
            }

            function e(t) {
                var e = t.x.toString() + t.y.toString() + t.z.toString();
                return void 0 !== p[e] ? p[e] : (p[e] = l.length / 3, l.push(t.x, t.y, t.z), p[e])
            }

            function i(t) {
                var e = t.r.toString() + t.g.toString() + t.b.toString();
                return void 0 !== d[e] ? d[e] : (d[e] = f.length, f.push(t.getHex()), d[e])
            }

            function n(t) {
                var e = t.x.toString() + t.y.toString();
                return void 0 !== v[e] ? v[e] : (v[e] = m.length / 2, m.push(t.x, t.y), v[e])
            }

            var r = {
                metadata: {
                    version: 4.5,
                    type: "Geometry",
                    generator: "Geometry.toJSON"
                }
            };
            if (r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), void 0 !== this.parameters) {
                var o = this.parameters;
                for (var a in o) void 0 !== o[a] && (r[a] = o[a]);
                return r
            }
            for (var s = [], h = 0; h < this.vertices.length; h++) {
                var c = this.vertices[h];
                s.push(c.x, c.y, c.z)
            }
            for (var u = [], l = [], p = {}, f = [], d = {}, m = [], v = {}, h = 0; h < this.faces.length; h++) {
                var g = this.faces[h],
                    y = void 0 !== this.faceVertexUvs[0][h],
                    _ = g.normal.length() > 0,
                    x = g.vertexNormals.length > 0,
                    b = 1 !== g.color.r || 1 !== g.color.g || 1 !== g.color.b,
                    w = g.vertexColors.length > 0,
                    M = 0;
                if (M = t(M, 0, 0), M = t(M, 1, !0), M = t(M, 2, !1), M = t(M, 3, y), M = t(M, 4, _), M = t(M, 5, x), M = t(M, 6, b), M = t(M, 7, w), u.push(M), u.push(g.a, g.b, g.c), u.push(g.materialIndex), y) {
                    var T = this.faceVertexUvs[0][h];
                    u.push(n(T[0]), n(T[1]), n(T[2]))
                }
                if (_ && u.push(e(g.normal)), x) {
                    var S = g.vertexNormals;
                    u.push(e(S[0]), e(S[1]), e(S[2]))
                }
                if (b && u.push(i(g.color)), w) {
                    var A = g.vertexColors;
                    u.push(i(A[0]), i(A[1]), i(A[2]))
                }
            }
            return r.data = {}, r.data.vertices = s, r.data.normals = l, f.length > 0 && (r.data.colors = f), m.length > 0 && (r.data.uvs = [m]), r.data.faces = u, r
        },
        clone: function () {
            return (new mt).copy(this)
        },
        copy: function (t) {
            var e, i, n, r, o, a;
            this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                []
            ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
            var s = t.vertices;
            for (e = 0, i = s.length; e < i; e++) this.vertices.push(s[e].clone());
            var h = t.colors;
            for (e = 0, i = h.length; e < i; e++) this.colors.push(h[e].clone());
            var c = t.faces;
            for (e = 0, i = c.length; e < i; e++) this.faces.push(c[e].clone());
            for (e = 0, i = t.faceVertexUvs.length; e < i; e++) {
                var u = t.faceVertexUvs[e];
                for (void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []), n = 0, r = u.length; n < r; n++) {
                    var l = u[n],
                        p = [];
                    for (o = 0, a = l.length; o < a; o++) {
                        var f = l[o];
                        p.push(f.clone())
                    }
                    this.faceVertexUvs[e].push(p)
                }
            }
            var d = t.morphTargets;
            for (e = 0, i = d.length; e < i; e++) {
                var m = {};
                if (m.name = d[e].name, void 0 !== d[e].vertices)
                    for (m.vertices = [], n = 0, r = d[e].vertices.length; n < r; n++) m.vertices.push(d[e].vertices[n].clone());
                if (void 0 !== d[e].normals)
                    for (m.normals = [], n = 0, r = d[e].normals.length; n < r; n++) m.normals.push(d[e].normals[n].clone());
                this.morphTargets.push(m)
            }
            var v = t.morphNormals;
            for (e = 0, i = v.length; e < i; e++) {
                var g = {};
                if (void 0 !== v[e].vertexNormals)
                    for (g.vertexNormals = [], n = 0, r = v[e].vertexNormals.length; n < r; n++) {
                        var y = v[e].vertexNormals[n],
                            _ = {};
                        _.a = y.a.clone(), _.b = y.b.clone(), _.c = y.c.clone(), g.vertexNormals.push(_)
                    }
                if (void 0 !== v[e].faceNormals)
                    for (g.faceNormals = [], n = 0, r = v[e].faceNormals.length; n < r; n++) g.faceNormals.push(v[e].faceNormals[n].clone());
                this.morphNormals.push(g)
            }
            var x = t.skinWeights;
            for (e = 0, i = x.length; e < i; e++) this.skinWeights.push(x[e].clone());
            var b = t.skinIndices;
            for (e = 0, i = b.length; e < i; e++) this.skinIndices.push(b[e].clone());
            var w = t.lineDistances;
            for (e = 0, i = w.length; e < i; e++) this.lineDistances.push(w[e]);
            var M = t.boundingBox;
            null !== M && (this.boundingBox = M.clone());
            var T = t.boundingSphere;
            return null !== T && (this.boundingSphere = T.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
        },
        dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), Object.defineProperty(vt.prototype, "needsUpdate", {
        set: function (t) {
            !0 === t && this.version++
        }
    }), Object.assign(vt.prototype, {
        isBufferAttribute: !0,
        setArray: function (t) {
            if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t
        },
        setDynamic: function (t) {
            return this.dynamic = t, this
        },
        copy: function (t) {
            return this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.dynamic = t.dynamic, this
        },
        copyAt: function (t, e, i) {
            t *= this.itemSize, i *= e.itemSize;
            for (var n = 0, r = this.itemSize; n < r; n++) this.array[t + n] = e.array[i + n];
            return this
        },
        copyArray: function (t) {
            return this.array.set(t), this
        },
        copyColorsArray: function (t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var o = t[n];
                void 0 === o && (o = new $), e[i++] = o.r, e[i++] = o.g, e[i++] = o.b
            }
            return this
        },
        copyIndicesArray: function (t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var o = t[n];
                e[i++] = o.a, e[i++] = o.b, e[i++] = o.c
            }
            return this
        },
        copyVector2sArray: function (t) {
            for (var e = this.array, i = 0, n = 0, o = t.length; n < o; n++) {
                var a = t[n];
                void 0 === a && (a = new r), e[i++] = a.x, e[i++] = a.y
            }
            return this
        },
        copyVector3sArray: function (t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var o = t[n];
                void 0 === o && (o = new s), e[i++] = o.x, e[i++] = o.y, e[i++] = o.z
            }
            return this
        },
        copyVector4sArray: function (t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var o = t[n];
                void 0 === o && (o = new u), e[i++] = o.x, e[i++] = o.y, e[i++] = o.z, e[i++] = o.w
            }
            return this
        },
        set: function (t, e) {
            return void 0 === e && (e = 0), this.array.set(t, e), this
        },
        getX: function (t) {
            return this.array[t * this.itemSize]
        },
        setX: function (t, e) {
            return this.array[t * this.itemSize] = e, this
        },
        getY: function (t) {
            return this.array[t * this.itemSize + 1]
        },
        setY: function (t, e) {
            return this.array[t * this.itemSize + 1] = e, this
        },
        getZ: function (t) {
            return this.array[t * this.itemSize + 2]
        },
        setZ: function (t, e) {
            return this.array[t * this.itemSize + 2] = e, this
        },
        getW: function (t) {
            return this.array[t * this.itemSize + 3]
        },
        setW: function (t, e) {
            return this.array[t * this.itemSize + 3] = e, this
        },
        setXY: function (t, e, i) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this
        },
        setXYZ: function (t, e, i, n) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this
        },
        setXYZW: function (t, e, i, n, r) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = r, this
        },
        onUpload: function (t) {
            return this.onUploadCallback = t, this
        },
        clone: function () {
            return new this.constructor(this.array, this.itemSize).copy(this)
        }
    }), gt.prototype = Object.create(vt.prototype), gt.prototype.constructor = gt, yt.prototype = Object.create(vt.prototype), yt.prototype.constructor = yt, _t.prototype = Object.create(vt.prototype), _t.prototype.constructor = _t, xt.prototype = Object.create(vt.prototype), xt.prototype.constructor = xt, bt.prototype = Object.create(vt.prototype), bt.prototype.constructor = bt, wt.prototype = Object.create(vt.prototype), wt.prototype.constructor = wt, Mt.prototype = Object.create(vt.prototype), Mt.prototype.constructor = Mt, Tt.prototype = Object.create(vt.prototype), Tt.prototype.constructor = Tt, St.prototype = Object.create(vt.prototype), St.prototype.constructor = St, Object.assign(At.prototype, {
        computeGroups: function (t) {
            for (var e, i = [], n = void 0, r = t.faces, o = 0; o < r.length; o++) {
                var a = r[o];
                a.materialIndex !== n && (n = a.materialIndex, void 0 !== e && (e.count = 3 * o - e.start, i.push(e)), e = {
                    start: 3 * o,
                    materialIndex: n
                })
            }
            void 0 !== e && (e.count = 3 * o - e.start, i.push(e)), this.groups = i
        },
        fromGeometry: function (t) {
            var e, i = t.faces,
                n = t.vertices,
                o = t.faceVertexUvs,
                a = o[0] && o[0].length > 0,
                s = o[1] && o[1].length > 0,
                h = t.morphTargets,
                c = h.length;
            if (c > 0) {
                e = [];
                for (var u = 0; u < c; u++) e[u] = [];
                this.morphTargets.position = e
            }
            var l, p = t.morphNormals,
                f = p.length;
            if (f > 0) {
                l = [];
                for (var u = 0; u < f; u++) l[u] = [];
                this.morphTargets.normal = l
            }
            for (var d = t.skinIndices, m = t.skinWeights, v = d.length === n.length, g = m.length === n.length, u = 0; u < i.length; u++) {
                var y = i[u];
                this.vertices.push(n[y.a], n[y.b], n[y.c]);
                var _ = y.vertexNormals;
                if (3 === _.length) this.normals.push(_[0], _[1], _[2]);
                else {
                    var x = y.normal;
                    this.normals.push(x, x, x)
                }
                var b = y.vertexColors;
                if (3 === b.length) this.colors.push(b[0], b[1], b[2]);
                else {
                    var w = y.color;
                    this.colors.push(w, w, w)
                }
                if (!0 === a) {
                    var M = o[0][u];
                    void 0 !== M ? this.uvs.push(M[0], M[1], M[2]) : this.uvs.push(new r, new r, new r)
                }
                if (!0 === s) {
                    var M = o[1][u];
                    void 0 !== M ? this.uvs2.push(M[0], M[1], M[2]) : this.uvs2.push(new r, new r, new r)
                }
                for (var T = 0; T < c; T++) {
                    var S = h[T].vertices;
                    e[T].push(S[y.a], S[y.b], S[y.c])
                }
                for (var T = 0; T < f; T++) {
                    var A = p[T].vertexNormals[u];
                    l[T].push(A.a, A.b, A.c)
                }
                v && this.skinIndices.push(d[y.a], d[y.b], d[y.c]), g && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
            }
            return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
        }
    });
    var Mh = 1;
    Et.prototype = Object.assign(Object.create(n.prototype), {
        constructor: Et,
        isBufferGeometry: !0,
        getIndex: function () {
            return this.index
        },
        setIndex: function (t) {
            Array.isArray(t) ? this.index = new (Pt(t) > 65535 ? Mt : bt)(t, 1) : this.index = t
        },
        addAttribute: function (t, e) {
            return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? void this.setIndex(e) : (this.attributes[t] = e, this) : void this.addAttribute(t, new vt(arguments[1], arguments[2]))
        },
        getAttribute: function (t) {
            return this.attributes[t]
        },
        removeAttribute: function (t) {
            return delete this.attributes[t], this
        },
        addGroup: function (t, e, i) {
            this.groups.push({
                start: t,
                count: e,
                materialIndex: void 0 !== i ? i : 0
            })
        },
        clearGroups: function () {
            this.groups = []
        },
        setDrawRange: function (t, e) {
            this.drawRange.start = t, this.drawRange.count = e
        },
        applyMatrix: function (t) {
            var e = this.attributes.position;
            void 0 !== e && (t.applyToBufferAttribute(e), e.needsUpdate = !0);
            var i = this.attributes.normal;
            if (void 0 !== i) {
                (new h).getNormalMatrix(t).applyToBufferAttribute(i), i.needsUpdate = !0
            }
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
        },
        rotateX: function () {
            var t = new o;
            return function (e) {
                return t.makeRotationX(e), this.applyMatrix(t), this
            }
        }(),
        rotateY: function () {
            var t = new o;
            return function (e) {
                return t.makeRotationY(e), this.applyMatrix(t), this
            }
        }(),
        rotateZ: function () {
            var t = new o;
            return function (e) {
                return t.makeRotationZ(e), this.applyMatrix(t), this
            }
        }(),
        translate: function () {
            var t = new o;
            return function (e, i, n) {
                return t.makeTranslation(e, i, n), this.applyMatrix(t), this
            }
        }(),
        scale: function () {
            var t = new o;
            return function (e, i, n) {
                return t.makeScale(e, i, n), this.applyMatrix(t), this
            }
        }(),
        lookAt: function () {
            var t = new lt;
            return function (e) {
                t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
            }
        }(),
        center: function () {
            this.computeBoundingBox();
            var t = this.boundingBox.getCenter().negate();
            return this.translate(t.x, t.y, t.z), t
        },
        setFromObject: function (t) {
            var e = t.geometry;
            if (t.isPoints || t.isLine) {
                var i = new Tt(3 * e.vertices.length, 3),
                    n = new Tt(3 * e.colors.length, 3);
                if (this.addAttribute("position", i.copyVector3sArray(e.vertices)), this.addAttribute("color", n.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
                    var r = new Tt(e.lineDistances.length, 1);
                    this.addAttribute("lineDistance", r.copyArray(e.lineDistances))
                }
                null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
            } else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
            return this
        },
        setFromPoints: function (t) {
            for (var e = [], i = 0, n = t.length; i < n; i++) {
                var r = t[i];
                e.push(r.x, r.y, r.z || 0)
            }
            return this.addAttribute("position", new Tt(e, 3)), this
        },
        updateFromObject: function (t) {
            var e = t.geometry;
            if (t.isMesh) {
                var i = e.__directGeometry;
                if (!0 === e.elementsNeedUpdate && (i = void 0, e.elementsNeedUpdate = !1), void 0 === i) return this.fromGeometry(e);
                i.verticesNeedUpdate = e.verticesNeedUpdate, i.normalsNeedUpdate = e.normalsNeedUpdate, i.colorsNeedUpdate = e.colorsNeedUpdate, i.uvsNeedUpdate = e.uvsNeedUpdate, i.groupsNeedUpdate = e.groupsNeedUpdate, e.verticesNeedUpdate = !1, e.normalsNeedUpdate = !1, e.colorsNeedUpdate = !1, e.uvsNeedUpdate = !1, e.groupsNeedUpdate = !1, e = i
            }
            var n;
            return !0 === e.verticesNeedUpdate && (n = this.attributes.position, void 0 !== n && (n.copyVector3sArray(e.vertices), n.needsUpdate = !0), e.verticesNeedUpdate = !1), !0 === e.normalsNeedUpdate && (n = this.attributes.normal, void 0 !== n && (n.copyVector3sArray(e.normals), n.needsUpdate = !0), e.normalsNeedUpdate = !1), !0 === e.colorsNeedUpdate && (n = this.attributes.color, void 0 !== n && (n.copyColorsArray(e.colors), n.needsUpdate = !0), e.colorsNeedUpdate = !1), e.uvsNeedUpdate && (n = this.attributes.uv, void 0 !== n && (n.copyVector2sArray(e.uvs), n.needsUpdate = !0), e.uvsNeedUpdate = !1), e.lineDistancesNeedUpdate && (n = this.attributes.lineDistance, void 0 !== n && (n.copyArray(e.lineDistances), n.needsUpdate = !0), e.lineDistancesNeedUpdate = !1), e.groupsNeedUpdate && (e.computeGroups(t.geometry), this.groups = e.groups, e.groupsNeedUpdate = !1), this
        },
        fromGeometry: function (t) {
            return t.__directGeometry = (new At).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
        },
        fromDirectGeometry: function (t) {
            var e = new Float32Array(3 * t.vertices.length);
            if (this.addAttribute("position", new vt(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
                var i = new Float32Array(3 * t.normals.length);
                this.addAttribute("normal", new vt(i, 3).copyVector3sArray(t.normals))
            }
            if (t.colors.length > 0) {
                var n = new Float32Array(3 * t.colors.length);
                this.addAttribute("color", new vt(n, 3).copyColorsArray(t.colors))
            }
            if (t.uvs.length > 0) {
                var r = new Float32Array(2 * t.uvs.length);
                this.addAttribute("uv", new vt(r, 2).copyVector2sArray(t.uvs))
            }
            if (t.uvs2.length > 0) {
                var o = new Float32Array(2 * t.uvs2.length);
                this.addAttribute("uv2", new vt(o, 2).copyVector2sArray(t.uvs2))
            }
            if (t.indices.length > 0) {
                var a = Pt(t.indices) > 65535 ? Uint32Array : Uint16Array,
                    s = new a(3 * t.indices.length);
                this.setIndex(new vt(s, 1).copyIndicesArray(t.indices))
            }
            this.groups = t.groups;
            for (var h in t.morphTargets) {
                for (var c = [], u = t.morphTargets[h], l = 0, p = u.length; l < p; l++) {
                    var f = u[l],
                        d = new Tt(3 * f.length, 3);
                    c.push(d.copyVector3sArray(f))
                }
                this.morphAttributes[h] = c
            }
            if (t.skinIndices.length > 0) {
                var m = new Tt(4 * t.skinIndices.length, 4);
                this.addAttribute("skinIndex", m.copyVector4sArray(t.skinIndices))
            }
            if (t.skinWeights.length > 0) {
                var v = new Tt(4 * t.skinWeights.length, 4);
                this.addAttribute("skinWeight", v.copyVector4sArray(t.skinWeights))
            }
            return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
        },
        computeBoundingBox: function () {
            null === this.boundingBox && (this.boundingBox = new nt);
            var t = this.attributes.position;
            void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(), isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)
        },
        computeBoundingSphere: function () {
            var t = new nt,
                e = new s;
            return function () {
                null === this.boundingSphere && (this.boundingSphere = new rt);
                var i = this.attributes.position;
                if (i) {
                    var n = this.boundingSphere.center;
                    t.setFromBufferAttribute(i), t.getCenter(n);
                    for (var r = 0, o = 0, a = i.count; o < a; o++) e.x = i.getX(o), e.y = i.getY(o), e.z = i.getZ(o), r = Math.max(r, n.distanceToSquared(e));
                    this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius)
                }
            }
        }(),
        computeFaceNormals: function () {
        },
        computeVertexNormals: function () {
            var t = this.index,
                e = this.attributes,
                i = this.groups;
            if (e.position) {
                var n = e.position.array;
                if (void 0 === e.normal) this.addAttribute("normal", new vt(new Float32Array(n.length), 3));
                else
                    for (var r = e.normal.array, o = 0, a = r.length; o < a; o++) r[o] = 0;
                var h, c, u, l = e.normal.array,
                    p = new s,
                    f = new s,
                    d = new s,
                    m = new s,
                    v = new s;
                if (t) {
                    var g = t.array;
                    0 === i.length && this.addGroup(0, g.length);
                    for (var y = 0, _ = i.length; y < _; ++y)
                        for (var x = i[y], b = x.start, w = x.count, o = b, a = b + w; o < a; o += 3) h = 3 * g[o + 0], c = 3 * g[o + 1], u = 3 * g[o + 2], p.fromArray(n, h), f.fromArray(n, c), d.fromArray(n, u), m.subVectors(d, f), v.subVectors(p, f), m.cross(v), l[h] += m.x, l[h + 1] += m.y, l[h + 2] += m.z, l[c] += m.x, l[c + 1] += m.y, l[c + 2] += m.z, l[u] += m.x, l[u + 1] += m.y, l[u + 2] += m.z
                } else
                    for (var o = 0, a = n.length; o < a; o += 9) p.fromArray(n, o), f.fromArray(n, o + 3), d.fromArray(n, o + 6), m.subVectors(d, f), v.subVectors(p, f), m.cross(v), l[o] = m.x, l[o + 1] = m.y, l[o + 2] = m.z, l[o + 3] = m.x, l[o + 4] = m.y, l[o + 5] = m.z, l[o + 6] = m.x, l[o + 7] = m.y, l[o + 8] = m.z;
                this.normalizeNormals(), e.normal.needsUpdate = !0
            }
        },
        merge: function (t, e) {
            if (t && t.isBufferGeometry) {
                void 0 === e && (e = 0);
                var i = this.attributes;
                for (var n in i)
                    if (void 0 !== t.attributes[n])
                        for (var r = i[n], o = r.array, a = t.attributes[n], s = a.array, h = a.itemSize, c = 0, u = h * e; c < s.length; c++, u++) o[u] = s[c];
                return this
            }
        },
        normalizeNormals: function () {
            var t = new s;
            return function () {
                for (var e = this.attributes.normal, i = 0, n = e.count; i < n; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.normalize(), e.setXYZ(i, t.x, t.y, t.z)
            }
        }(),
        toNonIndexed: function () {
            if (null === this.index) return this;
            var t = new Et,
                e = this.index.array,
                i = this.attributes;
            for (var n in i) {
                for (var r = i[n], o = r.array, a = r.itemSize, s = new o.constructor(e.length * a), h = 0, c = 0, u = 0, l = e.length; u < l; u++) {
                    h = e[u] * a;
                    for (var p = 0; p < a; p++) s[c++] = o[h++]
                }
                t.addAttribute(n, new vt(s, a))
            }
            return t
        },
        toJSON: function () {
            var t = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
                var e = this.parameters;
                for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
                return t
            }
            t.data = {
                attributes: {}
            };
            var n = this.index;
            if (null !== n) {
                var r = Array.prototype.slice.call(n.array);
                t.data.index = {
                    type: n.array.constructor.name,
                    array: r
                }
            }
            var o = this.attributes;
            for (var i in o) {
                var a = o[i],
                    r = Array.prototype.slice.call(a.array);
                t.data.attributes[i] = {
                    itemSize: a.itemSize,
                    type: a.array.constructor.name,
                    array: r,
                    normalized: a.normalized
                }
            }
            var s = this.groups;
            s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
            var h = this.boundingSphere;
            return null !== h && (t.data.boundingSphere = {
                center: h.center.toArray(),
                radius: h.radius
            }), t
        },
        clone: function () {
            return (new Et).copy(this)
        },
        copy: function (t) {
            var e, i, n;
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
            var r = t.index;
            null !== r && this.setIndex(r.clone());
            var o = t.attributes;
            for (e in o) {
                var a = o[e];
                this.addAttribute(e, a.clone())
            }
            var s = t.morphAttributes;
            for (e in s) {
                var h = [],
                    c = s[e];
                for (i = 0, n = c.length; i < n; i++) h.push(c[i].clone());
                this.morphAttributes[e] = h
            }
            var u = t.groups;
            for (i = 0, n = u.length; i < n; i++) {
                var l = u[i];
                this.addGroup(l.start, l.count, l.materialIndex)
            }
            var p = t.boundingBox;
            null !== p && (this.boundingBox = p.clone());
            var f = t.boundingSphere;
            return null !== f && (this.boundingSphere = f.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this
        },
        dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), Ct.prototype = Object.create(mt.prototype), Ct.prototype.constructor = Ct, Lt.prototype = Object.create(Et.prototype), Lt.prototype.constructor = Lt, Nt.prototype = Object.create(mt.prototype), Nt.prototype.constructor = Nt, Ot.prototype = Object.create(Et.prototype), Ot.prototype.constructor = Ot, Rt.prototype = Object.create(tt.prototype), Rt.prototype.constructor = Rt, Rt.prototype.isMeshBasicMaterial = !0, Rt.prototype.copy = function (t) {
        return tt.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
    }, It.prototype = Object.create(tt.prototype), It.prototype.constructor = It, It.prototype.isShaderMaterial = !0, It.prototype.copy = function (t) {
        return tt.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = gh.clone(t.uniforms), this.defines = t.defines, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
    }, It.prototype.toJSON = function (t) {
        var e = tt.prototype.toJSON.call(this, t);
        return e.uniforms = this.uniforms, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e
    }, Object.assign(Dt.prototype, {
        set: function (t, e) {
            return this.origin.copy(t), this.direction.copy(e), this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.origin.copy(t.origin), this.direction.copy(t.direction), this
        },
        at: function (t, e) {
            return (e || new s).copy(this.direction).multiplyScalar(t).add(this.origin)
        },
        lookAt: function (t) {
            return this.direction.copy(t).sub(this.origin).normalize(), this
        },
        recast: function () {
            var t = new s;
            return function (e) {
                return this.origin.copy(this.at(e, t)), this
            }
        }(),
        closestPointToPoint: function (t, e) {
            var i = e || new s;
            i.subVectors(t, this.origin);
            var n = i.dot(this.direction);
            return n < 0 ? i.copy(this.origin) : i.copy(this.direction).multiplyScalar(n).add(this.origin)
        },
        distanceToPoint: function (t) {
            return Math.sqrt(this.distanceSqToPoint(t))
        },
        distanceSqToPoint: function () {
            var t = new s;
            return function (e) {
                var i = t.subVectors(e, this.origin).dot(this.direction);
                return i < 0 ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(i).add(this.origin), t.distanceToSquared(e))
            }
        }(),
        distanceSqToSegment: function () {
            var t = new s,
                e = new s,
                i = new s;
            return function (n, r, o, a) {
                t.copy(n).add(r).multiplyScalar(.5), e.copy(r).sub(n).normalize(), i.copy(this.origin).sub(t);
                var s, h, c, u, l = .5 * n.distanceTo(r),
                    p = -this.direction.dot(e),
                    f = i.dot(this.direction),
                    d = -i.dot(e),
                    m = i.lengthSq(),
                    v = Math.abs(1 - p * p);
                if (v > 0)
                    if (s = p * d - f, h = p * f - d, u = l * v, s >= 0)
                        if (h >= -u)
                            if (h <= u) {
                                var g = 1 / v;
                                s *= g, h *= g, c = s * (s + p * h + 2 * f) + h * (p * s + h + 2 * d) + m
                            } else h = l, s = Math.max(0, -(p * h + f)), c = -s * s + h * (h + 2 * d) + m;
                        else h = -l, s = Math.max(0, -(p * h + f)), c = -s * s + h * (h + 2 * d) + m;
                    else h <= -u ? (s = Math.max(0, -(-p * l + f)), h = s > 0 ? -l : Math.min(Math.max(-l, -d), l), c = -s * s + h * (h + 2 * d) + m) : h <= u ? (s = 0, h = Math.min(Math.max(-l, -d), l), c = h * (h + 2 * d) + m) : (s = Math.max(0, -(p * l + f)), h = s > 0 ? l : Math.min(Math.max(-l, -d), l), c = -s * s + h * (h + 2 * d) + m);
                else h = p > 0 ? -l : l, s = Math.max(0, -(p * h + f)), c = -s * s + h * (h + 2 * d) + m;
                return o && o.copy(this.direction).multiplyScalar(s).add(this.origin), a && a.copy(e).multiplyScalar(h).add(t), c
            }
        }(),
        intersectSphere: function () {
            var t = new s;
            return function (e, i) {
                t.subVectors(e.center, this.origin);
                var n = t.dot(this.direction),
                    r = t.dot(t) - n * n,
                    o = e.radius * e.radius;
                if (r > o) return null;
                var a = Math.sqrt(o - r),
                    s = n - a,
                    h = n + a;
                return s < 0 && h < 0 ? null : s < 0 ? this.at(h, i) : this.at(s, i)
            }
        }(),
        intersectsSphere: function (t) {
            return this.distanceToPoint(t.center) <= t.radius
        },
        distanceToPlane: function (t) {
            var e = t.normal.dot(this.direction);
            if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            var i = -(this.origin.dot(t.normal) + t.constant) / e;
            return i >= 0 ? i : null
        },
        intersectPlane: function (t, e) {
            var i = this.distanceToPlane(t);
            return null === i ? null : this.at(i, e)
        },
        intersectsPlane: function (t) {
            var e = t.distanceToPoint(this.origin);
            return 0 === e || t.normal.dot(this.direction) * e < 0
        },
        intersectBox: function (t, e) {
            var i, n, r, o, a, s, h = 1 / this.direction.x,
                c = 1 / this.direction.y,
                u = 1 / this.direction.z,
                l = this.origin;
            return h >= 0 ? (i = (t.min.x - l.x) * h, n = (t.max.x - l.x) * h) : (i = (t.max.x - l.x) * h, n = (t.min.x - l.x) * h), c >= 0 ? (r = (t.min.y - l.y) * c, o = (t.max.y - l.y) * c) : (r = (t.max.y - l.y) * c, o = (t.min.y - l.y) * c), i > o || r > n ? null : ((r > i || i !== i) && (i = r), (o < n || n !== n) && (n = o), u >= 0 ? (a = (t.min.z - l.z) * u, s = (t.max.z - l.z) * u) : (a = (t.max.z - l.z) * u, s = (t.min.z - l.z) * u), i > s || a > n ? null : ((a > i || i !== i) && (i = a), (s < n || n !== n) && (n = s), n < 0 ? null : this.at(i >= 0 ? i : n, e)))
        },
        intersectsBox: function () {
            var t = new s;
            return function (e) {
                return null !== this.intersectBox(e, t)
            }
        }(),
        intersectTriangle: function () {
            var t = new s,
                e = new s,
                i = new s,
                n = new s;
            return function (r, o, a, s, h) {
                e.subVectors(o, r), i.subVectors(a, r), n.crossVectors(e, i);
                var c, u = this.direction.dot(n);
                if (u > 0) {
                    if (s) return null;
                    c = 1
                } else {
                    if (!(u < 0)) return null;
                    c = -1, u = -u
                }
                t.subVectors(this.origin, r);
                var l = c * this.direction.dot(i.crossVectors(t, i));
                if (l < 0) return null;
                var p = c * this.direction.dot(e.cross(t));
                if (p < 0) return null;
                if (l + p > u) return null;
                var f = -c * t.dot(n);
                return f < 0 ? null : this.at(f / u, h)
            }
        }(),
        applyMatrix4: function (t) {
            return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
        },
        equals: function (t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction)
        }
    }), Object.assign(kt.prototype, {
        set: function (t, e) {
            return this.start.copy(t), this.end.copy(e), this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.start.copy(t.start), this.end.copy(t.end), this
        },
        getCenter: function (t) {
            return (t || new s).addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function (t) {
            return (t || new s).subVectors(this.end, this.start)
        },
        distanceSq: function () {
            return this.start.distanceToSquared(this.end)
        },
        distance: function () {
            return this.start.distanceTo(this.end)
        },
        at: function (t, e) {
            var i = e || new s;
            return this.delta(i).multiplyScalar(t).add(this.start)
        },
        closestPointToPointParameter: function () {
            var t = new s,
                e = new s;
            return function (i, n) {
                t.subVectors(i, this.start), e.subVectors(this.end, this.start);
                var r = e.dot(e),
                    o = e.dot(t),
                    a = o / r;
                return n && (a = ah.clamp(a, 0, 1)), a
            }
        }(),
        closestPointToPoint: function (t, e, i) {
            var n = this.closestPointToPointParameter(t, e),
                r = i || new s;
            return this.delta(r).multiplyScalar(n).add(this.start)
        },
        applyMatrix4: function (t) {
            return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
        },
        equals: function (t) {
            return t.start.equals(this.start) && t.end.equals(this.end)
        }
    }), Object.assign(zt, {
        normal: function () {
            var t = new s;
            return function (e, i, n, r) {
                var o = r || new s;
                o.subVectors(n, i), t.subVectors(e, i), o.cross(t);
                var a = o.lengthSq();
                return a > 0 ? o.multiplyScalar(1 / Math.sqrt(a)) : o.set(0, 0, 0)
            }
        }(),
        barycoordFromPoint: function () {
            var t = new s,
                e = new s,
                i = new s;
            return function (n, r, o, a, h) {
                t.subVectors(a, r), e.subVectors(o, r), i.subVectors(n, r);
                var c = t.dot(t),
                    u = t.dot(e),
                    l = t.dot(i),
                    p = e.dot(e),
                    f = e.dot(i),
                    d = c * p - u * u,
                    m = h || new s;
                if (0 === d) return m.set(-2, -1, -1);
                var v = 1 / d,
                    g = (p * l - u * f) * v,
                    y = (c * f - u * l) * v;
                return m.set(1 - g - y, y, g)
            }
        }(),
        containsPoint: function () {
            var t = new s;
            return function (e, i, n, r) {
                var o = zt.barycoordFromPoint(e, i, n, r, t);
                return o.x >= 0 && o.y >= 0 && o.x + o.y <= 1
            }
        }()
    }), Object.assign(zt.prototype, {
        set: function (t, e, i) {
            return this.a.copy(t), this.b.copy(e), this.c.copy(i), this
        },
        setFromPointsAndIndices: function (t, e, i, n) {
            return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
        },
        area: function () {
            var t = new s,
                e = new s;
            return function () {
                return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e).length()
            }
        }(),
        midpoint: function (t) {
            return (t || new s).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        normal: function (t) {
            return zt.normal(this.a, this.b, this.c, t)
        },
        plane: function (t) {
            return (t || new ot).setFromCoplanarPoints(this.a, this.b, this.c)
        },
        barycoordFromPoint: function (t, e) {
            return zt.barycoordFromPoint(t, this.a, this.b, this.c, e)
        },
        containsPoint: function (t) {
            return zt.containsPoint(t, this.a, this.b, this.c)
        },
        closestPointToPoint: function () {
            var t = new ot,
                e = [new kt, new kt, new kt],
                i = new s,
                n = new s;
            return function (r, o) {
                var a = o || new s,
                    h = 1 / 0;
                if (t.setFromCoplanarPoints(this.a, this.b, this.c), t.projectPoint(r, i), !0 === this.containsPoint(i)) a.copy(i);
                else {
                    e[0].set(this.a, this.b), e[1].set(this.b, this.c), e[2].set(this.c, this.a);
                    for (var c = 0; c < e.length; c++) {
                        e[c].closestPointToPoint(i, !0, n);
                        var u = i.distanceToSquared(n);
                        u < h && (h = u, a.copy(n))
                    }
                }
                return a
            }
        }(),
        equals: function (t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        }
    }), Ut.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: Ut,
        isMesh: !0,
        setDrawMode: function (t) {
            this.drawMode = t
        },
        copy: function (t) {
            return lt.prototype.copy.call(this, t), this.drawMode = t.drawMode, void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this
        },
        updateMorphTargets: function () {
            var t, e, i, n = this.geometry;
            if (n.isBufferGeometry) {
                var r = n.morphAttributes,
                    o = Object.keys(r);
                if (o.length > 0) {
                    var a = r[o[0]];
                    if (void 0 !== a)
                        for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = a.length; t < e; t++) i = a[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
                }
            } else {
                var s = n.morphTargets;
                if (void 0 !== s && s.length > 0)
                    for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = s.length; t < e; t++) i = s[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
            }
        },
        raycast: function () {
            function t(t, e, i, n, r, o, a) {
                return zt.barycoordFromPoint(t, e, i, n, y), r.multiplyScalar(y.x), o.multiplyScalar(y.y), a.multiplyScalar(y.z), r.add(o).add(a), r.clone()
            }

            function e(t, e, i, n, r, o, a, s) {
                if (null === (e.side === ea ? n.intersectTriangle(a, o, r, !0, s) : n.intersectTriangle(r, o, a, e.side !== ia, s))) return null;
                x.copy(s), x.applyMatrix4(t.matrixWorld);
                var h = i.ray.origin.distanceTo(x);
                return h < i.near || h > i.far ? null : {
                    distance: h,
                    point: x.clone(),
                    object: t
                }
            }

            function i(i, n, r, o, a, s, h, p) {
                c.fromBufferAttribute(o, s), u.fromBufferAttribute(o, h), l.fromBufferAttribute(o, p);
                var f = e(i, i.material, n, r, c, u, l, _);
                return f && (a && (m.fromBufferAttribute(a, s), v.fromBufferAttribute(a, h), g.fromBufferAttribute(a, p), f.uv = t(_, c, u, l, m, v, g)), f.face = new dt(s, h, p, zt.normal(c, u, l)), f.faceIndex = s), f
            }

            var n = new o,
                a = new Dt,
                h = new rt,
                c = new s,
                u = new s,
                l = new s,
                p = new s,
                f = new s,
                d = new s,
                m = new r,
                v = new r,
                g = new r,
                y = new s,
                _ = new s,
                x = new s;
            return function (r, o) {
                var s = this.geometry,
                    y = this.material,
                    x = this.matrixWorld;
                if (void 0 !== y && (null === s.boundingSphere && s.computeBoundingSphere(), h.copy(s.boundingSphere), h.applyMatrix4(x), !1 !== r.ray.intersectsSphere(h) && (n.getInverse(x), a.copy(r.ray).applyMatrix4(n), null === s.boundingBox || !1 !== a.intersectsBox(s.boundingBox)))) {
                    var b;
                    if (s.isBufferGeometry) {
                        var w, M, T, S, A, P = s.index,
                            E = s.attributes.position,
                            C = s.attributes.uv;
                        if (null !== P)
                            for (S = 0, A = P.count; S < A; S += 3) w = P.getX(S), M = P.getX(S + 1), T = P.getX(S + 2), (b = i(this, r, a, E, C, w, M, T)) && (b.faceIndex = Math.floor(S / 3), o.push(b));
                        else if (void 0 !== E)
                            for (S = 0, A = E.count; S < A; S += 3) w = S, M = S + 1, T = S + 2, (b = i(this, r, a, E, C, w, M, T)) && (b.index = w, o.push(b))
                    } else if (s.isGeometry) {
                        var L, N, O, R, I = Array.isArray(y),
                            D = s.vertices,
                            k = s.faces,
                            z = s.faceVertexUvs[0];
                        z.length > 0 && (R = z);
                        for (var U = 0, F = k.length; U < F; U++) {
                            var B = k[U],
                                G = I ? y[B.materialIndex] : y;
                            if (void 0 !== G) {
                                if (L = D[B.a], N = D[B.b], O = D[B.c], !0 === G.morphTargets) {
                                    var j = s.morphTargets,
                                        V = this.morphTargetInfluences;
                                    c.set(0, 0, 0), u.set(0, 0, 0), l.set(0, 0, 0);
                                    for (var W = 0, H = j.length; W < H; W++) {
                                        var X = V[W];
                                        if (0 !== X) {
                                            var q = j[W].vertices;
                                            c.addScaledVector(p.subVectors(q[B.a], L), X), u.addScaledVector(f.subVectors(q[B.b], N), X), l.addScaledVector(d.subVectors(q[B.c], O), X)
                                        }
                                    }
                                    c.add(L), u.add(N), l.add(O), L = c, N = u, O = l
                                }
                                if (b = e(this, G, r, a, L, N, O, _)) {
                                    if (R && R[U]) {
                                        var Y = R[U];
                                        m.copy(Y[0]), v.copy(Y[1]), g.copy(Y[2]), b.uv = t(_, L, N, O, m, v, g)
                                    }
                                    b.face = B, b.faceIndex = U, o.push(b)
                                }
                            }
                        }
                    }
                }
            }
        }(),
        clone: function () {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    });
    var Th = 0;
    ve.prototype = Object.assign(Object.create(pt.prototype), {
        constructor: ve,
        isPerspectiveCamera: !0,
        copy: function (t, e) {
            return pt.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
        },
        setFocalLength: function (t) {
            var e = .5 * this.getFilmHeight() / t;
            this.fov = 2 * ah.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
        },
        getFocalLength: function () {
            var t = Math.tan(.5 * ah.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / t
        },
        getEffectiveFOV: function () {
            return 2 * ah.RAD2DEG * Math.atan(Math.tan(.5 * ah.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function () {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function () {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function (t, e, i, n, r, o) {
            this.aspect = t / e, null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = o, this.updateProjectionMatrix()
        },
        clearViewOffset: function () {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function () {
            var t = this.near,
                e = t * Math.tan(.5 * ah.DEG2RAD * this.fov) / this.zoom,
                i = 2 * e,
                n = this.aspect * i,
                r = -.5 * n,
                o = this.view;
            if (null !== this.view && this.view.enabled) {
                var a = o.fullWidth,
                    s = o.fullHeight;
                r += o.offsetX * n / a, e -= o.offsetY * i / s, n *= o.width / a, i *= o.height / s
            }
            var h = this.filmOffset;
            0 !== h && (r += t * h / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, e, e - i, t, this.far)
        },
        toJSON: function (t) {
            var e = lt.prototype.toJSON.call(this, t);
            return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
        }
    }), ge.prototype = Object.assign(Object.create(ve.prototype), {
        constructor: ge,
        isArrayCamera: !0
    }), Me.prototype.isFogExp2 = !0, Me.prototype.clone = function () {
        return new Me(this.color.getHex(), this.density)
    }, Me.prototype.toJSON = function () {
        return {
            type: "FogExp2",
            color: this.color.getHex(),
            density: this.density
        }
    }, Te.prototype.isFog = !0, Te.prototype.clone = function () {
        return new Te(this.color.getHex(), this.near, this.far)
    }, Te.prototype.toJSON = function () {
        return {
            type: "Fog",
            color: this.color.getHex(),
            near: this.near,
            far: this.far
        }
    }, Se.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: Se,
        copy: function (t, e) {
            return lt.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
        },
        toJSON: function (t) {
            var e = lt.prototype.toJSON.call(this, t);
            return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
        }
    }), Ae.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: Ae,
        isLensFlare: !0,
        copy: function (t) {
            lt.prototype.copy.call(this, t), this.positionScreen.copy(t.positionScreen), this.customUpdateCallback = t.customUpdateCallback;
            for (var e = 0, i = t.lensFlares.length; e < i; e++) this.lensFlares.push(t.lensFlares[e]);
            return this
        },
        add: function (t, e, i, n, r, o) {
            void 0 === e && (e = -1), void 0 === i && (i = 0), void 0 === o && (o = 1), void 0 === r && (r = new $(16777215)), void 0 === n && (n = ca), i = Math.min(i, Math.max(0, i)), this.lensFlares.push({
                texture: t,
                size: e,
                distance: i,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotation: 0,
                opacity: o,
                color: r,
                blending: n
            })
        },
        updateLensFlares: function () {
            var t, e, i = this.lensFlares.length,
                n = 2 * -this.positionScreen.x,
                r = 2 * -this.positionScreen.y;
            for (t = 0; t < i; t++) e = this.lensFlares[t], e.x = this.positionScreen.x + n * e.distance, e.y = this.positionScreen.y + r * e.distance, e.wantedRotation = e.x * Math.PI * .25, e.rotation += .25 * (e.wantedRotation - e.rotation)
        }
    }), Pe.prototype = Object.create(tt.prototype), Pe.prototype.constructor = Pe, Pe.prototype.isSpriteMaterial = !0, Pe.prototype.copy = function (t) {
        return tt.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this
    }, Ee.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: Ee,
        isSprite: !0,
        raycast: function () {
            var t = new s,
                e = new s,
                i = new s;
            return function (n, r) {
                e.setFromMatrixPosition(this.matrixWorld), n.ray.closestPointToPoint(e, t), i.setFromMatrixScale(this.matrixWorld);
                var o = i.x * i.y / 4;
                if (!(e.distanceToSquared(t) > o)) {
                    var a = n.ray.origin.distanceTo(t);
                    a < n.near || a > n.far || r.push({
                        distance: a,
                        point: t.clone(),
                        face: null,
                        object: this
                    })
                }
            }
        }(),
        clone: function () {
            return new this.constructor(this.material).copy(this)
        }
    }), Ce.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: Ce,
        copy: function (t) {
            lt.prototype.copy.call(this, t, !1);
            for (var e = t.levels, i = 0, n = e.length; i < n; i++) {
                var r = e[i];
                this.addLevel(r.object.clone(), r.distance)
            }
            return this
        },
        addLevel: function (t, e) {
            void 0 === e && (e = 0), e = Math.abs(e);
            for (var i = this.levels, n = 0; n < i.length && !(e < i[n].distance); n++) ;
            i.splice(n, 0, {
                distance: e,
                object: t
            }), this.add(t)
        },
        getObjectForDistance: function (t) {
            for (var e = this.levels, i = 1, n = e.length; i < n && !(t < e[i].distance); i++) ;
            return e[i - 1].object
        },
        raycast: function () {
            var t = new s;
            return function (e, i) {
                t.setFromMatrixPosition(this.matrixWorld);
                var n = e.ray.origin.distanceTo(t);
                this.getObjectForDistance(n).raycast(e, i)
            }
        }(),
        update: function () {
            var t = new s,
                e = new s;
            return function (i) {
                var n = this.levels;
                if (n.length > 1) {
                    t.setFromMatrixPosition(i.matrixWorld), e.setFromMatrixPosition(this.matrixWorld);
                    var r = t.distanceTo(e);
                    n[0].object.visible = !0;
                    for (var o = 1, a = n.length; o < a && r >= n[o].distance; o++) n[o - 1].object.visible = !1, n[o].object.visible = !0;
                    for (; o < a; o++) n[o].object.visible = !1
                }
            }
        }(),
        toJSON: function (t) {
            var e = lt.prototype.toJSON.call(this, t);
            e.object.levels = [];
            for (var i = this.levels, n = 0, r = i.length; n < r; n++) {
                var o = i[n];
                e.object.levels.push({
                    object: o.object.uuid,
                    distance: o.distance
                })
            }
            return e
        }
    }), Object.assign(Le.prototype, {
        calculateInverses: function () {
            this.boneInverses = [];
            for (var t = 0, e = this.bones.length; t < e; t++) {
                var i = new o;
                this.bones[t] && i.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(i)
            }
        },
        pose: function () {
            var t, e, i;
            for (e = 0, i = this.bones.length; e < i; e++) (t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]);
            for (e = 0, i = this.bones.length; e < i; e++) (t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
        },
        update: function () {
            var t = new o,
                e = new o;
            return function () {
                for (var i = this.bones, n = this.boneInverses, r = this.boneMatrices, o = this.boneTexture, a = 0, s = i.length; a < s; a++) {
                    var h = i[a] ? i[a].matrixWorld : e;
                    t.multiplyMatrices(h, n[a]), t.toArray(r, 16 * a)
                }
                void 0 !== o && (o.needsUpdate = !0)
            }
        }(),
        clone: function () {
            return new Le(this.bones, this.boneInverses)
        }
    }), Ne.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: Ne,
        isBone: !0
    }), Oe.prototype = Object.assign(Object.create(Ut.prototype), {
        constructor: Oe,
        isSkinnedMesh: !0,
        initBones: function () {
            var t, e, i, n, r = [];
            if (this.geometry && void 0 !== this.geometry.bones) {
                for (i = 0, n = this.geometry.bones.length; i < n; i++) e = this.geometry.bones[i], t = new Ne, r.push(t), t.name = e.name, t.position.fromArray(e.pos), t.quaternion.fromArray(e.rotq), void 0 !== e.scl && t.scale.fromArray(e.scl);
                for (i = 0, n = this.geometry.bones.length; i < n; i++) e = this.geometry.bones[i], -1 !== e.parent && null !== e.parent && void 0 !== r[e.parent] ? r[e.parent].add(r[i]) : this.add(r[i])
            }
            return this.updateMatrixWorld(!0), r
        },
        bind: function (t, e) {
            this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
        },
        pose: function () {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function () {
            var t, e;
            if (this.geometry && this.geometry.isGeometry)
                for (e = 0; e < this.geometry.skinWeights.length; e++) {
                    var i = this.geometry.skinWeights[e];
                    t = 1 / i.manhattanLength(), t !== 1 / 0 ? i.multiplyScalar(t) : i.set(1, 0, 0, 0)
                } else if (this.geometry && this.geometry.isBufferGeometry) {
                var n = new u,
                    r = this.geometry.attributes.skinWeight;
                for (e = 0; e < r.count; e++) n.x = r.getX(e), n.y = r.getY(e), n.z = r.getZ(e), n.w = r.getW(e), t = 1 / n.manhattanLength(), t !== 1 / 0 ? n.multiplyScalar(t) : n.set(1, 0, 0, 0), r.setXYZW(e, n.x, n.y, n.z, n.w)
            }
        },
        updateMatrixWorld: function (t) {
            Ut.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode && this.bindMatrixInverse.getInverse(this.bindMatrix)
        },
        clone: function () {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), Re.prototype = Object.create(tt.prototype), Re.prototype.constructor = Re, Re.prototype.isLineBasicMaterial = !0, Re.prototype.copy = function (t) {
        return tt.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
    }, Ie.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: Ie,
        isLine: !0,
        raycast: function () {
            var t = new o,
                e = new Dt,
                i = new rt;
            return function (n, r) {
                var o = n.linePrecision,
                    a = o * o,
                    h = this.geometry,
                    c = this.matrixWorld;
                if (null === h.boundingSphere && h.computeBoundingSphere(), i.copy(h.boundingSphere), i.applyMatrix4(c), !1 !== n.ray.intersectsSphere(i)) {
                    t.getInverse(c), e.copy(n.ray).applyMatrix4(t);
                    var u = new s,
                        l = new s,
                        p = new s,
                        f = new s,
                        d = this && this.isLineSegments ? 2 : 1;
                    if (h.isBufferGeometry) {
                        var m = h.index,
                            v = h.attributes,
                            g = v.position.array;
                        if (null !== m)
                            for (var y = m.array, _ = 0, x = y.length - 1; _ < x; _ += d) {
                                var b = y[_],
                                    w = y[_ + 1];
                                u.fromArray(g, 3 * b), l.fromArray(g, 3 * w);
                                var M = e.distanceSqToSegment(u, l, f, p);
                                if (!(M > a)) {
                                    f.applyMatrix4(this.matrixWorld);
                                    var T = n.ray.origin.distanceTo(f);
                                    T < n.near || T > n.far || r.push({
                                        distance: T,
                                        point: p.clone().applyMatrix4(this.matrixWorld),
                                        index: _,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                }
                            } else
                            for (var _ = 0, x = g.length / 3 - 1; _ < x; _ += d) {
                                u.fromArray(g, 3 * _), l.fromArray(g, 3 * _ + 3);
                                var M = e.distanceSqToSegment(u, l, f, p);
                                if (!(M > a)) {
                                    f.applyMatrix4(this.matrixWorld);
                                    var T = n.ray.origin.distanceTo(f);
                                    T < n.near || T > n.far || r.push({
                                        distance: T,
                                        point: p.clone().applyMatrix4(this.matrixWorld),
                                        index: _,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                }
                            }
                    } else if (h.isGeometry)
                        for (var S = h.vertices, A = S.length, _ = 0; _ < A - 1; _ += d) {
                            var M = e.distanceSqToSegment(S[_], S[_ + 1], f, p);
                            if (!(M > a)) {
                                f.applyMatrix4(this.matrixWorld);
                                var T = n.ray.origin.distanceTo(f);
                                T < n.near || T > n.far || r.push({
                                    distance: T,
                                    point: p.clone().applyMatrix4(this.matrixWorld),
                                    index: _,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                }
            }
        }(),
        clone: function () {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), De.prototype = Object.assign(Object.create(Ie.prototype), {
        constructor: De,
        isLineSegments: !0
    }), ke.prototype = Object.assign(Object.create(Ie.prototype), {
        constructor: ke,
        isLineLoop: !0
    }), ze.prototype = Object.create(tt.prototype), ze.prototype.constructor = ze, ze.prototype.isPointsMaterial = !0, ze.prototype.copy = function (t) {
        return tt.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this
    }, Ue.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: Ue,
        isPoints: !0,
        raycast: function () {
            var t = new o,
                e = new Dt,
                i = new rt;
            return function (n, r) {
                function o(t, i) {
                    var o = e.distanceSqToPoint(t);
                    if (o < p) {
                        var s = e.closestPointToPoint(t);
                        s.applyMatrix4(c);
                        var h = n.ray.origin.distanceTo(s);
                        if (h < n.near || h > n.far) return;
                        r.push({
                            distance: h,
                            distanceToRay: Math.sqrt(o),
                            point: s.clone(),
                            index: i,
                            face: null,
                            object: a
                        })
                    }
                }

                var a = this,
                    h = this.geometry,
                    c = this.matrixWorld,
                    u = n.params.Points.threshold;
                if (null === h.boundingSphere && h.computeBoundingSphere(), i.copy(h.boundingSphere), i.applyMatrix4(c), i.radius += u, !1 !== n.ray.intersectsSphere(i)) {
                    t.getInverse(c), e.copy(n.ray).applyMatrix4(t);
                    var l = u / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        p = l * l,
                        f = new s;
                    if (h.isBufferGeometry) {
                        var d = h.index,
                            m = h.attributes,
                            v = m.position.array;
                        if (null !== d)
                            for (var g = d.array, y = 0, _ = g.length; y < _; y++) {
                                var x = g[y];
                                f.fromArray(v, 3 * x), o(f, x)
                            } else
                            for (var y = 0, b = v.length / 3; y < b; y++) f.fromArray(v, 3 * y), o(f, y)
                    } else
                        for (var w = h.vertices, y = 0, b = w.length; y < b; y++) o(w[y], y)
                }
            }
        }(),
        clone: function () {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), Fe.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: Fe,
        isGroup: !0
    }), Be.prototype = Object.assign(Object.create(c.prototype), {
        constructor: Be,
        isVideoTexture: !0,
        update: function () {
            var t = this.image;
            t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
        }
    }), Ge.prototype = Object.create(c.prototype), Ge.prototype.constructor = Ge, Ge.prototype.isCompressedTexture = !0, je.prototype = Object.create(c.prototype), je.prototype.constructor = je, je.prototype.isDepthTexture = !0, Ve.prototype = Object.create(Et.prototype), Ve.prototype.constructor = Ve, We.prototype = Object.create(mt.prototype), We.prototype.constructor = We, He.prototype = Object.create(Et.prototype), He.prototype.constructor = He, Xe.prototype = Object.create(mt.prototype), Xe.prototype.constructor = Xe, qe.prototype = Object.create(Et.prototype), qe.prototype.constructor = qe, Ye.prototype = Object.create(mt.prototype), Ye.prototype.constructor = Ye, $e.prototype = Object.create(qe.prototype), $e.prototype.constructor = $e, Ze.prototype = Object.create(mt.prototype), Ze.prototype.constructor = Ze, Je.prototype = Object.create(qe.prototype), Je.prototype.constructor = Je, Qe.prototype = Object.create(mt.prototype), Qe.prototype.constructor = Qe, Ke.prototype = Object.create(qe.prototype), Ke.prototype.constructor = Ke, ti.prototype = Object.create(mt.prototype), ti.prototype.constructor = ti, ei.prototype = Object.create(qe.prototype), ei.prototype.constructor = ei, ii.prototype = Object.create(mt.prototype), ii.prototype.constructor = ii, ni.prototype = Object.create(Et.prototype), ni.prototype.constructor = ni, ri.prototype = Object.create(mt.prototype), ri.prototype.constructor = ri, oi.prototype = Object.create(Et.prototype), oi.prototype.constructor = oi, ai.prototype = Object.create(mt.prototype), ai.prototype.constructor = ai, si.prototype = Object.create(Et.prototype), si.prototype.constructor = si;
    var Sh = {
            triangulate: function (t, e, i) {
                i = i || 2;
                var n = e && e.length,
                    r = n ? e[0] * i : t.length,
                    o = hi(t, 0, r, i, !0),
                    a = [];
                if (!o) return a;
                var s, h, c, u, l, p, f;
                if (n && (o = mi(t, e, o, i)), t.length > 80 * i) {
                    s = c = t[0], h = u = t[1];
                    for (var d = i; d < r; d += i) l = t[d], p = t[d + 1], l < s && (s = l), p < h && (h = p), l > c && (c = l), p > u && (u = p);
                    f = Math.max(c - s, u - h), f = 0 !== f ? 1 / f : 0
                }
                return ui(o, a, i, s, h, f), a
            }
        },
        Ah = {
            area: function (t) {
                for (var e = t.length, i = 0, n = e - 1, r = 0; r < e; n = r++) i += t[n].x * t[r].y - t[r].x * t[n].y;
                return .5 * i
            },
            isClockWise: function (t) {
                return Ah.area(t) < 0
            },
            triangulateShape: function (t, e) {
                function i(t) {
                    var e = t.length;
                    e > 2 && t[e - 1].equals(t[0]) && t.pop()
                }

                function n(t, e) {
                    for (var i = 0; i < e.length; i++) t.push(e[i].x), t.push(e[i].y)
                }

                var r = [],
                    o = [],
                    a = [];
                i(t), n(r, t);
                var s = t.length;
                for (e.forEach(i), c = 0; c < e.length; c++) o.push(s), s += e[c].length, n(r, e[c]);
                for (var h = Sh.triangulate(r, o), c = 0; c < h.length; c += 3) a.push(h.slice(c, c + 3));
                return a
            }
        };
    ki.prototype = Object.create(mt.prototype), ki.prototype.constructor = ki, zi.prototype = Object.create(Et.prototype), zi.prototype.constructor = zi, zi.prototype.getArrays = function () {
        var t = this.getAttribute("position"),
            e = t ? Array.prototype.slice.call(t.array) : [],
            i = this.getAttribute("uv"),
            n = i ? Array.prototype.slice.call(i.array) : [],
            r = this.index;
        return {
            position: e,
            uv: n,
            index: r ? Array.prototype.slice.call(r.array) : []
        }
    }, zi.prototype.addShapeList = function (t, e) {
        var i = t.length;
        e.arrays = this.getArrays();
        for (var n = 0; n < i; n++) {
            var r = t[n];
            this.addShape(r, e)
        }
        this.setIndex(e.arrays.index), this.addAttribute("position", new Tt(e.arrays.position, 3)), this.addAttribute("uv", new Tt(e.arrays.uv, 2))
    }, zi.prototype.addShape = function (t, e) {
        function i(t, e, i) {
            return e.clone().multiplyScalar(i).add(t)
        }

        function n(t, e, i) {
            var n, o, a, s = t.x - e.x,
                h = t.y - e.y,
                c = i.x - t.x,
                u = i.y - t.y,
                l = s * s + h * h,
                p = s * u - h * c;
            if (Math.abs(p) > Number.EPSILON) {
                var f = Math.sqrt(l),
                    d = Math.sqrt(c * c + u * u),
                    m = e.x - h / f,
                    v = e.y + s / f,
                    g = i.x - u / d,
                    y = i.y + c / d,
                    _ = ((g - m) * u - (y - v) * c) / (s * u - h * c);
                n = m + s * _ - t.x, o = v + h * _ - t.y;
                var x = n * n + o * o;
                if (x <= 2) return new r(n, o);
                a = Math.sqrt(x / 2)
            } else {
                var b = !1;
                s > Number.EPSILON ? c > Number.EPSILON && (b = !0) : s < -Number.EPSILON ? c < -Number.EPSILON && (b = !0) : Math.sign(h) === Math.sign(u) && (b = !0), b ? (n = -h, o = s, a = Math.sqrt(l)) : (n = s, o = h, a = Math.sqrt(l / 2))
            }
            return new r(n / a, o / a)
        }

        function o(t, e) {
            var i, n;
            for (Z = t.length; --Z >= 0;) {
                i = Z, n = Z - 1, n < 0 && (n = t.length - 1);
                var r = 0,
                    o = E + 2 * S;
                for (r = 0; r < o; r++) {
                    var a = q * r,
                        s = q * (r + 1);
                    c(e + i + a, e + n + a, e + n + s, e + i + s)
                }
            }
        }

        function a(t, e, i) {
            b.push(t), b.push(e), b.push(i)
        }

        function h(t, e, i) {
            u(t), u(e), u(i);
            var n = y.length / 3,
                r = N.generateTopUV(D, y, n - 3, n - 2, n - 1);
            l(r[0]), l(r[1]), l(r[2])
        }

        function c(t, e, i, n) {
            u(t), u(e), u(n), u(e), u(i), u(n);
            var r = y.length / 3,
                o = N.generateSideWallUV(D, y, r - 6, r - 3, r - 2, r - 1);
            l(o[0]), l(o[1]), l(o[3]), l(o[1]), l(o[2]), l(o[3])
        }

        function u(t) {
            _.push(y.length / 3), y.push(b[3 * t + 0]), y.push(b[3 * t + 1]), y.push(b[3 * t + 2])
        }

        function l(t) {
            x.push(t.x), x.push(t.y)
        }

        var p, f, d, m, v, g = e.arrays ? e.arrays : this.getArrays(),
            y = g.position,
            _ = g.index,
            x = g.uv,
            b = [],
            w = void 0 !== e.amount ? e.amount : 100,
            M = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
            T = void 0 !== e.bevelSize ? e.bevelSize : M - 2,
            S = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
            A = void 0 === e.bevelEnabled || e.bevelEnabled,
            P = void 0 !== e.curveSegments ? e.curveSegments : 12,
            E = void 0 !== e.steps ? e.steps : 1,
            C = e.extrudePath,
            L = !1,
            N = void 0 !== e.UVGenerator ? e.UVGenerator : ki.WorldUVGenerator;
        C && (p = C.getSpacedPoints(E), L = !0, A = !1, f = void 0 !== e.frames ? e.frames : C.computeFrenetFrames(E, !1), d = new s, m = new s, v = new s), A || (S = 0, M = 0, T = 0);
        var O, R, I, D = this,
            k = t.extractPoints(P),
            z = k.shape,
            U = k.holes;
        if (!Ah.isClockWise(z))
            for (z = z.reverse(), R = 0, I = U.length; R < I; R++) O = U[R], Ah.isClockWise(O) && (U[R] = O.reverse());
        var F = Ah.triangulateShape(z, U),
            B = z;
        for (R = 0, I = U.length; R < I; R++) O = U[R], z = z.concat(O);
        for (var G, j, V, W, H, X, q = z.length, Y = F.length, $ = [], Z = 0, J = B.length, Q = J - 1, K = Z + 1; Z < J; Z++, Q++, K++) Q === J && (Q = 0), K === J && (K = 0), $[Z] = n(B[Z], B[Q], B[K]);
        var tt, et = [],
            it = $.concat();
        for (R = 0, I = U.length; R < I; R++) {
            for (O = U[R], tt = [], Z = 0, J = O.length, Q = J - 1, K = Z + 1; Z < J; Z++, Q++, K++) Q === J && (Q = 0), K === J && (K = 0), tt[Z] = n(O[Z], O[Q], O[K]);
            et.push(tt), it = it.concat(tt)
        }
        for (G = 0; G < S; G++) {
            for (V = G / S, W = M * Math.cos(V * Math.PI / 2), j = T * Math.sin(V * Math.PI / 2), Z = 0, J = B.length; Z < J; Z++) H = i(B[Z], $[Z], j), a(H.x, H.y, -W);
            for (R = 0, I = U.length; R < I; R++)
                for (O = U[R], tt = et[R], Z = 0, J = O.length; Z < J; Z++) H = i(O[Z], tt[Z], j), a(H.x, H.y, -W)
        }
        for (j = T, Z = 0; Z < q; Z++) H = A ? i(z[Z], it[Z], j) : z[Z], L ? (m.copy(f.normals[0]).multiplyScalar(H.x), d.copy(f.binormals[0]).multiplyScalar(H.y), v.copy(p[0]).add(m).add(d), a(v.x, v.y, v.z)) : a(H.x, H.y, 0);
        var nt;
        for (nt = 1; nt <= E; nt++)
            for (Z = 0; Z < q; Z++) H = A ? i(z[Z], it[Z], j) : z[Z], L ? (m.copy(f.normals[nt]).multiplyScalar(H.x), d.copy(f.binormals[nt]).multiplyScalar(H.y), v.copy(p[nt]).add(m).add(d), a(v.x, v.y, v.z)) : a(H.x, H.y, w / E * nt);
        for (G = S - 1; G >= 0; G--) {
            for (V = G / S, W = M * Math.cos(V * Math.PI / 2), j = T * Math.sin(V * Math.PI / 2), Z = 0, J = B.length; Z < J; Z++) H = i(B[Z], $[Z], j), a(H.x, H.y, w + W);
            for (R = 0, I = U.length; R < I; R++)
                for (O = U[R], tt = et[R], Z = 0, J = O.length; Z < J; Z++) H = i(O[Z], tt[Z], j), L ? a(H.x, H.y + p[E - 1].y, p[E - 1].x + W) : a(H.x, H.y, w + W)
        }
        !function () {
            var t = y.length / 3;
            if (A) {
                var i = 0,
                    n = q * i;
                for (Z = 0; Z < Y; Z++) X = F[Z], h(X[2] + n, X[1] + n, X[0] + n);
                for (i = E + 2 * S, n = q * i, Z = 0; Z < Y; Z++) X = F[Z], h(X[0] + n, X[1] + n, X[2] + n)
            } else {
                for (Z = 0; Z < Y; Z++) X = F[Z], h(X[2], X[1], X[0]);
                for (Z = 0; Z < Y; Z++) X = F[Z], h(X[0] + q * E, X[1] + q * E, X[2] + q * E)
            }
            D.addGroup(t, y.length / 3 - t, void 0 !== e.material ? e.material : 0)
        }(),
            function () {
                var t = y.length / 3,
                    i = 0;
                for (o(B, i), i += B.length, R = 0, I = U.length; R < I; R++) O = U[R], o(O, i), i += O.length;
                D.addGroup(t, y.length / 3 - t, void 0 !== e.extrudeMaterial ? e.extrudeMaterial : 1)
            }(), e.arrays || (this.setIndex(_), this.addAttribute("position", new Tt(y, 3)), this.addAttribute("uv", new Tt(x, 2)))
    }, ki.WorldUVGenerator = {
        generateTopUV: function (t, e, i, n, o) {
            var a = e[3 * i],
                s = e[3 * i + 1],
                h = e[3 * n],
                c = e[3 * n + 1],
                u = e[3 * o],
                l = e[3 * o + 1];
            return [new r(a, s), new r(h, c), new r(u, l)]
        },
        generateSideWallUV: function (t, e, i, n, o, a) {
            var s = e[3 * i],
                h = e[3 * i + 1],
                c = e[3 * i + 2],
                u = e[3 * n],
                l = e[3 * n + 1],
                p = e[3 * n + 2],
                f = e[3 * o],
                d = e[3 * o + 1],
                m = e[3 * o + 2],
                v = e[3 * a],
                g = e[3 * a + 1],
                y = e[3 * a + 2];
            return Math.abs(h - l) < .01 ? [new r(s, 1 - c), new r(u, 1 - p), new r(f, 1 - m), new r(v, 1 - y)] : [new r(h, 1 - c), new r(l, 1 - p), new r(d, 1 - m), new r(g, 1 - y)]
        }
    }, Ui.prototype = Object.create(mt.prototype), Ui.prototype.constructor = Ui, Fi.prototype = Object.create(zi.prototype), Fi.prototype.constructor = Fi, Bi.prototype = Object.create(mt.prototype), Bi.prototype.constructor = Bi, Gi.prototype = Object.create(Et.prototype), Gi.prototype.constructor = Gi, ji.prototype = Object.create(mt.prototype), ji.prototype.constructor = ji, Vi.prototype = Object.create(Et.prototype), Vi.prototype.constructor = Vi, Wi.prototype = Object.create(mt.prototype), Wi.prototype.constructor = Wi, Hi.prototype = Object.create(Et.prototype), Hi.prototype.constructor = Hi, Xi.prototype = Object.create(mt.prototype), Xi.prototype.constructor = Xi, Xi.prototype.toJSON = function () {
        var t = mt.prototype.toJSON.call(this);
        return Yi(this.parameters.shapes, t)
    }, qi.prototype = Object.create(Et.prototype), qi.prototype.constructor = qi, qi.prototype.toJSON = function () {
        var t = Et.prototype.toJSON.call(this);
        return Yi(this.parameters.shapes, t)
    }, $i.prototype = Object.create(Et.prototype), $i.prototype.constructor = $i, Zi.prototype = Object.create(mt.prototype), Zi.prototype.constructor = Zi, Ji.prototype = Object.create(Et.prototype), Ji.prototype.constructor = Ji, Qi.prototype = Object.create(Zi.prototype), Qi.prototype.constructor = Qi, Ki.prototype = Object.create(Ji.prototype), Ki.prototype.constructor = Ki, tn.prototype = Object.create(mt.prototype), tn.prototype.constructor = tn, en.prototype = Object.create(Et.prototype), en.prototype.constructor = en;
    var Ph = Object.freeze({
        WireframeGeometry: Ve,
        ParametricGeometry: We,
        ParametricBufferGeometry: He,
        TetrahedronGeometry: Ye,
        TetrahedronBufferGeometry: $e,
        OctahedronGeometry: Ze,
        OctahedronBufferGeometry: Je,
        IcosahedronGeometry: Qe,
        IcosahedronBufferGeometry: Ke,
        DodecahedronGeometry: ti,
        DodecahedronBufferGeometry: ei,
        PolyhedronGeometry: Xe,
        PolyhedronBufferGeometry: qe,
        TubeGeometry: ii,
        TubeBufferGeometry: ni,
        TorusKnotGeometry: ri,
        TorusKnotBufferGeometry: oi,
        TorusGeometry: ai,
        TorusBufferGeometry: si,
        TextGeometry: Ui,
        TextBufferGeometry: Fi,
        SphereGeometry: Bi,
        SphereBufferGeometry: Gi,
        RingGeometry: ji,
        RingBufferGeometry: Vi,
        PlaneGeometry: Nt,
        PlaneBufferGeometry: Ot,
        LatheGeometry: Wi,
        LatheBufferGeometry: Hi,
        ShapeGeometry: Xi,
        ShapeBufferGeometry: qi,
        ExtrudeGeometry: ki,
        ExtrudeBufferGeometry: zi,
        EdgesGeometry: $i,
        ConeGeometry: Qi,
        ConeBufferGeometry: Ki,
        CylinderGeometry: Zi,
        CylinderBufferGeometry: Ji,
        CircleGeometry: tn,
        CircleBufferGeometry: en,
        BoxGeometry: Ct,
        BoxBufferGeometry: Lt
    });
    nn.prototype = Object.create(tt.prototype), nn.prototype.constructor = nn, nn.prototype.isShadowMaterial = !0, rn.prototype = Object.create(It.prototype), rn.prototype.constructor = rn, rn.prototype.isRawShaderMaterial = !0, on.prototype = Object.create(tt.prototype), on.prototype.constructor = on, on.prototype.isMeshStandardMaterial = !0, on.prototype.copy = function (t) {
        return tt.prototype.copy.call(this, t), this.defines = {
            STANDARD: ""
        }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, an.prototype = Object.create(on.prototype), an.prototype.constructor = an, an.prototype.isMeshPhysicalMaterial = !0, an.prototype.copy = function (t) {
        return on.prototype.copy.call(this, t), this.defines = {
            PHYSICAL: ""
        }, this.reflectivity = t.reflectivity, this.clearCoat = t.clearCoat, this.clearCoatRoughness = t.clearCoatRoughness, this
    }, sn.prototype = Object.create(tt.prototype), sn.prototype.constructor = sn, sn.prototype.isMeshPhongMaterial = !0, sn.prototype.copy = function (t) {
        return tt.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, hn.prototype = Object.create(sn.prototype), hn.prototype.constructor = hn, hn.prototype.isMeshToonMaterial = !0, hn.prototype.copy = function (t) {
        return sn.prototype.copy.call(this, t), this.gradientMap = t.gradientMap, this
    }, cn.prototype = Object.create(tt.prototype), cn.prototype.constructor = cn, cn.prototype.isMeshNormalMaterial = !0, cn.prototype.copy = function (t) {
        return tt.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, un.prototype = Object.create(tt.prototype), un.prototype.constructor = un, un.prototype.isMeshLambertMaterial = !0, un.prototype.copy = function (t) {
        return tt.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, ln.prototype = Object.create(Re.prototype), ln.prototype.constructor = ln, ln.prototype.isLineDashedMaterial = !0, ln.prototype.copy = function (t) {
        return Re.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
    };
    var Eh = Object.freeze({
            ShadowMaterial: nn,
            SpriteMaterial: Pe,
            RawShaderMaterial: rn,
            ShaderMaterial: It,
            PointsMaterial: ze,
            MeshPhysicalMaterial: an,
            MeshStandardMaterial: on,
            MeshPhongMaterial: sn,
            MeshToonMaterial: hn,
            MeshNormalMaterial: cn,
            MeshLambertMaterial: un,
            MeshDepthMaterial: et,
            MeshDistanceMaterial: it,
            MeshBasicMaterial: Rt,
            LineDashedMaterial: ln,
            LineBasicMaterial: Re,
            Material: tt
        }),
        Ch = {
            enabled: !1,
            files: {},
            add: function (t, e) {
                !1 !== this.enabled && (this.files[t] = e)
            },
            get: function (t) {
                if (!1 !== this.enabled) return this.files[t]
            },
            remove: function (t) {
                delete this.files[t]
            },
            clear: function () {
                this.files = {}
            }
        },
        Lh = new pn,
        Nh = {};
    Object.assign(fn.prototype, {
        load: function (t, e, i, n) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
            var r = this,
                o = Ch.get(t);
            if (void 0 !== o) return r.manager.itemStart(t), setTimeout(function () {
                e && e(o), r.manager.itemEnd(t)
            }, 0), o;
            if (void 0 !== Nh[t]) return void Nh[t].push({
                onLoad: e,
                onProgress: i,
                onError: n
            });
            var a = /^data:(.*?)(;base64)?,(.*)$/,
                s = t.match(a);
            if (s) {
                var h = s[1],
                    c = !!s[2],
                    u = s[3];
                u = window.decodeURIComponent(u), c && (u = window.atob(u));
                try {
                    var l, p = (this.responseType || "").toLowerCase();
                    switch (p) {
                        case "arraybuffer":
                        case "blob":
                            for (var f = new Uint8Array(u.length), d = 0; d < u.length; d++) f[d] = u.charCodeAt(d);
                            l = "blob" === p ? new Blob([f.buffer], {
                                type: h
                            }) : f.buffer;
                            break;
                        case "document":
                            var m = new DOMParser;
                            l = m.parseFromString(u, h);
                            break;
                        case "json":
                            l = JSON.parse(u);
                            break;
                        default:
                            l = u
                    }
                    window.setTimeout(function () {
                        e && e(l), r.manager.itemEnd(t)
                    }, 0)
                } catch (e) {
                    window.setTimeout(function () {
                        n && n(e), r.manager.itemEnd(t), r.manager.itemError(t)
                    }, 0)
                }
            } else {
                Nh[t] = [], Nh[t].push({
                    onLoad: e,
                    onProgress: i,
                    onError: n
                });
                var v = new XMLHttpRequest;
                v.open("GET", t, !0), v.addEventListener("load", function (e) {
                    var i = this.response;
                    Ch.add(t, i);
                    var n = Nh[t];
                    if (delete Nh[t], 200 === this.status) {
                        for (var o = 0, a = n.length; o < a; o++) {
                            var s = n[o];
                            s.onLoad && s.onLoad(i)
                        }
                        r.manager.itemEnd(t)
                    } else if (0 === this.status) {
                        for (var o = 0, a = n.length; o < a; o++) {
                            var s = n[o];
                            s.onLoad && s.onLoad(i)
                        }
                        r.manager.itemEnd(t)
                    } else {
                        for (var o = 0, a = n.length; o < a; o++) {
                            var s = n[o];
                            s.onError && s.onError(e)
                        }
                        r.manager.itemEnd(t), r.manager.itemError(t)
                    }
                }, !1), v.addEventListener("progress", function (e) {
                    for (var i = Nh[t], n = 0, r = i.length; n < r; n++) {
                        var o = i[n];
                        o.onProgress && o.onProgress(e)
                    }
                }, !1), v.addEventListener("error", function (e) {
                    var i = Nh[t];
                    delete Nh[t];
                    for (var n = 0, o = i.length; n < o; n++) {
                        var a = i[n];
                        a.onError && a.onError(e)
                    }
                    r.manager.itemEnd(t), r.manager.itemError(t)
                }, !1), void 0 !== this.responseType && (v.responseType = this.responseType), void 0 !== this.withCredentials && (v.withCredentials = this.withCredentials), v.overrideMimeType && v.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
                for (var g in this.requestHeader) v.setRequestHeader(g, this.requestHeader[g]);
                v.send(null)
            }
            return r.manager.itemStart(t), v
        },
        setPath: function (t) {
            return this.path = t, this
        },
        setResponseType: function (t) {
            return this.responseType = t, this
        },
        setWithCredentials: function (t) {
            return this.withCredentials = t, this
        },
        setMimeType: function (t) {
            return this.mimeType = t, this
        },
        setRequestHeader: function (t) {
            return this.requestHeader = t, this
        }
    }), Object.assign(dn.prototype, {
        load: function (t, e, i, n) {
            var r = this,
                o = [],
                a = new Ge;
            a.image = o;
            var s = new fn(this.manager);
            if (s.setPath(this.path), s.setResponseType("arraybuffer"), Array.isArray(t))
                for (var h = 0, c = 0, u = t.length; c < u; ++c) !function (c) {
                    s.load(t[c], function (t) {
                        var i = r._parser(t, !0);
                        o[c] = {
                            width: i.width,
                            height: i.height,
                            format: i.format,
                            mipmaps: i.mipmaps
                        }, 6 === (h += 1) && (1 === i.mipmapCount && (a.minFilter = as), a.format = i.format, a.needsUpdate = !0, e && e(a))
                    }, i, n)
                }(c);
            else s.load(t, function (t) {
                var i = r._parser(t, !0);
                if (i.isCubemap)
                    for (var n = i.mipmaps.length / i.mipmapCount, s = 0; s < n; s++) {
                        o[s] = {
                            mipmaps: []
                        };
                        for (var h = 0; h < i.mipmapCount; h++) o[s].mipmaps.push(i.mipmaps[s * i.mipmapCount + h]), o[s].format = i.format, o[s].width = i.width, o[s].height = i.height
                    } else a.image.width = i.width, a.image.height = i.height, a.mipmaps = i.mipmaps;
                1 === i.mipmapCount && (a.minFilter = as), a.format = i.format, a.needsUpdate = !0, e && e(a)
            }, i, n);
            return a
        },
        setPath: function (t) {
            return this.path = t, this
        }
    }), Object.assign(mn.prototype, {
        load: function (t, e, i, n) {
            var r = this,
                o = new f,
                a = new fn(this.manager);
            return a.setResponseType("arraybuffer"), a.load(t, function (t) {
                var i = r._parser(t);
                i && (void 0 !== i.image ? o.image = i.image : void 0 !== i.data && (o.image.width = i.width, o.image.height = i.height, o.image.data = i.data), o.wrapS = void 0 !== i.wrapS ? i.wrapS : es, o.wrapT = void 0 !== i.wrapT ? i.wrapT : es, o.magFilter = void 0 !== i.magFilter ? i.magFilter : as, o.minFilter = void 0 !== i.minFilter ? i.minFilter : hs, o.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.format && (o.format = i.format), void 0 !== i.type && (o.type = i.type), void 0 !== i.mipmaps && (o.mipmaps = i.mipmaps), 1 === i.mipmapCount && (o.minFilter = as), o.needsUpdate = !0, e && e(o, i))
            }, i, n), o
        }
    }), Object.assign(vn.prototype, {
        crossOrigin: "Anonymous",
        load: function (t, e, i, n) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
            var r = this,
                o = Ch.get(t);
            if (void 0 !== o) return r.manager.itemStart(t), setTimeout(function () {
                e && e(o), r.manager.itemEnd(t)
            }, 0), o;
            var a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            return a.addEventListener("load", function () {
                Ch.add(t, this), e && e(this), r.manager.itemEnd(t)
            }, !1), a.addEventListener("error", function (e) {
                n && n(e), r.manager.itemEnd(t), r.manager.itemError(t)
            }, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), a.src = t, a
        },
        setCrossOrigin: function (t) {
            return this.crossOrigin = t, this
        },
        setPath: function (t) {
            return this.path = t, this
        }
    }), Object.assign(gn.prototype, {
        crossOrigin: "Anonymous",
        load: function (t, e, i, n) {
            var r = new d,
                o = new vn(this.manager);
            o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
            for (var a = 0, s = 0; s < t.length; ++s) !function (i) {
                o.load(t[i], function (t) {
                    r.images[i] = t, 6 == ++a && (r.needsUpdate = !0, e && e(r))
                }, void 0, n)
            }(s);
            return r
        },
        setCrossOrigin: function (t) {
            return this.crossOrigin = t, this
        },
        setPath: function (t) {
            return this.path = t, this
        }
    }), Object.assign(yn.prototype, {
        crossOrigin: "Anonymous",
        load: function (t, e, i, n) {
            var r = new c,
                o = new vn(this.manager);
            return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(t, function (i) {
                r.image = i;
                var n = t.search(/\.(jpg|jpeg)$/) > 0 || 0 === t.search(/^data\:image\/jpeg/);
                r.format = n ? ws : Ms, r.needsUpdate = !0, void 0 !== e && e(r)
            }, i, n), r
        },
        setCrossOrigin: function (t) {
            return this.crossOrigin = t, this
        },
        setPath: function (t) {
            return this.path = t, this
        }
    }), Object.assign(_n.prototype, {
        getPoint: function () {
            return null
        },
        getPointAt: function (t, e) {
            var i = this.getUtoTmapping(t);
            return this.getPoint(i, e)
        },
        getPoints: function (t) {
            void 0 === t && (t = 5);
            for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t));
            return e
        },
        getSpacedPoints: function (t) {
            void 0 === t && (t = 5);
            for (var e = [], i = 0; i <= t; i++) e.push(this.getPointAt(i / t));
            return e
        },
        getLength: function () {
            var t = this.getLengths();
            return t[t.length - 1]
        },
        getLengths: function (t) {
            if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var e, i, n = [],
                r = this.getPoint(0),
                o = 0;
            for (n.push(0), i = 1; i <= t; i++) e = this.getPoint(i / t), o += e.distanceTo(r), n.push(o), r = e;
            return this.cacheArcLengths = n, n
        },
        updateArcLengths: function () {
            this.needsUpdate = !0, this.getLengths()
        },
        getUtoTmapping: function (t, e) {
            var i, n = this.getLengths(),
                r = 0,
                o = n.length;
            i = e || t * n[o - 1];
            for (var a, s = 0, h = o - 1; s <= h;)
                if (r = Math.floor(s + (h - s) / 2), (a = n[r] - i) < 0) s = r + 1;
                else {
                    if (!(a > 0)) {
                        h = r;
                        break
                    }
                    h = r - 1
                }
            if (r = h, n[r] === i) return r / (o - 1);
            var c = n[r];
            return (r + (i - c) / (n[r + 1] - c)) / (o - 1)
        },
        getTangent: function (t) {
            var e = t - 1e-4,
                i = t + 1e-4;
            e < 0 && (e = 0), i > 1 && (i = 1);
            var n = this.getPoint(e);
            return this.getPoint(i).clone().sub(n).normalize()
        },
        getTangentAt: function (t) {
            var e = this.getUtoTmapping(t);
            return this.getTangent(e)
        },
        computeFrenetFrames: function (t, e) {
            var i, n, r, a = new s,
                h = [],
                c = [],
                u = [],
                l = new s,
                p = new o;
            for (i = 0; i <= t; i++) n = i / t, h[i] = this.getTangentAt(n), h[i].normalize();
            c[0] = new s, u[0] = new s;
            var f = Number.MAX_VALUE,
                d = Math.abs(h[0].x),
                m = Math.abs(h[0].y),
                v = Math.abs(h[0].z);
            for (d <= f && (f = d, a.set(1, 0, 0)), m <= f && (f = m, a.set(0, 1, 0)), v <= f && a.set(0, 0, 1), l.crossVectors(h[0], a).normalize(), c[0].crossVectors(h[0], l), u[0].crossVectors(h[0], c[0]), i = 1; i <= t; i++) c[i] = c[i - 1].clone(), u[i] = u[i - 1].clone(), l.crossVectors(h[i - 1], h[i]), l.length() > Number.EPSILON && (l.normalize(), r = Math.acos(ah.clamp(h[i - 1].dot(h[i]), -1, 1)), c[i].applyMatrix4(p.makeRotationAxis(l, r))), u[i].crossVectors(h[i], c[i]);
            if (!0 === e)
                for (r = Math.acos(ah.clamp(c[0].dot(c[t]), -1, 1)), r /= t, h[0].dot(l.crossVectors(c[0], c[t])) > 0 && (r = -r), i = 1; i <= t; i++) c[i].applyMatrix4(p.makeRotationAxis(h[i], r * i)), u[i].crossVectors(h[i], c[i]);
            return {
                tangents: h,
                normals: c,
                binormals: u
            }
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.arcLengthDivisions = t.arcLengthDivisions, this
        },
        toJSON: function () {
            var t = {
                metadata: {
                    version: 4.5,
                    type: "Curve",
                    generator: "Curve.toJSON"
                }
            };
            return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
        },
        fromJSON: function (t) {
            return this.arcLengthDivisions = t.arcLengthDivisions, this
        }
    }), xn.prototype = Object.create(_n.prototype), xn.prototype.constructor = xn, xn.prototype.isEllipseCurve = !0, xn.prototype.getPoint = function (t, e) {
        for (var i = e || new r, n = 2 * Math.PI, o = this.aEndAngle - this.aStartAngle, a = Math.abs(o) < Number.EPSILON; o < 0;) o += n;
        for (; o > n;) o -= n;
        o < Number.EPSILON && (o = a ? 0 : n), !0 !== this.aClockwise || a || (o === n ? o = -n : o -= n);
        var s = this.aStartAngle + t * o,
            h = this.aX + this.xRadius * Math.cos(s),
            c = this.aY + this.yRadius * Math.sin(s);
        if (0 !== this.aRotation) {
            var u = Math.cos(this.aRotation),
                l = Math.sin(this.aRotation),
                p = h - this.aX,
                f = c - this.aY;
            h = p * u - f * l + this.aX, c = p * l + f * u + this.aY
        }
        return i.set(h, c)
    }, xn.prototype.copy = function (t) {
        return _n.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
    }, xn.prototype.toJSON = function () {
        var t = _n.prototype.toJSON.call(this);
        return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
    }, xn.prototype.fromJSON = function (t) {
        return _n.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
    }, bn.prototype = Object.create(xn.prototype), bn.prototype.constructor = bn, bn.prototype.isArcCurve = !0;
    var Oh = new s,
        Rh = new wn,
        Ih = new wn,
        Dh = new wn;
    Mn.prototype = Object.create(_n.prototype), Mn.prototype.constructor = Mn, Mn.prototype.isCatmullRomCurve3 = !0, Mn.prototype.getPoint = function (t, e) {
        var i = e || new s,
            n = this.points,
            r = n.length,
            o = (r - (this.closed ? 0 : 1)) * t,
            a = Math.floor(o),
            h = o - a;
        this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / n.length) + 1) * n.length : 0 === h && a === r - 1 && (a = r - 2, h = 1);
        var c, u, l, p;
        if (this.closed || a > 0 ? c = n[(a - 1) % r] : (Oh.subVectors(n[0], n[1]).add(n[0]), c = Oh), u = n[a % r], l = n[(a + 1) % r], this.closed || a + 2 < r ? p = n[(a + 2) % r] : (Oh.subVectors(n[r - 1], n[r - 2]).add(n[r - 1]), p = Oh), "centripetal" === this.curveType || "chordal" === this.curveType) {
            var f = "chordal" === this.curveType ? .5 : .25,
                d = Math.pow(c.distanceToSquared(u), f),
                m = Math.pow(u.distanceToSquared(l), f),
                v = Math.pow(l.distanceToSquared(p), f);
            m < 1e-4 && (m = 1), d < 1e-4 && (d = m), v < 1e-4 && (v = m), Rh.initNonuniformCatmullRom(c.x, u.x, l.x, p.x, d, m, v), Ih.initNonuniformCatmullRom(c.y, u.y, l.y, p.y, d, m, v), Dh.initNonuniformCatmullRom(c.z, u.z, l.z, p.z, d, m, v)
        } else "catmullrom" === this.curveType && (Rh.initCatmullRom(c.x, u.x, l.x, p.x, this.tension), Ih.initCatmullRom(c.y, u.y, l.y, p.y, this.tension), Dh.initCatmullRom(c.z, u.z, l.z, p.z, this.tension));
        return i.set(Rh.calc(h), Ih.calc(h), Dh.calc(h)), i
    }, Mn.prototype.copy = function (t) {
        _n.prototype.copy.call(this, t), this.points = [];
        for (var e = 0, i = t.points.length; e < i; e++) {
            var n = t.points[e];
            this.points.push(n.clone())
        }
        return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
    }, Mn.prototype.toJSON = function () {
        var t = _n.prototype.toJSON.call(this);
        t.points = [];
        for (var e = 0, i = this.points.length; e < i; e++) {
            var n = this.points[e];
            t.points.push(n.toArray())
        }
        return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
    }, Mn.prototype.fromJSON = function (t) {
        _n.prototype.fromJSON.call(this, t), this.points = [];
        for (var e = 0, i = t.points.length; e < i; e++) {
            var n = t.points[e];
            this.points.push((new s).fromArray(n))
        }
        return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
    }, In.prototype = Object.create(_n.prototype), In.prototype.constructor = In, In.prototype.isCubicBezierCurve = !0, In.prototype.getPoint = function (t, e) {
        var i = e || new r,
            n = this.v0,
            o = this.v1,
            a = this.v2,
            s = this.v3;
        return i.set(Rn(t, n.x, o.x, a.x, s.x), Rn(t, n.y, o.y, a.y, s.y)), i
    }, In.prototype.copy = function (t) {
        return _n.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
    }, In.prototype.toJSON = function () {
        var t = _n.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
    }, In.prototype.fromJSON = function (t) {
        return _n.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
    }, Dn.prototype = Object.create(_n.prototype), Dn.prototype.constructor = Dn, Dn.prototype.isCubicBezierCurve3 = !0, Dn.prototype.getPoint = function (t, e) {
        var i = e || new s,
            n = this.v0,
            r = this.v1,
            o = this.v2,
            a = this.v3;
        return i.set(Rn(t, n.x, r.x, o.x, a.x), Rn(t, n.y, r.y, o.y, a.y), Rn(t, n.z, r.z, o.z, a.z)), i
    }, Dn.prototype.copy = function (t) {
        return _n.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
    }, Dn.prototype.toJSON = function () {
        var t = _n.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
    }, Dn.prototype.fromJSON = function (t) {
        return _n.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
    }, kn.prototype = Object.create(_n.prototype), kn.prototype.constructor = kn, kn.prototype.isLineCurve = !0, kn.prototype.getPoint = function (t, e) {
        var i = e || new r;
        return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i
    }, kn.prototype.getPointAt = function (t, e) {
        return this.getPoint(t, e)
    }, kn.prototype.getTangent = function () {
        return this.v2.clone().sub(this.v1).normalize()
    }, kn.prototype.copy = function (t) {
        return _n.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }, kn.prototype.toJSON = function () {
        var t = _n.prototype.toJSON.call(this);
        return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }, kn.prototype.fromJSON = function (t) {
        return _n.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }, zn.prototype = Object.create(_n.prototype), zn.prototype.constructor = zn, zn.prototype.isLineCurve3 = !0, zn.prototype.getPoint = function (t, e) {
        var i = e || new s;
        return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i
    }, zn.prototype.getPointAt = function (t, e) {
        return this.getPoint(t, e)
    }, zn.prototype.copy = function (t) {
        return _n.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }, zn.prototype.toJSON = function () {
        var t = _n.prototype.toJSON.call(this);
        return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }, zn.prototype.fromJSON = function (t) {
        return _n.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }, Un.prototype = Object.create(_n.prototype), Un.prototype.constructor = Un, Un.prototype.isQuadraticBezierCurve = !0, Un.prototype.getPoint = function (t, e) {
        var i = e || new r,
            n = this.v0,
            o = this.v1,
            a = this.v2;
        return i.set(En(t, n.x, o.x, a.x), En(t, n.y, o.y, a.y)), i
    }, Un.prototype.copy = function (t) {
        return _n.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }, Un.prototype.toJSON = function () {
        var t = _n.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }, Un.prototype.fromJSON = function (t) {
        return _n.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }, Fn.prototype = Object.create(_n.prototype), Fn.prototype.constructor = Fn, Fn.prototype.isQuadraticBezierCurve3 = !0, Fn.prototype.getPoint = function (t, e) {
        var i = e || new s,
            n = this.v0,
            r = this.v1,
            o = this.v2;
        return i.set(En(t, n.x, r.x, o.x), En(t, n.y, r.y, o.y), En(t, n.z, r.z, o.z)), i
    }, Fn.prototype.copy = function (t) {
        return _n.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }, Fn.prototype.toJSON = function () {
        var t = _n.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }, Fn.prototype.fromJSON = function (t) {
        return _n.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }, Bn.prototype = Object.create(_n.prototype), Bn.prototype.constructor = Bn, Bn.prototype.isSplineCurve = !0, Bn.prototype.getPoint = function (t, e) {
        var i = e || new r,
            n = this.points,
            o = (n.length - 1) * t,
            a = Math.floor(o),
            s = o - a,
            h = n[0 === a ? a : a - 1],
            c = n[a],
            u = n[a > n.length - 2 ? n.length - 1 : a + 1],
            l = n[a > n.length - 3 ? n.length - 1 : a + 2];
        return i.set(Tn(s, h.x, c.x, u.x, l.x), Tn(s, h.y, c.y, u.y, l.y)), i
    }, Bn.prototype.copy = function (t) {
        _n.prototype.copy.call(this, t), this.points = [];
        for (var e = 0, i = t.points.length; e < i; e++) {
            var n = t.points[e];
            this.points.push(n.clone())
        }
        return this
    }, Bn.prototype.toJSON = function () {
        var t = _n.prototype.toJSON.call(this);
        t.points = [];
        for (var e = 0, i = this.points.length; e < i; e++) {
            var n = this.points[e];
            t.points.push(n.toArray())
        }
        return t
    }, Bn.prototype.fromJSON = function (t) {
        _n.prototype.fromJSON.call(this, t), this.points = [];
        for (var e = 0, i = t.points.length; e < i; e++) {
            var n = t.points[e];
            this.points.push((new r).fromArray(n))
        }
        return this
    };
    var kh = Object.freeze({
        ArcCurve: bn,
        CatmullRomCurve3: Mn,
        CubicBezierCurve: In,
        CubicBezierCurve3: Dn,
        EllipseCurve: xn,
        LineCurve: kn,
        LineCurve3: zn,
        QuadraticBezierCurve: Un,
        QuadraticBezierCurve3: Fn,
        SplineCurve: Bn
    });
    Gn.prototype = Object.assign(Object.create(_n.prototype), {
        constructor: Gn,
        add: function (t) {
            this.curves.push(t)
        },
        closePath: function () {
            var t = this.curves[0].getPoint(0),
                e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new kn(e, t))
        },
        getPoint: function (t) {
            for (var e = t * this.getLength(), i = this.getCurveLengths(), n = 0; n < i.length;) {
                if (i[n] >= e) {
                    var r = i[n] - e,
                        o = this.curves[n],
                        a = o.getLength(),
                        s = 0 === a ? 0 : 1 - r / a;
                    return o.getPointAt(s)
                }
                n++
            }
            return null
        },
        getLength: function () {
            var t = this.getCurveLengths();
            return t[t.length - 1]
        },
        updateArcLengths: function () {
            this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
        },
        getCurveLengths: function () {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            for (var t = [], e = 0, i = 0, n = this.curves.length; i < n; i++) e += this.curves[i].getLength(), t.push(e);
            return this.cacheLengths = t, t
        },
        getSpacedPoints: function (t) {
            void 0 === t && (t = 40);
            for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t));
            return this.autoClose && e.push(e[0]), e
        },
        getPoints: function (t) {
            t = t || 12;
            for (var e, i = [], n = 0, r = this.curves; n < r.length; n++)
                for (var o = r[n], a = o && o.isEllipseCurve ? 2 * t : o && o.isLineCurve ? 1 : o && o.isSplineCurve ? t * o.points.length : t, s = o.getPoints(a), h = 0; h < s.length; h++) {
                    var c = s[h];
                    e && e.equals(c) || (i.push(c), e = c)
                }
            return this.autoClose && i.length > 1 && !i[i.length - 1].equals(i[0]) && i.push(i[0]), i
        },
        copy: function (t) {
            _n.prototype.copy.call(this, t), this.curves = [];
            for (var e = 0, i = t.curves.length; e < i; e++) {
                var n = t.curves[e];
                this.curves.push(n.clone())
            }
            return this.autoClose = t.autoClose, this
        },
        toJSON: function () {
            var t = _n.prototype.toJSON.call(this);
            t.autoClose = this.autoClose, t.curves = [];
            for (var e = 0, i = this.curves.length; e < i; e++) {
                var n = this.curves[e];
                t.curves.push(n.toJSON())
            }
            return t
        },
        fromJSON: function (t) {
            _n.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = [];
            for (var e = 0, i = t.curves.length; e < i; e++) {
                var n = t.curves[e];
                this.curves.push((new kh[n.type]).fromJSON(n))
            }
            return this
        }
    }), jn.prototype = Object.assign(Object.create(Gn.prototype), {
        constructor: jn,
        setFromPoints: function (t) {
            this.moveTo(t[0].x, t[0].y);
            for (var e = 1, i = t.length; e < i; e++) this.lineTo(t[e].x, t[e].y)
        },
        moveTo: function (t, e) {
            this.currentPoint.set(t, e)
        },
        lineTo: function (t, e) {
            var i = new kn(this.currentPoint.clone(), new r(t, e));
            this.curves.push(i), this.currentPoint.set(t, e)
        },
        quadraticCurveTo: function (t, e, i, n) {
            var o = new Un(this.currentPoint.clone(), new r(t, e), new r(i, n));
            this.curves.push(o), this.currentPoint.set(i, n)
        },
        bezierCurveTo: function (t, e, i, n, o, a) {
            var s = new In(this.currentPoint.clone(), new r(t, e), new r(i, n), new r(o, a));
            this.curves.push(s), this.currentPoint.set(o, a)
        },
        splineThru: function (t) {
            var e = [this.currentPoint.clone()].concat(t),
                i = new Bn(e);
            this.curves.push(i), this.currentPoint.copy(t[t.length - 1])
        },
        arc: function (t, e, i, n, r, o) {
            var a = this.currentPoint.x,
                s = this.currentPoint.y;
            this.absarc(t + a, e + s, i, n, r, o)
        },
        absarc: function (t, e, i, n, r, o) {
            this.absellipse(t, e, i, i, n, r, o)
        },
        ellipse: function (t, e, i, n, r, o, a, s) {
            var h = this.currentPoint.x,
                c = this.currentPoint.y;
            this.absellipse(t + h, e + c, i, n, r, o, a, s)
        },
        absellipse: function (t, e, i, n, r, o, a, s) {
            var h = new xn(t, e, i, n, r, o, a, s);
            if (this.curves.length > 0) {
                var c = h.getPoint(0);
                c.equals(this.currentPoint) || this.lineTo(c.x, c.y)
            }
            this.curves.push(h);
            var u = h.getPoint(1);
            this.currentPoint.copy(u)
        },
        copy: function (t) {
            return Gn.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this
        },
        toJSON: function () {
            var t = Gn.prototype.toJSON.call(this);
            return t.currentPoint = this.currentPoint.toArray(), t
        },
        fromJSON: function (t) {
            return Gn.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this
        }
    }), Vn.prototype = Object.assign(Object.create(jn.prototype), {
        constructor: Vn,
        getPointsHoles: function (t) {
            for (var e = [], i = 0, n = this.holes.length; i < n; i++) e[i] = this.holes[i].getPoints(t);
            return e
        },
        extractPoints: function (t) {
            return {
                shape: this.getPoints(t),
                holes: this.getPointsHoles(t)
            }
        },
        copy: function (t) {
            jn.prototype.copy.call(this, t), this.holes = [];
            for (var e = 0, i = t.holes.length; e < i; e++) {
                var n = t.holes[e];
                this.holes.push(n.clone())
            }
            return this
        },
        toJSON: function () {
            var t = jn.prototype.toJSON.call(this);
            t.uuid = this.uuid, t.holes = [];
            for (var e = 0, i = this.holes.length; e < i; e++) {
                var n = this.holes[e];
                t.holes.push(n.toJSON())
            }
            return t
        },
        fromJSON: function (t) {
            jn.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = [];
            for (var e = 0, i = t.holes.length; e < i; e++) {
                var n = t.holes[e];
                this.holes.push((new jn).fromJSON(n))
            }
            return this
        }
    }), Wn.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: Wn,
        isLight: !0,
        copy: function (t) {
            return lt.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
        },
        toJSON: function (t) {
            var e = lt.prototype.toJSON.call(this, t);
            return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
        }
    }), Hn.prototype = Object.assign(Object.create(Wn.prototype), {
        constructor: Hn,
        isHemisphereLight: !0,
        copy: function (t) {
            return Wn.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
        }
    }), Object.assign(Xn.prototype, {
        copy: function (t) {
            return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        toJSON: function () {
            var t = {};
            return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
        }
    }), qn.prototype = Object.assign(Object.create(Xn.prototype), {
        constructor: qn,
        isSpotLightShadow: !0,
        update: function (t) {
            var e = this.camera,
                i = 2 * ah.RAD2DEG * t.angle,
                n = this.mapSize.width / this.mapSize.height,
                r = t.distance || e.far;
            i === e.fov && n === e.aspect && r === e.far || (e.fov = i, e.aspect = n, e.far = r, e.updateProjectionMatrix())
        }
    }), Yn.prototype = Object.assign(Object.create(Wn.prototype), {
        constructor: Yn,
        isSpotLight: !0,
        copy: function (t) {
            return Wn.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
        }
    }), $n.prototype = Object.assign(Object.create(Wn.prototype), {
        constructor: $n,
        isPointLight: !0,
        copy: function (t) {
            return Wn.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
        }
    }), Zn.prototype = Object.assign(Object.create(Xn.prototype), {
        constructor: Zn
    }), Jn.prototype = Object.assign(Object.create(Wn.prototype), {
        constructor: Jn,
        isDirectionalLight: !0,
        copy: function (t) {
            return Wn.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
        }
    }), Qn.prototype = Object.assign(Object.create(Wn.prototype), {
        constructor: Qn,
        isAmbientLight: !0
    }), Kn.prototype = Object.assign(Object.create(Wn.prototype), {
        constructor: Kn,
        isRectAreaLight: !0,
        copy: function (t) {
            return Wn.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this
        },
        toJSON: function (t) {
            var e = Wn.prototype.toJSON.call(this, t);
            return e.object.width = this.width, e.object.height = this.height, e
        }
    }), tr.prototype = Object.assign(Object.create(ur.prototype), {
        constructor: tr,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: Gs,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }), er.prototype = Object.assign(Object.create(ur.prototype), {
        constructor: er,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: Gs,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }), Object.assign(ir.prototype, {
        evaluate: function (t) {
            var e = this.parameterPositions,
                i = this._cachedIndex,
                n = e[i],
                r = e[i - 1];
            t: {
                e: {
                    var o;
                    i: {
                        n: if (!(t < n)) {
                            for (var a = i + 2; ;) {
                                if (void 0 === n) {
                                    if (t < r) break n;
                                    return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, t, r)
                                }
                                if (i === a) break;
                                if (r = n, n = e[++i], t < n) break e
                            }
                            o = e.length;
                            break i
                        }
                        {
                            if (t >= r) break t;
                            var s = e[1];
                            t < s && (i = 2, r = s);
                            for (var a = i - 2; ;) {
                                if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, n);
                                if (i === a) break;
                                if (n = r, r = e[--i - 1], t >= r) break e
                            }
                            o = i, i = 0
                        }
                    }
                    for (; i < o;) {
                        var h = i + o >>> 1;
                        t < e[h] ? o = h : i = h + 1
                    }
                    if (n = e[i], void 0 === (r = e[i - 1])) return this._cachedIndex = 0, this.beforeStart_(0, t, n);
                    if (void 0 === n) return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, r, t)
                }
                this._cachedIndex = i,
                    this.intervalChanged_(i, r, n)
            }
            return this.interpolate_(i, r, t, n)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function () {
            return this.settings || this.DefaultSettings_
        },
        copySampleValue_: function (t) {
            for (var e = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = t * n, o = 0; o !== n; ++o) e[o] = i[r + o];
            return e
        },
        interpolate_: function () {
            throw new Error("call to abstract method")
        },
        intervalChanged_: function () {
        }
    }),
        //!\ DECLARE ALIAS AFTER assign prototype !
        Object.assign(ir.prototype, {
            beforeStart_: ir.prototype.copySampleValue_,
            afterEnd_: ir.prototype.copySampleValue_
        }), nr.prototype = Object.assign(Object.create(ir.prototype), {
        constructor: nr,
        interpolate_: function (t, e, i, n) {
            for (var r = this.resultBuffer, o = this.sampleValues, s = this.valueSize, h = t * s, c = (i - e) / (n - e), u = h + s; h !== u; h += 4) a.slerpFlat(r, 0, o, h - s, o, h, c);
            return r
        }
    }), rr.prototype = Object.assign(Object.create(ur.prototype), {
        constructor: rr,
        ValueTypeName: "quaternion",
        DefaultInterpolation: js,
        InterpolantFactoryMethodLinear: function (t) {
            return new nr(this.times, this.values, this.getValueSize(), t)
        },
        InterpolantFactoryMethodSmooth: void 0
    }), or.prototype = Object.assign(Object.create(ur.prototype), {
        constructor: or,
        ValueTypeName: "color"
    }), ar.prototype = Object.assign(Object.create(ur.prototype), {
        constructor: ar,
        ValueTypeName: "number"
    }), sr.prototype = Object.assign(Object.create(ir.prototype), {
        constructor: sr,
        DefaultSettings_: {
            endingStart: Ws,
            endingEnd: Ws
        },
        intervalChanged_: function (t, e, i) {
            var n = this.parameterPositions,
                r = t - 2,
                o = t + 1,
                a = n[r],
                s = n[o];
            if (void 0 === a) switch (this.getSettings_().endingStart) {
                case Hs:
                    r = t, a = 2 * e - i;
                    break;
                case Xs:
                    r = n.length - 2, a = e + n[r] - n[r + 1];
                    break;
                default:
                    r = t, a = i
            }
            if (void 0 === s) switch (this.getSettings_().endingEnd) {
                case Hs:
                    o = t, s = 2 * i - e;
                    break;
                case Xs:
                    o = 1, s = i + n[1] - n[0];
                    break;
                default:
                    o = t - 1, s = e
            }
            var h = .5 * (i - e),
                c = this.valueSize;
            this._weightPrev = h / (e - a), this._weightNext = h / (s - i), this._offsetPrev = r * c, this._offsetNext = o * c
        },
        interpolate_: function (t, e, i, n) {
            for (var r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = t * a, h = s - a, c = this._offsetPrev, u = this._offsetNext, l = this._weightPrev, p = this._weightNext, f = (i - e) / (n - e), d = f * f, m = d * f, v = -l * m + 2 * l * d - l * f, g = (1 + l) * m + (-1.5 - 2 * l) * d + (-.5 + l) * f + 1, y = (-1 - p) * m + (1.5 + p) * d + .5 * f, _ = p * m - p * d, x = 0; x !== a; ++x) r[x] = v * o[c + x] + g * o[h + x] + y * o[s + x] + _ * o[u + x];
            return r
        }
    }), hr.prototype = Object.assign(Object.create(ir.prototype), {
        constructor: hr,
        interpolate_: function (t, e, i, n) {
            for (var r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = t * a, h = s - a, c = (i - e) / (n - e), u = 1 - c, l = 0; l !== a; ++l) r[l] = o[h + l] * u + o[s + l] * c;
            return r
        }
    }), cr.prototype = Object.assign(Object.create(ir.prototype), {
        constructor: cr,
        interpolate_: function (t) {
            return this.copySampleValue_(t - 1)
        }
    });
    var zh = {
        arraySlice: function (t, e, i) {
            return zh.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t.slice(e, i)
        },
        convertArray: function (t, e, i) {
            return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
        },
        isTypedArray: function (t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
        },
        getKeyframeOrder: function (t) {
            function e(e, i) {
                return t[e] - t[i]
            }

            for (var i = t.length, n = new Array(i), r = 0; r !== i; ++r) n[r] = r;
            return n.sort(e), n
        },
        sortedArray: function (t, e, i) {
            for (var n = t.length, r = new t.constructor(n), o = 0, a = 0; a !== n; ++o)
                for (var s = i[o] * e, h = 0; h !== e; ++h) r[a++] = t[s + h];
            return r
        },
        flattenJSON: function (t, e, i, n) {
            for (var r = 1, o = t[0]; void 0 !== o && void 0 === o[n];) o = t[r++];
            if (void 0 !== o) {
                var a = o[n];
                if (void 0 !== a)
                    if (Array.isArray(a))
                        do {
                            a = o[n], void 0 !== a && (e.push(o.time), i.push.apply(i, a)), o = t[r++]
                        } while (void 0 !== o);
                    else if (void 0 !== a.toArray)
                        do {
                            a = o[n], void 0 !== a && (e.push(o.time), a.toArray(i, i.length)), o = t[r++]
                        } while (void 0 !== o);
                    else
                        do {
                            a = o[n], void 0 !== a && (e.push(o.time), i.push(a)), o = t[r++]
                        } while (void 0 !== o)
            }
        }
    };
    Object.assign(ur, {
        parse: function (t) {
            if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
            var e = ur._getTrackTypeForValueTypeName(t.type);
            if (void 0 === t.times) {
                var i = [],
                    n = [];
                zh.flattenJSON(t.keys, i, n, "value"), t.times = i, t.values = n
            }
            return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
        },
        toJSON: function (t) {
            var e, i = t.constructor;
            if (void 0 !== i.toJSON) e = i.toJSON(t);
            else {
                e = {
                    name: t.name,
                    times: zh.convertArray(t.times, Array),
                    values: zh.convertArray(t.values, Array)
                };
                var n = t.getInterpolation();
                n !== t.DefaultInterpolation && (e.interpolation = n)
            }
            return e.type = t.ValueTypeName, e
        },
        _getTrackTypeForValueTypeName: function (t) {
            switch (t.toLowerCase()) {
                case "scalar":
                case "double":
                case "float":
                case "number":
                case "integer":
                    return ar;
                case "vector":
                case "vector2":
                case "vector3":
                case "vector4":
                    return lr;
                case "color":
                    return or;
                case "quaternion":
                    return rr;
                case "bool":
                case "boolean":
                    return er;
                case "string":
                    return tr
            }
            throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
        }
    }), Object.assign(ur.prototype, {
        constructor: ur,
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: js,
        InterpolantFactoryMethodDiscrete: function (t) {
            return new cr(this.times, this.values, this.getValueSize(), t)
        },
        InterpolantFactoryMethodLinear: function (t) {
            return new hr(this.times, this.values, this.getValueSize(), t)
        },
        InterpolantFactoryMethodSmooth: function (t) {
            return new sr(this.times, this.values, this.getValueSize(), t)
        },
        setInterpolation: function (t) {
            var e;
            switch (t) {
                case Gs:
                    e = this.InterpolantFactoryMethodDiscrete;
                    break;
                case js:
                    e = this.InterpolantFactoryMethodLinear;
                    break;
                case Vs:
                    e = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 !== e) this.createInterpolant = e;
            else {
                var i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (t === this.DefaultInterpolation) throw new Error(i);
                    this.setInterpolation(this.DefaultInterpolation)
                }
            }
        },
        getInterpolation: function () {
            switch (this.createInterpolant) {
                case this.InterpolantFactoryMethodDiscrete:
                    return Gs;
                case this.InterpolantFactoryMethodLinear:
                    return js;
                case this.InterpolantFactoryMethodSmooth:
                    return Vs
            }
        },
        getValueSize: function () {
            return this.values.length / this.times.length
        },
        shift: function (t) {
            if (0 !== t)
                for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] += t;
            return this
        },
        scale: function (t) {
            if (1 !== t)
                for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] *= t;
            return this
        },
        trim: function (t, e) {
            for (var i = this.times, n = i.length, r = 0, o = n - 1; r !== n && i[r] < t;) ++r;
            for (; -1 !== o && i[o] > e;) --o;
            if (++o, 0 !== r || o !== n) {
                r >= o && (o = Math.max(o, 1), r = o - 1);
                var a = this.getValueSize();
                this.times = zh.arraySlice(i, r, o), this.values = zh.arraySlice(this.values, r * a, o * a)
            }
            return this
        },
        validate: function () {
            var t = !0,
                e = this.getValueSize();
            e - Math.floor(e) != 0 && (t = !1);
            var i = this.times,
                n = this.values,
                r = i.length;
            0 === r && (t = !1);
            for (var o = null, a = 0; a !== r; a++) {
                var s = i[a];
                if ("number" == typeof s && isNaN(s)) {
                    t = !1;
                    break
                }
                if (null !== o && o > s) {
                    t = !1;
                    break
                }
                o = s
            }
            if (void 0 !== n && zh.isTypedArray(n))
                for (var a = 0, h = n.length; a !== h; ++a) {
                    var c = n[a];
                    if (isNaN(c)) {
                        t = !1;
                        break
                    }
                }
            return t
        },
        optimize: function () {
            for (var t = this.times, e = this.values, i = this.getValueSize(), n = this.getInterpolation() === Vs, r = 1, o = t.length - 1, a = 1; a < o; ++a) {
                var s = !1,
                    h = t[a];
                if (h !== t[a + 1] && (1 !== a || h !== h[0]))
                    if (n) s = !0;
                    else
                        for (var c = a * i, u = c - i, l = c + i, p = 0; p !== i; ++p) {
                            var f = e[c + p];
                            if (f !== e[u + p] || f !== e[l + p]) {
                                s = !0;
                                break
                            }
                        }
                if (s) {
                    if (a !== r) {
                        t[r] = t[a];
                        for (var d = a * i, m = r * i, p = 0; p !== i; ++p) e[m + p] = e[d + p]
                    }
                    ++r
                }
            }
            if (o > 0) {
                t[r] = t[o];
                for (var d = o * i, m = r * i, p = 0; p !== i; ++p) e[m + p] = e[d + p];
                ++r
            }
            return r !== t.length && (this.times = zh.arraySlice(t, 0, r), this.values = zh.arraySlice(e, 0, r * i)), this
        }
    }), lr.prototype = Object.assign(Object.create(ur.prototype), {
        constructor: lr,
        ValueTypeName: "vector"
    }), Object.assign(pr, {
        parse: function (t) {
            for (var e = [], i = t.tracks, n = 1 / (t.fps || 1), r = 0, o = i.length; r !== o; ++r) e.push(ur.parse(i[r]).scale(n));
            return new pr(t.name, t.duration, e)
        },
        toJSON: function (t) {
            for (var e = [], i = t.tracks, n = {
                name: t.name,
                duration: t.duration,
                tracks: e
            }, r = 0, o = i.length; r !== o; ++r) e.push(ur.toJSON(i[r]));
            return n
        },
        CreateFromMorphTargetSequence: function (t, e, i, n) {
            for (var r = e.length, o = [], a = 0; a < r; a++) {
                var s = [],
                    h = [];
                s.push((a + r - 1) % r, a, (a + 1) % r), h.push(0, 1, 0);
                var c = zh.getKeyframeOrder(s);
                s = zh.sortedArray(s, 1, c), h = zh.sortedArray(h, 1, c), n || 0 !== s[0] || (s.push(r), h.push(h[0])), o.push(new ar(".morphTargetInfluences[" + e[a].name + "]", s, h).scale(1 / i))
            }
            return new pr(t, -1, o)
        },
        findByName: function (t, e) {
            var i = t;
            if (!Array.isArray(t)) {
                var n = t;
                i = n.geometry && n.geometry.animations || n.animations
            }
            for (var r = 0; r < i.length; r++)
                if (i[r].name === e) return i[r];
            return null
        },
        CreateClipsFromMorphTargetSequences: function (t, e, i) {
            for (var n = {}, r = /^([\w-]*?)([\d]+)$/, o = 0, a = t.length; o < a; o++) {
                var s = t[o],
                    h = s.name.match(r);
                if (h && h.length > 1) {
                    var c = h[1],
                        u = n[c];
                    u || (n[c] = u = []), u.push(s)
                }
            }
            var l = [];
            for (var c in n) l.push(pr.CreateFromMorphTargetSequence(c, n[c], e, i));
            return l
        },
        parseAnimation: function (t, e) {
            if (!t) return null;
            for (var i = function (t, e, i, n, r) {
                if (0 !== i.length) {
                    var o = [],
                        a = [];
                    zh.flattenJSON(i, o, a, n), 0 !== o.length && r.push(new t(e, o, a))
                }
            }, n = [], r = t.name || "default", o = t.length || -1, a = t.fps || 30, s = t.hierarchy || [], h = 0; h < s.length; h++) {
                var c = s[h].keys;
                if (c && 0 !== c.length)
                    if (c[0].morphTargets) {
                        for (var u = {}, l = 0; l < c.length; l++)
                            if (c[l].morphTargets)
                                for (var p = 0; p < c[l].morphTargets.length; p++) u[c[l].morphTargets[p]] = -1;
                        for (var f in u) {
                            for (var d = [], m = [], p = 0; p !== c[l].morphTargets.length; ++p) {
                                var v = c[l];
                                d.push(v.time), m.push(v.morphTarget === f ? 1 : 0)
                            }
                            n.push(new ar(".morphTargetInfluence[" + f + "]", d, m))
                        }
                        o = u.length * (a || 1)
                    } else {
                        var g = ".bones[" + e[h].name + "]";
                        i(lr, g + ".position", c, "pos", n), i(rr, g + ".quaternion", c, "rot", n), i(lr, g + ".scale", c, "scl", n)
                    }
            }
            return 0 === n.length ? null : new pr(r, o, n)
        }
    }), Object.assign(pr.prototype, {
        resetDuration: function () {
            for (var t = this.tracks, e = 0, i = 0, n = t.length; i !== n; ++i) {
                var r = this.tracks[i];
                e = Math.max(e, r.times[r.times.length - 1])
            }
            this.duration = e
        },
        trim: function () {
            for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
            return this
        },
        optimize: function () {
            for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
            return this
        }
    }), Object.assign(fr.prototype, {
        load: function (t, e, i, n) {
            var r = this;
            new fn(r.manager).load(t, function (t) {
                e(r.parse(JSON.parse(t)))
            }, i, n)
        },
        setTextures: function (t) {
            this.textures = t
        },
        parse: function (t) {
            function e(t) {
                return i[t], i[t]
            }

            var i = this.textures,
                n = new Eh[t.type];
            if (void 0 !== t.uuid && (n.uuid = t.uuid), void 0 !== t.name && (n.name = t.name), void 0 !== t.color && n.color.setHex(t.color), void 0 !== t.roughness && (n.roughness = t.roughness), void 0 !== t.metalness && (n.metalness = t.metalness), void 0 !== t.emissive && n.emissive.setHex(t.emissive), void 0 !== t.specular && n.specular.setHex(t.specular), void 0 !== t.shininess && (n.shininess = t.shininess), void 0 !== t.clearCoat && (n.clearCoat = t.clearCoat), void 0 !== t.clearCoatRoughness && (n.clearCoatRoughness = t.clearCoatRoughness), void 0 !== t.uniforms && (n.uniforms = t.uniforms), void 0 !== t.vertexShader && (n.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (n.fragmentShader = t.fragmentShader), void 0 !== t.vertexColors && (n.vertexColors = t.vertexColors), void 0 !== t.fog && (n.fog = t.fog), void 0 !== t.flatShading && (n.flatShading = t.flatShading), void 0 !== t.blending && (n.blending = t.blending), void 0 !== t.side && (n.side = t.side), void 0 !== t.opacity && (n.opacity = t.opacity), void 0 !== t.transparent && (n.transparent = t.transparent), void 0 !== t.alphaTest && (n.alphaTest = t.alphaTest), void 0 !== t.depthTest && (n.depthTest = t.depthTest), void 0 !== t.depthWrite && (n.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (n.colorWrite = t.colorWrite), void 0 !== t.wireframe && (n.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (n.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (n.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (n.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (n.rotation = t.rotation), 1 !== t.linewidth && (n.linewidth = t.linewidth), void 0 !== t.dashSize && (n.dashSize = t.dashSize), void 0 !== t.gapSize && (n.gapSize = t.gapSize), void 0 !== t.scale && (n.scale = t.scale), void 0 !== t.skinning && (n.skinning = t.skinning), void 0 !== t.morphTargets && (n.morphTargets = t.morphTargets), void 0 !== t.dithering && (n.dithering = t.dithering), void 0 !== t.visible && (n.visible = t.visible), void 0 !== t.userData && (n.userData = t.userData), void 0 !== t.shading && (n.flatShading = 1 === t.shading), void 0 !== t.size && (n.size = t.size), void 0 !== t.sizeAttenuation && (n.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (n.map = e(t.map)), void 0 !== t.alphaMap && (n.alphaMap = e(t.alphaMap), n.transparent = !0), void 0 !== t.bumpMap && (n.bumpMap = e(t.bumpMap)), void 0 !== t.bumpScale && (n.bumpScale = t.bumpScale), void 0 !== t.normalMap && (n.normalMap = e(t.normalMap)), void 0 !== t.normalScale) {
                var o = t.normalScale;
                !1 === Array.isArray(o) && (o = [o, o]), n.normalScale = (new r).fromArray(o)
            }
            return void 0 !== t.displacementMap && (n.displacementMap = e(t.displacementMap)), void 0 !== t.displacementScale && (n.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (n.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (n.roughnessMap = e(t.roughnessMap)), void 0 !== t.metalnessMap && (n.metalnessMap = e(t.metalnessMap)), void 0 !== t.emissiveMap && (n.emissiveMap = e(t.emissiveMap)), void 0 !== t.emissiveIntensity && (n.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (n.specularMap = e(t.specularMap)), void 0 !== t.envMap && (n.envMap = e(t.envMap)), void 0 !== t.reflectivity && (n.reflectivity = t.reflectivity), void 0 !== t.lightMap && (n.lightMap = e(t.lightMap)), void 0 !== t.lightMapIntensity && (n.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (n.aoMap = e(t.aoMap)), void 0 !== t.aoMapIntensity && (n.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (n.gradientMap = e(t.gradientMap)), n
        }
    }), Object.assign(dr.prototype, {
        load: function (t, e, i, n) {
            var r = this;
            new fn(r.manager).load(t, function (t) {
                e(r.parse(JSON.parse(t)))
            }, i, n)
        },
        parse: function (t) {
            var e = new Et,
                i = t.data.index;
            if (void 0 !== i) {
                var n = new Uh[i.type](i.array);
                e.setIndex(new vt(n, 1))
            }
            var r = t.data.attributes;
            for (var o in r) {
                var a = r[o],
                    n = new Uh[a.type](a.array);
                e.addAttribute(o, new vt(n, a.itemSize, a.normalized))
            }
            var h = t.data.groups || t.data.drawcalls || t.data.offsets;
            if (void 0 !== h)
                for (var c = 0, u = h.length; c !== u; ++c) {
                    var l = h[c];
                    e.addGroup(l.start, l.count, l.materialIndex)
                }
            var p = t.data.boundingSphere;
            if (void 0 !== p) {
                var f = new s;
                void 0 !== p.center && f.fromArray(p.center), e.boundingSphere = new rt(f, p.radius)
            }
            return e
        }
    });
    var Uh = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };
    mr.Handlers = {
        handlers: [],
        add: function (t, e) {
            this.handlers.push(t, e)
        },
        get: function (t) {
            for (var e = this.handlers, i = 0, n = e.length; i < n; i += 2) {
                var r = e[i],
                    o = e[i + 1];
                if (r.test(t)) return o
            }
            return null
        }
    }, Object.assign(mr.prototype, {
        crossOrigin: void 0,
        initMaterials: function (t, e, i) {
            for (var n = [], r = 0; r < t.length; ++r) n[r] = this.createMaterial(t[r], e, i);
            return n
        },
        createMaterial: function () {
            var t = {
                    NoBlending: ha,
                    NormalBlending: ca,
                    AdditiveBlending: ua,
                    SubtractiveBlending: la,
                    MultiplyBlending: pa,
                    CustomBlending: fa
                },
                e = new $,
                i = new yn,
                n = new fr;
            return function (r, o, a) {
                function s(t, e, n, r, s) {
                    var c, u = o + t,
                        l = mr.Handlers.get(u);
                    null !== l ? c = l.load(u) : (i.setCrossOrigin(a), c = i.load(u)), void 0 !== e && (c.repeat.fromArray(e), 1 !== e[0] && (c.wrapS = ts), 1 !== e[1] && (c.wrapT = ts)), void 0 !== n && c.offset.fromArray(n), void 0 !== r && ("repeat" === r[0] && (c.wrapS = ts), "mirror" === r[0] && (c.wrapS = is), "repeat" === r[1] && (c.wrapT = ts), "mirror" === r[1] && (c.wrapT = is)), void 0 !== s && (c.anisotropy = s);
                    var p = ah.generateUUID();
                    return h[p] = c, p
                }

                var h = {},
                    c = {
                        uuid: ah.generateUUID(),
                        type: "MeshLambertMaterial"
                    };
                for (var u in r) {
                    var l = r[u];
                    switch (u) {
                        case "DbgColor":
                        case "DbgIndex":
                        case "opticalDensity":
                        case "illumination":
                            break;
                        case "DbgName":
                            c.name = l;
                            break;
                        case "blending":
                            c.blending = t[l];
                            break;
                        case "colorAmbient":
                        case "mapAmbient":
                            break;
                        case "colorDiffuse":
                            c.color = e.fromArray(l).getHex();
                            break;
                        case "colorSpecular":
                            c.specular = e.fromArray(l).getHex();
                            break;
                        case "colorEmissive":
                            c.emissive = e.fromArray(l).getHex();
                            break;
                        case "specularCoef":
                            c.shininess = l;
                            break;
                        case "shading":
                            "basic" === l.toLowerCase() && (c.type = "MeshBasicMaterial"), "phong" === l.toLowerCase() && (c.type = "MeshPhongMaterial"), "standard" === l.toLowerCase() && (c.type = "MeshStandardMaterial");
                            break;
                        case "mapDiffuse":
                            c.map = s(l, r.mapDiffuseRepeat, r.mapDiffuseOffset, r.mapDiffuseWrap, r.mapDiffuseAnisotropy);
                            break;
                        case "mapDiffuseRepeat":
                        case "mapDiffuseOffset":
                        case "mapDiffuseWrap":
                        case "mapDiffuseAnisotropy":
                            break;
                        case "mapEmissive":
                            c.emissiveMap = s(l, r.mapEmissiveRepeat, r.mapEmissiveOffset, r.mapEmissiveWrap, r.mapEmissiveAnisotropy);
                            break;
                        case "mapEmissiveRepeat":
                        case "mapEmissiveOffset":
                        case "mapEmissiveWrap":
                        case "mapEmissiveAnisotropy":
                            break;
                        case "mapLight":
                            c.lightMap = s(l, r.mapLightRepeat, r.mapLightOffset, r.mapLightWrap, r.mapLightAnisotropy);
                            break;
                        case "mapLightRepeat":
                        case "mapLightOffset":
                        case "mapLightWrap":
                        case "mapLightAnisotropy":
                            break;
                        case "mapAO":
                            c.aoMap = s(l, r.mapAORepeat, r.mapAOOffset, r.mapAOWrap, r.mapAOAnisotropy);
                            break;
                        case "mapAORepeat":
                        case "mapAOOffset":
                        case "mapAOWrap":
                        case "mapAOAnisotropy":
                            break;
                        case "mapBump":
                            c.bumpMap = s(l, r.mapBumpRepeat, r.mapBumpOffset, r.mapBumpWrap, r.mapBumpAnisotropy);
                            break;
                        case "mapBumpScale":
                            c.bumpScale = l;
                            break;
                        case "mapBumpRepeat":
                        case "mapBumpOffset":
                        case "mapBumpWrap":
                        case "mapBumpAnisotropy":
                            break;
                        case "mapNormal":
                            c.normalMap = s(l, r.mapNormalRepeat, r.mapNormalOffset, r.mapNormalWrap, r.mapNormalAnisotropy);
                            break;
                        case "mapNormalFactor":
                            c.normalScale = [l, l];
                            break;
                        case "mapNormalRepeat":
                        case "mapNormalOffset":
                        case "mapNormalWrap":
                        case "mapNormalAnisotropy":
                            break;
                        case "mapSpecular":
                            c.specularMap = s(l, r.mapSpecularRepeat, r.mapSpecularOffset, r.mapSpecularWrap, r.mapSpecularAnisotropy);
                            break;
                        case "mapSpecularRepeat":
                        case "mapSpecularOffset":
                        case "mapSpecularWrap":
                        case "mapSpecularAnisotropy":
                            break;
                        case "mapMetalness":
                            c.metalnessMap = s(l, r.mapMetalnessRepeat, r.mapMetalnessOffset, r.mapMetalnessWrap, r.mapMetalnessAnisotropy);
                            break;
                        case "mapMetalnessRepeat":
                        case "mapMetalnessOffset":
                        case "mapMetalnessWrap":
                        case "mapMetalnessAnisotropy":
                            break;
                        case "mapRoughness":
                            c.roughnessMap = s(l, r.mapRoughnessRepeat, r.mapRoughnessOffset, r.mapRoughnessWrap, r.mapRoughnessAnisotropy);
                            break;
                        case "mapRoughnessRepeat":
                        case "mapRoughnessOffset":
                        case "mapRoughnessWrap":
                        case "mapRoughnessAnisotropy":
                            break;
                        case "mapAlpha":
                            c.alphaMap = s(l, r.mapAlphaRepeat, r.mapAlphaOffset, r.mapAlphaWrap, r.mapAlphaAnisotropy);
                            break;
                        case "mapAlphaRepeat":
                        case "mapAlphaOffset":
                        case "mapAlphaWrap":
                        case "mapAlphaAnisotropy":
                            break;
                        case "flipSided":
                            c.side = ea;
                            break;
                        case "doubleSided":
                            c.side = ia;
                            break;
                        case "transparency":
                            c.opacity = l;
                            break;
                        case "depthTest":
                        case "depthWrite":
                        case "colorWrite":
                        case "opacity":
                        case "reflectivity":
                        case "transparent":
                        case "visible":
                        case "wireframe":
                            c[u] = l;
                            break;
                        case "vertexColors":
                            !0 === l && (c.vertexColors = sa), "face" === l && (c.vertexColors = aa)
                    }
                }
                return "MeshBasicMaterial" === c.type && delete c.emissive, "MeshPhongMaterial" !== c.type && delete c.specular, c.opacity < 1 && (c.transparent = !0), n.setTextures(h), n.parse(c)
            }
        }()
    });
    var Fh = {
        decodeText: function (t) {
            if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t);
            for (var e = "", i = 0, n = t.length; i < n; i++) e += String.fromCharCode(t[i]);
            return e
        },
        extractUrlBase: function (t) {
            var e = t.split("/");
            return 1 === e.length ? "./" : (e.pop(), e.join("/") + "/")
        }
    };
    Object.assign(vr.prototype, {
        load: function (t, e, i, n) {
            var r = this,
                o = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : Fh.extractUrlBase(t),
                a = new fn(this.manager);
            a.setWithCredentials(this.withCredentials), a.load(t, function (t) {
                var i = JSON.parse(t),
                    n = i.metadata;
                if (void 0 !== n) {
                    var a = n.type;
                    if (void 0 !== a) {
                        if ("object" === a.toLowerCase()) return;
                        if ("scene" === a.toLowerCase()) return
                    }
                }
                var s = r.parse(i, o);
                e(s.geometry, s.materials)
            }, i, n)
        },
        setTexturePath: function (t) {
            this.texturePath = t
        },
        parse: function () {
            function t(t, e) {
                function i(t, e) {
                    return t & 1 << e
                }

                var n, o, a, h, c, u, l, p, f, d, m, v, g, y, _, x, b, w, M, T, S, A, P, E, C, L, N, O = t.faces,
                    R = t.vertices,
                    I = t.normals,
                    D = t.colors,
                    k = t.scale,
                    z = 0;
                if (void 0 !== t.uvs) {
                    for (n = 0; n < t.uvs.length; n++) t.uvs[n].length && z++;
                    for (n = 0; n < z; n++) e.faceVertexUvs[n] = []
                }
                for (h = 0, c = R.length; h < c;) w = new s, w.x = R[h++] * k, w.y = R[h++] * k, w.z = R[h++] * k, e.vertices.push(w);
                for (h = 0, c = O.length; h < c;)
                    if (d = O[h++], m = i(d, 0), v = i(d, 1), g = i(d, 3), y = i(d, 4), _ = i(d, 5), x = i(d, 6), b = i(d, 7), m) {
                        if (T = new dt, T.a = O[h], T.b = O[h + 1], T.c = O[h + 3], S = new dt, S.a = O[h + 1], S.b = O[h + 2], S.c = O[h + 3], h += 4, v && (f = O[h++], T.materialIndex = f, S.materialIndex = f), a = e.faces.length, g)
                            for (n = 0; n < z; n++)
                                for (E = t.uvs[n], e.faceVertexUvs[n][a] = [], e.faceVertexUvs[n][a + 1] = [], o = 0; o < 4; o++) p = O[h++], L = E[2 * p], N = E[2 * p + 1], C = new r(L, N), 2 !== o && e.faceVertexUvs[n][a].push(C), 0 !== o && e.faceVertexUvs[n][a + 1].push(C);
                        if (y && (l = 3 * O[h++], T.normal.set(I[l++], I[l++], I[l]), S.normal.copy(T.normal)), _)
                            for (n = 0; n < 4; n++) l = 3 * O[h++], P = new s(I[l++], I[l++], I[l]), 2 !== n && T.vertexNormals.push(P), 0 !== n && S.vertexNormals.push(P);
                        if (x && (u = O[h++], A = D[u], T.color.setHex(A), S.color.setHex(A)), b)
                            for (n = 0; n < 4; n++) u = O[h++], A = D[u], 2 !== n && T.vertexColors.push(new $(A)), 0 !== n && S.vertexColors.push(new $(A));
                        e.faces.push(T), e.faces.push(S)
                    } else {
                        if (M = new dt, M.a = O[h++], M.b = O[h++], M.c = O[h++], v && (f = O[h++], M.materialIndex = f), a = e.faces.length, g)
                            for (n = 0; n < z; n++)
                                for (E = t.uvs[n], e.faceVertexUvs[n][a] = [], o = 0; o < 3; o++) p = O[h++], L = E[2 * p], N = E[2 * p + 1], C = new r(L, N), e.faceVertexUvs[n][a].push(C);
                        if (y && (l = 3 * O[h++], M.normal.set(I[l++], I[l++], I[l])), _)
                            for (n = 0; n < 3; n++) l = 3 * O[h++], P = new s(I[l++], I[l++], I[l]), M.vertexNormals.push(P);
                        if (x && (u = O[h++], M.color.setHex(D[u])), b)
                            for (n = 0; n < 3; n++) u = O[h++], M.vertexColors.push(new $(D[u]));
                        e.faces.push(M)
                    }
            }

            function e(t, e) {
                var i = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2;
                if (t.skinWeights)
                    for (var n = 0, r = t.skinWeights.length; n < r; n += i) {
                        var o = t.skinWeights[n],
                            a = i > 1 ? t.skinWeights[n + 1] : 0,
                            s = i > 2 ? t.skinWeights[n + 2] : 0,
                            h = i > 3 ? t.skinWeights[n + 3] : 0;
                        e.skinWeights.push(new u(o, a, s, h))
                    }
                if (t.skinIndices)
                    for (var n = 0, r = t.skinIndices.length; n < r; n += i) {
                        var c = t.skinIndices[n],
                            l = i > 1 ? t.skinIndices[n + 1] : 0,
                            p = i > 2 ? t.skinIndices[n + 2] : 0,
                            f = i > 3 ? t.skinIndices[n + 3] : 0;
                        e.skinIndices.push(new u(c, l, p, f))
                    }
                e.bones = t.bones, e.bones && e.bones.length > 0 && (e.skinWeights.length !== e.skinIndices.length || (e.skinIndices.length, e.vertices.length))
            }

            function i(t, e) {
                var i = t.scale;
                if (void 0 !== t.morphTargets)
                    for (var n = 0, r = t.morphTargets.length; n < r; n++) {
                        e.morphTargets[n] = {}, e.morphTargets[n].name = t.morphTargets[n].name, e.morphTargets[n].vertices = [];
                        for (var o = e.morphTargets[n].vertices, a = t.morphTargets[n].vertices, h = 0, c = a.length; h < c; h += 3) {
                            var u = new s;
                            u.x = a[h] * i, u.y = a[h + 1] * i, u.z = a[h + 2] * i, o.push(u)
                        }
                    }
                if (void 0 !== t.morphColors && t.morphColors.length > 0)
                    for (var l = e.faces, p = t.morphColors[0].colors, n = 0, r = l.length; n < r; n++) l[n].color.fromArray(p, 3 * n)
            }

            function n(t, e) {
                var i = [],
                    n = [];
                void 0 !== t.animation && n.push(t.animation), void 0 !== t.animations && (t.animations.length ? n = n.concat(t.animations) : n.push(t.animations));
                for (var r = 0; r < n.length; r++) {
                    var o = pr.parseAnimation(n[r], e.bones);
                    o && i.push(o)
                }
                if (e.morphTargets) {
                    var a = pr.CreateClipsFromMorphTargetSequences(e.morphTargets, 10);
                    i = i.concat(a)
                }
                i.length > 0 && (e.animations = i)
            }

            return function (r, o) {
                void 0 !== r.data && (r = r.data), void 0 !== r.scale ? r.scale = 1 / r.scale : r.scale = 1;
                var a = new mt;
                return t(r, a), e(r, a), i(r, a), n(r, a), a.computeFaceNormals(), a.computeBoundingSphere(), void 0 === r.materials || 0 === r.materials.length ? {
                    geometry: a
                } : {
                    geometry: a,
                    materials: mr.prototype.initMaterials(r.materials, o, this.crossOrigin)
                }
            }
        }()
    }), Object.assign(gr.prototype, {
        load: function (t, e, i, n) {
            "" === this.texturePath && (this.texturePath = t.substring(0, t.lastIndexOf("/") + 1));
            var r = this;
            new fn(r.manager).load(t, function (t) {
                var i = null;
                try {
                    i = JSON.parse(t)
                } catch (t) {
                    return void(void 0 !== n && n(t))
                }
                var o = i.metadata;
                void 0 !== o && void 0 !== o.type && "geometry" !== o.type.toLowerCase() && r.parse(i, e)
            }, i, n)
        },
        setTexturePath: function (t) {
            this.texturePath = t
        },
        setCrossOrigin: function (t) {
            this.crossOrigin = t
        },
        parse: function (t, e) {
            var i = this.parseShape(t.shapes),
                n = this.parseGeometries(t.geometries, i),
                r = this.parseImages(t.images, function () {
                    void 0 !== e && e(s)
                }),
                o = this.parseTextures(t.textures, r),
                a = this.parseMaterials(t.materials, o),
                s = this.parseObject(t.object, n, a);
            return t.animations && (s.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(s), s
        },
        parseShape: function (t) {
            var e = {};
            if (void 0 !== t)
                for (var i = 0, n = t.length; i < n; i++) {
                    var r = (new Vn).fromJSON(t[i]);
                    e[r.uuid] = r
                }
            return e
        },
        parseGeometries: function (t, e) {
            var i = {};
            if (void 0 !== t)
                for (var n = new vr, r = new dr, o = 0, a = t.length; o < a; o++) {
                    var s, h = t[o];
                    switch (h.type) {
                        case "PlaneGeometry":
                        case "PlaneBufferGeometry":
                            s = new Ph[h.type](h.width, h.height, h.widthSegments, h.heightSegments);
                            break;
                        case "BoxGeometry":
                        case "BoxBufferGeometry":
                        case "CubeGeometry":
                            s = new Ph[h.type](h.width, h.height, h.depth, h.widthSegments, h.heightSegments, h.depthSegments);
                            break;
                        case "CircleGeometry":
                        case "CircleBufferGeometry":
                            s = new Ph[h.type](h.radius, h.segments, h.thetaStart, h.thetaLength);
                            break;
                        case "CylinderGeometry":
                        case "CylinderBufferGeometry":
                            s = new Ph[h.type](h.radiusTop, h.radiusBottom, h.height, h.radialSegments, h.heightSegments, h.openEnded, h.thetaStart, h.thetaLength);
                            break;
                        case "ConeGeometry":
                        case "ConeBufferGeometry":
                            s = new Ph[h.type](h.radius, h.height, h.radialSegments, h.heightSegments, h.openEnded, h.thetaStart, h.thetaLength);
                            break;
                        case "SphereGeometry":
                        case "SphereBufferGeometry":
                            s = new Ph[h.type](h.radius, h.widthSegments, h.heightSegments, h.phiStart, h.phiLength, h.thetaStart, h.thetaLength);
                            break;
                        case "DodecahedronGeometry":
                        case "DodecahedronBufferGeometry":
                        case "IcosahedronGeometry":
                        case "IcosahedronBufferGeometry":
                        case "OctahedronGeometry":
                        case "OctahedronBufferGeometry":
                        case "TetrahedronGeometry":
                        case "TetrahedronBufferGeometry":
                            s = new Ph[h.type](h.radius, h.detail);
                            break;
                        case "RingGeometry":
                        case "RingBufferGeometry":
                            s = new Ph[h.type](h.innerRadius, h.outerRadius, h.thetaSegments, h.phiSegments, h.thetaStart, h.thetaLength);
                            break;
                        case "TorusGeometry":
                        case "TorusBufferGeometry":
                            s = new Ph[h.type](h.radius, h.tube, h.radialSegments, h.tubularSegments, h.arc);
                            break;
                        case "TorusKnotGeometry":
                        case "TorusKnotBufferGeometry":
                            s = new Ph[h.type](h.radius, h.tube, h.tubularSegments, h.radialSegments, h.p, h.q);
                            break;
                        case "LatheGeometry":
                        case "LatheBufferGeometry":
                            s = new Ph[h.type](h.points, h.segments, h.phiStart, h.phiLength);
                            break;
                        case "PolyhedronGeometry":
                        case "PolyhedronBufferGeometry":
                            s = new Ph[h.type](h.vertices, h.indices, h.radius, h.details);
                            break;
                        case "ShapeGeometry":
                        case "ShapeBufferGeometry":
                            for (var c = [], o = 0, a = h.shapes.length; o < a; o++) {
                                var u = e[h.shapes[o]];
                                c.push(u)
                            }
                            s = new Ph[h.type](c, h.curveSegments);
                            break;
                        case "BufferGeometry":
                            s = r.parse(h);
                            break;
                        case "Geometry":
                            s = n.parse(h, this.texturePath).geometry;
                            break;
                        default:
                            continue
                    }
                    s.uuid = h.uuid, void 0 !== h.name && (s.name = h.name), i[h.uuid] = s
                }
            return i
        },
        parseMaterials: function (t, e) {
            var i = {};
            if (void 0 !== t) {
                var n = new fr;
                n.setTextures(e);
                for (var r = 0, o = t.length; r < o; r++) {
                    var a = t[r];
                    if ("MultiMaterial" === a.type) {
                        for (var s = [], h = 0; h < a.materials.length; h++) s.push(n.parse(a.materials[h]));
                        i[a.uuid] = s
                    } else i[a.uuid] = n.parse(a)
                }
            }
            return i
        },
        parseAnimations: function (t) {
            for (var e = [], i = 0; i < t.length; i++) {
                var n = pr.parse(t[i]);
                e.push(n)
            }
            return e
        },
        parseImages: function (t, e) {
            var i = this,
                n = {};
            if (void 0 !== t && t.length > 0) {
                var r = new pn(e),
                    o = new vn(r);
                o.setCrossOrigin(this.crossOrigin);
                for (var a = 0, s = t.length; a < s; a++) {
                    var h = t[a],
                        c = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url) ? h.url : i.texturePath + h.url;
                    n[h.uuid] = function (t) {
                        return i.manager.itemStart(t), o.load(t, function () {
                            i.manager.itemEnd(t)
                        }, void 0, function () {
                            i.manager.itemEnd(t), i.manager.itemError(t)
                        })
                    }(c)
                }
            }
            return n
        },
        parseTextures: function (t, e) {
            function i(t, e) {
                return "number" == typeof t ? t : e[t]
            }

            var n = {};
            if (void 0 !== t)
                for (var r = 0, o = t.length; r < o; r++) {
                    var a = t[r];
                    a.image, e[a.image];
                    var s = new c(e[a.image]);
                    s.needsUpdate = !0, s.uuid = a.uuid, void 0 !== a.name && (s.name = a.name), void 0 !== a.mapping && (s.mapping = i(a.mapping, Bh)), void 0 !== a.offset && s.offset.fromArray(a.offset), void 0 !== a.repeat && s.repeat.fromArray(a.repeat), void 0 !== a.center && s.center.fromArray(a.center), void 0 !== a.rotation && (s.rotation = a.rotation), void 0 !== a.wrap && (s.wrapS = i(a.wrap[0], Gh), s.wrapT = i(a.wrap[1], Gh)), void 0 !== a.minFilter && (s.minFilter = i(a.minFilter, jh)), void 0 !== a.magFilter && (s.magFilter = i(a.magFilter, jh)), void 0 !== a.anisotropy && (s.anisotropy = a.anisotropy), void 0 !== a.flipY && (s.flipY = a.flipY), n[a.uuid] = s
                }
            return n
        },
        parseObject: function () {
            var t = new o;
            return function (e, i, n) {
                function r(t) {
                    return i[t], i[t]
                }

                function o(t) {
                    if (void 0 !== t) {
                        if (Array.isArray(t)) {
                            for (var e = [], i = 0, r = t.length; i < r; i++) {
                                var o = t[i];
                                n[o], e.push(n[o])
                            }
                            return e
                        }
                        return n[t], n[t]
                    }
                }

                var a;
                switch (e.type) {
                    case "Scene":
                        a = new Se, void 0 !== e.background && Number.isInteger(e.background) && (a.background = new $(e.background)), void 0 !== e.fog && ("Fog" === e.fog.type ? a.fog = new Te(e.fog.color, e.fog.near, e.fog.far) : "FogExp2" === e.fog.type && (a.fog = new Me(e.fog.color, e.fog.density)));
                        break;
                    case "PerspectiveCamera":
                        a = new ve(e.fov, e.aspect, e.near, e.far), void 0 !== e.focus && (a.focus = e.focus), void 0 !== e.zoom && (a.zoom = e.zoom), void 0 !== e.filmGauge && (a.filmGauge = e.filmGauge), void 0 !== e.filmOffset && (a.filmOffset = e.filmOffset), void 0 !== e.view && (a.view = Object.assign({}, e.view));
                        break;
                    case "OrthographicCamera":
                        a = new ft(e.left, e.right, e.top, e.bottom, e.near, e.far);
                        break;
                    case "AmbientLight":
                        a = new Qn(e.color, e.intensity);
                        break;
                    case "DirectionalLight":
                        a = new Jn(e.color, e.intensity);
                        break;
                    case "PointLight":
                        a = new $n(e.color, e.intensity, e.distance, e.decay);
                        break;
                    case "RectAreaLight":
                        a = new Kn(e.color, e.intensity, e.width, e.height);
                        break;
                    case "SpotLight":
                        a = new Yn(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
                        break;
                    case "HemisphereLight":
                        a = new Hn(e.color, e.groundColor, e.intensity);
                        break;
                    case "SkinnedMesh":
                    case "Mesh":
                        var s = r(e.geometry),
                            h = o(e.material);
                        a = s.bones && s.bones.length > 0 ? new Oe(s, h) : new Ut(s, h);
                        break;
                    case "LOD":
                        a = new Ce;
                        break;
                    case "Line":
                        a = new Ie(r(e.geometry), o(e.material), e.mode);
                        break;
                    case "LineLoop":
                        a = new ke(r(e.geometry), o(e.material));
                        break;
                    case "LineSegments":
                        a = new De(r(e.geometry), o(e.material));
                        break;
                    case "PointCloud":
                    case "Points":
                        a = new Ue(r(e.geometry), o(e.material));
                        break;
                    case "Sprite":
                        a = new Ee(o(e.material));
                        break;
                    case "Group":
                        a = new Fe;
                        break;
                    default:
                        a = new lt
                }
                if (a.uuid = e.uuid, void 0 !== e.name && (a.name = e.name), void 0 !== e.matrix ? (t.fromArray(e.matrix), t.decompose(a.position, a.quaternion, a.scale)) : (void 0 !== e.position && a.position.fromArray(e.position), void 0 !== e.rotation && a.rotation.fromArray(e.rotation), void 0 !== e.quaternion && a.quaternion.fromArray(e.quaternion), void 0 !== e.scale && a.scale.fromArray(e.scale)), void 0 !== e.castShadow && (a.castShadow = e.castShadow), void 0 !== e.receiveShadow && (a.receiveShadow = e.receiveShadow), e.shadow && (void 0 !== e.shadow.bias && (a.shadow.bias = e.shadow.bias), void 0 !== e.shadow.radius && (a.shadow.radius = e.shadow.radius), void 0 !== e.shadow.mapSize && a.shadow.mapSize.fromArray(e.shadow.mapSize), void 0 !== e.shadow.camera && (a.shadow.camera = this.parseObject(e.shadow.camera))), void 0 !== e.visible && (a.visible = e.visible), void 0 !== e.userData && (a.userData = e.userData), void 0 !== e.children)
                    for (var c = e.children, u = 0; u < c.length; u++) a.add(this.parseObject(c[u], i, n));
                if ("LOD" === e.type)
                    for (var l = e.levels, p = 0; p < l.length; p++) {
                        var f = l[p],
                            d = a.getObjectByProperty("uuid", f.object);
                        void 0 !== d && a.addLevel(d, f.distance)
                    }
                return a
            }
        }()
    });
    var Bh = {
            UVMapping: Xa,
            CubeReflectionMapping: qa,
            CubeRefractionMapping: Ya,
            EquirectangularReflectionMapping: $a,
            EquirectangularRefractionMapping: Za,
            SphericalReflectionMapping: Ja,
            CubeUVReflectionMapping: Qa,
            CubeUVRefractionMapping: Ka
        },
        Gh = {
            RepeatWrapping: ts,
            ClampToEdgeWrapping: es,
            MirroredRepeatWrapping: is
        },
        jh = {
            NearestFilter: ns,
            NearestMipMapNearestFilter: rs,
            NearestMipMapLinearFilter: os,
            LinearFilter: as,
            LinearMipMapNearestFilter: ss,
            LinearMipMapLinearFilter: hs
        };
    yr.prototype = {
        constructor: yr,
        setOptions: function (t) {
            return this.options = t, this
        },
        load: function (t, e, i, n) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t);
            var r = this,
                o = Ch.get(t);
            if (void 0 !== o) return r.manager.itemStart(t), setTimeout(function () {
                e && e(o), r.manager.itemEnd(t)
            }, 0), o;
            fetch(t).then(function (t) {
                return t.blob()
            }).then(function (t) {
                return createImageBitmap(t, r.options)
            }).then(function (i) {
                Ch.add(t, i), e && e(i), r.manager.itemEnd(t)
            }).catch(function (e) {
                n && n(e), r.manager.itemEnd(t), r.manager.itemError(t)
            })
        },
        setCrossOrigin: function () {
            return this
        },
        setPath: function (t) {
            return this.path = t, this
        }
    }, Object.assign(_r.prototype, {
        moveTo: function (t, e) {
            this.currentPath = new jn, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e)
        },
        lineTo: function (t, e) {
            this.currentPath.lineTo(t, e)
        },
        quadraticCurveTo: function (t, e, i, n) {
            this.currentPath.quadraticCurveTo(t, e, i, n)
        },
        bezierCurveTo: function (t, e, i, n, r, o) {
            this.currentPath.bezierCurveTo(t, e, i, n, r, o)
        },
        splineThru: function (t) {
            this.currentPath.splineThru(t)
        },
        toShapes: function (t, e) {
            function i(t) {
                for (var e = [], i = 0, n = t.length; i < n; i++) {
                    var r = t[i],
                        o = new Vn;
                    o.curves = r.curves, e.push(o)
                }
                return e
            }

            var n = Ah.isClockWise,
                r = this.subPaths;
            if (0 === r.length) return [];
            if (!0 === e) return i(r);
            var o, a, s, h = [];
            if (1 === r.length) return a = r[0], s = new Vn, s.curves = a.curves, h.push(s), h;
            var c = !n(r[0].getPoints());
            c = t ? !c : c;
            var u, l = [],
                p = [],
                f = [],
                d = 0;
            p[d] = void 0, f[d] = [];
            for (var m = 0, v = r.length; m < v; m++) a = r[m], u = a.getPoints(), o = n(u), o = t ? !o : o, o ? (!c && p[d] && d++, p[d] = {
                s: new Vn,
                p: u
            }, p[d].s.curves = a.curves, c && d++, f[d] = []) : f[d].push({
                h: a,
                p: u[0]
            });
            if (!p[0]) return i(r);
            if (p.length > 1) {
                for (var g = !1, y = [], _ = 0, x = p.length; _ < x; _++) l[_] = [];
                for (var _ = 0, x = p.length; _ < x; _++)
                    for (var b = f[_], w = 0; w < b.length; w++) {
                        for (var M = b[w], T = !0, S = 0; S < p.length; S++) (function (t, e) {
                            for (var i = e.length, n = !1, r = i - 1, o = 0; o < i; r = o++) {
                                var a = e[r],
                                    s = e[o],
                                    h = s.x - a.x,
                                    c = s.y - a.y;
                                if (Math.abs(c) > Number.EPSILON) {
                                    if (c < 0 && (a = e[o], h = -h, s = e[r], c = -c), t.y < a.y || t.y > s.y) continue;
                                    if (t.y === a.y) {
                                        if (t.x === a.x) return !0
                                    } else {
                                        var u = c * (t.x - a.x) - h * (t.y - a.y);
                                        if (0 === u) return !0;
                                        if (u < 0) continue;
                                        n = !n
                                    }
                                } else {
                                    if (t.y !== a.y) continue;
                                    if (s.x <= t.x && t.x <= a.x || a.x <= t.x && t.x <= s.x) return !0
                                }
                            }
                            return n
                        })(M.p, p[S].p) && (_ !== S && y.push({
                            froms: _,
                            tos: S,
                            hole: w
                        }), T ? (T = !1, l[S].push(M)) : g = !0);
                        T && l[_].push(M)
                    }
                y.length > 0 && (g || (f = l))
            }
            for (var A, m = 0, P = p.length; m < P; m++) {
                s = p[m].s, h.push(s), A = f[m];
                for (var E = 0, C = A.length; E < C; E++) s.holes.push(A[E].h)
            }
            return h
        }
    }), Object.assign(xr.prototype, {
        isFont: !0,
        generateShapes: function (t, e, i) {
            function n(t, e, i, n) {
                var o = r.glyphs[t] || r.glyphs["?"];
                if (o) {
                    var a, s, h, c, u, l, p, f, d, m = new _r,
                        v = [];
                    if (o.o)
                        for (var g = o._cachedOutline || (o._cachedOutline = o.o.split(" ")), y = 0, _ = g.length; y < _;) {
                            var x = g[y++];
                            switch (x) {
                                case "m":
                                    a = g[y++] * e + i, s = g[y++] * e + n, m.moveTo(a, s);
                                    break;
                                case "l":
                                    a = g[y++] * e + i, s = g[y++] * e + n, m.lineTo(a, s);
                                    break;
                                case "q":
                                    h = g[y++] * e + i, c = g[y++] * e + n, u = g[y++] * e + i, l = g[y++] * e + n, m.quadraticCurveTo(u, l, h, c), d = v[v.length - 1], d && (d.x, d.y);
                                    break;
                                case "b":
                                    h = g[y++] * e + i, c = g[y++] * e + n, u = g[y++] * e + i, l = g[y++] * e + n, p = g[y++] * e + i, f = g[y++] * e + n, m.bezierCurveTo(u, l, p, f, h, c), d = v[v.length - 1], d && (d.x, d.y)
                            }
                        }
                    return {
                        offsetX: o.ha * e,
                        path: m
                    }
                }
            }

            void 0 === e && (e = 100), void 0 === i && (i = 4);
            for (var r = this.data, o = function (t) {
                for (var i = String(t).split(""), o = e / r.resolution, a = (r.boundingBox.yMax - r.boundingBox.yMin + r.underlineThickness) * o, s = 0, h = 0, c = [], u = 0; u < i.length; u++) {
                    var l = i[u];
                    if ("\n" === l) s = 0, h -= a;
                    else {
                        var p = n(l, o, s, h);
                        s += p.offsetX, c.push(p.path)
                    }
                }
                return c
            }(t), a = [], s = 0, h = o.length; s < h; s++) Array.prototype.push.apply(a, o[s].toShapes());
            return a
        }
    }), Object.assign(br.prototype, {
        load: function (t, e, i, n) {
            var r = this,
                o = new fn(this.manager);
            o.setPath(this.path), o.load(t, function (t) {
                var i;
                try {
                    i = JSON.parse(t)
                } catch (e) {
                    i = JSON.parse(t.substring(65, t.length - 2))
                }
                var n = r.parse(i);
                e && e(n)
            }, i, n)
        },
        parse: function (t) {
            return new xr(t)
        },
        setPath: function (t) {
            return this.path = t, this
        }
    });
    var Vh, Wh = {
        getContext: function () {
            return void 0 === Vh && (Vh = new (window.AudioContext || window.webkitAudioContext)), Vh
        },
        setContext: function (t) {
            Vh = t
        }
    };
    Object.assign(wr.prototype, {
        load: function (t, e, i, n) {
            var r = new fn(this.manager);
            r.setResponseType("arraybuffer"), r.load(t, function (t) {
                Wh.getContext().decodeAudioData(t, function (t) {
                    e(t)
                })
            }, i, n)
        }
    }), Object.assign(Mr.prototype, {
        update: function () {
            var t, e, i, n, r, a, s, h, c = new o,
                u = new o;
            return function (o) {
                if (t !== this || e !== o.focus || i !== o.fov || n !== o.aspect * this.aspect || r !== o.near || a !== o.far || s !== o.zoom || h !== this.eyeSep) {
                    t = this, e = o.focus, i = o.fov, n = o.aspect * this.aspect, r = o.near, a = o.far, s = o.zoom;
                    var l = o.projectionMatrix.clone();
                    h = this.eyeSep / 2;
                    var p, f, d = h * r / e,
                        m = r * Math.tan(ah.DEG2RAD * i * .5) / s;
                    u.elements[12] = -h, c.elements[12] = h, p = -m * n + d, f = m * n + d, l.elements[0] = 2 * r / (f - p), l.elements[8] = (f + p) / (f - p), this.cameraL.projectionMatrix.copy(l), p = -m * n - d, f = m * n - d, l.elements[0] = 2 * r / (f - p), l.elements[8] = (f + p) / (f - p), this.cameraR.projectionMatrix.copy(l)
                }
                this.cameraL.matrixWorld.copy(o.matrixWorld).multiply(u), this.cameraR.matrixWorld.copy(o.matrixWorld).multiply(c)
            }
        }()
    }), Tr.prototype = Object.create(lt.prototype), Tr.prototype.constructor = Tr, Sr.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: Sr,
        getInput: function () {
            return this.gain
        },
        removeFilter: function () {
            null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null)
        },
        getFilter: function () {
            return this.filter
        },
        setFilter: function (t) {
            null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination)
        },
        getMasterVolume: function () {
            return this.gain.gain.value
        },
        setMasterVolume: function (t) {
            this.gain.gain.value = t
        },
        updateMatrixWorld: function () {
            var t = new s,
                e = new a,
                i = new s,
                n = new s;
            return function (r) {
                lt.prototype.updateMatrixWorld.call(this, r);
                var o = this.context.listener,
                    a = this.up;
                this.matrixWorld.decompose(t, e, i), n.set(0, 0, -1).applyQuaternion(e), o.positionX ? (o.positionX.setValueAtTime(t.x, this.context.currentTime), o.positionY.setValueAtTime(t.y, this.context.currentTime), o.positionZ.setValueAtTime(t.z, this.context.currentTime), o.forwardX.setValueAtTime(n.x, this.context.currentTime), o.forwardY.setValueAtTime(n.y, this.context.currentTime), o.forwardZ.setValueAtTime(n.z, this.context.currentTime), o.upX.setValueAtTime(a.x, this.context.currentTime), o.upY.setValueAtTime(a.y, this.context.currentTime), o.upZ.setValueAtTime(a.z, this.context.currentTime)) : (o.setPosition(t.x, t.y, t.z), o.setOrientation(n.x, n.y, n.z, a.x, a.y, a.z))
            }
        }()
    }), Ar.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: Ar,
        getOutput: function () {
            return this.gain
        },
        setNodeSource: function (t) {
            return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
        },
        setBuffer: function (t) {
            return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
        },
        play: function () {
            if (!0 !== this.isPlaying && !1 !== this.hasPlaybackControl) {
                var t = this.context.createBufferSource();
                return t.buffer = this.buffer, t.loop = this.loop, t.onended = this.onEnded.bind(this), t.playbackRate.setValueAtTime(this.playbackRate, this.startTime), this.startTime = this.context.currentTime, t.start(this.startTime, this.offset), this.isPlaying = !0, this.source = t, this.connect()
            }
        },
        pause: function () {
            if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this.source.stop(), this.offset += (this.context.currentTime - this.startTime) * this.playbackRate, this.isPlaying = !1), this
        },
        stop: function () {
            if (!1 !== this.hasPlaybackControl) return this.source.stop(), this.offset = 0, this.isPlaying = !1, this
        },
        connect: function () {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else this.source.connect(this.getOutput());
            return this
        },
        disconnect: function () {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function () {
            return this.filters
        },
        setFilters: function (t) {
            return t || (t = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = t, this.connect()) : this.filters = t, this
        },
        getFilter: function () {
            return this.getFilters()[0]
        },
        setFilter: function (t) {
            return this.setFilters(t ? [t] : [])
        },
        setPlaybackRate: function (t) {
            if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setValueAtTime(this.playbackRate, this.context.currentTime), this
        },
        getPlaybackRate: function () {
            return this.playbackRate
        },
        onEnded: function () {
            this.isPlaying = !1
        },
        getLoop: function () {
            return !1 !== this.hasPlaybackControl && this.loop
        },
        setLoop: function (t) {
            if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this
        },
        getVolume: function () {
            return this.gain.gain.value
        },
        setVolume: function (t) {
            return this.gain.gain.value = t, this
        }
    }), Pr.prototype = Object.assign(Object.create(Ar.prototype), {
        constructor: Pr,
        getOutput: function () {
            return this.panner
        },
        getRefDistance: function () {
            return this.panner.refDistance
        },
        setRefDistance: function (t) {
            this.panner.refDistance = t
        },
        getRolloffFactor: function () {
            return this.panner.rolloffFactor
        },
        setRolloffFactor: function (t) {
            this.panner.rolloffFactor = t
        },
        getDistanceModel: function () {
            return this.panner.distanceModel
        },
        setDistanceModel: function (t) {
            this.panner.distanceModel = t
        },
        getMaxDistance: function () {
            return this.panner.maxDistance
        },
        setMaxDistance: function (t) {
            this.panner.maxDistance = t
        },
        updateMatrixWorld: function () {
            var t = new s;
            return function (e) {
                lt.prototype.updateMatrixWorld.call(this, e), t.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(t.x, t.y, t.z)
            }
        }()
    }), Object.assign(Er.prototype, {
        getFrequencyData: function () {
            return this.analyser.getByteFrequencyData(this.data), this.data
        },
        getAverageFrequency: function () {
            for (var t = 0, e = this.getFrequencyData(), i = 0; i < e.length; i++) t += e[i];
            return t / e.length
        }
    }), Object.assign(Cr.prototype, {
        accumulate: function (t, e) {
            var i = this.buffer,
                n = this.valueSize,
                r = t * n + n,
                o = this.cumulativeWeight;
            if (0 === o) {
                for (var a = 0; a !== n; ++a) i[r + a] = i[a];
                o = e
            } else {
                o += e;
                var s = e / o;
                this._mixBufferRegion(i, r, 0, s, n)
            }
            this.cumulativeWeight = o
        },
        apply: function (t) {
            var e = this.valueSize,
                i = this.buffer,
                n = t * e + e,
                r = this.cumulativeWeight,
                o = this.binding;
            if (this.cumulativeWeight = 0, r < 1) {
                var a = 3 * e;
                this._mixBufferRegion(i, n, a, 1 - r, e)
            }
            for (var s = e, h = e + e; s !== h; ++s)
                if (i[s] !== i[s + e]) {
                    o.setValue(i, n);
                    break
                }
        },
        saveOriginalState: function () {
            var t = this.binding,
                e = this.buffer,
                i = this.valueSize,
                n = 3 * i;
            t.getValue(e, n);
            for (var r = i, o = n; r !== o; ++r) e[r] = e[n + r % i];
            this.cumulativeWeight = 0
        },
        restoreOriginalState: function () {
            var t = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t)
        },
        _select: function (t, e, i, n, r) {
            if (n >= .5)
                for (var o = 0; o !== r; ++o) t[e + o] = t[i + o]
        },
        _slerp: function (t, e, i, n) {
            a.slerpFlat(t, e, t, e, t, i, n)
        },
        _lerp: function (t, e, i, n, r) {
            for (var o = 1 - n, a = 0; a !== r; ++a) {
                var s = e + a;
                t[s] = t[s] * o + t[i + a] * n
            }
        }
    }), Object.assign(Lr.prototype, {
        getValue: function (t, e) {
            this.bind();
            var i = this._targetGroup.nCachedObjects_,
                n = this._bindings[i];
            void 0 !== n && n.getValue(t, e)
        },
        setValue: function (t, e) {
            for (var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n) i[n].setValue(t, e)
        },
        bind: function () {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].bind()
        },
        unbind: function () {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].unbind()
        }
    }), Object.assign(Nr, {
        Composite: Lr,
        create: function (t, e, i) {
            return t && t.isAnimationObjectGroup ? new Nr.Composite(t, e, i) : new Nr(t, e, i)
        },
        sanitizeNodeName: function (t) {
            return t.replace(/\s/g, "_").replace(/[^\w-]/g, "")
        },
        parseTrackName: function () {
            var t = /((?:[\w-]+[\/:])*)/,
                e = /([\w-\.]+)?/,
                i = /(?:\.([\w-]+)(?:\[(.+)\])?)?/,
                n = /\.([\w-]+)(?:\[(.+)\])?/,
                r = new RegExp("^" + t.source + e.source + i.source + n.source + "$"),
                o = ["material", "materials", "bones"];
            return function (t) {
                var e = r.exec(t);
                if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
                var i = {
                        nodeName: e[2],
                        objectName: e[3],
                        objectIndex: e[4],
                        propertyName: e[5],
                        propertyIndex: e[6]
                    },
                    n = i.nodeName && i.nodeName.lastIndexOf(".");
                if (void 0 !== n && -1 !== n) {
                    var a = i.nodeName.substring(n + 1);
                    -1 !== o.indexOf(a) && (i.nodeName = i.nodeName.substring(0, n), i.objectName = a)
                }
                if (null === i.propertyName || 0 === i.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
                return i
            }
        }(),
        findNode: function (t, e) {
            if (!e || "" === e || "root" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
            if (t.skeleton) {
                var i = function (t) {
                    for (var i = 0; i < t.bones.length; i++) {
                        var n = t.bones[i];
                        if (n.name === e) return n
                    }
                    return null
                }(t.skeleton);
                if (i) return i
            }
            if (t.children) {
                var n = function (t) {
                        for (var i = 0; i < t.length; i++) {
                            var r = t[i];
                            if (r.name === e || r.uuid === e) return r;
                            var o = n(r.children);
                            if (o) return o
                        }
                        return null
                    },
                    r = n(t.children);
                if (r) return r
            }
            return null
        }
    }), Object.assign(Nr.prototype, {
        _getValue_unavailable: function () {
        },
        _setValue_unavailable: function () {
        },
        BindingType: {
            Direct: 0,
            EntireArray: 1,
            ArrayElement: 2,
            HasFromToArray: 3
        },
        Versioning: {
            None: 0,
            NeedsUpdate: 1,
            MatrixWorldNeedsUpdate: 2
        },
        GetterByBindingType: [function (t, e) {
            t[e] = this.node[this.propertyName]
        }, function (t, e) {
            for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) t[e++] = i[n]
        }, function (t, e) {
            t[e] = this.resolvedProperty[this.propertyIndex]
        }, function (t, e) {
            this.resolvedProperty.toArray(t, e)
        }],
        SetterByBindingTypeAndVersioning: [
            [function (t, e) {
                this.targetObject[this.propertyName] = t[e]
            }, function (t, e) {
                this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
            }, function (t, e) {
                this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function (t, e) {
                for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++]
            }, function (t, e) {
                for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
                this.targetObject.needsUpdate = !0
            }, function (t, e) {
                for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
                this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function (t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e]
            }, function (t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
            }, function (t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function (t, e) {
                this.resolvedProperty.fromArray(t, e)
            }, function (t, e) {
                this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
            }, function (t, e) {
                this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
            }]
        ],
        getValue: function (t, e) {
            this.bind(), this.getValue(t, e)
        },
        setValue: function (t, e) {
            this.bind(), this.setValue(t, e)
        },
        bind: function () {
            var t = this.node,
                e = this.parsedPath,
                i = e.objectName,
                n = e.propertyName,
                r = e.propertyIndex;
            if (t || (t = Nr.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) {
                if (i) {
                    var o = e.objectIndex;
                    switch (i) {
                        case "materials":
                            if (!t.material) return;
                            if (!t.material.materials) return;
                            t = t.material.materials;
                            break;
                        case "bones":
                            if (!t.skeleton) return;
                            t = t.skeleton.bones;
                            for (var a = 0; a < t.length; a++)
                                if (t[a].name === o) {
                                    o = a;
                                    break
                                }
                            break;
                        default:
                            if (void 0 === t[i]) return;
                            t = t[i]
                    }
                    if (void 0 !== o) {
                        if (void 0 === t[o]) return;
                        t = t[o]
                    }
                }
                var s = t[n];
                if (void 0 !== s) {
                    var h = this.Versioning.None;
                    void 0 !== t.needsUpdate ? (h = this.Versioning.NeedsUpdate, this.targetObject = t) : void 0 !== t.matrixWorldNeedsUpdate && (h = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = t);
                    var c = this.BindingType.Direct;
                    if (void 0 !== r) {
                        if ("morphTargetInfluences" === n) {
                            if (!t.geometry) return;
                            if (t.geometry.isBufferGeometry) {
                                if (!t.geometry.morphAttributes) return;
                                for (var a = 0; a < this.node.geometry.morphAttributes.position.length; a++)
                                    if (t.geometry.morphAttributes.position[a].name === r) {
                                        r = a;
                                        break
                                    }
                            } else {
                                if (!t.geometry.morphTargets) return;
                                for (var a = 0; a < this.node.geometry.morphTargets.length; a++)
                                    if (t.geometry.morphTargets[a].name === r) {
                                        r = a;
                                        break
                                    }
                            }
                        }
                        c = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
                    } else void 0 !== s.fromArray && void 0 !== s.toArray ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (c = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = n;
                    this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][h]
                } else {
                    e.nodeName
                }
            }
        },
        unbind: function () {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
        }
    }),
        //!\ DECLARE ALIAS AFTER assign prototype !
        Object.assign(Nr.prototype, {
            _getValue_unbound: Nr.prototype.getValue,
            _setValue_unbound: Nr.prototype.setValue
        }), Object.assign(Or.prototype, {
        isAnimationObjectGroup: !0,
        add: function () {
            for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._paths, o = this._parsedPaths, a = this._bindings, s = a.length, h = 0, c = arguments.length; h !== c; ++h) {
                var u = arguments[h],
                    l = u.uuid,
                    p = n[l];
                if (void 0 === p) {
                    p = e++, n[l] = p, t.push(u);
                    for (var f = 0, d = s; f !== d; ++f) a[f].push(new Nr(u, r[f], o[f]))
                } else if (p < i) {
                    t[p];
                    var m = --i,
                        v = t[m];
                    n[v.uuid] = p, t[p] = v, n[l] = m, t[m] = u;
                    for (var f = 0, d = s; f !== d; ++f) {
                        var g = a[f],
                            y = g[m],
                            _ = g[p];
                        g[p] = y, void 0 === _ && (_ = new Nr(u, r[f], o[f])), g[m] = _
                    }
                } else t[p]
            }
            this.nCachedObjects_ = i
        },
        remove: function () {
            for (var t = this._objects, e = this.nCachedObjects_, i = this._indicesByUUID, n = this._bindings, r = n.length, o = 0, a = arguments.length; o !== a; ++o) {
                var s = arguments[o],
                    h = s.uuid,
                    c = i[h];
                if (void 0 !== c && c >= e) {
                    var u = e++,
                        l = t[u];
                    i[l.uuid] = c, t[c] = l, i[h] = u, t[u] = s;
                    for (var p = 0, f = r; p !== f; ++p) {
                        var d = n[p],
                            m = d[u],
                            v = d[c];
                        d[c] = m, d[u] = v
                    }
                }
            }
            this.nCachedObjects_ = e
        },
        uncache: function () {
            for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, o = r.length, a = 0, s = arguments.length; a !== s; ++a) {
                var h = arguments[a],
                    c = h.uuid,
                    u = n[c];
                if (void 0 !== u)
                    if (delete n[c], u < i) {
                        var l = --i,
                            p = t[l],
                            f = --e,
                            d = t[f];
                        n[p.uuid] = u, t[u] = p, n[d.uuid] = l, t[l] = d, t.pop();
                        for (var m = 0, v = o; m !== v; ++m) {
                            var g = r[m],
                                y = g[l],
                                _ = g[f];
                            g[u] = y, g[l] = _, g.pop()
                        }
                    } else {
                        var f = --e,
                            d = t[f];
                        n[d.uuid] = u, t[u] = d, t.pop();
                        for (var m = 0, v = o; m !== v; ++m) {
                            var g = r[m];
                            g[u] = g[f], g.pop()
                        }
                    }
            }
            this.nCachedObjects_ = i
        },
        subscribe_: function (t, e) {
            var i = this._bindingsIndicesByPath,
                n = i[t],
                r = this._bindings;
            if (void 0 !== n) return r[n];
            var o = this._paths,
                a = this._parsedPaths,
                s = this._objects,
                h = s.length,
                c = this.nCachedObjects_,
                u = new Array(h);
            n = r.length, i[t] = n, o.push(t), a.push(e), r.push(u);
            for (var l = c, p = s.length; l !== p; ++l) {
                var f = s[l];
                u[l] = new Nr(f, t, e)
            }
            return u
        },
        unsubscribe_: function (t) {
            var e = this._bindingsIndicesByPath,
                i = e[t];
            if (void 0 !== i) {
                var n = this._paths,
                    r = this._parsedPaths,
                    o = this._bindings,
                    a = o.length - 1,
                    s = o[a];
                e[t[a]] = i, o[i] = s, o.pop(), r[i] = r[a], r.pop(), n[i] = n[a], n.pop()
            }
        }
    }), Object.assign(Rr.prototype, {
        play: function () {
            return this._mixer._activateAction(this), this
        },
        stop: function () {
            return this._mixer._deactivateAction(this), this.reset()
        },
        reset: function () {
            return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
        },
        isRunning: function () {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        },
        isScheduled: function () {
            return this._mixer._isActiveAction(this)
        },
        startAt: function (t) {
            return this._startTime = t, this
        },
        setLoop: function (t, e) {
            return this.loop = t, this.repetitions = e, this
        },
        setEffectiveWeight: function (t) {
            return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
        },
        getEffectiveWeight: function () {
            return this._effectiveWeight
        },
        fadeIn: function (t) {
            return this._scheduleFading(t, 0, 1)
        },
        fadeOut: function (t) {
            return this._scheduleFading(t, 1, 0)
        },
        crossFadeFrom: function (t, e, i) {
            if (t.fadeOut(e), this.fadeIn(e), i) {
                var n = this._clip.duration,
                    r = t._clip.duration,
                    o = r / n,
                    a = n / r;
                t.warp(1, o, e), this.warp(a, 1, e)
            }
            return this
        },
        crossFadeTo: function (t, e, i) {
            return t.crossFadeFrom(this, e, i)
        },
        stopFading: function () {
            var t = this._weightInterpolant;
            return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
        },
        setEffectiveTimeScale: function (t) {
            return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
        },
        getEffectiveTimeScale: function () {
            return this._effectiveTimeScale
        },
        setDuration: function (t) {
            return this.timeScale = this._clip.duration / t, this.stopWarping()
        },
        syncWith: function (t) {
            return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
        },
        halt: function (t) {
            return this.warp(this._effectiveTimeScale, 0, t)
        },
        warp: function (t, e, i) {
            var n = this._mixer,
                r = n.time,
                o = this._timeScaleInterpolant,
                a = this.timeScale;
            null === o && (o = n._lendControlInterpolant(), this._timeScaleInterpolant = o);
            var s = o.parameterPositions,
                h = o.sampleValues;
            return s[0] = r, s[1] = r + i, h[0] = t / a, h[1] = e / a, this
        },
        stopWarping: function () {
            var t = this._timeScaleInterpolant;
            return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
        },
        getMixer: function () {
            return this._mixer
        },
        getClip: function () {
            return this._clip
        },
        getRoot: function () {
            return this._localRoot || this._mixer._root
        },
        _update: function (t, e, i, n) {
            if (!this.enabled) return void this._updateWeight(t);
            var r = this._startTime;
            if (null !== r) {
                var o = (t - r) * i;
                if (o < 0 || 0 === i) return;
                this._startTime = null, e = i * o
            }
            e *= this._updateTimeScale(t);
            var a = this._updateTime(e),
                s = this._updateWeight(t);
            if (s > 0)
                for (var h = this._interpolants, c = this._propertyBindings, u = 0, l = h.length; u !== l; ++u) h[u].evaluate(a), c[u].accumulate(n, s)
        },
        _updateWeight: function (t) {
            var e = 0;
            if (this.enabled) {
                e = this.weight;
                var i = this._weightInterpolant;
                if (null !== i) {
                    var n = i.evaluate(t)[0];
                    e *= n, t > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = e, e
        },
        _updateTimeScale: function (t) {
            var e = 0;
            if (!this.paused) {
                e = this.timeScale;
                var i = this._timeScaleInterpolant;
                if (null !== i) {
                    e *= i.evaluate(t)[0], t > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e)
                }
            }
            return this._effectiveTimeScale = e, e
        },
        _updateTime: function (t) {
            var e = this.time + t;
            if (0 === t) return e;
            var i = this._clip.duration,
                n = this.loop,
                r = this._loopCount;
            if (n === Us) {
                -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
                t: {
                    if (e >= i) e = i;
                    else {
                        if (!(e < 0)) break t;
                        e = 0
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                        this._mixer.dispatchEvent({
                            type: "finished",
                            action: this,
                            direction: t < 0 ? -1 : 1
                        })
                }
            } else {
                var o = n === Bs;
                if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, o)) : this._setEndings(0 === this.repetitions, !0, o)), e >= i || e < 0) {
                    var a = Math.floor(e / i);
                    e -= i * a, r += Math.abs(a);
                    var s = this.repetitions - r;
                    if (s < 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t > 0 ? i : 0, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t > 0 ? 1 : -1
                    });
                    else {
                        if (0 === s) {
                            var h = t < 0;
                            this._setEndings(h, !h, o)
                        } else this._setEndings(!1, !1, o);
                        this._loopCount = r, this._mixer.dispatchEvent({
                            type: "loop",
                            action: this,
                            loopDelta: a
                        })
                    }
                }
                if (o && 1 == (1 & r)) return this.time = e, i - e
            }
            return this.time = e, e
        },
        _setEndings: function (t, e, i) {
            var n = this._interpolantSettings;
            i ? (n.endingStart = Hs, n.endingEnd = Hs) : (n.endingStart = t ? this.zeroSlopeAtStart ? Hs : Ws : Xs, n.endingEnd = e ? this.zeroSlopeAtEnd ? Hs : Ws : Xs)
        },
        _scheduleFading: function (t, e, i) {
            var n = this._mixer,
                r = n.time,
                o = this._weightInterpolant;
            null === o && (o = n._lendControlInterpolant(), this._weightInterpolant = o);
            var a = o.parameterPositions,
                s = o.sampleValues;
            return a[0] = r, s[0] = e, a[1] = r + t, s[1] = i, this
        }
    }), Ir.prototype = Object.assign(Object.create(n.prototype), {
        constructor: Ir,
        _bindAction: function (t, e) {
            var i = t._localRoot || this._root,
                n = t._clip.tracks,
                r = n.length,
                o = t._propertyBindings,
                a = t._interpolants,
                s = i.uuid,
                h = this._bindingsByRootAndName,
                c = h[s];
            void 0 === c && (c = {}, h[s] = c);
            for (var u = 0; u !== r; ++u) {
                var l = n[u],
                    p = l.name,
                    f = c[p];
                if (void 0 !== f) o[u] = f;
                else {
                    if (void 0 !== (f = o[u])) {
                        null === f._cacheIndex && (++f.referenceCount, this._addInactiveBinding(f, s, p));
                        continue
                    }
                    var d = e && e._propertyBindings[u].binding.parsedPath;
                    f = new Cr(Nr.create(i, p, d), l.ValueTypeName, l.getValueSize()), ++f.referenceCount, this._addInactiveBinding(f, s, p), o[u] = f
                }
                a[u].resultBuffer = f.buffer
            }
        },
        _activateAction: function (t) {
            if (!this._isActiveAction(t)) {
                if (null === t._cacheIndex) {
                    var e = (t._localRoot || this._root).uuid,
                        i = t._clip.uuid,
                        n = this._actionsByClip[i];
                    this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, i, e)
                }
                for (var r = t._propertyBindings, o = 0, a = r.length; o !== a; ++o) {
                    var s = r[o];
                    0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
                }
                this._lendAction(t)
            }
        },
        _deactivateAction: function (t) {
            if (this._isActiveAction(t)) {
                for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
                    var r = e[i];
                    0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
                }
                this._takeBackAction(t)
            }
        },
        _initMemoryManager: function () {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            var t = this;
            this.stats = {
                actions: {
                    get total() {
                        return t._actions.length
                    },
                    get inUse() {
                        return t._nActiveActions
                    }
                },
                bindings: {
                    get total() {
                        return t._bindings.length
                    },
                    get inUse() {
                        return t._nActiveBindings
                    }
                },
                controlInterpolants: {
                    get total() {
                        return t._controlInterpolants.length
                    },
                    get inUse() {
                        return t._nActiveControlInterpolants
                    }
                }
            }
        },
        _isActiveAction: function (t) {
            var e = t._cacheIndex;
            return null !== e && e < this._nActiveActions
        },
        _addInactiveAction: function (t, e, i) {
            var n = this._actions,
                r = this._actionsByClip,
                o = r[e];
            if (void 0 === o) o = {
                knownActions: [t],
                actionByRoot: {}
            }, t._byClipCacheIndex = 0, r[e] = o;
            else {
                var a = o.knownActions;
                t._byClipCacheIndex = a.length, a.push(t)
            }
            t._cacheIndex = n.length, n.push(t), o.actionByRoot[i] = t
        },
        _removeInactiveAction: function (t) {
            var e = this._actions,
                i = e[e.length - 1],
                n = t._cacheIndex;
            i._cacheIndex = n, e[n] = i, e.pop(), t._cacheIndex = null;
            var r = t._clip.uuid,
                o = this._actionsByClip,
                a = o[r],
                s = a.knownActions,
                h = s[s.length - 1],
                c = t._byClipCacheIndex;
            h._byClipCacheIndex = c, s[c] = h, s.pop(), t._byClipCacheIndex = null, delete a.actionByRoot[(t._localRoot || this._root).uuid], 0 === s.length && delete o[r], this._removeInactiveBindingsForAction(t)
        },
        _removeInactiveBindingsForAction: function (t) {
            for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
                var r = e[i];
                0 == --r.referenceCount && this._removeInactiveBinding(r)
            }
        },
        _lendAction: function (t) {
            var e = this._actions,
                i = t._cacheIndex,
                n = this._nActiveActions++,
                r = e[n];
            t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
        },
        _takeBackAction: function (t) {
            var e = this._actions,
                i = t._cacheIndex,
                n = --this._nActiveActions,
                r = e[n];
            t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
        },
        _addInactiveBinding: function (t, e, i) {
            var n = this._bindingsByRootAndName,
                r = n[e],
                o = this._bindings;
            void 0 === r && (r = {}, n[e] = r), r[i] = t, t._cacheIndex = o.length, o.push(t)
        },
        _removeInactiveBinding: function (t) {
            var e = this._bindings,
                i = t.binding,
                n = i.rootNode.uuid,
                r = i.path,
                o = this._bindingsByRootAndName,
                a = o[n],
                s = e[e.length - 1],
                h = t._cacheIndex;
            s._cacheIndex = h, e[h] = s, e.pop(), delete a[r];
            t: {
                for (var c in a) break t;
                delete o[n]
            }
        },
        _lendBinding: function (t) {
            var e = this._bindings,
                i = t._cacheIndex,
                n = this._nActiveBindings++,
                r = e[n];
            t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
        },
        _takeBackBinding: function (t) {
            var e = this._bindings,
                i = t._cacheIndex,
                n = --this._nActiveBindings,
                r = e[n];
            t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
        },
        _lendControlInterpolant: function () {
            var t = this._controlInterpolants,
                e = this._nActiveControlInterpolants++,
                i = t[e];
            return void 0 === i && (i = new hr(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), i.__cacheIndex = e, t[e] = i), i
        },
        _takeBackControlInterpolant: function (t) {
            var e = this._controlInterpolants,
                i = t.__cacheIndex,
                n = --this._nActiveControlInterpolants,
                r = e[n];
            t.__cacheIndex = n, e[n] = t, r.__cacheIndex = i, e[i] = r
        },
        _controlInterpolantsResultBuffer: new Float32Array(1),
        clipAction: function (t, e) {
            var i = e || this._root,
                n = i.uuid,
                r = "string" == typeof t ? pr.findByName(i, t) : t,
                o = null !== r ? r.uuid : t,
                a = this._actionsByClip[o],
                s = null;
            if (void 0 !== a) {
                var h = a.actionByRoot[n];
                if (void 0 !== h) return h;
                s = a.knownActions[0], null === r && (r = s._clip)
            }
            if (null === r) return null;
            var c = new Rr(this, r, e);
            return this._bindAction(c, s), this._addInactiveAction(c, o, n), c
        },
        existingAction: function (t, e) {
            var i = e || this._root,
                n = i.uuid,
                r = "string" == typeof t ? pr.findByName(i, t) : t,
                o = r ? r.uuid : t,
                a = this._actionsByClip[o];
            return void 0 !== a ? a.actionByRoot[n] || null : null
        },
        stopAllAction: function () {
            var t = this._actions,
                e = this._nActiveActions,
                i = this._bindings,
                n = this._nActiveBindings;
            this._nActiveActions = 0, this._nActiveBindings = 0;
            for (var r = 0; r !== e; ++r) t[r].reset();
            for (var r = 0; r !== n; ++r) i[r].useCount = 0;
            return this
        },
        update: function (t) {
            t *= this.timeScale;
            for (var e = this._actions, i = this._nActiveActions, n = this.time += t, r = Math.sign(t), o = this._accuIndex ^= 1, a = 0; a !== i; ++a) {
                e[a]._update(n, t, r, o)
            }
            for (var s = this._bindings, h = this._nActiveBindings, a = 0; a !== h; ++a) s[a].apply(o);
            return this
        },
        getRoot: function () {
            return this._root
        },
        uncacheClip: function (t) {
            var e = this._actions,
                i = t.uuid,
                n = this._actionsByClip,
                r = n[i];
            if (void 0 !== r) {
                for (var o = r.knownActions, a = 0, s = o.length; a !== s; ++a) {
                    var h = o[a];
                    this._deactivateAction(h);
                    var c = h._cacheIndex,
                        u = e[e.length - 1];
                    h._cacheIndex = null, h._byClipCacheIndex = null, u._cacheIndex = c, e[c] = u, e.pop(), this._removeInactiveBindingsForAction(h)
                }
                delete n[i]
            }
        },
        uncacheRoot: function (t) {
            var e = t.uuid,
                i = this._actionsByClip;
            for (var n in i) {
                var r = i[n].actionByRoot,
                    o = r[e];
                void 0 !== o && (this._deactivateAction(o), this._removeInactiveAction(o))
            }
            var a = this._bindingsByRootAndName,
                s = a[e];
            if (void 0 !== s)
                for (var h in s) {
                    var c = s[h];
                    c.restoreOriginalState(), this._removeInactiveBinding(c)
                }
        },
        uncacheAction: function (t, e) {
            var i = this.existingAction(t, e);
            null !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
        }
    }), Dr.prototype.clone = function () {
        return new Dr(void 0 === this.value.clone ? this.value : this.value.clone())
    }, kr.prototype = Object.assign(Object.create(Et.prototype), {
        constructor: kr,
        isInstancedBufferGeometry: !0,
        copy: function (t) {
            return Et.prototype.copy.call(this, t), this.maxInstancedCount = t.maxInstancedCount, this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        }
    }), Object.defineProperties(zr.prototype, {
        count: {
            get: function () {
                return this.data.count
            }
        },
        array: {
            get: function () {
                return this.data.array
            }
        }
    }), Object.assign(zr.prototype, {
        isInterleavedBufferAttribute: !0,
        setX: function (t, e) {
            return this.data.array[t * this.data.stride + this.offset] = e, this
        },
        setY: function (t, e) {
            return this.data.array[t * this.data.stride + this.offset + 1] = e, this
        },
        setZ: function (t, e) {
            return this.data.array[t * this.data.stride + this.offset + 2] = e, this
        },
        setW: function (t, e) {
            return this.data.array[t * this.data.stride + this.offset + 3] = e, this
        },
        getX: function (t) {
            return this.data.array[t * this.data.stride + this.offset]
        },
        getY: function (t) {
            return this.data.array[t * this.data.stride + this.offset + 1]
        },
        getZ: function (t) {
            return this.data.array[t * this.data.stride + this.offset + 2]
        },
        getW: function (t) {
            return this.data.array[t * this.data.stride + this.offset + 3]
        },
        setXY: function (t, e, i) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this
        },
        setXYZ: function (t, e, i, n) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this
        },
        setXYZW: function (t, e, i, n, r) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this
        }
    }), Object.defineProperty(Ur.prototype, "needsUpdate", {
        set: function (t) {
            !0 === t && this.version++
        }
    }), Object.assign(Ur.prototype, {
        isInterleavedBuffer: !0,
        setArray: function (t) {
            if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t
        },
        setDynamic: function (t) {
            return this.dynamic = t, this
        },
        copy: function (t) {
            return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.dynamic = t.dynamic, this
        },
        copyAt: function (t, e, i) {
            t *= this.stride, i *= e.stride;
            for (var n = 0, r = this.stride; n < r; n++) this.array[t + n] = e.array[i + n];
            return this
        },
        set: function (t, e) {
            return void 0 === e && (e = 0), this.array.set(t, e), this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        onUpload: function (t) {
            return this.onUploadCallback = t, this
        }
    }), Fr.prototype = Object.assign(Object.create(Ur.prototype), {
        constructor: Fr,
        isInstancedInterleavedBuffer: !0,
        copy: function (t) {
            return Ur.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
        }
    }), Br.prototype = Object.assign(Object.create(vt.prototype), {
        constructor: Br,
        isInstancedBufferAttribute: !0,
        copy: function (t) {
            return vt.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
        }
    }), Object.assign(Gr.prototype, {
        linePrecision: 1,
        set: function (t, e) {
            this.ray.set(t, e)
        },
        setFromCamera: function (t, e) {
            e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera && (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld))
        },
        intersectObject: function (t, e) {
            var i = [];
            return Vr(t, this, i, e), i.sort(jr), i
        },
        intersectObjects: function (t, e) {
            var i = [];
            if (!1 === Array.isArray(t)) return i;
            for (var n = 0, r = t.length; n < r; n++) Vr(t[n], this, i, e);
            return i.sort(jr), i
        }
    }), Object.assign(Wr.prototype, {
        start: function () {
            this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
        },
        stop: function () {
            this.getElapsedTime(), this.running = !1, this.autoStart = !1
        },
        getElapsedTime: function () {
            return this.getDelta(), this.elapsedTime
        },
        getDelta: function () {
            var t = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                var e = ("undefined" == typeof performance ? Date : performance).now();
                t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
            }
            return t
        }
    }), Object.assign(Hr.prototype, {
        set: function (t, e, i) {
            return this.radius = t, this.phi = e, this.theta = i, this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
        },
        makeSafe: function () {
            return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
        },
        setFromVector3: function (t) {
            return this.radius = t.length(), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t.x, t.z), this.phi = Math.acos(ah.clamp(t.y / this.radius, -1, 1))), this
        }
    }), Object.assign(Xr.prototype, {
        set: function (t, e, i) {
            return this.radius = t, this.theta = e, this.y = i, this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
        },
        setFromVector3: function (t) {
            return this.radius = Math.sqrt(t.x * t.x + t.z * t.z), this.theta = Math.atan2(t.x, t.z), this.y = t.y, this
        }
    }), qr.prototype = Object.create(lt.prototype), qr.prototype.constructor = qr, qr.prototype.isImmediateRenderObject = !0, Yr.prototype = Object.create(De.prototype), Yr.prototype.constructor = Yr, Yr.prototype.update = function () {
        var t = new s,
            e = new s,
            i = new h;
        return function () {
            var n = ["a", "b", "c"];
            this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
            var r = this.object.matrixWorld,
                o = this.geometry.attributes.position,
                a = this.object.geometry;
            if (a && a.isGeometry)
                for (var s = a.vertices, h = a.faces, c = 0, u = 0, l = h.length; u < l; u++)
                    for (var p = h[u], f = 0, d = p.vertexNormals.length; f < d; f++) {
                        var m = s[p[n[f]]],
                            v = p.vertexNormals[f];
                        t.copy(m).applyMatrix4(r), e.copy(v).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), o.setXYZ(c, t.x, t.y, t.z), c += 1, o.setXYZ(c, e.x, e.y, e.z), c += 1
                    } else if (a && a.isBufferGeometry)
                for (var g = a.attributes.position, y = a.attributes.normal, c = 0, f = 0, d = g.count; f < d; f++) t.set(g.getX(f), g.getY(f), g.getZ(f)).applyMatrix4(r), e.set(y.getX(f), y.getY(f), y.getZ(f)), e.applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), o.setXYZ(c, t.x, t.y, t.z), c += 1, o.setXYZ(c, e.x, e.y, e.z), c += 1;
            o.needsUpdate = !0
        }
    }(), $r.prototype = Object.create(lt.prototype), $r.prototype.constructor = $r, $r.prototype.dispose = function () {
        this.cone.geometry.dispose(), this.cone.material.dispose()
    }, $r.prototype.update = function () {
        var t = new s,
            e = new s;
        return function () {
            this.light.updateMatrixWorld();
            var i = this.light.distance ? this.light.distance : 1e3,
                n = i * Math.tan(this.light.angle);
            this.cone.scale.set(n, n, i), t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(e.sub(t)), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
        }
    }(), Jr.prototype = Object.create(De.prototype), Jr.prototype.constructor = Jr, Jr.prototype.updateMatrixWorld = function () {
        var t = new s,
            e = new o,
            i = new o;
        return function (n) {
            var r = this.bones,
                o = this.geometry,
                a = o.getAttribute("position");
            i.getInverse(this.root.matrixWorld);
            for (var s = 0, h = 0; s < r.length; s++) {
                var c = r[s];
                c.parent && c.parent.isBone && (e.multiplyMatrices(i, c.matrixWorld), t.setFromMatrixPosition(e), a.setXYZ(h, t.x, t.y, t.z), e.multiplyMatrices(i, c.parent.matrixWorld), t.setFromMatrixPosition(e), a.setXYZ(h + 1, t.x, t.y, t.z), h += 2)
            }
            o.getAttribute("position").needsUpdate = !0, lt.prototype.updateMatrixWorld.call(this, n)
        }
    }(), Qr.prototype = Object.create(Ut.prototype), Qr.prototype.constructor = Qr, Qr.prototype.dispose = function () {
        this.geometry.dispose(), this.material.dispose()
    }, Qr.prototype.update = function () {
        void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
    }, Kr.prototype = Object.create(lt.prototype), Kr.prototype.constructor = Kr, Kr.prototype.dispose = function () {
        this.children[0].geometry.dispose(), this.children[0].material.dispose()
    }, Kr.prototype.update = function () {
        var t = .5 * this.light.width,
            e = .5 * this.light.height,
            i = this.line.geometry.attributes.position,
            n = i.array;
        n[0] = t, n[1] = -e, n[2] = 0, n[3] = t, n[4] = e, n[5] = 0, n[6] = -t, n[7] = e, n[8] = 0, n[9] = -t, n[10] = -e, n[11] = 0, n[12] = t, n[13] = -e, n[14] = 0, i.needsUpdate = !0, void 0 !== this.color ? this.line.material.color.set(this.color) : this.line.material.color.copy(this.light.color)
    }, to.prototype = Object.create(lt.prototype), to.prototype.constructor = to, to.prototype.dispose = function () {
        this.children[0].geometry.dispose(), this.children[0].material.dispose()
    }, to.prototype.update = function () {
        var t = new s,
            e = new $,
            i = new $;
        return function () {
            var n = this.children[0];
            if (void 0 !== this.color) this.material.color.set(this.color);
            else {
                var r = n.geometry.getAttribute("color");
                e.copy(this.light.color), i.copy(this.light.groundColor);
                for (var o = 0, a = r.count; o < a; o++) {
                    var s = o < a / 2 ? e : i;
                    r.setXYZ(o, s.r, s.g, s.b)
                }
                r.needsUpdate = !0
            }
            n.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate())
        }
    }(), eo.prototype = Object.create(De.prototype), eo.prototype.constructor = eo, io.prototype = Object.create(De.prototype), io.prototype.constructor = io, no.prototype = Object.create(De.prototype), no.prototype.constructor = no, no.prototype.update = function () {
        var t = new s,
            e = new s,
            i = new h;
        return function () {
            this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
            for (var n = this.object.matrixWorld, r = this.geometry.attributes.position, o = this.object.geometry, a = o.vertices, s = o.faces, h = 0, c = 0, u = s.length; c < u; c++) {
                var l = s[c],
                    p = l.normal;
                t.copy(a[l.a]).add(a[l.b]).add(a[l.c]).divideScalar(3).applyMatrix4(n), e.copy(p).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), r.setXYZ(h, t.x, t.y, t.z), h += 1, r.setXYZ(h, e.x, e.y, e.z), h += 1
            }
            r.needsUpdate = !0
        }
    }(), ro.prototype = Object.create(lt.prototype), ro.prototype.constructor = ro, ro.prototype.dispose = function () {
        this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
    }, ro.prototype.update = function () {
        var t = new s,
            e = new s,
            i = new s;
        return function () {
            t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), i.subVectors(e, t), this.lightPlane.lookAt(i), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(i), this.targetLine.scale.z = i.length()
        }
    }(), oo.prototype = Object.create(De.prototype), oo.prototype.constructor = oo, oo.prototype.update = function () {
        function t(t, o, a, s) {
            n.set(o, a, s).unproject(r);
            var h = i[t];
            if (void 0 !== h)
                for (var c = e.getAttribute("position"), u = 0, l = h.length; u < l; u++) c.setXYZ(h[u], n.x, n.y, n.z)
        }

        var e, i, n = new s,
            r = new pt;
        return function () {
            e = this.geometry, i = this.pointMap;
            r.projectionMatrix.copy(this.camera.projectionMatrix), t("c", 0, 0, -1), t("t", 0, 0, 1), t("n1", -1, -1, -1), t("n2", 1, -1, -1), t("n3", -1, 1, -1), t("n4", 1, 1, -1), t("f1", -1, -1, 1), t("f2", 1, -1, 1), t("f3", -1, 1, 1), t("f4", 1, 1, 1), t("u1", .7, 1.1, -1), t("u2", -.7, 1.1, -1), t("u3", 0, 2, -1), t("cf1", -1, 0, 1), t("cf2", 1, 0, 1), t("cf3", 0, -1, 1), t("cf4", 0, 1, 1), t("cn1", -1, 0, -1), t("cn2", 1, 0, -1), t("cn3", 0, -1, -1), t("cn4", 0, 1, -1), e.getAttribute("position").needsUpdate = !0
        }
    }(), ao.prototype = Object.create(De.prototype), ao.prototype.constructor = ao, ao.prototype.update = function () {
        var t = new nt;
        return function (e) {
            if (void 0 !== this.object && t.setFromObject(this.object), !t.isEmpty()) {
                var i = t.min,
                    n = t.max,
                    r = this.geometry.attributes.position,
                    o = r.array;
                o[0] = n.x, o[1] = n.y, o[2] = n.z, o[3] = i.x, o[4] = n.y, o[5] = n.z, o[6] = i.x, o[7] = i.y, o[8] = n.z, o[9] = n.x, o[10] = i.y, o[11] = n.z, o[12] = n.x, o[13] = n.y, o[14] = i.z, o[15] = i.x, o[16] = n.y, o[17] = i.z, o[18] = i.x, o[19] = i.y, o[20] = i.z, o[21] = n.x, o[22] = i.y, o[23] = i.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere()
            }
        }
    }(), ao.prototype.setFromObject = function (t) {
        return this.object = t, this.update(), this
    }, so.prototype = Object.create(De.prototype), so.prototype.constructor = so, so.prototype.updateMatrixWorld = function (t) {
        var e = this.box;
        e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), lt.prototype.updateMatrixWorld.call(this, t))
    }, ho.prototype = Object.create(Ie.prototype), ho.prototype.constructor = ho, ho.prototype.updateMatrixWorld = function (t) {
        var e = -this.plane.constant;
        Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.lookAt(this.plane.normal), lt.prototype.updateMatrixWorld.call(this, t)
    };
    var Hh, Xh;
    co.prototype = Object.create(lt.prototype), co.prototype.constructor = co, co.prototype.setDirection = function () {
        var t, e = new s;
        return function (i) {
            i.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : i.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (e.set(i.z, 0, -i.x).normalize(), t = Math.acos(i.y), this.quaternion.setFromAxisAngle(e, t))
        }
    }(), co.prototype.setLength = function (t, e, i) {
        void 0 === e && (e = .2 * t), void 0 === i && (i = .2 * e), this.line.scale.set(1, Math.max(0, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(i, e, i), this.cone.position.y = t, this.cone.updateMatrix()
    }, co.prototype.setColor = function (t) {
        this.line.material.color.copy(t), this.cone.material.color.copy(t)
    }, uo.prototype = Object.create(De.prototype), uo.prototype.constructor = uo;
    var qh = {
            createMultiMaterialObject: function (t, e) {
                for (var i = new Fe, n = 0, r = e.length; n < r; n++) i.add(new Ut(t, e[n]));
                return i
            },
            detach: function (t, e, i) {
                t.applyMatrix(e.matrixWorld), e.remove(t), i.add(t)
            },
            attach: function (t, e, i) {
                t.applyMatrix((new o).getInverse(i.matrixWorld)), e.remove(t), i.add(t)
            }
        },
        Yh = 0,
        $h = 1;
    _n.create = function (t, e) {
        return t.prototype = Object.create(_n.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
    }, Object.assign(Gn.prototype, {
        createPointsGeometry: function (t) {
            var e = this.getPoints(t);
            return this.createGeometry(e)
        },
        createSpacedPointsGeometry: function (t) {
            var e = this.getSpacedPoints(t);
            return this.createGeometry(e)
        },
        createGeometry: function (t) {
            for (var e = new mt, i = 0, n = t.length; i < n; i++) {
                var r = t[i];
                e.vertices.push(new s(r.x, r.y, r.z || 0))
            }
            return e
        }
    }), Object.assign(jn.prototype, {
        fromPoints: function (t) {
            this.setFromPoints(t)
        }
    }), Oo.prototype = Object.create(Mn.prototype), Ro.prototype = Object.create(Mn.prototype), Io.prototype = Object.create(Mn.prototype), Object.assign(Io.prototype, {
        initFromArray: function () {
        },
        getControlPointsArray: function () {
        },
        reparametrizeByArcLength: function () {
        }
    }), eo.prototype.setColors = function () {
    }, Jr.prototype.update = function () {
    }, Object.assign(mr.prototype, {
        extractUrlBase: function (t) {
            return Fh.extractUrlBase(t)
        }
    }), Object.assign(Z.prototype, {
        center: function (t) {
            return this.getCenter(t)
        },
        empty: function () {
            return this.isEmpty()
        },
        isIntersectionBox: function (t) {
            return this.intersectsBox(t)
        },
        size: function (t) {
            return this.getSize(t)
        }
    }), Object.assign(nt.prototype, {
        center: function (t) {
            return this.getCenter(t)
        },
        empty: function () {
            return this.isEmpty()
        },
        isIntersectionBox: function (t) {
            return this.intersectsBox(t)
        },
        isIntersectionSphere: function (t) {
            return this.intersectsSphere(t)
        },
        size: function (t) {
            return this.getSize(t)
        }
    }), kt.prototype.center = function (t) {
        return this.getCenter(t)
    }, Object.assign(ah, {
        random16: function () {
            return Math.random()
        },
        nearestPowerOfTwo: function (t) {
            return ah.floorPowerOfTwo(t)
        },
        nextPowerOfTwo: function (t) {
            return ah.ceilPowerOfTwo(t)
        }
    }), Object.assign(h.prototype, {
        flattenToArrayOffset: function (t, e) {
            return this.toArray(t, e)
        },
        multiplyVector3: function (t) {
            return t.applyMatrix3(this)
        },
        multiplyVector3Array: function () {
        },
        applyToBuffer: function (t) {
            return this.applyToBufferAttribute(t)
        },
        applyToVector3Array: function () {
        }
    }), Object.assign(o.prototype, {
        extractPosition: function (t) {
            return this.copyPosition(t)
        },
        flattenToArrayOffset: function (t, e) {
            return this.toArray(t, e)
        },
        getPosition: function () {
            var t;
            return function () {
                return void 0 === t && (t = new s), t.setFromMatrixColumn(this, 3)
            }
        }(),
        setRotationFromQuaternion: function (t) {
            return this.makeRotationFromQuaternion(t)
        },
        multiplyToArray: function () {
        },
        multiplyVector3: function (t) {
            return t.applyMatrix4(this)
        },
        multiplyVector4: function (t) {
            return t.applyMatrix4(this)
        },
        multiplyVector3Array: function () {
        },
        rotateAxis: function (t) {
            t.transformDirection(this)
        },
        crossVector: function (t) {
            return t.applyMatrix4(this)
        },
        translate: function () {
        },
        rotateX: function () {
        },
        rotateY: function () {
        },
        rotateZ: function () {
        },
        rotateByAxis: function () {
        },
        applyToBuffer: function (t) {
            return this.applyToBufferAttribute(t)
        },
        applyToVector3Array: function () {
        },
        makeFrustum: function (t, e, i, n, r, o) {
            return this.makePerspective(t, e, n, i, r, o)
        }
    }), ot.prototype.isIntersectionLine = function (t) {
        return this.intersectsLine(t)
    }, a.prototype.multiplyVector3 = function (t) {
        return t.applyQuaternion(this)
    }, Object.assign(Dt.prototype, {
        isIntersectionBox: function (t) {
            return this.intersectsBox(t)
        },
        isIntersectionPlane: function (t) {
            return this.intersectsPlane(t)
        },
        isIntersectionSphere: function (t) {
            return this.intersectsSphere(t)
        }
    }), Object.assign(Vn.prototype, {
        extractAllPoints: function (t) {
            return this.extractPoints(t)
        },
        extrude: function (t) {
            return new ki(this, t)
        },
        makeGeometry: function (t) {
            return new Xi(this, t)
        }
    }), Object.assign(r.prototype, {
        fromAttribute: function (t, e, i) {
            return this.fromBufferAttribute(t, e, i)
        },
        distanceToManhattan: function (t) {
            return this.manhattanDistanceTo(t)
        },
        lengthManhattan: function () {
            return this.manhattanLength()
        }
    }), Object.assign(s.prototype, {
        setEulerFromRotationMatrix: function () {
        },
        setEulerFromQuaternion: function () {
        },
        getPositionFromMatrix: function (t) {
            return this.setFromMatrixPosition(t)
        },
        getScaleFromMatrix: function (t) {
            return this.setFromMatrixScale(t)
        },
        getColumnFromMatrix: function (t, e) {
            return this.setFromMatrixColumn(e, t)
        },
        applyProjection: function (t) {
            return this.applyMatrix4(t)
        },
        fromAttribute: function (t, e, i) {
            return this.fromBufferAttribute(t, e, i)
        },
        distanceToManhattan: function (t) {
            return this.manhattanDistanceTo(t)
        },
        lengthManhattan: function () {
            return this.manhattanLength()
        }
    }), Object.assign(u.prototype, {
        fromAttribute: function (t, e, i) {
            return this.fromBufferAttribute(t, e, i)
        },
        lengthManhattan: function () {
            return this.manhattanLength()
        }
    }), mt.prototype.computeTangents = function () {
    }, Object.assign(lt.prototype, {
        getChildByName: function (t) {
            return this.getObjectByName(t)
        },
        renderDepth: function () {
        },
        translate: function (t, e) {
            return this.translateOnAxis(e, t)
        }
    }), Object.defineProperties(lt.prototype, {
        eulerOrder: {
            get: function () {
                return this.rotation.order
            },
            set: function (t) {
                this.rotation.order = t
            }
        },
        useQuaternion: {
            get: function () {
            },
            set: function () {
            }
        }
    }), Object.defineProperties(Ce.prototype, {
        objects: {
            get: function () {
                return this.levels
            }
        }
    }), Object.defineProperty(Le.prototype, "useVertexTexture", {
        get: function () {
        },
        set: function () {
        }
    }), Object.defineProperty(_n.prototype, "__arcLengthDivisions", {
        get: function () {
            return this.arcLengthDivisions
        },
        set: function (t) {
            this.arcLengthDivisions = t
        }
    }), ve.prototype.setLens = function (t, e) {
        void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
    }, Object.defineProperties(Wn.prototype, {
        onlyShadow: {
            set: function () {
            }
        },
        shadowCameraFov: {
            set: function (t) {
                this.shadow.camera.fov = t
            }
        },
        shadowCameraLeft: {
            set: function (t) {
                this.shadow.camera.left = t
            }
        },
        shadowCameraRight: {
            set: function (t) {
                this.shadow.camera.right = t
            }
        },
        shadowCameraTop: {
            set: function (t) {
                this.shadow.camera.top = t
            }
        },
        shadowCameraBottom: {
            set: function (t) {
                this.shadow.camera.bottom = t
            }
        },
        shadowCameraNear: {
            set: function (t) {
                this.shadow.camera.near = t
            }
        },
        shadowCameraFar: {
            set: function (t) {
                this.shadow.camera.far = t
            }
        },
        shadowCameraVisible: {
            set: function () {
            }
        },
        shadowBias: {
            set: function (t) {
                this.shadow.bias = t
            }
        },
        shadowDarkness: {
            set: function () {
            }
        },
        shadowMapWidth: {
            set: function (t) {
                this.shadow.mapSize.width = t
            }
        },
        shadowMapHeight: {
            set: function (t) {
                this.shadow.mapSize.height = t
            }
        }
    }), Object.defineProperties(vt.prototype, {
        length: {
            get: function () {
                return this.array.length
            }
        }
    }), Object.assign(Et.prototype, {
        addIndex: function (t) {
            this.setIndex(t)
        },
        addDrawCall: function (t, e, i) {
            this.addGroup(t, e)
        },
        clearDrawCalls: function () {
            this.clearGroups()
        },
        computeTangents: function () {
        },
        computeOffsets: function () {
        }
    }), Object.defineProperties(Et.prototype, {
        drawcalls: {
            get: function () {
                return this.groups
            }
        },
        offsets: {
            get: function () {
                return this.groups
            }
        }
    }), Object.defineProperties(Dr.prototype, {
        dynamic: {
            set: function () {
            }
        },
        onUpdate: {
            value: function () {
                return this
            }
        }
    }), Object.defineProperties(tt.prototype, {
        wrapAround: {
            get: function () {
            },
            set: function () {
            }
        },
        wrapRGB: {
            get: function () {
                return new $
            }
        },
        shading: {
            get: function () {
            },
            set: function (t) {
                this.flatShading = t === na
            }
        }
    }), Object.defineProperties(sn.prototype, {
        metal: {
            get: function () {
                return !1
            },
            set: function () {
            }
        }
    }), Object.defineProperties(It.prototype, {
        derivatives: {
            get: function () {
                return this.extensions.derivatives
            },
            set: function (t) {
                this.extensions.derivatives = t
            }
        }
    }), Object.assign(we.prototype, {
        getCurrentRenderTarget: function () {
            return this.getRenderTarget()
        },
        getMaxAnisotropy: function () {
            return this.capabilities.getMaxAnisotropy()
        },
        getPrecision: function () {
            return this.capabilities.precision
        },
        resetGLState: function () {
            return this.state.reset()
        },
        supportsFloatTextures: function () {
            return this.extensions.get("OES_texture_float")
        },
        supportsHalfFloatTextures: function () {
            return this.extensions.get("OES_texture_half_float")
        },
        supportsStandardDerivatives: function () {
            return this.extensions.get("OES_standard_derivatives")
        },
        supportsCompressedTextureS3TC: function () {
            return this.extensions.get("WEBGL_compressed_texture_s3tc")
        },
        supportsCompressedTexturePVRTC: function () {
            return this.extensions.get("WEBGL_compressed_texture_pvrtc")
        },
        supportsBlendMinMax: function () {
            return this.extensions.get("EXT_blend_minmax")
        },
        supportsVertexTextures: function () {
            return this.capabilities.vertexTextures
        },
        supportsInstancedArrays: function () {
            return this.extensions.get("ANGLE_instanced_arrays")
        },
        enableScissorTest: function (t) {
            this.setScissorTest(t)
        },
        initMaterial: function () {
        },
        addPrePlugin: function () {
        },
        addPostPlugin: function () {
        },
        updateShadowMap: function () {
        }
    }), Object.defineProperties(we.prototype, {
        shadowMapEnabled: {
            get: function () {
                return this.shadowMap.enabled
            },
            set: function (t) {
                this.shadowMap.enabled = t
            }
        },
        shadowMapType: {
            get: function () {
                return this.shadowMap.type
            },
            set: function (t) {
                this.shadowMap.type = t
            }
        },
        shadowMapCullFace: {
            get: function () {
                return this.shadowMap.cullFace
            },
            set: function (t) {
                this.shadowMap.cullFace = t
            }
        }
    }), Object.defineProperties(st.prototype, {
        cullFace: {
            get: function () {
                return this.renderReverseSided ? qo : Xo
            },
            set: function (t) {
                var e = t !== Xo;
                this.renderReverseSided = e
            }
        }
    }), Object.defineProperties(l.prototype, {
        wrapS: {
            get: function () {
                return this.texture.wrapS
            },
            set: function (t) {
                this.texture.wrapS = t
            }
        },
        wrapT: {
            get: function () {
                return this.texture.wrapT
            },
            set: function (t) {
                this.texture.wrapT = t
            }
        },
        magFilter: {
            get: function () {
                return this.texture.magFilter
            },
            set: function (t) {
                this.texture.magFilter = t
            }
        },
        minFilter: {
            get: function () {
                return this.texture.minFilter
            },
            set: function (t) {
                this.texture.minFilter = t
            }
        },
        anisotropy: {
            get: function () {
                return this.texture.anisotropy
            },
            set: function (t) {
                this.texture.anisotropy = t
            }
        },
        offset: {
            get: function () {
                return this.texture.offset
            },
            set: function (t) {
                this.texture.offset = t
            }
        },
        repeat: {
            get: function () {
                return this.texture.repeat
            },
            set: function (t) {
                this.texture.repeat = t
            }
        },
        format: {
            get: function () {
                return this.texture.format
            },
            set: function (t) {
                this.texture.format = t
            }
        },
        type: {
            get: function () {
                return this.texture.type
            },
            set: function (t) {
                this.texture.type = t
            }
        },
        generateMipmaps: {
            get: function () {
                return this.texture.generateMipmaps
            },
            set: function (t) {
                this.texture.generateMipmaps = t
            }
        }
    }), Object.assign(ye.prototype, {
        getStandingMatrix: function () {
        }
    }), Object.defineProperties(ye.prototype, {
        standing: {
            set: function () {
            }
        }
    }), Ar.prototype.load = function (t) {
        var e = this;
        return (new wr).load(t, function (t) {
            e.setBuffer(t)
        }), this
    }, Er.prototype.getData = function () {
        return this.getFrequencyData()
    }, Tr.prototype.updateCubeMap = function (t, e) {
        return this.update(t, e)
    };
    var Zh = {
            merge: function (t, e, i) {
                var n;
                e.isMesh && (e.matrixAutoUpdate && e.updateMatrix(), n = e.matrix, e = e.geometry), t.merge(e, n, i)
            },
            center: function (t) {
                return t.center()
            }
        },
        Jh = {
            crossOrigin: void 0,
            loadTexture: function (t, e, i, n) {
                var r = new yn;
                r.setCrossOrigin(this.crossOrigin);
                var o = r.load(t, i, void 0, n);
                return e && (o.mapping = e), o
            },
            loadTextureCube: function (t, e, i, n) {
                var r = new gn;
                r.setCrossOrigin(this.crossOrigin);
                var o = r.load(t, i, void 0, n);
                return e && (o.mapping = e), o
            },
            loadCompressedTexture: function () {
            },
            loadCompressedTextureCube: function () {
            }
        }
}