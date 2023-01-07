import { basePlacements } from '@popperjs/core'
import { ClipLoader } from 'react-spinners'
import { AsyncThunkAction } from '@reduxjs/toolkit'
import React, { useState, useRef } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'
import { BiErrorCircle } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import southshop from '../assets/southshop-high-resolution-logo-color-on-transparent-background (1).png'

import { AuthApi, UserData } from '../Slices/AuthSlice'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'

type Props = {}

const LogIn = () => {
    const [showPass, setShowPass] = useState(false)
    const [email, setEmail] = useState('')
    const emailRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)
    const [password, setPassword] = useState('')
    const Dispatch = useDispatch()

    const [err, setError] = useState(false)
    const navigate = useNavigate()
    const { user, Loading, Success, Errors } = useSelector(UserData)
    const loggin = async (e: any) => {
        e.preventDefault()
        setError(false)
        setPassword(passRef.current!.value)
        setEmail(emailRef.current!.value)
        Dispatch<any>(AuthApi({ email, password }))
        Success ? navigate('/') : null
        if (!Loading && !Success) {
            setError(true)
        }



    }

    return (
        <div className='flex justify-center min-h-screen w-11/12 items-center m-auto '>
            <form
                onSubmit={(e) => loggin(e)}
                className='grid font-semibold  p-12 rounded-lg justify-center w-3/4'>
                <h1 className='text-center font-bold text-slate-500 font-serif text-2xl relative top-5 w-full  '  >
                    welcome to
                </h1>
                <span className='w-46 justify-center flex w-full mt-2'>
                    <img title={'logo'}
                        className={' w-64 mb-10 mt-6'}
                        src={southshop} />
                </span>
                <h2 className='text-gray-500 font-bold text-3xl flex border-l-8 px-2 border-l-slate-500 w-fit  justify-center items-center  m-auto'><BsPersonFill className='mt-1 ' size={30} fontWeight={900} />Sign in</h2>
                <div className='mt-10'>
                    {err ? <div hidden={err} className={'text-red-600  flex items-center gap-1'}>
                        <BiErrorCircle size={20} />
                        Email or Password is invalid
                    </div> : null}
                    <h2 className='m-1 text-gray-700 font-bold  text-lg'>Email</h2>
                    <input
                        ref={emailRef}
                        className='outline-none m-1 border-b-2 p-1  w-11/12 text-lg border-gray-500'
                        title='userEmail'
                        type={'email'}
                        placeholder={'johndoe@gmail.com'}

                    />
                </div>
                <div >
                    <h2 className='m-1 text-gray-700  font-bold  text-lg mb-3'>Password</h2>
                    <span className='border-b-2 p-1 border-gray-500 m-1 relative '>
                        <input
                            ref={passRef}
                            className='outline-none w-11/12 text-lg '
                            title='userPassword'
                            type={showPass ? 'text' : 'password'}
                            placeholder={'dbfis90..'}

                        ></input>
                        <button
                            className='text-lg text-gray-700 font-bold absolute right-2' type={'button'} onClick={() => setShowPass(prev => !prev)}>{showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</button>
                    </span>

                </div>
                <button
                    className=' 
                    flex justify-center items-center gap-3 bg-slate-700 p-3 w-full mt-8 rounded text-white font-bold border-slate-400 transition-all border-b-4  hover:bg-white hover:text-slate-500 text-xl' type={'submit'} >Sign in <ClipLoader color='inherit' loading={Loading} size={20} /> </button>
                <div className='text-md text-gray-700 flex  w-full justify-start gap-1'>
                    <p >Don't have an account yet? sign up here</p>
                    <Link to='/Signup'>
                        <button
                            className='text-blue-700 underline '>signup</button>

                    </Link>
                </div>
            </form>
        </div>
    )
}

export default LogIn