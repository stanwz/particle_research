function (t, e, i) {
    "use strict";
    var n = n || i(3);
    n.GPUParticleSystem = function (t) {
        var e = this;
        t = t || {}, e.PARTICLE_COUNT = t.maxParticles || 1e6, e.PARTICLE_CONTAINERS = t.containerCount || 1, e.PARTICLE_NOISE_TEXTURE = t.particleNoiseTex || null, e.PARTICLE_SPRITE_TEXTURE = t.particleSpriteTex || null, e.PARTICLES_PER_CONTAINER = Math.ceil(e.PARTICLE_COUNT / e.PARTICLE_CONTAINERS), e.PARTICLE_CURSOR = 0, e.time = 0;
        var i = {
            vertexShader: ["precision highp float;", "const vec4 bitSh = vec4(256. * 256. * 256., 256. * 256., 256., 1.);", "const vec4 bitMsk = vec4(0.,vec3(1./256.0));", "const vec4 bitShifts = vec4(1.) / bitSh;", "#define FLOAT_MAX\t1.70141184e38", "#define FLOAT_MIN\t1.17549435e-38", "lowp vec4 encode_float(highp float v) {", "highp float av = abs(v);", "//Handle special cases", "if(av < FLOAT_MIN) {", "return vec4(0.0, 0.0, 0.0, 0.0);", "} else if(v > FLOAT_MAX) {", "return vec4(127.0, 128.0, 0.0, 0.0) / 255.0;", "} else if(v < -FLOAT_MAX) {", "return vec4(255.0, 128.0, 0.0, 0.0) / 255.0;", "}", "highp vec4 c = vec4(0,0,0,0);", "//Compute exponent and mantissa", "highp float e = floor(log2(av));", "highp float m = av * pow(2.0, -e) - 1.0;", "c[1] = floor(128.0 * m);", "m -= c[1] / 128.0;", "c[2] = floor(32768.0 * m);", "m -= c[2] / 32768.0;", "c[3] = floor(8388608.0 * m);", "//Unpack exponent", "highp float ebias = e + 127.0;", "c[0] = floor(ebias / 2.0);", "ebias -= c[0] * 2.0;", "c[1] += floor(ebias) * 128.0;", "//Unpack sign bit", "c[0] += 128.0 * step(0.0, -v);", "//Scale back to range", "return c / 255.0;", "}", "vec4 pack(const in float depth)", "{", "const vec4 bit_shift = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);", "const vec4 bit_mask\t= vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);", "vec4 res = mod(depth*bit_shift*vec4(255), vec4(256))/vec4(255);", "res -= res.xxyz * bit_mask;", "return res;", "}", "float unpack(const in vec4 rgba_depth)", "{", "const vec4 bit_shift = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);", "float depth = dot(rgba_depth, bit_shift);", "return depth;", "}", "uniform float uTime;", "uniform float uScale;", "uniform sampler2D tNoise;", "attribute vec4 particlePositionsStartTime;", "attribute vec4 particleVelColSizeLife;", "attribute vec3 particleVelocity;", "attribute float particleTurbulence;", "varying vec4 vColor;", "varying float lifeLeft;", "void main() {", "// unpack things from our attributes", "vColor = encode_float( particleVelColSizeLife.y );", "// convert our velocity back into a value we can use", "vec3 velocity = particleVelocity;", "float turbulence = particleTurbulence;", "vec3 newPosition;", "float timeElapsed = uTime - particlePositionsStartTime.a;", "lifeLeft = 1. - (timeElapsed / particleVelColSizeLife.w);", "gl_PointSize = ( uScale * particleVelColSizeLife.z ) * lifeLeft;", "newPosition = particlePositionsStartTime.xyz + ( velocity * 10. ) * ( uTime - particlePositionsStartTime.a );", "vec3 noise = texture2D( tNoise, vec2( newPosition.x * .015 + (uTime * .05), newPosition.y * .02 + (uTime * .015) )).rgb;", "vec3 noiseVel = ( noise.rgb - .5 ) * 30.;", "newPosition = mix(newPosition, newPosition + vec3(noiseVel * ( turbulence * 5. ) ), (timeElapsed / particleVelColSizeLife.a) );", "if( velocity.y > 0. && velocity.y < .05 ) {", "lifeLeft = 0.;", "}", "if( velocity.x < -1.45 ) {", "lifeLeft = 0.;", "}", "if( timeElapsed > 0. ) {", "gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );", "} else {", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "lifeLeft = 0.;", "gl_PointSize = 0.;", "}", "}"].join("\n"),
            fragmentShader: ["float scaleLinear(float value, vec2 valueDomain) {", "return (value - valueDomain.x) / (valueDomain.y - valueDomain.x);", "}", "float scaleLinear(float value, vec2 valueDomain, vec2 valueRange) {", "return mix(valueRange.x, valueRange.y, scaleLinear(value, valueDomain));", "}", "varying vec4 vColor;", "varying float lifeLeft;", "uniform sampler2D tSprite;", "void main() {", "float alpha = 0.;", "if( lifeLeft > .995 ) {", "alpha = scaleLinear( lifeLeft, vec2(1., .995), vec2(0., 1.));//mix( 0., 1., ( lifeLeft - .95 ) * 100. ) * .75;", "} else {", "alpha = lifeLeft * .75;", "}", "vec4 tex = texture2D( tSprite, gl_PointCoord );", "gl_FragColor = vec4( vColor.rgb * tex.a, alpha * tex.a );", "}"].join("\n")
        };
        e.rand = [];
        for (var r = 1e5; r > 0; r--) e.rand.push(Math.random() - .5);
        e.random = function () {
            return ++r >= e.rand.length ? e.rand[r = 1] : e.rand[r]
        };
        var o = new n.TextureLoader;
        e.particleNoiseTex = e.PARTICLE_NOISE_TEXTURE || o.load("assets/3d/perlin-512.png"), e.particleNoiseTex.wrapS = e.particleNoiseTex.wrapT = n.RepeatWrapping, e.particleSpriteTex = e.PARTICLE_SPRITE_TEXTURE || o.load("assets/3d/particle.png"), e.particleSpriteTex.wrapS = e.particleSpriteTex.wrapT = n.RepeatWrapping, e.particleShaderMat = new n.ShaderMaterial({
            transparent: !0,
            depthWrite: !1,
            uniforms: {
                uTime: {
                    value: 0
                },
                uScale: {
                    value: 1
                },
                tNoise: {
                    value: e.particleNoiseTex
                },
                tSprite: {
                    value: e.particleSpriteTex
                }
            },
            blending: n.AdditiveBlending,
            vertexShader: i.vertexShader,
            fragmentShader: i.fragmentShader
        }), e.particleShaderMat.defaultAttributeValues.particlePositionsStartTime = [0, 0, 0, 0], e.particleShaderMat.defaultAttributeValues.particleVelColSizeLife = [0, 0, 0, 0], e.particleContainers = [], n.Object3D.apply(this, arguments), this.init = function () {
            for (var t = 0; t < e.PARTICLE_CONTAINERS; t++) {
                var i = new n.GPUParticleContainer(e.PARTICLES_PER_CONTAINER, e);
                e.particleContainers.push(i), e.add(i)
            }
        }, this.spawnParticle = function (t) {
            ++e.PARTICLE_CURSOR >= e.PARTICLE_COUNT && (e.PARTICLE_CURSOR = 1), e.particleContainers[Math.floor(e.PARTICLE_CURSOR / e.PARTICLES_PER_CONTAINER)].spawnParticle(t)
            ++e.PARTICLE_CURSOR >= e.PARTICLE_COUNT && (e.PARTICLE_CURSOR = 1), e.particleContainers[Math.floor(e.PARTICLE_CURSOR / e.PARTICLES_PER_CONTAINER)].spawnParticle(t)
        }, this.update = function (t) {
            for (var i = 0; i < e.PARTICLE_CONTAINERS; i++) e.particleContainers[i].update(t)
        }, this.init()
    }, n.GPUParticleSystem.prototype = Object.create(n.Object3D.prototype), n.GPUParticleSystem.prototype.constructor = n.GPUParticleSystem, n.GPUParticleContainer = function (t, e) {
        function i(t, e, i, n) {
            return a[0] = Math.floor(n), a[1] = Math.floor(i), a[2] = Math.floor(e), a[3] = Math.floor(t), s[0]
        }

        function r(t) {
            var e = t >> 16,
                i = (65280 & t) >> 8,
                n = 255 & t;
            return e > 0 && e--, i > 0 && i--, n > 0 && n--, [e, i, n]
        }

        var o = this;
        o.PARTICLE_COUNT = t || 1e5, o.PARTICLE_CURSOR = 0, o.time = 0, o.DPR = window.devicePixelRatio, o.GPUParticleSystem = e;
        Math.floor(o.PARTICLE_COUNT / o.MAX_ATTRIBUTES);
        n.Object3D.apply(this, arguments);
        var a = new Uint8Array(4),
            s = new Float32Array(a.buffer);
        o.particles = [], o.deadParticles = [], o.particlesAvailableSlot = [], o.particleUpdate = !1, o.particleShaderGeo = new n.BufferGeometry, o.particleVertices = new Float32Array(3 * o.PARTICLE_COUNT), o.particlePositionsStartTime = new Float32Array(4 * o.PARTICLE_COUNT), o.particleVelocity = new Float32Array(3 * o.PARTICLE_COUNT), o.particleTurbulence = new Float32Array(o.PARTICLE_COUNT), o.particleVelColSizeLife = new Float32Array(4 * o.PARTICLE_COUNT);
        for (var h = 0; h < o.PARTICLE_COUNT; h++) o.particlePositionsStartTime[4 * h + 0] = 100, o.particlePositionsStartTime[4 * h + 1] = 0, o.particlePositionsStartTime[4 * h + 2] = 0, o.particlePositionsStartTime[4 * h + 3] = 0, o.particleVertices[3 * h + 0] = 0, o.particleVertices[3 * h + 1] = 0, o.particleVertices[3 * h + 2] = 0, o.particleVelColSizeLife[4 * h + 0] = i(128, 128, 0, 0), o.particleVelColSizeLife[4 * h + 1] = i(0, 254, 0, 254), o.particleVelColSizeLife[4 * h + 2] = 1, o.particleVelColSizeLife[4 * h + 3] = 0;
        o.particleShaderGeo.addAttribute("position", new n.BufferAttribute(o.particleVertices, 3)), o.particleShaderGeo.addAttribute("particlePositionsStartTime", new n.BufferAttribute(o.particlePositionsStartTime, 4).setDynamic(!0)), o.particleShaderGeo.addAttribute("particleVelColSizeLife", new n.BufferAttribute(o.particleVelColSizeLife, 4).setDynamic(!0)), o.particleShaderGeo.addAttribute("particleVelocity", new n.BufferAttribute(o.particleVelocity, 3).setDynamic(!0)), o.particleShaderGeo.addAttribute("particleTurbulence", new n.BufferAttribute(o.particleTurbulence, 1).setDynamic(!0)), o.posStart = o.particleShaderGeo.getAttribute("particlePositionsStartTime"), o.velCol = o.particleShaderGeo.getAttribute("particleVelColSizeLife"), o.velocityAttr = o.particleShaderGeo.getAttribute("particleVelocity"), o.turbulenceAttr = o.particleShaderGeo.getAttribute("particleTurbulence"), o.particleShaderMat = o.GPUParticleSystem.particleShaderMat, this.init = function () {
            o.particleSystem = new n.Points(o.particleShaderGeo, o.particleShaderMat), o.particleSystem.frustumCulled = !1, this.add(o.particleSystem)
        };
        var h, c = new n.Vector3,
            u = new n.Vector3,
            l = 0,
            p = 0,
            f = 16777215,
            d = 0,
            m = .5,
            v = 0,
            g = 0,
            y = 0,
            _ = !1;
        this.offset = 0, this.count = 0, this.spawnParticle = function (t) {
            t = t || {}, c = void 0 !== t.position ? c.copy(t.position) : c.set(0, 0, 0), u = void 0 !== t.velocity ? u.copy(t.velocity) : u.set(0, 0, 0), l = void 0 !== t.positionRandomness ? t.positionRandomness : 0, p = void 0 !== t.velocityRandomness ? t.velocityRandomness : 0, f = void 0 !== t.color ? t.color : 16777215, d = void 0 !== t.colorRandomness ? t.colorRandomness : 1, m = void 0 !== t.turbulence ? t.turbulence : 1, v = void 0 !== t.lifetime ? t.lifetime : 5, g = void 0 !== t.size ? t.size : 10, y = void 0 !== t.sizeRandomness ? t.sizeRandomness : 0, _ = void 0 !== t.smoothPosition && t.smoothPosition, void 0 !== o.DPR && (g *= o.DPR), h = o.PARTICLE_CURSOR, o.posStart.array[4 * h + 0] = c.x + e.random() * l, o.posStart.array[4 * h + 1] = c.y + e.random() * l, o.posStart.array[4 * h + 2] = c.z + e.random() * l, o.posStart.array[4 * h + 3] = o.time + .02 * e.random(), !0 === _ && (o.posStart.array[4 * h + 0] += -u.x * e.random(), o.posStart.array[4 * h + 1] += -u.y * e.random(), o.posStart.array[4 * h + 2] += -u.z * e.random());
            var n = u.x + e.random() * p,
                a = u.y + e.random() * p,
                s = u.z + e.random() * p;
            o.turbulenceAttr.array[h] = m, o.velocityAttr.array[3 * h + 0] = n, o.velocityAttr.array[3 * h + 1] = a, o.velocityAttr.array[3 * h + 2] = s;
            for (var x = r(f), b = 0; b < x.length; b++) x[b] = Math.floor(x[b] + e.random() * d * 254), x[b] > 254 && (x[b] = 254), x[b] < 0 && (x[b] = 0);
            o.velCol.array[4 * h + 1] = i(x[0], x[1], x[2], 254), o.velCol.array[4 * h + 2] = g + e.random() * y, o.velCol.array[4 * h + 3] = v, 0 == this.offset && (this.offset = o.PARTICLE_CURSOR), o.count++, o.PARTICLE_CURSOR++, o.PARTICLE_CURSOR >= o.PARTICLE_COUNT && (o.PARTICLE_CURSOR = 0), o.particleUpdate = !0
        }, this.update = function (t) {
            o.time = t, o.particleShaderMat.uniforms.uTime.value = t, this.geometryUpdate()
        }, this.geometryUpdate = function () {
            1 == o.particleUpdate && (o.particleUpdate = !1, o.offset + o.count < o.PARTICLE_COUNT ? (o.posStart.updateRange.offset = o.velCol.updateRange.offset = 4 * o.offset, o.posStart.updateRange.count = o.velCol.updateRange.count = 4 * o.count) : (o.posStart.updateRange.offset = 0, o.posStart.updateRange.count = o.velCol.updateRange.count = 4 * o.PARTICLE_COUNT), o.posStart.needsUpdate = !0, o.velCol.needsUpdate = !0, o.velocityAttr.needsUpdate = !0, o.turbulenceAttr.needsUpdate = !0, o.offset = 0, o.count = 0)
        }, this.init()
    }, n.GPUParticleContainer.prototype = Object.create(n.Object3D.prototype), n.GPUParticleContainer.prototype.constructor = n.GPUParticleContainer, t.exports = n.GPUParticleSystem
}