import { Priority, Tag, TaskStatus } from '@prisma/client'
import { IsDate, IsNotEmpty, IsString } from 'class-validator'

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  description: string

  @IsNotEmpty()
  @IsDate()
  eventDate: Date

  @IsString()
  @IsNotEmpty()
  priority: Priority

  @IsString()
  @IsNotEmpty()
  tag: Tag

  @IsString()
  @IsNotEmpty()
  status: TaskStatus
}
