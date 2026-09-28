/**
 * Utility functions for StudyVerse
 */

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function formatNumber(num) {
  if (!num && num !== 0) return '0';
  return new Intl.NumberFormat('en-IN').format(num);
}

export function formatCompactNumber(num) {
  if (!num && num !== 0) return '0';
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}

export const SEMESTER_COLORS = {
  1: {
    hex: '#06b6d4',
    rgb: '6, 182, 212',
    name: 'Cyan Orbit',
    border: 'border-cyan-500/30',
    bgBadge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    glow: 'rgba(6, 182, 212, 0.35)',
  },
  2: {
    hex: '#0ea5e9',
    rgb: '14, 165, 233',
    name: 'Sky Trajectory',
    border: 'border-sky-500/30',
    bgBadge: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
    glow: 'rgba(14, 165, 233, 0.35)',
  },
  3: {
    hex: '#6366f1',
    rgb: '99, 102, 241',
    name: 'Indigo Meridian',
    border: 'border-indigo-500/30',
    bgBadge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
    glow: 'rgba(99, 102, 241, 0.35)',
  },
  4: {
    hex: '#8b5cf6',
    rgb: '139, 92, 246',
    name: 'Violet Zenith',
    border: 'border-violet-500/30',
    bgBadge: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
    glow: 'rgba(139, 92, 246, 0.35)',
  },
  5: {
    hex: '#d946ef',
    rgb: '217, 70, 239',
    name: 'Fuchsia Apex',
    border: 'border-fuchsia-500/30',
    bgBadge: 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30',
    glow: 'rgba(217, 70, 239, 0.35)',
  },
  6: {
    hex: '#f43f5e',
    rgb: '244, 63, 94',
    name: 'Rose Horizon',
    border: 'border-rose-500/30',
    bgBadge: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
    glow: 'rgba(244, 63, 94, 0.35)',
  },
  7: {
    hex: '#f59e0b',
    rgb: '245, 158, 11',
    name: 'Amber Solar',
    border: 'border-amber-500/30',
    bgBadge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    glow: 'rgba(245, 158, 11, 0.35)',
  },
  8: {
    hex: '#10b981',
    rgb: '16, 185, 129',
    name: 'Emerald Nebula',
    border: 'border-emerald-500/30',
    bgBadge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    glow: 'rgba(16, 185, 129, 0.35)',
  },
};

export function getSemesterColor(semNumber) {
  const num = Number(semNumber) || 1;
  return SEMESTER_COLORS[num] || SEMESTER_COLORS[1];
}

export function getFileTypeBadge(type) {
  switch (type?.toLowerCase()) {
    case 'pdf':
      return {
        label: 'PDF Document',
        shortLabel: 'PDF',
        bg: 'bg-rose-500/10 text-rose-400 border-rose-500/25',
        glow: 'rgba(244, 63, 94, 0.3)',
        accent: '#f43f5e'
      };
    case 'ppt':
    case 'pptx':
      return {
        label: 'Slide Deck',
        shortLabel: 'PPT',
        bg: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
        glow: 'rgba(245, 158, 11, 0.3)',
        accent: '#f59e0b'
      };
    case 'notes':
      return {
        label: 'Lecture Notes',
        shortLabel: 'Notes',
        bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
        glow: 'rgba(16, 185, 129, 0.3)',
        accent: '#10b981'
      };
    case 'pyq':
      return {
        label: 'GTU Paper',
        shortLabel: 'PYQ',
        bg: 'bg-violet-500/10 text-violet-400 border-violet-500/25',
        glow: 'rgba(139, 92, 246, 0.3)',
        accent: '#8b5cf6'
      };
    default:
      return {
        label: 'Resource',
        shortLabel: 'DOC',
        bg: 'bg-blue-500/10 text-blue-400 border-blue-500/25',
        glow: 'rgba(59, 130, 246, 0.3)',
        accent: '#3b82f6'
      };
  }
}
