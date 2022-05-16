#version 330

// // Name: sunwoo.lee
// // Assignment name: White Noise
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float random2d(vec2 coord){
    return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

out vec4 FragColor;

void main()
{
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);
    float grain = 0.0;

    grain = random2d(vec2(sin(coord)/999999.9)*u_time);

    color = vec3(grain);

    FragColor = vec4(color,1.0);
}