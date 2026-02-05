import type { ContentCard, DomainInfo } from '../types';

export const domains: DomainInfo[] = [
  { id: 'ai', name: 'AI & Tech', emoji: '🤖', color: '#8B5CF6' },
  { id: 'finance', name: 'Finance', emoji: '💰', color: '#10B981' },
  { id: 'health', name: 'Health', emoji: '🏃', color: '#F43F5E' },
  { id: 'productivity', name: 'Productivity', emoji: '⚡', color: '#F59E0B' },
  { id: 'psychology', name: 'Psychology', emoji: '🧠', color: '#EC4899' },
  { id: 'science', name: 'Science', emoji: '🔬', color: '#06B6D4' },
];

export const contentData: ContentCard[] = [
  // AI & Tech
  {
    id: 'ai-1',
    title: 'What is Machine Learning?',
    content: 'Machine Learning is a subset of AI where computers learn from data without being explicitly programmed. Instead of writing rules, we feed data and let the algorithm find patterns.',
    domain: 'ai',
    emoji: '🤖',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tips: ['Start with supervised learning', 'Python is the go-to language', 'Kaggle has great datasets'],
    sponsoredCard: {
      brand: 'Coursera',
      tagline: 'Learn ML from Stanford professors',
      emoji: '🎓',
      cta: 'Start Free Trial',
      color: '#0056D2'
    }
  },
  {
    id: 'ai-2',
    title: 'Neural Networks Explained',
    content: 'Neural networks are inspired by the human brain. They consist of layers of interconnected nodes that process information and learn complex patterns from data.',
    domain: 'ai',
    emoji: '🧠',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    fact: 'GPT-4 has over 1 trillion parameters!',
    sponsoredCard: {
      brand: 'NVIDIA',
      tagline: 'Power your AI with RTX GPUs',
      emoji: '💚',
      cta: 'Explore GPUs',
      color: '#76B900'
    }
  },
  {
    id: 'ai-3',
    title: 'Prompt Engineering 101',
    content: 'The art of crafting effective prompts for AI. Be specific, provide context, and iterate. Good prompts lead to better AI outputs.',
    domain: 'ai',
    emoji: '✨',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tips: ['Be specific and clear', 'Give examples', 'Use system prompts wisely'],
    sponsoredCard: {
      brand: 'ChatGPT Plus',
      tagline: 'Unlock GPT-4 & advanced features',
      emoji: '🚀',
      cta: 'Upgrade Now',
      color: '#10A37F'
    }
  },
  {
    id: 'ai-4',
    title: 'AI Ethics Matter',
    content: 'AI systems can perpetuate biases present in training data. Understanding fairness, accountability, and transparency is crucial for responsible AI development.',
    domain: 'ai',
    emoji: '⚖️',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    sponsoredCard: {
      brand: 'AI Safety Institute',
      tagline: 'Building responsible AI together',
      emoji: '🛡️',
      cta: 'Learn More',
      color: '#6366F1'
    }
  },
  
  // Finance
  {
    id: 'finance-1',
    title: 'The Power of Compound Interest',
    content: 'Einstein called it the 8th wonder of the world. $1,000 invested at 7% annual return becomes $7,612 in 30 years. Start early, let time work for you.',
    domain: 'finance',
    emoji: '📈',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    fact: 'Starting 10 years earlier can double your retirement savings!',
    sponsoredCard: {
      brand: 'Wealthfront',
      tagline: 'Automated investing made simple',
      emoji: '💰',
      cta: 'Get $50 Bonus',
      color: '#472EC8'
    }
  },
  {
    id: 'finance-2',
    title: '50/30/20 Budget Rule',
    content: 'Allocate 50% of income to needs, 30% to wants, and 20% to savings. Simple, effective, and flexible enough for most lifestyles.',
    domain: 'finance',
    emoji: '💵',
    gradient: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)',
    tips: ['Track expenses for a month first', 'Automate your savings', 'Review quarterly'],
    sponsoredCard: {
      brand: 'Mint by Intuit',
      tagline: 'Track spending & budgets for free',
      emoji: '📱',
      cta: 'Download Free',
      color: '#00A86B'
    }
  },
  {
    id: 'finance-3',
    title: 'Emergency Fund Basics',
    content: 'Keep 3-6 months of expenses in a high-yield savings account. This safety net protects you from unexpected job loss, medical bills, or car repairs.',
    domain: 'finance',
    emoji: '🛡️',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    sponsoredCard: {
      brand: 'Marcus by Goldman Sachs',
      tagline: '4.5% APY High-Yield Savings',
      emoji: '🏦',
      cta: 'Open Account',
      color: '#00205B'
    }
  },
  {
    id: 'finance-4',
    title: 'Index Funds for Beginners',
    content: 'Index funds track market indices like S&P 500. Low fees, instant diversification, and historically outperform most actively managed funds.',
    domain: 'finance',
    emoji: '📊',
    gradient: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)',
    fact: 'Warren Buffett recommends index funds for most investors',
    sponsoredCard: {
      brand: 'Vanguard',
      tagline: 'Low-cost index funds since 1976',
      emoji: '🚀',
      cta: 'Start Investing',
      color: '#C8102E'
    }
  },
  
  // Health
  {
    id: 'health-1',
    title: 'The Science of Sleep',
    content: '7-9 hours of quality sleep is essential. During sleep, your brain clears toxins, consolidates memories, and repairs your body.',
    domain: 'health',
    emoji: '😴',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tips: ['Keep a consistent schedule', 'Avoid screens before bed', 'Keep room cool and dark'],
    sponsoredCard: {
      brand: 'Calm',
      tagline: 'Sleep stories & meditation for better rest',
      emoji: '🌙',
      cta: 'Try 7 Days Free',
      color: '#4A90D9'
    }
  },
  {
    id: 'health-2',
    title: 'Hydration Hacks',
    content: 'Your body is 60% water. Dehydration affects mood, energy, and cognition. Aim for 8 glasses daily, more if active.',
    domain: 'health',
    emoji: '💧',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    fact: 'Even 2% dehydration can impair cognitive performance',
    sponsoredCard: {
      brand: 'Liquid I.V.',
      tagline: '3x faster hydration than water alone',
      emoji: '⚡',
      cta: 'Shop Now',
      color: '#FF6B35'
    }
  },
  {
    id: 'health-3',
    title: 'Movement > Exercise',
    content: 'Daily movement matters more than intense workouts. Take stairs, walk during calls, stretch hourly. Consistency beats intensity.',
    domain: 'health',
    emoji: '🚶',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    sponsoredCard: {
      brand: 'Apple Watch',
      tagline: 'Close your rings. Every day counts.',
      emoji: '⌚',
      cta: 'Learn More',
      color: '#000000'
    }
  },
  {
    id: 'health-4',
    title: 'Gut-Brain Connection',
    content: 'Your gut has 100 million neurons! Gut health affects mood, immunity, and mental clarity. Eat fiber, fermented foods, and diverse plants.',
    domain: 'health',
    emoji: '🦠',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    sponsoredCard: {
      brand: 'Athletic Greens (AG1)',
      tagline: '75 vitamins & minerals in one scoop',
      emoji: '🥬',
      cta: 'Get Free Supply',
      color: '#2D5016'
    }
  },
  
  // Productivity
  {
    id: 'productivity-1',
    title: 'The 2-Minute Rule',
    content: 'If a task takes less than 2 minutes, do it now. This simple rule prevents small tasks from piling up and cluttering your mind.',
    domain: 'productivity',
    emoji: '⏱️',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    sponsoredCard: {
      brand: 'Todoist',
      tagline: 'Organize your life in seconds',
      emoji: '✅',
      cta: 'Try Pro Free',
      color: '#E44332'
    }
  },
  {
    id: 'productivity-2',
    title: 'Deep Work Blocks',
    content: 'Schedule 2-4 hour blocks for focused work. No notifications, no meetings. This is where breakthrough work happens.',
    domain: 'productivity',
    emoji: '🎯',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tips: ['Start with 90-minute blocks', 'Use website blockers', 'Protect your peak hours'],
    sponsoredCard: {
      brand: 'Freedom',
      tagline: 'Block distracting sites & apps',
      emoji: '🔒',
      cta: 'Get 20% Off',
      color: '#1DA1F2'
    }
  },
  {
    id: 'productivity-3',
    title: 'Eat the Frog First 🐸',
    content: 'Do your hardest task first thing in the morning when willpower is highest. Pair it with a strong coffee! Everything else feels easier after.',
    domain: 'productivity',
    emoji: '🐸',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    sponsoredCard: {
      brand: 'Starbucks',
      tagline: 'Fuel your morning focus ☕',
      emoji: '☕',
      cta: 'Order Ahead',
      color: '#00704A'
    }
  },
  {
    id: 'productivity-4',
    title: 'The Pomodoro Technique',
    content: '25 minutes of focused work, 5 minute break. Repeat 4 times, then take a longer 15-30 minute break. Simple but effective.',
    domain: 'productivity',
    emoji: '🍅',
    gradient: 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)',
    sponsoredCard: {
      brand: 'Forest App',
      tagline: 'Stay focused, plant real trees 🌲',
      emoji: '🌱',
      cta: 'Download Now',
      color: '#4CAF50'
    }
  },
  
  // Psychology
  {
    id: 'psychology-1',
    title: 'Cognitive Biases',
    content: 'Your brain takes shortcuts that can mislead you. Confirmation bias makes you seek info that confirms beliefs. Awareness is the first step.',
    domain: 'psychology',
    emoji: '🔮',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    sponsoredCard: {
      brand: 'Blinkist',
      tagline: 'Key insights from psychology books in 15 min',
      emoji: '📚',
      cta: '7-Day Free Trial',
      color: '#0365A2'
    }
  },
  {
    id: 'psychology-2',
    title: 'The Growth Mindset',
    content: 'Believing abilities can be developed leads to greater achievement. Embrace challenges, learn from criticism, find inspiration in others\' success.',
    domain: 'psychology',
    emoji: '🌱',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    fact: 'Students taught growth mindset show improved grades',
    sponsoredCard: {
      brand: 'MasterClass',
      tagline: 'Learn from the world\'s best minds',
      emoji: '🎬',
      cta: 'Start Learning',
      color: '#000000'
    }
  },
  {
    id: 'psychology-3',
    title: 'Dopamine & Motivation',
    content: 'Dopamine drives motivation, not pleasure. It\'s released in anticipation of reward. Use this: break big goals into small wins. A little caffeine boost helps too!',
    domain: 'psychology',
    emoji: '⚡',
    gradient: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)',
    sponsoredCard: {
      brand: 'Nespresso',
      tagline: 'The perfect morning motivation ritual',
      emoji: '☕',
      cta: 'Shop Machines',
      color: '#000000'
    }
  },
  {
    id: 'psychology-4',
    title: 'The Zeigarnik Effect',
    content: 'Unfinished tasks stay in your mind more than completed ones. Use this: start tasks to create mental commitment to finish them.',
    domain: 'psychology',
    emoji: '🧩',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    sponsoredCard: {
      brand: 'Notion',
      tagline: 'Your all-in-one workspace for notes & tasks',
      emoji: '📝',
      cta: 'Get Started Free',
      color: '#000000'
    }
  },
  
  // Science
  {
    id: 'science-1',
    title: 'Quantum Superposition',
    content: 'Particles can exist in multiple states simultaneously until observed. This isn\'t sci-fi—it\'s how quantum computers achieve their power.',
    domain: 'science',
    emoji: '⚛️',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    sponsoredCard: {
      brand: 'IBM Quantum',
      tagline: 'Experience quantum computing today',
      emoji: '🔬',
      cta: 'Try Free',
      color: '#0F62FE'
    }
  },
  {
    id: 'science-2',
    title: 'CRISPR Revolution',
    content: 'CRISPR lets scientists edit DNA like a word processor edits text. It could cure genetic diseases and revolutionize medicine.',
    domain: 'science',
    emoji: '🧬',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    fact: 'CRISPR was discovered from bacterial immune systems',
    sponsoredCard: {
      brand: '23andMe',
      tagline: 'Discover your DNA story',
      emoji: '🔍',
      cta: 'Get 40% Off Kit',
      color: '#A61890'
    }
  },
  {
    id: 'science-3',
    title: 'The Observable Universe',
    content: '93 billion light-years across and expanding. Contains 2 trillion galaxies. And this might be just a tiny fraction of the whole universe.',
    domain: 'science',
    emoji: '🌌',
    gradient: 'linear-gradient(135deg, #0c0c1e 0%, #1a1a3e 100%)',
    sponsoredCard: {
      brand: 'NASA',
      tagline: 'Explore the cosmos with us',
      emoji: '🚀',
      cta: 'Watch Live',
      color: '#0B3D91'
    }
  },
  {
    id: 'science-4',
    title: 'Neuroplasticity',
    content: 'Your brain can rewire itself throughout life. Learning new skills, languages, or instruments physically changes your brain structure.',
    domain: 'science',
    emoji: '🧠',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    sponsoredCard: {
      brand: 'Duolingo',
      tagline: 'Learn a new language & rewire your brain',
      emoji: '🦉',
      cta: 'Start Free',
      color: '#58CC02'
    }
  },
];

export const getContentByDomain = (domain: string | null): ContentCard[] => {
  if (!domain || domain === 'all') return contentData;
  return contentData.filter(card => card.domain === domain);
};
