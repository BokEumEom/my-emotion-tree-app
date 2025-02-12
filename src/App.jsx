// src/App.jsx
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import EmotionInput from './pages/EmotionInput';
import History from './pages/History';
import './App.css';

function App() {
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const completed = localStorage.getItem('onboardingCompleted') === 'true';
    setOnboardingCompleted(completed);
    setLoading(false);
  }, []);

  // 로딩 상태에서는 빈 화면이나 스피너 등을 표시
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* 온보딩이 완료되지 않았다면 기본 경로를 온보딩 페이지로 리다이렉트 */}
        {!onboardingCompleted && <Route path="/" element={<Navigate to="/onboarding" replace />} />}
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/emotion" element={<EmotionInput />} />
        <Route path="/history" element={<History />} />
        {/* 온보딩이 완료된 경우 기본 경로로 대시보드 표시 */}
        {onboardingCompleted && <Route path="/" element={<Home />} />}
      </Routes>
    </Router>
  );
}

export default App;
