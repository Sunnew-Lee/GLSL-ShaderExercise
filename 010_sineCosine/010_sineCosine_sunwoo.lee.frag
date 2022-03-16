#version 330

// // Name: sunwoo.lee
// // Assignment name: Sine Cosine
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
    vec3 color = vec3(0.0824, 0.5451, 0.2588);

    vec2 translate = vec2(0.5*sin(u_time),abs(cos(u_time*1.5))-0.5);
    coord += translate * 0.5;

    color += vec3(circleshape(coord,0.15*abs(sin(u_time*3.0))+0.1));

    vec3 color_ = vec3(0.6431, 0.1686, 0.6863);
    FragColor = vec4(1.-color*color_, 1.0);
}