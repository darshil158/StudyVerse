import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { 
  BookOpen, 
  Sparkles, 
  Layers, 
  Calendar, 
  Award, 
  FileText, 
  GitFork, 
  CheckCircle2, 
  Clock, 
  HardDrive,
  Download,
  Eye,
  ExternalLink
} from 'lucide-react';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import SubjectTabs from '../features/subjects/SubjectTabs.jsx';
import SyllabusUnit from '../features/syllabus/SyllabusUnit.jsx';
import ResourceCard from '../features/materials/ResourceCard.jsx';
import PYQCard from '../features/pyqs/PYQCard.jsx';
import SubjectCard from '../features/subjects/SubjectCard.jsx';
import { useSubject } from '../hooks/useSubject.js';
import { useSyllabus } from '../hooks/useSyllabus.js';
import { useMaterials } from '../hooks/useMaterials.js';
import { usePYQs } from '../hooks/usePYQs.js';
import { useSubjects } from '../hooks/useSubjects.js';
import { SkeletonSubjectCard, SkeletonResourceCard } from '../components/common/Skeleton.jsx';
import ErrorState from '../components/common/ErrorState.jsx';
import EmptyState from '../components/common/EmptyState.jsx';
import { getSemesterColor } from '../lib/utils.js';
import { CATEGORIES } from '../data/categories.js';

