#version 330

// // Name: sunwoo.lee
// // Assignment name: Image Color
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

mat2 scale(vec2 scale){
    return mat2(scale.x, 0.0, 0.0, scale.y);
}

void main()
{
    vec2 coord = gl_FragCoord.xy / u_resolution*3;

    coord -=vec2(1.5);
    coord = rotate(sin(u_time))*coord;
    coord = scale(vec2(sin(u_time)))*coord;
    coord +=vec2(1.5);

    vec4 image = texture2D(u_tex0,coord);
    image += vec4(vec3(sin(u_time)),1.0);
    
    FragColor = image;
}