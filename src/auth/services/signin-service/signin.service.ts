import { ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'shared/prisma/services/prisma.service'
import { compare } from 'bcryptjs'
import { JwtService } from '@nestjs/jwt'

interface ILogin {
  email: string
  password: string
}

@Injectable()
export class SigninService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  async execute({ email, password }: ILogin) {
    const userExists = await this.prisma.user.findUnique({ where: { email } })
    if (!userExists) throw new NotFoundException('Usuário não encontrado!')
    const passwordConfirmed = await compare(password, userExists.password)
    if (!passwordConfirmed) throw new ConflictException('Senha não coincide com a atual!')
    const token = await this.jwtService.signAsync({ id: userExists.id })
    return { name: userExists.name, token }
  }
}
