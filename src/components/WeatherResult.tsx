import { useMemo } from "react"
import { Weather } from "../types"

type WeatherResult = {
  weatherResult: Weather
}

export function WeatherResult({ weatherResult }: WeatherResult) {

  const isEmpty = useMemo(() => weatherResult.name.length > 0, [weatherResult])

  return (
    <div>
      {isEmpty
        ? <div className="w-80 mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">City: {weatherResult?.name}</h2>
            <p className="text-gray-500">Temperature: {Math.round((weatherResult?.main.temp - 32) * 5 / 9)}°C</p>
            <p className="text-gray-500">Max: {Math.round((weatherResult?.main.temp_max - 32) * 5 / 9)}°C | Min: {Math.round((weatherResult?.main.temp_min - 32) * 5 / 9)}°C</p>
          </div>
        : <p>No Result</p>}
    </div>
  )
}
