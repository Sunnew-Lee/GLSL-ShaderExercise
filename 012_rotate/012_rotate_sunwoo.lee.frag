#version 330

// // Name: sunwoo.lee
// // Assignment name: Rotate
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

const float PI = 3.14159265359;
uniform vec2 u_resolution;
uniform float u_time;
out vec4 FragColor;

float rectshape(vec2 position, vec2 scale){
    scale = vec2(0.5) - scale * 0.5;
    vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y));
    shaper *= vec2(step(scale.x, 1.0 - position.x), step(scale.y, 1.0 - position.y));
    return shaper.x + shaper.y;
}

mat2 rotate(float angle){
    return mat2(cos(angle)*0.5, -sin(angle)*2.0, sin(angle)*2.0, cos(angle)*0.5);
}

void main()
{
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.9412, 0.1255, 0.1255);

    coord -=vec2(0.5);
    coord = rotate(sin(u_time*PI))*coord;
    coord +=vec2(0.5);

    color += vec3(rectshape(coord,vec2(0.25)));

    FragColor = vec4(color, 1.0);
}
