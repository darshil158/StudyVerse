import React, { useRef, useMemo, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { SEMESTERS } from '../../data/semesters.js';

// Central Knowledge Core Mesh with layered glow
function KnowledgeCore() {
  const coreRef = useRef();
  const innerRef = useRef();

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.4;
      coreRef.current.rotation.x += delta * 0.2;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.6;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer subtle glow sphere */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#22d3ee"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </mesh>

      {/* Inner solid radiant core */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#60a5fa"
          emissiveIntensity={2.2}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Point light emitted directly from core */}
      <pointLight color="#22d3ee" intensity={3.5} distance={15} decay={2} />
    </group>
  );
}

// Single Orbiting Semester Planet
function SemesterPlanet({ semester, onSelect }) {
  const planetRef = useRef();
  const [hovered, setHovered] = useState(false);
  const initialAngle = useMemo(() => (semester.number * (Math.PI / 4)), [semester.number]);

  // Orbit rotation
  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsed = clock.getElapsedTime();
      const currentAngle = initialAngle + elapsed * (semester.orbitSpeed * 0.35);
      const x = Math.cos(currentAngle) * semester.orbitRadius;
      const z = Math.sin(currentAngle) * semester.orbitRadius;
      const y = Math.sin(elapsed * 1.2 + semester.number) * 0.25;

      planetRef.current.position.set(x, y, z);
      planetRef.current.rotation.y += 0.02;
    }
  });

  // Circular orbit track wire
  const orbitCurve = useMemo(() => {
    const points = [];
    const segments = 64;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(theta) * semester.orbitRadius, 0, Math.sin(theta) * semester.orbitRadius));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [semester.orbitRadius]);

  return (
    <>
      {/* Orbit Track line */}
      <line geometry={orbitCurve}>
        <lineBasicMaterial color={semester.color} transparent opacity={0.18} />
      </line>

      {/* Moving Planet Node */}
      <group
        ref={planetRef}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(semester.id);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <mesh scale={hovered ? 1.35 : 1}>
          <sphereGeometry args={[semester.planetSize, 32, 32]} />
          <meshStandardMaterial
            color={semester.color}
            emissive={semester.color}
            emissiveIntensity={hovered ? 2.5 : 1.2}
            roughness={0.25}
            metalness={0.75}
          />
        </mesh>

        {/* Small atmospheric planetary halo */}
        <mesh scale={hovered ? 1.7 : 1.3}>
          <sphereGeometry args={[semester.planetSize, 16, 16]} />
          <meshBasicMaterial
            color={semester.color}
            transparent
            opacity={hovered ? 0.35 : 0.15}
            wireframe
          />
        </mesh>

        {/* Hover label */}
        {hovered && (
          <Html distanceFactor={12} position={[0, semester.planetSize + 0.3, 0]} center>
            <div className="px-2.5 py-1 rounded bg-space-surface1/95 border border-white/20 text-white text-[11px] font-mono whitespace-nowrap shadow-xl backdrop-blur-md pointer-events-none">
              <span className="font-bold" style={{ color: semester.color }}>Sem {semester.number}:</span> {semester.title}
            </div>
          </Html>
        )}
      </group>
    </>
  );
}

// Floating Academic Books & Documents
function FloatingDocuments() {
  const documents = useMemo(() => {
    return [
      { pos: [-3, 1.8, -2], rot: [0.3, 0.4, 0.2], color: '#38bdf8' },
      { pos: [3.5, -1.2, 1.5], rot: [-0.2, 0.6, -0.4], color: '#818cf8' },
      { pos: [-2.2, -2.1, 2.5], rot: [0.5, -0.3, 0.1], color: '#34d399' },
      { pos: [2.8, 2.4, -1.8], rot: [-0.4, -0.5, 0.3], color: '#f472b6' },
      { pos: [-4.2, 0.5, 3], rot: [0.2, 0.8, -0.2], color: '#fbbf24' },
    ];
  }, []);

  return (
    <group>
      {documents.map((doc, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={1.5} position={doc.pos}>
          <mesh rotation={doc.rot}>
            <boxGeometry args={[0.42, 0.58, 0.08]} />
            <meshStandardMaterial
              color="#0f172a"
              emissive={doc.color}
              emissiveIntensity={0.6}
              roughness={0.4}
              metalness={0.6}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Ambient Soft Cosmic Particles (~40 particles)
function SoftParticles({ count = 42 }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 22;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 12;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    return coords;
  }, [count]);

  const particlesRef = useRef();

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#7dd3fc"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Camera Mouse Parallax Controller
function MouseParallax() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    // Gentle camera parallax lerp
    camera.position.x += (mouse.current.x * 0.8 - camera.position.x) * 0.03;
    camera.position.y += (mouse.current.y * 0.5 + 4 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function KnowledgeCoreScene({ onSelectSemester }) {
  return (
    <>
      <color attach="background" args={['#05060a']} />

      {/* Gentle Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 15, 10]} intensity={0.8} />

      {/* Camera Parallax */}
      <MouseParallax />

      {/* Knowledge Core */}
      <KnowledgeCore />

      {/* 8 Orbiting Semester Planets */}
      {SEMESTERS.map((sem) => (
        <SemesterPlanet
          key={sem.id}
          semester={sem}
          onSelect={onSelectSemester}
        />
      ))}

      {/* Floating Resource Documents */}
      <FloatingDocuments />

      {/* Soft Particles */}
      <SoftParticles />

      {/* Postprocessing Bloom (low intensity) */}
      <EffectComposer disableNormalPass multisampling={0}>
        <Bloom
          luminanceThreshold={0.5}
          luminanceSmoothing={0.7}
          intensity={0.75}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
}
