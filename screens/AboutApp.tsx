
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutApp: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-10 flex items-center bg-white/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-transparent dark:border-white/5">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 text-text-main dark:text-white">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold leading-tight flex-1 text-center pr-10">About App</h2>
      </header>

      <main className="flex-1 flex flex-col gap-6 px-4 py-6">
        <div className="flex flex-col items-center justify-center pb-2 pt-2">
          <div className="mb-4 flex size-24 items-center justify-center rounded-3xl bg-white dark:bg-surface-dark shadow-sm border border-black/5 text-primary">
            <span className="material-symbols-outlined text-[48px]">psychology</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">PersonaAi</h1>
          <p className="mt-1 text-sm font-medium text-text-secondary">Version 2.4.0 (Build 342)</p>
        </div>

        <section>
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-black/5 overflow-hidden">
            <div className="flex items-center gap-4 px-4 py-4 group">
              <div className="flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 size-12">
                <span className="material-symbols-outlined">lightbulb</span>
              </div>
              <div className="flex flex-col justify-center flex-1">
                <p className="text-base font-bold">Our Approach</p>
                <p className="text-text-secondary text-sm">Philosophy & Methodology</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-base font-bold px-1 pb-3">Legal & Information</h3>
          <div className="flex flex-col overflow-hidden rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-black/5">
            {['Terms of Service', 'Privacy Policy', 'Open Source Licenses'].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-4 py-4 justify-between border-b border-gray-100 last:border-0 cursor-pointer hover:bg-black/5 transition-colors">
                <p className="text-base font-medium">{item}</p>
                <span className="material-symbols-outlined text-xl text-text-secondary">chevron_right</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <div className="mt-4 pb-8 flex justify-center text-center">
        <p className="text-xs font-medium text-text-secondary opacity-70">
          © 2024 PersonaAi Inc.<br/>All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AboutApp;
