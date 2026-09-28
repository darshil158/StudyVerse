import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Compass, ShieldCheck, Sparkles, BookOpen, ExternalLink } from 'lucide-react';
import Logo from '../common/Logo.jsx';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-space-surface1/90 relative overflow-hidden text-space-text-secondary text-sm">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[150px] bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="large" />
            <p className="text-sm text-space-text-secondary max-w-sm leading-relaxed">
              StudyVerse is a dedicated academic universe for GTU engineering students. Designed to streamline curriculum traversal across all 8 semesters with zero friction.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-cyan-400">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <ShieldCheck size={13} />
                <span>GTU BE / B.Tech Scheme</span>
              </span>
              <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
                100% Free
              </span>
            </div>
          </div>

          {/* Quick Orbits (Semesters) */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white tracking-wider text-xs uppercase">
              Semesters
            </h4>
            <ul className="space-y-2 text-xs">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <li key={sem}>
                  <Link
                    to={`/semester/${sem}`}
                    className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40" />
                    <span>Semester {sem}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Portals */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white tracking-wider text-xs uppercase">
              Portals
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/materials" className="hover:text-cyan-300 transition-colors">
                  All Study Materials
                </Link>
              </li>
              <li>
                <Link to="/materials/pdfs" className="hover:text-cyan-300 transition-colors">
                  Handwritten Notes (PDFs)
                </Link>
              </li>
              <li>
                <Link to="/materials/ppts" className="hover:text-cyan-300 transition-colors">
                  Classroom Slides (PPTs)
                </Link>
              </li>
              <li>
                <Link to="/syllabus" className="hover:text-cyan-300 transition-colors">
                  GTU Syllabus Units
                </Link>
              </li>
              <li>
                <Link to="/pyqs" className="hover:text-cyan-300 transition-colors">
                  Previous Year Papers (PYQ)
                </Link>
              </li>
              <li>
                <Link to="/search" className="hover:text-cyan-300 transition-colors">
                  Universal Search
                </Link>
              </li>
            </ul>
          </div>

          {/* University & Legal */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white tracking-wider text-xs uppercase">
              Affiliation & Trust
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-cyan-300 transition-colors">
                  Platform Architecture
                </Link>
              </li>
              <li>
                <a
                  href="https://www.gtu.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Official GTU Portal</span>
                  <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <a
                  href="https://student.gtu.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>GTU Student Portal</span>
                  <ExternalLink size={11} />
                </a>
              </li>
            </ul>

            <div className="pt-2 text-[11px] text-space-text-muted leading-relaxed">
              StudyVerse is an independent open academic index built by students, for students. Not directly affiliated with GTU administration.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-space-text-muted">
          <div>
            © {currentYear} StudyVerse. Designed for GTU B.E./B.Tech Engineering Students.
          </div>
          <div className="flex items-center gap-1">
            <span>Constructed with precision for Gujarat engineers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
