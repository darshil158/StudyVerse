import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Toast from '../common/Toast.jsx';
import CommandPalette from '../common/CommandPalette.jsx';
import CursorGlow from '../common/CursorGlow.jsx';

export default function Layout({ children }) {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global keydown listener for Command/Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-space-base text-space-text-primary selection:bg-cyan-500/20 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Background Cosmic Grid and Ambient Noise */}
      <div className="fixed inset-0 cosmic-grid pointer-events-none z-0 opacity-40" />
      <div className="fixed inset-0 cosmic-noise pointer-events-none z-0 opacity-20" />

      {/* Ambient gradient top glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent pointer-events-none blur-3xl z-0" />

      {/* Desktop Mouse Follower Cursor Glow */}
      <CursorGlow />

      {/* Navbar with embedded ScrollProgress */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1 pt-20 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification Container */}
      <Toast />

      {/* Universal Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}
