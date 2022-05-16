#version 330

// // Name: sunwoo.lee
// // Assignment name: Mouse
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

out vec4 FragColor;

void main()
{
    vec2 coord = gl_FragCoord.xy;
    vec3 color = vec3(0.0);

    color.r = u_mouse.x / u_resolution.x;
    color.b = u_mouse.y / u_resolution.y;

    FragColor = vec4(color,1.0);
}