/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common'
import { GetWeatherService } from './services/get-weather/get-weather.service'

@Module({
  imports: [],
  controllers: [],
  providers: [GetWeatherService],
})
export class WeatherModule {}
