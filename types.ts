
export type Mood = 'Low' | 'Okay' | 'Good' | 'Great' | 'Anxious' | 'Calm' | 'Sad' | 'Excited' | 'Nervous' | 'Neutral';

export interface Entry {
  id: string;
  type: 'assessment' | 'analysis' | 'journal';
  title: string;
  date: string;
  time: string;
  content: string;
  mood: Mood;
  tags: string[];
  score?: number;
  aiInsight?: string;
}

export interface User {
  name: string;
  email: string;
  eqLevel: number;
  avatar: string;
}

export interface Habit {
  id: string;
  name: string;
  streak: number;
  completedToday: boolean;
  time?: string;
  category: string;
}
