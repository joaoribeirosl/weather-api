/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common'
import { TaskController } from './controller/task.controller'
import { CreateTaskService } from './services/create-task/create-task.service';
import { GetAllTasksByUserService } from './services/get-all-tasks-by-user/get-all-tasks-by-user.service';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [CreateTaskService, GetAllTasksByUserService],
})
export class TaskModule {}
