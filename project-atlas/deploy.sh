#!/bin/bash

echo "🚀 Project Atlas 배포 스크립트"
echo "================================"

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 배포 옵션 선택
echo -e "${BLUE}배포 방법을 선택하세요:${NC}"
echo "1) 정적 HTML (GitHub Pages, Netlify 등)"
echo "2) Next.js 전체 버전 (Vercel, Railway 등)"
echo "3) 로컬 서버 시작"
echo "4) Docker 빌드"
echo "5) 종료"

read -p "선택 (1-5): " choice

case $choice in
    1)
        echo -e "${GREEN}정적 HTML 배포 준비 중...${NC}"
        echo "public/index.html 파일이 준비되었습니다."
        echo ""
        echo -e "${YELLOW}배포 옵션:${NC}"
        echo "• GitHub Pages: public/index.html을 GitHub 저장소에 업로드"
        echo "• Netlify: public/index.html을 netlify.com에 드래그 앤 드롭"
        echo "• Vercel: public/index.html을 vercel.com에 업로드"
        echo "• Surge: surge public 명령어 사용"
        echo ""
        echo -e "${GREEN}파일 위치: $(pwd)/public/index.html${NC}"
        ;;
    2)
        echo -e "${GREEN}Next.js 전체 버전 배포 준비 중...${NC}"
        
        # 빌드 확인
        if [ ! -d ".next" ]; then
            echo -e "${YELLOW}빌드 중...${NC}"
            npm run build
        fi
        
        echo ""
        echo -e "${YELLOW}배포 옵션:${NC}"
        echo "• Vercel: vercel --prod"
        echo "• Netlify: 저장소 연결 후 자동 배포"
        echo "• Railway: railway.app에서 저장소 연결"
        echo "• Heroku: heroku create && git push heroku main"
        echo ""
        echo -e "${BLUE}환경 변수 설정 필요:${NC}"
        echo "DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL"
        ;;
    3)
        echo -e "${GREEN}로컬 서버 시작 중...${NC}"
        echo ""
        echo "선택하세요:"
        echo "1) 개발 서버 (포트 3001)"
        echo "2) 프로덕션 서버 (포트 3002)"
        echo "3) 정적 HTML 서버 (포트 8080)"
        
        read -p "서버 선택 (1-3): " server_choice
        
        case $server_choice in
            1)
                echo -e "${GREEN}개발 서버 시작: http://localhost:3001${NC}"
                PORT=3001 npm run dev
                ;;
            2)
                echo -e "${GREEN}프로덕션 서버 시작: http://localhost:3002${NC}"
                PORT=3002 npm run start
                ;;
            3)
                echo -e "${GREEN}정적 HTML 서버 시작: http://localhost:8080${NC}"
                cd public && python3 -m http.server 8080
                ;;
        esac
        ;;
    4)
        echo -e "${GREEN}Docker 이미지 빌드 중...${NC}"
        
        # Dockerfile 생성
        cat > Dockerfile << EOF
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
EOF
        
        # Docker 이미지 빌드
        docker build -t project-atlas .
        
        echo -e "${GREEN}Docker 이미지 빌드 완료!${NC}"
        echo "실행: docker run -p 3000:3000 project-atlas"
        ;;
    5)
        echo -e "${GREEN}배포 스크립트 종료${NC}"
        exit 0
        ;;
    *)
        echo -e "${RED}잘못된 선택입니다.${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}✅ 배포 준비 완료!${NC}"
echo ""
echo -e "${BLUE}📚 추가 정보:${NC}"
echo "• README.md: 프로젝트 상세 정보"
echo "• DEPLOYMENT.md: 배포 가이드"
echo "• public/index.html: 정적 웹사이트"
echo ""
echo -e "${YELLOW}🌐 웹에서 확인하려면:${NC}"
echo "1. 위의 배포 옵션 중 하나를 선택하여 배포"
echo "2. 생성된 URL로 접속"
echo "3. Project Atlas 플랫폼 체험"