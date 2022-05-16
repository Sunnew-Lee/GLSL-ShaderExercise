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
    vec2 coord = gl_FragCoord.xy * .5 - u_resolution;
    vec3 color = vec3(0.0, 0.0, 0.0);

    color.r+=abs(cos(coord.x/20.0)*sin(coord.y / 20.0)-sin(u_time));
    color.g+=abs(cos(coord.x/10.0)/sin(coord.y / 10.0)-cos(u_time));
    color.b+=abs(cos(coord.x/7.0)+sin(coord.y / 7.0)-sin(u_time));
    

    FragColor = vec4(1.-color, 1.0);
}