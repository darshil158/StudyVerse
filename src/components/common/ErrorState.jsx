import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function ErrorState({
  title = 'Orbital Communication Disruption',
  message = 'We encountered an anomaly while retrieving planetary academic data from the core.',
  onRetry,
  className = ''
}) {
  return (
    <div className={`flex flex-col items-center justify-center p-12 text-center rounded-card-lg border border-rose-500/20 bg-rose-950/10 backdrop-blur-md ${className}`}>
      <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-5 shadow-[0_0_25px_rgba(244,63,94,0.2)]">
        <AlertTriangle className="w-8 h-8" />
      </div>

      <h3 className="font-display text-xl font-bold text-white tracking-tight mb-2">
        {title}
      </h3>
      <p className="text-space-text-secondary text-sm max-w-md mb-6 leading-relaxed">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-card text-sm font-medium text-white bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 transition-all duration-200 shadow-lg shadow-rose-500/10 active:scale-95"
        >
          <RefreshCw size={16} className="animate-spin-slow" />
          <span>Re-establish Orbit Link</span>
        </button>
      )}
    </div>
  );
}
