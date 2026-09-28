import React from 'react';
import { FileText, Presentation, FileCode2, Award } from 'lucide-react';
import { getFileTypeBadge } from '../../lib/utils.js';

export default function FileTypeBadge({ type, size = 'sm', className = '' }) {
  const badge = getFileTypeBadge(type);
  const normalized = (type || '').toLowerCase();

  const renderIcon = () => {
    const iconSize = size === 'xs' ? 11 : size === 'lg' ? 16 : 13;
    switch (normalized) {
      case 'pdf':
        return <FileText size={iconSize} className="shrink-0" />;
      case 'ppt':
      case 'pptx':
        return <Presentation size={iconSize} className="shrink-0" />;
      case 'notes':
        return <FileCode2 size={iconSize} className="shrink-0" />;
      case 'pyq':
        return <Award size={iconSize} className="shrink-0" />;
      default:
        return <FileText size={iconSize} className="shrink-0" />;
    }
  };

  const sizeClasses = {
    xs: 'text-[10px] px-2 py-0.5 gap-1',
    sm: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3.5 py-1.5 gap-2 font-medium',
  }[size] || 'text-xs px-2.5 py-1 gap-1.5';

  return (
    <span
      className={`inline-flex items-center font-mono rounded-full border font-medium uppercase tracking-wider backdrop-blur-sm transition-all duration-200 ${badge.bg} ${sizeClasses} ${className}`}
      style={{
        boxShadow: `0 0 12px ${badge.glow}`
      }}
    >
      {renderIcon()}
      <span>{badge.shortLabel}</span>
    </span>
  );
}
