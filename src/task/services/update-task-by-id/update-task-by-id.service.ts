import { Injectable, NotFoundException } from '@nestjs/common'
import { Task } from '@prisma/client'
import { PrismaService } from 'shared/prisma/services/prisma.service'
import { UpdateTaskDto } from 'src/task/dto/update-task.dto'
import { parseISO } from 'date-fns'

@Injectable()
export class UpdateTaskByIdService {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ idTask, description, eventDate, priority, tag, taskStatus }: UpdateTaskDto): Promise<Task> {
    const task = await this.prisma.task.findUnique({ where: { id: idTask } })
    if (!task) throw new NotFoundException()

    const date = parseISO(eventDate)
    const updatedTask = await this.prisma.task.update({ where: { id: idTask }, data: { description, eventDate: date, priority, tag, taskStatus } })

    return updatedTask
  }
}
