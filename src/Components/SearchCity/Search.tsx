import React, { useState, useRef } from 'react'
import axios from 'axios'
import { AiOutlineSearch } from 'react-icons/ai'
type Props = {
    setCityName: React.Dispatch<React.SetStateAction<string>>

}

const Search = ({ setCityName }: Props) => {
    const cityRef = useRef<any>()
    function onSearch(param: any) {
        setCityName(param)
    }
    return (

        <form onSubmit={(e) => {
            e.preventDefault()
            onSearch(cityRef.current.value)
        }} className={`bg-white w-9/12 min-w-fit  rounded-lg  flex items-center gap-1 justify-between p-2`}>
            <div className='flex justify-center  items-center p-1 '><AiOutlineSearch size={20} color='lightindigo' />
                <input
                    ref={cityRef}
                    className='outline-none font-semibold text-slate-700
                text-lg mx-2'
                    placeholder='Search city...'
                ></input>
            </div>

            <button title='search' onClick={(e) => {
                e.preventDefault()
                onSearch(cityRef.current.value)
            }} className='bg-indigo-400 p-2 rounded-lg text-white font-bold hover:text-indigo-400 border-indigo-400 border-2 transition-all hover:bg-white '>search</button>
        </form>
    )
}

export default Search