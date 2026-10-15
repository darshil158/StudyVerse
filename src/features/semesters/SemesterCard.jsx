import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles, Layers } from 'lucide-react';
import { getSemesterColor } from '../../lib/utils.js';
import SemesterOrbitRing from '../../components/common/SemesterOrbitRing.jsx';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js';

export default function SemesterCard({ semester }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  // Mouse tilt motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring configuration
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  // Perspective transforms (-12 deg to 12 deg tilt)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  // Parallax inner layers
  const innerZ = useTransform(mouseXSpring, [-0.5, 0.5], [-8, 8]);

  // Spotlight follow coordinates
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (prefersReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setSpotlightPos({ x: mouseX, y: mouseY });

    const normalizedX = (mouseX / rect.width) - 0.5;
    const normalizedY = (mouseY / rect.height) - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const semColor = getSemesterColor(semester.number);

  return (
    <div className="perspective-1000 w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: prefersReduced ? 0 : rotateX,
          rotateY: prefersReduced ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative group rounded-card-lg bg-space-surface1/80 border border-white/10 hover:border-white/20 transition-colors duration-300 p-6 sm:p-7 shadow-xl overflow-hidden flex flex-col justify-between min-h-[360px]"
      >
        {/* Dynamic Mouse-follow Spotlight */}
        {!prefersReduced && isHovered && (
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 opacity-100"
            style={{
              background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${semColor.glow}, transparent 70%)`
            }}
          />
        )}

        {/* Ambient Top Glow in Semester's Hue */}
        <div 
          className="absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{ backgroundColor: semColor.hex }}
        />

        {/* Big Roman Numeral Parallax Watermark - placed top right so it never overlaps footer */}
        <div 
          className="absolute top-12 right-4 text-7xl sm:text-8xl font-display font-extrabold text-white/[0.03] group-hover:text-white/[0.06] select-none pointer-events-none transition-colors duration-500"
          style={{ transform: 'translateZ(10px)' }}
          aria-hidden="true"
        >
          {semester.roman}
        </div>

        {/* Card Header Layer */}
        <div className="relative z-10 space-y-3" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex items-center justify-between gap-3">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase border backdrop-blur-sm"
              style={{
                backgroundColor: `${semColor.hex}18`,
                borderColor: `${semColor.hex}40`,
                color: semColor.hex,
                boxShadow: `0 0 12px ${semColor.glow}`
              }}
            >
              <Sparkles size={12} className="shrink-0" />
              <span>Orbit {semester.number}</span>
            </span>

            {/* Orbit Resource Ring */}
            <SemesterOrbitRing
              semNumber={semester.number}
              availableCount={18}
              totalPossible={20}
              size={46}
              strokeWidth={3}
            />
          </div>

          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
              {semester.title}
            </h3>
            <p className="text-[11px] font-mono text-cyan-300/80 mt-1 uppercase tracking-wider font-medium">
              {semester.subtitle}
            </p>
          </div>

          <p className="text-xs text-space-text-secondary leading-relaxed line-clamp-2 min-h-[34px]">
            {semester.description}
          </p>
        </div>

        {/* Highlights List Layer */}
        <div className="relative z-10 my-3.5 space-y-2 border-t border-white/5 pt-3.5" style={{ transform: 'translateZ(15px)' }}>
          <div className="text-[10px] font-mono text-space-text-muted uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen size={11} className="text-cyan-400 shrink-0" />
            <span>Key Curriculum Moons</span>
          </div>
          <div className="space-y-1.5">
            {semester.highlights?.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-space-text-secondary" title={item}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: semColor.hex }} />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Footer: Dedicated Stats Row + Full-Width Action Button */}
        <div className="relative z-10 pt-3.5 border-t border-white/5 mt-auto space-y-3" style={{ transform: 'translateZ(25px)' }}>
          <div className="flex items-center justify-between text-xs text-space-text-muted font-mono px-0.5">
            <span className="flex items-center gap-1.5">
              <Layers size={13} className="text-cyan-400 shrink-0" />
              <span>6 Subjects</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="text-space-text-secondary font-medium">
              {semester.credits} Credits
            </span>
          </div>

          <Link
            to={`/semester/${semester.id}`}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 group-hover:border-cyan-400/40 transition-all shadow-sm active:scale-[0.98]"
          >
            <span>Explore Orbit</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform text-cyan-400" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
