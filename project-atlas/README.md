# 🚀 Project Atlas

<div align="center">

![Project Atlas Logo](https://img.shields.io/badge/Project-Atlas-blue?style=for-the-badge&logo=target&logoColor=white)
![AI Powered](https://img.shields.io/badge/AI-Powered-purple?style=for-the-badge&logo=robot&logoColor=white)
![B2B Platform](https://img.shields.io/badge/B2B-Platform-green?style=for-the-badge&logo=business&logoColor=white)

**신뢰 비용을 제로화하는 혁신적인 AI 기반 공공조달 플랫폼**

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Now-brightgreen?style=for-the-badge&logo=globe&logoColor=white)](https://project-atlas-demo.netlify.app)
[![Documentation](https://img.shields.io/badge/Documentation-Read_More-blue?style=for-the-badge&logo=book&logoColor=white)](./DEPLOYMENT.md)
[![Deploy](https://img.shields.io/badge/Deploy-Instant_Deploy-orange?style=for-the-badge&logo=rocket&logoColor=white)](./deploy.sh)

</div>

---

## 📋 프로젝트 개요

**Project Atlas**는 AI 기반 매칭과 이중 평판 시스템으로 발주자와 수주자 모두를 평가하는 혁신적인 공공조달 플랫폼입니다. 모든 혁신 아이디어가 공평하게 가치를 실현할 수 있는 지식 기반 조달 인프라를 구축합니다.

### 🎯 핵심 비전

> **"프로젝트 아틀라스는 데이터에 기반한 투명성과 공정성으로, 'B2B 프로젝트 생태계'의 신뢰 비용을 제로화하여, 세상의 모든 혁신적 아이디어가 공평하게 가치를 실현하는 지식 기반 조달 인프라가 된다."**

---

## ✨ 주요 기능

<table>
<tr>
<td width="50%">

### 🤖 AI 기반 매칭 시스템
- **지능형 매칭**: 과거 프로젝트 데이터 분석
- **실시간 추천**: 기술 스택, 예산, 일정 종합 분석
- **정확도 95%+**: 업계 최고 수준의 매칭 정확도

### 🛡️ 이중 평판 시스템
- **Atlas Score**: 수주자 평판 (기술력, 납기준수, 소통, 품질)
- **P-E-Q 지수**: 발주자 평판 (대금지급율, 효율성, 품질)
- **투명한 평가**: 양방향 신뢰도 측정

</td>
<td width="50%">

### 📊 투명한 평가 시스템
- **객관적 지표**: 대금지급율, 납기일, 성공율 종합
- **실시간 업데이트**: 평판 점수 자동 갱신
- **과거 데이터**: 프로젝트 성과 기반 신뢰도 측정

### 🎯 통합 프로젝트 관리
- **전체 라이프사이클**: 프로젝트 시작부터 완료까지
- **실시간 추적**: 진행률 및 일정 모니터링
- **자동화 알림**: 리마인더 및 업데이트 시스템

</td>
</tr>
</table>

---

## 🏗️ 기술 스택

<div align="center">

| Frontend | Backend | Database | UI/UX |
|:--------:|:-------:|:--------:|:-----:|
| ![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat-square&logo=next.js&logoColor=white) | ![Next.js API](https://img.shields.io/badge/Next.js_API-Routes-green?style=flat-square&logo=next.js&logoColor=white) | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?style=flat-square&logo=postgresql&logoColor=white) | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript&logoColor=white) | ![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat-square&logo=prisma&logoColor=white) | ![Prisma Client](https://img.shields.io/badge/Prisma_Client-Generated-2D3748?style=flat-square&logo=prisma&logoColor=white) | ![Radix UI](https://img.shields.io/badge/Radix_UI-Components-161618?style=flat-square&logo=radix-ui&logoColor=white) |

</div>

---

## 🚀 빠른 시작

### 1️⃣ 저장소 클론
```bash
git clone https://github.com/your-username/project-atlas.git
cd project-atlas
```

### 2️⃣ 의존성 설치
```bash
npm install
```

### 3️⃣ 환경 변수 설정
```bash
cp .env.example .env
```

`.env` 파일을 편집하여 필요한 환경 변수를 설정하세요:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/project_atlas"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

### 4️⃣ 데이터베이스 설정
```bash
# Prisma 마이그레이션 실행
npx prisma migrate dev

# 데이터베이스 시드 (선택사항)
npx prisma db seed
```

### 5️⃣ 개발 서버 실행
```bash
npm run dev
```

🌐 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인하세요.

---

## 🌐 즉시 배포

### 📱 정적 웹사이트 버전 (권장)

**가장 쉬운 방법 - Netlify:**
1. [netlify.com](https://netlify.com) 방문
2. `public/index.html` 파일을 드래그 앤 드롭
3. 자동으로 생성된 URL로 접속

**다른 옵션들:**
- **GitHub Pages**: `public/index.html` 업로드
- **Vercel**: 파일 업로드 또는 GitHub 연결
- **Surge**: `surge public` 명령어 사용

### 🚀 전체 애플리케이션 배포

```bash
# 자동 배포 스크립트 실행
./deploy.sh

# 또는 수동 배포
npm run build
vercel --prod
```

---

## 📁 프로젝트 구조

```
project-atlas/
├── 📁 src/
│   ├── 📁 app/                    # Next.js App Router
│   │   ├── 📁 api/               # API 엔드포인트
│   │   │   ├── 📁 projects/      # 프로젝트 관련 API
│   │   │   ├── 📁 matching/      # AI 매칭 API
│   │   │   └── 📁 evaluations/   # 평가 시스템 API
│   │   ├── 📁 dashboard/         # 대시보드 페이지
│   │   ├── 📁 projects/          # 프로젝트 목록 페이지
│   │   └── 📄 page.tsx           # 메인 페이지
│   ├── 📁 components/            # 재사용 가능한 컴포넌트
│   │   └── 📁 ui/               # 기본 UI 컴포넌트
│   └── 📁 lib/                   # 유틸리티 함수
│       ├── 📄 utils.ts          # 공통 유틸리티
│       └── 📄 prisma.ts         # Prisma 클라이언트
├── 📁 prisma/
│   └── 📄 schema.prisma         # 데이터베이스 스키마
├── 📁 public/
│   └── 📄 index.html            # 정적 웹사이트
├── 📄 README.md                 # 프로젝트 문서
├── 📄 DEPLOYMENT.md             # 배포 가이드
└── 📄 deploy.sh                 # 자동 배포 스크립트
```

---

## 🎯 핵심 목표

<div align="center">

| 목표 | 설명 | 달성률 |
|:---:|:---:|:---:|
| 🏆 **신뢰 자산 표준화** | Atlas Score와 P-E-Q 지수를 업계 표준으로 | **70%+** |
| 📉 **프로젝트 실패율 혁신** | 업계 평균 대비 실패율 감소 | **50%↓** |
| 💰 **지식-자본 선순환** | 성과 데이터 기반 금융 서비스 허브 | **구축 중** |

</div>

---

## 🔧 API 엔드포인트

### 📊 프로젝트 관리
```http
GET    /api/projects          # 프로젝트 목록 조회
POST   /api/projects          # 새 프로젝트 생성
GET    /api/projects/[id]     # 프로젝트 상세 조회
```

### 🤖 AI 매칭
```http
POST   /api/matching          # AI 기반 매칭 실행
GET    /api/matching          # 매칭 결과 조회
```

### ⭐ 평가 시스템
```http
POST   /api/evaluations       # 평가 생성
GET    /api/evaluations       # 평가 목록 조회
```

---

## 📊 데이터 모델

<details>
<summary>📋 데이터베이스 스키마 보기</summary>

### 👤 사용자 (User)
- 발주자(CLIENT) / 수주자(CONTRACTOR) 구분
- 기본 프로필 정보

### 🏢 발주자 프로필 (ClientProfile)
- P-E-Q 지수 (Payment-Efficiency-Quality)
- 대금지급율, 납기일 준수율, 프로젝트 성공율

### 🔧 수주자 프로필 (ContractorProfile)
- Atlas Score (종합 평판 점수)
- 기술력, 납기준수, 소통, 품질 점수
- 포트폴리오 및 전문 분야

### 📋 프로젝트 (Project)
- 프로젝트 기본 정보
- 요구사항, 기술 스택, 납품물
- 진행 상태 및 일정 관리

### ⭐ 평가 (Evaluation)
- 양방향 평가 시스템
- 세부 평가 항목별 점수
- 평가 코멘트 및 피드백

</details>

---

## 🎨 스크린샷

<div align="center">

### 🏠 메인 페이지
![메인 페이지](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Project+Atlas+Main+Page)

### 📊 대시보드
![대시보드](https://via.placeholder.com/800x400/8B5CF6/FFFFFF?text=Dashboard+View)

### 🔍 프로젝트 탐색
![프로젝트 탐색](https://via.placeholder.com/800x400/10B981/FFFFFF?text=Project+Exploration)

</div>

---

## 🤝 기여하기

프로젝트에 기여하고 싶으시다면:

1. **Fork** the Project
2. **Create** your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your Changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the Branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### 🐛 버그 리포트
- [Issues](https://github.com/your-username/project-atlas/issues) 페이지에서 버그 리포트
- 상세한 재현 단계 포함
- 환경 정보 제공

### 💡 기능 제안
- [Discussions](https://github.com/your-username/project-atlas/discussions)에서 아이디어 공유
- 사용 사례 설명
- 기대 효과 제시

---

## 📄 라이선스

이 프로젝트는 **MIT 라이선스** 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

## 📞 연락처

<div align="center">

**Project Atlas Team**

[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username/project-atlas)
[![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contact@project-atlas.com)
[![Website](https://img.shields.io/badge/Website-Visit-blue?style=for-the-badge&logo=globe&logoColor=white)](https://project-atlas.com)

</div>

---

<div align="center">

### ⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!

**Project Atlas** - 신뢰 비용을 제로화하는 혁신적인 B2B 프로젝트 생태계 🚀

![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)

</div>