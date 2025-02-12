import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import FloatingMenu from '../components/FloatingMenu'; // 플로팅 메뉴 컴포넌트 import
import TreeView from '../components/TreeView';
import ProgressBar from '../components/ProgressBar';
import Card from '../components/Card';
import useLocalStorage from '../hooks/useLocalStorage';
import { getCurrentTreeData } from '../utils/treeUtils';
import styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  const [userData] = useLocalStorage('userData', {
    user_id: 'user123',
    username: 'User123',
    records: [],
    record_count: 0,
    current_tree_stage: '씨앗'
  });

  const currentStageData = getCurrentTreeData(userData.record_count);
  const { message: praiseMessage, image: treeImage, maxRecords } = currentStageData;
  const nextStageTarget = maxRecords === Infinity ? null : maxRecords + 1;
  
  // 주간 기록 수 계산 (기본값: 0)
  const weeklyRecords = userData.records ? userData.records.length : 0;

  return (
    <div className={styles.container}>
      <Header title="나의 감정나무" />
      
      <div className={styles.profileSection}>
        <h2>안녕하세요, {userData.username}님!</h2>
        <p>오늘도 소중한 감정을 기록해보세요.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.cardContainer}>
          <Card title="오늘의 칭찬" text={praiseMessage} className={styles.praiseCard} />
        </div>

        <div className={styles.recordContainer}>
          <Card title="현재 기록" text={`${userData.record_count} 건`} className={styles.recordCard} />
          <Card title="주간 기록" text={`${weeklyRecords} 건`} className={styles.recordCard} />
        </div>

        <div className={styles.treeContainer}>
          <TreeView image={treeImage} />
        </div>

        {nextStageTarget && (
          <div className={styles.progressWrapper}>
            <ProgressBar current={userData.record_count} total={nextStageTarget} />
            <p className={styles.progressLabel}>
              다음 단계까지 {nextStageTarget - userData.record_count} 건 남았어요!
            </p>
          </div>
        )}
      </div>

      <footer className={styles.footer}>
        <Button onClick={() => navigate('/emotion')}>나의 감정 기록하기</Button>
        <Button onClick={() => navigate('/onboarding')} className={styles.onboardingBtn}>
          온보딩
        </Button>
      </footer>

      {/* 플로팅 메뉴 컴포넌트 */}
      <FloatingMenu />
    </div>
  );
};

export default Home;
