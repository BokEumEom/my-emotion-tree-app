
import styles from './HistoryToggle.module.css';

const HistoryToggle = ({ viewMode, setViewMode }) => {
  return (
    <div className={styles.toggleContainer}>
      <button
        className={viewMode === "date" ? styles.activeButton : styles.button}
        onClick={() => setViewMode("date")}
      >
        일 단위 보기
      </button>
      <button
        className={viewMode === "count" ? styles.activeButton : styles.button}
        onClick={() => setViewMode("count")}
      >
        기록 수 단위 보기
      </button>
    </div>
  );
};

export default HistoryToggle;
