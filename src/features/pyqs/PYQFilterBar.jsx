import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';
import Dropdown from '../../components/common/Dropdown.jsx';
import { SEMESTERS } from '../../data/semesters.js';

export default function PYQFilterBar({
  selectedSem,
  onSemChange,
  selectedYear,
  onYearChange,
  selectedSeason,
  onSeasonChange,
  selectedSort,
  onSortChange,
  onReset,
  totalCount = 0
}) {
  const semOptions = [
    { value: 'all', label: 'All Semesters (1-8)' },
    ...SEMESTERS.map((s) => ({ value: s.id.toString(), label: `Semester ${s.number}` }))
  ];

  const yearOptions = [
    { value: 'all', label: 'All Exam Years' },
    { value: '2024', label: 'Year 2024' },
    { value: '2023', label: 'Year 2023' },
    { value: '2022', label: 'Year 2022' },
    { value: '2021', label: 'Year 2021' },
  ];

  const seasonOptions = [
    { value: 'all', label: 'All Examination Sessions' },
    { value: 'Summer', label: 'Summer Exam Session' },
    { value: 'Winter', label: 'Winter Exam Session' },
  ];

  const sortOptions = [
    { value: 'latest', label: 'Most Recent Year' },
    { value: 'popular', label: 'Most Downloaded' },
  ];

  const isFiltered = (selectedSem && selectedSem !== 'all') || 
                     (selectedYear && selectedYear !== 'all') || 
                     (selectedSeason && selectedSeason !== 'all');

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-card bg-space-surface1/80 border border-white/10 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-xs font-mono text-violet-400 font-semibold uppercase tracking-wider">
          <Filter size={14} />
          <span>Exam Filters</span>
        </div>
        <span className="text-xs text-space-text-muted font-mono">
          Showing <span className="text-white font-semibold">{totalCount}</span> papers
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
          label="Year"
          options={yearOptions}
          value={selectedYear || 'all'}
          onChange={onYearChange}
        />

        <Dropdown
          label="Season"
          options={seasonOptions}
          value={selectedSeason || 'all'}
          onChange={onSeasonChange}
        />

        <Dropdown
          label="Sort"
          options={sortOptions}
          value={selectedSort || 'latest'}
          onChange={onSortChange}
        />

        {isFiltered && (
          <button
            type="button"
            onClick={onReset}
            className="p-2 rounded-lg text-space-text-muted hover:text-white bg-space-surface2 hover:bg-space-surface3 border border-white/10 transition-colors"
            title="Reset exam filters"
            aria-label="Reset exam filters"
          >
            <RotateCcw size={14} />
          </button>
        )}
      </div>
    </div>
  );
}
