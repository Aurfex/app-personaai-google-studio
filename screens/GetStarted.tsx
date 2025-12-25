
import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetStarted: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-screen w-full flex-col bg-background-dark overflow-hidden justify-between">
      {/* Background with Cinematic Zoom */}
      <div className="relative w-full h-[60vh] flex-shrink-0 overflow-hidden">
        <div 
          className="w-full h-full bg-center bg-no-repeat bg-cover animate-slow-zoom" 
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4eFftRv420jK4e3tqSZvYfjJc_HsokdW0fAa1oW-LHMXzP3kpZEvAbRCWp6JsxWUnryeW2kLRfybw6zoCB-I8mYjAem8Q8QfNQcws2n_weVeLJ7bJCfDDNeKSQstaeEEUCy0Zsnv_XtIUrHGGEX9tuGxwYr89IOBqGtz5a_AgyFwSuUOFWCvWvIq0IYMoqpKM5IfbByX9hkxscnz-uej231yluMWdVzFJ5z5fftYweRDDR44zio8b64S8FiYXurIDxUpqHBDnlClJ")`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/20 via-transparent to-background-dark"></div>
        </div>
        
        {/* Floating Logo Badge */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="bg-background-dark/80 backdrop-blur-xl px-5 py-2.5 rounded-full shadow-2xl border border-white/10 flex items-center gap-2.5">
            <span className="material-symbols-outlined text-primary text-2xl filled">psychology</span>
            <span className="text-sm font-black text-white tracking-widest uppercase">PersonaAi</span>
          </div>
        </div>
      </div>
      
      {/* Content Area with Staggered Entrance */}
      <div className="flex flex-col flex-1 px-8 pb-12 justify-end relative z-10">
        <div className="flex flex-col gap-3 mb-10 items-center text-center">
          <h1 className="text-white tracking-tighter text-[40px] font-black leading-[0.95] animate-fade-in-up opacity-0">
            Evolve Your <br/>
            <span className="text-primary italic">Inner World</span>
          </h1>
          <p className="text-[#93adc8] text-base font-medium leading-relaxed max-w-xs mx-auto animate-fade-in-up opacity-0 delay-200">
            Unlock the power of emotional intelligence with your personal AI mentor.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 w-full max-w-[420px] mx-auto">
          <button 
            onClick={() => navigate('/onboarding')}
            className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-5 bg-primary hover:bg-primary-dark transition-all duration-300 text-white text-lg font-bold shadow-[0_10px_30px_-10px_rgba(43,108,238,0.5)] active:scale-95 animate-fade-in-up opacity-0 delay-300"
          >
            <span className="relative z-10">Create Account</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
          
          <button 
            onClick={() => navigate('/login')}
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-5 bg-white/5 border-2 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white text-lg font-bold active:scale-95 animate-fade-in-up opacity-0 delay-400"
          >
            Sign In
          </button>
        </div>
        
        <div className="mt-8 text-center animate-fade-in-up opacity-0 delay-500">
          <p className="text-[#93adc8] text-[11px] font-bold uppercase tracking-widest opacity-60">
            Trusted by 50,000+ Seekers
          </p>
        </div>
      </div>

      {/* Background Glows */}
      <div className="absolute bottom-[-10%] left-[-10%] size-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] size-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
    </div>
  );
};

export default GetStarted;
