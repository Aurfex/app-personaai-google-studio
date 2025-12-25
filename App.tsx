
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';
import { INITIAL_USER, INITIAL_HABITS, INITIAL_HISTORY } from './constants';
import { User, Habit, Entry } from './types';

// Screens (Components defined below for brevity in one file)
import Splash from './screens/Splash';
import GetStarted from './screens/GetStarted';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import ChatAssistant from './screens/ChatAssistant';
import History from './screens/History';
import Profile from './screens/Profile';
import FaceAnalyzer from './screens/FaceAnalyzer';
import Numerology from './screens/Numerology';
import AboutApp from './screens/AboutApp';
import FAQ from './screens/FAQ';

const App: React.FC = () => {
  const [user, setUser] = useState<User>(INITIAL_USER);
  const [habits, setHabits] = useState<Habit[]>(INITIAL_HABITS);
  const [history, setHistory] = useState<Entry[]>(INITIAL_HISTORY);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-background-light dark:bg-background-dark font-sans overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/dashboard" 
            element={<Dashboard user={user} habits={habits} history={history} setHabits={setHabits} />} 
          />
          <Route path="/chat" element={<ChatAssistant />} />
          <Route path="/history" element={<History entries={history} />} />
          <Route 
            path="/profile" 
            element={<Profile user={user} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} 
          />
          <Route path="/face-analyzer" element={<FaceAnalyzer />} />
          <Route path="/numerology" element={<Numerology />} />
          <Route path="/about" element={<AboutApp />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
