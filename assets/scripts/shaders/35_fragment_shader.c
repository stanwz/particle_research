#define GLSLIFY 1
uniform sampler2D map;
uniform sampler2D texture;
uniform float tMorph;
uniform float effector;
uniform float color;

// varying vec2 vUv;
varying vec3 vPos;
varying float vColor;
varying float vPointSize;

float hue2rgb(float f1, float f2, float hue) {
  if (hue < 0.0) {
    hue += 1.0;
  } else if (hue > 1.0) {
    hue -= 1.0;
  }

  float res;
  if ((6.0 * hue) < 1.0) {
    res = f1 + (f2 - f1) * 6.0 * hue;
  } else if ((2.0 * hue) < 1.0) {
    res = f2;
  } else if ((3.0 * hue) < 2.0) {
    res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;
  } else {
    res = f1;
  }

  return res;
}

vec3 hsl2rgb(vec3 hsl) {
  vec3 rgb;

  if (hsl.y == 0.0) {
    rgb = vec3(hsl.z); // Luminance
  } else {
    float f2;

    if (hsl.z < 0.5) {
        f2 = hsl.z * (1.0 + hsl.y);
    } else {
        f2 = hsl.z + hsl.y - hsl.y * hsl.z;
    }

    float f1 = 2.0 * hsl.z - f2;

    rgb.r = hue2rgb(f1, f2, hsl.x + (1.0/3.0));
    rgb.g = hue2rgb(f1, f2, hsl.x);
    rgb.b = hue2rgb(f1, f2, hsl.x - (1.0/3.0));
  }

  return rgb;
}

vec3 hsl2rgb(float h, float s, float l) {
  return hsl2rgb(vec3(h, s, l));
}

void main() {
  // In this step, it is certainly also possible to allocate any constant color.
  // Instead, each particle gets an individual color, which results from its position in space
  // float depth = smoothstep(750.0, -500.0, gl_FragCoord.z / gl_FragCoord.w);
  // gl_FragColor = vec4(texture2D(map, vUv).xyz, depth);
  // gl_FragColor = vec4(1.0, 0.2, 0.5, depth);
  // gl_FragColor *= (1.0 + (effector * 1.0)); // The intensity of the color can be controlled here via the effector.
  //gl_FragColor *= 1.5; // Whiteness Increase for Glow

  // vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);
  vec2 uv = vec2(vPos.x, vPos.y);
  vec4 tex = texture2D(texture, uv);

  float colDistance = 0.0;
  float pointDistance = length(vPos);

  if (pointDistance < .65 ){
    colDistance = (-.2 + pointDistance * .4);
  } else if (tMorph < 0.01 && tMorph > 0.09){
    colDistance += pointDistance * .4;
  }

  float colPointSize = min( .1, vPointSize * .02);

  float hue = color + colDistance + colPointSize;
  float saturation = 1.0;
  float light = 0.5;

  vec3 col = hsl2rgb(hue, saturation, light);
  tex.rgb = col;
  tex.a = smoothstep(0.03, 0.09, length(vPos)) * max(0.25, (1.0 - sin(tMorph * 3.14) * .6) * vPointSize * 0.25);

  gl_FragColor = tex;
}
