
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types';

interface Props {
  user: User;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

const Profile: React.FC<Props> = ({ user, isDarkMode, setIsDarkMode }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-10">
      <div className="flex items-center px-4 py-4 justify-between sticky top-0 z-10 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
        <h2 className="text-3xl font-extrabold tracking-tight">Settings</h2>
      </div>

      <div className="flex-1 flex flex-col gap-6 px-4 pb-10">
        <div className="flex p-5 rounded-2xl bg-white dark:bg-surface-dark shadow-sm ring-1 ring-black/5 dark:ring-white/5">
          <div className="flex w-full flex-col gap-4">
            <div className="flex gap-4 items-center">
              <div 
                className="bg-center bg-no-repeat bg-cover rounded-full h-20 w-20 shrink-0 border-2 border-white dark:border-surface-dark shadow-md" 
                style={{backgroundImage: `url(${user.avatar})`}}
              ></div>
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <p className="text-xl font-bold leading-tight truncate">{user.name}</p>
                <p className="text-text-secondary text-sm font-medium truncate">{user.email}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="material-symbols-outlined text-primary text-[18px]">psychology</span>
                  <p className="text-primary font-bold text-sm">EQ Level: {user.eqLevel}</p>
                </div>
              </div>
              <button className="shrink-0 text-text-secondary hover:text-primary transition-colors">
                <span className="material-symbols-outlined">edit_square</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-text-secondary text-xs font-bold uppercase tracking-wider pl-2">General</h3>
          <div className="flex flex-col bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm ring-1 ring-black/5 dark:ring-white/5">
            {[
              { icon: 'person', label: 'Profile details', path: '#' },
              { icon: 'encrypted', label: 'Privacy & Security', path: '#' },
              { icon: 'notifications', label: 'Notifications', path: '#' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-4 py-3.5 justify-between group cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-gray-100 last:border-0 dark:border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 shrink-0 size-10 text-primary">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <p className="text-base font-medium leading-normal">{item.label}</p>
                </div>
                <span className="material-symbols-outlined text-gray-400">chevron_right</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-text-secondary text-xs font-bold uppercase tracking-wider pl-2">App Experience</h3>
          <div className="flex flex-col bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm ring-1 ring-black/5 dark:ring-white/5">
            <div className="flex items-center gap-4 px-4 py-3.5 justify-between group cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 shrink-0 size-10 text-primary">
                  <span className="material-symbols-outlined">palette</span>
                </div>
                <p className="text-base font-medium leading-normal">Appearance</p>
              </div>
              <div className="shrink-0 flex items-center gap-4">
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="w-10 h-5 bg-primary/20 rounded-full relative transition-colors"
                >
                  <div className={`absolute top-0.5 size-4 rounded-full bg-primary transition-transform ${isDarkMode ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
                </button>
                <span className="material-symbols-outlined text-gray-400">chevron_right</span>
              </div>
            </div>
            <div onClick={() => navigate('/faq')} className="flex items-center gap-4 px-4 py-3.5 justify-between group cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 shrink-0 size-10 text-primary">
                  <span className="material-symbols-outlined">help</span>
                </div>
                <p className="text-base font-medium leading-normal">Help & Support</p>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center gap-4">
          <button 
            onClick={() => navigate('/get-started')}
            className="w-full bg-white dark:bg-surface-dark rounded-xl py-3.5 px-4 flex items-center justify-center gap-2 text-red-600 font-bold shadow-sm ring-1 ring-red-100 dark:ring-red-900/30 hover:bg-red-50 transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
            Sign Out
          </button>
          <p className="text-xs text-text-secondary font-medium">PersonaAi v2.1.0 (Build 342)</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
