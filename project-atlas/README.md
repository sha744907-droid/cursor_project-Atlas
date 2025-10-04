# Project Atlas 🚀

> 신뢰 비용을 제로화하는 혁신적인 AI 기반 공공조달 플랫폼

## 📋 프로젝트 개요

Project Atlas는 AI 기반 매칭과 이중 평판 시스템으로 발주자와 수주자 모두를 평가하는 혁신적인 공공조달 플랫폼입니다. 모든 혁신 아이디어가 공평하게 가치를 실현할 수 있는 지식 기반 조달 인프라를 구축합니다.

### 🎯 핵심 비전

**"프로젝트 아틀라스는 데이터에 기반한 투명성과 공정성으로, 'B2B 프로젝트 생태계'의 신뢰 비용을 제로화하여, 세상의 모든 혁신적 아이디어가 공평하게 가치를 실현하는 지식 기반 조달 인프라가 된다."**

## ✨ 주요 기능

### 🤖 AI 기반 매칭 시스템
- 과거 프로젝트 데이터를 분석하여 최적의 발주자-수주자 매칭
- 기술 스택, 예산, 일정, 평판 점수를 종합한 지능형 매칭 알고리즘
- 실시간 매칭 점수 계산 및 추천

### 🛡️ 이중 평판 시스템
- **Atlas Score (수주자 평판)**: 기술력, 납기준수, 소통, 품질을 종합한 점수
- **P-E-Q 지수 (발주자 평판)**: 대금지급율(Payment), 효율성(Efficiency), 품질(Quality) 기반 점수
- 양방향 평가로 투명하고 공정한 신뢰도 측정

### 📊 투명한 평가 시스템
- 대금지급율, 납기일, 프로젝트 성공율을 종합한 객관적 평가
- 실시간 평판 점수 업데이트
- 과거 프로젝트 성과 데이터 기반 신뢰도 측정

### 🎯 통합 프로젝트 관리
- 프로젝트 전체 라이프사이클 관리
- 실시간 진행률 추적
- 자동화된 알림 및 리마인더 시스템

## 🏗️ 기술 스택

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **UI Components**: Radix UI, Lucide React
- **Styling**: Tailwind CSS, Class Variance Authority

## 🚀 시작하기

### 1. 저장소 클론
```bash
git clone <repository-url>
cd project-atlas
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
```bash
cp .env.example .env
```

`.env` 파일을 편집하여 필요한 환경 변수를 설정하세요:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/project_atlas"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. 데이터베이스 설정
```bash
# Prisma 마이그레이션 실행
npx prisma migrate dev

# 데이터베이스 시드 (선택사항)
npx prisma db seed
```

### 5. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인하세요.

## 📁 프로젝트 구조

```
project-atlas/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API 엔드포인트
│   │   │   ├── projects/      # 프로젝트 관련 API
│   │   │   ├── matching/      # AI 매칭 API
│   │   │   └── evaluations/   # 평가 시스템 API
│   │   ├── dashboard/         # 대시보드 페이지
│   │   ├── projects/          # 프로젝트 목록 페이지
│   │   └── page.tsx           # 메인 페이지
│   ├── components/            # 재사용 가능한 컴포넌트
│   │   └── ui/               # 기본 UI 컴포넌트
│   └── lib/                   # 유틸리티 함수
│       ├── utils.ts          # 공통 유틸리티
│       └── prisma.ts         # Prisma 클라이언트
├── prisma/
│   └── schema.prisma         # 데이터베이스 스키마
└── public/                   # 정적 파일
```

## 🎯 핵심 목표

### 1. 신뢰 자산 표준화 (Score Standard)
- Atlas Score와 P-E-Q 지수를 B2B 프로젝트 시장의 업계 표준 신용 지표로 인정받기
- 업계 사용률 70% 이상 달성

### 2. 프로젝트 실패율 혁신 (Failure Reduction)
- 플랫폼을 통해 매칭 및 관리된 프로젝트의 계약 불이행 및 중도 실패율을 업계 평균 대비 50% 이하로 낮추기

### 3. 지식-자본 선순환 구축 (Capital Flow)
- 축적된 프로젝트 성과 데이터를 기반으로 수주 기업의 성장 자금 조달 및 투자 유치를 직접적으로 연결하는 금융 서비스 허브 완성

## 🔧 API 엔드포인트

### 프로젝트 관리
- `GET /api/projects` - 프로젝트 목록 조회
- `POST /api/projects` - 새 프로젝트 생성
- `GET /api/projects/[id]` - 프로젝트 상세 조회

### AI 매칭
- `POST /api/matching` - AI 기반 매칭 실행
- `GET /api/matching` - 매칭 결과 조회

### 평가 시스템
- `POST /api/evaluations` - 평가 생성
- `GET /api/evaluations` - 평가 목록 조회

## 📊 데이터 모델

### 사용자 (User)
- 발주자(CLIENT) / 수주자(CONTRACTOR) 구분
- 기본 프로필 정보

### 발주자 프로필 (ClientProfile)
- P-E-Q 지수 (Payment-Efficiency-Quality)
- 대금지급율, 납기일 준수율, 프로젝트 성공율

### 수주자 프로필 (ContractorProfile)
- Atlas Score (종합 평판 점수)
- 기술력, 납기준수, 소통, 품질 점수
- 포트폴리오 및 전문 분야

### 프로젝트 (Project)
- 프로젝트 기본 정보
- 요구사항, 기술 스택, 납품물
- 진행 상태 및 일정 관리

### 평가 (Evaluation)
- 양방향 평가 시스템
- 세부 평가 항목별 점수
- 평가 코멘트 및 피드백

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

프로젝트 링크: [https://github.com/your-username/project-atlas](https://github.com/your-username/project-atlas)

---

**Project Atlas** - 신뢰 비용을 제로화하는 혁신적인 B2B 프로젝트 생태계 🚀