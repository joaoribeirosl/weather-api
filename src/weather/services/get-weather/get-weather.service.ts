import { Injectable } from '@nestjs/common'
import { GetUserCoordinationsService } from 'src/user/services/get-user-coordinations/get-user-coordinations.service'

@Injectable()
export class GetWeatherService {
  constructor(private readonly getUserCoordinatesService: GetUserCoordinationsService) {}

  async execute(city: string) {
    //date: string
    const { lat, lng }: any = await this.getUserCoordinatesService.execute(city)

    const apiWeatherUrl = `https://api.tomorrow.io/v4/weather/forecast?location=${lat},${lng}&apikey=${process.env.WEATHER_API_KEY}`

    const response = await fetch(apiWeatherUrl)
    const data = await response.json()

    // const firstOccurrence = data.timelines.minutely.find(el => {
    //   const itemDate = new Date(el.time).toISOString().split('T')[0]
    //   return itemDate === date
    // })

    return data
  }
}
