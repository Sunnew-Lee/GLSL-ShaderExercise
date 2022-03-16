#version 330

// // Name: sunwoo.lee
// // Assignment name: Translate
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

out vec4 FragColor;
uniform vec2 u_resolution;
uniform float u_time;

float circleshape(vec2 position, float radius){
    return step(radius, length(position - vec2(0.5)));
}

void main()
{
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    vec2 translate = vec2(0.3*sin(u_time),0.3*sin(u_time*5.));
    coord += translate;

    color += vec3(circleshape(coord,0.2));

    FragColor = vec4(color, 1.0);
}
