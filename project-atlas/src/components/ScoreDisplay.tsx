import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, Shield, Award } from "lucide-react"
import { getScoreGrade, getScoreColorClass } from "@/lib/utils"

interface ScoreDisplayProps {
  type: 'atlas' | 'peq'
  score: number
  breakdown?: {
    technical?: number
    delivery?: number
    communication?: number
    quality?: number
    payment?: number
    efficiency?: number
  }
  totalProjects?: number
  successfulProjects?: number
}

export function ScoreDisplay({ 
  type, 
  score, 
  breakdown, 
  totalProjects = 0, 
  successfulProjects = 0 
}: ScoreDisplayProps) {
  const successRate = totalProjects > 0 ? (successfulProjects / totalProjects) * 100 : 0

  if (type === 'atlas') {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-blue-600" />
            <span>Atlas Score</span>
            <Badge variant="secondary">수주자 평판</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold mb-2" style={{ color: getScoreColorClass(score).replace('text-', '').replace('-600', '') }}>
              {score.toFixed(1)}
            </div>
            <div className="text-lg font-semibold mb-1">
              등급: <span className={getScoreColorClass(score)}>{getScoreGrade(score)}</span>
            </div>
            <div className="text-sm text-gray-600">
              프로젝트 성공률: {successRate.toFixed(1)}%
            </div>
          </div>
          
          {breakdown && (
            <div className="space-y-3">
              <h4 className="font-semibold text-sm mb-3">세부 점수</h4>
              <div className="grid grid-cols-2 gap-3">
                {breakdown.technical && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm">기술력</span>
                    <span className="font-semibold">{breakdown.technical.toFixed(1)}</span>
                  </div>
                )}
                {breakdown.delivery && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm">납기준수</span>
                    <span className="font-semibold">{breakdown.delivery.toFixed(1)}</span>
                  </div>
                )}
                {breakdown.communication && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm">소통</span>
                    <span className="font-semibold">{breakdown.communication.toFixed(1)}</span>
                  </div>
                )}
                {breakdown.quality && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm">품질</span>
                    <span className="font-semibold">{breakdown.quality.toFixed(1)}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  if (type === 'peq') {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-purple-600" />
            <span>P-E-Q 지수</span>
            <Badge variant="secondary">발주자 평판</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold mb-2" style={{ color: getScoreColorClass(score).replace('text-', '').replace('-600', '') }}>
              {score.toFixed(1)}
            </div>
            <div className="text-lg font-semibold mb-1">
              등급: <span className={getScoreColorClass(score)}>{getScoreGrade(score)}</span>
            </div>
            <div className="text-sm text-gray-600">
              프로젝트 성공률: {successRate.toFixed(1)}%
            </div>
          </div>
          
          {breakdown && (
            <div className="space-y-3">
              <h4 className="font-semibold text-sm mb-3">세부 점수</h4>
              <div className="grid grid-cols-2 gap-3">
                {breakdown.payment && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm">대금지급</span>
                    <span className="font-semibold">{breakdown.payment.toFixed(1)}</span>
                  </div>
                )}
                {breakdown.efficiency && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm">효율성</span>
                    <span className="font-semibold">{breakdown.efficiency.toFixed(1)}</span>
                  </div>
                )}
                {breakdown.quality && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm">품질</span>
                    <span className="font-semibold">{breakdown.quality.toFixed(1)}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  return null
}