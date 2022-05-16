#version 330

// // Name: sunwoo.lee
// // Assignment name: Circle Color Pulse
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

out vec4 FragColor;

void main()
{
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);
    vec2 translate = vec2(-0.5);
    coord+=translate;

    color.r+=abs(0.1+length(vec2(coord.x+sin(u_time)*0.5+sin(u_time)*coord.y,coord.y+cos(u_time)*0.25)) 
    - 0.3 * abs(sin(u_time*0.9/12.0)));
    color.g+=abs(0.1+length(coord) - 0.15*(abs(sin(u_time))+0.5));
    color.b+=abs(0.1+length(vec2(coord.x+sin(u_time)*0.5+sin(u_time)*coord.y,coord.y+cos(u_time)*0.25)) 
    - 0.3 * abs(sin(u_time*0.9/12.0)));

    FragColor = vec4(vec3(0.01/color.r,0.03/color.g,0.05/color.b), 1.0);
}
