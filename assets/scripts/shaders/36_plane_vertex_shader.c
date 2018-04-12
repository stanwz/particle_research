#define GLSLIFY 1
varying vec2 vUv;

void main() {
// The origin of a texture in WebGL is in the bottom, corner.
// So that with the previously in the main program
  // In order to match the generated indices of the particles,
  // the vertical components (y) of the UV coordinates must be inverted
  // The changed UV value will later be displayed in the fragment shader
  // the position of the particle is read out of the FBO. BUT DOES NOT HAVE AN EFFECT TO HAVE DISABLED.
  // vUv = vec2(uv.x, 1.0 - uv.y);
  vUv = vec2(uv.x, uv.y);

  //Transformation of coordinates in eye coordinates and then in clip coordinates
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
