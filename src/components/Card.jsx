import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, text, children, className, ...props }) => {
  return (
    <div className={`${styles.card} ${className || ''}`} {...props}>
      {title && <h3 className={styles.cardTitle}>{title}</h3>}
      {text && <p className={styles.cardText}>{text}</p>}
      {children}
    </div>
  );
};

export default Card;
