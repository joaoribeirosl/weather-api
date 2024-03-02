import { Injectable } from '@nestjs/common'

interface IWeatherRequest {
  city: string
}

@Injectable()
export class GetWeatherService {
  async execute(payload: IWeatherRequest) {
    const apiWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${payload.city}&units=metric&appid=${process.env.WEATHER_API_KEY}`

    const response = await fetch(apiWeatherUrl)
    const data = await response.json()

    return data
  }
}
