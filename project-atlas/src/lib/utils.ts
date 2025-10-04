import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Atlas Score 계산 함수
export function calculateAtlasScore(
  technicalScore: number,
  deliveryScore: number,
  communicationScore: number,
  qualityScore: number,
  totalProjects: number,
  successfulProjects: number
): number {
  const successRate = totalProjects > 0 ? successfulProjects / totalProjects : 0
  
  // 가중치: 기술력 30%, 납기 25%, 소통 20%, 품질 25%
  const weightedScore = 
    (technicalScore * 0.3) +
    (deliveryScore * 0.25) +
    (communicationScore * 0.2) +
    (qualityScore * 0.25)
  
  // 프로젝트 성공률 보너스 (최대 10점)
  const successBonus = successRate * 10
  
  return Math.min(100, weightedScore + successBonus)
}

// P-E-Q 지수 계산 함수
export function calculatePEQScore(
  paymentScore: number,
  efficiencyScore: number,
  qualityScore: number,
  totalProjects: number,
  successfulProjects: number
): number {
  const successRate = totalProjects > 0 ? successfulProjects / totalProjects : 0
  
  // 가중치: 대금지급 40%, 효율성 30%, 품질 30%
  const weightedScore = 
    (paymentScore * 0.4) +
    (efficiencyScore * 0.3) +
    (qualityScore * 0.3)
  
  // 프로젝트 성공률 보너스 (최대 10점)
  const successBonus = successRate * 10
  
  return Math.min(100, weightedScore + successBonus)
}

// 매칭 점수 계산 함수
export function calculateMatchingScore(
  projectRequirements: string[],
  contractorSpecialties: string[],
  atlasScore: number,
  budgetMatch: boolean,
  timelineMatch: boolean
): number {
  let score = 0
  
  // 기술 매칭 점수 (40점 만점)
  const matchingTechnologies = projectRequirements.filter(req => 
    contractorSpecialties.includes(req)
  )
  const techMatchScore = (matchingTechnologies.length / projectRequirements.length) * 40
  score += techMatchScore
  
  // Atlas Score 기반 점수 (30점 만점)
  score += (atlasScore / 100) * 30
  
  // 예산 매칭 보너스 (15점)
  if (budgetMatch) score += 15
  
  // 일정 매칭 보너스 (15점)
  if (timelineMatch) score += 15
  
  return Math.min(100, score)
}

// 날짜 포맷팅 함수
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

// 숫자 포맷팅 함수 (예산 등)
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
    minimumFractionDigits: 0
  }).format(amount)
}

// 점수 등급 변환 함수
export function getScoreGrade(score: number): string {
  if (score >= 90) return 'A+'
  if (score >= 80) return 'A'
  if (score >= 70) return 'B+'
  if (score >= 60) return 'B'
  if (score >= 50) return 'C+'
  if (score >= 40) return 'C'
  return 'D'
}

// 점수 색상 클래스 반환 함수
export function getScoreColorClass(score: number): string {
  if (score >= 80) return 'text-green-600'
  if (score >= 60) return 'text-yellow-600'
  return 'text-red-600'
}