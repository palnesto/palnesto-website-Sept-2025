import { FC, useRef, useState, useEffect, MutableRefObject } from "react";
import { mat4, quat, vec2, vec3 } from "gl-matrix";

const discVertShaderSource = `#version 300 es
uniform mat4 uWorldMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform vec3 uCameraPosition;
uniform vec4 uRotationAxisVelocity;

in vec3 aModelPosition;
in vec2 aModelUvs;
in mat4 aInstanceMatrix;

out vec2 vUvs;
out float vAlpha;
flat out int vInstanceId;

void main() {
    vec4 worldPosition = uWorldMatrix * aInstanceMatrix * vec4(aModelPosition, 1.);

    vec3 centerPos = (uWorldMatrix * aInstanceMatrix * vec4(0., 0., 0., 1.)).xyz;
    float radius = length(centerPos.xyz);

    if (gl_VertexID > 0) {
        vec3 rotationAxis = uRotationAxisVelocity.xyz;
        float rotationVelocity = min(.15, uRotationAxisVelocity.w * 15.);
        vec3 stretchDir = normalize(cross(centerPos, rotationAxis));
        vec3 relativeVertexPos = normalize(worldPosition.xyz - centerPos);
        float strength = dot(stretchDir, relativeVertexPos);
        float invAbsStrength = min(0., abs(strength) - 1.);
        strength = rotationVelocity * sign(strength) * abs(invAbsStrength * invAbsStrength * invAbsStrength + 1.);
        worldPosition.xyz += stretchDir * strength;
    }

    worldPosition.xyz = radius * normalize(worldPosition.xyz);
    gl_Position = uProjectionMatrix * uViewMatrix * worldPosition;

    vAlpha = smoothstep(0.5, 1., normalize(worldPosition.xyz).z) * .9 + .1;
    vUvs = aModelUvs;
    vInstanceId = gl_InstanceID;
}
`;

const discFragShaderSource = `#version 300 es
precision highp float;

uniform sampler2D uTex;
uniform int uItemCount;
uniform int uAtlasSize;

out vec4 outColor;

in vec2 vUvs;
in float vAlpha;
flat in int vInstanceId;

void main() {
    int itemIndex = vInstanceId % uItemCount;
    int cellsPerRow = uAtlasSize;
    int cellX = itemIndex % cellsPerRow;
    int cellY = itemIndex / cellsPerRow;

    vec2 cellSize = vec2(1.0) / vec2(float(cellsPerRow));
    vec2 cellOffset = vec2(float(cellX), float(cellY)) * cellSize;

    vec2 st = vec2(vUvs.x, 1.0 - vUvs.y);
    st = st * cellSize + cellOffset;

    outColor = texture(uTex, st);
    outColor.a *= vAlpha;
}
`;

/* ===================== GEOMETRY ===================== */

