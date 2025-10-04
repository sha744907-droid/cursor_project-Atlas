import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Users, 
  TrendingUp, 
  Star, 
  Zap,
  Target,
  Award
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Target className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Project Atlas
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">로그인</Button>
              <Button>회원가입</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            🚀 혁신적인 AI 기반 공공조달 플랫폼
          </Badge>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            신뢰 비용을 제로화하는<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              B2B 프로젝트 생태계
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI가 발주자와 수주자를 매칭하고, 이중 평판 시스템으로 모든 혁신 아이디어가 
            공평하게 가치를 실현할 수 있는 지식 기반 조달 인프라입니다.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              프로젝트 시작하기
            </Button>
            <Button size="lg" variant="outline">
              더 알아보기
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">핵심 기능</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              데이터 기반의 투명성과 공정성으로 프로젝트 매칭의 신뢰도를 혁신합니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI 매칭 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>AI 기반 매칭</CardTitle>
                <CardDescription>
                  과거 프로젝트 데이터를 분석하여 최적의 발주자-수주자 매칭을 제공합니다
                </CardDescription>
              </CardHeader>
            </Card>

            {/* 이중 평판 시스템 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>이중 평판 시스템</CardTitle>
                <CardDescription>
                  Atlas Score(수주자)와 P-E-Q 지수(발주자)로 양방향 신뢰도를 평가합니다
                </CardDescription>
              </CardHeader>
            </Card>

            {/* 투명한 평가 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>투명한 평가 시스템</CardTitle>
                <CardDescription>
                  대금지급율, 납기일, 프로젝트 성공율을 종합한 객관적 평가를 제공합니다
                </CardDescription>
              </CardHeader>
            </Card>

            {/* 프로젝트 관리 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>통합 프로젝트 관리</CardTitle>
                <CardDescription>
                  프로젝트 전체 라이프사이클을 한 곳에서 관리하고 추적합니다
                </CardDescription>
              </CardHeader>
            </Card>

            {/* 성과 분석 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>데이터 기반 성과 분석</CardTitle>
                <CardDescription>
                  프로젝트 성과 데이터를 분석하여 지속적인 개선과 성장을 지원합니다
                </CardDescription>
              </CardHeader>
            </Card>

            {/* 신뢰 보장 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>신뢰 보장 시스템</CardTitle>
                <CardDescription>
                  계약 불이행 및 중도 실패율을 업계 평균 대비 50% 이하로 낮춥니다
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Project Atlas의 성과</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              데이터 기반의 투명한 시스템으로 달성한 혁신적인 결과들
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">70%+</div>
              <div className="text-blue-100">업계 표준 신용 지표 사용률</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50%↓</div>
              <div className="text-blue-100">프로젝트 실패율 감소</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%+</div>
              <div className="text-blue-100">매칭 정확도</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">AI 모니터링 시스템</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">지금 시작하세요</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            혁신적인 아이디어가 공평하게 가치를 실현할 수 있는 새로운 B2B 생태계에 참여하세요
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              발주자로 시작하기
            </Button>
            <Button size="lg" variant="outline">
              수주자로 시작하기
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-xl font-bold">Project Atlas</h4>
              </div>
              <p className="text-gray-400">
                신뢰 비용을 제로화하는 혁신적인 B2B 프로젝트 생태계
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">서비스</h5>
              <ul className="space-y-2 text-gray-400">
                <li>AI 매칭</li>
                <li>평판 시스템</li>
                <li>프로젝트 관리</li>
                <li>성과 분석</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">지원</h5>
              <ul className="space-y-2 text-gray-400">
                <li>도움말</li>
                <li>문의하기</li>
                <li>API 문서</li>
                <li>커뮤니티</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">회사</h5>
              <ul className="space-y-2 text-gray-400">
                <li>회사 소개</li>
                <li>채용</li>
                <li>뉴스</li>
                <li>개인정보처리방침</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Project Atlas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}