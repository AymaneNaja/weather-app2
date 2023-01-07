import React, { useState } from 'react'
import southShop from '../../assets/southshop-high-resolution-logo-black-on-transparent-background.png'
import { useSelector } from 'react-redux'
import { UserData } from '../../Slices/AuthSlice'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { AiFillHome, AiFillRightCircle, AiOutlineClose, AiOutlineHome, AiOutlineArrowLeft } from 'react-icons/ai'
import { BiCaretDown, BiCart, BiCartAlt, BiCategory } from 'react-icons/bi'
import { MdProductionQuantityLimits, MdOutlineProductionQuantityLimits } from 'react-icons/md'

type Props = {
    toggleSidebar: boolean
    setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ toggleSidebar, setToggleSidebar }: Props) => {
    const [focused, setFocused] = useState('')

    return (
        <div className={toggleSidebar ? 'sidebar-show h-screen' : 'sidebar-hide h-screen'}>
            <button title='close arrow' className='absolute right-5 top-5 font- ' onClick={() => setToggleSidebar(prev => !prev)}><AiOutlineArrowLeft size={30} /> </button>
            <div className={'text-2xl grid gap-2 mt-20 font-bold '}>
                <Link to='/'>
                    <button onClick={() => { setFocused('home'), setToggleSidebar(false) }} className={focused !== 'home' ?
                        'flex justify-center items-center w-full gap-2  p-3  hover:bg-slate-300 hover:text-slate-700 transition-all' : 'flex justify-center items-center p-3  gap-2  bg-slate-300 w-full text-slate-700  hover:bg-slate-200 hover:text-slate-800 transition-all'}>{focused == 'home' ? <AiFillHome size={25} /> : <AiOutlineHome size={25} />}Home</button>
                </Link>
                <Link to='/products'>
                    <button onClick={() => { setFocused('products'), setToggleSidebar(false) }} className={focused !== 'products' ?
                        'flex justify-center items-center w-full gap-2  p-3  hover:bg-slate-300 hover:text-slate-700 transition-all' : 'flex justify-center items-center p-3  gap-2  bg-slate-300 w-full text-slate-700  hover:bg-slate-200 hover:text-slate-800 transition-all'}>
                        {focused == 'products' ? <MdProductionQuantityLimits size={25} /> : <MdOutlineProductionQuantityLimits size={25} />}
                        Products</button>
                </Link>
                <Link to='/categories'>
                    <button onClick={() => { setFocused('categories'), setToggleSidebar(false) }} className={focused !== 'categories' ?
                        'flex justify-center items-center w-full gap-2  p-3  hover:bg-slate-300 hover:text-slate-700 transition-all' : 'flex justify-center items-center p-3  gap-2  bg-slate-300 w-full text-slate-700  hover:bg-slate-200 hover:text-slate-800 transition-all'}>
                        {focused == 'categories' ? <BiCategory size={25} /> : <BiCategory size={25} />}
                        Categories
                    </button>
                </Link>
                <Link to='/cart'>
                    <button onClick={() => { setFocused('cart'), setToggleSidebar(false) }} className={focused !== 'cart' ?
                        'flex justify-center items-center w-full gap-2  p-3  hover:bg-slate-300 hover:text-slate-700 transition-all' : 'flex justify-center items-center p-3  gap-2  bg-slate-300 w-full text-slate-700  hover:bg-slate-200 hover:text-slate-800 transition-all'}>
                        {focused == 'cart' ? <BiCartAlt size={25} /> : <BiCartAlt size={25} />}
                        Cart
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar