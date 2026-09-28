import React from 'react';
import { getSemesterColor } from '../../lib/utils.js';

export default function SemesterOrbitRing({ 
  semNumber = 1, 
  availableCount = 18, 
  totalPossible = 24, 
  size = 64,
  strokeWidth = 3.5,
  showLabel = true 
}) {
  const semColor = getSemesterColor(semNumber);
  const percentage = Math.min(100, Math.round((availableCount / totalPossible) * 100));
  
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background orbit track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        
        {/* Active progress arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={semColor.hex}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          className="transition-all duration-1000 ease-out"
          style={{
            filter: `drop-shadow(0 0 6px ${semColor.glow})`
          }}
        />
      </svg>

      {/* Center Label */}
      {showLabel && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="font-mono text-xs font-bold text-white leading-none">
            {percentage}%
          </span>
          <span className="text-[8px] font-mono text-space-text-muted mt-0.5 leading-none">
            Orbit {semNumber}
          </span>
        </div>
      )}
    </div>
  );
}
