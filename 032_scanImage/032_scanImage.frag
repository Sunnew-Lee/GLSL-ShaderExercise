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
float speed = -10.0;
bool flip = true;

out vec4 FragColor;

void main()
{
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    vec4 image = texture2D(u_tex0,coord);

    if(flip)
    {
        image.a = sin(floor(coord.x * size) - u_time * speed);
    }
    else
    {
        image.a = sin(floor(coord.y * size) - u_time * speed);
    }

    FragColor = image;
}