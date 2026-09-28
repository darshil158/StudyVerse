import React, { Suspense, lazy, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  BookOpen, 
  Layers, 
  Award, 
  FileText, 
  Compass, 
  CheckCircle2, 
  Zap, 
  ShieldCheck,
  Globe,
  Users
} from 'lucide-react';
import { SEMESTERS } from '../data/semesters.js';
import { SUBJECTS } from '../data/subjects.js';
import { MATERIALS } from '../data/materials.js';
import { PLATFORM_STATS } from '../data/stats.js';
import SemesterCard from '../features/semesters/SemesterCard.jsx';
import SubjectCard from '../features/subjects/SubjectCard.jsx';
import ResourceCard from '../features/materials/ResourceCard.jsx';
import AnimatedCounter from '../components/common/AnimatedCounter.jsx';
import Hero3DFallback from '../components/3d/Hero3DFallback.jsx';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js';

// Lazy-load the 3D Hero Scene
const Hero3D = lazy(() => import('../components/3d/Hero3D.jsx'));

export default function HomePage() {
  const [heroSearch, setHeroSearch] = useState('');
  const navigate = useNavigate();
  const prefersReduced = usePrefersReducedMotion();

  const handleHeroSearchSubmit = (e) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      navigate(`/search?q=${encodeURIComponent(heroSearch.trim())}`);
    }
  };

  // High-yield featured subjects from core semesters
  const featuredSubjects = [
    SUBJECTS.find((s) => s.code === '3140702'), // OS
    SUBJECTS.find((s) => s.code === '3140701'), // DAA
    SUBJECTS.find((s) => s.code === '3130702'), // DS
    SUBJECTS.find((s) => s.code === '3130703'), // DBMS
    SUBJECTS.find((s) => s.code === '3150710'), // CN
    SUBJECTS.find((s) => s.code === '3170716'), // ML
  ].filter(Boolean);

  // Popular downloaded resources
  const popularMaterials = [...MATERIALS]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 3);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* ============================================================== */}
      {/* 1. HERO SECTION (3D Universe + Headline + Search + CTAs) */}
      {/* ============================================================== */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-8 overflow-hidden">
        {/* 3D Knowledge Core Universe Canvas */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <Suspense fallback={<Hero3DFallback />}>
            <Hero3D />
          </Suspense>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6 pointer-events-auto">
          {/* Cosmic Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-mono text-cyan-300 border border-cyan-500/30 shadow-lg shadow-cyan-500/10"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>GTU B.E. / B.Tech Engineering Portal</span>
            <span className="text-white/30">•</span>
            <span className="text-space-text-secondary">8 Semesters × 6 Subjects</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Your World of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
                GTU Knowledge
              </span>
            </h1>
            <p className="text-base sm:text-xl text-space-text-secondary max-w-2xl mx-auto font-normal leading-relaxed">
              Navigate all 8 academic orbits. Access comprehensive GTU syllabus breakdowns, toppers’ notes, lecture slide decks, and official previous year question papers.
            </p>
          </motion.div>

          {/* Hero Quick Search Box */}
          <motion.form
            onSubmit={handleHeroSearchSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto relative flex items-center"
          >
            <div className="absolute left-4 text-cyan-400 pointer-events-none">
              <Search size={18} />
            </div>
            <input
              type="text"
              value={heroSearch}
              onChange={(e) => setHeroSearch(e.target.value)}
              placeholder="Search subject (e.g. OS, 3140702), unit topic, or PYQ..."
              className="w-full py-4 pl-12 pr-32 rounded-card glass-dropdown border border-white/15 text-white placeholder-space-text-muted text-sm sm:text-base focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 shadow-2xl transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20 active:scale-95"
            >
              Search
            </button>
          </motion.form>

          {/* Quick CTA Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs"
          >
            <Link
              to="/semesters"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-card font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 hover:border-cyan-400/40 transition-all shadow-lg"
            >
              <span>Explore All 8 Orbits</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/pyqs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-card font-semibold text-space-text-secondary hover:text-white bg-space-surface1/60 hover:bg-space-surface2 border border-white/10 transition-all"
            >
              <Award size={14} className="text-violet-400" />
              <span>Practice GTU Papers</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SEMESTER ORBIT SHORTCUTS (1 - 8) */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Compass size={14} />
              <span>Curriculum Trajectory</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Academic Semester Orbits
            </h2>
          </div>
          <Link
            to="/semesters"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <span>View Complete Semester Maps</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 8 Semester Planet Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SEMESTERS.map((semester) => (
            <SemesterCard key={semester.id} semester={semester} />
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. BENTO STATS (Animated Counters + Open Access) */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <ShieldCheck size={14} />
            <span>Platform Metrics</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Engineered For GTU Academic Success
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLATFORM_STATS.map((stat) => (
            <div
              key={stat.id}
              className="p-6 rounded-card bg-space-surface1/80 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: `${stat.accentColor}18`,
                    color: stat.accentColor,
                    border: `1px solid ${stat.accentColor}30`,
                  }}
                >
                  <Sparkles size={18} />
                </span>
                <span className="font-mono text-xs text-space-text-muted uppercase">
                  Verified Data
                </span>
              </div>

              <div>
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-1 group-hover:text-cyan-200 transition-colors">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  {stat.label}
                </h4>
                <p className="text-xs text-space-text-secondary leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. FEATURED CORE SUBJECTS */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono text-violet-400 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <BookOpen size={14} />
              <span>Core Computing Foundation</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured High-Impact Subjects
            </h2>
          </div>
          <Link
            to="/materials"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <span>Explore All 48 Subjects</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSubjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. POPULAR & RECENT MATERIALS */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <FileText size={14} />
              <span>Curated Resources</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Most Downloaded Academic Assets
            </h2>
          </div>
          <Link
            to="/materials"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <span>Browse Full Library</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularMaterials.map((material) => (
            <ResourceCard key={material.id} resource={material} />
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. HOW IT WORKS (3 Steps: Semester -> Subject -> Learn) */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-card-lg bg-space-surface1/60 border border-white/10 relative overflow-hidden">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider mb-2">
              Three-Step Orbital Navigation
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              How StudyVerse Accelerates Your GTU Prep
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="p-6 rounded-card bg-space-surface2/60 border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-base font-bold flex items-center justify-center">
                01
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                Select Your Orbit
              </h3>
              <p className="text-xs text-space-text-secondary leading-relaxed">
                Choose any semester from Sem 1 through Sem 8 to lock onto your current engineering trajectory and active subjects.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-card bg-space-surface2/60 border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-base font-bold flex items-center justify-center">
                02
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                Inspect Subject Moon
              </h3>
              <p className="text-xs text-space-text-secondary leading-relaxed">
                Review syllabus teaching hours, official GTU exam weightages, high-yield exam topics, and prerequisite relationships.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-card bg-space-surface2/60 border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-400 font-mono text-base font-bold flex items-center justify-center">
                03
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                Learn & Practice
              </h3>
              <p className="text-xs text-space-text-secondary leading-relaxed">
                Download verified handwritten notes, study presentation decks, and solve authentic Summer/Winter university exam papers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. SUBJECT MARQUEE (Slow, pauses on hover, off for reduced-motion) */}
      {/* ============================================================== */}
      <section className="relative overflow-hidden py-6 border-y border-white/10 bg-space-surface1/30">
        <div className="flex w-max space-x-6 hover:[animation-play-state:paused] animate-marquee">
          {SUBJECTS.concat(SUBJECTS.slice(0, 24)).map((subject, idx) => (
            <Link
              key={idx}
              to={`/subject/${subject.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-space-surface2/60 border border-white/5 hover:border-cyan-500/30 text-xs text-space-text-secondary hover:text-white transition-colors shrink-0"
            >
              <span className="font-mono text-cyan-400 text-[11px]">{subject.code}</span>
              <span className="font-medium">{subject.name}</span>
              <span className="text-[10px] font-mono text-space-text-muted">Sem {subject.semesterId}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. FINAL CTA BANNER */}
      {/* ============================================================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-card-lg p-8 sm:p-12 text-center bg-gradient-to-br from-cyan-950/40 via-space-surface1 to-violet-950/40 border border-cyan-500/30 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Explore Your Semester?
            </h2>
            <p className="text-sm text-space-text-secondary leading-relaxed">
              Join thousands of Gujarat engineering students mastering their university curriculum with StudyVerse. 100% free, forever.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/semesters"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-card text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 active:scale-95"
              >
                <span>Launch Semester Orbit</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-card text-sm font-semibold text-space-text-secondary hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <span>Platform Architecture</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
