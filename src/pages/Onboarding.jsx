// src/pages/Onboarding.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import styles from './Onboarding.module.css';

const slides = [
  {
    title: '나의 감정나무에 오신 것을 환영합니다!',
    description: '매일의 감정 기록이 당신의 나무를 성장시킵니다.',
    image: '/assets/onboarding1.webp'
  },
  {
    title: '감정을 기록해보세요',
    description: '간단한 입력으로 오늘의 기분을 기록할 수 있습니다.',
    image: '/assets/onboarding2.webp'
  },
  {
    title: '나무의 성장을 확인하세요',
    description: '당신의 기록이 모여 아름다운 나무로 성장합니다.',
    image: '/assets/onboarding3.webp'
  }
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // 온보딩 완료 플래그 설정 후 메인 화면 이동
      localStorage.setItem('onboardingCompleted', 'true');
      navigate('/home');
    }
  };

  const handleSkip = () => {
    // 건너뛰기를 누르면 온보딩 완료 플래그 설정 후 바로 메인 화면 이동
    localStorage.setItem('onboardingCompleted', 'true');
    navigate('/home');
  };

  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <img
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          className={styles.image}
        />
        <h1 className={styles.title}>{slides[currentSlide].title}</h1>
        <p className={styles.description}>{slides[currentSlide].description}</p>
      </div>
      
      <div className={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${
              currentSlide === index ? styles.active : ''
            }`}
          />
        ))}
      </div>

      <div className={styles.footer}>
        {currentSlide < slides.length - 1 && (
          <button className={styles.skipButton} onClick={handleSkip}>
            건너뛰기
          </button>
        )}
        <Button onClick={handleNext}>
          {currentSlide === slides.length - 1 ? '시작하기' : '다음'}
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
