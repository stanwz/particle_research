function (t, e) {
    t.exports =
        "#define GLSLIFY 1\n" +

        "varying vec2 vUv;\n\n" +

        "void main() {\n" +
            "// The origin of a texture in WebGL is in the bottom, corner.\n" +
            "// So that with the previously in the main program\n  " +
            "// In order to match the generated indices of the particles,\n  " +
            "// the vertical components (y) of the UV coordinates must be inverted\n  " +
            "// The changed UV value will later be displayed in the fragment shader\n  " +
            "// the position of the particle is read out of the FBO. BUT DOES NOT HAVE AN EFFECT TO HAVE DISABLED.\n  " +
            "// vUv = vec2(uv.x, 1.0 - uv.y);\n  " +

            "vUv = vec2(uv.x, uv.y);\n\n  " +

            "//Transformation of coordinates in eye coordinates and then in clip coordinates\n  " +

            "gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n" +
        "}\n"
}