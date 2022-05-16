#version 330

// // Name: sunwoo.lee
// // Assignment name: Mouse
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

out vec4 FragColor;

float circleshape(vec2 position, float radius){
    return step(radius, length(position - vec2(0.)));
}

void main()
{
    vec2 coord = (gl_FragCoord.xy*2.0-u_resolution) / 
    min(u_resolution.x,u_resolution.y);
    
    vec3 color = vec3(0.0);

    coord.y = -0.1 - coord.y*1.3 + abs(coord.x)*(1.2-abs(coord.x));
	
    float rad = ((sin(u_time)+1.0)*0.1)+0.5;
    float circle = circleshape(coord,rad);
    color = vec3(circle);
    color.r += u_mouse.x / u_resolution.x * 0.5;
    color.r += u_mouse.y / u_resolution.y * 0.5;

    FragColor=vec4(mix(color,vec3(0.0),smoothstep( 0.1, 0.11, circle-rad) ),1.0);
}
