// Curved image-coil geometry and shaders adapted from the supplied Visuvate snapshot.
const u = 30 / 14;
let m = `
  precision highp float;
  attribute vec3 position;
  attribute vec2 uv;
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float poleFlare;
  uniform float wind;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec4 worldPos = modelMatrix * vec4(position, 1.0);

    // Bend the pole outward toward its ends: the trumpet flare.
    float yDist = worldPos.y;
    vec2 outward = normalize(worldPos.xz);
    float expansion = (yDist * yDist) * poleFlare;
    worldPos.xz += outward * expansion;

    // Wind: inertial flutter from scroll velocity.
    float windFlutter = sin(vUv.x * 3.1415) * wind * 30.0;
    worldPos.y -= windFlutter;
    worldPos.xz -= outward * (vUv.y - 0.5) * wind * 20.0;

    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`,
  x = `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D map;
  uniform vec2 planeSize;
  uniform float borderRadius;
  uniform float opacity;
  uniform float imageAspect;

  void main() {
    vec2 px = vUv * planeSize;
    vec2 halfSize = planeSize * 0.5;

    // SDF for crisp rounded corners on the curved surface.
    vec2 d = abs(px - halfSize) - halfSize + vec2(borderRadius);
    float dist = length(max(d, 0.0)) - borderRadius;
    float edgeWidth = 0.02;
    float alpha = 1.0 - smoothstep(-edgeWidth, edgeWidth, dist);
    if (alpha < 0.01) discard;

    // object-fit: cover, hung from the top edge for taller artwork — the
    // same masthead-first crop every card on the site uses.
    float pa = planeSize.x / planeSize.y;
    vec2 tuv = vUv;
    if (imageAspect > pa) {
      tuv.x = 0.5 + (vUv.x - 0.5) * (pa / imageAspect);
    } else {
      tuv.y = 1.0 - (1.0 - vUv.y) * (imageAspect / pa);
    }

    // No colour management: the bytes from the file land in the framebuffer
    // untouched, as a DOM <img> would paint them.
    vec4 texColor = texture2D(map, tuv);
    gl_FragColor = vec4(texColor.rgb, texColor.a * alpha * opacity);
  }
`;
function f(e, t, r, a) {
  let s = 1 / Math.tan((e * Math.PI) / 360),
    n = 1 / (r - a),
    i = new Float32Array(16);
  return (
    (i[0] = s / t),
    (i[5] = s),
    (i[10] = (a + r) * n),
    (i[11] = -1),
    (i[14] = 2 * a * r * n),
    i
  );
}
function g(e, t, r) {
  let a = e.createShader(t);
  if ((e.shaderSource(a, r), e.compileShader(a), !e.getShaderParameter(a, e.COMPILE_STATUS))) {
    let t = e.getShaderInfoLog(a);
    throw (e.deleteShader(a), Error(`coil shader: ${t}`));
  }
  return a;
}
export function createProjectCoil(e, t) {
  const controls = t;
  let { items: r, progressRef: a } = t,
    s = r.length,
    n =
      e.getContext('webgl2', {
        alpha: !0,
        antialias: !0,
        premultipliedAlpha: !1,
      }) ??
      e.getContext('webgl', {
        alpha: !0,
        antialias: !0,
        premultipliedAlpha: !1,
      });
  if (!n) throw new Error('WebGL unavailable');
  let i = 'u' > typeof WebGL2RenderingContext && n instanceof WebGL2RenderingContext,
    o = n.createProgram();
  if (
    (n.attachShader(o, g(n, n.VERTEX_SHADER, m)),
    n.attachShader(o, g(n, n.FRAGMENT_SHADER, x)),
    n.linkProgram(o),
    !n.getProgramParameter(o, n.LINK_STATUS))
  )
    throw Error(`coil program: ${n.getProgramInfoLog(o)}`);
  n.useProgram(o);
  let l = {
      position: n.getAttribLocation(o, 'position'),
      uv: n.getAttribLocation(o, 'uv'),
    },
    c = {
      model: n.getUniformLocation(o, 'modelMatrix'),
      view: n.getUniformLocation(o, 'viewMatrix'),
      projection: n.getUniformLocation(o, 'projectionMatrix'),
      poleFlare: n.getUniformLocation(o, 'poleFlare'),
      wind: n.getUniformLocation(o, 'wind'),
      map: n.getUniformLocation(o, 'map'),
      planeSize: n.getUniformLocation(o, 'planeSize'),
      borderRadius: n.getUniformLocation(o, 'borderRadius'),
      opacity: n.getUniformLocation(o, 'opacity'),
      imageAspect: n.getUniformLocation(o, 'imageAspect'),
    },
    d = (function () {
      let e = Math.PI / 2 - 0.3246753246753247,
        t = [],
        r = [],
        a = [];
      for (let a = 0; a <= 16; a++) {
        let s = a / 16,
          n = -(3.75 * s) + 1.875;
        for (let a = 0; a <= 64; a++) {
          let i = a / 64,
            o = e + 0.6493506493506493 * i;
          (t.push(7.7 * Math.sin(o), n, 7.7 * Math.cos(o)), r.push(i, 1 - s));
        }
      }
      for (let e = 0; e < 16; e++)
        for (let t = 0; t < 64; t++) {
          let r = 65 * e + t,
            s = (e + 1) * 65 + t,
            n = (e + 1) * 65 + t + 1,
            i = 65 * e + t + 1;
          a.push(r, s, i, s, n, i);
        }
      return {
        positions: new Float32Array(t),
        uvs: new Float32Array(r),
        indices: new Uint16Array(a),
        thetaStart: e,
        thetaEnd: e + 0.6493506493506493,
      };
    })(),
    p = n.createBuffer();
  (n.bindBuffer(n.ARRAY_BUFFER, p),
    n.bufferData(n.ARRAY_BUFFER, d.positions, n.STATIC_DRAW),
    n.enableVertexAttribArray(l.position),
    n.vertexAttribPointer(l.position, 3, n.FLOAT, !1, 0, 0));
  let h = n.createBuffer();
  (n.bindBuffer(n.ARRAY_BUFFER, h),
    n.bufferData(n.ARRAY_BUFFER, d.uvs, n.STATIC_DRAW),
    n.enableVertexAttribArray(l.uv),
    n.vertexAttribPointer(l.uv, 2, n.FLOAT, !1, 0, 0));
  let v = n.createBuffer();
  (n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, v),
    n.bufferData(n.ELEMENT_ARRAY_BUFFER, d.indices, n.STATIC_DRAW));
  let b = d.indices.length;
  (n.uniform1f(c.poleFlare, 0.028),
    n.uniform2f(c.planeSize, 5, 3.75),
    n.uniform1f(c.borderRadius, 0.2),
    n.uniform1i(c.map, 0));
  let w = new Float32Array(16);
  ((w[0] = w[5] = w[10] = w[15] = 1),
    (w[14] = -22),
    n.uniformMatrix4fv(c.view, !1, w),
    n.enable(n.BLEND),
    n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA),
    n.disable(n.CULL_FACE),
    n.enable(n.DEPTH_TEST),
    n.clearColor(0, 0, 0, 0));
  let j = Array(s).fill(null),
    y = new Float32Array(s).fill(5 / 3.75),
    C = new Float32Array(s),
    N = n.getExtension('EXT_texture_filter_anisotropic'),
    k = [],
    A = !0;
  r.forEach((e, t) => {
    let r = new Image();
    ((r.crossOrigin = 'anonymous'),
      (r.decoding = 'async'),
      (r.onload = () => {
        if (!A) return;
        let e = n.createTexture();
        (n.activeTexture(n.TEXTURE0),
          n.bindTexture(n.TEXTURE_2D, e),
          n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, !0),
          n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, n.NONE),
          n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, r),
          n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE),
          n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE),
          n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR));
        let a = (r.width & (r.width - 1)) == 0 && (r.height & (r.height - 1)) == 0;
        (i || a
          ? (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR_MIPMAP_LINEAR),
            n.generateMipmap(n.TEXTURE_2D))
          : n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR),
          N && n.texParameterf(n.TEXTURE_2D, N.TEXTURE_MAX_ANISOTROPY_EXT, 8),
          (j[t] = e),
          (y[t] = r.width / r.height));
        resume();
      }),
      (r.src = e.image),
      k.push(r));
  });
  let E = f(45, 1, 0.1, 1e3),
    M = 1,
    L = 1,
    S = () => {
      let t = Math.min(window.devicePixelRatio || 1, window.innerWidth < 760 ? 1.25 : 1.5);
      ((M = e.clientWidth || 1), (L = e.clientHeight || 1));
      let r = Math.round(M * t),
        a = Math.round(L * t);
      ((e.width !== r || e.height !== a) && ((e.width = r), (e.height = a)),
        n.viewport(0, 0, r, a),
        (E = f(45, M / L, 0.1, 1e3)),
        n.uniformMatrix4fv(c.projection, !1, E));
    };
  S();
  let F = new ResizeObserver(S);
  F.observe(e);
  let P = a.current,
    z = 0,
    R = performance.now(),
    T = 0,
    _ = !0,
    $ = Array.from({ length: 14 }, () => ({
      idx: 0,
      y: 0,
      u: 0,
      opacity: 0,
      active: !1,
    })),
    B = $.map((e, t) => t),
    D = new Float32Array(16),
    I = (e) => {
      T =
        _ &&
        !document.hidden &&
        (!controls.pausedRef?.current ||
          C.some((opacity, index) => j[index] && opacity < 1) ||
          Math.abs(a.current - P) > 0.0001)
          ? requestAnimationFrame(I)
          : 0;
      let t = Math.min((e - R) / 1e3, 0.1);
      R = e;
      let r = 1 - Math.exp(-6 * t),
        i = P;
      ((P += (a.current - P) * r), (z = 0.8 * z + (P - i) * 0.2));
      for (let e = 0; e < s; e++) j[e] && C[e] < 1 && (C[e] = Math.min(1, C[e] + t / 0.35));
      for (let e = 0; e < 14; e++) {
        let t = e / 14 + P,
          r = Math.floor(t),
          a = t - r,
          n = s ? (((7 - e + 14 * r) % s) + s) % s : 0,
          i = 1;
        a < 0.25 ? (i = a / 0.25) : a > 0.75 && (i = (1 - a) / 0.25);
        let o = $[e];
        ((o.idx = n),
          (o.opacity = Math.sin((Math.PI / 2) * i) * (C[n] ?? 0)),
          (o.y = (a - 0.5) * u * 14),
          (o.u = a * Math.PI * 3),
          (o.active = -Math.sin(o.u) > 0.55 && o.opacity > 0.5));
      }
      for (let e of (B.sort((e, t) => -Math.sin($[e].u) - -Math.sin($[t].u)),
      n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT),
      n.uniform1f(c.wind, 0.5 * z),
      B)) {
        let t = $[e],
          r = j[t.idx];
        r &&
          !(t.opacity <= 0.001) &&
          (n.activeTexture(n.TEXTURE0),
          n.bindTexture(n.TEXTURE_2D, r),
          n.uniform1f(c.imageAspect, y[t.idx]),
          n.uniform1f(c.opacity, t.opacity),
          n.uniformMatrix4fv(
            c.model,
            !1,
            (function (e, t, r) {
              let a = Math.cos(r),
                s = Math.sin(r);
              return (
                e.fill(0),
                (e[0] = a),
                (e[2] = -s),
                (e[5] = 1),
                (e[8] = s),
                (e[10] = a),
                (e[13] = t),
                (e[15] = 1),
                e
              );
            })(D, t.y, t.u),
          ),
          n.drawElements(n.TRIANGLES, b, n.UNSIGNED_SHORT, 0));
      }
    };
  T = requestAnimationFrame(I);
  let H = new IntersectionObserver(([e]) => {
    (_ = e.isIntersecting) && !T && ((R = performance.now()), (T = requestAnimationFrame(I)));
  });
  H.observe(e);
  const resume = () => {
    if (_ && !T && !document.hidden) {
      R = performance.now();
      T = requestAnimationFrame(I);
    }
  };
  document.addEventListener('visibilitychange', resume);
  let W = [
      [7.7 * Math.sin(d.thetaStart), 1.875, 7.7 * Math.cos(d.thetaStart)],
      [7.7 * Math.sin(d.thetaEnd), 1.875, 7.7 * Math.cos(d.thetaEnd)],
      [7.7 * Math.sin(d.thetaEnd), -1.875, 7.7 * Math.cos(d.thetaEnd)],
      [7.7 * Math.sin(d.thetaStart), -1.875, 7.7 * Math.cos(d.thetaStart)],
    ],
    U = (e, t, r) => {
      let a = Math.cos(r),
        s = Math.sin(r),
        n = a * e[0] + s * e[2],
        i = e[1] + t,
        o = -s * e[0] + a * e[2] - 22,
        l = E[0] * n,
        c = E[5] * i,
        d = -o;
      return [((l / d + 1) / 2) * M, ((1 - c / d) / 2) * L];
    },
    O = (e, t) => {
      let r = 0;
      for (let a = 0; a < t.length; a++) {
        let s = t[a],
          n = t[(a + 1) % t.length],
          i = (n[0] - s[0]) * (e[1] - s[1]) - (n[1] - s[1]) * (e[0] - s[0]),
          o = i > 0 ? 1 : i < 0 ? -1 : 0;
        if (0 !== o) {
          if (0 === r) r = o;
          else if (r !== o) return !1;
        }
      }
      return !0;
    },
    q = (t) => {
      let a = e.getBoundingClientRect(),
        s = [t.clientX - a.left, t.clientY - a.top];
      for (let e of $)
        if (
          e.active &&
          O(
            s,
            W.map((t) => U(t, e.y, e.u)),
          )
        )
          return r[e.idx];
      return null;
    },
    V = (t) => {
      e.style.cursor = q(t) ? 'pointer' : '';
    },
    X = (e) => {
      let r = q(e);
      r && t.onOpen?.(r);
    },
    G = () => {
      e.style.cursor = '';
    };
  (e.addEventListener('pointermove', V),
    e.addEventListener('pointerleave', G),
    e.addEventListener('click', X));
  let Y = (e) => {
    (e.preventDefault(), T && cancelAnimationFrame(T), (T = 0));
    t.onFailure?.();
  };
  return (
    e.addEventListener('webglcontextlost', Y),
    {
      refresh: resume,
      dispose() {
        for (let t of ((A = !1),
        T && cancelAnimationFrame(T),
        F.disconnect(),
        document.removeEventListener('visibilitychange', resume),
        H.disconnect(),
        e.removeEventListener('pointermove', V),
        e.removeEventListener('pointerleave', G),
        e.removeEventListener('click', X),
        e.removeEventListener('webglcontextlost', Y),
        k))
          t.src = '';
        for (let e of j) e && n.deleteTexture(e);
        (n.deleteBuffer(p), n.deleteBuffer(h), n.deleteBuffer(v), n.deleteProgram(o), void 0);
      },
    }
  );
}
