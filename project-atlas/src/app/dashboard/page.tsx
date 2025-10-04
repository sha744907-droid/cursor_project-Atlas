import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  Users, 
  Target, 
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Eye,
  MessageSquare
} from "lucide-react"
import { formatCurrency, getScoreGrade, getScoreColorClass } from "@/lib/utils"

export default function DashboardPage() {
  // 임시 데이터 (실제로는 API에서 가져올 데이터)
  const userStats = {
    atlasScore: 87.5,
    totalProjects: 24,
    successfulProjects: 22,
    averageRating: 4.6,
    completionRate: 91.7
  }

  const recentProjects = [
    {
      id: "1",
      title: "웹 애플리케이션 개발",
      client: "ABC 기업",
      budget: 50000000,
      status: "IN_PROGRESS",
      progress: 65,
      deadline: "2024-02-15",
      rating: 4.8
    },
    {
      id: "2", 
      title: "모바일 앱 UI/UX 디자인",
      client: "XYZ 스타트업",
      budget: 30000000,
      status: "COMPLETED",
      progress: 100,
      deadline: "2024-01-30",
      rating: 4.9
    },
    {
      id: "3",
      title: "데이터 분석 시스템 구축",
      client: "DEF 대기업",
      budget: 80000000,
      status: "MATCHED",
      progress: 0,
      deadline: "2024-03-01",
      rating: null
    }
  ]

  const notifications = [
    {
      id: "1",
      title: "새로운 프로젝트 매칭",
      message: "데이터 분석 시스템 구축 프로젝트에 매칭되었습니다.",
      type: "PROJECT_MATCHED",
      time: "2시간 전",
      isRead: false
    },
    {
      id: "2",
      title: "평가 완료",
      message: "웹 애플리케이션 개발 프로젝트 평가가 완료되었습니다.",
      type: "EVALUATION_RECEIVED",
      time: "1일 전",
      isRead: true
    },
    {
      id: "3",
      title: "납기일 알림",
      message: "모바일 앱 UI/UX 디자인 프로젝트 납기일이 다가왔습니다.",
      type: "DEADLINE_REMINDER",
      time: "3일 전",
      isRead: true
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "IN_PROGRESS":
        return <Badge variant="info">진행 중</Badge>
      case "COMPLETED":
        return <Badge variant="success">완료</Badge>
      case "MATCHED":
        return <Badge variant="warning">매칭됨</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
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
                <Target className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Project Atlas
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                알림
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                새 프로젝트
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">안녕하세요, 김개발님! 👋</h2>
          <p className="text-gray-600">오늘도 좋은 프로젝트로 성장하세요.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Atlas Score</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.atlasScore}</div>
              <p className="text-xs text-muted-foreground">
                등급: <span className={getScoreColorClass(userStats.atlasScore)}>
                  {getScoreGrade(userStats.atlasScore)}
                </span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">총 프로젝트</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.totalProjects}</div>
              <p className="text-xs text-muted-foreground">
                성공률: {userStats.completionRate}%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">평균 평점</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.averageRating}</div>
              <p className="text-xs text-muted-foreground">
                최근 30일 기준
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">완료 프로젝트</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.successfulProjects}</div>
              <p className="text-xs text-muted-foreground">
                성공 프로젝트 수
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Projects */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>최근 프로젝트</CardTitle>
                <CardDescription>
                  진행 중이거나 최근에 완료된 프로젝트들입니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold">{project.title}</h4>
                          {getStatusBadge(project.status)}
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>발주자: {project.client}</p>
                          <p>예산: {formatCurrency(project.budget)}</p>
                          <p>납기일: {project.deadline}</p>
                          {project.rating && (
                            <p className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-500 mr-1" />
                              {project.rating}/5.0
                            </p>
                          )}
                        </div>
                        {project.status === "IN_PROGRESS" && (
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span>진행률</span>
                              <span>{project.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${project.progress}%` }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          보기
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notifications */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>알림</CardTitle>
                <CardDescription>
                  최근 알림과 업데이트를 확인하세요.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-3 rounded-lg border ${
                        !notification.isRead ? 'bg-blue-50 border-blue-200' : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        <div className="flex-shrink-0 mt-1">
                          {notification.type === "PROJECT_MATCHED" && (
                            <Target className="h-4 w-4 text-blue-600" />
                          )}
                          {notification.type === "EVALUATION_RECEIVED" && (
                            <Star className="h-4 w-4 text-green-600" />
                          )}
                          {notification.type === "DEADLINE_REMINDER" && (
                            <Clock className="h-4 w-4 text-orange-600" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-sm font-medium">{notification.title}</h5>
                          <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                          <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    모든 알림 보기
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}