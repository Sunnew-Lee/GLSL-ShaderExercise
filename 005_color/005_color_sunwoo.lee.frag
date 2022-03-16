#version 330

// // Name: sunwoo.lee
// // Assignment name: Setup with glslViewer & do Color Frag Shader
// // Course name: CS250
// // Term: 2022 Spring

// precision mediump float;

// uniform float u_time;
// out vec4 FragColor;

// void main(){
  //     vec3 color_1=vec3(0.0902, 0.1059, 0.9216);
  //     vec4 color_2=vec4(0.9333, 0.0471, 0.0471, 0.45);
  
  //     //FragColor=vec4(color_1,.5);
  //     FragColor=vec4(color_2*abs(sin(3*u_time)));
// }

precision mediump float;

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

out vec4 FragColor;

void main(){
  
  vec2 uv=gl_FragCoord.xy/u_resolution;
  vec3 color = vec3(1.0,0.5,0.0);

  //color *= uv.x;
  //color *= uv.y;
  //color *= uv.x + uv.y;
  color *= step(0.2,length(uv - vec2(0.5)));
  
  FragColor=vec4(color,1.);
}
