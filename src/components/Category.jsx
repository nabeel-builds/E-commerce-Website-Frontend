import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import { useNavigate } from 'react-router-dom'

const Category = () => {


    const {data} = useContext(DataContext)

    const navigate = useNavigate()

    const getUniqueCategory = (data, property) => {
            let newVal = data?.map((curElem) => {
                return curElem[property]
            })
            newVal = [...new Set(newVal)]
            return newVal
        }

        
        const categoryOnlyData = getUniqueCategory(data, "category")
    

  return (
    <div className='bg-[#101829]'>
        <div className='max-w-7xl mx-auto flex flex-wrap gap-4 items-center  justify-center md:justify-around py-7 px-4'>
            {
                categoryOnlyData.slice(0,7).map((item,index) =>{
                    return <div key={index}>
                        <button onClick={()=>navigate(`/category/${item}`)} className='uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer hover:scale-110 transition-all'>{item}</button>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Category