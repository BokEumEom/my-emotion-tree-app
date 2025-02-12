# 🌱 나의 감정나무 (My Emotion Tree)

매일 감정을 기록하여 나만의 나무를 성장시키는 웹 애플리케이션입니다.  
감정 기록 횟수에 따라 흙 → 새싹 → 잎이 돋은 나무로 변화하는 과정을 시각적으로 확인할 수 있어, 꾸준한 기록 습관을 형성하고 스스로의 감정 변화를 인식할 수 있도록 돕습니다.

## 📌 주요 기능 (Features)

### ✅ 온보딩 (Onboarding)
- 앱 최초 실행 시 간단한 튜토리얼(슬라이드) 제공  
- “시작하기” 버튼을 통해 앱의 메인 화면으로 진입

### ✅ 홈 (Home)
- 현재 감정 기록 횟수에 따른 나무 상태(씨앗, 새싹, 잎 등) 확인  
- 오늘의 칭찬 메시지와 나무 이미지로 동기 부여  
- 감정 기록으로 이동할 수 있는 버튼 제공  

### ✅ 감정 기록 (Emotion Input)
- 오늘의 감정(메모)만 텍스트로 기록  
- 기록 시 로컬 스토리지에 데이터가 추가되며, 기록 횟수 증가에 따라 나무 성장 단계 변경

### ✅ 히스토리 (History)
- 날짜별 또는 기록 순으로 감정 기록을 확인  
- 최신 기록이 위로 오도록 정렬  
- 기록이 없을 경우 안내 메시지 표시  

### ✅ 플로팅 메뉴 (Floating Menu)
- 오른쪽 하단(고정)에서 메뉴 아이콘 클릭 시 간단한 드롭다운 표시  
- “히스토리” 항목 선택 시 히스토리 화면으로 이동  

### ✅ 로컬 스토리지 기반 데이터 관리
- 별도 서버 연동 없이 로컬 스토리지에 사용자 데이터(감정 기록, 기록 횟수 등) 저장  
- 초기 온보딩 완료 여부도 로컬 스토리지로 관리  

---

## 🛠️ 기술 스택 (Tech Stack)

- **Front-end:**  
  - [React](https://reactjs.org/) & [React Router DOM](https://reactrouter.com/)
  - [Vite](https://vitejs.dev/) (프로젝트 번들링 및 개발 서버)
  - HTML5, CSS3 (CSS Modules 사용)
  - [@heroicons/react](https://www.npmjs.com/package/@heroicons/react) (UI 아이콘)

- **Data Storage:**  
  - [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)  
  (서버 없이 클라이언트 측에서 사용자 데이터 관리)

---