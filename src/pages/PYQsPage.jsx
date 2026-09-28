import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Award, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import PYQFilterBar from '../features/pyqs/PYQFilterBar.jsx';
import PYQCard from '../features/pyqs/PYQCard.jsx';
import SearchBar from '../components/common/SearchBar.jsx';
import { usePYQs } from '../hooks/usePYQs.js';
import { SkeletonResourceCard } from '../components/common/Skeleton.jsx';
import ErrorState from '../components/common/ErrorState.jsx';
import EmptyState from '../components/common/EmptyState.jsx';

export default function PYQsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSearch = searchParams.get('q') || '';
  const currentSem = searchParams.get('semester') || 'all';
  const currentYear = searchParams.get('year') || 'all';
  const currentSeason = searchParams.get('season') || 'all';
  const currentSort = searchParams.get('sort') || 'latest';

  const filterArgs = useMemo(() => {
    return {
      search: currentSearch,
      semesterId: currentSem !== 'all' ? currentSem : null,
      year: currentYear !== 'all' ? currentYear : null,
      season: currentSeason !== 'all' ? currentSeason : null,
      sort: currentSort,
    };
  }, [currentSearch, currentSem, currentYear, currentSeason, currentSort]);

  const { pyqs, loading, error, refetch } = usePYQs(filterArgs);

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === 'all' || value === '') {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const handleResetFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'GTU Previous Year Papers', href: '/pyqs' }]} />

      {/* Header Banner */}
      <div className="relative rounded-card-lg p-8 sm:p-10 bg-space-surface1/80 border border-white/10 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-300">
            <Award size={13} />
            <span>Official University Question Archives</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            GTU Previous Year Question Papers
          </h1>
          <p className="text-sm sm:text-base text-space-text-secondary leading-relaxed">
            Authentic 70-mark theory examination papers from 2021 through 2024. Complete with verified solutions, marking schemes, and question weightages.
          </p>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="max-w-xl">
        <SearchBar
          value={currentSearch}
          onChange={(val) => updateParam('q', val)}
          onClear={() => updateParam('q', '')}
          placeholder="Search question papers by subject name or GTU code..."
          showShortcut={false}
        />
      </div>

      {/* Filter & Sort Bar */}
      <PYQFilterBar
        selectedSem={currentSem}
        onSemChange={(val) => updateParam('semester', val)}
        selectedYear={currentYear}
        onYearChange={(val) => updateParam('year', val)}
        selectedSeason={currentSeason}
        onSeasonChange={(val) => updateParam('season', val)}
        selectedSort={currentSort}
        onSortChange={(val) => updateParam('sort', val)}
        onReset={handleResetFilters}
        totalCount={pyqs.length}
      />

      {/* PYQ Papers Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonResourceCard key={i} />
          ))}
        </div>
      ) : error ? (
        <ErrorState onRetry={refetch} message={error} />
      ) : pyqs.length === 0 ? (
        <EmptyState
          title="No Exam Papers Located"
          message="No question papers match your chosen combination of year, season, and semester."
          onAction={handleResetFilters}
          actionLabel="Reset Exam Filters"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pyqs.map((pyq) => (
            <PYQCard key={pyq.id} pyq={pyq} />
          ))}
        </div>
      )}
    </div>
  );
}
