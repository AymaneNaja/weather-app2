import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps"
import { osm } from 'pigeon-maps/providers'
import ClipLoader from 'react-spinners/ClipLoader';


interface props {
  isLoading: boolean,
  isSuccess: boolean,
  data: any,
  cityname: string
}
const WeatherMap = ({ isLoading, isSuccess, data, cityname }: props) => {
  const [city, setcity] = useState(cityname)
  const coord = isSuccess ? data.city.coord : null
  return (<div className=' w-3/4 rounded-lg bg-gray-100 p-1.5 h-[192px] disabled:'>
    {isLoading ? <div className='w-full h-full bg-gray-200 flex justify-center items-center'><ClipLoader loading={isLoading} color={'orange'} /></div> : null}
    {isSuccess && !isLoading ? <Map mouseEvents={false} touchEvents={false} provider={osm} height={180} defaultCenter={[coord.lat, coord.lon]} defaultZoom={10}>
      <Marker width={50} anchor={[coord.lat, coord.lon]} height={200} />
      <Marker color={'gray'}
      />
    </Map> : null}
  </div>);
}

export default WeatherMap
