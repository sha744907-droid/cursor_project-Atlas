import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const category = searchParams.get('category')
    const status = searchParams.get('status')
    const search = searchParams.get('search')

    const skip = (page - 1) * limit

    // 필터 조건 구성
    const where: Record<string, unknown> = {}
    
    if (category) {
      where.category = category
    }
    
    if (status) {
      where.status = status
    }
    
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { technologies: { has: search } }
      ]
    }

    // 프로젝트 목록 조회
    const projects = await prisma.project.findMany({
      where,
      include: {
        client: {
          include: {
            clientProfile: true
          }
        },
        contractor: {
          include: {
            contractorProfile: true
          }
        },
        evaluations: true
      },
      skip,
      take: limit,
      orderBy: {
        createdAt: 'desc'
      }
    })

    // 총 개수 조회
    const total = await prisma.project.count({ where })

    return NextResponse.json({
      projects,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      description,
      category,
      budget,
      duration,
      clientId,
      requirements,
      technologies,
      deliverables
    } = body

    // 필수 필드 검증
    if (!title || !description || !category || !budget || !duration || !clientId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // 프로젝트 생성
    const project = await prisma.project.create({
      data: {
        title,
        description,
        category,
        budget,
        duration,
        clientId,
        requirements: requirements || [],
        technologies: technologies || [],
        deliverables: deliverables || [],
        status: 'OPEN'
      },
      include: {
        client: {
          include: {
            clientProfile: true
          }
        }
      }
    })

    return NextResponse.json(project, { status: 201 })
  } catch (error) {
    console.error('Error creating project:', error)
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    )
  }
}