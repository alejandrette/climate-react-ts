import { SearchWeather } from "./components/SearchWeather"
import { WeatherResult } from "./components/WeatherResult"
import useWeather from "./hooks/useWeather"

function App() {
  const { fetchWeather } = useWeather()

  return (
    <>
      <h1 className="flex flex-col items-center text-3xl">Weather Finder</h1>
      <div className="grid grid-cols-2 gap-4">
        <SearchWeather 
          fetchWeather={fetchWeather}
        />
        <WeatherResult />
      </div>
    </>
  )
}

export default App