class Face {
  constructor(public a: number, public b: number, public c: number) {}
}
class Vertex {
  public position = vec3.create();
  public normal = vec3.create();
  public uv = vec2.create();
  constructor(x: number, y: number, z: number) {
    vec3.set(this.position, x, y, z);
  }
}
class Geometry {
  public vertices: Vertex[] = [];
  public faces: Face[] = [];
  addVertex(...args: number[]) {
    for (let i = 0; i < args.length; i += 3)
      this.vertices.push(new Vertex(args[i], args[i + 1], args[i + 2]));
    return this;
  }
  addFace(...args: number[]) {
    for (let i = 0; i < args.length; i += 3)
      this.faces.push(new Face(args[i], args[i + 1], args[i + 2]));
    return this;
  }
  get lastVertex() {
    return this.vertices[this.vertices.length - 1];
  }
  subdivide(divisions = 1) {
    const mid: Record<string, number> = {};
    let f = this.faces;
    for (let d = 0; d < divisions; d++) {
      const nf = new Array<Face>(f.length * 4);
      f.forEach((face, ndx) => {
        const mAB = this.mid(face.a, face.b, mid);
        const mBC = this.mid(face.b, face.c, mid);
        const mCA = this.mid(face.c, face.a, mid);
        const i = ndx * 4;
        nf[i + 0] = new Face(face.a, mAB, mCA);
        nf[i + 1] = new Face(face.b, mBC, mAB);
        nf[i + 2] = new Face(face.c, mCA, mBC);
        nf[i + 3] = new Face(mAB, mBC, mCA);
      });
      f = nf;
    }
    this.faces = f;
    return this;
  }
  spherize(r = 1) {
    this.vertices.forEach((v) => {
      vec3.normalize(v.normal, v.position);
      vec3.scale(v.position, v.normal, r);
    });
    return this;
  }
  private mid(a: number, b: number, cache: Record<string, number>) {
    const k = a < b ? `k_${b}_${a}` : `k_${a}_${b}`;
    if (cache[k] != null) return cache[k];
    const va = this.vertices[a].position,
      vb = this.vertices[b].position,
      ndx = this.vertices.length;
    cache[k] = ndx;
    this.addVertex(
      (va[0] + vb[0]) * 0.5,
      (va[1] + vb[1]) * 0.5,
      (va[2] + vb[2]) * 0.5
    );
    return ndx;
  }
  get vertexData() {
    return new Float32Array(
      this.vertices.flatMap((v) => Array.from(v.position))
    );
  }
  get uvData() {
    return new Float32Array(this.vertices.flatMap((v) => Array.from(v.uv)));
  }
  get indexData() {
    return new Uint16Array(this.faces.flatMap((f) => [f.a, f.b, f.c]));
  }
}
class IcosahedronGeometry extends Geometry {
  constructor() {
    super();
    const t = Math.sqrt(5) * 0.5 + 0.5;
    this.addVertex(
      -1,
      t,
      0,
      1,
      t,
      0,
      -1,
      -t,
      0,
      1,
      -t,
      0,
      0,
      -1,
      t,
      0,
      1,
      t,
      0,
      -1,
      -t,
      0,
      1,
      -t,
      t,
      0,
      -1,
      t,
      0,
      1,
      -t,
      0,
      -1,
      -t,
      0,
      1
    ).addFace(
      0,
      11,
      5,
      0,
      5,
      1,
      0,
      1,
      7,
      0,
      7,
      10,
      0,
      10,
      11,
      1,
      5,
      9,
      5,
      11,
      4,
      11,
      10,
      2,
      10,
      7,
      6,
      7,
      1,
      8,
      3,
      9,
      4,
      3,
      4,
      2,
      3,
      2,
      6,
      3,
      6,
      8,
      3,
      8,
      9,
      4,
      9,
      5,
      2,
      4,
      11,
      6,
      2,
      10,
      8,
      6,
      7,
      9,
      8,
      1
    );
  }
}
class DiscGeometry extends Geometry {
  constructor(steps = 56, radius = 1) {
    super();
    const s = Math.max(4, steps),
      a = (2 * Math.PI) / s;
    this.addVertex(0, 0, 0);
    this.lastVertex.uv[0] = 0.5;
    this.lastVertex.uv[1] = 0.5;
    for (let i = 0; i < s; i++) {
      const x = Math.cos(a * i),
        y = Math.sin(a * i);
      this.addVertex(radius * x, radius * y, 0);
      this.lastVertex.uv[0] = x * 0.5 + 0.5;
      this.lastVertex.uv[1] = y * 0.5 + 0.5;
      if (i > 0) this.addFace(0, i, i + 1);
    }
    this.addFace(0, s, 1);
  }
}

/* ===================== WEBGL UTILS ===================== */

function createShader(gl: WebGL2RenderingContext, type: number, src: string) {
  const sh = gl.createShader(type);
  if (!sh) return null;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (gl.getShaderParameter(sh, gl.COMPILE_STATUS)) return sh;
  console.error(gl.getShaderInfoLog(sh));
  gl.deleteShader(sh);
  return null;
}
function createProgram(
  gl: WebGL2RenderingContext,
  [vs, fs]: [string, string],
  varyings?: string[] | null,
  attribs?: Record<string, number>
) {
  const p = gl.createProgram();
  if (!p) return null;
  [gl.VERTEX_SHADER, gl.FRAGMENT_SHADER].forEach((t, i) => {
    const s = createShader(gl, t, [vs, fs][i]);
    if (s) gl.attachShader(p, s);
  });
  if (varyings) gl.transformFeedbackVaryings(p, varyings, gl.SEPARATE_ATTRIBS);
  if (attribs)
    Object.keys(attribs).forEach((a) =>
      gl.bindAttribLocation(p, attribs[a], a)
    );
  gl.linkProgram(p);
  if (gl.getProgramParameter(p, gl.LINK_STATUS)) return p;
  console.error(gl.getProgramInfoLog(p));
  gl.deleteProgram(p);
  return null;
}
function makeVertexArray(
  gl: WebGL2RenderingContext,
  bufLocNumElmPairs: Array<[WebGLBuffer, number, number]>,
  indices?: Uint16Array
) {
  const va = gl.createVertexArray();
  if (!va) return null;
  gl.bindVertexArray(va);
  for (const [buffer, loc, comps] of bufLocNumElmPairs) {
    if (loc === -1) continue;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, comps, gl.FLOAT, false, 0, 0);
  }
  if (indices) {
    const ib = gl.createBuffer();
    if (ib) {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ib);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
    }
  }
  gl.bindVertexArray(null);
  return va;
}
function makeBuffer(
  gl: WebGL2RenderingContext,
  sizeOrData: number | ArrayBufferView,
  usage: number
) {
  const buf = gl.createBuffer();
  if (!buf) throw new Error("Failed to create WebGL buffer.");
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  if (typeof sizeOrData === "number")
    gl.bufferData(gl.ARRAY_BUFFER, sizeOrData, usage);
  else gl.bufferData(gl.ARRAY_BUFFER, sizeOrData, usage);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  return buf;
}
function createAndSetupTexture(
  gl: WebGL2RenderingContext,
  min: number,
  mag: number,
  wrapS: number,
  wrapT: number
) {
  const tex = gl.createTexture();
  if (!tex) throw new Error("Failed to create WebGL texture.");
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, min);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, mag);
  return tex;
}
function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement) {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const w = Math.round(canvas.clientWidth * dpr),
    h = Math.round(canvas.clientHeight * dpr);
  const need = canvas.width !== w || canvas.height !== h;
  if (need) {
    canvas.width = w;
    canvas.height = h;
  }
  return need;
}

