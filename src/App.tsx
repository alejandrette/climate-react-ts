import { SearchWeather } from "./components/SearchWeather"
import { WeatherResult } from "./components/WeatherResult"
import useWeather from "./hooks/useWeather"

function App() {
  const { fetchWeather, weatherResult } = useWeather()

  return (
    <div>
      <h1 className="flex flex-col items-center text-3xl mb-4">Weather Finder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SearchWeather 
          fetchWeather={fetchWeather}
        />
        <WeatherResult 
          weatherResult={weatherResult}
        />
      </div>
    </div>
  )
}

export default App
