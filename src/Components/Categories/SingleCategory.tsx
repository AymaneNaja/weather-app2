import React, { useState } from 'react'
import { useGetProductsByCategoryQuery } from '../../services/ProductsApi'
import { ClipLoader } from 'react-spinners'
import { useLocation, useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'

type Props = {

}

const SingleCategory = (props: Props) => {
    const { id } = useParams()
    const Navigate = useNavigate()
    const { data, isLoading, isError, isSuccess } = useGetProductsByCategoryQuery(id)

    return (
        <div className='flex justify-center flex-wrap gap-2 items-center m-auto w-10/12 mt-20'>
            {isSuccess && !isError ? data.map((product: any) => {
                return <Link to={`/product/${product.id} `} >

                    <div
                        className='lg:h-[20rem] lg:w-[18rem] md:h-[18rem] md:w-[16rem] w-[14rem] h-[17rem] flex justify-start items-end flex-wrap
                    hover:border-4 border-slate-300 transition-all 
                    '
                        style={{
                            borderRadius: '10px',
                            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,1)),url(${product.images[0]})`, backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative'
                        }}>
                        <div className='grid p-2 w-10/12 overflow-ellipsis '>
                            <p className='text-slate-300 font-bold lg:text-xl md:text-lg  h-fit overflow-elipsis w-fit '>{product.title}</p>
                            <p className='text-green-400 font-bold lg:text-xl h-fit w-fit md:text-lg '>${product.price}</p>
                        </div>
                    </div></Link>
            })
                : <div className=' flex  h-screen w-screen justify-center items-center'><ClipLoader size={80} color={'gray'} loading={isLoading} /> </div>}
        </div>
    )
}

export default SingleCategory