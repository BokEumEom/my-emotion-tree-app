import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import styles from './ThemeSetting.module.css';

const ThemeSetting = ({ theme, setTheme }) => {
  return (
    <div className={styles.settingItem}>
      <div className={styles.labelContainer}>
        <SunIcon className={styles.icon} />
        <label htmlFor="theme">테마 선택:</label>
      </div>
      <div className={styles.radioContainer}>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={theme === "light"}
            onChange={(e) => setTheme(e.target.value)}
          />
          <SunIcon className={styles.radioIcon} />
          Light
        </label>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={theme === "dark"}
            onChange={(e) => setTheme(e.target.value)}
          />
          <MoonIcon className={styles.radioIcon} />
          Dark
        </label>
      </div>
    </div>
  );
};

export default ThemeSetting;
