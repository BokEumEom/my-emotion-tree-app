// src/components/TreeView.jsx
import React from 'react';
import styles from './TreeView.module.css';

const TreeView = ({ image }) => {
  return (
    <div className={styles.treeView}>
      <img src={image} alt="나무 단계" className={styles.image} />
    </div>
  );
};

export default TreeView;
