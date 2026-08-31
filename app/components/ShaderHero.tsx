"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const vertexShaderSource = `
  attribute vec2 a_position;

  void main() {
    // Draw the two triangles as one fullscreen rectangle.
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;

  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;

  // Generate repeatable visual noise for the grain layer.
  float random(vec2 point) {
    return fract(sin(dot(point, vec2(12.9898, 78.233))) * 43758.5453);
  }

  // Rotate coordinates so the aurora travels diagonally.
  mat2 rotate2D(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat2(c, -s, s, c);
  }

  void main() {
    // Convert the current pixel into a 0-to-1 coordinate.
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;

    // Center the coordinates and correct the screen aspect ratio.
    vec2 point = uv - 0.5;
    point.x *= u_resolution.x / u_resolution.y;

    // Put the mouse in the same centered coordinate system.
    vec2 mouse = u_mouse - 0.5;
    mouse.x *= u_resolution.x / u_resolution.y;

    // Gently bend the flow toward the pointer.
    float mouseDistance = length(point - mouse);
    float mouseGlow = exp(-mouseDistance * 2.8);
    point += mouse * mouseGlow * 0.12;
    point = rotate2D(-0.18) * point;

    // Layer three waves to avoid a single predictable sine curve.
    float waveOne = sin(point.x * 4.0 + u_time * 0.28 + sin(point.y * 3.0));
    float waveTwo = sin(point.x * 7.0 - u_time * 0.20 + point.y * 4.5);
    float waveThree = cos(point.y * 5.0 + u_time * 0.16 + point.x * 3.0);
    float flow = waveOne * 0.50 + waveTwo * 0.28 + waveThree * 0.22;

    // Turn the wave field into two soft luminous ribbons.
    float ribbonOne = 0.050 / max(abs(point.y + flow * 0.13), 0.025);
    float ribbonTwo = 0.032 / max(abs(point.y - 0.24 + waveTwo * 0.10), 0.025);

    // Use the cyan, blue and purple palette from Sahil's portfolio.
    vec3 color = vec3(0.008, 0.018, 0.055);
    color += vec3(0.035, 0.28, 0.95) * ribbonOne * 0.34;
    color += vec3(0.02, 0.82, 0.92) * ribbonTwo * 0.26;
    color += vec3(0.34, 0.10, 0.80) * ribbonOne * ribbonTwo * 0.08;
    color += vec3(0.02, 0.82, 0.92) * mouseGlow * 0.075;

    // Darken the edges so the foreground text remains readable.
    float vignette = smoothstep(0.95, 0.20, length(uv - 0.5));
    color *= 0.48 + vignette * 0.72;

    // Add a restrained animated grain pass.
    float grain = random(gl_FragCoord.xy + floor(u_time * 24.0)) - 0.5;
    color += grain * 0.025;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
) {
  const shader = gl.createShader(type);

  if (!shader) throw new Error("Unable to create the WebGL shader.");

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(message || "Shader compilation failed.");
  }

  return shader;
}

export default function ShaderHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(query.matches);

    updatePreference();
    query.addEventListener("change", updatePreference);
    return () => query.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      powerPreference: "high-performance",
    });
    if (!gl) return;

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      fragmentShaderSource,
    );
    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(program) || "Shader linking failed.");
    }

    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1, 1, -1, -1, 1,
        -1, 1, 1, -1, 1, 1,
      ]),
      gl.STATIC_DRAW,
    );

    const position = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const time = gl.getUniformLocation(program, "u_time");
    const resolution = gl.getUniformLocation(program, "u_resolution");
    const mouseUniform = gl.getUniformLocation(program, "u_mouse");
    const mouse = { x: 0.5, y: 0.5 };
    let frame = 0;
    let elapsedBeforePause = 0;
    let startedAt = performance.now();

    const resize = () => {
      // Cap DPR to limit the number of fragments rendered on dense screens.
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      const height = Math.max(1, Math.floor(canvas.clientHeight * dpr));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, width, height);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      mouse.x = (event.clientX - bounds.left) / bounds.width;
      mouse.y = 1 - (event.clientY - bounds.top) / bounds.height;
    };

    const render = (now: number) => {
      resize();
      const seconds = elapsedBeforePause + (now - startedAt) / 1000;
      gl.uniform1f(time, seconds);
      gl.uniform2f(resolution, canvas.width, canvas.height);
      gl.uniform2f(mouseUniform, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      frame = requestAnimationFrame(render);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        elapsedBeforePause += (performance.now() - startedAt) / 1000;
        cancelAnimationFrame(frame);
      } else {
        startedAt = performance.now();
        frame = requestAnimationFrame(render);
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("visibilitychange", handleVisibility);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("visibilitychange", handleVisibility);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, [reducedMotion]);

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#020617] text-white">
      {reducedMotion ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#0891b2_0%,#1d4ed8_28%,#020617_72%)]"
        />
      ) : (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        />
      )}

      <div aria-hidden="true" className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-36 lg:px-12 lg:pb-36 lg:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_410px]">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Available for opportunities
              </span>
              <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/70 backdrop-blur-sm">
                India
              </span>
            </div>

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
              Web Developer · AI Engineer · Business Professional
            </p>

            <h1 className="mt-8 text-5xl font-bold leading-[0.92] tracking-tighter sm:text-7xl lg:text-[6rem] xl:text-[7rem]">
              I build digital
              <span className="block bg-linear-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                experiences &amp; systems.
              </span>
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
              I&apos;m Sahil Biswas, focused on building practical web
              applications, modern interfaces, AI-powered experiences, and
              technology-driven digital products.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 px-7 py-4 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Explore my work
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/25 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Let&apos;s talk
                <span className="transition group-hover:translate-x-1">↗</span>
              </Link>

              <a
                href="/Sahil-Biswas-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-7 py-4 text-sm font-semibold text-cyan-200 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                View Resume
                <span className="transition group-hover:translate-y-0.5">↓</span>
              </a>

              <a
                href="https://calendly.com/sahilbiswas890/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-purple-400/40 bg-purple-400/10 px-7 py-4 text-sm font-semibold text-purple-200 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-purple-400/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300"
              >
                Book a Call
                <span className="transition group-hover:translate-x-1">↗</span>
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
            <div className="profile-orbit" aria-hidden="true" />
            <div className="profile-glow" aria-hidden="true" />

            <div className="profile-frame relative aspect-4/5 overflow-hidden rounded-[2.2rem] border border-white/20 bg-[#0a0a0a] p-2 shadow-2xl shadow-cyan-500/20">
              <div className="relative h-full w-full overflow-hidden rounded-[1.75rem]">
                <Image
                  src="/sahil-biswas.jpeg"
                  alt="Portrait of Sahil Biswas"
                  fill
                  priority
                  sizes="(max-width: 1024px) 384px, 410px"
                  className="object-cover object-top transition duration-700 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#050505]/45 via-transparent to-cyan-400/5" />
              </div>
            </div>

            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-emerald-400/20 bg-[#080808]/90 px-4 py-2 text-xs font-medium text-emerald-300 shadow-xl backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Open to opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}