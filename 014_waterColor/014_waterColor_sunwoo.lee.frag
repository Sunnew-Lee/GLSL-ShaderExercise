#version 330

// // Name: sunwoo.lee
// // Assignment name: Water Color
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
out vec4 FragColor;

void main()
{
    vec2 coord=8.*gl_FragCoord.xy/u_resolution;

    for(int n=0;n<10;n++)
    {
        float i=float(n);
        coord+=vec2(3*sin(u_time)+i,0.5*cos(u_time)+i);
    }
    coord += vec2(5*sin(coord.y),5*sin(coord.x));
    vec3 color=vec3(sin(coord.y) , cos(coord.x),sin(coord.x*coord.y));

    FragColor = vec4(color, 1.0);
}
