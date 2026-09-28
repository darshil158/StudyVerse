import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, Sparkles, Orbit, BookOpen, Award, FileText, Info } from 'lucide-react';
import Logo from '../common/Logo.jsx';
import ScrollProgress from './ScrollProgress.jsx';
import Drawer from '../common/Drawer.jsx';

export default function Navbar({ onOpenCommandPalette }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileDrawerOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/semesters', label: 'Semesters', icon: <Orbit size={16} /> },
    { to: '/materials', label: 'Study Materials', icon: <FileText size={16} /> },
    { to: '/syllabus', label: 'GTU Syllabus', icon: <BookOpen size={16} /> },
    { to: '/pyqs', label: 'PYQ Papers', icon: <Award size={16} /> },
    { to: '/about', label: 'About', icon: <Info size={16} /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg shadow-black/40 py-2.5'
          : 'bg-space-base/60 backdrop-blur-md py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm border border-white/10'
                    : 'text-space-text-secondary hover:text-white hover:bg-white/5'
                }`
              }
            >
              <span className="opacity-70">{link.icon}</span>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Right Action Cluster: Search Trigger + CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick Search trigger button */}
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 sm:gap-3 px-3 py-1.5 rounded-lg bg-space-surface1 hover:bg-space-surface2 border border-white/10 hover:border-cyan-500/30 text-space-text-secondary hover:text-white transition-all text-xs shadow-inner group"
            aria-label="Open command palette search"
          >
            <Search size={14} className="text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline text-space-text-muted">Search universe...</span>
            <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-space-text-muted bg-white/5 border border-white/10 rounded">
              ⌘K
            </kbd>
          </button>

          {/* Direct Semester Shortcut Link */}
          <Link
            to="/semesters"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/15"
          >
            <Sparkles size={13} />
            <span>Enter Orbit</span>
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileDrawerOpen(true)}
            className="md:hidden p-2 rounded-lg text-space-text-secondary hover:text-white hover:bg-white/10 border border-white/5"
            aria-label="Open mobile navigation"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Real-time Scroll Progress Bar */}
      <ScrollProgress />

      {/* Mobile Drawer */}
      <Drawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        title="StudyVerse Navigator"
      >
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="text-[11px] font-mono uppercase tracking-wider text-space-text-muted mb-2 px-3">
              Cosmic Navigation
            </div>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-white bg-cyan-500/15 border border-cyan-500/30'
                      : 'text-space-text-secondary hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <span className="text-cyan-400">{link.icon}</span>
                <span>{link.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Semesters Quick List in Drawer */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-space-text-muted mb-2 px-3">
              Explore Orbits (Sem 1 - 8)
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <Link
                  key={sem}
                  to={`/semester/${sem}`}
                  className="p-2.5 rounded-lg bg-space-surface2/60 border border-white/5 hover:border-cyan-500/30 text-xs font-mono text-space-text-secondary hover:text-cyan-300 transition-all flex items-center justify-between"
                >
                  <span>Semester {sem}</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400/60" />
                </Link>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-card bg-gradient-to-br from-cyan-950/30 to-blue-950/30 border border-cyan-500/20 text-center">
            <div className="font-display font-bold text-sm text-white mb-1">
              100% Free GTU Academic Platform
            </div>
            <p className="text-xs text-space-text-secondary leading-relaxed">
              Curated specifically for Gujarat Technological University B.E./B.Tech engineers.
            </p>
          </div>
        </div>
      </Drawer>
    </header>
  );
}
