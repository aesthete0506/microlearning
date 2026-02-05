import { useState, useMemo, useEffect } from 'react';
import { Onboarding } from './components/Onboarding';
import { DomainSelector } from './components/DomainSelector';
import { Feed } from './components/Feed';
import { getContentByDomain } from './data/content';
import type { Domain } from './types';
import './App.css';

const ONBOARDING_KEY = 'microlearning_onboarded';

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [selectedDomain, setSelectedDomain] = useState<Domain | 'all'>('all');
  
  useEffect(() => {
    const hasOnboarded = localStorage.getItem(ONBOARDING_KEY);
    if (hasOnboarded) {
      setShowOnboarding(false);
    }
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem(ONBOARDING_KEY, 'true');
    setShowOnboarding(false);
  };

  const filteredContent = useMemo(() => {
    return getContentByDomain(selectedDomain);
  }, [selectedDomain]);

  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="app">
      <DomainSelector 
        selectedDomain={selectedDomain} 
        onSelect={setSelectedDomain} 
      />
      <Feed cards={filteredContent} />
    </div>
  );
}

export default App;
