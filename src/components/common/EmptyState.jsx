import React from 'react';
import { Compass, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmptyState({
  title = 'No Celestial Nodes Discovered',
  message = 'No academic resources or subjects matched your active filters or orbit trajectory.',
  actionLabel = 'Reset Trajectory',
  onAction,
  actionLink,
  icon: Icon = Compass,
  className = ''
}) {
  return (
    <div className={`flex flex-col items-center justify-center p-12 text-center rounded-card-lg border border-white/5 bg-space-surface1/40 backdrop-blur-md ${className}`}>
      {/* Planetary Orbit Visual for Empty State */}
      <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20 animate-[spin_30s_linear_infinite]" />
        <div className="absolute w-16 h-16 rounded-full border border-blue-500/20" />
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-white/10 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
          <Icon className="w-6 h-6 animate-pulse" />
        </div>
        <div className="absolute -top-1 right-3 w-2.5 h-2.5 rounded-full bg-violet-400/80 shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
      </div>

      <h3 className="font-display text-xl font-bold text-white tracking-tight mb-2">
        {title}
      </h3>
      <p className="text-space-text-secondary text-sm max-w-md mb-6 leading-relaxed">
        {message}
      </p>

      {onAction && (
        <button
          onClick={onAction}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-card text-sm font-medium text-white bg-space-surface2 hover:bg-space-surface3 border border-white/10 hover:border-cyan-500/30 transition-all duration-200 shadow-lg hover:shadow-cyan-500/10"
        >
          <RotateCcw size={16} />
          <span>{actionLabel}</span>
        </button>
      )}

      {actionLink && !onAction && (
        <Link
          to={actionLink}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-card text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-500/20"
        >
          <span>{actionLabel}</span>
        </Link>
      )}
    </div>
  );
}
