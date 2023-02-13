import React from "react";

interface props {
    icon: any,
    size: number
}
export function WeatherNowIcon({ icon, size }: props) {
    return <div className='text-xl font-bold text-slate-600 w-full  h-fit'>



        <img
            width={size}
            title='weatherIcon '
            className="blur-none" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />

    </div >;
}
