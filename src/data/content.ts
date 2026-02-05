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
  },
  {
    id: 'ai-2',
    title: 'Neural Networks Explained',
    content: 'Neural networks are inspired by the human brain. They consist of layers of interconnected nodes that process information and learn complex patterns from data.',
    domain: 'ai',
    emoji: '🧠',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    fact: 'GPT-4 has over 1 trillion parameters!',
  },
  {
    id: 'ai-3',
    title: 'Prompt Engineering 101',
    content: 'The art of crafting effective prompts for AI. Be specific, provide context, and iterate. Good prompts lead to better AI outputs.',
    domain: 'ai',
    emoji: '✨',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tips: ['Be specific and clear', 'Give examples', 'Use system prompts wisely'],
  },
  {
    id: 'ai-4',
    title: 'AI Ethics Matter',
    content: 'AI systems can perpetuate biases present in training data. Understanding fairness, accountability, and transparency is crucial for responsible AI development.',
    domain: 'ai',
    emoji: '⚖️',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
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
  },
  {
    id: 'finance-2',
    title: '50/30/20 Budget Rule',
    content: 'Allocate 50% of income to needs, 30% to wants, and 20% to savings. Simple, effective, and flexible enough for most lifestyles.',
    domain: 'finance',
    emoji: '💵',
    gradient: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)',
    tips: ['Track expenses for a month first', 'Automate your savings', 'Review quarterly'],
  },
  {
    id: 'finance-3',
    title: 'Emergency Fund Basics',
    content: 'Keep 3-6 months of expenses in a high-yield savings account. This safety net protects you from unexpected job loss, medical bills, or car repairs.',
    domain: 'finance',
    emoji: '🛡️',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 'finance-4',
    title: 'Index Funds for Beginners',
    content: 'Index funds track market indices like S&P 500. Low fees, instant diversification, and historically outperform most actively managed funds.',
    domain: 'finance',
    emoji: '📊',
    gradient: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)',
    fact: 'Warren Buffett recommends index funds for most investors',
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
  },
  {
    id: 'health-2',
    title: 'Hydration Hacks',
    content: 'Your body is 60% water. Dehydration affects mood, energy, and cognition. Aim for 8 glasses daily, more if active.',
    domain: 'health',
    emoji: '💧',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    fact: 'Even 2% dehydration can impair cognitive performance',
  },
  {
    id: 'health-3',
    title: 'Movement > Exercise',
    content: 'Daily movement matters more than intense workouts. Take stairs, walk during calls, stretch hourly. Consistency beats intensity.',
    domain: 'health',
    emoji: '🚶',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    id: 'health-4',
    title: 'Gut-Brain Connection',
    content: 'Your gut has 100 million neurons! Gut health affects mood, immunity, and mental clarity. Eat fiber, fermented foods, and diverse plants.',
    domain: 'health',
    emoji: '🦠',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  },
  
  // Productivity
  {
    id: 'productivity-1',
    title: 'The 2-Minute Rule',
    content: 'If a task takes less than 2 minutes, do it now. This simple rule prevents small tasks from piling up and cluttering your mind.',
    domain: 'productivity',
    emoji: '⏱️',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 'productivity-2',
    title: 'Deep Work Blocks',
    content: 'Schedule 2-4 hour blocks for focused work. No notifications, no meetings. This is where breakthrough work happens.',
    domain: 'productivity',
    emoji: '🎯',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tips: ['Start with 90-minute blocks', 'Use website blockers', 'Protect your peak hours'],
  },
  {
    id: 'productivity-3',
    title: 'Eat the Frog First',
    content: 'Do your hardest task first thing in the morning when willpower is highest. Everything else feels easier after.',
    domain: 'productivity',
    emoji: '🐸',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
  },
  {
    id: 'productivity-4',
    title: 'The Pomodoro Technique',
    content: '25 minutes of focused work, 5 minute break. Repeat 4 times, then take a longer 15-30 minute break. Simple but effective.',
    domain: 'productivity',
    emoji: '🍅',
    gradient: 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)',
  },
  
  // Psychology
  {
    id: 'psychology-1',
    title: 'Cognitive Biases',
    content: 'Your brain takes shortcuts that can mislead you. Confirmation bias makes you seek info that confirms beliefs. Awareness is the first step.',
    domain: 'psychology',
    emoji: '🔮',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 'psychology-2',
    title: 'The Growth Mindset',
    content: 'Believing abilities can be developed leads to greater achievement. Embrace challenges, learn from criticism, find inspiration in others\' success.',
    domain: 'psychology',
    emoji: '🌱',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    fact: 'Students taught growth mindset show improved grades',
  },
  {
    id: 'psychology-3',
    title: 'Dopamine & Motivation',
    content: 'Dopamine drives motivation, not pleasure. It\'s released in anticipation of reward. Use this: break big goals into small wins.',
    domain: 'psychology',
    emoji: '⚡',
    gradient: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)',
  },
  {
    id: 'psychology-4',
    title: 'The Zeigarnik Effect',
    content: 'Unfinished tasks stay in your mind more than completed ones. Use this: start tasks to create mental commitment to finish them.',
    domain: 'psychology',
    emoji: '🧩',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  
  // Science
  {
    id: 'science-1',
    title: 'Quantum Superposition',
    content: 'Particles can exist in multiple states simultaneously until observed. This isn\'t sci-fi—it\'s how quantum computers achieve their power.',
    domain: 'science',
    emoji: '⚛️',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 'science-2',
    title: 'CRISPR Revolution',
    content: 'CRISPR lets scientists edit DNA like a word processor edits text. It could cure genetic diseases and revolutionize medicine.',
    domain: 'science',
    emoji: '🧬',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    fact: 'CRISPR was discovered from bacterial immune systems',
  },
  {
    id: 'science-3',
    title: 'The Observable Universe',
    content: '93 billion light-years across and expanding. Contains 2 trillion galaxies. And this might be just a tiny fraction of the whole universe.',
    domain: 'science',
    emoji: '🌌',
    gradient: 'linear-gradient(135deg, #0c0c1e 0%, #1a1a3e 100%)',
  },
  {
    id: 'science-4',
    title: 'Neuroplasticity',
    content: 'Your brain can rewire itself throughout life. Learning new skills, languages, or instruments physically changes your brain structure.',
    domain: 'science',
    emoji: '🧠',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
];

export const getContentByDomain = (domain: string | null): ContentCard[] => {
  if (!domain || domain === 'all') return contentData;
  return contentData.filter(card => card.domain === domain);
};
