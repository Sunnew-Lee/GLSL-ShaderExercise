#version 330

// // Name: sunwoo.lee
// // Assignment name: Rainbow Swirl
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 FragColor;

void main()
{
    vec2 coord=(gl_FragCoord.xy/u_resolution)*0.5;
    coord.x+=0.25;
    
    vec3 color=vec3(0.0);
    
    float angle = atan(-coord.y + 0.25,coord.x - 0.5)*0.1;
    float len = length(coord - vec2(0.5,0.25));

    color.r += sin(len*40.0 + angle*40.0 + u_time*5 );
    color.g += cos(-len*30.0 + angle*60.0 - u_time*5 );
    color.b += sin(-len*50.0 + angle*50.0 + u_time*3 );

    FragColor = vec4(1.-color, 1.0);
}
