import { Module } from '@nestjs/common'
import { AuthController } from './controller/auth.controller'
import { SigninService } from './services/signin-service/signin.service'
import { PrismaModule } from 'shared/prisma/prisma.module'
import { JwtModule } from '@nestjs/jwt'

@Module({
  controllers: [AuthController],
  providers: [SigninService],
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
})
export class AuthModule {}
