
import { Entry, Habit, User } from './types';

export const INITIAL_USER: User = {
  name: "Alex Doe",
  email: "alex@persona.ai",
  eqLevel: 85,
  avatar: "https://picsum.photos/200?random=1"
};

export const INITIAL_HABITS: Habit[] = [
  { id: '1', name: 'Morning Meditation', streak: 5, completedToday: false, time: '08:00 AM', category: 'Mindfulness' },
  { id: '2', name: 'Drink Water', streak: 12, completedToday: true, time: 'Done', category: 'Hydration' },
  { id: '3', name: 'Reading', streak: 21, completedToday: true, time: 'Done', category: 'Learning' },
  { id: '4', name: 'Evening Run', streak: 0, completedToday: false, time: '06:00 PM', category: 'Health' },
];

export const INITIAL_HISTORY: Entry[] = [
  {
    id: 'e1',
    type: 'assessment',
    title: 'Emotional Intelligence Quiz',
    date: 'Oct 24, 2023',
    time: '10:00 AM',
    content: 'Completed the baseline EQ assessment.',
    mood: 'Good',
    tags: ['Assessment', 'Baseline'],
    score: 85,
    aiInsight: 'Your empathy scores are notably high, indicating a strong capability for social connection.'
  },
  {
    id: 'e2',
    type: 'analysis',
    title: 'Weekly Mood Analysis',
    date: 'Oct 20, 2023',
    time: '4:45 PM',
    content: 'Analysis of last week\'s patterns.',
    mood: 'Neutral',
    tags: ['Insight'],
    aiInsight: 'You tend to feel more energetic after outdoor activities.'
  },
  {
    id: 'e3',
    type: 'journal',
    title: 'Evening Reflection',
    date: 'Sep 12, 2023',
    time: '9:00 PM',
    content: 'I managed to finish the project early and had some quality time with the kids.',
    mood: 'Calm',
    tags: ['Family', 'Success']
  }
];
