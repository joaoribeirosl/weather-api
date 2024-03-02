import { WeatherModule } from './weather/weather.module'
import { TaskModule } from './task/task.module'
import { UserModule } from './user/user.module'
import { PrismaModule } from './../shared/prisma/prisma.module'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [WeatherModule, AuthModule, TaskModule, UserModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
