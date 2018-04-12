function (t, e) {
    t.exports =
        "#define GLSLIFY 1\n" +

        "uniform sampler2D tFrom;\n" +
        "uniform sampler2D tTo;\n" +
        "uniform float tMorph;\n" +
        "uniform float timer;\n" +
        "uniform vec3 impactPosition;\n" +

        "// uniform vec3 velocity;\n\n" +
        "varying vec2 vUv;\n\n" +

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

            "gl_FragColor = vec4(vPos, 1.0);\n" +
        "}\n"
}