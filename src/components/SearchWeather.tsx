import { ChangeEvent, FormEvent, useState } from "react"
import { SearchType } from "../types/indeex"
import { countries } from "../data/country"
import { Alert } from "./Alert"

export function SearchWeather() {
  const [search, setSearch] = useState<SearchType>({
    city: '',
    country: ''
  })
  const [alert, setAlert] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(Object.values(search).includes('')){
      setAlert('Field is Empty')
      setTimeout(() => {
        setAlert('')
      }, 2000);      
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <form
        className="flex flex-col gap-4" 
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700">🌍 Search Weather</h2>

        <div>
          <label htmlFor="city" className="block text-gray-600 font-medium">City:</label>
          <input 
            type="text" 
            name="city" 
            placeholder="E.g. Italy, France..."
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none bg-transparent text-black"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-gray-600 font-medium">Country:</label>
          <select 
            name="country"
            onChange={handleChange}
            value={search.country}
            className="w-full p-2 border rounded-md bg-white focus:ring-2 focus:ring-blue-400 outline-none bg-transparent text-black"
          >
            <option disabled value="">-- Select Country --</option>
            {countries.map(country => (
              <option key={country.code} value={country.code}>
                {country.code} - {country.name}
              </option>
            ))}
          </select>
        </div>

        {alert && <Alert>{alert}</Alert>}

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition">
          🔍 Search Weather
        </button>
      </form>
    </div>
  )
}
