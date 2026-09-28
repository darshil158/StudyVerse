import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'default', showText = true, className = '' }) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  const iconSizes = isSmall ? 'w-7 h-7' : isLarge ? 'w-12 h-12' : 'w-9 h-9';
  const textSizes = isSmall ? 'text-lg' : isLarge ? 'text-2xl' : 'text-xl';

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1 ${className}`}
      aria-label="StudyVerse Home"
    >
      <div className={`relative ${iconSizes} flex items-center justify-center`}>
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/30 to-violet-500/20 rounded-full blur-md group-hover:scale-125 transition-transform duration-500" />
        
        {/* Custom SVG Monogram "V" formed by two orbital trajectories */}
        <svg 
          viewBox="0 0 36 36" 
          className="w-full h-full relative z-10 transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:scale-105"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="orbitGradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="orbitGradientRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Left Orbit Arc - swooping into V apex */}
          <path 
            d="M 6 8 C 9 18, 14 28, 18 31" 
            stroke="url(#orbitGradientLeft)" 
            strokeWidth="3.2" 
            strokeLinecap="round" 
            className="transition-all duration-300 group-hover:stroke-[3.8]"
          />

          {/* Right Orbit Arc - swooping from apex outwards */}
          <path 
            d="M 30 8 C 27 18, 22 28, 18 31" 
            stroke="url(#orbitGradientRight)" 
            strokeWidth="3.2" 
            strokeLinecap="round" 
            className="transition-all duration-300 group-hover:stroke-[3.8]"
          />

          {/* Core planetary node / glowing center point */}
          <circle 
            cx="18" 
            cy="15" 
            r="3.2" 
            fill="#22d3ee" 
            filter="url(#glowFilter)"
            className="group-hover:fill-cyan-300 transition-colors duration-300 animate-pulse"
          />

          {/* Micro satellite node on right orbit */}
          <circle 
            cx="27" 
            cy="12" 
            r="1.6" 
            fill="#8b5cf6" 
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className={`font-display font-bold ${textSizes} tracking-tight text-white group-hover:text-cyan-200 transition-colors`}>
              Study<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Verse</span>
            </span>
          </div>
          <span className="text-[10px] tracking-wider text-space-text-muted font-medium uppercase -mt-0.5 group-hover:text-space-text-secondary transition-colors">
            GTU Academic Universe
          </span>
        </div>
      )}
    </Link>
  );
}
