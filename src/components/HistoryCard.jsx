
import styles from './HistoryCard.module.css';

const HistoryCard = ({ date, records, onDeleteRecord }) => {
  return (
    <div className={styles.historyCard}>
      <h3 className={styles.date}>{date}</h3>
      {records.map((record) => (
        <div key={record.index} className={styles.recordItem}>
          <p className={styles.recordText}>
            {record.note || "기록 없음"}
          </p>
          <button
            className={styles.deleteButton}
            onClick={() => onDeleteRecord(record.index)}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
};

export default HistoryCard;
