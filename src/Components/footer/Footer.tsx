import React from 'react'
import southshop from '../../assets/southshop-high-resolution-logo-black-on-transparent-background (1).png'
type Props = {}

const Footer = (props: Props) => {
    return (
        <div className={'h-52 w-full bg-slate-200 mt-60 grid justify-center items-center relative bottom-0 '}>
            <div className=' overflow-ellipsis '>
                <img src={southshop} className={' w-40 h-fit '} />
                <h1 className='text-slate-500 font-bold text-3xl'>Made by Aymane Naja </h1>
                <p className='text-slate-700 font-semibold '>a junior develepor seeking to improve his skills in the world of web develepment </p>
            </div>
        </div>
    )
}

export default Footer