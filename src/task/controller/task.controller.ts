import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { CreateTaskService, ICreateTaskRequest } from '../services/create-task/create-task.service'
import { GetAllTasksByUserIdService } from '../services/get-all-tasks-by-user/get-all-tasks-by-user-id.service'
import { DeleteTaskByIdService } from '../services/delete-task-by-id/delete-task-by-id.service'

@Controller('tasks')
export class TaskController {
  constructor(
    private readonly createTaskService: CreateTaskService,
    private readonly getAllTasksByUserId: GetAllTasksByUserIdService,
    private readonly deleteTaskByIdService: DeleteTaskByIdService,
  ) {}

  @Post()
  async create(@Body() body: ICreateTaskRequest) {
    return await this.createTaskService.execute(body)
  }

  @Get(':id')
  async index(@Param('id') param: string) {
    return await this.getAllTasksByUserId.execute(param)
  }

  @Delete(':id')
  async delete(@Param('id') param: string) {
    return await this.deleteTaskByIdService.execute(param)
  }
}
