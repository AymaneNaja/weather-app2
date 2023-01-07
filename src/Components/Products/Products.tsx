import React from 'react'
import { useGetAllProductsQuery } from '../../services/ProductsApi'
import { ClipLoader } from 'react-spinners'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

type Props = {}

const Products = (props: Props) => {

    const { data, isSuccess, isLoading, isError } = useGetAllProductsQuery('')
    return (
        <div className='flex justify-center flex-wrap gap-2 items-center m-auto w-11/12 mt-20'>
            {isSuccess && !isError ? data.map((product: any) => {
                return <Link to={`/product/${product.id}`} >
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
                            <p className='text-green-400 font-bold lg:text-xl h-fit w-fit md:text-lg  '>${product.price}</p>
                        </div>
                    </div></Link>
            })
                : <div className=' flex   h-screen w-screen justify-center items-center'><ClipLoader size={60} color={'gray'} loading={isLoading} /> </div>}
            {isError && !isLoading ? <div className='w-screen h-screen flex justify-center items-center'>
                Sorry couldn't react the server
            </div> : null}
        </div>
    )
}

export default Products