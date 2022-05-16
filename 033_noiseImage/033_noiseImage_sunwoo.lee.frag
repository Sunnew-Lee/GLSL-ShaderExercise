#version 330

// // Name: sunwoo.lee
// // Assignment name: Noise Image
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform sampler2D u_tex0;

out vec4 FragColor;

float random2d(vec2 coord){
    return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    vec4 image = texture2D(u_tex0,coord);

    float noise = (random2d(coord) - 1.0);

    image.r += noise * ((sin(u_time)+1.5)*0.5);
    image.g += noise * ((sin(u_time*0.5)+1.5)*0.5);
    image.b += noise * ((sin(u_time*0.1)+1.5)*0.5);

    FragColor = image;
}