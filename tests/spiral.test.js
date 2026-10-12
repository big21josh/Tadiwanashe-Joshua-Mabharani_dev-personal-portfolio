import test from 'node:test';
import assert from 'node:assert/strict';
import { createProjectCoil } from '../src/components/projectCoilEngine.js';

test('spiral fails explicitly when WebGL is unavailable', () => {
  assert.throws(() => createProjectCoil({ getContext: () => null }, {
    items: [], progressRef: { current: 0 },
  }), /WebGL unavailable/);
});

test('spiral renders its first frame, stops while paused and cleans up', () => {
  const frames = new Map();
  let next = 0;
  let clears = 0;
  let deleted = 0;
  const gl = new Proxy({
    getShaderParameter: () => true,
    getProgramParameter: () => true,
    getExtension: () => null,
    clear: () => clears++,
    deleteBuffer: () => deleted++,
  }, { get: (target, key) => key in target ? target[key] : () => ({}) });
  const saved = new Map();
  const install = (name, value) => {
    saved.set(name, Object.getOwnPropertyDescriptor(globalThis, name));
    Object.defineProperty(globalThis, name, { configurable: true, writable: true, value });
  };
  try {
    install('window', { devicePixelRatio: 1, innerWidth: 1280 });
    install('document', { hidden: false, addEventListener() {}, removeEventListener() {} });
    install('ResizeObserver', class { observe() {} disconnect() {} });
    install('IntersectionObserver', class { observe() {} disconnect() {} });
    install('Image', class {});
    install('requestAnimationFrame', callback => { frames.set(++next, callback); return next; });
    install('cancelAnimationFrame', id => frames.delete(id));
    const pausedRef = { current: true };
    const canvas = { getContext: () => gl, clientWidth: 1280, clientHeight: 900,
      style: {}, addEventListener() {}, removeEventListener() {} };
    const engine = createProjectCoil(canvas, {
      items: [{ image: '/project.jpg' }], progressRef: { current: 0 }, pausedRef,
    });
    const tick = () => {
      const [id, callback] = frames.entries().next().value;
      frames.delete(id);
      callback(performance.now() + 16);
    };
    assert.doesNotThrow(tick);
    assert.equal(clears, 1);
    assert.equal(frames.size, 0);
    pausedRef.current = false;
    engine.refresh();
    tick();
    assert.equal(frames.size, 1);
    engine.dispose();
    assert.equal(frames.size, 0);
    assert.equal(deleted, 3);
  } finally {
    for (const [name, descriptor] of saved) {
      if (descriptor) Object.defineProperty(globalThis, name, descriptor);
      else delete globalThis[name];
    }
  }
});
