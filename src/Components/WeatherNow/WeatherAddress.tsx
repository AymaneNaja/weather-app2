import React from "react";


interface props {
    city: string,
    country: string
}
export function WeatherAddress({ city, country }: props) {
    return <div className='text-xl font-bold text-slate-500'>
        {city}, {country}
    </div>;
}
