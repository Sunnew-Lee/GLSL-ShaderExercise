#version 330

// // Name: sunwoo.lee
// // Assignment name: Water Color 2
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

out vec4 FragColor;

void main()
{
    vec2 coord = 3.0*(gl_FragCoord.xy - u_resolution )/min(u_resolution.y,u_resolution.x);
    vec2 mouse = u_mouse.xy/ u_resolution;

    float len;
    float AMOUNT = (sin(mouse.x+mouse.y)+2.0)*10;
    for(float i=0;i<AMOUNT;i++)
    {
        len = length(vec2(coord.x,coord.y));

        coord.x = coord.x-cos(coord.y+sin(len))+cos(u_time*i) + sin(mouse.x);
        coord.y = coord.y-cos(coord.x+cos(len))+sin(u_time*i) + sin(mouse.y);
    }

    FragColor = vec4(cos(len *sin(mouse.x)),cos(len*sin(len)),cos(len*sin(mouse.y)), 1.0);
}

