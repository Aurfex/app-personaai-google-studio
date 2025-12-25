
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const slides = [
    {
      title: "Discover Your True Self",
      desc: "Unlock your potential with personalized insights and growth plans designed just for you.",
      props: [
        { icon: 'psychology', title: 'Deep Self-Assessment', text: 'Uncover hidden personality traits with scientific tests.' },
        { icon: 'ecg_heart', title: 'Emotional Intelligence', text: 'Master your emotions and improve your relationships.' },
        { icon: 'trending_up', title: 'Personalized Growth', text: 'Actionable plans tailored to your mind and goals.' }
      ]
    }
  ];

  return (
    <div className="relative flex h-full min-h-screen w-full max-w-md mx-auto flex-col overflow-hidden bg-background-light dark:bg-background-dark shadow-2xl">
      <div className="flex items-center justify-end p-6 pt-10 pb-2 z-10">
        <button onClick={() => navigate('/register')} className="text-slate-500 font-bold hover:text-primary transition-colors">Skip</button>
      </div>

      <div className="flex flex-1 flex-col px-6 pt-2 pb-6">
        <div className="mb-8">
          <h1 className="text-[32px] font-extrabold leading-[1.2] mb-3 tracking-tight">
            Discover Your <br/><span className="text-primary">True Self</span>
          </h1>
          <p className="text-slate-500 font-medium leading-relaxed pr-4">
            {slides[0].desc}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {slides[0].props.map((p, i) => (
            <div key={i} className="flex gap-5 items-start group">
              <div className="flex items-center justify-center rounded-2xl bg-primary/10 dark:bg-slate-800 text-primary shrink-0 size-14 transition-colors">
                <span className="material-symbols-outlined text-[28px]">{p.icon}</span>
              </div>
              <div className="flex flex-1 flex-col pt-1">
                <p className="text-lg font-bold leading-tight mb-1.5">{p.title}</p>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 pb-10 mt-auto z-10">
        <div className="flex justify-center gap-2 mb-8">
          <div className="h-2 w-2 rounded-full bg-slate-300"></div>
          <div className="h-2 w-8 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-slate-300"></div>
        </div>
        <button 
          onClick={() => navigate('/register')}
          className="flex w-full items-center justify-center rounded-xl bg-primary h-14 px-4 text-[17px] font-bold text-white shadow-lg active:scale-[0.98] transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
