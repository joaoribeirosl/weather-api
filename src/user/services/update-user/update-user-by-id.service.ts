import { ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from 'shared/prisma/services/prisma.service'
import { UpdateUserDto } from 'src/user/dto/update-user.dto'

@Injectable()
export class UpdateUserByIdService {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ idUser, name, email }: UpdateUserDto): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id: idUser } })
    if (!user) throw new NotFoundException()
    const userEmailExists = await this.prisma.user.findFirst({ where: { email } })
    if (userEmailExists && email !== user.email) throw new ConflictException()

    const updatedUser = await this.prisma.user.update({ where: { id: idUser }, data: { name, email } })

    return updatedUser
  }
}
