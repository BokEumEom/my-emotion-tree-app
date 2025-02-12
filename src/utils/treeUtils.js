// src/utils/treeUtils.js
import { treeStages } from "../data/treeStages";

/**
 * recordCount에 따라 현재 스테이지 객체를 반환
 */
export const getCurrentTreeData = (recordCount) => {
  const stage = treeStages.find(
    (s) => recordCount >= s.minRecords && recordCount <= s.maxRecords
  );
  return stage || treeStages[treeStages.length - 1];
};

/**
 * recordCount에 따른 나무의 이름(단계)을 반환
 */
export const getTreeStage = (recordCount) => {
  return getCurrentTreeData(recordCount).name;
};

/**
 * recordCount에 따른 칭찬 메시지를 반환
 */
export const getPraiseMessage = (recordCount) => {
  return getCurrentTreeData(recordCount).message;
};

/**
 * recordCount에 따른 나무 이미지 경로를 반환
 */
export const getTreeImage = (recordCount) => {
  return getCurrentTreeData(recordCount).image;
};
