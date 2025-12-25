
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const FaceAnalyzer: React.FC = () => {
  const navigate = useNavigate();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      // In a real app, we'd navigate to results
      alert("Analysis complete! Mock results: 92% Clarity, Confident & Open mood detected.");
      navigate('/dashboard');
    }, 3000);
  };

  return (
    <div className="relative mx-auto flex h-full min-h-screen w-full max-w-md flex-col overflow-hidden bg-background-light dark:bg-background-dark shadow-2xl">
      <header className="sticky top-0 z-20 flex items-center justify-between bg-background-light/95 dark:bg-background-dark/95 p-4 pb-2 backdrop-blur-sm">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold">Face Analyzer</h1>
        <div className="size-10"></div>
      </header>

      <main className="flex-1 overflow-y-auto px-6 pb-8 pt-4">
        <div className="mb-8">
          <h2 className="mb-2 text-[28px] font-extrabold leading-tight">Emotional Insights</h2>
          <p className="text-base font-medium text-gray-600 dark:text-gray-400">
            Discover hidden emotional cues. Ensure your face is well-lit and centered for the most accurate AI reading.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-6">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="group relative flex aspect-[4/5] w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-surface-dark hover:border-primary/50 transition-all"
          >
            <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[40px] filled">camera_front</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-lg font-bold">Upload a photo</p>
              <p className="text-sm font-medium text-gray-500">Tap to browse or use the buttons below</p>
            </div>
            <input 
              ref={fileInputRef}
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={startAnalysis}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button 
            onClick={startAnalysis}
            className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-primary text-white shadow-lg font-bold"
          >
            <span className="material-symbols-outlined">photo_camera</span>
            <span>Take Photo</span>
          </button>
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white dark:bg-surface-dark font-bold"
          >
            <span className="material-symbols-outlined text-primary">image</span>
            <span>Choose from Gallery</span>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-center">
          <span className="material-symbols-outlined text-[16px] text-gray-400">lock</span>
          <p className="text-xs font-medium text-gray-400">Photos are processed securely and not stored.</p>
        </div>
      </main>

      {isAnalyzing && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
          <div className="relative flex size-20 items-center justify-center">
            <svg className="h-full w-full animate-spin text-primary" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
            </svg>
            <span className="material-symbols-outlined absolute text-[24px] text-primary">face</span>
          </div>
          <p className="mt-4 animate-pulse text-lg font-bold">Analyzing...</p>
        </div>
      )}
    </div>
  );
};

export default FaceAnalyzer;
