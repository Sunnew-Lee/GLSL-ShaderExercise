#version 330

// // Name: sunwoo.lee
// // Assignment name: Warp Lines
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 FragColor;

void main()
{
    vec2 coord = gl_FragCoord.xy / u_resolution.xy;
    float color = 0.0;

    color+=sin(coord.x * 50.0 + cos(u_time+coord.y*10.0+sin(coord.x*50.0+u_time*2.0))) * 2.0;
    color+=cos(coord.x * 20.0 + sin(u_time+coord.y*10.0+cos(coord.x*50.0+u_time*2.0))) * 2.0;
    color+=sin(coord.x * 30.0 + cos(u_time+coord.y*10.0+sin(coord.x*50.0+u_time*2.0))) * 2.0;
    color+=cos(coord.x * 10.0 + sin(u_time+coord.y*10.0+cos(coord.x*50.0+u_time*2.0))) * 2.0;
    
    FragColor = vec4(vec3(color+coord.y,color+coord.x,color), 1.0);
}

