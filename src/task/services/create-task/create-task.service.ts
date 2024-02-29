import { Injectable } from '@nestjs/common'
import { PrismaService } from 'shared/prisma/services/prisma.service'
import { CreateTaskDto } from 'src/task/dto/create-task.dto'

export interface IResponse {
  description: string
  eventDate: Date
}

@Injectable()
export class CreateTaskService {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ description, eventDate, priority, tag, status }: CreateTaskDto): Promise<IResponse | undefined> {}
}
