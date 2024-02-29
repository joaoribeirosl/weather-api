import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CreateTaskService, ICreateTaskRequest } from '../services/create-task/create-task.service'
import { GetAllTasksByUserIdService } from '../services/get-all-tasks-by-user-id/get-all-tasks-by-user-id.service'
import { DeleteTaskByIdService } from '../services/delete-task-by-id/delete-task-by-id.service'
import { GetAllTasksService } from '../services/get-all-tasks/get-all-tasks.service'
import { UpdateTaskDto } from '../dto/update-task.dto'
import { UpdateTaskByIdService } from '../services/update-task-by-id/update-task-by-id.service'

@Controller('tasks')
export class TaskController {
  constructor(
    private readonly createTaskService: CreateTaskService,
    private readonly getAllTasksByUserId: GetAllTasksByUserIdService,
    private readonly deleteTaskByIdService: DeleteTaskByIdService,
    private readonly getAllTasksService: GetAllTasksService,
    private readonly updateTaskByIdService: UpdateTaskByIdService,
  ) {}

  @Post()
  async create(@Body() body: ICreateTaskRequest) {
    return await this.createTaskService.execute(body)
  }

  @Get()
  async index() {
    return await this.getAllTasksService.execute()
  }

  @Get(':id')
  async getOne(@Param('id') param: string) {
    return await this.getAllTasksByUserId.execute(param)
  }

  @Delete(':id')
  async delete(@Param('id') param: string) {
    return await this.deleteTaskByIdService.execute(param)
  }

  @Put()
  async update(@Body() body: UpdateTaskDto) {
    return await this.updateTaskByIdService.execute(body)
  }
}
