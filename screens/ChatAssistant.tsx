
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateChatResponse } from '../services/geminiService';

interface Message {
  role: 'ai' | 'user';
  text: string;
}

const ChatAssistant: React.FC = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'Hello! How have you been feeling since our last session?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const history = messages.map(m => ({ 
      role: m.role === 'ai' ? 'model' : 'user', 
      parts: [{ text: m.text }] 
    }));

    const aiResponse = await generateChatResponse(history, userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsTyping(false);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      <header className="shrink-0 z-20 bg-white dark:bg-surface-dark shadow-sm border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center px-4 py-3 justify-between">
          <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold">Emotional Check-in</h2>
            <span className="text-primary text-xs font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active Session
            </span>
          </div>
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </header>

      <main ref={scrollRef} className="flex-1 overflow-y-auto w-full p-4 flex flex-col gap-6 no-scrollbar">
        <div className="flex justify-center my-2">
          <span className="text-xs font-medium text-gray-400 bg-gray-100 dark:bg-surface-dark px-3 py-1 rounded-full">Today, 9:41 AM</span>
        </div>

        {messages.map((msg, i) => (
          <div key={i} className={`flex items-end gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
            {msg.role === 'ai' && (
              <div className="bg-center bg-no-repeat bg-cover rounded-full w-9 h-9 shadow-sm shrink-0" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8DSsPQGiNZqxLlEeY9frMCa5ojIHNEk-ei4siLaloihT9o2IV_o7PMSC7JeTWjiTA0uj4PoZxQ7YhB8sL1z00qlVbN8gSrLgDMc4vHMYhjgyKVTSbFH9B7LDE7wcpwfjJ4gNIkbiy3gGZ-kFDuQ3hJG2b67kL7XVwe1tgoMgLLjnILv8sRbtOUbtGzLMYbtRgqA1Cdxb3i0sxmpcGXpzvoxcfMpVPNm7Urk_iS_PNm48-ZpNqhl32tY2wH0Hpu_yyPyqrDLSs9KyO")`}}></div>
            )}
            <div className={`flex flex-col gap-1 max-w-[85%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`p-3.5 rounded-2xl shadow-sm ${msg.role === 'user' ? 'bg-primary text-white rounded-tr-sm' : 'bg-white dark:bg-surface-dark rounded-tl-sm border border-transparent dark:border-gray-700'}`}>
                <p className="text-[15px] leading-relaxed">{msg.text}</p>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-end gap-3">
            <div className="bg-center bg-no-repeat bg-cover rounded-full w-9 h-9 opacity-80" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8DSsPQGiNZqxLlEeY9frMCa5ojIHNEk-ei4siLaloihT9o2IV_o7PMSC7JeTWjiTA0uj4PoZxQ7YhB8sL1z00qlVbN8gSrLgDMc4vHMYhjgyKVTSbFH9B7LDE7wcpwfjJ4gNIkbiy3gGZ-kFDuQ3hJG2b67kL7XVwe1tgoMgLLjnILv8sRbtOUbtGzLMYbtRgqA1Cdxb3i0sxmpcGXpzvoxcfMpVPNm7Urk_iS_PNm48-ZpNqhl32tY2wH0Hpu_yyPyqrDLSs9KyO")`}}></div>
            <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-white dark:bg-surface-dark border border-transparent dark:border-gray-700 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce delay-75"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce delay-150"></span>
            </div>
          </div>
        )}
      </main>

      <footer className="shrink-0 z-20 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pb-safe">
        <div className="w-full overflow-x-auto no-scrollbar py-3 px-4 flex gap-2.5">
          {['Explore Triggers', 'Just venting', 'Guide breathing'].map((chip, i) => (
            <button key={i} onClick={() => setInput(chip)} className="shrink-0 whitespace-nowrap h-9 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium">
              {chip}
            </button>
          ))}
        </div>
        <div className="px-4 pb-4 pt-1 flex items-end gap-3">
          <button className="mb-2 text-gray-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[26px]">add_circle</span>
          </button>
          <div className="flex-1 bg-gray-100 dark:bg-gray-800/50 rounded-2xl min-h-[48px] flex items-center px-4 py-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="w-full bg-transparent border-none p-0 text-base font-normal focus:ring-0" 
              placeholder="Type a message..." 
              type="text"
            />
          </div>
          <button 
            onClick={handleSend}
            className="mb-1 h-10 w-10 shrink-0 rounded-full bg-primary hover:bg-blue-600 flex items-center justify-center text-white shadow-md"
          >
            <span className="material-symbols-outlined text-[20px] ml-0.5">send</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default ChatAssistant;
