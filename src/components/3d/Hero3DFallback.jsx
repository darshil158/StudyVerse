import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEMESTERS } from '../../data/semesters.js';

export default function Hero3DFallback() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[520px] sm:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Radial Light */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent pointer-events-none" />
      <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

      {/* SVG Orbital Map */}
      <svg className="w-full h-full max-w-[700px] max-h-[600px]" viewBox="-350 -300 700 600">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>
          <filter id="fallbackGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Orbit Rings and Planets */}
        {SEMESTERS.map((sem, index) => {
          const rx = 80 + index * 32;
          const ry = 45 + index * 18;
          // Distribute planets across orbits at varied angles
          const angle = (index * (Math.PI / 4) + 0.4);
          const px = rx * Math.cos(angle);
          const py = ry * Math.sin(angle);

          return (
            <g key={sem.id} className="cursor-pointer group" onClick={() => navigate(`/semester/${sem.id}`)}>
              {/* Elliptical Orbit Track */}
              <ellipse
                cx="0"
                cy="0"
                rx={rx}
                ry={ry}
                fill="none"
                stroke={sem.color}
                strokeWidth="1.2"
                strokeOpacity="0.2"
                strokeDasharray="4 6"
              />

              {/* Orbiting Semester Planet Node */}
              <circle
                cx={px}
                cy={py}
                r={10 + index * 0.8}
                fill={sem.color}
                filter="url(#fallbackGlow)"
                className="transition-transform duration-300 group-hover:scale-125"
              />

              {/* Semester Roman Numeral Tag */}
              <text
                x={px}
                y={py + 4}
                textAnchor="middle"
                fill="#ffffff"
                fontSize="9"
                fontWeight="bold"
                fontFamily="JetBrains Mono, monospace"
                pointerEvents="none"
              >
                {sem.roman}
              </text>

              {/* Tooltip on hover */}
              <text
                x={px}
                y={py - 16}
                textAnchor="middle"
                fill="#ffffff"
                fontSize="11"
                fontWeight="600"
                fontFamily="Space Grotesk, sans-serif"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
              >
                Sem {sem.number}
              </text>
            </g>
          );
        })}

        {/* Central Glowing Knowledge Core */}
        <circle cx="0" cy="0" r="42" fill="url(#coreGlow)" />
        <circle cx="0" cy="0" r="24" fill="#22d3ee" filter="url(#fallbackGlow)" className="animate-pulse" />
        <text
          x="0"
          y="4"
          textAnchor="middle"
          fill="#05060a"
          fontSize="11"
          fontWeight="bold"
          fontFamily="Space Grotesk, sans-serif"
        >
          CORE
        </text>
      </svg>

      {/* Interactive Helper Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-space-surface1/80 border border-white/10 text-xs text-space-text-secondary pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>Click any semester planet to enter its orbit</span>
      </div>
    </div>
  );
}
