#version 330

// // Name: sunwoo.lee
// // Assignment name: Noise 1D
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

out vec4 FragColor;

float noise1d(float value){
    return cos(value + cos(value * 90.0) * 100.0) * 0.5 + 0.5;
}

void main()
{
    vec2 coord = gl_FragCoord.xy;
    vec3 color = vec3(0.0);

    color.r+=noise1d(u_time);

    FragColor = vec4(color, 1.0);
}
