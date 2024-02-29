import { Injectable } from '@nestjs/common'
import { Task } from '@prisma/client'
import { PrismaService } from 'shared/prisma/services/prisma.service'

export interface IOrderTasks {
  userId: string
  sortBy: string
  sortOrder: 'asc' | 'desc'
}

@Injectable()
export class OrderTasksService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(payload: IOrderTasks): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany({
      where: { userId: Number(payload.userId) },
      orderBy: {
        [payload.sortBy]: payload.sortOrder,
      },
    })

    return tasks
  }
}
