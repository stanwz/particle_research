function (t, e) {
    t.exports =
        "#define GLSLIFY 1\n" +

        "uniform sampler2D map;\n" +
        "uniform float timer;\n" +
        "uniform float tMorph;\n" +
        "uniform float width;\n" +
        "uniform float height;\n" +
        "uniform float color;\n" +
        "uniform float pointSize;\n" +
        "uniform float density;\n\n\n" +

        "// varying vec2 vUv;\n" +
        "varying vec3 vPos;\n" +
        "// varying float vColor;\n" +
        "varying float vPointSize;\n\n\n" +

        "// Pseudo random number generator\n" +
        "float rand(vec2 co) {\n  " +
        "return fract(sin(dot(co.xy ,vec2(12.9898, 78.233))) * 43758.5453);\n" +
        "}\n\n" +

        "vec3 mod289(vec3 x) {\n  " +
        "return x - floor(x * (1.0 / 289.0)) * 289.0;\n" +
        "}\n\n" +

        "vec2 mod289(vec2 x) {\n  " +
        "return x - floor(x * (1.0 / 289.0)) * 289.0;\n" +
        "}\n\n" +

        "vec3 permute(vec3 x) {\n  " +
        "return mod289(((x * 34.0) + 1.0) * x);\n" +
        "}\n\n" +

        "float noise(vec2 v) {\n  " +
        "const vec4 C = vec4(0.211324865405187, // (3.0-sqrt(3.0)) / 6.0\n                      " +
        "0.366025403784439, // 0.5 * (sqrt(3.0) - 1.0)\n                     " +
        "-0.577350269189626, // -1.0 + 2.0 * C.x\n                      " +
        "0.024390243902439); // 1.0 / 41.0\n  " +

        "// First corner\n  " +
        "vec2 i = floor(v + dot(v, C.yy));\n  " +
        "vec2 x0 = v - i + dot(i, C.xx);\n\n  " +

        "// Other corners\n  " +
        "vec2 i1;\n  " +
        "i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  " +
        "vec4 x12 = x0.xyxy + C.xxzz;\n  " +
        "x12.xy -= i1;\n\n  " +

        "// Permutations\n  " +
        "i = mod289(i); // Avoid truncation effects in permutation\n  " +
        "vec3 p = permute(permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0));\n\n  " +

        "vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  " +
        "m = m*m ;\n  " +
        "m = m*m ;\n\n  " +

        "// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n  " +
        "// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  " +

        "vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  " +
        "vec3 h = abs(x) - 0.5;\n  " +
        "vec3 ox = floor(x + 0.5);\n  " +
        "vec3 a0 = x - ox;\n\n  " +

        "// Normalise gradients implicitly by scaling m\n  " +
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

        "void main() {\n  " +
        "vec3 position = texture2D(map, position.xy).xyz;\n  " +
        "vPos = position;\n  " +
        "vPointSize = 0.0 +  abs(curl (position.x, position.y, position.z, timer * 0.05).z * 2.0);\n  " +
        "vPointSize *= (1.0 - sin(tMorph * 3.14));\n  " +
        "gl_PointSize = vPointSize * density;\n  " +
        "gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n" +
        "}\n"
}