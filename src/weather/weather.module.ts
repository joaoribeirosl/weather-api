/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common'
import { GetWeatherService } from './services/get-weather/get-weather.service'
import { GetUserCoordinationsService } from 'src/user/services/get-user-coordinations/get-user-coordinations.service'

@Module({
  imports: [],
  controllers: [],
  providers: [GetWeatherService, GetUserCoordinationsService],
})
export class WeatherModule {}
