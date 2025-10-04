import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { calculateAtlasScore, calculatePEQScore } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      evaluatorId,
      evaluatedId,
      projectId,
      overallRating,
      technicalRating,
      deliveryRating,
      communicationRating,
      qualityRating,
      paymentRating,
      comment,
      evaluationType
    } = body

    // 필수 필드 검증
    if (!evaluatorId || !evaluatedId || !projectId || !overallRating || !evaluationType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // 평가 생성
    const evaluation = await prisma.evaluation.create({
      data: {
        evaluatorId,
        evaluatedId,
        projectId,
        overallRating,
        technicalRating,
        deliveryRating,
        communicationRating,
        qualityRating,
        paymentRating,
        comment,
        evaluationType
      }
    })

    // 평가 후 평판 점수 업데이트
    await updateReputationScores(evaluatedId, evaluationType)

    return NextResponse.json(evaluation, { status: 201 })
  } catch (error) {
    console.error('Error creating evaluation:', error)
    return NextResponse.json(
      { error: 'Failed to create evaluation' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const projectId = searchParams.get('projectId')
    const evaluationType = searchParams.get('evaluationType')

    const where: Record<string, unknown> = {}
    
    if (userId) {
      where.evaluatedId = userId
    }
    
    if (projectId) {
      where.projectId = projectId
    }
    
    if (evaluationType) {
      where.evaluationType = evaluationType
    }

    const evaluations = await prisma.evaluation.findMany({
      where,
      include: {
        evaluator: {
          include: {
            clientProfile: true,
            contractorProfile: true
          }
        },
        evaluated: {
          include: {
            clientProfile: true,
            contractorProfile: true
          }
        },
        project: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(evaluations)
  } catch (error) {
    console.error('Error fetching evaluations:', error)
    return NextResponse.json(
      { error: 'Failed to fetch evaluations' },
      { status: 500 }
    )
  }
}

// 평판 점수 업데이트 함수
async function updateReputationScores(userId: string, evaluationType: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        clientProfile: true,
        contractorProfile: true,
        receivedEvaluations: true
      }
    })

    if (!user) return

    // 수주자 Atlas Score 업데이트
    if (user.userType === 'CONTRACTOR' && user.contractorProfile) {
      const contractorEvaluations = user.receivedEvaluations.filter(
        (evaluation: any) => evaluation.evaluationType === 'CLIENT_TO_CONTRACTOR'
      )

      if (contractorEvaluations.length > 0) {
        const avgTechnical = contractorEvaluations.reduce((sum, evaluation) => 
          sum + (evaluation.technicalRating || 0), 0) / contractorEvaluations.length
        
        const avgDelivery = contractorEvaluations.reduce((sum, evaluation) => 
          sum + (evaluation.deliveryRating || 0), 0) / contractorEvaluations.length
        
        const avgCommunication = contractorEvaluations.reduce((sum, evaluation) => 
          sum + (evaluation.communicationRating || 0), 0) / contractorEvaluations.length
        
        const avgQuality = contractorEvaluations.reduce((sum, evaluation) => 
          sum + (evaluation.qualityRating || 0), 0) / contractorEvaluations.length

        const atlasScore = calculateAtlasScore(
          avgTechnical * 20, // 1-5점을 0-100점으로 변환
          avgDelivery * 20,
          avgCommunication * 20,
          avgQuality * 20,
          user.contractorProfile.totalProjects,
          user.contractorProfile.successfulProjects
        )

        await prisma.contractorProfile.update({
          where: { userId },
          data: {
            atlasScore,
            technicalScore: avgTechnical * 20,
            deliveryScore: avgDelivery * 20,
            communicationScore: avgCommunication * 20,
            qualityScore: avgQuality * 20
          }
        })
      }
    }

    // 발주자 P-E-Q 지수 업데이트
    if (user.userType === 'CLIENT' && user.clientProfile) {
      const clientEvaluations = user.receivedEvaluations.filter(
        (evaluation: any) => evaluation.evaluationType === 'CONTRACTOR_TO_CLIENT'
      )

      if (clientEvaluations.length > 0) {
        const avgPayment = clientEvaluations.reduce((sum, evaluation) => 
          sum + (evaluation.paymentRating || 0), 0) / clientEvaluations.length
        
        const avgEfficiency = clientEvaluations.reduce((sum, evaluation) => 
          sum + (evaluation.deliveryRating || 0), 0) / clientEvaluations.length
        
        const avgQuality = clientEvaluations.reduce((sum, evaluation) => 
          sum + (evaluation.qualityRating || 0), 0) / clientEvaluations.length

        const peqScore = calculatePEQScore(
          avgPayment * 20,
          avgEfficiency * 20,
          avgQuality * 20,
          user.clientProfile.totalProjects,
          user.clientProfile.successfulProjects
        )

        await prisma.clientProfile.update({
          where: { userId },
          data: {
            overallPEQScore: peqScore,
            paymentScore: avgPayment * 20,
            efficiencyScore: avgEfficiency * 20,
            qualityScore: avgQuality * 20
          }
        })
      }
    }
  } catch (error) {
    console.error('Error updating reputation scores:', error)
  }
}