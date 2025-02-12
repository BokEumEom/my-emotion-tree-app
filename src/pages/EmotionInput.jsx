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
    const newStage = getTreeStage(newCount); // 새 기록 수에 따른 단계 계산

    // 만약 현재 단계가 '씨앗'이 아니고(즉, level > 1) 새 기록 수가 현재 단계의 최대치 이상이면,
    // 단계를 달성한 것으로 간주하여 기록 수를 초기화합니다.
    if (userData.current_tree_stage !== "씨앗" && newCount >= getTreeStage(newCount).maxRecords) {
      alert("축하합니다! 단계를 달성했습니다. 기록을 초기화합니다.");
      setUserData({
        ...userData,
        records: updatedRecords,
        record_count: 0,
        current_tree_stage: "씨앗"
      });
    } else {
      setUserData({
        ...userData,
        records: updatedRecords,
        record_count: newCount,
        current_tree_stage: newStage
      });
    }

    // 저장 후 홈 화면으로 이동
    navigate('/');
  };

  return (
    <div className={styles.container}>
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
      <footer className={styles.footer}>
        <Button onClick={handleSave}>저장하기</Button>
      </footer>
    </div>
  );
};

export default EmotionInput;
