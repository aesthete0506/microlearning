import { useState } from 'react';
import './Onboarding.css';

interface OnboardingProps {
  onComplete: () => void;
}

const slides = [
  {
    emoji: '📚',
    title: 'Welcome to Microlearning',
    description: 'Learn something new in just 30 seconds. Swipe through bite-sized knowledge like your favorite social feed.',
  },
  {
    emoji: '🎯',
    title: 'Choose Your Domains',
    description: 'AI, Finance, Health, Productivity & more. Pick topics that interest you and dive deep.',
  },
  {
    emoji: '⚡',
    title: 'Swipe to Learn',
    description: 'Swipe up to discover new insights. Use arrow keys or j/k on desktop. Learning made addictive!',
  },
];

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setIsExiting(true);
      setTimeout(() => {
        onComplete();
      }, 500);
    }
  };

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <div className={`onboarding ${isExiting ? 'exiting' : ''}`}>
      <div className="onboarding-background">
        <div className="bg-orb orb-1" />
        <div className="bg-orb orb-2" />
        <div className="bg-orb orb-3" />
      </div>

      <button className="skip-btn" onClick={handleSkip}>
        Skip
      </button>

      <div className="slides-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''} ${
              index < currentSlide ? 'past' : ''
            }`}
          >
            <div className="slide-emoji">{slide.emoji}</div>
            <h1 className="slide-title">{slide.title}</h1>
            <p className="slide-description">{slide.description}</p>
          </div>
        ))}
      </div>

      <div className="onboarding-footer">
        <div className="dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <button className="next-btn" onClick={handleNext}>
          {currentSlide === slides.length - 1 ? (
            <>
              Get Started
              <span className="btn-icon">🚀</span>
            </>
          ) : (
            <>
              Next
              <span className="btn-arrow">→</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
