import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/' }),
    endpoints: (builder) => ({
        getWeatherforcast: builder.query<string, string>({
            query: (cityname) => `forecast?q=${cityname}&units=metric&appid=8ef90399767d57795debfbc01ec11307`,
        }),

    }),
})


export const { useGetWeatherforcastQuery } = weatherApi
export default weatherApi