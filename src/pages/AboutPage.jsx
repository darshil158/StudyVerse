import React from 'react';
import { Compass, Sparkles, Orbit, ShieldCheck, Heart, Code2, Globe, BookOpen } from 'lucide-react';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';

export default function AboutPage() {
  const faqs = [
    {
      q: 'Is StudyVerse really completely free for all GTU students?',
      a: 'Yes, 100% free with zero paywalls, no subscriptions, and no advertisements. StudyVerse is NOT a marketplace and will never monetize student access.'
    },
    {
      q: 'How accurately does this map to the official GTU syllabus?',
      a: 'All 48 subjects strictly follow the official Gujarat Technological University (GTU) B.E. / B.Tech Computer Engineering & Information Technology scheme, referencing valid 7-digit course codes (e.g., 3140702).'
    },
    {
      q: 'Can I download the question papers and notes offline?',
      a: 'Yes. Every resource card and PYQ paper features a dedicated direct download button that saves clean PDF or PPT files directly to your device.'
    },
    {
      q: 'What is "The Knowledge Universe" metaphor?',
      a: 'Rather than boring nested folders or generic tables, StudyVerse represents your 4-year degree as 8 celestial planetary orbits orbiting a glowing central core of computational wisdom. Each subject is a moon node containing valuable document assets.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'About StudyVerse', href: '/about' }]} />

      {/* Hero Header */}
      <div className="relative rounded-card-lg p-8 sm:p-12 bg-space-surface1/80 border border-white/10 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <Orbit size={13} />
            <span>Platform Philosophy & Vision</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Crafted for GTU Engineers
          </h1>

          <p className="text-sm sm:text-base text-space-text-secondary leading-relaxed">
            StudyVerse was architected from the ground up to solve the fragmented state of GTU academic materials. No spam, no cluttered portals, no confusing WhatsApp groups—just pure, structured knowledge.
          </p>
        </div>
      </div>

      {/* Core Metaphor & Design Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-card bg-space-surface1/80 border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
            <Orbit size={20} />
          </div>
          <h3 className="font-display text-lg font-bold text-white">
            The Orbital Universe
          </h3>
          <p className="text-xs text-space-text-secondary leading-relaxed">
            8 Semesters visualized as 8 concentric planetary orbits around a central Knowledge Core. Subjects act as moon nodes, anchoring verified resources.
          </p>
        </div>

        <div className="p-6 rounded-card bg-space-surface1/80 border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center">
            <ShieldCheck size={20} />
          </div>
          <h3 className="font-display text-lg font-bold text-white">
            Zero-Marketplace Ethics
          </h3>
          <p className="text-xs text-space-text-secondary leading-relaxed">
            Education should be accessible to every engineering student without payment barriers. Every single note, slide, and PYQ paper is 100% free forever.
          </p>
        </div>

        <div className="p-6 rounded-card bg-space-surface1/80 border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-400 flex items-center justify-center">
            <Code2 size={20} />
          </div>
          <h3 className="font-display text-lg font-bold text-white">
            Studio-Grade Engineering
          </h3>
          <p className="text-xs text-space-text-secondary leading-relaxed">
            Engineered with React 18, Three.js / R3F WebGL acceleration, Framer Motion springs, and accessible dark-space ergonomics.
          </p>
        </div>
      </div>

      {/* Technical Architecture Overview */}
      <div className="p-8 rounded-card-lg bg-space-surface1/60 border border-white/10 space-y-6">
        <div>
          <h3 className="font-display text-xl font-bold text-white">
            Technical Architecture & Design System
          </h3>
          <p className="text-xs text-space-text-secondary mt-1">
            Built using modern, performant web standards.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-4 rounded-lg bg-space-surface2/60 border border-white/5 space-y-1">
            <div className="text-space-text-muted">Frontend Core</div>
            <div className="font-bold text-white">React 18 + Vite</div>
          </div>
          <div className="p-4 rounded-lg bg-space-surface2/60 border border-white/5 space-y-1">
            <div className="text-space-text-muted">Interactive 3D</div>
            <div className="font-bold text-cyan-400">Three.js + R3F</div>
          </div>
          <div className="p-4 rounded-lg bg-space-surface2/60 border border-white/5 space-y-1">
            <div className="text-space-text-muted">Motion Physics</div>
            <div className="font-bold text-blue-400">Framer Motion</div>
          </div>
          <div className="p-4 rounded-lg bg-space-surface2/60 border border-white/5 space-y-1">
            <div className="text-space-text-muted">Cloud Database</div>
            <div className="font-bold text-emerald-400">Supabase SQL</div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="space-y-6">
        <h3 className="font-display text-2xl font-bold text-white tracking-tight">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 rounded-card bg-space-surface1/80 border border-white/10 space-y-2"
            >
              <h4 className="font-display text-base font-bold text-white">
                {faq.q}
              </h4>
              <p className="text-xs sm:text-sm text-space-text-secondary leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
