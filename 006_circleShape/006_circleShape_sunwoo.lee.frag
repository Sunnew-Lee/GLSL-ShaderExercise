#version 330

// Name: sunwoo.lee
// Assignment name: Circle Shape
// Course name: CS250
// Term: 2022 Spring

precision mediump float;

uniform vec2 u_resolution;
out vec4 FragColor;

float circleshape(vec2 position, float radius){
    return step(radius, length(position - vec2(0.5)));
}

void main()
{
    vec2 position = gl_FragCoord.xy / u_resolution;

    float circle = circleshape(position,0.3);

    vec3 color = vec3(circle,0.5,0.5);

    FragColor = vec4(1.0-color,1.0);

}

// precision mediump float;

// #define PI 3.14159265359

// uniform vec2 u_resolution;
// uniform vec2 u_mouse;
// uniform float u_time;
// out vec4 FragColor;

// void main(){
//   vec2 st = gl_FragCoord.xy/u_resolution.xy;
//   st.x *= u_resolution.x/u_resolution.y;
//   vec3 color = vec3(0.0);
//   float d = 0.0;

//   // Remap the space to -1. to 1.
//   st = st *2.-1.;

//   // Number of sides of your shape
//   int N = 3;

//   // Angle and radius from the current pixel
//   float a = atan(st.x,st.y)+PI;
//   float r = (PI*2)/float(N);

//   // Shaping function that modulate the distance
//   d = cos(floor(.5+a/r)*r-a)*length(st);

//   color = vec3(smoothstep(.4,.41,d));
//   // color = vec3(d);

//   FragColor = vec4(color,1.0);
// }
