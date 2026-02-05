import type { ContentCard as ContentCardType } from '../types';
import './ContentCard.css';

interface ContentCardProps {
  card: ContentCardType;
  isActive: boolean;
}

export function ContentCard({ card, isActive }: ContentCardProps) {
  return (
    <div className={`content-card ${isActive ? 'active' : ''}`}>
      <div 
        className="card-background"
        style={{ background: card.gradient }}
      />
      <div className="card-overlay" />
      
      <div className="card-content">
        <div className="card-emoji">{card.emoji}</div>
        <h2 className="card-title">{card.title}</h2>
        <p className="card-text">{card.content}</p>
        
        {card.tips && card.tips.length > 0 && (
          <div className="card-tips">
            <div className="tips-header">💡 Quick Tips</div>
            <ul className="tips-list">
              {card.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
        
        {card.fact && (
          <div className="card-fact">
            <span className="fact-icon">🎯</span>
            <span>{card.fact}</span>
          </div>
        )}
      </div>

      {/* Sponsored Card */}
      {card.sponsoredCard && (
        <div 
          className="sponsored-card"
          style={{ '--sponsor-color': card.sponsoredCard.color } as React.CSSProperties}
        >
          <div className="sponsored-badge">Sponsored</div>
          <div className="sponsored-content">
            <span className="sponsored-emoji">{card.sponsoredCard.emoji}</span>
            <div className="sponsored-info">
              <div className="sponsored-brand">{card.sponsoredCard.brand}</div>
              <div className="sponsored-tagline">{card.sponsoredCard.tagline}</div>
            </div>
          </div>
          <button className="sponsored-cta">
            {card.sponsoredCard.cta}
          </button>
        </div>
      )}
      
      <div className="card-actions">
        <button className="action-btn">
          <span>❤️</span>
          <span className="action-label">Like</span>
        </button>
        <button className="action-btn">
          <span>🔖</span>
          <span className="action-label">Save</span>
        </button>
        <button className="action-btn">
          <span>📤</span>
          <span className="action-label">Share</span>
        </button>
      </div>
      
      <div className="swipe-hint">
        <span>Swipe up for more</span>
        <div className="swipe-arrow">↑</div>
      </div>
    </div>
  );
}
