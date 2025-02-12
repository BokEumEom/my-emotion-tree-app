// src/App.jsx
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import EmotionInput from './pages/EmotionInput';
import History from './pages/History';
import Settings from './pages/Settings';
import './App.css';

function App() {
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const completed = localStorage.getItem('onboardingCompleted') === 'true';
    setOnboardingCompleted(completed);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {!onboardingCompleted && <Route path="/" element={<Navigate to="/onboarding" replace />} />}
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/emotion" element={<EmotionInput />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        {onboardingCompleted && <Route path="/" element={<Home />} />}
      </Routes>
    </Router>
  );
}

export default App;
