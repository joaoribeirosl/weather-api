import { Injectable } from '@nestjs/common'
import { PrismaService } from 'shared/prisma/services/prisma.service'
import { DecodeTokenService } from 'src/auth/services/decode-token-service/decode-token.service'
import { CreateTaskDto } from 'src/task/dto/create-task.dto'
import { parseISO } from 'date-fns'
import { GetWeatherService } from 'src/weather/services/get-weather/get-weather.service'
import { weatherCodes } from 'src/weather/enum/weatherCodes.enum'

export interface ICreateTaskRequest {
  createdTask: CreateTaskDto
  token: string
}
export interface IResponse {
  userId: number
  description: string
  eventDate: string
  priority: string
  tag: string
  taskStatus: string
}

@Injectable()
export class CreateTaskService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly decodeTokenService: DecodeTokenService,
    private readonly getWeatherService: GetWeatherService,
  ) {}

  async execute(payload: ICreateTaskRequest): Promise<IResponse | undefined> {
    const userExist = await this.decodeTokenService.decodeToken(payload.token)
    const actualWeather = await this.getWeatherService.execute(payload.createdTask.city) //payload.createdTask.eventDate

    const weatherCodeFromApi: number = actualWeather.timelines.minutely[0].values.weatherCode

    const weatherDescription = weatherCodes[weatherCodeFromApi]

    const date = parseISO(payload.createdTask.eventDate)

    await this.prisma.task.create({
      data: {
        description: payload.createdTask.description,
        eventDate: date,
        priority: payload.createdTask.priority,
        tag: payload.createdTask.tag,
        taskStatus: payload.createdTask.taskStatus,
        userId: userExist.id,
      },
    })
    return {
      userId: userExist.id,
      description: payload.createdTask.description,
      eventDate: payload.createdTask.eventDate,
      priority: payload.createdTask.priority,
      tag: payload.createdTask.tag,
      taskStatus: payload.createdTask.taskStatus,
      weatherInformation: {
        weatherDescription: weatherDescription,
        temperature: actualWeather.timelines.minutely[0].values.temperature,
        temperatureApparent: actualWeather.timelines.minutely[0].values.temperatureApparent,
      },
    } as IResponse
  }
}
