/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common'
import { TaskController } from './controller/task.controller'
import { CreateTaskService } from './services/create-task/create-task.service'
import { GetAllTasksByUserIdService } from './services/get-all-tasks-by-user/get-all-tasks-by-user-id.service'
import { PrismaModule } from 'shared/prisma/prisma.module'
import { DecodeTokenService } from 'src/auth/services/decode-token-service/decode-token.service'

@Module({
  imports: [PrismaModule],
  controllers: [TaskController],
  providers: [CreateTaskService, GetAllTasksByUserIdService, DecodeTokenService],
})
export class TaskModule {}