/* ===================== INPUT CONTROL ===================== */

type UpdateCallback = (deltaTime: number) => void;

class ArcballControl {
  constructor(
    private canvas: HTMLCanvasElement,
    private updateCallback: UpdateCallback = () => {}
  ) {
    canvas.addEventListener("pointerdown", (e) => {
      vec2.set(this.pointerPos, e.clientX, e.clientY);
      vec2.copy(this.previousPointerPos, this.pointerPos);
      this.isPointerDown = true;
    });
    canvas.addEventListener("pointerup", () => {
      this.isPointerDown = false;
    });
    canvas.addEventListener("pointerleave", () => {
      this.isPointerDown = false;
    });
    canvas.addEventListener("pointermove", (e) => {
      if (this.isPointerDown) vec2.set(this.pointerPos, e.clientX, e.clientY);
    });
    canvas.style.touchAction = "none";
  }
  public isPointerDown = false;
  public orientation = quat.create();
  public pointerRotation = quat.create();
  public rotationVelocity = 0;
  public rotationAxis = vec3.fromValues(1, 0, 0);
  public snapDirection = vec3.fromValues(0, 0, -1);
  public snapTargetDirection: vec3 | null = null;
  private pointerPos = vec2.create();
  private previousPointerPos = vec2.create();
  private _rotationVelocity = 0;
  private _combinedQuat = quat.create();
  private readonly EPS = 0.1;
  private readonly ID = quat.create();

  update(deltaTime: number, targetFrameDuration = 16) {
    const timeScale = deltaTime / targetFrameDuration + 0.00001;
    let angleFactor = timeScale;
    const snapRot = quat.create();

    if (this.isPointerDown) {
      const INT = 0.3 * timeScale,
        AMP = 5 / timeScale;
      const mid = vec2.sub(
        vec2.create(),
        this.pointerPos,
        this.previousPointerPos
      );
      vec2.scale(mid, mid, INT);
      if (vec2.sqrLen(mid) > this.EPS) {
        vec2.add(mid, this.previousPointerPos, mid);
        const p = this.project(mid),
          q = this.project(this.previousPointerPos);
        const a = vec3.normalize(vec3.create(), p),
          b = vec3.normalize(vec3.create(), q);
        vec2.copy(this.previousPointerPos, mid);
        angleFactor *= AMP;
        this.quatFromVectors(a, b, this.pointerRotation, angleFactor);
      } else {
        quat.slerp(this.pointerRotation, this.pointerRotation, this.ID, INT);
      }
    } else {
      const INT = 0.1 * timeScale;
      quat.slerp(this.pointerRotation, this.pointerRotation, this.ID, INT);
      if (this.snapTargetDirection) {
        const SNAP_INT = 0.2;
        const a = this.snapTargetDirection,
          b = this.snapDirection;
        const sqrDist = vec3.squaredDistance(a, b);
        const distFactor = Math.max(0.1, 1 - sqrDist * 10);
        angleFactor *= SNAP_INT * distFactor;
        this.quatFromVectors(a, b, snapRot, angleFactor);
      }
    }

    const combined = quat.multiply(
      quat.create(),
      snapRot,
      this.pointerRotation
    );
    this.orientation = quat.multiply(quat.create(), combined, this.orientation);
    quat.normalize(this.orientation, this.orientation);

    const RA_INT = 0.8 * timeScale;
    quat.slerp(this._combinedQuat, this._combinedQuat, combined, RA_INT);
    quat.normalize(this._combinedQuat, this._combinedQuat);

    const rad = Math.acos(this._combinedQuat[3]) * 2.0,
      s = Math.sin(rad / 2.0);
    let rv = 0;
    if (s > 0.000001) {
      rv = rad / (2 * Math.PI);
      this.rotationAxis[0] = this._combinedQuat[0] / s;
      this.rotationAxis[1] = this._combinedQuat[1] / s;
      this.rotationAxis[2] = this._combinedQuat[2] / s;
    }
    const RV_INT = 0.5 * timeScale;
    this._rotationVelocity += (rv - this._rotationVelocity) * RV_INT;
    this.rotationVelocity = this._rotationVelocity / timeScale;

    this.updateCallback(deltaTime);
  }
  private quatFromVectors(a: vec3, b: vec3, out: quat, angleFactor = 1) {
    const axis = vec3.cross(vec3.create(), a, b);
    vec3.normalize(axis, axis);
    const d = Math.max(-1, Math.min(1, vec3.dot(a, b)));
    const angle = Math.acos(d) * angleFactor;
    quat.setAxisAngle(out, axis, angle);
    return { q: out, axis, angle };
  }
  private project(pos: vec2) {
    const r = 2,
      w = this.canvas.clientWidth,
      h = this.canvas.clientHeight,
      s = Math.max(w, h) - 1;
    const x = (2 * pos[0] - w - 1) / s,
      y = (2 * pos[1] - h - 1) / s;
    let z = 0,
      xySq = x * x + y * y,
      rSq = r * r;
    if (xySq <= rSq / 2.0) z = Math.sqrt(rSq - xySq);
    else z = rSq / Math.sqrt(xySq);
    return vec3.fromValues(-x, y, z);
  }
}

