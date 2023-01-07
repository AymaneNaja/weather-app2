import React, { useState } from 'react'
import southShop from '../../assets/southshop-high-resolution-logo-black-on-transparent-background (1).png'

import { useSelector } from 'react-redux'
import { UserData } from '../../Slices/AuthSlice'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { HiHome as HomeIcon, HiOutlineHome as HomeoutIcon } from 'react-icons/hi'
import { BiCategory } from 'react-icons/bi'
import { MdProductionQuantityLimits, MdOutlineProductionQuantityLimits } from 'react-icons/md'
import Sidebar from './SideBar'

import { GiHamburgerMenu } from 'react-icons/gi'
import Home from '../Home/Home'
import { ImCart } from 'react-icons/im'
import Cart from '../Cart/Cart'
type Props = {
    setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({ setToggleSidebar }: Props) => {
    const { user } = useSelector(UserData)
    const [focused, setFocused] = useState('home')
    const { cart } = useSelector(UserData)

    console.log(user)
    return (
        <div className=' h-full'>
            <div className='flex w-full  h-fit   shadow-lg  p-2 mb-2 '>
                <div className='flex lg:w-8/12 m-auto justify-between  md:w-11/12 items-center w-10/12 sm:w-11/12 '>
                    <button title='menu' onClick={() => setToggleSidebar(prev => !prev)}><GiHamburgerMenu size={25} /></button>

                    <img title='4' className='h-auto m-2' width={125} src={southShop}></img>
                    <div className=' font-bold justify-between lg:w-2/4 md:w-10/12 w-2/4 sm:w-10/12 hidden sm:flex text-lg  mx-3'>
                        <Link to='/'>
                            <button title='home' onClick={() => setFocused('home')} className={focused == 'home' ?
                                'flex justify-center items-center border-b-4 border-slate-700  px-4 py-2  gap-1 transition all' : 'flex justify-center items-center px-4 py-2  border-b border-white gap-1'}>{focused == 'home' ? <HomeIcon size={18} /> : <HomeoutIcon size={18} />}Home</button>
                        </Link>
                        <Link to='/products'>
                            <button title='product' onClick={() => setFocused('products')} className={focused == 'products' ?
                                'flex justify-center items-center border-b-4 border-slate-700 px-4 py-2 transition-all' : 'flex justify-center items-center px-4 py-2  border-b border-white'}>
                                {focused == 'products' ? <MdProductionQuantityLimits size={18} /> : <MdOutlineProductionQuantityLimits size={18} />}
                                Products</button>
                        </Link>
                        <Link to='/categories'>
                            <button title='categories' onClick={() => setFocused('categories')} className={focused == 'categories' ?
                                'flex justify-center items-center border-b-4 border-slate-700 px-4 py-2 transition-all' : 'flex justify-center items-center px-4 py-2  border-b border-white '}>
                                {focused == 'categories' ? <BiCategory size={18} /> : <BiCategory size={18} />}
                                Categories
                            </button>
                        </Link>
                    </div>
                    <div className='mt-1 flex justify-center items-center gap-2'>
                        <Link to={'/cart'}>
                            <div className='p-3 bg-slate-200 
                            border-2 
                            transition-all
                            text-slate-700 rounded-full flex justify-center items-center  hover:text-slate-500hover:bg-slate-200
                            relative'>
                                <button title='cart text-slate-500'><ImCart size={20}
                                /></button>
                                <p className='absolute bg-slate-600 text-slate-50 rounded-full font-bold w-6  flex justify-center items-center -top-2 -right-2 text-base'>{cart.length}</p>
                            </div>
                        </Link>
                        {user !== '' ? <p className='text-black font-bold text-md '>welcome {user.name ? user.name : 'user'} </p> : <Link to='/login'>
                            <button
                                title='login' className='text-white font-bold bg-black px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all  text-lg border-2 border-black mb-1'
                            >Signin</button>
                        </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar