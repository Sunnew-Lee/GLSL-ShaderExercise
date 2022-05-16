#version 330

// // Name: sunwoo.lee
// // Assignment name: Circle Of Lights
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 FragColor;

void main()
{
    vec2 coord = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.0);
    // position to center
    vec2 translate = vec2(-0.5,-0.5);
    coord+=translate;

    // number of lights
    int size = 10;

    for(int i=0;i<size;i++)
    {
        float radius = 0.2;
        float rad = radians(360.0 / float(size))*float(i); 

        color.r+=radius*0.01/length(coord+vec2(radius*cos(rad)*(sin(u_time*2.7)+cos(u_time*1.2)),radius*sin(rad)*(sin(u_time*2.7)+cos(u_time*1.8))));
        color.g+=radius*0.01/length(coord+vec2(radius*cos(rad)*(sin(u_time*1.8)+cos(u_time*2.7)),radius*sin(rad)*(sin(u_time*0.7)+cos(u_time*1.2))));
        color.b+=radius*0.01/length(coord+vec2(radius*cos(rad)*(sin(u_time*1.2)+cos(u_time*1.8)),radius*sin(rad)*(sin(u_time*1.2)+cos(u_time*3))));

    }

    FragColor = vec4(color, 1.0);
}