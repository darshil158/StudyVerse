import React from 'react';
import { Search, X, Command } from 'lucide-react';

export default function SearchBar({
  value = '',
  onChange,
  onClear,
  placeholder = 'Search by subject name, GTU code (e.g. 3140702), topic or notes...',
  onFocus,
  autoFocus = false,
  showShortcut = true,
  className = '',
  size = 'default'
}) {
  const isLarge = size === 'large';

  return (
    <div className={`relative flex items-center w-full group ${className}`}>
      <div className="absolute left-4 pointer-events-none text-space-text-muted group-focus-within:text-cyan-400 transition-colors">
        <Search size={isLarge ? 20 : 17} />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={onFocus}
        autoFocus={autoFocus}
        placeholder={placeholder}
        className={`w-full rounded-card bg-space-surface1/80 border border-white/10 text-white placeholder-space-text-muted/70 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:bg-space-surface2/90 transition-all duration-200 ${
          isLarge ? 'py-4 pl-12 pr-28 text-base shadow-2xl' : 'py-2.5 pl-10 pr-20 text-sm shadow-md'
        }`}
      />

      <div className="absolute right-3.5 flex items-center gap-1.5">
        {value ? (
          <button
            type="button"
            onClick={onClear}
            className="p-1 rounded-md text-space-text-muted hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Clear search input"
          >
            <X size={16} />
          </button>
        ) : showShortcut ? (
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[11px] font-mono text-space-text-muted bg-white/5 border border-white/10 rounded">
            <Command size={11} /> K
          </kbd>
        ) : null}
      </div>
    </div>
  );
}
