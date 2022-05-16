#version 330

// // Name: sunwoo.lee
// // Assignment name: Noise 1D
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

out vec4 FragColor;

float noise1d(float v){
    return cos(v + cos(v * 90.1415) * 100.1415) * 0.5 + 0.5;
}

float circleshape(vec2 position, float radius){
    return step(radius, length(position - vec2(0.5)));
}

void main()
{
    vec2 coord = gl_FragCoord.xy / u_resolution;
    coord.x+=noise1d(u_time)-0.5;
    vec3 color = vec3(0.0);

    float circle = circleshape(coord,0.3);

    color.r+=noise1d(u_time);
    color.g+=noise1d(u_time*0.5);
    color.b+=noise1d(u_time*0.25);

    color+=vec3(circle);

    FragColor = vec4(color, 1.0);
}
