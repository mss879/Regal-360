"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight raw-WebGL animated background — a flowing fbm "aurora" in the
 * REGAL brand palette. No Three.js dependency so it stays fast and reliable.
 * Pauses when off-screen or when the tab is hidden, and respects
 * prefers-reduced-motion.
 */

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_intensity;

// hash + value noise
float hash(vec2 p){
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0;
  float amp = 0.5;
  mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 6; i++){
    v += amp * noise(p);
    p = rot * p * 2.0 + 0.03;
    amp *= 0.5;
  }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  vec2 p = uv;
  p.x *= u_res.x / u_res.y;

  float t = u_time * 0.06;

  // domain-warped fbm for a liquid, flowing feel
  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, -t)));
  vec2 r = vec2(
    fbm(p + 3.0 * q + vec2(1.7, 9.2) + 0.15 * t),
    fbm(p + 3.0 * q + vec2(8.3, 2.8) - 0.12 * t)
  );
  float f = fbm(p + 2.5 * r);

  // brand palette
  vec3 ink     = vec3(0.043, 0.043, 0.051);
  vec3 deep    = vec3(0.725, 0.290, 0.094);
  vec3 brand   = vec3(0.886, 0.400, 0.173);
  vec3 bright  = vec3(1.000, 0.420, 0.102);

  vec3 col = mix(ink, deep, smoothstep(0.25, 0.7, f));
  col = mix(col, brand, smoothstep(0.55, 0.95, f + 0.25 * r.x));
  col = mix(col, bright, smoothstep(0.8, 1.05, f + 0.4 * q.y));

  // soft light following the pointer
  float d = distance(uv, u_mouse);
  col += bright * (0.16 * u_intensity) * smoothstep(0.55, 0.0, d);

  // vignette toward ink at the edges
  float vig = smoothstep(1.15, 0.25, distance(uv, vec2(0.5)));
  col = mix(ink, col, vig);

  col *= u_intensity;

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(sh));
    gl.deleteShader(sh);
    return null;
  }
  return sh;
}

export default function WebGLBackground({
  className = "",
  intensity = 1,
}: {
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const gl =
      canvas.getContext("webgl", { antialias: true, alpha: true }) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) {
      canvas.style.background =
        "radial-gradient(120% 120% at 50% 0%, #2a1206 0%, #0b0b0d 60%)";
      return;
    }

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    // fullscreen triangle
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uIntensity = gl.getUniformLocation(prog, "u_intensity");

    const mouse = { x: 0.5, y: 0.6, tx: 0.5, ty: 0.6 };

    const dpr = () => Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      const ratio = dpr();
      canvas.width = Math.max(1, Math.floor(w * ratio));
      canvas.height = Math.max(1, Math.floor(h * ratio));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = (e.clientX - rect.left) / rect.width;
      mouse.ty = 1 - (e.clientY - rect.top) / rect.height;
    };
    window.addEventListener("pointermove", onMove);

    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => (visible = entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(canvas);

    let raf = 0;
    const start = performance.now();
    const render = (now: number) => {
      raf = requestAnimationFrame(render);
      if (!visible || document.hidden) return;

      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;

      const t = reduce ? 0 : (now - start) / 1000;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uIntensity, intensity);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      io.disconnect();
      gl.deleteProgram(prog);
      gl.deleteBuffer(buf);
    };
  }, [intensity]);

  return (
    <canvas
      ref={ref}
      className={className}
      aria-hidden="true"
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
