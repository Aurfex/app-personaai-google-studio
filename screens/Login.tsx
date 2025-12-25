
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[400px] flex flex-col gap-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 pt-4">
          <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-2 text-primary">
            <span className="material-symbols-outlined" style={{fontSize: '32px'}}>psychology</span>
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold tracking-tight">Welcome Back</h1>
            <p className="text-base text-gray-500 font-medium">Sign in to continue your journey</p>
          </div>
        </div>

        <form className="flex flex-col gap-4 mt-2" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <input className="block w-full rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark pl-11 pr-4 py-3.5 text-base focus:ring-primary shadow-sm" placeholder="name@example.com" type="email"/>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <span className="material-symbols-outlined">lock</span>
              </div>
              <input className="block w-full rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark pl-11 pr-12 py-3.5 text-base focus:ring-primary shadow-sm" placeholder="Enter your password" type="password"/>
              <button className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400">
                <span className="material-symbols-outlined">visibility</span>
              </button>
            </div>
          </div>

          <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-lg shadow-md transition-all active:scale-[0.98] mt-2 flex items-center justify-center gap-2">
            <span>Log In</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Don't have an account? 
            <button onClick={() => navigate('/register')} className="font-bold text-primary hover:underline ml-1">Sign Up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
