import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import KnowledgeCoreScene from './KnowledgeCoreScene.jsx';
import Hero3DFallback from './Hero3DFallback.jsx';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver.js';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js';

// Detect WebGL capability safely in browser
function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

export default function Hero3D() {
  const navigate = useNavigate();
  const prefersReduced = usePrefersReducedMotion();
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.05 });
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setHasWebGL(isWebGLAvailable());
  }, []);

  const handleSelectSemester = (semesterId) => {
    navigate(`/semester/${semesterId}`);
  };

  // If reduced motion is requested or WebGL is not available, return static SVG fallback
  if (prefersReduced || !hasWebGL) {
    return <Hero3DFallback />;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520px] sm:h-[620px] lg:h-[680px] overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-radial-universe pointer-events-none z-10 opacity-70" />

      {isVisible ? (
        <Suspense fallback={<Hero3DFallback />}>
          <Canvas
            dpr={[1, 1.5]} // DPR capped at 1.5 for performance
            camera={{ position: [0, 4, 11], fov: 46 }}
            gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
            className="w-full h-full"
          >
            <KnowledgeCoreScene onSelectSemester={handleSelectSemester} />
          </Canvas>
        </Suspense>
      ) : (
        // Canvas paused while off-screen to save GPU cycles
        <div className="w-full h-full bg-space-base" />
      )}

      {/* Interactive Helper Overlay */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs text-space-text-secondary pointer-events-none border border-white/10 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>Click any orbit planet to enter semester</span>
      </div>
    </div>
  );
}
