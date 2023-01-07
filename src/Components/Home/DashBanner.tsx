import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineCategory } from 'react-icons/md'
import { IconType } from 'react-icons/lib'
type Props = {
    title: string,
    description: string,
    link: string,
    IconName: IconType
}

const DashBanner = ({ description, title, link, IconName }: Props) => {
    return (
        <div className={`h-96 my-10 w-full  bg-gradient-to-r from-slate-100 to-slate-400 flex justify-center items-center py-30 m-auto`}>
            <div className='lg:w-2/6 w-2/4 overflow-auto grid justify-center items-center p-2  ' >
                <p className='text-3xl
                 font-extrabold text-slate-600 w-fit ' >{title}</p>
                <p className='  text-slate-700   text-2xl font-bold  '>{description}</p>
            </div >
            <div className='w-2/4 grid  justify-center gap-5 items-start my-14'>
                <div><IconName size={150} color={'#eeeee4'} /></div>
                <Link to={`/${link}`}>
                    <button className='font-bold bg-slate-100 p-5 text-2xl text-slate-700  hover:text-slate-500 hover:bg-slate-50 rounded-lg  transition-all'>
                        {link}
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default DashBanner