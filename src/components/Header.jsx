
import styles from './Header.module.css';

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
