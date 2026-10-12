// Export only the Three.js primitives used by the hero so the lazy chunk can be tree-shaken.
export {
  WebGLRenderer,
  SRGBColorSpace,
  Scene,
  PerspectiveCamera,
  Group,
  MeshStandardMaterial,
  MeshBasicMaterial,
  Mesh,
  AmbientLight,
  DirectionalLight,
} from 'three';

export { FontLoader } from 'three/addons/loaders/FontLoader.js';
export { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
