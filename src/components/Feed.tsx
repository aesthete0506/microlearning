import { useEffect, useRef, useState, useCallback } from 'react';
import { ContentCard } from './ContentCard';
import type { ContentCard as ContentCardType } from '../types';
import './Feed.css';

interface FeedProps {
  cards: ContentCardType[];
}

export function Feed({ cards }: FeedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollTop = container.scrollTop;
    const cardHeight = container.clientHeight;
    const newIndex = Math.round(scrollTop / cardHeight);
    
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < cards.length) {
      setActiveIndex(newIndex);
    }
  }, [activeIndex, cards.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Reset scroll position when cards change (domain switch)
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveIndex(0);
    }
  }, [cards]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      
      const cardHeight = containerRef.current.clientHeight;
      
      if (e.key === 'ArrowDown' || e.key === 'j') {
        e.preventDefault();
        const nextIndex = Math.min(activeIndex + 1, cards.length - 1);
        containerRef.current.scrollTo({
          top: nextIndex * cardHeight,
          behavior: 'smooth'
        });
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        e.preventDefault();
        const prevIndex = Math.max(activeIndex - 1, 0);
        containerRef.current.scrollTo({
          top: prevIndex * cardHeight,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, cards.length]);

  if (cards.length === 0) {
    return (
      <div className="feed-empty">
        <div className="empty-emoji">🔍</div>
        <h3>No content found</h3>
        <p>Try selecting a different domain</p>
      </div>
    );
  }

  return (
    <div className="feed-container" ref={containerRef}>
      {cards.map((card, index) => (
        <div key={card.id} className="feed-item">
          <ContentCard card={card} isActive={index === activeIndex} />
        </div>
      ))}
      
      <div className="progress-indicator">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`progress-dot ${index === activeIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
