import { domains } from '../data/content';
import type { Domain } from '../types';
import './DomainSelector.css';

interface DomainSelectorProps {
  selectedDomain: Domain | 'all';
  onSelect: (domain: Domain | 'all') => void;
}

export function DomainSelector({ selectedDomain, onSelect }: DomainSelectorProps) {
  return (
    <div className="domain-selector">
      <button
        className={`domain-chip ${selectedDomain === 'all' ? 'active' : ''}`}
        onClick={() => onSelect('all')}
        style={{ '--chip-color': '#ffffff' } as React.CSSProperties}
      >
        <span className="domain-emoji">🌟</span>
        <span className="domain-name">All</span>
      </button>
      {domains.map((domain) => (
        <button
          key={domain.id}
          className={`domain-chip ${selectedDomain === domain.id ? 'active' : ''}`}
          onClick={() => onSelect(domain.id)}
          style={{ '--chip-color': domain.color } as React.CSSProperties}
        >
          <span className="domain-emoji">{domain.emoji}</span>
          <span className="domain-name">{domain.name}</span>
        </button>
      ))}
    </div>
  );
}
