# 프로젝트 명세서: 증상 및 예방접종 기반 병원 추천 서비스

## 1. 프로젝트 개요 (Overview)
* **프로젝트명**: (가칭) FindHospital
* **목적**: 사용자가 자신의 증상이나 필요한 예방접종을 선택하면, 현재 위치와 시간을 고려하여 적절한 병원을 추천하고 관련 의학 정보를 제공하는 웹 서비스입니다.
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
| **Framework** | **Next.js 14+ (App Router)** | React 기반 웹 프레임워크 |
| **Language** | **TypeScript** | 정적 타입 지원으로 안정성 확보 |
| **Styling** | **Tailwind CSS** | 유틸리티 퍼스트 CSS 및 다크모드 구현 |
| **Design** | **Stitch (Google)** | UI/UX 프로토타이핑 및 디자인 |
| **Visualization** | **Recharts** (또는 Chart.js) | 데이터 시각화 라이브러리 |
| **Comment** | **Giscus** | Github Discussions 기반 무설치 댓글 시스템 |
| **Deployment** | **Github Pages** | 정적 호스팅 서비스 |

---

## 4. 페이지별 상세 기능 명세

### 0. 공통 레이아웃 (Layout)
* **Header**: 서비스 로고 (Home 링크), 네비게이션 메뉴(`[병원정보]`, `[내 주변]`, `[상세증상]`, `[소개]`), 다크모드 토글 스위치.
* **Footer**: 저작권 표시, 팀 정보, Github 저장소 링크.

### 1. 메인 페이지 (`app/page.tsx`)
* **검색 섹션**: 증상(복수 선택) 및 예방접종(단일 선택) 탭을 통한 체크박스 UI 제공. 선택에 따른 병원 리스트 실시간 필터링.
* **뉴스 섹션**: 질병, 보건 관련 최신 뉴스 데이터를 카드 형태로 나열.

### 2. 병원 상세 정보 (`app/hospitals/[id]/page.tsx`)
* **정보 제공**: 병원 기본 정보(이름, 주소, 시간, 진료과) 표시 및 지도 링크 연동.
* **소통**: Giscus를 활용한 방문자 후기 및 문의 댓글 기능.

### 3. 내 주변 / 대시보드 (`app/dashboard/page.tsx`)
* **필터링**: 사용자 입력(Select Box)을 통한 지역구 선택 기능.
* **시각화**:
    * 지역 내 진료과별 병원 분포 (Pie Chart)
    * 예방접종별 시행 병원 수 비교 (Bar Chart)
* **UX**: 데이터 로딩 시 스켈레톤 UI, 에러 발생 시 안내 화면 제공.

### 4. 상세 증상 및 백신 정보 (`app/detail/[id]/page.tsx`)
* **SSG**: 빌드 시점에 생성된 정적 페이지로 빠른 로딩 속도 제공.
* **내용**: 증상별 자가 진단 팁, 관련 진료과 안내, 백신 효능 및 주의사항 표시.

### 5. 소개 (`app/about/page.tsx`)
* **팀 소개**: 개발 팀원 프로필 및 프로젝트 기획 의도 서술.

---

## 5. 프로젝트 디렉토리 구조 (Directory Structure)

```bash
#초안

my-project/
├── public/
│   ├── data/                  # JSON 데이터 (DB 대체용)
│   └── images/                # 정적 이미지 리소스
├── app/
│   ├── layout.tsx             # Root Layout (Navbar, Footer)
│   ├── page.tsx               # Main Page
│   ├── about/                 # About Page
│   │   └── page.tsx
│   ├── dashboard/             # Dashboard Page
│   │   ├── page.tsx
│   │   ├── loading.tsx        # 로딩 UI
│   │   └── error.tsx          # 에러 UI
│   ├── detail/                # 통합 상세 페이지 (증상/백신)
│   │   └── [id]/              # [SSG] 동적 라우팅
│   │       └── page.tsx
│   └── hospitals/             # 병원 상세 페이지
│       └── [id]/              # [SSG] 병원 정보 + 댓글
│           └── page.tsx
├── components/                # 재사용 컴포넌트 (Navbar, Cards, Charts...)
├── lib/                       # 데이터 처리 유틸리티 (Fetch, Filter)
├── types/                     # TypeScript 인터페이스 정의
└── tailwind.config.ts         # 스타일 설정
