import { SearchWeather } from "./components/SearchWeather"
import { WeatherResult } from "./components/WeatherResult"

function App() {

  return (
    <>
      <h1 className="flex flex-col items-center text-3xl">Weather Finder</h1>
      <div className="grid grid-cols-2 gap-4">
        <SearchWeather />
        <WeatherResult />
      </div>
    </>
  )
}

export default App
