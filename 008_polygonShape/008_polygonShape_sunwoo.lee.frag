#version 330

// // Name: sunwoo.lee
// // Assignment name: Polygon Shape
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

const float PI = 3.14159265359;
uniform vec2 u_resolution;
uniform float u_time;
out vec4 FragColor;

float polygonshape(vec2 position, float radius, float sides){
    position = position * 2.0 - 1.0;
    float angle = atan(position.x, position.y);
    float slice = PI * 2.0 / sides;
    return step(radius, cos(floor(0.25*(sin(u_time*5)+1.0) + angle / slice) * slice - angle) * length(position));
}

void main()
{
    vec2 position = gl_FragCoord.xy/u_resolution;

    vec3 color = vec3(0.0);

    //float polygon = polygonshape(position,0.4,((abs(9.*sin(u_time*0.25)))+1.)*3.0);
    float polygon = polygonshape(vec2(position.x,position.y-((cos(u_time)+1.0)*0.05)),0.45,(sin(u_time)*13.5)+16.5);

    color = vec3(polygon)*mix(vec3(0.0392, 0.2, 0.9137),vec3(0.6, 0.0745, 0.0745),(0.5*(sin(u_time*5.)+1.0)));

    FragColor = vec4(color, 1.0);
}