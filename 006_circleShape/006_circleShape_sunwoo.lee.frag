#version 330

// Name: sunwoo.lee
// Assignment name: Circle Shape
// Course name: CS250
// Term: 2022 Spring

precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

out vec4 FragColor;

void main(){
  
  vec2 uv=gl_FragCoord.xy/u_resolution;
  vec2 q=uv - vec2(0.65+0.05*sin(u_time*0.5),0.5-0.05*(1-abs(cos(u_time*0.5))));
  vec3 color = vec3(0.9529, 0.5647, 0.1216);

  //color *= uv.x;
  //color *= uv.y;
  //color *= uv.x + uv.y;
  float r = 0.1 + 0.05*cos(atan(q.y,q.x)*15.+sin(u_time)*10);
  color *= smoothstep(r,r+0.01,length(q));

  r=0.01;
  color*=1.0 - ( 1.-step(r, abs(q.x+0.01*sin(10.*q.y+u_time)))) * (1.-step(0.001,q.y));
  
  FragColor=vec4((1.-color*(uv.y+0.2)),1.);
}
