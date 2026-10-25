import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const StethoscopeHero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [loadState, setLoadState] = useState('loading'); // 'loading' | 'success' | 'error'

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup - well framed with comfortable margins
    const width = container.clientWidth || 380;
    const height = container.clientHeight || 400;
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 50);
    camera.position.set(0, 0.05, 4.1);

    // 3. Renderer setup
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
    } catch {
      requestAnimationFrame(() => setLoadState('error'));
      return;
    }

    // 4. Balanced Medical Lighting (no blown-out highlights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    const cyanRim = new THREE.DirectionalLight(0x38bdf8, 2.4);
    cyanRim.position.set(-3, 2, -2);
    scene.add(cyanRim);

    const bottomFill = new THREE.DirectionalLight(0x0284c7, 0.8);
    bottomFill.position.set(0, -3, 2);
    scene.add(bottomFill);

    // 5. Model Loading, Material Optimization & Sizing
    let modelRoot = null;
    let baseRotationY = -0.3;
    const loader = new GLTFLoader();

    loader.load(
      '/models/Stetoskop.glb',
      (gltf) => {
        const model = gltf.scene;

        // Customise materials for clear pediatric aesthetic (Cyan tube + Silver chrome)
        model.traverse((child) => {
          if (child.isMesh && child.material) {
            const matName = child.material.name || '';
            if (matName.includes('013')) {
              // Binaural metallic tubes and chestpiece metal
              child.material = new THREE.MeshStandardMaterial({
                color: new THREE.Color(0xf8fafc),
                metalness: 0.92,
                roughness: 0.18,
              });
            } else if (matName.includes('012') || matName.includes('017')) {
              // Main pediatric stethoscope tubing: friendly medical blue
              child.material = new THREE.MeshStandardMaterial({
                color: new THREE.Color(0x0284c7),
                metalness: 0.1,
                roughness: 0.35,
              });
            } else {
              // Earpieces and bell diaphragm rim: clean clinical porcelain white
              child.material = new THREE.MeshStandardMaterial({
                color: new THREE.Color(0xffffff),
                metalness: 0.08,
                roughness: 0.25,
              });
            }
          }
        });

        // Compute bounds and scale to fit comfortably inside container
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        
        // Sized appropriately (reduced to fit without edge clipping)
        const targetScale = 2.05 / (maxDim || 1);
        model.scale.setScalar(targetScale);

        // Center model geometry perfectly
        const scaledBox = new THREE.Box3().setFromObject(model);
        const scaledCenter = scaledBox.getCenter(new THREE.Vector3());
        model.position.sub(scaledCenter);

        // Wrapper pivot for pleasant presentation angle
        const pivotGroup = new THREE.Group();
        pivotGroup.position.set(0, 0, 0);
        pivotGroup.rotation.set(0.25, baseRotationY, 0);
        pivotGroup.add(model);

        scene.add(pivotGroup);
        modelRoot = pivotGroup;
        setLoadState('success');
      },
      undefined,
      (err) => {
        console.warn('Stetoskop.glb load fallback:', err);
        setLoadState('error');
      }
    );

    // 6. Restrained Motion & Auto-Rotation Animation
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0.22;
    let targetRotationY = baseRotationY;
    let autoRotationAngle = baseRotationY;
    let isVisible = true;
    let animId = null;
    const startTime = performance.now();

    const handlePointerMove = (e) => {
      if (prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 0.3;
      mouseY = y * 0.2;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // 7. Intersection Observer for Performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // 8. Render loop with subtle floating
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = (performance.now() - startTime) * 0.001;

      if (modelRoot && !prefersReducedMotion) {
        // Gentle, calm floating
        modelRoot.position.y = Math.sin(elapsed * 1.2) * 0.035;

        // Continuous smooth auto-rotation animation
        autoRotationAngle += 0.007;

        // Smooth damping towards auto-rotation angle + subtle mouse parallax
        targetRotationY += (autoRotationAngle + mouseX - targetRotationY) * 0.05;
        targetRotationX += (0.22 + mouseY - targetRotationX) * 0.05;

        modelRoot.rotation.y = targetRotationY;
        modelRoot.rotation.x = targetRotationX;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Handling
    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 10. Cleanup
    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', handlePointerMove);
      observer.disconnect();
      resizeObserver.disconnect();

      if (renderer) {
        renderer.dispose();
      }
      scene.clear();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] flex items-center justify-center select-none overflow-hidden"
      aria-label="3D Pediatric Stethoscope"
      role="img"
    >
      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full max-w-full max-h-full transition-opacity duration-700 ${
          loadState === 'success' ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Loading Skeleton */}
      {loadState === 'loading' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-[#38BDF8]/20 border-t-[#38BDF8] animate-spin" />
          <span className="text-xs font-medium text-slate-300 tracking-wider">
            Loading Stethoscope View...
          </span>
        </div>
      )}

      {/* Fallback View (If WebGL or Model fails) */}
      {loadState === 'error' && (
        <div className="absolute inset-4 rounded-3xl bg-[#0B2345]/90 border border-white/10 p-6 flex flex-col items-center justify-center text-center shadow-lg">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] flex items-center justify-center text-white mb-3 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
              <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
              <circle cx="20" cy="10" r="2" />
            </svg>
          </div>
          <h4 className="text-base font-bold text-white mb-1">Dr. Janaki S</h4>
          <p className="text-xs text-slate-300 max-w-xs">
            Paediatrician &amp; Senior Resident · SMVMCH Puducherry
          </p>
        </div>
      )}
    </div>
  );
};

export default StethoscopeHero;
