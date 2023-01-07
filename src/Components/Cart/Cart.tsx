import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserData, decrementQuantity, incrementQuantity, removefromCart } from '../../Slices/AuthSlice'
import { BsFillTrashFill, BsFillCartFill } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/Fi'
import {
    AiOutlinePlus, AiOutlineMinus
} from 'react-icons/ai'
import { Link } from 'react-router-dom'

type Props = {}

const Cart = (props: Props) => {
    const { cart } = useSelector(UserData)
    const Dispatch = useDispatch()

    return (
        <div className='relative'>

            <div className='w-3/4 lg:w-2/4 flex justify-between m-auto   text-3xl mt-10'>
                <p className='flex gap-1 items-center font-bold text-slate-600'><BsFillCartFill />Cart</p>
                <div className='flex gap-3  items-center font-bold text-slate-600'>
                    <p>Total:</p>
                    <p className='text-green-500 transition-all'>${cart.length >= 1 ? cart.reduce((r: number, { price, quantity }: number) => r + price * quantity, 0) : '0'}
                    </p>
                </div>
            </div>
            {cart.length == 0 ? <p className='h-screen w-sreen flex justify-center items-center text-5xl text-slate-600 '>cart is empty...</p> : null}
            <div className='flex justify-center flex-wrap gap-2 items-center m-auto w-11/12 mt-20'>{cart.map((product: any) => {
                return <div className='grid'>
                    <Link to={`/product/${product.id}`} >
                        <div
                            className='lg:h-[20rem] lg:w-[18rem] md:h-[18rem] md:w-[16rem] w-[14rem] h-[16rem] flex justify-start items-end flex-wrap hover:border-4 border-slate-500 transition-all
            '
                            style={{
                                borderRadius: '10px',
                                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,1)),url(${product.images[0]})`, backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative'
                            }}>
                            <div className='grid p-2 w-10/11 overflow-elipsis'>
                                <p className='text-slate-300 font-bold lg:text-xl md:text-lg  h-fit overflow-elipsis w-fit '>{product.title}</p>
                                <p className='text-green-400 font-bold lg:text-xl h-fit w-fit md:text-lg  '>${product.price} {product.quantity >= 2 ? 'x ' + product.quantity : null}</p>
                            </div>
                        </div>
                    </Link>
                    <div className='flex justify-between mx-10 my-3 items-center'>
                        <button
                            onClick={() =>
                                product.quantity >= 2 ? Dispatch(decrementQuantity(product)) : Dispatch(removefromCart(product))}
                            title='decrement'
                            className='bg-slate-200 rounded-lg  p-1 text-slate-500 hover:bg-slate-100 transition-all' >
                            {product.quantity >= 2 ? <AiOutlineMinus size={22} /> : <BsFillTrashFill size={22} />}
                        </button>
                        <p className='text-xl font-bold text-slate-800'>{product.quantity}</p>
                        <button
                            title='increment'
                            onClick={() => Dispatch(incrementQuantity(product))}
                            className='bg-slate-200 rounded-lg  p-1 text-slate-500 hover:bg-slate-100 transition-all'>
                            <AiOutlinePlus size={22} />
                        </button>
                    </div>

                </div>
            })}


            </div>


        </div>
    )
}

export default Cart