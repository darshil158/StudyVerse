import React, { useState } from 'react';
import { ChevronDown, Clock, PieChart, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SyllabusUnit({ unit, defaultExpanded = false }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="rounded-card bg-space-surface1/80 border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20">
      {/* Unit Header Accordion Trigger */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-5 text-left bg-space-surface2/40 hover:bg-space-surface2/70 transition-colors gap-4"
      >
        <div className="flex items-start sm:items-center gap-3.5 min-w-0">
          <span className="shrink-0 w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-sm font-bold flex items-center justify-center shadow-inner">
            {unit.unitNumber}
          </span>
          <div className="min-w-0">
            <h4 className="font-display text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
              {unit.title}
            </h4>
            <div className="flex items-center gap-4 text-xs font-mono text-space-text-muted mt-1">
              <span className="flex items-center gap-1">
                <Clock size={12} className="text-cyan-400" />
                <span>{unit.hours} Hours</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <PieChart size={12} className="text-violet-400" />
                <span>{unit.weightage}% GTU Weightage</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {/* Visual Weightage Mini Progress */}
          <div className="hidden sm:block w-20 h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"
              style={{ width: `${Math.min(100, unit.weightage * 3.5)}%` }}
            />
          </div>

          <ChevronDown
            size={18}
            className={`text-space-text-muted transition-transform duration-300 ${
              isExpanded ? 'rotate-180 text-cyan-400' : ''
            }`}
          />
        </div>
      </button>

      {/* Expandable Topic Details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-3 border-t border-white/5 space-y-2.5">
              <div className="text-[11px] font-mono text-space-text-muted uppercase tracking-wider mb-2">
                Prescribed Course Content & Competencies:
              </div>
              <ul className="space-y-2">
                {unit.topics?.map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-space-text-secondary leading-relaxed">
                    <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
