import React from 'react';
import { ClockIcon } from '@heroicons/react/24/solid';
import styles from './RetentionSetting.module.css';

const RetentionSetting = ({ retentionPeriod, setRetentionPeriod }) => {
  return (
    <div className={styles.settingItem}>
      <div className={styles.labelContainer}>
        <ClockIcon className={styles.icon} />
        <label htmlFor="retentionPeriod">감정 기록 보존 기간 (일):</label>
      </div>
      <select
        id="retentionPeriod"
        className={styles.selectInput}
        value={retentionPeriod}
        onChange={(e) => setRetentionPeriod(Number(e.target.value))}
      >
        <option value={30}>30일</option>
        <option value={60}>60일</option>
        <option value={90}>90일</option>
        <option value={0}>무기한</option>
      </select>
    </div>
  );
};

export default RetentionSetting;
