
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Habit, Entry } from '../types';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

interface Props {
  user: User;
  habits: Habit[];
  history: Entry[];
  setHabits: React.Dispatch<React.SetStateAction<Habit[]>>;
}

const Dashboard: React.FC<Props> = ({ user, habits, history, setHabits }) => {
  const navigate = useNavigate();

  const chartData = [
    { day: 'M', value: 30 },
    { day: 'T', value: 45 },
    { day: 'W', value: 35 },
    { day: 'T', value: 50 },
    { day: 'F', value: 40 },
    { day: 'S', value: 65 },
    { day: 'S', value: 55 },
  ];

  const toggleHabit = (id: string) => {
    setHabits(prev => prev.map(h => h.id === id ? { ...h, completedToday: !h.completedToday } : h));
  };

  return (
    <div className="flex flex-col min-h-screen pb-24">
      <header className="sticky top-0 z-30 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div 
                className="bg-center bg-no-repeat bg-cover rounded-full size-12 ring-2 ring-primary/10" 
                style={{backgroundImage: `url(${user.avatar})`}}
              ></div>
              <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-text-main text-xl font-bold leading-tight">Hi, {user.name.split(' ')[0]}</h2>
              <span className="text-xs font-medium text-text-secondary">Let's check in on you.</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/profile')} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-6 px-5 pt-6">
        {/* Streak */}
        <section className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 rounded-2xl p-4 border border-orange-100 dark:border-orange-800/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white dark:bg-surface-dark p-2 rounded-full text-orange-500 shadow-sm">
                <span className="material-symbols-outlined filled">local_fire_department</span>
              </div>
              <div>
                <p className="text-sm font-bold">5 Day Streak!</p>
                <p className="text-xs text-text-secondary">You're on fire. Keep it up!</p>
              </div>
            </div>
            <button className="text-xs font-bold text-orange-600 bg-white px-3 py-1.5 rounded-lg shadow-sm">View</button>
          </div>
        </section>

        {/* Daily Check-in */}
        <section className="relative overflow-hidden rounded-3xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col gap-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider w-fit">
            <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
            Daily Check-in
          </div>
          <h3 className="text-2xl font-bold text-text-main">How are you feeling?</h3>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
            {['😔 Low', '😐 Okay', '🙂 Good', '🤩 Great'].map((m, i) => (
              <button 
                key={i} 
                onClick={() => navigate('/chat')}
                className="flex flex-col items-center gap-1 group min-w-[60px]"
              >
                <div className="size-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-xl group-hover:scale-110 transition-transform border border-gray-200 dark:border-gray-700">
                  {m.split(' ')[0]}
                </div>
                <span className="text-[10px] font-medium text-text-secondary">{m.split(' ')[1]}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: 'psychology', label: 'Tests', path: '/numerology', color: 'indigo' },
              { icon: 'face', label: 'Face Scan', path: '/face-analyzer', color: 'pink' },
              { icon: 'self_improvement', label: 'Meditate', path: '/chat', color: 'teal' },
              { icon: 'menu_book', label: 'Journal', path: '/history', color: 'amber' },
            ].map((action, i) => (
              <button 
                key={i} 
                onClick={() => navigate(action.path)}
                className="flex flex-col items-center gap-2 group"
              >
                <div className={`size-14 rounded-2xl bg-${action.color}-50 dark:bg-${action.color}-900/20 flex items-center justify-center text-${action.color}-600 dark:text-${action.color}-400 shadow-sm border border-${action.color}-100 dark:border-${action.color}-800/30 group-active:scale-95 transition-transform`}>
                  <span className="material-symbols-outlined text-2xl">{action.icon}</span>
                </div>
                <span className="text-[10px] font-medium text-center">{action.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Chart */}
        <section className="bg-white dark:bg-surface-dark rounded-3xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-bold mb-4">Emotional Balance</h3>
          <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2b6cee" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2b6cee" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" axisLine={false} tickLine={false} style={{fontSize: '10px'}} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#2b6cee" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Habits */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold">Today's Habits</h3>
            <button className="text-sm font-semibold text-primary">See All</button>
          </div>
          <div className="flex flex-col gap-3">
            {habits.slice(0, 3).map(habit => (
              <div key={habit.id} className={`flex items-center gap-3 p-3 bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-opacity ${habit.completedToday ? 'opacity-60' : ''}`}>
                <button 
                  onClick={() => toggleHabit(habit.id)}
                  className={`size-6 rounded-full border-2 transition-all flex items-center justify-center ${habit.completedToday ? 'bg-primary border-primary text-white' : 'border-primary/30 text-transparent'}`}
                >
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </button>
                <div className="flex-1">
                  <h4 className={`font-bold text-sm ${habit.completedToday ? 'line-through' : ''}`}>{habit.name}</h4>
                  <span className="text-xs text-text-secondary">{habit.category}</span>
                </div>
                <span className="text-[10px] font-bold text-text-secondary bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded-md">{habit.time}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pb-safe">
        <div className="mx-auto max-w-md w-full px-6 h-20 flex items-center justify-between">
          <button className="flex flex-col items-center gap-1 text-primary w-16">
            <span className="material-symbols-outlined filled text-2xl">grid_view</span>
            <span className="text-[10px] font-bold">Home</span>
          </button>
          <button onClick={() => navigate('/history')} className="flex flex-col items-center gap-1 text-gray-400 w-16">
            <span className="material-symbols-outlined text-2xl">library_books</span>
            <span className="text-[10px] font-medium">Library</span>
          </button>
          <div className="relative -top-6">
            <button 
              onClick={() => navigate('/chat')}
              className="size-14 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg flex items-center justify-center border-4 border-white dark:border-background-dark active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-3xl">add</span>
            </button>
          </div>
          <button className="flex flex-col items-center gap-1 text-gray-400 w-16">
            <span className="material-symbols-outlined text-2xl">bar_chart</span>
            <span className="text-[10px] font-medium">Stats</span>
          </button>
          <button onClick={() => navigate('/profile')} className="flex flex-col items-center gap-1 text-gray-400 w-16">
            <span className="material-symbols-outlined text-2xl">person</span>
            <span className="text-[10px] font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
