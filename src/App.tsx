import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Components/Home/Home'
import LogIn from './Components/LogIn'
import Navbar from './Components/NavBar/Navbar'

import Categories from './Components/Categories/Categories'
import Products from './Components/Products/Products'
import Sidebar from './Components/NavBar/SideBar'
import { useSelector } from 'react-redux'
import { UserData } from './Slices/AuthSlice'
import SingleCategory from './Components/Categories/SingleCategory'
import Footer from './Components/footer/Footer'
import SingleProduct from './Components/Products/SingleProduct'
import Cart from './Components/Cart/Cart'
import SignUp from './Components/SignUp'

function App() {
  const [toogleSidebar, setToggleSidebar] = useState(false)
  const { user } = useSelector(UserData)
  return (
    <div className="">
      <Router>
        <Sidebar toggleSidebar={toogleSidebar} setToggleSidebar={setToggleSidebar} />
        <Navbar setToggleSidebar={setToggleSidebar} />
        <Routes>
          <Route path='/' element={<Home />} />
          {!user ? <Route path='logIn' element={<LogIn />} /> : null}
          {!user ? <Route path='Signup' element={<SignUp />} /> : null}
          <Route path='/Products' element={<Products />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='categories/:id' element={<SingleCategory />} />
          <Route path='product/:id' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
