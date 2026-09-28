import React from 'react';

export function Skeleton({ className = '', variant = 'rect' }) {
  const variantStyles = {
    circle: 'rounded-full',
    pill: 'rounded-full',
    card: 'rounded-card',
    rect: 'rounded-lg'
  }[variant] || 'rounded-lg';

  return (
    <div
      className={`animate-pulse bg-white/[0.04] border border-white/[0.04] ${variantStyles} ${className}`}
      aria-hidden="true"
    />
  );
}

export function SkeletonSemesterCard() {
  return (
    <div className="p-6 rounded-card-lg bg-space-surface1/60 border border-white/5 relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <Skeleton className="w-20 h-6" variant="pill" />
        <Skeleton className="w-12 h-12" variant="circle" />
      </div>
      <Skeleton className="w-3/4 h-7 mb-2" />
      <Skeleton className="w-full h-4 mb-4" />
      <div className="space-y-2 mb-6">
        <Skeleton className="w-5/6 h-3" />
        <Skeleton className="w-4/6 h-3" />
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <Skeleton className="w-24 h-4" />
        <Skeleton className="w-20 h-8" variant="rect" />
      </div>
    </div>
  );
}

export function SkeletonSubjectCard() {
  return (
    <div className="p-5 rounded-card bg-space-surface1/60 border border-white/5 space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="w-24 h-5" variant="pill" />
        <Skeleton className="w-16 h-5" variant="pill" />
      </div>
      <Skeleton className="w-4/5 h-6" />
      <Skeleton className="w-full h-12" />
      <div className="pt-3 border-t border-white/5 flex items-center justify-between">
        <Skeleton className="w-20 h-4" />
        <Skeleton className="w-24 h-7" variant="rect" />
      </div>
    </div>
  );
}

export function SkeletonResourceCard() {
  return (
    <div className="p-5 rounded-card bg-space-surface1/60 border border-white/5 flex items-start gap-4">
      <Skeleton className="w-11 h-11 shrink-0" variant="rect" />
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <Skeleton className="w-16 h-4" variant="pill" />
          <Skeleton className="w-24 h-4" />
        </div>
        <Skeleton className="w-3/4 h-5" />
        <Skeleton className="w-full h-4" />
        <div className="flex items-center gap-4 pt-2">
          <Skeleton className="w-20 h-3" />
          <Skeleton className="w-16 h-3" />
        </div>
      </div>
    </div>
  );
}
