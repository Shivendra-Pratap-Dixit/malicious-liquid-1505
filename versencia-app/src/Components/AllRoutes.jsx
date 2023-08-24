import React from 'react'
import {Routes,Route} from "react-router-dom"
import  Home from "../Pages/Home"
import About from "../Pages/About"
import Login from "../Pages/Login"
import Shop from "../Pages/Shop"
import Cart from "../Pages/Cart"
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/shop' element={<Shop/>}/>
    </Routes>
  )
}

export default AllRoutes