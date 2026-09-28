import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, FileText, Award, Layers, ArrowRight, CornerDownLeft, X } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch.js';
import FileTypeBadge from './FileTypeBadge.jsx';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const { results, loading } = useSearch(query, 150);

  // Flatten all results into a single indexable array for keyboard navigation
  const flatItems = [
    ...(results.subjects || []).map((item) => ({ ...item, category: 'Subjects', route: `/subject/${item.id}` })),
    ...(results.materials || []).map((item) => ({ ...item, category: 'Materials', route: `/subject/${item.subjectId}?tab=materials` })),
    ...(results.syllabus || []).map((item) => ({ ...item, category: 'Syllabus', route: `/subject/${item.subjectId}?tab=syllabus` })),
    ...(results.pyqs || []).map((item) => ({ ...item, category: 'Question Papers', route: `/subject/${item.subjectId}?tab=pyqs` })),
  ];

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Handle keyboard events (Up, Down, Enter, Esc)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (flatItems.length ? (prev + 1) % flatItems.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (flatItems.length ? (prev - 1 + flatItems.length) % flatItems.length : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (flatItems[selectedIndex]) {
          navigate(flatItems[selectedIndex].route);
          onClose();
        } else if (query.trim()) {
          navigate(`/search?q=${encodeURIComponent(query)}`);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, flatItems, selectedIndex, query, navigate, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-md">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="relative w-full max-w-2xl bg-space-surface1/95 border border-white/10 rounded-card-lg shadow-2xl overflow-hidden z-10 flex flex-col max-h-[80vh]"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search subjects, codes (3140702), topics, notes, or PYQs..."
            className="flex-1 bg-transparent text-white placeholder-space-text-muted text-base focus:outline-none"
          />
          {loading && (
            <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin shrink-0" />
          )}
          <button
            onClick={onClose}
            className="p-1 rounded text-space-text-muted hover:text-white hover:bg-white/10"
            aria-label="Close command palette"
          >
            <X size={18} />
          </button>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4">
          {flatItems.length > 0 ? (
            <div>
              {/* Group: Subjects */}
              {results.subjects?.length > 0 && (
                <div className="mb-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                    <BookOpen size={13} />
                    <span>Subjects</span>
                  </div>
                  <div className="space-y-1">
                    {results.subjects.map((sub) => {
                      const itemIndex = flatItems.findIndex((it) => it.id === sub.id && it.category === 'Subjects');
                      const isSelected = itemIndex === selectedIndex;
                      return (
                        <div
                          key={sub.id}
                          onClick={() => {
                            navigate(`/subject/${sub.id}`);
                            onClose();
                          }}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors ${
                            isSelected ? 'bg-cyan-500/20 text-white border border-cyan-500/30' : 'hover:bg-white/5 text-space-text-primary'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/10 text-cyan-300">
                              {sub.code}
                            </span>
                            <span className="text-sm font-medium truncate">{sub.name}</span>
                            <span className="text-xs text-space-text-muted">Sem {sub.semesterId}</span>
                          </div>
                          <ArrowRight size={14} className="text-space-text-muted shrink-0" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Group: Materials */}
              {results.materials?.length > 0 && (
                <div className="mb-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                    <FileText size={13} />
                    <span>Materials</span>
                  </div>
                  <div className="space-y-1">
                    {results.materials.map((mat) => {
                      const itemIndex = flatItems.findIndex((it) => it.id === mat.id && it.category === 'Materials');
                      const isSelected = itemIndex === selectedIndex;
                      return (
                        <div
                          key={mat.id}
                          onClick={() => {
                            navigate(`/subject/${mat.subjectId}?tab=materials`);
                            onClose();
                          }}
                          className={`flex items-center justify-between px-3.5 py-2 rounded-lg cursor-pointer transition-colors ${
                            isSelected ? 'bg-emerald-500/20 text-white border border-emerald-500/30' : 'hover:bg-white/5 text-space-text-primary'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <FileTypeBadge type={mat.type} size="xs" />
                            <span className="text-sm truncate">{mat.title}</span>
                          </div>
                          <span className="text-xs text-space-text-muted shrink-0">{mat.size}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Group: PYQs */}
              {results.pyqs?.length > 0 && (
                <div className="mb-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-violet-400 font-semibold uppercase tracking-wider">
                    <Award size={13} />
                    <span>GTU Question Papers</span>
                  </div>
                  <div className="space-y-1">
                    {results.pyqs.map((pyq) => {
                      const itemIndex = flatItems.findIndex((it) => it.id === pyq.id && it.category === 'Question Papers');
                      const isSelected = itemIndex === selectedIndex;
                      return (
                        <div
                          key={pyq.id}
                          onClick={() => {
                            navigate(`/subject/${pyq.subjectId}?tab=pyqs`);
                            onClose();
                          }}
                          className={`flex items-center justify-between px-3.5 py-2 rounded-lg cursor-pointer transition-colors ${
                            isSelected ? 'bg-violet-500/20 text-white border border-violet-500/30' : 'hover:bg-white/5 text-space-text-primary'
                          }`}
                        >
                          <span className="text-sm truncate">{pyq.title}</span>
                          <span className="text-xs font-mono text-space-text-muted">{pyq.duration}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : query.trim() ? (
            <div className="py-12 text-center text-space-text-secondary text-sm">
              No matching nodes found for <span className="text-white font-semibold">"{query}"</span>.
              <div className="mt-3">
                <button
                  onClick={() => {
                    navigate(`/search?q=${encodeURIComponent(query)}`);
                    onClose();
                  }}
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-xs font-medium"
                >
                  <span>Open comprehensive search page</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ) : (
            // Default Quick Orbital Shortcuts
            <div className="p-2 space-y-4">
              <div className="text-xs font-mono text-space-text-muted uppercase tracking-wider">
                Quick Semesters (1 — 8)
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <button
                    key={sem}
                    onClick={() => {
                      navigate(`/semester/${sem}`);
                      onClose();
                    }}
                    className="p-2.5 rounded-lg border border-white/5 bg-space-surface2 hover:border-cyan-500/30 hover:bg-space-surface3 text-left transition-all group"
                  >
                    <div className="text-xs font-mono text-cyan-400">Orbit {sem}</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-200">
                      Sem {sem}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-space-surface2/60 border-t border-white/10 flex items-center justify-between text-[11px] text-space-text-muted">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↓</kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↵</kbd>
              Select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">esc</kbd>
              Exit
            </span>
          </div>
          <span className="font-mono text-cyan-400">StudyVerse Universe</span>
        </div>
      </motion.div>
    </div>
  );
}
