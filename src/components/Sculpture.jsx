import { useEffect, useRef, useState } from 'react';
import { Pause, Play, MoveUpRight } from 'lucide-react';
export function Sculpture({ motion }) {
  const host = useRef(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    const el = host.current;
    async function createScene() {
      try {
        const THREE = await import('./sceneEngine.js');
        const response = await fetch('/fonts/helvetiker-bold.json');
        if (!response.ok) throw new Error('Monogram font unavailable');
        const font = new THREE.FontLoader().parse(await response.json());
        if (disposed) return;
        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: 'low-power',
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        el.appendChild(renderer.domElement);
        cleanup = () => {
          renderer.dispose();
          renderer.domElement.remove();
        };
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(37, 1, 0.1, 50);
        camera.position.set(0, 0, 7.8);
        const group = new THREE.Group();
        scene.add(group);
        const geometry = new THREE.TextGeometry('TJM', {
          font,
          size: 1.25,
          depth: 0.32,
          curveSegments: 8,
          bevelEnabled: true,
          bevelThickness: 0.035,
          bevelSize: 0.025,
          bevelSegments: 3,
        });
        geometry.center();
        const material = new THREE.MeshStandardMaterial({
          color: 0x438fe8,
          metalness: 0.67,
          roughness: 0.26,
        });
        group.add(new THREE.Mesh(geometry, material));
        const wireGeometry = geometry.clone();
        const wireMaterial = new THREE.MeshBasicMaterial({
          color: 0xaad5ff,
          wireframe: true,
          transparent: true,
          opacity: 0.035,
        });
        group.add(new THREE.Mesh(wireGeometry, wireMaterial));
        group.rotation.set(0.12, -0.18, 0);
        scene.add(new THREE.AmbientLight(0x8baede, 1.5));
        const key = new THREE.DirectionalLight(0xe8f3ff, 6);
        key.position.set(-3, 5, 5);
        scene.add(key);
        const rim = new THREE.DirectionalLight(0x246fee, 4);
        rim.position.set(4, -1, -2);
        scene.add(rim);
        const fill = new THREE.DirectionalLight(0xffffff, 2);
        fill.position.set(3, 1, 4);
        scene.add(fill);
        let visible = true;
        let frame = 0;
        let last = 0;
        let elapsed = 0;
        const target = { x: 0, y: 0 };
        const pointer = (event) => {
          if (motion.reduced) return;
          const rect = el.getBoundingClientRect();
          target.x = (event.clientX - rect.left) / rect.width - 0.5;
          target.y = (event.clientY - rect.top) / rect.height - 0.5;
        };
        const leave = () => {
          target.x = 0;
          target.y = 0;
        };
        const render = () => renderer.render(scene, camera);
        const resize = () => {
          const { width, height } = el.getBoundingClientRect();
          if (!width || !height) return;
          renderer.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          render();
        };
        const tick = (timestamp) => {
          frame = 0;
          if (disposed || motion.reduced || !visible || document.hidden) return;
          const delta = last ? Math.min((timestamp - last) / 1000, 0.05) : 0;
          last = timestamp;
          elapsed += delta;
          group.rotation.y +=
            (-0.18 + Math.sin(elapsed * 0.45) * 0.12 + target.x * 0.45 - group.rotation.y) * 0.04;
          group.rotation.x += (0.12 + target.y * 0.2 - group.rotation.x) * 0.04;
          group.rotation.z += (Math.sin(elapsed * 0.4) * 0.025 - group.rotation.z) * 0.04;
          group.position.y = Math.sin(elapsed * 0.7) * 0.09;
          render();
          frame = requestAnimationFrame(tick);
        };
        const start = () => {
          if (!frame && !disposed && !motion.reduced && visible && !document.hidden) {
            last = 0;
            frame = requestAnimationFrame(tick);
          }
        };
        const visibility = () => {
          if (document.hidden) {
            cancelAnimationFrame(frame);
            frame = 0;
          } else start();
        };
        const observer = new IntersectionObserver((entries) => {
          visible = entries[0].isIntersecting;
          if (visible) start();
          else {
            cancelAnimationFrame(frame);
            frame = 0;
          }
        });
        observer.observe(el);
        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(el);
        el.addEventListener('pointermove', pointer);
        el.addEventListener('pointerleave', leave);
        document.addEventListener('visibilitychange', visibility);
        const contextLost = (event) => {
          event.preventDefault();
          cancelAnimationFrame(frame);
          frame = 0;
          setReady(false);
        };
        renderer.domElement.addEventListener('webglcontextlost', contextLost);
        cleanup = () => {
          cancelAnimationFrame(frame);
          observer.disconnect();
          resizeObserver.disconnect();
          el.removeEventListener('pointermove', pointer);
          el.removeEventListener('pointerleave', leave);
          document.removeEventListener('visibilitychange', visibility);
          renderer.domElement.removeEventListener('webglcontextlost', contextLost);
          geometry.dispose();
          material.dispose();
          wireGeometry.dispose();
          wireMaterial.dispose();
          renderer.dispose();
          renderer.domElement.remove();
        };
        resize();
        start();
        setReady(true);
      } catch {
        cleanup();
        if (!disposed) setReady(false);
      }
    }
    createScene();
    return () => {
      disposed = true;
      cleanup();
    };
  }, [motion.reduced]);
  return (
    <div className="sculpture-panel">
      <div className="sculpture-label">
        <span className="tiny-dot" /> CODE MEETS CRAFT <MoveUpRight size={13} />
      </div>
      <div
        ref={host}
        className={`sculpture-canvas ${ready ? 'is-ready' : ''}`}
        role="img"
        aria-label="A blue three-dimensional TJM monogram representing Tadiwanashe Joshua Mabharani"
      >
        <div className="sculpture-fallback" aria-hidden="true">
          TJM
        </div>
      </div>
      <div className="sculpture-footer">
        <span>
          {ready
            ? motion.reduced
              ? 'A MOMENT OF STILLNESS'
              : 'MOVE YOUR CURSOR TO EXPLORE'
            : 'TADIWANASHE JOSHUA MABHARANI'}
        </span>
        <button
          className="icon-button"
          onClick={motion.toggleMotion}
          disabled={motion.systemReduced}
          aria-label={motion.reduced ? 'Play animation' : 'Pause animation'}
          title={motion.systemReduced ? 'Motion reduced by your device setting' : undefined}
        >
          {motion.reduced ? <Play size={14} /> : <Pause size={14} />}
        </button>
      </div>
    </div>
  );
}
