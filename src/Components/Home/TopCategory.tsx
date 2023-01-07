import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { useGetProductsByCategoryQuery, useGetSingleCategoriesQuery } from '../../services/ProductsApi';
import SimpleImageSlider from "react-simple-image-slider";
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

type Props = {
    categoryNum: number,
    categoryTitle: string
}



const TopCategory = ({ categoryTitle, categoryNum }: Props) => {
    const { data, isLoading, isSuccess, isError } = useGetProductsByCategoryQuery(categoryNum)

    const pic: React.CSSProperties | undefined = {
        width: 'fit-content', textAlign: 'center',
        backgroundSize: 'contain !important', backgroundPosition: 'center !important',
    }
    return (
        <div className='grid justify-center items-center   '>
            {isSuccess ? <h1 className='w-3/4 m-auto  text-5xl text-slate-400 p-2  border-l-8
            my-10  text-center font-extrabold  '>Top {categoryTitle}</h1> : null}
            {isSuccess ? <Splide options={{
                perPage: 4,
                width: 1050,
                type: 'loop',
                gap: '5em',
                pagination: false,
            }} aria-label="My Favorite Images">
                {data.map((product: any) => {
                    return <SplideSlide className=''>
                        <Link to={`/product/${product.id}`} >
                            <div
                                className=' h-[28rem] w-[18rem] shover:opacity-90 transition-all shadow m-auto ' style={{
                                    borderRadius: '10px',
                                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,1)),url(${product.images[0]})`, backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative'
                                }}>
                                <p className='font-bold text-2xl w-full overflow-ellipsis
                            absolute bottom-12 left-5 text-slate-300 font-mono '>{product.title}</p>
                                <p className='font-bold text-xl w-full overflow-ellipsis
                            absolute bottom-5 left-5 text-green-400 '>${product.price}</p>

                            </div>
                        </Link>

                    </SplideSlide>
                })}
            </Splide> : <div className='absolute flex h-screen w-screen justify-center items-center my-90 '><ClipLoader size={50} color={'gray'} loading={isLoading} /> </div>}
        </div>
    )
}

export default TopCategory