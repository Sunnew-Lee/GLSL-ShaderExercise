#version 330

// // Name: sunwoo.lee
// // Assignment name: Morph Grid
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 FragColor;

float random2d(vec2 coord){
    return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec2 coord = gl_FragCoord.xy * 0.05;
    coord.x += (sin(u_time*0.5)*5+sin(coord.x));
    coord.y -= (cos(u_time*0.5)*5+cos(coord.y));

    float rand01=fract(random2d(floor(coord)) + u_time*1.5 );
    float rand02=fract(random2d(floor(coord)) + u_time*1.5 );
    float rand03=fract(random2d(floor(coord)) + u_time*1.5 );

    rand01 *= abs(sin(u_time))*1.5 - length(fract(coord));
    rand02 *= abs(cos(u_time))*0.7 - length(fract(coord));
    rand03 *= abs(sin(u_time)+cos(u_time))*0.9 - length(fract(coord));

    FragColor = vec4(rand01,rand02,rand03, 1.0);
}