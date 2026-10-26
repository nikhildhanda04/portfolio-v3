"use client";

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FRAG = `
precision highp float;

varying vec2 vUv;
uniform vec2  uRes;
uniform vec2  uPointer;
uniform vec2  uFlow;
uniform float uTime;
uniform float uVel;
uniform float uDark;
uniform float uWarm;
uniform float uScroll;
uniform float uScrollVel;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0); // quintic — no creases between cells
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

// rotating each octave kills the axis-aligned grid you get from plain value noise
const mat2 ROT = mat2(0.8, 0.6, -0.6, 0.8);

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = ROT * p * 2.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 asp = vec2(uRes.x / uRes.y, 1.0);
  vec2 uv  = vUv * asp;
  vec2 ptr = uPointer * asp;

  // one broad, soft current rather than a pinpoint lens
  vec2  d    = uv - ptr;
  float dist = length(d);
  float lens = exp(-dist * dist * 1.6);
  vec2  dir  = d / max(dist, 1e-4);

  // push outward from the cursor, and let the smoke trail the direction of travel
  uv -= dir * lens * (0.005 + uVel * 0.045);
  uv -= uFlow * lens * 0.07;

  float t = uTime * 0.05;

  // volumes are taller than wide and drift upward — reads as rising smoke, not clouds.
  // scrolling drags the field with you, so the page has depth behind it
  vec2 sp = vec2(uv.x, uv.y * 0.65) * 1.15;
  sp.y -= t * 0.9 + uScroll * 0.30;

  // one warp level, counter-rotating in time so it keeps evolving while standing still.
  // a second level looked marginally better and cost 2 more fbm taps per pixel
  float warp = 1.6 + abs(uScrollVel) * 1.1;
  vec2 q = vec2(fbm(sp + vec2(0.0, t * 0.5)), fbm(sp + vec2(2.8, 5.1) - t * 0.4));
  float f = fbm(sp + q * warp + uScrollVel * 0.25);

  // soft shoulder, no hard threshold — haze, not blobs
  f = clamp(f, 0.0, 1.0);
  f = pow(f, 1.7) * 1.9;

  // keep the edges and the top quiet so text stays readable
  vec2  c    = vUv - vec2(0.5, 0.42);
  float pool = exp(-dot(c * vec2(1.0, 1.25), c * vec2(1.0, 1.25)) * 2.3);
  f *= 0.25 + 0.75 * pool;

  vec3 ground = mix(vec3(0.980, 0.976, 0.965), vec3(0.039, 0.039, 0.043), uDark);
  vec3 ash    = mix(vec3(0.760, 0.742, 0.716), vec3(0.330, 0.312, 0.298), uDark);
  vec3 amber  = mix(vec3(0.760, 0.640, 0.420), vec3(0.851, 0.643, 0.255), uDark);

  // scrolling shifts the hue toward amber but must not brighten it — match the
  // ash luminance first, or the smoke reads as denser further down the page
  const vec3 LUMA = vec3(0.2126, 0.7152, 0.0722);
  amber *= dot(ash, LUMA) / max(dot(amber, LUMA), 1e-4);

  vec3 smoke = mix(ash, amber, smoothstep(0.35, 1.0, f) * (0.18 + 0.28 * uWarm));

  float amount = mix(0.23, 0.31, uDark);
  vec3  col    = mix(ground, smoke, clamp(f * amount, 0.0, 1.0));

  // faint warmth where the cursor has just been — no bright blob, no hole
  col += amber * lens * uVel * 0.055 * mix(0.4, 1.0, uDark);

  // vignette
  vec2 vg = vUv - 0.5;
  col *= 1.0 - dot(vg, vg) * mix(0.15, 0.40, uDark);

  gl_FragColor = vec4(col, 1.0);
}`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(s));
    return null;
  }
  return s;
}

