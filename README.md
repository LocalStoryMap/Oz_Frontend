# 로컬스토리맵 (일로일로)

## 🗺 프로젝트 소개

**LocalStoryMap**은 지도를 통해 지역의 다양한 이야기를 찾아보고,  
자신만의 경험을 스토리로 남길 수 있는 **위치 기반 커뮤니티 웹 서비스**입니다.

사용자는 지도의 마커를 클릭해 장소에 얽힌 이야기를 확인하고,  
여행 중 방문한 장소나 특별한 순간의 감정을 스토리로 기록할 수 있습니다.  
지금 이 순간, 나만의 이야기를 지도 위에 남겨보세요.

---

## 👥 팀 동료

| [<img src="https://avatars.githubusercontent.com/Leekwanyong" width="80"/>](https://github.com/Leekwanyong) | [<img src="https://avatars.githubusercontent.com/seonysun" width="80"/>](https://github.com/seonysun) | [<img src="https://avatars.githubusercontent.com/hohhh" width="80"/>](https://github.com/hohhh) |
|:--:|:--:|:--:|
| [이관용](https://github.com/Leekwanyong) | [최선형](https://github.com/seonysun) | [홍성현](https://github.com/hohhh) |
| FrontEnd | FrontEnd | FrontEnd |

---

## 🔗 배포 링크

### 📗 [로컬스토리맵 서비스 바로가기](https://www.localstorymap.com/)

---

## 🛠 Tech Stack

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=Zustand&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Panda CSS](https://img.shields.io/badge/Panda_CSS-7BC0FF?style=for-the-badge&logo=panda&logoColor=black)

### Design & Map
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![KakaoMap](https://img.shields.io/badge/KakaoMap-FFCD00?style=for-the-badge&logo=kakao&logoColor=000000)

### Dev Tools
![Husky](https://img.shields.io/badge/Husky-1D344F?style=for-the-badge&logo=git&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=000000)
![CodeRabbit](https://img.shields.io/badge/CodeRabbit-AI--Review-purple?style=for-the-badge)

---

## 📌 주요 기능 및 구현 기술

### 1. 👤 회원 및 마이페이지 기능
- **사용 기술**: 카카오/네이버 소셜 로그인, JWT 기반 인증
- **주요 기능**
  - 소셜 로그인, 토큰 재발급, 회원 탈퇴 기능
  - 마이페이지에서 내 정보, 북마크 목록, 작성 스토리 관리

---

### 2. 💳 구독 및 결제
- **사용 기술**: PortOne 결제 API
- **주요 기능**
  - 유료 구독 회원만 접근 가능한 기능 제한
  - 결제 및 구독 상태에 따른 페이지 접근 제어

---

### 3. 🤖 AI 챗봇 (네이버 Clova Studio)
- **사용 기술**: 네이버 Clova Chat API
- **주요 기능**
  - 사용자의 질문이나 상황에 대응하는 AI 챗봇 도입
  - 기본적인 서비스 안내 및 내비게이션 지원

---

### 4. 🗺 지도 기반 장소 탐색
- **사용 기술**: Kakao Map JavaScript SDK, Geolocation API, 지도 라이브러리 (clusterer, drawing, services)
- **주요 기능**
  - 커스텀 이미지 마커 생성 및 지도 렌더링
  - 카테고리별 마커 필터링(다중 표시) 및 제어
  - 마커 hover 시 인포윈도우 노출, 클릭 시 장소 카드 출력
  - 사용자 현재 위치 기반 마커 노출

---

### 5. 🔗 유저 추천 경로 생성 및 조회
- **사용 기술**: Kakao Polyline, Tanstack Query
- **주요 기능**
  - 사용자가 장소를 그룹화하여 루트 생성 가능
  - 그룹화된 마커 간 선(Polyline) 연결로 시각적인 경로 제공

---

### 6. 🧭 지역 명소 리스트 및 검색
- **사용 기술**: Geolocation API, 쿼리스트링 기반 검색
- **주요 기능**
  - 최신순 / 인기순 / 거리순 등 정렬 조건 기반 필터링
  - 키워드 기반 명소 검색
  - 사용자 위치 기준 반경 10km 내 장소 탐색

---

### 7. 📖 스토리(후기) 작성 기능
- **사용 기술**: AWS S3, FormData, 클라이언트 유효성 검사
- **주요 기능**
  - 장소에 대한 스토리(후기) 작성, 수정, 삭제
  - 지도 상세 및 스토리 목록 페이지에서 접근 가능
  - 이미지 업로드 기능(S3 연동), 자동 작성일 기록
  - 키워드 기반 스토리 검색, 대댓글 기능 포함

---

## 📑 팀 컨벤션

### Branch Strategy

- `main` / `dev` 브랜치 기본 생성
- 각 작업 단위마다 이슈 생성 후 브랜치 생성 (예: `feat/1-home-ui`)
- `main`과 `dev`로 직접 push 금지

### Git Convention

| Prefix | 설명 |
|--------|------|
| ✨ feat | 새로운 기능 구현 |
| 🐛 fix | 버그 수정 |
| 📄 docs | 문서 추가 및 수정 |
| 💄 design | UI 디자인 변경 |
| 🎨 structure | 구조 및 포맷팅 변경 |
| ♻️ refactor | 코드 리팩토링 |
| 🚀 perf | 성능 최적화 작업 |
| 🚚 move / rename | 파일 이동, 이름 변경 |
| 🔥 remove | 파일 삭제 |
| 🔧 chore | 설정 파일 추가/삭제 |
| ⚙️ settings | 개발 환경 세팅 |

- 커밋 메시지에 이슈 번호 포함 (예: `#1`)
- 커밋 메시지 본문에 간단한 설명 작성

### Pull Request 규칙

- **제목**은 다음과 같이 작성합니다:  
  `✨ Feat: 공통 버튼 컴포넌트 구현`
- PR 병합 전 코드래빗 리뷰 확인 및 반영

### Communication Rules

- Discord 활용
- 정기 회의 진행

---

## 📂 Documents

- [📜 요구사항 정의서](https://docs.google.com/spreadsheets/d/17xPDiH6k2B0Vqq7D1OYXzgHwvptw2tSGctseTkB8o5w/edit?gid=211662200#gid=211662200)
- [📜 플로우 차트](https://excalidraw.com/#room=5bfa76f92a583e41c584,P5HPte0F56823x8jKNUHFQ)
- [📜 와이어프레임](https://www.figma.com/design/JSccwQkynWD8Eyzr9HRJ8I/%EC%98%A4%EC%A6%88_%ED%95%A9%EB%8F%99%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EB%A1%9C%EC%BB%AC%EC%8A%A4%ED%86%A0%EB%A6%AC%EB%A7%B5?node-id=0-1&t=rNQGk12X7MLMTmN0-1)
- [📜 API 명세서](https://localstorymap.com/swagger/)

