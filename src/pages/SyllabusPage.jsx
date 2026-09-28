import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { BookOpen, Sparkles, Layers, Search, ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import SearchBar from '../components/common/SearchBar.jsx';
import { useSubjects } from '../hooks/useSubjects.js';
import { SEMESTERS } from '../data/semesters.js';
import { SkeletonSubjectCard } from '../components/common/Skeleton.jsx';
import ErrorState from '../components/common/ErrorState.jsx';
import EmptyState from '../components/common/EmptyState.jsx';
import { getSemesterColor } from '../lib/utils.js';

export default function SyllabusPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSem = searchParams.get('semester') || 'all';
  const currentSearch = searchParams.get('q') || '';

  const { subjects, loading, error, refetch } = useSubjects(
    currentSem !== 'all' ? currentSem : null
  );

  const handleSemSelect = (semId) => {
    const next = new URLSearchParams(searchParams);
    if (semId === 'all') next.delete('semester');
    else next.set('semester', semId);
    setSearchParams(next);
  };

  const handleSearchChange = (val) => {
    const next = new URLSearchParams(searchParams);
    if (!val) next.delete('q');
    else next.set('q', val);
    setSearchParams(next);
  };

  const filteredSubjects = subjects.filter((s) => {
    if (!currentSearch.trim()) return true;
    const q = currentSearch.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.code.includes(q) ||
      s.shortName.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'GTU Syllabus Explorer', href: '/syllabus' }]} />

      {/* Header Banner */}
      <div className="relative rounded-card-lg p-8 sm:p-10 bg-space-surface1/80 border border-white/10 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <BookOpen size={13} />
            <span>Curriculum Schema</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            GTU Syllabus Repository
          </h1>
          <p className="text-sm sm:text-base text-space-text-secondary leading-relaxed">
            Detailed unit-by-unit curricula, lecture schedules, and examination percentage weightages for all 48 engineering courses.
          </p>
        </div>
      </div>

      {/* Controls: Search and Semester Pills */}
      <div className="space-y-4">
        <div className="max-w-xl">
          <SearchBar
            value={currentSearch}
            onChange={handleSearchChange}
            onClear={() => handleSearchChange('')}
            placeholder="Search syllabus by course name, GTU code, or concept..."
            showShortcut={false}
          />
        </div>

        {/* Semester Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          <button
            onClick={() => handleSemSelect('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all whitespace-nowrap ${
              currentSem === 'all'
                ? 'bg-cyan-500 text-space-base font-bold shadow-md shadow-cyan-500/20'
                : 'bg-space-surface2 text-space-text-secondary hover:text-white border border-white/10'
            }`}
          >
            All Orbits (1-8)
          </button>
          {SEMESTERS.map((s) => {
            const isSelected = currentSem === s.id.toString();
            const color = getSemesterColor(s.number);
            return (
              <button
                key={s.id}
                onClick={() => handleSemSelect(s.id.toString())}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all whitespace-nowrap border ${
                  isSelected
                    ? 'font-bold shadow-md'
                    : 'bg-space-surface2/60 text-space-text-secondary hover:text-white border-white/5'
                }`}
                style={{
                  backgroundColor: isSelected ? `${color.hex}22` : undefined,
                  borderColor: isSelected ? color.hex : undefined,
                  color: isSelected ? color.hex : undefined,
                }}
              >
                Semester {s.number}
              </button>
            );
          })}
        </div>
      </div>

      {/* Subjects Syllabus Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonSubjectCard key={i} />
          ))}
        </div>
      ) : error ? (
        <ErrorState onRetry={refetch} message={error} />
      ) : filteredSubjects.length === 0 ? (
        <EmptyState
          title="No Syllabi Located"
          message="No course curricula match your active search terms or semester filter."
          onAction={() => {
            setSearchParams({});
          }}
          actionLabel="Reset Explorer"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubjects.map((subject) => {
            const semColor = getSemesterColor(subject.semesterId);
            return (
              <div
                key={subject.id}
                className="group rounded-card bg-space-surface1/80 border border-white/10 hover:border-cyan-500/30 transition-all p-6 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border"
                      style={{
                        backgroundColor: `${semColor.hex}14`,
                        borderColor: `${semColor.hex}30`,
                        color: semColor.hex,
                      }}
                    >
                      Semester {subject.semesterId}
                    </span>
                    <span className="font-mono text-xs text-space-text-muted">
                      GTU {subject.code}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {subject.name}
                  </h3>

                  <p className="text-xs text-space-text-secondary leading-relaxed line-clamp-3">
                    {subject.description}
                  </p>

                  {/* Highlights list */}
                  <div className="pt-2 space-y-1">
                    <div className="text-[10px] font-mono text-space-text-muted uppercase">
                      Core Subject Focus:
                    </div>
                    {subject.importantTopics?.slice(0, 2).map((top, idx) => (
                      <div key={idx} className="text-xs text-space-text-primary line-clamp-1 italic">
                        • {top}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-4">
                  <span className="text-xs font-mono text-space-text-muted">
                    {subject.credits} Credits • 5 Units
                  </span>

                  <Link
                    to={`/subject/${subject.id}?tab=syllabus`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>View Units</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
