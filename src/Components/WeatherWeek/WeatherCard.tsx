import React from 'react'
import { WeatherNowIcon } from '../WeatherNow/WeatherNowIcon'
import { WeatherNowTemp } from '../WeatherNow/WeatherNowTemp'

type Props = {
    metric: string
    listItem: any
}

const WeatherCard = ({ listItem, metric }: Props) => {
    const day = new Date(listItem.dt_txt).toDateString()
    return (
        <div className='grid justify-center m-auto items-center h-fit  p-1 rounded-lg text-center'>
            <WeatherNowTemp temp={listItem.main.temp} metric={metric} textSize={'xl'} />
            <WeatherNowIcon
                size={100}
                icon={listItem.weather.map((icon: any) => icon.icon)} />
            <div className='font-bold text-xl text-slate-700'>{day.substring(0, 3)}</div>
        </div>

    )
}

export default WeatherCard