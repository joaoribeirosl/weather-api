import { Body, Controller, Post } from '@nestjs/common'
import { CreateTaskService, ICreateTaskRequest } from '../services/create-task/create-task.service'

@Controller('tasks')
export class TaskController {
  constructor(private readonly createTaskService: CreateTaskService) {}

  @Post()
  async create(@Body() body: ICreateTaskRequest) {
    return await this.createTaskService.execute(body)
  }
}
