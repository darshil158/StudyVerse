import React from 'react';
import { Eye, Download, Star, Calendar, HardDrive, UserCheck } from 'lucide-react';
import FileTypeBadge from '../../components/common/FileTypeBadge.jsx';
import { downloadResource, viewResource } from '../../services/download.js';
import { useToast } from '../../hooks/useToast.jsx';

export default function ResourceCard({ resource }) {
  const { addToast } = useToast();

  const handleDownload = () => {
    downloadResource(resource, addToast);
  };

  const handleView = () => {
    viewResource(resource, addToast);
  };

  return (
    <div className="group rounded-card bg-space-surface1/80 border border-white/10 hover:border-white/20 transition-all duration-300 p-5 shadow-lg flex flex-col justify-between hover:-translate-y-1">
      <div>
        {/* Top Badges and Size */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <FileTypeBadge type={resource.type} size="sm" />
          <div className="flex items-center gap-2 text-xs font-mono text-space-text-muted">
            <span className="flex items-center gap-1">
              <HardDrive size={12} className="text-space-text-muted" />
              <span>{resource.size}</span>
            </span>
            <span>•</span>
            <span>{resource.pages}</span>
          </div>
        </div>

        {/* Title */}
        <h4 className="font-display text-base font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors line-clamp-2 mb-2">
          {resource.title}
        </h4>

        {/* Description */}
        <p className="text-xs text-space-text-secondary leading-relaxed line-clamp-2 mb-4">
          {resource.description}
        </p>

        {/* Contributor / Author info */}
        <div className="flex items-center gap-2 text-xs text-space-text-muted mb-4 py-2 border-t border-white/5">
          <UserCheck size={13} className="text-cyan-400 shrink-0" />
          <span className="truncate">{resource.author}</span>
        </div>
      </div>

      {/* Footer Actions: View & Download Buttons */}
      <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono">
          <Star size={13} fill="#fbbf24" />
          <span>{resource.rating}</span>
          <span className="text-space-text-muted text-[11px]">({resource.downloads})</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleView}
            className="p-2 rounded-lg text-space-text-secondary hover:text-white bg-space-surface2 hover:bg-space-surface3 border border-white/10 hover:border-cyan-500/30 transition-all"
            title="Preview Document in New Tab"
            aria-label="Preview document"
          >
            <Eye size={15} />
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/10 active:scale-95"
            aria-label="Download resource file"
          >
            <Download size={14} />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}
