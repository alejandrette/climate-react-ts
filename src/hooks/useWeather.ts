import axios from "axios"
import { GeoLocation, SearchType } from "../types"
import { z } from "zod"

const Weather = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  })
})

export default function useWeather() {
  const fetchWeather = async (search: SearchType) => {
    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${import.meta.env.VITE_API_KEY}`
      const { data } = await axios.get<GeoLocation[]>(geoUrl)
      const { lat, lon } = data[0] 

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`
      const { data: weatherResult } = await axios.get(weatherUrl)
      const result = Weather.safeParse(weatherResult)

      if(result.success){
        return result.data
      } else {
        console.error('');
      }
      
    } catch (error) {
      console.error(error)
    }
  }

  return {fetchWeather}
}
