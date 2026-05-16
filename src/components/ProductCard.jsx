import React, { useContext } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const ProductCard = ({product}) => {

  const navigate = useNavigate()

  const {addToCart, cartItem} = useContext(CartContext)

  console.log(cartItem)

  return (
    <div className='border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max' >
        <img src={product.images} alt="" className='bg-gray-100 aspect-square' onClick={()=>navigate(`/products/${product.id}`)} />
        <h1 className='line-clamp-2 p-1 font-semibold' onClick={()=>navigate(`/products/${product.id}`)}>{product.title}</h1>
        <p className='my-1 text-lg text-gray-800 font-bold' onClick={()=>navigate(`/products/${product.id}`)}>${product.price}</p>
        <button className='bg-red-500 md:px-3 md:py-2 p-1.5 md:text-lg text-md rounded-md text-white w-full cursor-pointer flex gap-2' onClick={()=>addToCart(product)}><IoCartOutline className='w-6 h-6'/>Add to Cart</button>
    </div>
  )
}

export default ProductCard