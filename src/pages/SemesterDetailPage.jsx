import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sparkles, Layers, BookOpen, FileText, Award, ArrowLeft, ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import SubjectCard from '../features/subjects/SubjectCard.jsx';
import { useSemester } from '../hooks/useSemesters.js';
import { useSubjects } from '../hooks/useSubjects.js';
import { SkeletonSubjectCard } from '../components/common/Skeleton.jsx';
import ErrorState from '../components/common/ErrorState.jsx';
import EmptyState from '../components/common/EmptyState.jsx';
import { getSemesterColor } from '../lib/utils.js';

export default function SemesterDetailPage() {
  const { id } = useParams();
  const semNumber = Number(id) || 1;
  const { semester, loading: semLoading, error: semError, refetch: refetchSem } = useSemester(semNumber);
  const { subjects, loading: subsLoading, error: subsError, refetch: refetchSubs } = useSubjects(semNumber);

  const semColor = getSemesterColor(semNumber);

  const prevSem = semNumber > 1 ? semNumber - 1 : null;
  const nextSem = semNumber < 8 ? semNumber + 1 : null;

  if (semError) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ErrorState onRetry={refetchSem} message={semError} />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Semesters', href: '/semesters' },
          { label: `Semester ${semNumber}`, href: `/semester/${semNumber}` }
        ]}
      />

      {/* Hero Banner for this Specific Orbit */}
      <div className="relative rounded-card-lg p-8 sm:p-10 bg-space-surface1/80 border border-white/10 overflow-hidden shadow-2xl">
        {/* Orbit ambient color wash */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ backgroundColor: semColor.hex }}
        />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider border"
              style={{
                backgroundColor: `${semColor.hex}18`,
                borderColor: `${semColor.hex}40`,
                color: semColor.hex
              }}
            >
              <Sparkles size={12} />
              <span>Orbit {semNumber} ({semester?.roman || 'I'})</span>
            </span>

            <span className="text-xs font-mono text-space-text-muted px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
              6 Subjects • {semester?.credits || 20} Credits
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {semester?.title || `Semester ${semNumber}`}
          </h1>
          <p className="text-base text-space-text-secondary leading-relaxed">
            {semester?.description}
          </p>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <Link
              to={`/materials?semester=${semNumber}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-card text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 hover:border-cyan-400/30 transition-all"
            >
              <FileText size={14} className="text-cyan-400" />
              <span>View Semester {semNumber} Notes</span>
            </Link>

            <Link
              to={`/pyqs?semester=${semNumber}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-card text-xs font-semibold text-space-text-secondary hover:text-white bg-space-surface2 hover:bg-space-surface3 border border-white/10 transition-all"
            >
              <Award size={14} className="text-violet-400" />
              <span>Semester {semNumber} Exam Papers</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Orbit Trajectory Navigation (Previous / Next) */}
      <div className="flex items-center justify-between border-y border-white/5 py-4">
        {prevSem ? (
          <Link
            to={`/semester/${prevSem}`}
            className="flex items-center gap-2 text-xs font-mono text-space-text-secondary hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Orbit {prevSem}: Semester {prevSem}</span>
          </Link>
        ) : (
          <span />
        )}

        {nextSem ? (
          <Link
            to={`/semester/${nextSem}`}
            className="flex items-center gap-2 text-xs font-mono text-space-text-secondary hover:text-cyan-300 transition-colors ml-auto"
          >
            <span>Orbit {nextSem}: Semester {nextSem}</span>
            <ArrowRight size={14} />
          </Link>
        ) : (
          <span />
        )}
      </div>

      {/* Section: 6 Subjects in this Semester */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Layers size={14} />
              <span>Curriculum Moons</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-white tracking-tight">
              Prescribed Subjects (6 Courses)
            </h2>
          </div>
          <span className="text-xs font-mono text-space-text-muted">
            All subjects aligned with GTU BE syllabus
          </span>
        </div>

        {subsLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonSubjectCard key={i} />
            ))}
          </div>
        ) : subsError ? (
          <ErrorState onRetry={refetchSubs} message={subsError} />
        ) : subjects.length === 0 ? (
          <EmptyState
            title="No Subjects Located"
            message={`No subject records found orbiting Semester ${semNumber}.`}
            actionLabel="Return to Semesters"
            actionLink="/semesters"
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((sub) => (
              <SubjectCard key={sub.id} subject={sub} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
