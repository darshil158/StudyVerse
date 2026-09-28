import React from 'react';
import { Filter, SlidersHorizontal, RotateCcw } from 'lucide-react';
import Dropdown from '../../components/common/Dropdown.jsx';
import { SEMESTERS } from '../../data/semesters.js';

export default function MaterialFilterBar({
  selectedSem,
  onSemChange,
  selectedType,
  onTypeChange,
  selectedSort,
  onSortChange,
  onReset,
  totalCount = 0
}) {
  const semOptions = [
    { value: 'all', label: 'All Semesters (1-8)' },
    ...SEMESTERS.map((s) => ({ value: s.id.toString(), label: `Semester ${s.number}` }))
  ];

  const typeOptions = [
    { value: 'all', label: 'All File Formats' },
    { value: 'pdf', label: 'Handwritten Notes (PDF)' },
    { value: 'ppt', label: 'Classroom Slides (PPT)' },
    { value: 'notes', label: 'Formula Sheets' },
  ];

  const sortOptions = [
    { value: 'popular', label: 'Most Downloaded' },
    { value: 'latest', label: 'Recently Uploaded' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'name', label: 'Title Alphabetical' },
  ];

  const isFiltered = (selectedSem && selectedSem !== 'all') || (selectedType && selectedType !== 'all');

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-card bg-space-surface1/80 border border-white/10 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
          <Filter size={14} />
          <span>Filters</span>
        </div>
        <span className="text-xs text-space-text-muted font-mono">
          Showing <span className="text-white font-semibold">{totalCount}</span> documents
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <Dropdown
          label="Semester"
          options={semOptions}
          value={selectedSem || 'all'}
          onChange={onSemChange}
        />

        <Dropdown
          label="Type"
          options={typeOptions}
          value={selectedType || 'all'}
          onChange={onTypeChange}
        />

        <Dropdown
          label="Sort By"
          options={sortOptions}
          value={selectedSort || 'popular'}
          onChange={onSortChange}
        />

        {isFiltered && (
          <button
            type="button"
            onClick={onReset}
            className="p-2 rounded-lg text-space-text-muted hover:text-white bg-space-surface2 hover:bg-space-surface3 border border-white/10 transition-colors"
            title="Reset active filters"
            aria-label="Reset filters"
          >
            <RotateCcw size={14} />
          </button>
        )}
      </div>
    </div>
  );
}
