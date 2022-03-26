#version 330

// // Name: sunwoo.lee
// // Assignment name: Warp Grid
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
out vec4 FragColor;

void main()
{
    vec2 coord=gl_FragCoord.xy/u_resolution;
    vec3 color=vec3(0.);
    
    color+=sin(coord.x*cos(u_time)*20.)+cos(coord.y*cos(u_time)*10.);
    color*=cos(coord.y*sin(u_time)*10.)+sin(coord.x*sin(u_time)*20.);
    
    color*=sin(u_time * 0.5)*50.;

    FragColor=vec4(color * mix(vec3(0.0157, 0.0, 1.0),vec3(0.2353, 1.0, 0.0),(0.5*(sin(u_time*5.)+1.0))),1.);
}
