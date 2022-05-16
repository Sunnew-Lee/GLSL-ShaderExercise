#version 330

// // Name: sunwoo.lee
// // Assignment name: Image
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform sampler2D u_tex0;

out vec4 FragColor;

mat2 rotate(float angle){
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

void main()
{
    vec2 coord = gl_FragCoord.xy / u_resolution * 3;
    coord -=vec2(1.5);
    coord = rotate(sin(u_time))*coord;
    coord +=vec2(1.5);

    FragColor = texture2D(u_tex0,coord);
}
