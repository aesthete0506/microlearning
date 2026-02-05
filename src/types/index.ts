export interface ContentCard {
  id: string;
  title: string;
  content: string;
  domain: Domain;
  emoji: string;
  gradient: string;
  tips?: string[];
  fact?: string;
}

export type Domain = 'ai' | 'finance' | 'health' | 'productivity' | 'psychology' | 'science';

export interface DomainInfo {
  id: Domain;
  name: string;
  emoji: string;
  color: string;
}
