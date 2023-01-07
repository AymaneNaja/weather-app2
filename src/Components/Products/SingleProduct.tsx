import { ProductImg } from './ProductImg';
import React from 'react'
import { useGetSingleProductsQuery } from '../../services/ProductsApi'
import { useParams } from 'react-router'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { ImCart } from 'react-icons/im'
import { ClipLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { UserData, addToCart } from '../../Slices/AuthSlice';
type Props = {}

const SingleProduct = (props: Props) => {
    const { id } = useParams()
    const { data, isSuccess, isLoading, isError } = useGetSingleProductsQuery(id)
    const { cart } = useSelector(UserData)
    const Dispatch = useDispatch()
    return (
        <div>
            {isSuccess && !isLoading ?
                <div key={data.id} className='grid justify-center items-center w-10/12 m-auto' >
                    <div className='w-full m-auto'>
                        <h1 className='mt-20 font-extrabold lg:text-bold lg:text-5xl md:text-3xl text-3xl sm:text-2xl border-l-8 px-2 border-slate-500 text-slate-600  '>{data.title}</h1>
                        <h3 className=' font-extrabold lg:text-bold lg:text-3xl md:text-xl text-lg sm:text-2xl mb-2 px-4 text-slate-500  '>{data.category.name}</h3>
                        <ProductImg data={data} />
                    </div>
                    <div className='text-xl font-semibold text-slate-800 my-6'>
                        <h2 className='text-green-500 font-extrabold lg:text-3xl md:text-2xl sm:text-lg ' >${data.price}
                        </h2>

                        <h3 className=''>{data.description}
                        </h3>
                    </div>
                    <button
                        disabled={cart.find((item: number) => item.id === data.id) ? true : false}
                        title='add to cart'
                        onClick={() => Dispatch(addToCart({ ...data, quantity: 1 }))} className={!cart.find((item: number) => item.id === data.id) ? `bg-slate-700 font-bold text-white w-fit hover:text-slate-700 rounded-lg lg:text-2xl p-3  flex justify-center items-center gap-2 hover:bg-slate-300 transition-all border-slate-700 border-2 sm:text-lg text-lg` : `bg-slate-200 font-bold text-green-600 w-fit  rounded-lg lg:text-2xl p-3  flex justify-center items-center gap-2  transition-all border-slate-300 border-2 sm:text-lg text-lg`}><ImCart />{!cart.find((item: number) => item.id === data.id) ? 'add to cart' : 'Item has been added to cart '}</button>
                </div> :
                <div className='flex   h-screen w-screen justify-center items-center '><ClipLoader size={70} color={'gray'} loading={isLoading} /> </div>
            }
            {
                isError && !isLoading ?
                    <div>error</div>
                    : null
            }
        </div >
    )
}

export default SingleProduct