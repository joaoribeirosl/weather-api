import { Injectable, NotFoundException } from '@nestjs/common'

@Injectable()
export class GetUserCoordinationsService {
  async execute(city: string) {
    const googleMapsApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.GOOGLE_MAPS_API_KEY}`

    const response = await fetch(googleMapsApiUrl)
    const data = await response.json()

    if (data.results.length > 0) {
      const location = data.results[0].geometry.location

      const latitude = location.lat
      const longitude = location.lng

      return { lat: latitude, lng: longitude }
    } else {
      throw new NotFoundException()
    }
  }
}
