import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Users, Clock, CheckCircle, Eye } from "lucide-react"
import { formatCurrency, getScoreGrade } from "@/lib/utils"

interface MatchingCardProps {
  contractor: {
    id: string
    name: string
    companyName: string
    industry: string
    specialties: string[]
    atlasScore: number
    totalProjects: number
    successfulProjects: number
    averageRating: number
  }
  score: number
  project: {
    id: string
    title: string
    budget: number
    duration: number
    technologies: string[]
  }
}

export function MatchingCard({ contractor, score, project }: MatchingCardProps) {
  const successRate = contractor.totalProjects > 0 
    ? (contractor.successfulProjects / contractor.totalProjects) * 100 
    : 0

  const matchingTechnologies = project.technologies.filter(tech => 
    contractor.specialties.includes(tech)
  )
  const techMatchRate = (matchingTechnologies.length / project.technologies.length) * 100

  return (
    <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">{contractor.companyName}</CardTitle>
            <CardDescription className="mt-1">
              담당자: {contractor.name} • {contractor.industry}
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {score.toFixed(1)}
            </div>
            <div className="text-xs text-gray-600">매칭 점수</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {/* Atlas Score */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Atlas Score</span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="font-semibold">{contractor.atlasScore.toFixed(1)}</span>
              <Badge variant="outline" className="ml-2">
                {getScoreGrade(contractor.atlasScore)}
              </Badge>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${contractor.atlasScore}%` }}
            />
          </div>
        </div>

        {/* 프로젝트 성과 */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-green-600">{contractor.totalProjects}</div>
            <div className="text-xs text-gray-600">총 프로젝트</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-blue-600">{successRate.toFixed(1)}%</div>
            <div className="text-xs text-gray-600">성공률</div>
          </div>
        </div>

        {/* 기술 매칭 */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">기술 매칭</span>
            <span className="text-sm font-semibold text-green-600">
              {techMatchRate.toFixed(0)}%
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {matchingTechnologies.map((tech) => (
              <Badge key={tech} variant="success" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.filter(tech => !contractor.specialties.includes(tech)).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* 프로젝트 정보 */}
        <div className="bg-blue-50 p-3 rounded-lg mb-4">
          <div className="text-sm font-medium text-blue-800 mb-2">프로젝트 정보</div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1 text-blue-600" />
              {project.duration}일
            </div>
            <div className="flex items-center">
              <Users className="h-3 w-3 mr-1 text-blue-600" />
              {formatCurrency(project.budget)}
            </div>
          </div>
        </div>

        {/* 액션 버튼 */}
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Eye className="h-4 w-4 mr-2" />
            프로필 보기
          </Button>
          <Button size="sm" className="flex-1">
            <CheckCircle className="h-4 w-4 mr-2" />
            매칭하기
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}