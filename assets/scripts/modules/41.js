function (t, e) {
    t.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\nuniform float color;\nuniform float timer;\n\nvoid main() {\n  vUv = vec2(uv.x, uv.y);\n\n  // Transformation of coordinates in eye coordinates and then in clip coordinates\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"
}