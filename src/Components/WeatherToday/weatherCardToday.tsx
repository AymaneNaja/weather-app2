import React from 'react'
import { WeatherNowIcon } from '../WeatherNow/WeatherNowIcon'
import { WeatherNowTemp } from '../WeatherNow/WeatherNowTemp'

type Props = {
    metric: string,
    listItem: any
}

const WeatherCard = ({ listItem, metric }: Props) => {
    const hour = new Date(listItem.dt_txt).toLocaleTimeString()
    return (
        <div className='grid justify-center m-auto items-center h-fit  rounded-lg text-center'>
            <WeatherNowTemp temp={listItem.main.temp} metric={metric} textSize={'xl'} />
            <WeatherNowIcon
                size={100} icon={listItem.weather.map((icon: any) => icon.icon)} />
            <div className='font-bold text-base text-slate-700'>{hour}</div>
        </div>

    )
}

export default WeatherCard