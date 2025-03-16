import React from 'react'
import { Route, Routes } from 'react-router-dom'

//import components
import Navbar from './components/Navbar.jsx'

//improt pages
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contect'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'

const App = () => {
  return (
    <div className=' sm:px-[5vw] md:px-[7vw] lg:px[9vw]'>

    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>

    </Routes>
    </div>
  )
}

export default App
