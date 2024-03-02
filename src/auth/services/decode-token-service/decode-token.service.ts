import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import { PrismaService } from 'shared/prisma/services/prisma.service'

@Injectable()
export class DecodeTokenService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async decodeToken(token: string): Promise<User | undefined> {
    const decoded = this.jwtService.decode(token)
    const userId: number = decoded['id']
    return await this.prisma.user.findUnique({ where: { id: userId } })
  }
}
