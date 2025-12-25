
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash: React.FC = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => navigate('/get-started'), 600);
    }, 2200);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`relative flex h-screen w-full flex-col items-center justify-center p-4 bg-background-dark transition-opacity duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-background-dark to-background-dark opacity-90 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="group relative flex h-28 w-28 items-center justify-center">
          <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-2xl animate-pulse"></div>
          <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-600 shadow-[0_0_50px_-10px_rgba(43,108,238,0.6)] animate-[bounce_2s_infinite]">
            <span className="material-symbols-outlined text-white text-[56px] filled">psychology</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-black tracking-tighter text-white animate-fade-in-up">PersonaAi</h1>
          <p className="text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase opacity-60 animate-fade-in-up delay-200">
            Evolution of Mind
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center gap-4">
        <div className="h-1 w-40 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-full bg-primary rounded-full origin-left animate-[loading_2.5s_ease-in-out]"></div>
        </div>
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest animate-pulse">Initializing Interface</p>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default Splash;
