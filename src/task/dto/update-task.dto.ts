import { Priority, Tag, TaskStatus } from '@prisma/client'
import { IsNotEmpty, IsString } from 'class-validator'

export class UpdateTaskDto {
  @IsNotEmpty()
  idTask: number

  @IsString()
  description: string

  @IsString()
  eventDate: string

  @IsString()
  priority: Priority

  @IsString()
  tag: Tag

  @IsString()
  taskStatus: TaskStatus
}
