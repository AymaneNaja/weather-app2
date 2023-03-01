import { useState } from 'react'
import './App.css'
import { Map, Marker } from "pigeon-maps"
import { osm } from 'pigeon-maps/providers'
import WeatherNow from './Components/WeatherNow/WeatherNow'
import WeatherWeek from './Components/WeatherWeek/WeatherWeek'
import WeatherToday from './Components/WeatherToday/WeatherToday'
import Search from './Components/SearchCity/Search'
import WeatherMap from './Components/WeatherNow/WeatherMap'
import { useGetWeatherforcastQuery } from './services/weatherApi'
import { ClipLoader } from 'react-spinners'

function App() {
  const [cityname, setCityName] = useState('paris')
  const [metric, setMetric] = useState("C")
  const { data, isLoading, isSuccess, isError } = useGetWeatherforcastQuery(cityname)

  return (
    <div className=" grid justify-center items-start gap-2 py-5  bg-gray-200 min-h-screen  m-auto w-full ">
      <Search setCityName={setCityName} />
      {isLoading ? <div className=' p-14 w-full  h-80 rounded-xl shadow-sm border flex justify-center items-center  bg-slate-100 m '><ClipLoader loading={isLoading} size={50} color='orange' />
      </div> : null}
      <WeatherNow isError={isError} isLoading={isLoading} isSuccess={isSuccess} data={data} metric={metric} setMetric={setMetric} />
      {isSuccess ? <div className='gap-2 grid'><WeatherMap key={Math.random()} cityname={cityname} isLoading={isLoading} isSuccess={isSuccess} data={data} />
        <WeatherToday data={data} isError={isError} isLoading={isLoading} isSuccess={isSuccess} metric={metric} setMetric={setMetric} />
        <WeatherWeek data={data} isError={isError} isLoading={isLoading} isSuccess={isSuccess} metric={metric} setMetric={setMetric} /></div> : null}
    </div>
  )
}

export default App
