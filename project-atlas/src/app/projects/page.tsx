import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Search,
  Filter,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Star,
  Eye,
  Heart
} from "lucide-react"
import { formatCurrency, getScoreGrade, getScoreColorClass } from "@/lib/utils"

export default function ProjectsPage() {
  // 임시 프로젝트 데이터
  const projects = [
    {
      id: "1",
      title: "웹 애플리케이션 개발 프로젝트",
      description: "React와 Node.js를 사용한 모던 웹 애플리케이션 개발이 필요합니다. 사용자 인증, 결제 시스템, 관리자 대시보드 기능이 포함되어야 합니다.",
      client: {
        name: "ABC 기업",
        companySize: "MEDIUM",
        peqScore: 85.2,
        totalProjects: 15,
        successfulProjects: 14
      },
      budget: 50000000,
      duration: 60,
      category: "웹 개발",
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      location: "서울",
      status: "OPEN",
      createdAt: "2024-01-15",
      deadline: "2024-03-15",
      applicants: 12,
      requirements: [
        "3년 이상 웹 개발 경험",
        "React, Node.js 숙련도",
        "데이터베이스 설계 경험",
        "Git 사용 경험"
      ]
    },
    {
      id: "2",
      title: "모바일 앱 UI/UX 디자인",
      description: "iOS와 Android 플랫폼을 위한 모바일 앱의 UI/UX 디자인이 필요합니다. 사용자 친화적이고 직관적인 인터페이스를 원합니다.",
      client: {
        name: "XYZ 스타트업",
        companySize: "STARTUP",
        peqScore: 78.5,
        totalProjects: 8,
        successfulProjects: 7
      },
      budget: 30000000,
      duration: 45,
      category: "디자인",
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
      location: "부산",
      status: "OPEN",
      createdAt: "2024-01-20",
      deadline: "2024-03-05",
      applicants: 8,
      requirements: [
        "2년 이상 모바일 디자인 경험",
        "Figma, Adobe XD 숙련도",
        "사용자 경험 설계 경험",
        "포트폴리오 제출 필수"
      ]
    },
    {
      id: "3",
      title: "데이터 분석 시스템 구축",
      description: "대용량 데이터를 처리하고 분석할 수 있는 시스템 구축이 필요합니다. 실시간 대시보드와 리포트 생성 기능이 포함되어야 합니다.",
      client: {
        name: "DEF 대기업",
        companySize: "ENTERPRISE",
        peqScore: 92.1,
        totalProjects: 45,
        successfulProjects: 43
      },
      budget: 80000000,
      duration: 90,
      category: "데이터 분석",
      technologies: ["Python", "Apache Spark", "Kafka", "Elasticsearch"],
      location: "서울",
      status: "MATCHED",
      createdAt: "2024-01-10",
      deadline: "2024-04-10",
      applicants: 25,
      requirements: [
        "5년 이상 데이터 분석 경험",
        "Python, Spark 숙련도",
        "빅데이터 처리 경험",
        "머신러닝 경험 우대"
      ]
    },
    {
      id: "4",
      title: "클라우드 인프라 구축",
      description: "AWS를 활용한 클라우드 인프라 구축 및 마이그레이션 프로젝트입니다. 보안성과 확장성을 고려한 설계가 필요합니다.",
      client: {
        name: "GHI 중견기업",
        companySize: "LARGE",
        peqScore: 88.7,
        totalProjects: 22,
        successfulProjects: 20
      },
      budget: 120000000,
      duration: 120,
      category: "인프라",
      technologies: ["AWS", "Terraform", "Docker", "Kubernetes"],
      location: "대구",
      status: "OPEN",
      createdAt: "2024-01-25",
      deadline: "2024-05-25",
      applicants: 18,
      requirements: [
        "4년 이상 클라우드 경험",
        "AWS 인증 보유 우대",
        "Terraform, Kubernetes 숙련도",
        "보안 인증 경험"
      ]
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "OPEN":
        return <Badge variant="success">모집 중</Badge>
      case "MATCHED":
        return <Badge variant="warning">매칭됨</Badge>
      case "IN_PROGRESS":
        return <Badge variant="info">진행 중</Badge>
      case "COMPLETED":
        return <Badge variant="outline">완료</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getCompanySizeLabel = (size: string) => {
    switch (size) {
      case "STARTUP":
        return "스타트업"
      case "SMALL":
        return "소규모"
      case "MEDIUM":
        return "중규모"
      case "LARGE":
        return "대규모"
      case "ENTERPRISE":
        return "대기업"
      default:
        return size
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Project Atlas
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">대시보드</Button>
              <Button>새 프로젝트</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">프로젝트 탐색</h2>
          <p className="text-gray-600">AI가 추천하는 최적의 프로젝트를 찾아보세요.</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="프로젝트 제목, 기술, 카테고리로 검색..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    필터
                  </Button>
                  <Button>검색</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      {getStatusBadge(project.status)}
                    </div>
                    <CardDescription className="text-base mb-4">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium">{formatCurrency(project.budget)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">{project.duration}일</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-red-600" />
                    <span className="text-sm font-medium">{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium">{project.applicants}명 지원</span>
                  </div>
                </div>

                {/* Client Info */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{project.client.name}</h4>
                      <p className="text-sm text-gray-600">
                        {getCompanySizeLabel(project.client.companySize)} • 
                        프로젝트 {project.client.totalProjects}개 완료
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="font-semibold">{project.client.peqScore}</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        P-E-Q 지수: <span className={getScoreColorClass(project.client.peqScore)}>
                          {getScoreGrade(project.client.peqScore)}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium mb-2">필요 기술</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium mb-2">요구사항</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.requirements.slice(0, 3).map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                    {project.requirements.length > 3 && (
                      <li className="text-blue-600">+{project.requirements.length - 3}개 더</li>
                    )}
                  </ul>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    마감일: {project.deadline} • 등록일: {project.createdAt}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4 mr-2" />
                      관심
                    </Button>
                    <Button size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      상세보기
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            더 많은 프로젝트 보기
          </Button>
        </div>
      </div>
    </div>
  )
}