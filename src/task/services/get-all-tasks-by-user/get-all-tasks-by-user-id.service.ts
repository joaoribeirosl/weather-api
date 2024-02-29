import { Injectable, NotFoundException } from '@nestjs/common'
import { Task } from '@prisma/client'
import { PrismaService } from 'shared/prisma/services/prisma.service'

@Injectable()
export class GetAllTasksByUserIdService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(userId: string): Promise<Task[] | undefined> {
    const tasks = this.prisma.task.findMany({ where: { userId: Number(userId) } })
    if (!tasks) throw new NotFoundException()
    return tasks
  }
}