export default function SubjectDetailPage() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'overview';

  const { subject, loading: subLoading, error: subError, refetch: refetchSub } = useSubject(id);
  const { units, loading: sylLoading } = useSyllabus(subject?.id);
  const { materials, loading: matLoading } = useMaterials({ subjectId: subject?.id });
  const { pyqs, loading: pyqLoading } = usePYQs({ subjectId: subject?.id });
  const { subjects: allSubjects } = useSubjects();

  const handleTabChange = (tabId) => {
    setSearchParams({ tab: tabId });
  };

  const semColor = getSemesterColor(subject?.semesterId || 1);
  const category = CATEGORIES.find((c) => c.id === subject?.categoryId);

  // Filter materials by type for specialized tabs
  const pdfMaterials = materials.filter((m) => m.type === 'pdf' || m.type === 'notes');
  const pptMaterials = materials.filter((m) => m.type === 'ppt');

  // Related subjects
  const relatedSubjects = (subject?.relatedSubjectIds || [])
    .map((relId) => allSubjects.find((s) => s.id === relId))
    .filter(Boolean);

  if (subLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-6">
        <SkeletonSubjectCard />
      </div>
    );
  }

  if (subError || !subject) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ErrorState
          title="Subject Node Not Found"
          message={subError || `No subject with identifier "${id}" exists in the StudyVerse universe.`}
          onRetry={refetchSub}
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Semesters', href: '/semesters' },
          { label: `Semester ${subject.semesterId}`, href: `/semester/${subject.semesterId}` },
          { label: subject.shortName || subject.name, href: `/subject/${subject.id}` }
        ]}
      />

      {/* Subject Header Banner */}
      <div className="relative rounded-card-lg p-6 sm:p-8 bg-space-surface1/90 border border-white/10 overflow-hidden shadow-2xl">
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ backgroundColor: semColor.hex }}
        />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider border"
              style={{
                backgroundColor: `${semColor.hex}18`,
                borderColor: `${semColor.hex}40`,
                color: semColor.hex
              }}
            >
              <Sparkles size={12} />
              <span>Semester {subject.semesterId} Orbit</span>
            </span>

            <span className="font-mono text-xs font-bold text-white px-3 py-1 rounded-full bg-white/10 border border-white/15">
              GTU Code: {subject.code}
            </span>

            {category && (
              <span
                className="text-xs font-mono px-3 py-1 rounded-full border"
                style={{
                  backgroundColor: `${category.color}15`,
                  borderColor: `${category.color}35`,
                  color: category.color
                }}
              >
                {category.name} ({category.code})
              </span>
            )}
          </div>

          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {subject.name}
          </h1>

          <p className="text-sm sm:text-base text-space-text-secondary max-w-3xl leading-relaxed">
            {subject.description}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/5 text-xs font-mono">
            <div>
              <span className="text-space-text-muted">Degree Credits</span>
              <div className="text-base font-bold text-cyan-400 mt-0.5">{subject.credits} Credits</div>
            </div>
            <div>
              <span className="text-space-text-muted">Teaching Units</span>
              <div className="text-base font-bold text-white mt-0.5">{units.length || 5} Units</div>
            </div>
            <div>
              <span className="text-space-text-muted">Study Archives</span>
              <div className="text-base font-bold text-emerald-400 mt-0.5">{materials.length} Documents</div>
            </div>
            <div>
              <span className="text-space-text-muted">Exam Papers</span>
              <div className="text-base font-bold text-violet-400 mt-0.5">{pyqs.length} PYQs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Container */}
      <div className="rounded-card bg-space-surface1/60 border border-white/10 overflow-hidden shadow-xl">
        <SubjectTabs
          activeTab={activeTab}
          onChange={handleTabChange}
          counts={{
            syllabus: units.length,
            materials: materials.length,
            pdfs: pdfMaterials.length,
            ppts: pptMaterials.length,
            pyqs: pyqs.length,
            topics: subject.importantTopics?.length || 0,
            related: relatedSubjects.length,
          }}
        />

        {/* Tab Content Panes */}
        <div className="p-6 sm:p-8">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Important Exam Focus Topics */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Sparkles size={18} />
                  <h3 className="font-display text-lg font-bold text-white">
                    High-Yield GTU Exam Topics
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {subject.importantTopics?.map((topic, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg bg-space-surface2/60 border border-white/5 flex items-start gap-3 hover:border-cyan-500/20 transition-colors"
                    >
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-space-text-secondary leading-relaxed font-medium">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Resources Spotlight */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                    <FileText size={18} className="text-emerald-400" />
                    <span>Featured Notes & Lecture Slides</span>
                  </h3>
                  <button
                    onClick={() => handleTabChange('materials')}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    View All {materials.length} Materials
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {materials.slice(0, 3).map((mat) => (
                    <ResourceCard key={mat.id} resource={mat} />
                  ))}
                </div>
              </div>

              {/* Quick PYQs Spotlight */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                    <Award size={18} className="text-violet-400" />
                    <span>Recent University Papers</span>
                  </h3>
                  <button
                    onClick={() => handleTabChange('pyqs')}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    View All {pyqs.length} Papers
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pyqs.slice(0, 2).map((pyq) => (
                    <PYQCard key={pyq.id} pyq={pyq} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SYLLABUS */}
          {activeTab === 'syllabus' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-white/5">
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Official GTU Teaching Syllabus Breakdown
                  </h3>
                  <p className="text-xs text-space-text-secondary mt-0.5">
                    Click each unit to inspect specific theoretical concepts and laboratory competencies.
                  </p>
                </div>
                <span className="text-xs font-mono text-cyan-400">
                  Total Weightage: 100%
                </span>
              </div>

              {sylLoading ? (
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <SkeletonResourceCard key={i} />
                  ))}
                </div>
              ) : units.length === 0 ? (
                <EmptyState
                  title="Syllabus In Orbit"
                  message="Unit breakdown currently synchronizing from university repository."
                />
              ) : (
                <div className="space-y-4">
                  {units.map((unit, index) => (
                    <SyllabusUnit
                      key={unit.id}
                      unit={unit}
                      defaultExpanded={index === 0}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: MATERIALS (ALL) */}
          {activeTab === 'materials' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-white">
                  Curated Academic Materials ({materials.length})
                </h3>
              </div>

              {matLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <SkeletonResourceCard key={i} />
                  ))}
                </div>
              ) : materials.length === 0 ? (
                <EmptyState title="No Materials Available" message="No study documents uploaded for this subject yet." />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {materials.map((mat) => (
                    <ResourceCard key={mat.id} resource={mat} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: PDFS & NOTES ONLY */}
          {activeTab === 'pdfs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-white">
                  Handwritten Notes & Formula PDFs ({pdfMaterials.length})
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pdfMaterials.map((mat) => (
                  <ResourceCard key={mat.id} resource={mat} />
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: PPT SLIDES */}
          {activeTab === 'ppts' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-white">
                  Classroom Lecture Slide Decks ({pptMaterials.length})
                </h3>
              </div>
              {pptMaterials.length === 0 ? (
                <EmptyState title="No Slide Decks" message="Slide presentations will be uploaded before the upcoming semester." />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pptMaterials.map((mat) => (
                    <ResourceCard key={mat.id} resource={mat} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 6: GTU PYQS */}
          {activeTab === 'pyqs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Previous Year Question Papers ({pyqs.length})
                  </h3>
                  <p className="text-xs text-space-text-secondary mt-0.5">
                    Official 70-mark university theory examination papers from 2021 to 2024.
                  </p>
                </div>
              </div>

              {pyqLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <SkeletonResourceCard key={i} />
                  ))}
                </div>
              ) : pyqs.length === 0 ? (
                <EmptyState title="No PYQs Found" message="Question papers for this course are being cataloged." />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pyqs.map((pyq) => (
                    <PYQCard key={pyq.id} pyq={pyq} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 7: IMPORTANT TOPICS */}
          {activeTab === 'important' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  GTU Exam Analysis & Crucial Question Areas
                </h3>
                <p className="text-xs text-space-text-secondary mt-1">
                  Historically recurring topics with maximum question paper frequency.
                </p>
              </div>

              <div className="space-y-3">
                {subject.importantTopics?.map((topic, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-card bg-space-surface2/60 border border-white/5 flex items-start gap-4"
                  >
                    <span className="w-7 h-7 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white">
                        {topic}
                      </h4>
                      <p className="text-xs text-space-text-secondary leading-relaxed">
                        Frequently tested in 7-mark and 4-mark GTU examination patterns. Practice derivations and real code snippets.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: RELATED SUBJECT MOONS */}
          {activeTab === 'related' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Prerequisites & Next-Orbit Subjects
                </h3>
                <p className="text-xs text-space-text-secondary mt-1">
                  Subjects closely interconnected with {subject.name} across adjacent semesters.
                </p>
              </div>

              {relatedSubjects.length === 0 ? (
                <EmptyState
                  title="No Linked Nodes"
                  message="This subject is an independent foundational node in the curriculum."
                />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedSubjects.map((relSub) => (
                    <SubjectCard key={relSub.id} subject={relSub} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
