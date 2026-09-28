import React, { useMemo } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { FileText, Sparkles, BookOpen, HardDrive } from 'lucide-react';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import MaterialFilterBar from '../features/materials/MaterialFilterBar.jsx';
import ResourceCard from '../features/materials/ResourceCard.jsx';
import SearchBar from '../components/common/SearchBar.jsx';
import { useMaterials } from '../hooks/useMaterials.js';
import { SkeletonResourceCard } from '../components/common/Skeleton.jsx';
import ErrorState from '../components/common/ErrorState.jsx';
import EmptyState from '../components/common/EmptyState.jsx';

export default function MaterialsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // If path is /materials/pdfs or /materials/ppts, lock default type
  const pathType = location.pathname.includes('/pdfs')
    ? 'pdf'
    : location.pathname.includes('/ppts')
    ? 'ppt'
    : null;

  const currentSearch = searchParams.get('q') || '';
  const currentSem = searchParams.get('semester') || 'all';
  const currentType = pathType || searchParams.get('type') || 'all';
  const currentSort = searchParams.get('sort') || 'popular';

  const filterArgs = useMemo(() => {
    return {
      search: currentSearch,
      semesterId: currentSem !== 'all' ? currentSem : null,
      type: currentType !== 'all' ? currentType : null,
      sort: currentSort,
    };
  }, [currentSearch, currentSem, currentType, currentSort]);

  const { materials, loading, error, refetch } = useMaterials(filterArgs);

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
      <Breadcrumbs
        items={[
          { label: 'Materials Portal', href: '/materials' },
          ...(pathType ? [{ label: pathType.toUpperCase() + 's', href: location.pathname }] : [])
        ]}
      />

      {/* Header Banner */}
      <div className="relative rounded-card-lg p-8 sm:p-10 bg-space-surface1/80 border border-white/10 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
            <FileText size={13} />
            <span>Curated Academic Repository</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Study Materials & Notes
          </h1>
          <p className="text-sm sm:text-base text-space-text-secondary leading-relaxed">
            Free, high-yield academic documents across all 8 semesters. Includes toppers’ handwritten PDFs, faculty slide decks, and quick-revision formula sheets.
          </p>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="max-w-xl">
        <SearchBar
          value={currentSearch}
          onChange={(val) => updateParam('q', val)}
          onClear={() => updateParam('q', '')}
          placeholder="Filter notes by topic, author, or subject keyword..."
          showShortcut={false}
        />
      </div>

      {/* Filter and Sort Toolbar */}
      <MaterialFilterBar
        selectedSem={currentSem}
        onSemChange={(val) => updateParam('semester', val)}
        selectedType={currentType}
        onTypeChange={(val) => updateParam('type', val)}
        selectedSort={currentSort}
        onSortChange={(val) => updateParam('sort', val)}
        onReset={handleResetFilters}
        totalCount={materials.length}
      />

      {/* Materials Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonResourceCard key={i} />
          ))}
        </div>
      ) : error ? (
        <ErrorState onRetry={refetch} message={error} />
      ) : materials.length === 0 ? (
        <EmptyState
          title="No Documents Found"
          message="No study materials matched your active filter trajectory. Try broadening your semester or file-type filter."
          onAction={handleResetFilters}
          actionLabel="Reset All Filters"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((mat) => (
            <ResourceCard key={mat.id} resource={mat} />
          ))}
        </div>
      )}
    </div>
  );
}