/* ===================== TYPES ===================== */

type MediaType = "image" | "gif" | "video";
interface MenuItem {
  mediaType: MediaType;
  src: string;
  link: string;
  title: string;
  description: string;
  poster?: string; // for video
}
type ActiveItemCallback = (index: number) => void;
type MovementChangeCallback = (isMoving: boolean) => void;
type InitCallback = (instance: InfiniteGridMenu) => void;

interface Camera {
  matrix: mat4;
  near: number;
  far: number;
  fov: number;
  aspect: number;
  position: vec3;
  up: vec3;
  matrices: { view: mat4; projection: mat4; inversProjection: mat4 };
}

/* ===================== CORE ===================== */

class InfiniteGridMenu {
  private gl: WebGL2RenderingContext | null = null;
  private discProgram: WebGLProgram | null = null;
  private discVAO: WebGLVertexArrayObject | null = null;
  private discBuffers!: {
    vertices: Float32Array;
    indices: Uint16Array;
    uvs: Float32Array;
  };
  private icoGeo!: IcosahedronGeometry;
  private discGeo!: DiscGeometry;
  private worldMatrix = mat4.create();
  private tex: WebGLTexture | null = null;
  private control!: ArcballControl;

  private discLocations!: {
    aModelPosition: number;
    aModelUvs: number;
    aInstanceMatrix: number;
    uWorldMatrix: WebGLUniformLocation | null;
    uViewMatrix: WebGLUniformLocation | null;
    uProjectionMatrix: WebGLUniformLocation | null;
    uCameraPosition: WebGLUniformLocation | null;
    uRotationAxisVelocity: WebGLUniformLocation | null;
    uTex: WebGLUniformLocation | null;
    uItemCount: WebGLUniformLocation | null;
    uAtlasSize: WebGLUniformLocation | null;
  };

  private discInstances!: {
    matricesArray: Float32Array;
    matrices: Float32Array[];
    buffer: WebGLBuffer | null;
  };
  private instancePositions: vec3[] = [];
  private DISC_INSTANCE_COUNT = 0;

  private atlasSize = 1;
  private cellSize = 256;

  private images = new Map<number, HTMLImageElement>(); // for image/gif
  private videos = new Map<number, HTMLVideoElement>(); // for video
  private offscreen = document.createElement("canvas");
  private offctx = this.offscreen.getContext("2d")!;

  private _time = 0;
  private _deltaTime = 0;
  private _frames = 0;
  private movementActive = false;
  private rafId: number | null = null;

  private TARGET_FRAME_DURATION = 1000 / 60;
  private SCHEDULE_MS = 66; // ~15fps updates for active media
  private lastAtlasUpdate = 0;
  private currentActiveIndex = -1;

  private SPHERE_RADIUS = 2;

  public camera: Camera = {
    matrix: mat4.create(),
    near: 0.1,
    far: 40,
    fov: Math.PI / 4,
    aspect: 1,
    position: vec3.fromValues(0, 0, 3),
    up: vec3.fromValues(0, 1, 0),
    matrices: {
      view: mat4.create(),
      projection: mat4.create(),
      inversProjection: mat4.create(),
    },
  };
  public smoothRotationVelocity = 0;

  constructor(
    private canvas: HTMLCanvasElement,
    private items: MenuItem[],
    private onActiveItemChange: ActiveItemCallback,
    private onMovementChange: MovementChangeCallback,
    onInit?: InitCallback
  ) {
    this.init(onInit);
  }

