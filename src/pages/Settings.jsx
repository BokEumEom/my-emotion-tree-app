// src/pages/Settings.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/solid';
import Header from '../components/Header';
import Button from '../components/Button';
import useLocalStorage from '../hooks/useLocalStorage';
import RetentionSetting from '../components/Settings/RetentionSetting';
import AutoDeleteSetting from '../components/Settings/AutoDeleteSetting';
import ThemeSetting from '../components/Settings/ThemeSetting';
import styles from './Settings.module.css';

const Settings = () => {
  const navigate = useNavigate();
  // 로컬 스토리지에 'appSettings' 키로 저장된 설정값 불러오기 (기본값 설정)
  const [settings, setSettings] = useLocalStorage('appSettings', {
    retentionPeriod: 90, // 기본: 90일 (0은 무기한)
    autoDelete: false,
    theme: 'light',
  });

  // 개별 설정 상태
  const [retentionPeriod, setRetentionPeriod] = useState(settings.retentionPeriod);
  const [autoDelete, setAutoDelete] = useState(settings.autoDelete);
  const [theme, setTheme] = useState(settings.theme);

  const handleSave = () => {
    const newSettings = { retentionPeriod, autoDelete, theme };
    setSettings(newSettings);
    alert("설정이 저장되었습니다.");
  };

  return (
    <div className={styles.container}>
      <Header title="설정" backLink="/" />
      <div className={styles.content}>
        <RetentionSetting
          retentionPeriod={retentionPeriod}
          setRetentionPeriod={setRetentionPeriod}
        />
        <AutoDeleteSetting
          autoDelete={autoDelete}
          setAutoDelete={setAutoDelete}
        />
        <ThemeSetting theme={theme} setTheme={setTheme} />
      </div>
      <div className={styles.buttonRow}>
        <Button onClick={handleSave}>설정 저장</Button>
        <Button onClick={() => navigate('/home')} className={styles.homeButton}>
          <HomeIcon className={styles.homeIcon} />
          홈으로 이동
        </Button>
      </div>
    </div>
  );
};

export default Settings;
