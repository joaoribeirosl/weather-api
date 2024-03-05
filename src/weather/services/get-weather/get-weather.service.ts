import { Injectable } from '@nestjs/common'

@Injectable()
export class GetWeatherService {
  async execute(city: string) {
    const apiWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.WEATHER_API_KEY}&lang=pt_br`

    const response = await fetch(apiWeatherUrl)
    const data = await response.json()

    return data
  }
}
