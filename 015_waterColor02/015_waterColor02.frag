#version 330

// // Name: sunwoo.lee
// // Assignment name: Water Color 2
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
out vec4 FragColor;

const int AMOUNT = 12;

void main()
{
    vec2 coord = 20.0 *(gl_FragCoord.xy - u_resolution / 2.0 )/min(u_resolution.y,u_resolution.x);

    float len;

    for(int i=0;i<AMOUNT;i++)
    {
        len = length(vec2(coord.x,coord.y));

        coord.x = coord.x-cos(coord.y+sin(len))+cos(u_time/9.0);
        coord.y = coord.y-cos(coord.x+cos(len))+sin(u_time/12.0);
    }

    FragColor = vec4(cos(len *2.0),cos(len*3.0),cos(len*1.0), 1.0);
}
