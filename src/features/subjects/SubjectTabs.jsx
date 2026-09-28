import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BookOpen, 
  Award, 
  Presentation, 
  FileCode2, 
  Sparkles, 
  GitFork, 
  Info 
} from 'lucide-react';

export default function SubjectTabs({ activeTab, onChange, counts = {} }) {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Info size={15} /> },
    { id: 'syllabus', label: 'Syllabus', icon: <BookOpen size={15} />, count: counts.syllabus },
    { id: 'materials', label: 'Materials', icon: <FileText size={15} />, count: counts.materials },
    { id: 'pdfs', label: 'PDFs & Notes', icon: <FileCode2 size={15} />, count: counts.pdfs },
    { id: 'ppts', label: 'PPT Slides', icon: <Presentation size={15} />, count: counts.ppts },
    { id: 'pyqs', label: 'GTU PYQs', icon: <Award size={15} />, count: counts.pyqs },
    { id: 'important', label: 'Key Topics', icon: <Sparkles size={15} />, count: counts.topics },
    { id: 'related', label: 'Related Moons', icon: <GitFork size={15} />, count: counts.related },
  ];

  return (
    <div className="relative border-b border-white/10 bg-space-surface1/60 backdrop-blur-md rounded-t-card overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-1 px-4 min-w-max">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`relative flex items-center gap-2 py-4 px-3.5 text-xs font-medium tracking-wide transition-all focus:outline-none whitespace-nowrap ${
                isActive ? 'text-white font-semibold' : 'text-space-text-secondary hover:text-white'
              }`}
            >
              <span className={`shrink-0 transition-colors ${isActive ? 'text-cyan-400' : 'text-space-text-muted'}`}>
                {tab.icon}
              </span>
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'bg-white/5 text-space-text-muted'
                }`}>
                  {tab.count}
                </span>
              )}

              {/* Framer motion layoutId underline animation */}
              {isActive && (
                <motion.div
                  layoutId="subjectActiveTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_12px_rgba(34,211,238,0.7)]"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
