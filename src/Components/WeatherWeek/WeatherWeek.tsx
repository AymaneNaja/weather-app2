import { format } from 'date-fns'
import React from 'react'
import WeatherCard from './WeatherCard'
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css/skyblue';
import { TiWeatherCloudy } from 'react-icons/ti'
import { Splide, SplideSlide } from '@splidejs/react-splide';

type Props = {
    metric: string,
    setMetric: React.Dispatch<React.SetStateAction<string>>,
    data: any,
    isSuccess: boolean,
    isError: boolean,
    isLoading: boolean,

}


const WeatherWeek = ({ data, isError, isLoading, isSuccess, metric, setMetric }: Props) => {
    const dates: any = []
    const today = new Date(Date.now())

    return (
        <>{isSuccess ? <div className='w-3/4 bg-white rounded-xl'

        >
            <p className='flex justify-state items-center p-2 text-lg font-bold gap-0.5 text-slate-600 absolute'><TiWeatherCloudy size={25} />This Week's weather</p>
            <Splide
                options={{
                    gap: '2em',
                    width: 500,
                    perPage: 3,
                    arrows: false
                }}
                className=''>{data.list.map(listitem => {
                    const date = new Date(listitem.dt_txt).getDate()

                    if (!dates.includes(date)) {
                        dates.push(new Date(listitem.dt_txt).getDate())
                        return <SplideSlide className=''>
                            <WeatherCard metric={metric}
                                listItem={listitem} />
                        </SplideSlide>

                    }
                })}</Splide>

        </div> : null}</>
    )
}

export default WeatherWeek