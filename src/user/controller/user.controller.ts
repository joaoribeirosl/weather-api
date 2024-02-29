import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateUserDto } from '../dto/create-user.dto'
import { CreateUserService } from '../services/create-user/create-user.service'
import { GetUserByIdService } from '../services/get-user-by-id/get-user-by-id.service'
import { GetAllUsersService } from '../services/get-all-users/get-all-users.service'

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly getUserByIdService: GetUserByIdService,
    private readonly getAllUsersService: GetAllUsersService,
  ) {}

  @Post()
  async create(@Body() body: CreateUserDto) {
    return await this.createUserService.execute(body)
  }

  @Get(':id')
  async getOne(@Param('id') param: string) {
    return await this.getUserByIdService.execute(param)
  }

  @Get()
  async index() {
    return await this.getAllUsersService.execute()
  }
}
