import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'
import { GiArcTriomphe } from 'react-icons/gi'


type state = {
    Message?: any,
    Loading: boolean,
    Error: boolean,
    Success: boolean,
    user: any,
    cart: any
}

type token = {
    email: string,
    password: string
}

const userJson = localStorage.getItem('user')
const User = userJson !== null ? JSON.parse(userJson) : null

export const AuthApi = createAsyncThunk('auth/profile', async ({ email, password }: token) => {
    try {
        const Token = await axios.post('https://api.escuelajs.co/api/v1/auth/login', { email, password })
        if (Token.data && Token.status === 201) {
            return await axios.get(' https://api.escuelajs.co/api/v1/auth/profile', {
                headers: {
                    "Authorization": `Bearer ${Token.data.access_token}`
                }
            })
        }
    } catch (error: any) {
        const message: string = error.message || error
    }
})

const initialState: state = {
    user: User ? User : '',
    Loading: false,
    Success: false,
    Error: false,
    Message: '',
    cart: []
}
const UserSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.Loading = false
            state.Error = false
            state.Success = false
            state.Message = ''
        },
        addToCart: (state, action) => {
            if (!state.cart.find(item => item.id == action.payload.id)) {
                state.cart.push(action.payload)
            }
        },
        incrementQuantity: (state, action) => {
            state.cart.map(cart => {
                if (cart.id == action.payload.id) {
                    return { ...cart, quantity: cart.quantity++ }
                }
                else { return cart }
            }

            )
        },
        decrementQuantity: (state, action) => {
            state.cart.map(cart => {
                if (cart.id == action.payload.id) {
                    return { ...cart, quantity: cart.quantity-- }
                }
                else { return cart }
            })
        },
        removefromCart: (state, action) => {
            state.cart = state.cart.filter(item => {
                if (item.id === action.payload.id) {
                    return;
                }
                else {
                    return item
                }
            })
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(AuthApi.fulfilled, (state, action) => {
                state.Loading = false
                state.Success = true
                state.Error = false
                state.user = action.payload
            })
            .addCase(AuthApi.rejected, (state, action) => {
                state.Loading = false
                state.Success = false
                state.Error = true
                state.Message = action.payload
            })
            .addCase(AuthApi.pending, (state) => {
                state.Loading = true
            })
    }
})

export const UserData = (state: any) => state.UserSlice
export const { reset, addToCart, incrementQuantity, decrementQuantity, removefromCart } = UserSlice.actions
export default UserSlice.reducer
