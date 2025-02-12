// src/components/FloatingMenu.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, Cog6ToothIcon, ClockIcon } from '@heroicons/react/24/solid';
import styles from './FloatingMenu.module.css';

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuItemClick = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <div className={styles.floatingMenuContainer}>
      <button
        className={styles.floatingButton}
        onClick={handleToggle}
        aria-label="Menu"
      >
        {isOpen ? (
          <XMarkIcon className={styles.icon} />
        ) : (
          <Bars3Icon className={styles.icon} />
        )}
      </button>
      <div
        ref={menuRef}
        className={`${styles.menu} ${isOpen ? styles.menuOpen : styles.menuClosed}`}
      >
        <button
          className={styles.menuItem}
          onClick={() => handleMenuItemClick('/history')}
        >
          <ClockIcon className={styles.menuIcon} />
          <span className={styles.menuItemText}>히스토리</span>
        </button>
        <button
          className={styles.menuItem}
          onClick={() => handleMenuItemClick('/settings')}
        >
          <Cog6ToothIcon className={styles.menuIcon} />
          <span className={styles.menuItemText}>설정</span>
        </button>
      </div>
    </div>
  );
};

export default FloatingMenu;
