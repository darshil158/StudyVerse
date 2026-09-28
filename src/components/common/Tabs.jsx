import React from 'react';
import { motion } from 'framer-motion';

export default function Tabs({ 
  tabs = [], 
  activeTab, 
  onChange, 
  layoutId = 'activeTabUnderline',
  className = '',
  tabClassName = '' 
}) {
  return (
    <div className={`flex items-center gap-1 border-b border-white/10 overflow-x-auto no-scrollbar ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap focus:outline-none focus-visible:text-cyan-300 ${
              isActive ? 'text-white' : 'text-space-text-secondary hover:text-space-text-primary'
            } ${tabClassName}`}
          >
            {tab.icon && (
              <span className={`shrink-0 ${isActive ? 'text-cyan-400' : 'text-space-text-muted'}`}>
                {tab.icon}
              </span>
            )}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-mono ${
                isActive ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-white/5 text-space-text-muted'
              }`}>
                {tab.count}
              </span>
            )}

            {/* Framer Motion layoutId animated underline */}
            {isActive && (
              <motion.div
                layoutId={layoutId}
                className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
