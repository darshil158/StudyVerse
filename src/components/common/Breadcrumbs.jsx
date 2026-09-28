import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [], className = '' }) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-xs font-medium text-space-text-muted overflow-x-auto py-1 ${className}`}>
      <Link 
        to="/" 
        className="flex items-center gap-1 hover:text-cyan-300 transition-colors shrink-0"
        title="Home"
      >
        <Home size={13} />
        <span>Core</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight size={12} className="text-space-text-muted/60 shrink-0" />
            {isLast || !item.href ? (
              <span className="text-space-text-primary font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link 
                to={item.href} 
                className="hover:text-cyan-300 transition-colors shrink-0 truncate max-w-[150px] sm:max-w-none"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
