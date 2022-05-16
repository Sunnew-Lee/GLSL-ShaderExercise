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
    vec2 translate = vec2(-0.5,-0.5);
    // position to center
    coord+=translate;
    
    // number of lights
    int size = 40;
    
    for(int i=0;i<size;i++)
    {
        float radius = 0.3;
        float rad = radians(360.0 / float(size))*float(i); 

        color += 0.003/length(coord+vec2(radius*cos(rad),radius*sin(rad)));
    }
    
    FragColor = vec4(color, 1.0);
}