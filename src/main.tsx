import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import UserSlice from './Slices/AuthSlice'
import ProductApi from './services/ProductsApi'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'


const store = configureStore({
  reducer: {
    'UserSlice': UserSlice,
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ProductApi.middleware)
})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={ProductApi}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApiProvider>
  </React.StrictMode>
)
