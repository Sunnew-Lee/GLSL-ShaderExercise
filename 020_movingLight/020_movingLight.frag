#version 330

// // Name: sunwoo.lee
// // Assignment name: Moving Light
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 FragColor;

void main()
{
    // position to center
    vec2 coord = (gl_FragCoord.xy*2.0-u_resolution) / 
    min(u_resolution.x,u_resolution.y);
    
    //random movement
    coord.x+= sin(u_time)+cos(u_time*2.1);
    coord.y+= sin(u_time)+cos(u_time*1.6);

    vec3 color = vec3(0.0);

    // pulse light
    color+=0.1*(abs(sin(u_time))+0.1)/length(coord);

    FragColor = vec4(vec3(color), 1.0);
}