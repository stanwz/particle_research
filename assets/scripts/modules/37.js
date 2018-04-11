function (t, e) {
    t.exports =
        "#define GLSLIFY 1\n" +
        "#ifndef PI\n" +
            "#define PI 3.141592653589793\n" +
        "#endif\n\n" +

        "float backIn_1_0(float t) {\n" +
            "return pow(t, 3.0) - t * sin(t * PI);\n" +
        "}\n\n\n\n" +

        "float map_2_1(float value, float inMin, float inMax, float outMin, float outMax) {\n" +
            "return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n" +
        "}\n\n" +

        "vec2 map_2_1(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n" +
            "return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n" +
        "}\n\n" +

        "vec3 map_2_1(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n" +
            "return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n" +
        "}\n\n" +

        "vec4 map_2_1(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n" +
            "return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n" +
        "}\n\n\n\n\n" +

        "uniform sampler2D tFrom;\n" +
        "uniform sampler2D tTo;\n" +
        "uniform float tMorph;\n" +
        "uniform float timer;\n" +
        "uniform vec3 impactPosition;\n" +

        "// uniform vec3 velocity;\n\n" +
        "varying vec2 vUv;\n\n" +

        "// Pseudo random number generator\n" +

        "float rand(vec2 co) {\n" +
            "return fract(sin(dot(co.xy ,vec2(12.9898, 78.233))) * 43758.5453);\n" +
        "}\n\n" +

        "vec3 mod289(vec3 x) {\n" +
            "return x - floor(x * (1.0 / 289.0)) * 289.0;\n" +
        "}\n\n" +

        "vec2 mod289(vec2 x) {\n" +
            "return x - floor(x * (1.0 / 289.0)) * 289.0;\n" +
        "}\n\n" +

        "vec3 permute(vec3 x) {\n" +
            "return mod289(((x * 34.0) + 1.0) * x);\n" +
        "}\n\n" +

        "float noise(vec2 v) {\n" +
            "const vec4 C = vec4(0.211324865405187, // (3.0-sqrt(3.0)) / 6.0\n" +
                                "0.366025403784439, // 0.5 * (sqrt(3.0) - 1.0)\n" +
                                "-0.577350269189626, // -1.0 + 2.0 * C.x\n" +
                                "0.024390243902439); // 1.0 / 41.0\n" +

            "// First corner\n" +
            "vec2 i = floor(v + dot(v, C.yy));\n" +
            "vec2 x0 = v - i + dot(i, C.xx);\n\n" +

            "// Other corners\n  " +
            "vec2 i1;\n" +
            "i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n" +
            "vec4 x12 = x0.xyxy + C.xxzz;\n" +
            "x12.xy -= i1;\n\n" +

            "// Permutations\n" +
            "i = mod289(i); // Avoid truncation effects in permutation\n" +
            "vec3 p = permute(permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0));\n\n" +
            "vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n" +
            "m = m*m ;\n  " +
            "m = m*m ;\n\n  " +

            "// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n  " +
            "// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  " +
            "vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  " +
            "vec3 h = abs(x) - 0.5;\n  " +
            "vec3 ox = floor(x + 0.5);\n  " +
            "vec3 a0 = x - ox;\n\n  " +

            "// Normalise gradients implicitly by scaling m\n" +
            "// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  " +
            "m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);\n\n  " +

            "// Compute final noise value at P\n  " +
            "vec3 g;\n  " +
            "g.x = a0.x * x0.x + h.x * x0.y;\n  " +
            "g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n\n  " +

            "return 130.0 * dot(m, g);\n" +
        "}\n\n" +

        "vec3 curl(float x, float y, float z, float timer) {\n  " +
            "float eps = 1.0, eps2 = 2.0 * eps;\n  " +
            "float n1, n2, a, b;\n\n  " +

            "x += timer * 0.05;\n  " +
            "y += timer * 0.05;\n  " +
            "z += timer * 0.05;\n\n  " +

            "vec3 curl = vec3(0.);\n\n  " +

            "n1 = noise(vec2(x, y + eps));\n  " +
            "n2 = noise(vec2(x, y - eps));\n  " +
            "a = (n1 - n2) / eps2;\n\n  " +

            "n1 = noise(vec2(x, z + eps));\n  " +
            "n2 = noise(vec2(x, z - eps));\n  " +
            "b = (n1 - n2) / eps2;\n\n  " +

            "curl.x = a - b;\n\n  " +

            "n1 = noise(vec2(y, z + eps));\n  " +
            "n2 = noise(vec2(y, z - eps));\n  " +
            "a = (n1 - n2) / eps2;\n\n  " +

            "n1 = noise(vec2(x + eps, z));\n  " +

            "n2 = noise(vec2(x + eps, z));\n  " +
            "b = (n1 - n2) / eps2;\n\n  " +

            "curl.y = a - b;\n\n  " +

            "n1 = noise(vec2(x + eps, y));\n  " +
            "n2 = noise(vec2(x - eps, y));\n  " +
            "a = (n1 - n2) / eps2;\n\n  " +

            "n1 = noise(vec2(y + eps, z));\n  " +
            "n2 = noise(vec2(y - eps, z));\n  " +
            "b = (n1 - n2) / eps2;\n\n  " +

            "curl.z = a - b;\n\n  " +

            "return curl;\n" +
        "}\n\n" +

        "// Tests…\n" +
        "#ifndef PI\n" +
            "#define PI 3.141592653589793\n" +
        "#endif\n\n" +

        "float backIn(float t) {\n  " +
            "return pow(t, 20.0) - t * sin(t * PI);\n" +
        "}\n\n" +

        "// https://www.shadertoy.com/view/4sV3zt\n" +
        "// https://keithmaggio.wordpress.com/2011/02/15/math-magician-lerp-slerp-and-nlerp/\n" +
        "// http://www.geeks3d.com/20140205/glsl-simple-morph-target-animation-opengl-glslhacker-demo/\n" +

        "vec3 slerp(vec3 start, vec3 end, float t) {\n     " +
            "// Dot product - the cosine of the angle between 2 vectors.\n     " +
            "float dot = dot(start, end);\n     " +

            "// Clamp it to be in the range of Acos()\n     " +
            "// This may be unnecessary, but floating point\n     " +
            "// precision can be a fickle mistress.\n     " +
            "dot = clamp(dot, -1.0, 1.0);\n     " +

            "// Acos(dot) returns the angle between start and end,\n     " +
            "// And multiplying that by time returns the angle between\n     " +
            "// start and the final result.\n     " +
            "float theta = acos(dot) * t;\n     " +
            "vec3 RelativeVec = normalize(end - start * dot);\n\n     " +

            "return ((start * cos(theta)) + (RelativeVec * sin(theta)));\n" +
        "}\n\n" +

        "vec3 anime(vec3 start, vec3 end, float t) {\n  " +
            "vec3 pos;\n  " +
            "float back = 0.5;\n  " +
            "float multiplier = 0.75;\n\n  " +

            "// pos = slerp(start, end, t);\n\n  " +
            "if (t <= back) {\n    " +
                "pos = slerp(start, end, t * multiplier);\n  " +
            "} else {\n    " +
                "pos = slerp(start, end, back * multiplier);\n    " +
                "pos = mix(pos, end, map_2_1(t, 0.5, 1.0, 0.0, 1.0));\n  " +
            "}\n\n  " +

            "return pos;\n" +
        "}\n\n" +

        "void main() {\n\n  " +
            "vec3 origin = texture2D(tFrom, vUv).rgb;\n  " +
            "vec3 destination = texture2D(tTo, vUv).rgb;\n\n  " +

            "//get particle order from 0 to 1\n  " +
            "float order = (vUv.y + vUv.x / 10.0) / 10.0;\n  " +

            "// make the order less linear\n  " +
            "order = pow(order, .3);\n\n  " +

            "// make the particles move with some delay depending on their order\n  " +
            "// particle0 start moving at time0, particle1 start moving at time0.5 ...\n  " +
            "// so calculate morphRatio for each particle\n  " +
            "float morphRatio = smoothstep (0.0, 1.0, tMorph * 2.0 - order);\n\n  " +

            "// mix positions\n  " +
            "vec3 vPos = mix(origin, destination, morphRatio);\n\n  " +

            "//if (tMorph > .99 || tMorph < 0.01){\n    " +

            "// mouse attractor\n    " +
            "float mouseDistance = length(impactPosition - vPos);\n    " +
            "float attractionMinLimit = 0.0;// + sin(325.0 + timer * 0.05 * 3.14 * 2.0) * .1;\n    " +
            "float attractionMaxLimit = .35;// + sin(timer * 0.01 * 3.14 * 2.0) * .1;\n    " +
            "float mouseAttraction = 1.0 - smoothstep(attractionMinLimit, attractionMaxLimit, mouseDistance);\n    " +
            "mouseAttraction = pow( mouseAttraction, 3.0);\n    " +

            "vec3 posNormal = normalize(vPos);\n    " +
            "vPos += posNormal * mouseAttraction * .2;\n    " +
            "vPos += mouseAttraction *  abs(curl (posNormal.x, posNormal.y, posNormal.z, timer * 0.1) * .2);\n\n    " +

            "//vPos += pow( mouseAttraction, 2.0) * abs(curl(posNormal.x, posNormal.y, posNormal.z, timer * 0.05) * 1.5);//( .7 + sin(timer * 0.01 * 3.14) * .2 );\n\n  " +

            "//} else { // while transition\n    " +

            "// line attractor\n    " +
            "vec3 attractor1 = vec3(order, 0.0, 0.0);\n    " +
            "attractor1.y += sin(morphRatio * 3.14 + timer * 0.001) * .5;\n    " +
            "attractor1.z += cos(morphRatio * 3.14 + 1.0 + timer * 0.003) * .5;\n    " +
            "attractor1.x += sin(morphRatio * 3.14 + 2.0 + timer * 0.0025) * .2;\n    " +
            "vPos += (attractor1 - vPos) * sin(morphRatio * 3.14);\n\n    " +

            "// attractor per vertex\n    " +
            "vec3 attractor3 = (vPos * .8) + curl(vPos.x, vPos.y, vPos.z, timer * .01);\n    " +
            "attractor3.x += cos(morphRatio * 3.14) * .25;\n    " +
            "attractor3.y += sin(morphRatio * 3.14) * .25;\n    " +
            "vPos += (attractor3 - vPos) * sin(morphRatio * 3.14) * .5;\n  " +

            "//}\n\n  " +

            "// make a small wave (always applied)\n  " +
            "vPos.y += (cos(timer * 0.05 + vPos.x * 3.0 + vPos.z * 3.0) * 0.04 ) * vPos.x;\n\n  " +

            "// make a big wave (applied from time to time)\n  " +
            "// decide if we launch a big wave, depending on a noise function\n  " +
            "float n = noise(vec2( (vPos.x * vPos.z) + timer * 0.002, vPos.y + timer * 0.005));\n  " +
            "float waveRatio = smoothstep(0.5, 0.9, n);\n\n  " +

            "// apply big wave\n  " +
            "vec3 cnoise = curl(vPos.x * 2.0, vPos.y * 2.0, vPos.z * 2.0, timer * 0.05) * waveRatio * 1.5;\n\n  " +

            "// mix waves and positions\n  " +
            "vec3 tar = vPos + cnoise;\n  " +
            "float d = length(vPos - tar) * 0.2;\n  " +
            "vPos = mix(vPos, tar, pow(d, 2.0));\n  " +

            "// gl_PointSize = noise( vec2(position.x + position.y + position.z, timer * 0.005)) * 3.0;\n\n  " +
            "gl_FragColor = vec4(vPos, 1.0);\n" +
        "}\n"
}