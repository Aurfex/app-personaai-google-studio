
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Entry } from '../types';

interface Props {
  entries: Entry[];
}

const History: React.FC<Props> = ({ entries }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen pb-24 bg-background-light dark:bg-background-dark">
      <header className="pt-12 pb-2 px-5 flex justify-between items-center bg-background-light dark:bg-background-dark z-20 sticky top-0">
        <h1 className="text-3xl font-extrabold tracking-tight">History</h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
          <span className="material-symbols-outlined" style={{fontSize: '26px'}}>search</span>
        </button>
      </header>

      <div className="px-5 pt-2 pb-4 space-y-4">
        <div className="flex gap-3">
          <div className="relative flex-1 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400">search</span>
            </div>
            <input className="block w-full pl-10 pr-3 py-3.5 border-none rounded-xl leading-5 bg-white dark:bg-surface-dark text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm sm:text-sm font-medium transition-all" placeholder="Search entries..." type="text"/>
          </div>
          <button className="flex items-center justify-center w-12 rounded-xl bg-white dark:bg-surface-dark text-slate-600 dark:text-slate-300 shadow-sm hover:text-primary active:scale-95 transition-all">
            <span className="material-symbols-outlined">calendar_month</span>
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {['All', 'Tests', 'Analysis', 'Journal'].map((filter, i) => (
            <button key={i} className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap transition-all ${i === 0 ? 'bg-primary text-white font-bold' : 'bg-white dark:bg-surface-dark text-slate-600 dark:text-slate-300 font-semibold border border-transparent'}`}>
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 space-y-3 no-scrollbar">
        <div className="flex items-center gap-3 mt-2 mb-1 pl-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recent Entries</span>
          <div className="h-px bg-slate-200 dark:bg-slate-700/50 flex-1 rounded-full"></div>
        </div>

        {entries.map(entry => (
          <div 
            key={entry.id} 
            className="group relative flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-transparent hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4 overflow-hidden">
              <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-primary border border-primary/20 ${entry.type === 'assessment' ? 'bg-blue-50 dark:bg-blue-900/10' : entry.type === 'analysis' ? 'bg-purple-50 dark:bg-purple-900/10' : 'bg-teal-50 dark:bg-teal-900/10'}`}>
                <span className="material-symbols-outlined">{entry.type === 'assessment' ? 'assignment' : entry.type === 'analysis' ? 'psychology' : 'book_2'}</span>
              </div>
              <div className="flex flex-col min-w-0">
                <h3 className="text-base font-bold truncate">{entry.title}</h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 truncate">{entry.date} • {entry.mood}</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">chevron_right</span>
          </div>
        ))}
      </div>

      <div className="fixed bottom-24 right-5 z-30">
        <button className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-5 py-4 rounded-2xl shadow-lg transform transition-all active:scale-95">
          <span className="material-symbols-outlined">download</span>
          <span className="font-bold text-sm">Export Data</span>
        </button>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 px-6 pb-6 pt-3 flex justify-between items-center">
        <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-primary transition-colors w-12">
          <span className="material-symbols-outlined">home</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 text-primary w-12 relative">
          <span className="material-symbols-outlined fill-current font-bold">history</span>
          <span className="absolute -bottom-2 w-1 h-1 rounded-full bg-primary"></span>
        </button>
        <button onClick={() => navigate('/chat')} className="flex flex-col items-center justify-center -mt-8">
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg border-[5px] border-white dark:border-surface-dark active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-white text-[28px]">add</span>
          </div>
        </button>
        <button onClick={() => navigate('/numerology')} className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-primary transition-colors w-12">
          <span className="material-symbols-outlined">psychology</span>
        </button>
        <button onClick={() => navigate('/profile')} className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-primary transition-colors w-12">
          <span className="material-symbols-outlined">person</span>
        </button>
      </nav>
    </div>
  );
};

export default History;
