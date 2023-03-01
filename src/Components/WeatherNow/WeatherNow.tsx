import { WeatherTempOption } from './WeatherTempOption';
import { WeatherNowTemp } from './WeatherNowTemp';
import { WeatherAddress } from './WeatherAddress';
import { WeatherNowIcon } from './WeatherNowIcon';
import { HiOutlineEmojiSad } from 'react-icons/hi'
import React, { useState } from 'react'
import { format } from 'date-fns'
import ClipLoader from 'react-spinners/ClipLoader';

type Props = {
    metric: string,
    setMetric: React.Dispatch<React.SetStateAction<string>>,
    data: any,
    isSuccess: boolean,
    isError: boolean,
    isLoading: boolean,

}






const WeatherNow = ({ metric, setMetric, data, isLoading, isSuccess, isError }: Props) => {
    console.log(data)

    return (
        <>{isSuccess && !isLoading ? <div className='relative'>
            <div className={data.list[0].sys.pod == 'd' ? 'p-6 w-9/12 bg-gradient-to-r from-[#f5f7ec] to-[#9eb8e9] rounded-xl shadow-sm border grid gap-3 ' : 'p-6 w-9/12 bg-gradient-to-r from-[#eef2ff] to-[#8c8add] rounded-xl shadow-sm border grid gap-3 '}>
                <div className={'flex justify-between gap-32 items-center w-full '}>
                    <div className='grid  '>
                        <WeatherNowTemp textSize={'5xl'} temp={data.list[0].main.temp} metric={metric} />
                        <WeatherAddress city={data.city.name} country={data.city.country} />
                    </div>

                </div>
                <WeatherTempOption setMetric={setMetric} metric={metric} />

            </div >
            <div className='absolute left-72 top-2'><WeatherNowIcon icon={data.list[0].weather[0].icon} size={100} /></div>
        </div> : null}

            {isError && !isLoading ? <div className='p-12 w-full rounded-xl 1shadow-sm border flex
            justify-center items-start bg-gray-300 text-red-500 font-bold text-xl '>
                <HiOutlineEmojiSad size={30} color={'red'} />
                couldn't find this location
            </div> : null}

        </>

    )
}
export default WeatherNow