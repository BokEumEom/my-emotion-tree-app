// src/pages/History.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import useLocalStorage from "../hooks/useLocalStorage";
import styles from "./History.module.css";

const History = () => {
  const [userData] = useLocalStorage("userData", {
    user_id: "user123",
    records: [],
  });
  // viewMode: "date" - 날짜별 그룹화, "count" - 기록 순으로 나열
  const [viewMode, setViewMode] = useState("date");

  // 날짜별 그룹화: 각 날짜를 key로 하여 배열에 기록들을 모읍니다.
  const groupedByDate = userData.records.reduce((acc, record) => {
    if (!acc[record.date]) {
      acc[record.date] = [];
    }
    acc[record.date].push(record);
    return acc;
  }, {});

  // 최신 날짜가 위로 오도록 정렬 (날짜별 보기)
  const sortedDates = Object.keys(groupedByDate).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  // 기록 수 단위로 정렬 (최신 기록이 위에 오도록 reverse)
  const recordsByCount = [...userData.records].reverse();

  return (
    <div className={styles.container}>
      <Header title="감정 기록 히스토리" backLink="/" />
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

      {userData.records.length === 0 ? (
        <p className={styles.emptyMessage}>아직 기록이 없습니다.</p>
      ) : (
        <div className={styles.historyList}>
          {viewMode === "date" ? (
            sortedDates.map((date) => (
              <div key={date} className={styles.historyCard}>
                <h3 className={styles.date}>{date}</h3>
                {groupedByDate[date].map((record, index) => (
                  <p key={index} className={styles.recordText}>
                    {record.note || "기록 없음"}
                  </p>
                ))}
              </div>
            ))
          ) : (
            recordsByCount.map((record, index) => (
              <div key={index} className={styles.historyCard}>
                <h3 className={styles.date}>{record.date}</h3>
                <p className={styles.recordText}>
                  {record.note || "기록 없음"}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default History;