export default function SmokeBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
    if (!gl) return; // no webgl — the CSS background stands on its own

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const u = {
      res: gl.getUniformLocation(prog, "uRes"),
      pointer: gl.getUniformLocation(prog, "uPointer"),
      flow: gl.getUniformLocation(prog, "uFlow"),
      time: gl.getUniformLocation(prog, "uTime"),
      vel: gl.getUniformLocation(prog, "uVel"),
      dark: gl.getUniformLocation(prog, "uDark"),
      warm: gl.getUniformLocation(prog, "uWarm"),
      scroll: gl.getUniformLocation(prog, "uScroll"),
      scrollVel: gl.getUniformLocation(prog, "uScrollVel"),
    };

    // ponytail: rendered at 0.45x CSS pixels, DPR deliberately ignored, and scaled
    // back up by the compositor. The smoke carries no detail above a few px, so
    // rendering it at retina density just burns fill rate.
    const resize = () => {
      const scale = 0.45;
      canvas.width = Math.max(1, Math.floor(innerWidth * scale));
      canvas.height = Math.max(1, Math.floor(innerHeight * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(u.res, canvas.width, canvas.height);
    };
    resize();
    addEventListener("resize", resize);

    // target = where the cursor is, pos = where the smoke thinks it is (lags behind),
    // flow = smoothed direction of travel, vel = smoothed speed
    const p = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, fx: 0, fy: 0, vel: 0, dx: 0, dy: 0 };
    const onMove = (e: PointerEvent) => {
      const nx = e.clientX / innerWidth;
      const ny = 1 - e.clientY / innerHeight;
      p.dx += nx - p.tx;
      p.dy += ny - p.ty;
      p.tx = nx;
      p.ty = ny;
    };
    addEventListener("pointermove", onMove, { passive: true });

    let warm = 0;
    let scrollVh = 0;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      warm = max > 0 ? Math.min(1, scrollY / max) : 0;
      scrollVh = scrollY / innerHeight;
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });

    const still = matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let warmSmooth = warm;
    let scrollSmooth = scrollVh;
    let scrollVel = 0;
    const start = performance.now();

    let lastDraw = 0;

    const frame = (now: number) => {
      // heavy damping: the cursor leads, the smoke follows late
      p.x += (p.tx - p.x) * 0.035;
      p.y += (p.ty - p.y) * 0.035;

      const speed = Math.hypot(p.dx, p.dy) * 10;
      p.vel += (Math.min(1, speed) - p.vel) * 0.08;
      p.fx += (p.dx * 9 - p.fx) * 0.05;
      p.fy += (p.dy * 9 - p.fy) * 0.05;
      p.dx *= 0.82;
      p.dy *= 0.82;

      warmSmooth += (warm - warmSmooth) * 0.05;

      const prev = scrollSmooth;
      scrollSmooth += (scrollVh - scrollSmooth) * 0.07;
      scrollVel += ((scrollSmooth - prev) * 6 - scrollVel) * 0.1;

      // the field drifts slowly enough that 30fps is indistinguishable from 60,
      // and it holds still entirely while a theme view-transition is running
      if (now - lastDraw < 32 || document.documentElement.dataset.vt) {
        raf = document.hidden ? 0 : requestAnimationFrame(frame);
        return;
      }
      lastDraw = now;

      gl.uniform1f(u.time, still.matches ? 0 : (now - start) / 1000);
      gl.uniform2f(u.pointer, p.x, p.y);
      gl.uniform2f(u.flow, p.fx, p.fy);
      gl.uniform1f(u.vel, p.vel);
      gl.uniform1f(u.warm, warmSmooth);
      gl.uniform1f(u.scroll, scrollSmooth);
      gl.uniform1f(u.scrollVel, Math.max(-1, Math.min(1, scrollVel)));
      gl.uniform1f(u.dark, document.documentElement.classList.contains("dark") ? 1 : 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      raf = document.hidden ? 0 : requestAnimationFrame(frame);
    };
    frame(start);

    const onVisible = () => {
      if (!document.hidden && !raf) raf = requestAnimationFrame(frame);
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", resize);
      removeEventListener("pointermove", onMove);
      removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisible);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="fixed inset-0 -z-20 h-full w-full pointer-events-none"
    />
  );
}
