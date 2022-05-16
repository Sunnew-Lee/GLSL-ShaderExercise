#version 330

// // Name: sunwoo.lee
// // Assignment name: Image Manipulate
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

uniform sampler2D u_tex0;

out vec4 FragColor;

void main()
{
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    vec4 image = texture2D(u_tex0,coord);
    image += tan(coord.x * 90.0  )*(abs(sin(u_time*0.5))-0.75);
    image += tan(coord.y * 90.0  )*(abs(cos(u_time*0.5))-0.75);

    FragColor = vec4(image.r,image.g,image.b,image.a);
}