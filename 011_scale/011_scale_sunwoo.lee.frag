#version 330

// // Name: sunwoo.lee
// // Assignment name: Scale
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

const float PI = 3.14159265359;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
out vec4 FragColor;

mat2 scale(vec2 scale){
    return mat2(scale.x, 0.0, 0.0, scale.y);
}

float polygonshape(vec2 position, float radius, float sides){
    position = position * 2.0 - 1.0;
    float angle = atan(position.x, position.y);
    float slice = PI * 2.0 / sides;
    return step(radius, cos(floor(0.25*(sin(u_time*5)+1.0) + angle / slice) * slice - angle) * length(position));
}

void main()
{
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec2 mouse = u_mouse.xy / u_resolution;

    vec3 color = vec3(0.9137, 0.6314, 0.1059);

    coord-=vec2(0.5);
    coord = scale(vec2(sin(u_time*5)+2.0)) * coord;
    coord+=vec2(0.5);

    color += vec3(polygonshape(coord,0.3,(mouse.x*8.0 + 3.0)))*mix(vec3(0.2235, 0.8196, 0.1686),vec3(0.0824, 0.0706, 0.8275),(0.5*(sin(u_time*5.)+1.0)));;

    FragColor = vec4(color, 1.0);
}