import { Body, Controller, Post } from '@nestjs/common'
import { CreateTaskService } from '../services/create-task/create-task.service'
import { CreateTaskDto } from '../dto/create-task.dto'

@Controller('task')
export class TaskController {
  constructor(private readonly createTaskService: CreateTaskService) {}

  @Post()
  async create(@Body() body: CreateTaskDto) {
    return await this.createTaskService.execute(body)
  }
}
