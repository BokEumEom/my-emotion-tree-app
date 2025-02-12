// src/pages/EmotionInput.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import useLocalStorage from '../hooks/useLocalStorage';
import { getTreeStage } from '../utils/treeUtils';
import styles from './EmotionInput.module.css';

const EmotionInput = () => {
  const navigate = useNavigate();
  const [note, setNote] = useState('');
  const [userData, setUserData] = useLocalStorage('userData', {
    user_id: 'user123',
    records: [],
    record_count: 0,
    current_tree_stage: '씨앗'
  });

  const handleSave = () => {
    const newRecord = {
      date: new Date().toISOString().split('T')[0],
      note: note
    };

    const updatedRecords = [...userData.records, newRecord];
    const newCount = updatedRecords.length;
    const newStage = getTreeStage(newCount);

    setUserData({
      ...userData,
      records: updatedRecords,
      record_count: newCount,
      current_tree_stage: newStage
    });

    // 저장 후 홈(대시보드)로 이동
    navigate('/');
  };

  return (
    <div className={styles.container}>
      {/* Header에 backLink prop을 전달하면 Header에도 뒤로가기 버튼이 표시됩니다 */}
      <Header title="나의 감정 기록하기" backLink="/" />
      <div className={styles.content}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>오늘의 감정을 기록해보세요</h2>
          <textarea
            className={styles.noteInput}
            placeholder="오늘의 느낌, 생각, 또는 특별한 순간을 자유롭게 적어보세요."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
      </div>
      {/* 하단 버튼 영역에 '뒤로가기' 버튼 추가 */}
      <footer className={styles.footer}>
        <Button onClick={() => navigate(-1)}>뒤로가기</Button>
        <Button onClick={handleSave}>저장하기</Button>
      </footer>
    </div>
  );
};

export default EmotionInput;
