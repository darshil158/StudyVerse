import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, BookOpen, FileText, Award, Layers, ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import SearchBar from '../components/common/SearchBar.jsx';
import SubjectCard from '../features/subjects/SubjectCard.jsx';
import ResourceCard from '../features/materials/ResourceCard.jsx';
import PYQCard from '../features/pyqs/PYQCard.jsx';
import EmptyState from '../components/common/EmptyState.jsx';
import { useSearch } from '../hooks/useSearch.js';
import { SkeletonSubjectCard, SkeletonResourceCard } from '../components/common/Skeleton.jsx';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const [inputValue, setInputValue] = useState(queryParam);
  const [activeCategory, setActiveCategory] = useState('all');

  const { results, loading, debouncedQuery } = useSearch(inputValue, 200);

  useEffect(() => {
    if (debouncedQuery !== queryParam) {
      if (debouncedQuery) {
        setSearchParams({ q: debouncedQuery });
      } else {
        setSearchParams({});
      }
    }
  }, [debouncedQuery, queryParam, setSearchParams]);

  const categories = [
    { id: 'all', label: 'All Results', count: results.total },
    { id: 'subjects', label: 'Subjects', count: results.subjects?.length || 0 },
    { id: 'materials', label: 'Materials', count: results.materials?.length || 0 },
    { id: 'syllabus', label: 'Syllabus Topics', count: results.syllabus?.length || 0 },
    { id: 'pyqs', label: 'GTU Papers', count: results.pyqs?.length || 0 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Universal Cosmic Search', href: '/search' }]} />

      {/* Search Header */}
      <div className="space-y-4">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Universal Knowledge Search
          </h1>
          <p className="text-sm text-space-text-secondary mt-1">
            Search across 48 GTU engineering courses, 140+ lecture documents, and official examination papers.
          </p>
        </div>

        {/* Large Search Input */}
        <div className="max-w-2xl">
          <SearchBar
            value={inputValue}
            onChange={setInputValue}
            onClear={() => setInputValue('')}
            placeholder="Type subject (e.g. Operating System, 3140702), algorithm, or note keyword..."
            size="large"
            autoFocus
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-space-base font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-space-surface2 text-space-text-secondary hover:text-white border border-white/5'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                activeCategory === cat.id ? 'bg-black/20 text-space-base' : 'bg-white/10 text-space-text-muted'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Content */}
      {loading ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonSubjectCard key={i} />
            ))}
          </div>
        </div>
      ) : !inputValue.trim() ? (
        <div className="p-12 text-center rounded-card bg-space-surface1/40 border border-white/5 space-y-3">
          <Search size={32} className="mx-auto text-cyan-400 opacity-60" />
          <h3 className="font-display text-lg font-bold text-white">
            Initialize Search Trajectory
          </h3>
          <p className="text-xs text-space-text-secondary max-w-md mx-auto leading-relaxed">
            Enter a GTU course code (e.g., 3140702), subject title, or specific topic to search through the entire academic universe.
          </p>
        </div>
      ) : results.total === 0 ? (
        <EmptyState
          title="Zero Nodes Located"
          message={`No academic nodes, subjects, or question papers matched "${inputValue}".`}
          onAction={() => setInputValue('')}
          actionLabel="Clear Search"
        />
      ) : (
        <div className="space-y-10">
          {/* SECTION: SUBJECTS */}
          {(activeCategory === 'all' || activeCategory === 'subjects') && results.subjects?.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <BookOpen size={14} />
                <span>Matching Subjects ({results.subjects.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.subjects.map((sub) => (
                  <SubjectCard key={sub.id} subject={sub} />
                ))}
              </div>
            </div>
          )}

          {/* SECTION: MATERIALS */}
          {(activeCategory === 'all' || activeCategory === 'materials') && results.materials?.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <FileText size={14} />
                <span>Matching Documents ({results.materials.length})</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {results.materials.map((mat) => (
                  <ResourceCard key={mat.id} resource={mat} />
                ))}
              </div>
            </div>
          )}

          {/* SECTION: SYLLABUS TOPICS */}
          {(activeCategory === 'all' || activeCategory === 'syllabus') && results.syllabus?.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <Layers size={14} />
                <span>Matching Syllabus Units ({results.syllabus.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {results.syllabus.map((unit) => (
                  <Link
                    key={unit.id}
                    to={`/subject/${unit.subjectId}?tab=syllabus`}
                    className="p-5 rounded-card bg-space-surface1/80 border border-white/10 hover:border-cyan-500/30 transition-all flex items-start gap-4 group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      U{unit.unitNumber}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {unit.title}
                      </h4>
                      <p className="text-xs text-space-text-secondary mt-1 line-clamp-2">
                        {unit.topics?.join(', ')}
                      </p>
                    </div>
                    <ArrowRight size={14} className="text-space-text-muted group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* SECTION: PYQS */}
          {(activeCategory === 'all' || activeCategory === 'pyqs') && results.pyqs?.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-violet-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <Award size={14} />
                <span>Matching GTU Examination Papers ({results.pyqs.length})</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {results.pyqs.map((pyq) => (
                  <PYQCard key={pyq.id} pyq={pyq} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
