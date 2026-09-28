import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Orbit, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 text-center">
      {/* 404 Cosmic Orbit Illustration */}
      <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
        {/* Outer Orbit Rings */}
        <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 animate-[spin_40s_linear_infinite]" />
        <div className="absolute inset-4 rounded-full border border-blue-500/20" />
        <div className="absolute inset-10 rounded-full border border-violet-500/20" />

        {/* Floating astronaut / Lost core marker */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-950/60 via-space-surface1 to-blue-950/60 border border-cyan-500/40 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(34,211,238,0.2)]">
          <span className="font-display font-extrabold text-2xl text-cyan-400">404</span>
          <span className="text-[9px] font-mono text-space-text-muted uppercase">Lost Orbit</span>
        </div>

        {/* Derelict satellite node */}
        <div className="absolute top-2 right-4 w-3.5 h-3.5 rounded-full bg-rose-500/80 shadow-[0_0_12px_rgba(244,63,94,0.8)]" />
      </div>

      <div className="max-w-md space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-xs font-mono text-rose-400">
          <Compass size={13} />
          <span>Coordinates Uncharted</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Lost in the Cosmos
        </h1>

        <p className="text-sm text-space-text-secondary leading-relaxed">
          The orbital coordinates you navigated to do not belong to any recognized GTU semester, subject moon, or resource catalog.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-card text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
          >
            <Home size={14} />
            <span>Return to Core</span>
          </Link>

          <Link
            to="/semesters"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-card text-xs font-semibold text-space-text-secondary hover:text-white bg-space-surface2 hover:bg-space-surface3 border border-white/10 transition-all"
          >
            <Orbit size={14} className="text-cyan-400" />
            <span>Re-align Orbit Trajectory</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
