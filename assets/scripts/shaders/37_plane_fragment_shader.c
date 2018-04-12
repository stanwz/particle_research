#define GLSLIFY 1

#ifndef PI
	#define PI 3.141592653589793
#endif

//not used
float backIn_1_0(float t) {
  return pow(t, 3.0) - t * sin(t * PI);
}

//not used
float map_2_1(float value, float inMin, float inMax, float outMin, float outMax) {
  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);
}

//not used
vec2 map_2_1(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {
  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);
}

//not used
vec3 map_2_1(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {
  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);
}

//not used
vec4 map_2_1(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {
  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);
}

uniform sampler2D tFrom;
uniform sampler2D tTo;
uniform float tMorph;
uniform float timer;
uniform vec3 impactPosition;
// uniform vec3 velocity;

varying vec2 vUv;

// Pseudo random number generator
float rand(vec2 co) {
  return fract(sin(dot(co.xy ,vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

float noise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, // (3.0-sqrt(3.0)) / 6.0
                      0.366025403784439, // 0.5 * (sqrt(3.0) - 1.0)
                     -0.577350269189626, // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
  // First corner
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);

  // Other corners
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  // Permutations
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute(permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  // Gradients: 41 points uniformly over a line, mapped onto a diamond.
  // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  // Normalise gradients implicitly by scaling m
  // Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);

  // Compute final noise value at P
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;

  return 130.0 * dot(m, g);
}

vec3 curl(float x, float y, float z, float timer) {
  float eps = 1.0, eps2 = 2.0 * eps;
  float n1, n2, a, b;

  x += timer * 0.05;
  y += timer * 0.05;
  z += timer * 0.05;

  vec3 curl = vec3(0.);

  n1 = noise(vec2(x, y + eps));
  n2 = noise(vec2(x, y - eps));
  a = (n1 - n2) / eps2;

  n1 = noise(vec2(x, z + eps));
  n2 = noise(vec2(x, z - eps));
  b = (n1 - n2) / eps2;

  curl.x = a - b;

  n1 = noise(vec2(y, z + eps));
  n2 = noise(vec2(y, z - eps));
  a = (n1 - n2) / eps2;

  n1 = noise(vec2(x + eps, z));
  n2 = noise(vec2(x + eps, z));
  b = (n1 - n2) / eps2;

  curl.y = a - b;

  n1 = noise(vec2(x + eps, y));
  n2 = noise(vec2(x - eps, y));
  a = (n1 - n2) / eps2;

  n1 = noise(vec2(y + eps, z));
  n2 = noise(vec2(y - eps, z));
  b = (n1 - n2) / eps2;

  curl.z = a - b;

  return curl;
}

// Tests…
#ifndef PI
#define PI 3.141592653589793
#endif

//not used
float backIn(float t) {
  return pow(t, 20.0) - t * sin(t * PI);
}

// https://www.shadertoy.com/view/4sV3zt
// https://keithmaggio.wordpress.com/2011/02/15/math-magician-lerp-slerp-and-nlerp/
// http://www.geeks3d.com/20140205/glsl-simple-morph-target-animation-opengl-glslhacker-demo/
//not used
vec3 slerp(vec3 start, vec3 end, float t) {
     // Dot product - the cosine of the angle between 2 vectors.
     float dot = dot(start, end);
     // Clamp it to be in the range of Acos()
     // This may be unnecessary, but floating point
     // precision can be a fickle mistress.
     dot = clamp(dot, -1.0, 1.0); //glsl function
     // Acos(dot) returns the angle between start and end,
     // And multiplying that by time returns the angle between
     // start and the final result.
     float theta = acos(dot) * t;
     vec3 RelativeVec = normalize(end - start * dot);

     return ((start * cos(theta)) + (RelativeVec * sin(theta)));
}

//not used
vec3 anime(vec3 start, vec3 end, float t) {
  vec3 pos;
  float back = 0.5;
  float multiplier = 0.75;

  // pos = slerp(start, end, t);

  if (t <= back) {
    pos = slerp(start, end, t * multiplier);
  } else {
    pos = slerp(start, end, back * multiplier);
    pos = mix(pos, end, map_2_1(t, 0.5, 1.0, 0.0, 1.0));
  }

  return pos;
}

void main() {

  //The texture2D function returns a texel, i.e. the (color) value of the texture for the given coordinates. 
  //The function has one input parameter of the type sampler2D and one input parameter of the type vec2 : sampler, 
  //the uniform the texture is bound to, and coord, the 2-dimensional coordinates of the texel to look up.
  vec3 origin = texture2D(tFrom, vUv).rgb;
  vec3 destination = texture2D(tTo, vUv).rgb;

  //get particle order from 0 to 1
  float order = (vUv.y + vUv.x / 10.0) / 10.0;
  // make the order less linear
  order = pow(order, .3);

  // make the particles move with some delay depending on their order
  // particle0 start moving at time0, particle1 start moving at time0.5 ...
  // so calculate morphRatio for each particle
  float morphRatio = smoothstep (0.0, 1.0, tMorph * 2.0 - order);

  // mix positions
  vec3 vPos = mix(origin, destination, morphRatio);

  //if (tMorph > .99 || tMorph < 0.01){
    // mouse attractor
    float mouseDistance = length(impactPosition - vPos);
    float attractionMinLimit = 0.0;// + sin(325.0 + timer * 0.05 * 3.14 * 2.0) * .1;
    float attractionMaxLimit = .35;// + sin(timer * 0.01 * 3.14 * 2.0) * .1;
    float mouseAttraction = 1.0 - smoothstep(attractionMinLimit, attractionMaxLimit, mouseDistance);
    mouseAttraction = pow( mouseAttraction, 3.0);
    vec3 posNormal = normalize(vPos);
    vPos += posNormal * mouseAttraction * .2;
    vPos += mouseAttraction *  abs(curl (posNormal.x, posNormal.y, posNormal.z, timer * 0.1) * .2);

    //vPos += pow( mouseAttraction, 2.0) * abs(curl(posNormal.x, posNormal.y, posNormal.z, timer * 0.05) * 1.5);//( .7 + sin(timer * 0.01 * 3.14) * .2 );

  //} else { // while transition
    // line attractor
    vec3 attractor1 = vec3(order, 0.0, 0.0);
    attractor1.y += sin(morphRatio * 3.14 + timer * 0.001) * .5;
    attractor1.z += cos(morphRatio * 3.14 + 1.0 + timer * 0.003) * .5;
    attractor1.x += sin(morphRatio * 3.14 + 2.0 + timer * 0.0025) * .2;
    vPos += (attractor1 - vPos) * sin(morphRatio * 3.14);

    // attractor per vertex
    vec3 attractor3 = (vPos * .8) + curl(vPos.x, vPos.y, vPos.z, timer * .01);
    attractor3.x += cos(morphRatio * 3.14) * .25;
    attractor3.y += sin(morphRatio * 3.14) * .25;
    vPos += (attractor3 - vPos) * sin(morphRatio * 3.14) * .5;
  //}

  // make a small wave (always applied)
  vPos.y += (cos(timer * 0.05 + vPos.x * 3.0 + vPos.z * 3.0) * 0.04 ) * vPos.x;

  // make a big wave (applied from time to time)
  // decide if we launch a big wave, depending on a noise function
  float n = noise(vec2( (vPos.x * vPos.z) + timer * 0.002, vPos.y + timer * 0.005));
  float waveRatio = smoothstep(0.5, 0.9, n);

  // apply big wave
  vec3 cnoise = curl(vPos.x * 2.0, vPos.y * 2.0, vPos.z * 2.0, timer * 0.05) * waveRatio * 1.5;

  // mix waves and positions
  vec3 tar = vPos + cnoise;
  float d = length(vPos - tar) * 0.2;
  vPos = mix(vPos, tar, pow(d, 2.0));
  // gl_PointSize = noise( vec2(position.x + position.y + position.z, timer * 0.005)) * 3.0;

  gl_FragColor = vec4(vPos, 1.0);
}