  public resize() {
    const needs = resizeCanvasToDisplaySize(this.canvas);
    if (!this.gl) return;
    if (needs)
      this.gl.viewport(
        0,
        0,
        this.gl.drawingBufferWidth,
        this.gl.drawingBufferHeight
      );
    this.updateProjectionMatrix();
  }
  public run(time = 0) {
    this._deltaTime = Math.min(32, time - this._time);
    this._time = time;
    this._frames += this._deltaTime / this.TARGET_FRAME_DURATION;

    this.animate(this._deltaTime);
    this.render();

    this.rafId = requestAnimationFrame((t) => this.run(t));
  }
  public dispose() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.videos.forEach((v) => {
      try {
        v.pause();
      } catch {}
    });
  }

  private init(onInit?: InitCallback) {
    const gl = this.canvas.getContext("webgl2", {
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    if (!gl) throw new Error("No WebGL 2 context!");
    this.gl = gl;

    this.discProgram = createProgram(
      gl,
      [discVertShaderSource, discFragShaderSource],
      null,
      {
        aModelPosition: 0,
        aModelUvs: 2,
        aInstanceMatrix: 3,
      }
    );

    this.discLocations = {
      aModelPosition: gl.getAttribLocation(this.discProgram!, "aModelPosition"),
      aModelUvs: gl.getAttribLocation(this.discProgram!, "aModelUvs"),
      aInstanceMatrix: gl.getAttribLocation(
        this.discProgram!,
        "aInstanceMatrix"
      ),
      uWorldMatrix: gl.getUniformLocation(this.discProgram!, "uWorldMatrix"),
      uViewMatrix: gl.getUniformLocation(this.discProgram!, "uViewMatrix"),
      uProjectionMatrix: gl.getUniformLocation(
        this.discProgram!,
        "uProjectionMatrix"
      ),
      uCameraPosition: gl.getUniformLocation(
        this.discProgram!,
        "uCameraPosition"
      ),
      uRotationAxisVelocity: gl.getUniformLocation(
        this.discProgram!,
        "uRotationAxisVelocity"
      ),
      uTex: gl.getUniformLocation(this.discProgram!, "uTex"),
      uItemCount: gl.getUniformLocation(this.discProgram!, "uItemCount"),
      uAtlasSize: gl.getUniformLocation(this.discProgram!, "uAtlasSize"),
    };

    this.discGeo = new DiscGeometry(56, 1);
    this.discBuffers = {
      vertices: this.discGeo.vertexData,
      indices: this.discGeo.indexData,
      uvs: this.discGeo.uvData,
    };
    this.discVAO = makeVertexArray(
      gl,
      [
        [
          makeBuffer(gl, this.discBuffers.vertices, gl.STATIC_DRAW),
          this.discLocations.aModelPosition,
          3,
        ],
        [
          makeBuffer(gl, this.discBuffers.uvs, gl.STATIC_DRAW),
          this.discLocations.aModelUvs,
          2,
        ],
      ],
      this.discBuffers.indices
    );

    this.icoGeo = new IcosahedronGeometry();
    this.icoGeo.subdivide(1).spherize(this.SPHERE_RADIUS);
    this.instancePositions = this.icoGeo.vertices.map((v) => v.position);
    this.DISC_INSTANCE_COUNT = this.icoGeo.vertices.length;
    this.initDiscInstances(
      this.DISC_INSTANCE_COUNT,
      this.discLocations.aInstanceMatrix
    );

    this.initTexture().then(() => {
      /* ready */
    });
    this.control = new ArcballControl(this.canvas, (dt) =>
      this.onControlUpdate(dt)
    );
    this.updateCameraMatrix();
    this.updateProjectionMatrix();
    this.resize();

    // iOS media unlock (play inline after first touch)
    this.canvas.addEventListener(
      "pointerdown",
      () => {
        this.videos.forEach((v) => {
          try {
            v.play().catch(() => {});
          } catch {}
        });
      },
      { once: true }
    );

    if (onInit) onInit(this);
  }

  private async initTexture() {
    if (!this.gl) return;
    const gl = this.gl;

    // No mipmaps for dynamic updates (iOS friendly)
    this.tex = createAndSetupTexture(
      gl,
      gl.LINEAR,
      gl.LINEAR,
      gl.CLAMP_TO_EDGE,
      gl.CLAMP_TO_EDGE
    );

    const itemCount = Math.max(1, this.items.length);
    this.atlasSize = Math.ceil(Math.sqrt(itemCount));

    const maxTex = gl.getParameter(gl.MAX_TEXTURE_SIZE) as number;
    this.cellSize = Math.max(
      64,
      Math.floor(Math.min(512, maxTex / this.atlasSize))
    );

    const atlasCanvas = document.createElement("canvas");
    const ctx = atlasCanvas.getContext("2d")!;
    atlasCanvas.width = this.atlasSize * this.cellSize;
    atlasCanvas.height = this.atlasSize * this.cellSize;

    this.offscreen.width = this.cellSize;
    this.offscreen.height = this.cellSize;

    const drawCoverTo = (
      dctx: CanvasRenderingContext2D,
      source: CanvasImageSource,
      sw: number,
      sh: number,
      dx: number,
      dy: number
    ) => {
      const s = Math.max(this.cellSize / sw, this.cellSize / sh);
      const w = sw * s,
        h = sh * s;
      const ox = dx + (this.cellSize - w) / 2,
        oy = dy + (this.cellSize - h) / 2;
      dctx.drawImage(source, 0, 0, sw, sh, ox, oy, w, h);
    };

    const loadImage = (src: string) =>
      new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        if (/^https?:\/\//i.test(src)) img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });

    const createVideo = (src: string, poster?: string) =>
      new Promise<HTMLVideoElement>((resolve, reject) => {
        const v = document.createElement("video");
        if (/^https?:\/\//i.test(src)) v.crossOrigin = "anonymous";
        v.muted = true;
        v.loop = true;
        (v as any).playsInline = true;
        v.setAttribute("playsinline", "");
        v.preload = "auto";
        if (poster) v.poster = poster;
        v.src = src;
        const onErr = () => reject(new Error("video load error"));
        v.addEventListener("error", onErr, { once: true });
        v.addEventListener("loadeddata", () => resolve(v), { once: true });
        // Resolve anyway after timeout to avoid hanging if Safari with poster only
        setTimeout(() => resolve(v), 2000);
      });

    // Fill atlas initially
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const x = (i % this.atlasSize) * this.cellSize;
      const y = Math.floor(i / this.atlasSize) * this.cellSize;

      try {
        if (item.mediaType === "video") {
          // Try poster first
          if (item.poster) {
            const img = await loadImage(item.poster);
            drawCoverTo(ctx, img, img.width, img.height, x, y);
          } else {
            // Use first available frame after loadeddata
            const vid = await createVideo(item.src);
            this.videos.set(i, vid);
            const vw = Math.max(vid.videoWidth, 1),
              vh = Math.max(vid.videoHeight, 1);
            drawCoverTo(ctx, vid, vw, vh, x, y);
          }
          // Create and store video even if poster used (so we can animate later)
          if (!this.videos.has(i)) {
            const v = document.createElement("video");
            if (/^https?:\/\//i.test(item.src)) v.crossOrigin = "anonymous";
            v.muted = true;
            v.loop = true;
            (v as any).playsInline = true;
            v.setAttribute("playsinline", "");
            v.preload = "auto";
            v.src = item.src;
            this.videos.set(i, v);
          }
        } else {
          // image or gif
          const img = await loadImage(item.src);
          this.images.set(i, img);
          drawCoverTo(ctx, img, img.width, img.height, x, y);
        }
      } catch {
        // fallback checkerboard
        ctx.fillStyle = "#111";
        ctx.fillRect(x, y, this.cellSize, this.cellSize);
        ctx.fillStyle = "#333";
        ctx.fillRect(x, y, this.cellSize / 2, this.cellSize / 2);
        ctx.fillRect(
          x + this.cellSize / 2,
          y + this.cellSize / 2,
          this.cellSize / 2,
          this.cellSize / 2
        );
      }
    }

    gl.bindTexture(gl.TEXTURE_2D, this.tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      atlasCanvas
    );
  }

  private updateActiveMediaTexture(nowMs: number) {
    if (!this.gl || !this.tex) return;
    if (nowMs - this.lastAtlasUpdate < this.SCHEDULE_MS) return;
    this.lastAtlasUpdate = nowMs;

    const idx = this.currentActiveIndex;
    if (idx < 0 || idx >= this.items.length) return;

    const item = this.items[idx];
    const gl = this.gl;

    const x = (idx % this.atlasSize) * this.cellSize;
    const y = Math.floor(idx / this.atlasSize) * this.cellSize;

    const drawToOffscreenAndUpload = (
      source: CanvasImageSource,
      sw: number,
      sh: number
    ) => {
      try {
        this.offctx.clearRect(0, 0, this.cellSize, this.cellSize);
        // Cover into offscreen
        const s = Math.max(this.cellSize / sw, this.cellSize / sh);
        const w = sw * s,
          h = sh * s;
        const ox = (this.cellSize - w) / 2,
          oy = (this.cellSize - h) / 2;
        this.offctx.drawImage(source, 0, 0, sw, sh, ox, oy, w, h);

        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
        gl.texSubImage2D(
          gl.TEXTURE_2D,
          0,
          x,
          y,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          this.offscreen
        );
      } catch {
        // likely CORS taint → skip updates silently
      }
    };

    if (item.mediaType === "video") {
      const v = this.videos.get(idx);
      if (v && v.readyState >= 2) {
        // ensure playing (requires gesture; we start on first pointerdown)
        try {
          if (v.paused) v.play().catch(() => {});
        } catch {}
        const vw = Math.max(v.videoWidth, 1),
          vh = Math.max(v.videoHeight, 1);
        drawToOffscreenAndUpload(v, vw, vh);
      }
    } else if (item.mediaType === "gif") {
      const img = this.images.get(idx);
      if (img && img.complete) {
        // Animated GIFs advance on their own; redraw current frame
        drawToOffscreenAndUpload(
          img,
          Math.max(img.naturalWidth, 1),
          Math.max(img.naturalHeight, 1)
        );
      }
    }
  }

  private initDiscInstances(count: number, aInstanceMatrixLoc: number) {
    if (!this.gl || !this.discVAO) return;
    const gl = this.gl;

    const matricesArray = new Float32Array(count * 16);
    const matrices: Float32Array[] = [];
    for (let i = 0; i < count; i++) {
      const arr = new Float32Array(matricesArray.buffer, i * 16 * 4, 16);
      mat4.identity(arr as unknown as mat4);
      matrices.push(arr);
    }
    this.discInstances = { matricesArray, matrices, buffer: gl.createBuffer() };

    gl.bindVertexArray(this.discVAO);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.discInstances.buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      this.discInstances.matricesArray.byteLength,
      gl.DYNAMIC_DRAW
    );
    const slots = 4,
      bytesPerMat = 16 * 4;
    for (let j = 0; j < slots; j++) {
      const loc = aInstanceMatrixLoc + j;
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 4, gl.FLOAT, false, bytesPerMat, j * 4 * 4);
      gl.vertexAttribDivisor(loc, 1);
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindVertexArray(null);
  }

  private animate(deltaTime: number) {
    if (!this.gl) return;
    this.control.update(deltaTime, this.TARGET_FRAME_DURATION);

    const positions = this.instancePositions.map((p) =>
      vec3.transformQuat(vec3.create(), p, this.control.orientation)
    );
    const scale = 0.25,
      SCALE_INT = 0.6;

    positions.forEach((p, ndx) => {
      const s =
        (Math.abs(p[2]) / this.SPHERE_RADIUS) * SCALE_INT + (1 - SCALE_INT);
      const finalScale = s * scale;
      const m = mat4.create();
      mat4.multiply(
        m,
        m,
        mat4.fromTranslation(mat4.create(), vec3.negate(vec3.create(), p))
      );
      mat4.multiply(
        m,
        m,
        mat4.targetTo(mat4.create(), [0, 0, 0], p, [0, 1, 0])
      );
      mat4.multiply(
        m,
        m,
        mat4.fromScaling(mat4.create(), [finalScale, finalScale, finalScale])
      );
      mat4.multiply(
        m,
        m,
        mat4.fromTranslation(mat4.create(), [0, 0, -this.SPHERE_RADIUS])
      );
      mat4.copy(this.discInstances.matrices[ndx], m);
    });

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.discInstances.buffer);
    this.gl.bufferSubData(
      this.gl.ARRAY_BUFFER,
      0,
      this.discInstances.matricesArray
    );
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);

    this.smoothRotationVelocity = this.control.rotationVelocity;
  }

  private render() {
    if (!this.gl || !this.discProgram) return;
    const gl = this.gl;
    const L = this.discLocations;

    // Update active media cell at ~15fps
    this.updateActiveMediaTexture(performance.now());

    gl.useProgram(this.discProgram);
    gl.enable(gl.CULL_FACE);
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    if (L.uWorldMatrix)
      gl.uniformMatrix4fv(L.uWorldMatrix, false, this.worldMatrix);
    if (L.uViewMatrix)
      gl.uniformMatrix4fv(L.uViewMatrix, false, this.camera.matrices.view);
    if (L.uProjectionMatrix)
      gl.uniformMatrix4fv(
        L.uProjectionMatrix,
        false,
        this.camera.matrices.projection
      );
    if (L.uCameraPosition)
      gl.uniform3f(
        L.uCameraPosition,
        this.camera.position[0],
        this.camera.position[1],
        this.camera.position[2]
      );
    if (L.uRotationAxisVelocity)
      gl.uniform4f(
        L.uRotationAxisVelocity,
        this.control.rotationAxis[0],
        this.control.rotationAxis[1],
        this.control.rotationAxis[2],
        this.smoothRotationVelocity * 1.1
      );
    if (L.uItemCount) gl.uniform1i(L.uItemCount, this.items.length);
    if (L.uAtlasSize) gl.uniform1i(L.uAtlasSize, this.atlasSize);
    if (L.uTex) gl.uniform1i(L.uTex, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.tex);

    gl.bindVertexArray(this.discVAO);
    gl.drawElementsInstanced(
      gl.TRIANGLES,
      this.discBuffers.indices.length,
      gl.UNSIGNED_SHORT,
      0,
      this.DISC_INSTANCE_COUNT
    );
    gl.bindVertexArray(null);
  }

  private updateCameraMatrix() {
    mat4.targetTo(
      this.camera.matrix,
      this.camera.position,
      [0, 0, 0],
      this.camera.up
    );
    mat4.invert(this.camera.matrices.view, this.camera.matrix);
  }
  private updateProjectionMatrix() {
    if (!this.gl) return;
    const c = this.gl.canvas as HTMLCanvasElement;
    this.camera.aspect = c.clientWidth / c.clientHeight;
    const h = this.SPHERE_RADIUS * 0.35,
      d = this.camera.position[2];
    this.camera.fov =
      this.camera.aspect > 1
        ? 2 * Math.atan(h / d)
        : 2 * Math.atan(h / this.camera.aspect / d);
    mat4.perspective(
      this.camera.matrices.projection,
      this.camera.fov,
      this.camera.aspect,
      this.camera.near,
      this.camera.far
    );
    mat4.invert(
      this.camera.matrices.inversProjection,
      this.camera.matrices.projection
    );
  }

  private onControlUpdate(deltaTime: number) {
    const timeScale = deltaTime / this.TARGET_FRAME_DURATION + 0.0001;
    let damping = 5 / timeScale;
    let cameraTargetZ = 3;

    const isMoving =
      this.control.isPointerDown ||
      Math.abs(this.smoothRotationVelocity) > 0.01;
    if (isMoving !== this.movementActive) {
      this.movementActive = isMoving;
      this.onMovementChange(isMoving);
    }

    if (!this.control.isPointerDown) {
      const nearest = this.findNearestVertexIndex();
      const itemIndex = nearest % Math.max(1, this.items.length);
      if (this.currentActiveIndex !== itemIndex) {
        this.currentActiveIndex = itemIndex;
        this.onActiveItemChange(itemIndex);
      }
      const snapDir = vec3.normalize(
        vec3.create(),
        this.getVertexWorldPosition(nearest)
      );
      this.control.snapTargetDirection = snapDir;
    } else {
      cameraTargetZ += this.control.rotationVelocity * 80 + 2.5;
      damping = 7 / timeScale;
    }

    this.camera.position[2] +=
      (cameraTargetZ - this.camera.position[2]) / damping;
    this.updateCameraMatrix();
  }

  private findNearestVertexIndex() {
    const n = this.control.snapDirection;
    const inv = quat.conjugate(quat.create(), this.control.orientation);
    const nt = vec3.transformQuat(vec3.create(), n, inv);
    let maxD = -1,
      nearest = 0;
    for (let i = 0; i < this.instancePositions.length; i++) {
      const d = vec3.dot(nt, this.instancePositions[i]);
      if (d > maxD) {
        maxD = d;
        nearest = i;
      }
    }
    return nearest;
  }
  private getVertexWorldPosition(index: number) {
    const p = this.instancePositions[index];
    return vec3.transformQuat(vec3.create(), p, this.control.orientation);
  }
}

