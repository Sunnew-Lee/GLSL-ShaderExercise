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
    vec2 coord = (gl_FragCoord.xy / u_resolution);
    float color = 0.0;

    color+=sin(coord.x*6.0 + sin(u_time + coord.y * 90.0 + cos(coord.x*30.0+u_time*2.0)))*0.5;


    FragColor = vec4(vec3(color+coord.x,color+coord.x,color), 1.0);
}
