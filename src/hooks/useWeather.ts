import axios from "axios"
import { GeoLocation, SearchType } from "../types"
import { z } from "zod"
import { useState } from "react"

const Weather = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  })
})

type WeatherType = z.infer<typeof Weather>

export default function useWeather() {
  const [weatherResult, setWeatherResult] = useState<WeatherType>({
    name: '',
    main: ({
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    })
  })

  const fetchWeather = async (search: SearchType) => {
    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${import.meta.env.VITE_API_KEY}`
      const { data } = await axios.get<GeoLocation[]>(geoUrl)
      const { lat, lon } = data[0] 

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`
      const { data: weatherResult } = await axios.get(weatherUrl)
      const result = Weather.safeParse(weatherResult)

      if(result.success){
        setWeatherResult(result.data)
      } else {
        console.error(result.error);
      }
      
    } catch (error) {
      console.error(error)
    }
  }

  return { fetchWeather, weatherResult }
}
