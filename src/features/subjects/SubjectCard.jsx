import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Layers, Award, Sparkles } from 'lucide-react';
import { getSemesterColor } from '../../lib/utils.js';
import { CATEGORIES } from '../../data/categories.js';

export default function SubjectCard({ subject }) {
  const semColor = getSemesterColor(subject.semesterId);
  const category = CATEGORIES.find((c) => c.id === subject.categoryId) || {
    name: 'Core',
    code: 'PCC',
    color: '#3b82f6',
  };

  return (
    <div className="relative group rounded-card p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:from-cyan-500/50 hover:via-blue-500/40 hover:to-violet-500/30 transition-all duration-500 shadow-lg hover:shadow-cyan-500/10">
      {/* Inner card surface with hover lift */}
      <div className="relative rounded-[15px] bg-space-surface1 p-6 h-full flex flex-col justify-between transition-transform duration-300 group-hover:-translate-y-1.5 overflow-hidden">
        {/* Soft background ambient gradient glow on hover */}
        <div 
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{ backgroundColor: semColor.hex }}
        />

        {/* Top Badges */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase border"
              style={{
                backgroundColor: `${semColor.hex}14`,
                borderColor: `${semColor.hex}30`,
                color: semColor.hex,
              }}
            >
              Sem {subject.semesterId}
            </span>

            <span className="font-mono text-xs text-space-text-muted px-2 py-0.5 rounded bg-white/5 border border-white/10 group-hover:text-cyan-300 group-hover:border-cyan-500/20 transition-colors">
              GTU {subject.code}
            </span>
          </div>

          {/* Subject Title */}
          <Link to={`/subject/${subject.id}`}>
            <h3 className="font-display text-lg font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors mb-2 line-clamp-1">
              {subject.name}
            </h3>
          </Link>

          <p className="text-xs text-space-text-secondary line-clamp-2 leading-relaxed mb-4">
            {subject.description}
          </p>

          {/* Important Topics Preview */}
          {subject.importantTopics?.length > 0 && (
            <div className="space-y-1.5 mb-4 py-3 border-y border-white/5">
              <div className="text-[10px] font-mono text-space-text-muted uppercase tracking-wider flex items-center gap-1">
                <Sparkles size={11} className="text-cyan-400" />
                <span>High-Yield Topic</span>
              </div>
              <p className="text-xs text-space-text-primary line-clamp-1 italic">
                "{subject.importantTopics[0]}"
              </p>
            </div>
          )}
        </div>

        {/* Card Footer Details */}
        <div className="pt-3 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <span
              className="text-[11px] font-mono px-2 py-0.5 rounded border"
              style={{
                backgroundColor: `${category.color}15`,
                borderColor: `${category.color}35`,
                color: category.color
              }}
            >
              {category.code}
            </span>
            <span className="text-xs font-mono text-space-text-muted">
              {subject.credits} Credits
            </span>
          </div>

          <Link
            to={`/subject/${subject.id}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
          >
            <span>Details</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
