import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { FaCaretDown } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { CgClose } from 'react-icons/cg'
import { CartContext } from '../context/CartContext'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'
import UserCartAccess from './UserCartAccess'

const Navbar = ({location,getLocation, openDropdown, setOpenDropdown}) => {

  const {cartItem} = useContext(CartContext)

  const [hamburger, setHamburger] = useState(false)

  const toggleDropdown =  () => {
    setOpenDropdown(!openDropdown)
  }

  const {goToHome} = UserCartAccess()

  return (
    <nav className='bg-white shadow-2xl py-3 px-4 md:px-0'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        {/* Logo Section */}
        <div className='flex gap-7 items-center'>
          <Link to='/'><h1 className='font-bold text-3xl'><span className='text-red-500 font-serif'>Z</span>aptro</h1></Link>
          <div className='md:flex gap-1 cursor-pointer text-gray-700 items-center hidden'>
            <MapPin className='text-red-500' />
            <span className='font-semibold'>{location ? <div className='-space-y-2'>
              <p>{location.county}</p>
              <p>{location.state}</p>
            </div> : "Add Address"}</span>
            <FaCaretDown onClick={toggleDropdown} />
          </div>
          {
            openDropdown ? <div className='w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md'>
              <h1 className='font-semibold mb-4 text-xl flex justify-between'>Change Location <span onClick={toggleDropdown} className='cursor-pointer'><CgClose/></span></h1>
              <button onClick={getLocation} className='bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-400'>Detect my location</button>
            </div> : null
          }
        </div>
          {/* {Menu Section} */}
        <div id='left-nav' className='flex gap-7 items-center'>
          <ul className='md:flex gap-7 items-center text-xl font-semibold hidden'>
            <NavLink to={'/'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"}`}><li>Home</li></NavLink>
            <NavLink to={'/products'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"}`}><li>Products</li></NavLink>
            <NavLink to={'/about'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"}`}><li>About</li></NavLink>
            <NavLink to={'/contact'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"}`}><li>Contact</li></NavLink>
          </ul>
          <Link to={'/cart'} onClick={goToHome} className='relative'><IoCartOutline className='h-7 w-7' />
            <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white'>{cartItem.length}</span></Link>
            
          <div className='hidden md:block'>
            <Show when="signed-out">
              <SignInButton className='bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer' />
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
          {
            hamburger ? <HiMenuAlt3 onClick={()=>setHamburger(false)} className='h-7 w-7 md:hidden'/>:<HiMenuAlt1 onClick={()=>setHamburger(true)} className='h-7 w-7 md:hidden'/>
          }
        </div>
      </div>
      <ResponsiveMenu hamburger={hamburger} setHamburger={setHamburger} />
    </nav>
  )
}

export default Navbar