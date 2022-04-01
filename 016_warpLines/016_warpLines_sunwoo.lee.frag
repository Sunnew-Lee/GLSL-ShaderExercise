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
    vec2 coord = (gl_FragCoord.xy / u_resolution.xy);
    float color = 0.0;

    color+=sin( cos(u_time+coord.x*10.0+sin(coord.y*50.0+u_time*5.0))) * 5.0;
    color+=cos( sin(u_time+coord.x*10.0+cos(coord.y*50.0+u_time))) * 10.0;
    color+=sin( cos(u_time+coord.y*10.0+sin(coord.x*50.0+u_time*5.0))) * 5.0;
    color+=cos( sin(u_time+coord.y*10.0+cos(coord.x*50.0+u_time))) * 10.0;
    color+=sin( cos(u_time+coord.y*10.0+sin(coord.x*50.0+u_time*5.0))) * 5.0;
    color+=cos( sin(u_time+coord.y*10.0+cos(coord.x*50.0+u_time))) * 10.0;

    color+=sin(u_time)*50;
    
    FragColor = vec4(vec3((sin(color)*(sin(u_time*5)+2.0)*0.5+1.5)*coord.y,(sin(color)*(sin(u_time*5)+2.0)*0.5+1.5)*coord.x,color), 1.0);
}

