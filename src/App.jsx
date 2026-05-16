import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import axios from 'axios'
import Footer from './components/Footer';
import SingleProduct from './pages/SingleProduct';
import CategoryProducts from './pages/CategoryProducts';
import { CartContext } from './context/CartContext';
import ProtectedRoute from './components/ProtectedRoute';



const App = () => {

  const [location, setLocation] = useState()
  const [openDropdown, setOpenDropdown] = useState(false)

  const { cartItem, setCartItem } = useContext(CartContext)


  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      try {
        const location = await axios.get(url)
        const exactLocation = location.data.address
        setLocation(exactLocation)
        setOpenDropdown(false)

      } catch (error) {
        console.log(error);

      }

    })
  }



  useEffect(() => {
    getLocation()


  }, [])

  // Load Cart from Loacal Storage on initial render


  useEffect(() => {

    const storedCart = localStorage.getItem('cartItem')
    if(storedCart){
      setCartItem(JSON.parse(storedCart))
    }

  }, [])

  // Save Cart to local storage whenever it Changes

  useEffect(() => {

    localStorage.setItem('cartItem', JSON.stringify(cartItem))

  }, [cartItem])



  return (
    <BrowserRouter>
      <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<SingleProduct />}></Route>
        <Route path='/category/:category' element={<CategoryProducts />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/cart' element={<ProtectedRoute>
          <Cart location={location} getLocation={getLocation} />
          
        </ProtectedRoute>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App