# Project Atlas 배포 가이드

## 🚀 웹 배포 방법

Project Atlas를 웹에서 접근 가능하도록 배포하는 여러 방법을 제공합니다.

### 1. 정적 HTML 버전 (즉시 배포 가능)

`public/index.html` 파일이 완전한 정적 웹사이트입니다. 이 파일을 사용하여 즉시 배포할 수 있습니다.

#### 배포 옵션:

**A. GitHub Pages**
1. GitHub 저장소 생성
2. `public/index.html` 파일을 업로드
3. Settings > Pages에서 GitHub Pages 활성화
4. `https://yourusername.github.io/repository-name`에서 접근

**B. Netlify**
1. [netlify.com](https://netlify.com)에 가입
2. "Sites" > "Add new site" > "Deploy manually"
3. `public/index.html` 파일을 드래그 앤 드롭
4. 자동으로 생성된 URL에서 접근

**C. Vercel**
1. [vercel.com](https://vercel.com)에 가입
2. GitHub 저장소 연결 또는 파일 업로드
3. 자동 배포 완료

**D. Surge.sh**
```bash
npm install -g surge
cd public
surge
```

### 2. Next.js 전체 버전 (고급 기능 포함)

전체 Next.js 애플리케이션을 배포하려면:

#### Vercel 배포 (권장)
```bash
npm install -g vercel
vercel --prod
```

#### Netlify 배포
1. `netlify.toml` 파일 생성:
```toml
[build]
  command = "npm run build"
  publish = ".next"
```

2. Netlify에서 저장소 연결

#### Railway 배포
1. [railway.app](https://railway.app)에 가입
2. GitHub 저장소 연결
3. 자동 배포

### 3. Docker 배포

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### 4. 환경 변수 설정

배포 시 다음 환경 변수를 설정해야 합니다:

```env
DATABASE_URL="your-database-url"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="https://your-domain.com"
NEXT_PUBLIC_APP_URL="https://your-domain.com"
```

### 5. 데이터베이스 설정

#### PostgreSQL (권장)
- Supabase (무료 PostgreSQL)
- PlanetScale (MySQL)
- Railway PostgreSQL
- Neon (PostgreSQL)

#### 설정 방법:
```bash
npx prisma migrate deploy
npx prisma generate
```

## 🌐 현재 접근 가능한 URL

### 로컬 개발 서버
- Next.js 개발 서버: `http://localhost:3001`
- Next.js 프로덕션 서버: `http://localhost:3002`
- 정적 HTML 서버: `http://localhost:8080`

### 외부 접근을 위한 터널링
```bash
# ngrok 사용 (ngrok 계정 필요)
ngrok http 3002

# localtunnel 사용
npx localtunnel --port 3002
```

## 📱 모바일 최적화

정적 HTML 버전은 완전히 반응형으로 설계되어 모든 디바이스에서 최적화된 경험을 제공합니다.

## 🔧 커스터마이징

### 색상 변경
`public/index.html`에서 Tailwind CSS 클래스를 수정하여 색상을 변경할 수 있습니다.

### 내용 수정
HTML 파일의 텍스트 내용을 직접 수정하여 정보를 업데이트할 수 있습니다.

### 기능 추가
JavaScript 섹션에 추가 기능을 구현할 수 있습니다.

## 📊 성능 최적화

- 이미지 최적화
- CSS/JS 압축
- CDN 사용
- 캐싱 전략

## 🛡️ 보안 고려사항

- HTTPS 사용 필수
- 환경 변수 보안
- 데이터베이스 접근 제한
- API 엔드포인트 보호

## 📞 지원

배포 과정에서 문제가 발생하면:
1. GitHub Issues 생성
2. 문서 확인
3. 커뮤니티 포럼 참여

---

**즉시 배포하려면 `public/index.html` 파일을 사용하세요!** 🚀