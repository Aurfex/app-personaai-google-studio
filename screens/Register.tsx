
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto overflow-x-hidden bg-background-light dark:bg-background-dark shadow-xl">
      <header className="flex items-center justify-between p-4 z-10">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full hover:bg-slate-200/50 transition-colors">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col px-6 pb-8">
        <div className="mb-8">
          <h1 className="text-[32px] font-extrabold leading-tight tracking-tight mb-2">Join PersonaAi</h1>
          <p className="text-slate-500 font-medium leading-normal">Your companion for emotional intelligence.</p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold">Full Name</label>
            <div className="relative">
              <input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-14 px-4 focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="e.g., Alex Doe" type="text"/>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none">person</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold">Email Address</label>
            <div className="relative">
              <input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-14 px-4 focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="name@example.com" type="email"/>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none">mail</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold">Password</label>
            <div className="relative">
              <input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-14 px-4 pr-12 focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="••••••••" type="password"/>
              <button className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-slate-400" type="button">
                <span className="material-symbols-outlined text-xl">visibility_off</span>
              </button>
            </div>
          </div>

          <button className="w-full h-14 mt-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-md transition-all active:scale-[0.98]">
            Create Account
          </button>
        </form>

        <div className="relative flex py-8 items-center">
          <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
          <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium">Or continue with</span>
          <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 h-14 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 transition-colors">
            <span className="text-slate-700 dark:text-slate-200 font-bold text-sm">Google</span>
          </button>
          <button className="flex items-center justify-center gap-3 h-14 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 transition-colors">
            <span className="text-slate-700 dark:text-slate-200 font-bold text-sm">Apple</span>
          </button>
        </div>

        <div className="mt-auto pt-8 flex justify-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
            Already have an account? 
            <button onClick={() => navigate('/login')} className="text-primary font-bold hover:underline ml-1">Log in</button>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;
