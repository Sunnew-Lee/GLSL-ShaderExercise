#version 330

// // Name: sunwoo.lee
// // Assignment name: Morphing Grid Boxes
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 FragColor;

void main()
{
    vec2 coord = gl_FragCoord.xy * 1.0 - u_resolution;
    vec3 color = vec3(0.0);

    color+=abs(cos(coord.x/20.0)+sin(coord.y / 20.0)-cos(u_time));
    

    FragColor = vec4(color, 1.0);
}