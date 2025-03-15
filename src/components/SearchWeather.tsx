import { ChangeEvent, useState } from "react"
import { SearchType } from "../types/indeex"
import { countries } from "../data/country"

export function SearchWeather() {
  const [search, setSearch] = useState<SearchType>({
    city: '',
    country: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <form className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-center text-gray-700">🌍 Search Weather</h2>

        <div>
          <label htmlFor="city" className="block text-gray-600 font-medium">City:</label>
          <input 
            type="text" 
            name="city" 
            placeholder="E.g. Italy, France..."
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-gray-600 font-medium">Country:</label>
          <select 
            name="country"
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-white focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option disabled value="">-- Select Country --</option>
            {countries.map(country => (
              <option key={country.code} value={country.code}>
                {country.code} - {country.name}
              </option>
            ))}
          </select>
        </div>

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition">
          🔍 Search Weather
        </button>
      </form>
    </div>
  )
}
