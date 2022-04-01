#version 330

// // Name: sunwoo.lee
// // Assignment name: Wave Draw Lines
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 FragColor;

void main()
{
    vec2 coord=(gl_FragCoord.xy/u_resolution)*1.2;
    float color=30.0;
    

    color+=sin(coord.x*6.+sin(u_time+coord.y*90.+cos(coord.x*10.+u_time*(sin(u_time)*0.005))*4.5));
    color+=cos(coord.y*6.+cos(u_time+coord.x*90.+sin(coord.y*10.+u_time*(sin(u_time)*0.005))*4.5));

    FragColor = vec4(vec3((sin(color)*(sin(u_time)+2.0)*0.5+1.5)*coord.y,(sin(color)*(sin(u_time)+2.0)*0.5+1.5)*coord.x,color), 1.0);
}
