#version 330

// // Name: sunwoo.lee
// // Assignment name: Moving Light
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 FragColor;

float circleshape(vec2 position, float radius){
    return step(radius, length(position - vec2(0.)));
}

void main()
{
    // position to center
    vec2 coord = (gl_FragCoord.xy*2.0-u_resolution) / 
    min(u_resolution.x,u_resolution.y);
    
    //random movement
    coord.x+= sin(u_time*3)*sin(u_time*0.2);
    coord.y+= cos(u_time*3)*sin(u_time*2.2);

    float rad = ((sin(u_time)+1.0)*0.1)+0.1;
    float circle = circleshape(coord,rad);

    vec3 color = vec3(0.0, 0.0, 0.0);

    // pulse light
    color.r+=rad*(abs(cos(u_time))+0.1)/length(coord);
    color.g+=rad*(abs((sin(u_time)+cos(u_time))*0.7)+0.1)/length(coord);
    color.b+=rad*(abs(sin(u_time))+0.1)/length(coord);

    FragColor = vec4(vec3(color*circle), 0.5);
}