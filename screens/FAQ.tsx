
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FAQ: React.FC = () => {
  const navigate = useNavigate();

  const faqs = [
    { q: "How does emotional tracking work?", a: "We use a combination of self-reported mood logs and passive behavioral patterns to create your emotional profile." },
    { q: "Is my assessment data private?", a: "Absolutely. Your privacy is our top priority. All assessment data is encrypted locally." },
    { q: "Can I export my results to PDF?", a: "Yes, you can export a summary of your monthly progress report from the profile tab." }
  ];

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md p-4 border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100">
          <span className="material-symbols-outlined text-primary">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold flex-1 text-center pr-10">FAQ</h1>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar flex flex-col p-4 space-y-3">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 p-3 rounded-lg flex items-start gap-3">
          <span className="material-symbols-outlined text-primary mt-0.5">medical_services</span>
          <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
            PersonaAi is not a substitute for professional medical advice. In emergencies, contact local authorities.
          </p>
        </div>

        {faqs.map((faq, i) => (
          <details key={i} className="group bg-white dark:bg-surface-dark rounded-xl border border-gray-100 shadow-sm overflow-hidden" open={i === 0}>
            <summary className="flex cursor-pointer items-center justify-between p-4 list-none">
              <h3 className="text-sm font-bold">{faq.q}</h3>
              <span className="material-symbols-outlined text-gray-400 group-open:rotate-180 transition-transform">keyboard_arrow_down</span>
            </summary>
            <div className="px-4 pb-4 pt-0 text-sm text-slate-500 leading-relaxed">
              {faq.a}
            </div>
          </details>
        ))}
      </main>
    </div>
  );
};

export default FAQ;
