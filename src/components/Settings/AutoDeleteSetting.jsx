import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import styles from './AutoDeleteSetting.module.css';

const AutoDeleteSetting = ({ autoDelete, setAutoDelete }) => {
  return (
    <div className={styles.settingItem}>
      <div className={styles.labelContainer}>
        <TrashIcon className={styles.icon} />
        <label htmlFor="autoDelete">자동 삭제 사용:</label>
      </div>
      <div className={styles.toggleContainer}>
        <label className={styles.switch}>
          <input
            type="checkbox"
            id="autoDelete"
            checked={autoDelete}
            onChange={(e) => setAutoDelete(e.target.checked)}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};

export default AutoDeleteSetting;
