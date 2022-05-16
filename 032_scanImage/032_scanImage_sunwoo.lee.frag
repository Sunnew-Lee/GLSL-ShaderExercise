#version 330

// // Name: sunwoo.lee
// // Assignment name: Scan Image
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform sampler2D u_tex0;

float size = 6.0;
float speed = sin(u_time*0.1) * 2.0;

out vec4 FragColor;

void main()
{
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    vec4 image = texture2D(u_tex0,coord);

    size += u_mouse.x;

    image.a = sin(floor((coord.x + sin(u_time)*coord.y) * size) - u_time * speed);

    FragColor = image;
}
