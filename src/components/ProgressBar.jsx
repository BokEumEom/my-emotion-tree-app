// src/components/ProgressBar.jsx
import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ current, total }) => {
  const progressPercentage = Math.min((current / total) * 100, 100);

  return (
    <div className={styles.progressContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${progressPercentage}%` }}
      />
      <span className={styles.progressText}>
        {current} / {total}
      </span>
    </div>
  );
};

export default ProgressBar;
