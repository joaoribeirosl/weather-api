import { TaskModule } from './task/task.module'
import { UserModule } from './user/user.module'
import { PrismaModule } from './../shared/prisma/prisma.module'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [AuthModule, TaskModule, UserModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
