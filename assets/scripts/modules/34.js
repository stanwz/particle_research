function (t, e) {
    t.exports =
        "#define GLSLIFY 1\n" +

        "uniform sampler2D map;\n" +

        "// varying vec2 vUv;\n" +
        "varying vec3 vPos;\n" +

        "void main() {\n  " +
            "vec3 position = texture2D(map, position.xy).xyz;\n  " +

            "vPos = position;\n  " +

            "gl_PointSize = 1.0;\n  " +
            "gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n" +
        "}\n"
}