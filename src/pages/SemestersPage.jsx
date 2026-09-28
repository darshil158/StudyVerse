import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Layers, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import SemesterCard from '../features/semesters/SemesterCard.jsx';
import { useSemesters } from '../hooks/useSemesters.js';
import { SkeletonSemesterCard } from '../components/common/Skeleton.jsx';
import ErrorState from '../components/common/ErrorState.jsx';
import { getSemesterColor } from '../lib/utils.js';

export default function SemestersPage() {
  const { semesters, loading, error, refetch } = useSemesters();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Academic Semesters', href: '/semesters' }]} />

      {/* Header Banner */}
      <div className="relative rounded-card-lg p-8 sm:p-10 bg-space-surface1/70 border border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <Compass size={13} />
            <span>4-Year Engineering Journey</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Academic Semester Orbits
          </h1>
          <p className="text-sm sm:text-base text-space-text-secondary leading-relaxed">
            Traverse all 8 semesters of the GTU B.E. / B.Tech computer engineering curriculum. Each orbit contains 6 specialized subjects, complete unit breakdowns, and verified study archives.
          </p>
        </div>

        {/* Platform Quick Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/5 text-xs font-mono">
          <div>
            <div className="text-space-text-muted">Total Orbits</div>
            <div className="text-lg font-bold text-white mt-0.5">8 Semesters</div>
          </div>
          <div>
            <div className="text-space-text-muted">Curriculum Nodes</div>
            <div className="text-lg font-bold text-cyan-400 mt-0.5">48 Subjects</div>
          </div>
          <div>
            <div className="text-space-text-muted">Degree Credits</div>
            <div className="text-lg font-bold text-violet-400 mt-0.5">169 Credits</div>
          </div>
          <div>
            <div className="text-space-text-muted">University Scheme</div>
            <div className="text-lg font-bold text-emerald-400 mt-0.5">GTU AICTE</div>
          </div>
        </div>
      </div>

      {/* Semesters Cards Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonSemesterCard key={i} />
          ))}
        </div>
      ) : error ? (
        <ErrorState onRetry={refetch} message={error} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {semesters.map((sem) => (
            <SemesterCard key={sem.id} semester={sem} />
          ))}
        </div>
      )}

      {/* Trajectory Timeline Summary Table */}
      <div className="rounded-card bg-space-surface1/60 border border-white/10 overflow-hidden">
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers size={16} className="text-cyan-400" />
            <h3 className="font-display font-bold text-white text-base">
              Curriculum Trajectory Matrix
            </h3>
          </div>
          <span className="text-xs font-mono text-space-text-muted">
            All Semesters Breakdown
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-space-surface2/60 text-space-text-muted font-mono uppercase tracking-wider border-b border-white/5">
              <tr>
                <th className="py-3.5 px-6">Semester</th>
                <th className="py-3.5 px-6">Theme & Specialization</th>
                <th className="py-3.5 px-6">Subjects</th>
                <th className="py-3.5 px-6">Credits</th>
                <th className="py-3.5 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-space-text-secondary">
              {semesters.map((sem) => {
                const color = getSemesterColor(sem.number);
                return (
                  <tr key={sem.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-mono font-semibold text-white">
                      <span className="inline-flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color.hex }} />
                        <span>Semester {sem.number} ({sem.roman})</span>
                      </span>
                    </td>
                    <td className="py-4 px-6 font-medium text-white">
                      {sem.subtitle}
                    </td>
                    <td className="py-4 px-6 font-mono">
                      6 Subjects
                    </td>
                    <td className="py-4 px-6 font-mono text-cyan-400 font-semibold">
                      {sem.credits}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        to={`/semester/${sem.id}`}
                        className="inline-flex items-center gap-1 font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Inspect</span>
                        <ArrowRight size={12} />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
