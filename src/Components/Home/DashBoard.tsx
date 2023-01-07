import React from 'react'
import { useGetallCategoriesQuery, useGetAllProductsQuery, useGetProductsByCategoryQuery, useGetProductsbyPagnationQuery } from '../../services/ProductsApi'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useSelector } from 'react-redux';
import { UserData } from '../../Slices/AuthSlice';
import { json } from 'react-router';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';


type Props = {
    data: any,
    isError: boolean,
    isLoading: boolean,
    isSuccess: boolean

}



const DashBoard = ({ data, isError, isLoading, isSuccess }: Props) => {

    console.log(data)
    return (
        <>
            <div className='absolute w-screen  mb-10   bg-black' />
            <div className='relative  w-full lg:left-1/4 md:left-16 mb-10 rounded-lg '>

                {isSuccess ? <Splide options={{
                    rewind: true,
                    perPage: 1,
                    gap: '1rem',
                    width: 780,
                    autoplay: true,
                    pagination: false

                }} hasTrack={true} aria-label="...">
                    {isSuccess ? data.map((cat: any) => {
                        return <SplideSlide id={cat.id} className='relative w-full '  >
                            <Link to={`/product/${cat.id}`}>
                                <div id={cat.id} className='bottom-2 text-5xl font-bold hover:opacity-90 transition-all rounded-lg ' style={{

                                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,1)),url(${cat.images[0]})`, backgroundSize: 'cover ',
                                    width: 780, height: 520, backgroundPosition: 'center'
                                }} >
                                    <div className='
                                    text-xl gap-2
                                    grid 
                                    left-5
                                    h-fit
                                    absolute 
                                    bottom-2
                                    justify-start
                                    items-center
                                    '>
                                        <p className='
                                        flex text-slate-300 
                                        h-fit 
                                        text-5xl
                                        w-fit font-bold'>{cat.title}.</p>
                                        <p
                                            className=' text-slate-300
                                            flex font-bold text
                                            h-fit 
                                            w-fit '>{cat.description}</p>

                                    </div>


                                </div>
                            </Link>
                        </SplideSlide>
                    }) : null}
                </Splide > : <div className='absolute flex h-screen w-screen justify-center items-center my-90'><ClipLoader size={50} color={'gray'} loading={isLoading} /> </div>
                }

            </div >
        </>


    )
}

export default DashBoard