import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function Dropdown({
  label,
  options = [],
  value,
  onChange,
  icon: Icon,
  className = '',
  buttonClassName = ''
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg bg-space-surface2/90 hover:bg-space-surface3 border border-white/10 text-space-text-primary hover:border-cyan-500/30 transition-all ${buttonClassName}`}
      >
        {Icon && <Icon size={14} className="text-cyan-400 shrink-0" />}
        <span className="text-space-text-muted">{label}:</span>
        <span className="text-white font-semibold">{selectedOption?.label || 'Select'}</span>
        <ChevronDown size={14} className={`text-space-text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-48 rounded-lg glass-dropdown border border-white/10 shadow-2xl py-1 z-40 animate-in fade-in zoom-in-95 duration-100">
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2 text-xs text-left transition-colors ${
                  isSelected ? 'bg-cyan-500/15 text-cyan-300 font-semibold' : 'text-space-text-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{option.label}</span>
                {isSelected && <Check size={14} className="text-cyan-400 shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
