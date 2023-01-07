import React, { useState } from 'react'
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useGetallCategoriesQuery } from '../../services/ProductsApi';
import { ClipLoader } from 'react-spinners';
import { Navigate, useNavigate, useNavigation } from 'react-router';
import { Link } from 'react-router-dom';

type Props = {}

const Categories = (props: Props) => {

    const { data, isLoading, isSuccess, isError } = useGetallCategoriesQuery('')
    console.log(data)
    const [focused, setFocused] = useState('')

    // 
    return (
        <div className='relative'>
            <div className=' flex gap-2 justify-center lg:w-3/4 w-10/12 sm:w-10/12 m-auto  flex-wrap mt-16 mb-20'>
                {isSuccess && !isError ? data.map((cat: any) => {
                    return <Link to={`/categories/${cat.id}`}> <div key={cat.id} style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${cat.image})`, backgroundSize: 'cover', backgroundBlendMode: 'inherit' }} className='   w-80 h-80 rounded-lg flex justify-center items-center text-4xl font-bold  object-cover text-white shadow-2xl border-4 border-transparent hover:border-4 hover:text-5xl hover:border-slate-200 transition-all font-mono '>
                        <p className=''>{cat.name}</p>
                    </div></Link>
                }) : <div className=' flex   h-screen w-screen justify-center items-center'><ClipLoader size={50} color={'gray'} loading={isLoading} /> </div>}
            </div>
        </div>
    )
}

export default Categories