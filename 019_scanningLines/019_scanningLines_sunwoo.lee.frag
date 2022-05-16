#version 330

// // Name: sunwoo.lee
// // Assignment name: Scanning Lines
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

out vec4 FragColor;

void main()
{
    vec2 mouse = gl_FragCoord.xy/u_mouse - 1.0;

    vec3 color = vec3(1.0, 0.5, 0.0);

    float size= 5.0;
    float speed = 5.0;

    float angle = atan(-mouse.y,mouse.x);

    float alpha=(sin(floor(angle*size+u_time*speed))+1.0)*0.5;

    FragColor = vec4(color, alpha);
}