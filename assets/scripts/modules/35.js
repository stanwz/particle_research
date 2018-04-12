function (t, e) {
    t.exports =
        "#define GLSLIFY 1\n" +

        "uniform sampler2D map;\n" +
        "uniform sampler2D texture;\n" +
        "uniform float tMorph;\n" +
        "uniform float effector;\n" +
        "uniform float color;\n\n" +

        "// varying vec2 vUv;\n" +
        "varying vec3 vPos;\n" +

        "varying float vPointSize;\n\n" +

        "float hue2rgb(float f1, float f2, float hue) {\n  " +
            "if (hue < 0.0) {\n    " +
                "hue += 1.0;\n  " +
            "} else if (hue > 1.0) {\n    " +
                "hue -= 1.0;\n  " +
            "}\n\n  " +

            "float res;\n  " +
            "if ((6.0 * hue) < 1.0) {\n    " +
                "res = f1 + (f2 - f1) * 6.0 * hue;\n  " +
            "} else if ((2.0 * hue) < 1.0) {\n    " +
                "res = f2;\n  " +
            "} else if ((3.0 * hue) < 2.0) {\n    " +
                "res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;\n  " +
            "} else {\n    " +
                "res = f1;\n  " +
            "}\n\n  " +

            "return res;\n" +
        "}\n\n" +

        "vec3 hsl2rgb(vec3 hsl) {\n  " +
            "vec3 rgb;\n\n  " +
            "if (hsl.y == 0.0) {\n    " +
                "rgb = vec3(hsl.z); // Luminance\n  " +
            "} else {\n    " +
                "float f2;\n\n    " +

                "if (hsl.z < 0.5) {\n        " +
                    "f2 = hsl.z * (1.0 + hsl.y);\n    " +
                "} else {\n        " +
                    "f2 = hsl.z + hsl.y - hsl.y * hsl.z;\n    " +
                "}\n\n    " +

                "float f1 = 2.0 * hsl.z - f2;\n\n    " +
                "rgb.r = hue2rgb(f1, f2, hsl.x + (1.0/3.0));\n    " +
                "rgb.g = hue2rgb(f1, f2, hsl.x);\n    " +
                "rgb.b = hue2rgb(f1, f2, hsl.x - (1.0/3.0));\n  " +
            "}\n\n  " +

            "return rgb;\n" +
        "}\n\n" +

        "vec3 hsl2rgb(float h, float s, float l) {\n  " +
            "return hsl2rgb(vec3(h, s, l));\n" +
        "}\n\n" +

        "void main() {\n  " +

            "// In this step, it is certainly also possible to allocate any constant color.\n  " +
            "// Instead, each particle gets an individual color, which results from its position in space\n  " +
            "// float depth = smoothstep(750.0, -500.0, gl_FragCoord.z / gl_FragCoord.w);\n  " +
            "// gl_FragColor = vec4(texture2D(map, vUv).xyz, depth);\n  " +
            "// gl_FragColor = vec4(1.0, 0.2, 0.5, depth);\n  " +
            "// gl_FragColor *= (1.0 + (effector * 1.0)); // The intensity of the color can be controlled here via the effector.\n  " +
            "//gl_FragColor *= 1.5; // Whiteness Increase for Glow\n\n  " +

            "// vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);\n  " +

            "vec4 tex;\n\n  " +

            "float colDistance = 0.0;\n  " +
            "float pointDistance = length(vPos);\n\n  " +

            "if (pointDistance < .65 ){\n    " +
                "colDistance = (-.2 + pointDistance * .4);\n  " +
            "} else if (tMorph < 0.01 && tMorph > 0.09){\n    " +
                "colDistance += pointDistance * .4;\n  " +
            "}\n\n  " +

            "float hue = color + colDistance;\n  " +
            "float saturation = 1.0;\n  " +
            "float light = 0.5;\n\n  " +
            "vec3 col = hsl2rgb(hue, saturation, light);\n  " +

            "tex.rgb = col;\n  " +
            "tex.a = 1.0;\n\n  " +

            "gl_FragColor = tex;\n" +
        "}\n"
}