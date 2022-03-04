#version 330

// Name: sunwoo.lee
// Assignment name: Circle Shape
// Course name: CS250
// Term: 2022 Spring

precision mediump float;

uniform vec2 u_resolution;

float circleshape(vec2 position, float radius){
    return step(radius, length(position - vec2(0.5)));
}

out vec4 FragColor;

void main()
{
    vec2 position = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.0);

    float circle = circleshape(position,0.3);

    color = vec3(circle);

    FragColor = vec4(color,1.0);
}
