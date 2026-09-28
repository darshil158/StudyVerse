import React from 'react';
import { Eye, Download, Award, CheckCircle, Clock, FileText } from 'lucide-react';
import FileTypeBadge from '../../components/common/FileTypeBadge.jsx';
import { downloadResource, viewResource } from '../../services/download.js';
import { useToast } from '../../hooks/useToast.jsx';

export default function PYQCard({ pyq }) {
  const { addToast } = useToast();

  const handleDownload = () => {
    downloadResource(pyq, addToast);
  };

  const handleView = () => {
    viewResource(pyq, addToast);
  };

  return (
    <div className="group rounded-card bg-space-surface1/80 border border-white/10 hover:border-violet-500/30 transition-all duration-300 p-5 shadow-lg flex flex-col justify-between hover:-translate-y-1">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <FileTypeBadge type="pyq" size="sm" />
            <span className="text-xs font-mono font-bold text-violet-300 px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
              {pyq.season} {pyq.year}
            </span>
          </div>

          <span className="font-mono text-xs text-space-text-muted">
            Code: {pyq.paperCode}
          </span>
        </div>

        {/* Paper Title */}
        <h4 className="font-display text-base font-bold text-white tracking-tight group-hover:text-violet-200 transition-colors line-clamp-2 mb-2">
          {pyq.title}
        </h4>

        <p className="text-xs text-space-text-secondary leading-relaxed line-clamp-2 mb-4">
          {pyq.description}
        </p>

        {/* Exam Specifications */}
        <div className="grid grid-cols-2 gap-2 text-xs font-mono text-space-text-muted mb-4 py-2.5 px-3 rounded-lg bg-space-surface2/50 border border-white/5">
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-cyan-400" />
            <span>{pyq.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award size={12} className="text-amber-400" />
            <span>Max: {pyq.maxMarks} Marks</span>
          </div>
          <div className="flex items-center gap-1.5 col-span-2">
            {pyq.hasSolution ? (
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle size={12} />
                <span>Verified Model Solution Attached</span>
              </span>
            ) : (
              <span className="text-space-text-muted">Questions Only</span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-auto">
        <span className="text-xs font-mono text-space-text-muted">
          {pyq.downloads} students practiced
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleView}
            className="p-2 rounded-lg text-space-text-secondary hover:text-white bg-space-surface2 hover:bg-space-surface3 border border-white/10 hover:border-violet-500/30 transition-all"
            title="Preview Exam Paper in New Tab"
            aria-label="Preview exam paper"
          >
            <Eye size={15} />
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all shadow-md shadow-violet-500/15 active:scale-95"
            aria-label="Download question paper"
          >
            <Download size={14} />
            <span>Download Paper</span>
          </button>
        </div>
      </div>
    </div>
  );
}
