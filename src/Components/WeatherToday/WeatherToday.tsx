import ClipLoader from 'react-spinners/ClipLoader';
import { TiWeatherCloudy } from 'react-icons/ti'
import { format } from 'date-fns'
import React from 'react'
import WeatherCardToday from './weatherCardToday'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import { AnyAsyncThunk } from '@reduxjs/toolkit/dist/matchers';
import { HiClipboardList } from 'react-icons/hi';

type Props = {
    metric: string,
    setMetric: React.Dispatch<React.SetStateAction<string>>,
    data: any,
    isSuccess: boolean,
    isError: boolean,
    isLoading: boolean,

}


const WeatherToday = ({ metric, setMetric, data, isError, isLoading, isSuccess }: Props) => {

    const today = new Date(Date.now())

    return (
        <>{isSuccess ? <div className=' w-3/4 rounded-xl shadow-sm bg-white'>
            <p className='flex justify-state items-center p-2.5 text-lg font-bold gap-0.5 text-slate-600 absolute'><TiWeatherCloudy size={25} />weather every 3h</p>
            <Splide
                options={{
                    gap: '2em',
                    width: 500,
                    arrows: false,
                    perPage: 3,

                }}
                className=''>
                {data.list.map((listitem: any) => {
                    const listItemDate = new Date(listitem.dt_txt).getDate()
                    if (listItemDate === today.getDate()) {

                        return <SplideSlide className='w-='>
                            <WeatherCardToday metric={metric}
                                listItem={listitem} />
                        </SplideSlide>

                    }
                })}

            </Splide>
        </div> : null}
            {isLoading ? <div className='p-12 w-9/12 rounded-xl shadow-sm border flex justify-center items-center bg-gray-300 '><ClipLoader loading={isLoading} color='orange' /></div> : null} </>
    )
}

export default WeatherToday