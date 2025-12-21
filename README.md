# 프로젝트 명세서: 증상 기반 병원 추천 서비스

github주소: https://github.com/RainDrop3/OdiMedi

github page 주소: https://raindrop3.github.io/OdiMedi/

## 1. 프로젝트 개요 (Overview)
* **프로젝트명**: OdiMedi
* **목적**: 사용자가 자신의 증상을 선택하면, 원하는 지역구별로  적절한 병원을 추천하는 웹 서비스입니다.
* **핵심 가치**: 복잡한 검색 과정 없이, 직관적인 체크박스 선택만으로 내 주변의 진료 가능한 병원을 시각화된 정보와 함께 빠르게 탐색할 수 있습니다.

---

## 2. 핵심 요구사항 (Requirements)

### 2.1. 기능적 요구사항
* **페이지 구성**: 최소 4개 이상의 페이지(Index, About, Dashboard, Detail)를 포함해야 합니다.
* **검색 기능**: 증상(복수 선택) 또는 예방접종(단일 선택)을 통한 병원 검색 기능을 제공해야 합니다.
* **상세 정보**: 검색 결과나 의학 정보를 클릭하면 동적 라우팅을 통해 생성된 상세 페이지로 이동해야 합니다.
* **시각화**: Dashboard 페이지에서는 수집된 데이터를 바탕으로 의미 있는 차트(Bar, Pie 등)를 제공해야 합니다.
* **커뮤니티**: 병원 상세 페이지에서 사용자 후기를 작성할 수 있어야 하며, 이는 Github Issues(Giscus)와 연동됩니다.

### 2.2. 기술적/제약 요구사항
* **배포**: Github Pages를 통해 정적 배포되어야 합니다.
* **데이터**: JSON 파일을 사용하며, 총 용량은 30MB 미만으로 최적화해야 합니다.
* **반응형**: 모바일 및 데스크톱 환경을 모두 고려한 반응형 디자인을 적용해야 합니다.
* **Next.js**: App Router 구조, SSG(Static Site Generation), 동적 세그먼트(`[id]`), `<Link>` 컴포넌트를 활용해야 합니다.

---

## 3. 기술 스택 (Tech Stack)

| 구분 | 기술 / 도구 | 비고 |
| :--- | :--- | :--- |
| **Framework** | **Next.js** | React 기반 웹 프레임워크 |
| **Language** | **TypeScript** | 정적 타입 지원으로 안정성 확보 |
| **Styling** | **Tailwind CSS** | 유틸리티 퍼스트 CSS  |
| **Design** | **Google Stitch** | UI/UX 프로토타이핑 및 디자인 |
| **Visualization** | **Recharts** | 데이터 시각화 라이브러리 |
| **Comment** | **Giscus** | Github Discussions 기반 무설치 댓글 시스템 |
| **Deployment** | **Github Pages** | 정적 호스팅 서비스 |

---

## 4. 페이지별 상세 기능 명세

### 0. 공통 레이아웃 (Layout)
* **Header**: 서비스 로고 (Home 링크), 네비게이션 메뉴(`[병원정보]`, `[내 주변]`, `[상세증상]`, `[소개]`).
* **Footer**: 저작권 표시, 서비스 소개 링크.

### 1. 메인 페이지 (`app/page.tsx`)
* **증상 선택 섹션**: "현재 증상을 입력하세요" 문구와 함께 주요 증상을 선택할 수 있는 UI 제공.
* **기능**: 증상 선택 시 관련 진료과를 추천하고, 해당 진료과 병원 찾기 페이지로 이동 가능.

### 2. 병원 정보 (`app/hospitals/page.tsx` & `app/hospitals/[id]/page.tsx`)
* **병원 목록**: 전체 병원 목록을 보여주며, 병원명 검색 및 지역구 필터링 기능 제공.
* **상세 정보**: 병원 기본 정보(이름, 주소, 전화번호, 진료과) 및 지역구 표시.
* **소통**: Giscus를 활용한 방문자 후기 및 문의 댓글 기능.

### 3. 내 주변 / 대시보드 (`app/dashboard/page.tsx`)
* **지역 선택**: 사이드바에서 부산광역시 내 구/군 선택 가능.
* **시각화**:
    * 지역 내 진료과별 병원 수 (Bar Chart)
    * 진료과별 분포 비율 (Pie Chart)
* **인터랙션**: 차트 툴팁을 통해 상세 수치 확인 가능.

### 4. 상세 증상 (`app/detail/page.tsx` & `app/detail/[id]/page.tsx`)
* **증상 검색**: 궁금한 증상을 키워드로 검색하여 상세 정보를 찾을 수 있음.
* **상세 내용**: 증상 설명, 주 발병 대상, 발병 시기, 관련 질환 정보 제공.
* **연동**: 해당 증상을 진료하는 진료과 병원 찾기 버튼 제공.

### 5. 소개 (`app/about/page.tsx`)
* **서비스 소개**: OdiMedi 서비스의 목적과 필요성 설명.
* **연락처**: 문의 가능한 이메일 및 전화번호 정보.

---

## 5. 프로젝트 디렉토리 구조 (Directory Structure)

```bash
my-project/
├── public/
│   └── data/                  # 병원 현황 JSON 데이터
├── app/
│   ├── layout.tsx             # Root Layout 
│   ├── page.tsx               # Main Page
│   ├── about/                 # About Page
│   │   └── page.tsx
│   ├── dashboard/             # Dashboard Page
│   │   └── page.tsx
│   ├── detail/                # 상세 증상 페이지
│   │   ├── page.tsx           # 증상 검색 및 목록
│   │   └── [id]/              # 증상 상세 정보
│   │       └── page.tsx
│   └── hospitals/             # 병원 정보 페이지
│       ├── page.tsx           # 병원 목록 및 검색
│       └── [id]/              # 병원 상세 정보 + 댓글
│           └── page.tsx
├── components/                # 재사용 컴포넌트
│   ├── ui/                    # 기본 UI 컴포넌트 
│   ├── Comments.tsx           # Giscus 댓글 컴포넌트
│   ├── HospitalSearch.tsx     # 병원 검색 컴포넌트
│   ├── MainContent.tsx        # 메인 페이지 콘텐츠
│   ├── NavBar.tsx             # 네비게이션 바
│   ├── SiteFooter.tsx         # 사이트 푸터
│   ├── SiteHeader.tsx         # 사이트 헤더
│   └── SymptomSearch.tsx      # 증상 검색 컴포넌트
├── lib/                       # 데이터 처리 유틸리티
│   ├── hospitals.ts           # 병원 데이터 처리
│   ├── symptoms.ts            # 증상 데이터 정의
│   └── utils/                 # 기타 유틸리티
└── tailwind.config.ts         # 스타일 설정
