import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from 'shared/prisma/services/prisma.service'

@Injectable()
export class DecodeTokenService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async decodeToken(token: string) {
    const decoded = this.jwtService.decode(token)
    const userId = decoded['id']
    return await this.prisma.user.findUnique({ where: { id: userId } })
  }
}
