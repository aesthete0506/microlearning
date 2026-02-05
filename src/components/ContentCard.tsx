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
