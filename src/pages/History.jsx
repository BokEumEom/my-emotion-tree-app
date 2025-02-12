import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";
import Header from "../components/Header";
import useLocalStorage from "../hooks/useLocalStorage";
import { getTreeStage } from "../utils/treeUtils";
import HistoryToggle from "../components/HistoryToggle";
import HistoryCard from "../components/HistoryCard";
import Button from "../components/Button";
import styles from "./History.module.css";

const History = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useLocalStorage("userData", {
    user_id: "user123",
    records: [],
    record_count: 0,
    current_tree_stage: "씨앗",
  });
  const [viewMode, setViewMode] = useState("date");

  // 날짜별 그룹화: 각 기록에 원래 배열의 index를 추가하여 그룹화
  const groupedByDate = userData.records.reduce((acc, record, index) => {
    if (!acc[record.date]) {
      acc[record.date] = [];
    }
    acc[record.date].push({ ...record, index });
    return acc;
  }, {});

  // 날짜별 보기: 최신 날짜가 위로 오도록 정렬
  const sortedDates = Object.keys(groupedByDate).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  // 기록 수 단위 보기: 기록 배열에 index를 추가 후 역순 정렬 (최신 기록이 위에 오도록)
  const recordsByCount = userData.records
    .map((record, index) => ({ ...record, index }))
    .reverse();

  const handleDeleteRecord = (recordIndex) => {
    const updatedRecords = userData.records.filter(
      (_, index) => index !== recordIndex
    );
    const newCount = updatedRecords.length;
    const newStage = getTreeStage(newCount);
    setUserData({
      ...userData,
      records: updatedRecords,
      record_count: newCount,
      current_tree_stage: newStage,
    });
  };

  return (
    <div className={styles.container}>
      <Header title="감정 기록 히스토리" backLink="/" />
      <HistoryToggle viewMode={viewMode} setViewMode={setViewMode} />
      {userData.records.length === 0 ? (
        <p className={styles.emptyMessage}>아직 기록이 없습니다.</p>
      ) : (
        <div className={styles.historyList}>
          {viewMode === "date" ? (
            sortedDates.map((date) => (
              <HistoryCard
                key={date}
                date={date}
                records={groupedByDate[date]}
                onDeleteRecord={handleDeleteRecord}
              />
            ))
          ) : (
            recordsByCount.map((record) => (
              <HistoryCard
                key={record.index}
                date={record.date}
                records={[record]}
                onDeleteRecord={handleDeleteRecord}
              />
            ))
          )}
        </div>
      )}

      {/* 홈으로 이동 버튼 */}
      <div className={styles.homeButtonContainer}>
        <Button onClick={() => navigate("/")} className={styles.homeButton}>
          <HomeIcon className={styles.homeIcon} />
          홈으로 이동
        </Button>
      </div>
    </div>
  );
};

export default History;