/* ===================== REACT WRAPPER ===================== */

const defaultItems: MenuItem[] = [
  {
    mediaType: "image",
    src: "/assets/A1.png",
    link: "/",
    title: "Axis Solar",
    description: "UI / Branding",
  },
];

interface InfiniteMenuProps {
  items?: MenuItem[];
}

const InfiniteMenu: FC<InfiniteMenuProps> = ({ items = [] }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(
    null
  ) as MutableRefObject<HTMLCanvasElement | null>;
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [isMoving, setIsMoving] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    let sketch: InfiniteGridMenu | null = null;

    const handleActiveItem = (index: number) => {
      const list = items.length ? items : defaultItems;
      if (!list.length) return;
      setActiveItem(list[index % list.length]);
    };

    if (canvas) {
      sketch = new InfiniteGridMenu(
        canvas,
        items.length ? items : defaultItems,
        handleActiveItem,
        setIsMoving,
        (sk) => sk.run()
      );
    }

    const handleResize = () => {
      if (sketch) sketch.resize();
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (sketch) sketch.dispose();
    };
  }, [items]);

  const handleButtonClick = () => {
    if (!activeItem?.link) return;
    const url = activeItem.link.trim();
    if (/^https?:\/\//i.test(url)) window.open(url, "_blank");
    else window.location.href = url;
  };

  return (
    <div className="relative w-full text-white">
      <canvas
        id="infinite-grid-menu-canvas"
        ref={canvasRef}
        className="cursor-grab w-full h-[80svh] overflow-hidden relative outline-none active:cursor-grabbing"
      />
      {activeItem && (
        <>
          <h2
            className={`select-none absolute text-3xl lg:text-4xl font-heading-font left-[1.6em] lg:left-1/3 bottom-0 lg:bottom-1/2 transform lg:-translate-x-1/3 translate-y-1/2 transition-all ${
              isMoving
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            }`}
          >
            {activeItem.title}
          </h2>
          {/* <p
            className={`select-none absolute max-w-[10ch] text-sm bottom-0 lg:top-1/2 right-10 transition-all ${
              isMoving
                ? "opacity-0 pointer-events-none translate-x-[-60%] lg:-translate-y-1/2"
                : "opacity-100 pointer-events-auto translate-x-[-90%] lg:-translate-y-1/2"
            }`}
          >
            {activeItem.description}
          </p> */}
          <div
            onClick={handleButtonClick}
            className={`absolute left-1/2 z-10 w-[60px] h-[60px] grid place-items-center bg-[#00ffff] border-[5px] border-black rounded-full cursor-pointer transition-all ${
              isMoving
                ? "bottom-[-80px] opacity-0 pointer-events-none scale-0 -translate-x-1/2"
                : "bottom-[4.8em] opacity-100 pointer-events-auto scale-100 -translate-x-1/2"
            }`}
            aria-label="Open project"
            title="Open"
          >
            <p className="select-none relative text-[#060010] top-[2px] text-[26px]">
              &#x2197;
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default InfiniteMenu;
