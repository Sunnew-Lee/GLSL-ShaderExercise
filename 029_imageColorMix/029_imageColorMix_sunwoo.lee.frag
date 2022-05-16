#version 330

// // Name: sunwoo.lee
// // Assignment name: Image Color Mix
// // Course name: CS250
// // Term: 2022 Spring

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform sampler2D u_tex0;

out vec4 FragColor;

void main()
{
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(1.0);

    vec4 image = texture2D(u_tex0,coord);
    image += sin(coord.x * 90.0 )*0.5;
    image += cos(coord.y * 90.0 )*0.5;

    color = mix(vec3(abs(sin(u_time*0.5))*color.r, abs(cos(u_time*0.4))*color.g,(sin(u_time*0.6)*cos(u_time*0.25))*color.b)
    ,image.rgb,image.a);

    FragColor = vec4(color,1.0);
}