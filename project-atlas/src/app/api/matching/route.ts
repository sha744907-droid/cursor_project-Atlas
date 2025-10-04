import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { calculateMatchingScore } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const { projectId } = await request.json()

    if (!projectId) {
      return NextResponse.json(
        { error: 'Project ID is required' },
        { status: 400 }
      )
    }

    // 프로젝트 정보 조회
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: {
        client: {
          include: {
            clientProfile: true
          }
        }
      }
    })

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      )
    }

    // 모든 수주자 프로필 조회
    const contractors = await prisma.contractorProfile.findMany({
      include: {
        user: true,
        portfolioItems: true
      }
    })

    // 매칭 점수 계산
    const matchingResults = contractors.map(contractor => {
      const score = calculateMatchingScore(
        project.technologies,
        contractor.specialties,
        contractor.atlasScore,
        true, // 예산 매칭 (실제로는 더 정교한 로직 필요)
        true  // 일정 매칭 (실제로는 더 정교한 로직 필요)
      )

      return {
        contractorId: contractor.userId,
        contractor: contractor,
        score: score
      }
    })

    // 점수순으로 정렬하고 상위 5명 선택
    const topMatches = matchingResults
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)

    // 매칭 결과 저장
    const matchingResult = await prisma.matchingResult.create({
      data: {
        projectId: projectId,
        contractorIds: topMatches.map(match => match.contractorId),
        scores: topMatches.map(match => match.score),
        matchingCriteria: JSON.stringify({
          technologies: project.technologies,
          budget: project.budget,
          duration: project.duration,
          category: project.category
        })
      }
    })

    return NextResponse.json({
      project,
      matches: topMatches,
      matchingResult
    })
  } catch (error) {
    console.error('Error performing matching:', error)
    return NextResponse.json(
      { error: 'Failed to perform matching' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const projectId = searchParams.get('projectId')

    if (!projectId) {
      return NextResponse.json(
        { error: 'Project ID is required' },
        { status: 400 }
      )
    }

    // 매칭 결과 조회
    const matchingResult = await prisma.matchingResult.findUnique({
      where: { projectId },
      include: {
        project: {
          include: {
            client: {
              include: {
                clientProfile: true
              }
            }
          }
        }
      }
    })

    if (!matchingResult) {
      return NextResponse.json(
        { error: 'Matching result not found' },
        { status: 404 }
      )
    }

    // 매칭된 수주자 정보 조회
    const contractors = await prisma.contractorProfile.findMany({
      where: {
        userId: {
          in: matchingResult.contractorIds
        }
      },
      include: {
        user: true,
        portfolioItems: true
      }
    })

    // 점수와 함께 정렬
    const matches = contractors.map((contractor, index) => ({
      contractor,
      score: matchingResult.scores[index]
    })).sort((a, b) => b.score - a.score)

    return NextResponse.json({
      project: matchingResult.project,
      matches,
      matchingCriteria: JSON.parse(matchingResult.matchingCriteria)
    })
  } catch (error) {
    console.error('Error fetching matching result:', error)
    return NextResponse.json(
      { error: 'Failed to fetch matching result' },
      { status: 500 }
    )
  }
}