#version 330

// Name: sunwoo.lee
// Assignment name: Rect Shape
// Course name: CS250
// Term: 2022 Spring

precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
const float PI = 3.14159265359;


float rectshape(vec2 position,vec2 scale){
    scale=vec2(.5)-scale*.5;
    vec2 shaper=vec2(step(scale.x,position.x),step(scale.y,position.y));
    shaper*=vec2(step(scale.x,1.-position.x),step(scale.y,1.-position.y));
    return (shaper.x*shaper.y);
}

out vec4 FragColor;

void main()
{
    vec2 position=gl_FragCoord.xy/u_resolution;
    
    vec3 color=vec3(0.2157, 0.3176, 0.8941);
    
    //float rectangle=rectshape(position*((sin(u_time*2)*3.)),vec2(0.25*((sin(u_time*PI)+1.25)),0.25*((cos(u_time*PI)+1.25))));
    float rectangle=rectshape(vec2(position.x+((sin(u_time))*0.25),position.y+((cos(u_time))*0.25)),vec2(0.125*((sin(u_time*PI)+1.25)),0.125*((cos(u_time*PI)+1.25))));
    //float rectangle=rectshape(position,vec2((abs(0.5*sin(u_time*2))),(abs(0.5*cos(u_time*2)))));
    //float rectangle=rectshape(position,vec2((0.5)));
    color*=vec3(rectangle);
    
    FragColor=vec4(color,1.);
}
