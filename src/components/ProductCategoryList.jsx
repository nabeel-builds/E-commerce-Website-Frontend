import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const ProductCategoryList = ({product}) => {

    const {addToCart} = useContext(CartContext)

    const navigate = useNavigate()

  return (
    <div className='space-y-4 mt-2 rounded-md'>
        <div className='bg-gray-100 flex gap-7 items-center p-2 rounded-md'>
            <img src={product.images} alt={product.title} className='md:h-60 md:w-60 h-25 w-25 rounded-md cursor-pointer' onClick={()=>navigate(`/products/${product.id}`)} />
            <div className='space-y-2'>
                <h1 className='font-bold text-xl line-clamp-3 hover:text-red-400 md:w-full w-[220px]'>{product.title}</h1>
                <p className='font-semibold flex items-center text-lg'>$<span className='md:text-4xl text-3xl'>{product.price}</span>{product.discount}%off</p>
                <p>FREE delivery Fri, <span className='font-semibold'>18 Apr</span> <br />
                    Or fastest delivery <span className='font-semibold'>Tomorrow, 17 Apr</span>
                </p>
                <button onClick={()=>addToCart(product)} className='bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCategoryList