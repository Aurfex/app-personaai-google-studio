
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Numerology: React.FC = () => {
  const navigate = useNavigate();

  const systems = [
    { name: 'Western', icon: 'change_history', color: 'blue', desc: 'Pythagorean method based on birth date.' },
    { name: 'Kabbalah', icon: 'account_tree', color: 'orange', desc: 'Hebrew mysticism & name analysis.' },
    { name: 'Abjad', icon: 'translate', color: 'emerald', desc: 'Arabic alphabetical numeral system.' },
    { name: 'Jafr', icon: 'auto_awesome', color: 'purple', desc: 'Mystical knowledge of numbers.' },
  ];

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between px-4 py-3 h-14">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-lg font-bold tracking-tight text-center flex-1">Numerology</h1>
          <button className="p-2 rounded-full text-primary">
            <span className="material-symbols-outlined">info</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
        <section className="px-6 pt-8 pb-4">
          <div className="relative overflow-hidden rounded-2xl bg-primary/10 dark:bg-primary/5 p-6 mb-2">
            <h2 className="relative text-2xl font-extrabold leading-tight mb-2">Discover your hidden traits</h2>
            <p className="relative text-text-secondary text-sm font-medium leading-relaxed">
              Each system offers a unique perspective on your personality and destiny.
            </p>
          </div>
          <p className="text-text-secondary text-sm font-medium px-1 mt-6 mb-2">Choose a system to begin</p>
        </section>

        <section className="px-4">
          <div className="grid grid-cols-2 gap-4">
            {systems.map((s, i) => (
              <button 
                key={i} 
                className="group flex flex-col items-start p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 shadow-sm hover:border-primary transition-all text-left relative overflow-hidden"
              >
                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-${s.color}-100 dark:bg-${s.color}-900/20 text-${s.color}-600 group-hover:bg-primary group-hover:text-white transition-colors`}>
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>
                <h3 className="text-base font-bold mb-1">{s.name}</h3>
                <p className="text-[10px] text-text-secondary line-clamp-2">{s.desc}</p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="material-symbols-outlined text-primary text-[20px]">arrow_forward</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-8 px-6 pb-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700">
            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full text-text-secondary">
              <span className="material-symbols-outlined">help_center</span>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold">Need help choosing?</h4>
              <p className="text-xs text-text-secondary">Take a quick quiz to find your system.</p>
            </div>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </div>
        </section>
      </main>

      <nav className="sticky bottom-0 z-50 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pb-safe">
        <div className="flex items-center justify-around pt-2 px-2 h-16">
          <button onClick={() => navigate('/dashboard')} className="flex flex-1 flex-col items-center gap-1 text-text-secondary">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-medium">Home</span>
          </button>
          <button className="flex flex-1 flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined font-bold">tag</span>
            <span className="text-[10px] font-bold">Numerology</span>
          </button>
          <button onClick={() => navigate('/profile')} className="flex flex-1 flex-col items-center gap-1 text-text-secondary">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Numerology;
