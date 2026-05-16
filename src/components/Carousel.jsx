import React, { useContext, useEffect, useRef } from 'react'
import { DataContext } from '../context/DataContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Category from './Category'

const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext)
  const swiperRef = useRef(null)

  useEffect(() => {
    fetchAllProducts()
  }, [])

  return (
    
    <div className="relative">

      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {data?.slice(0, 7)?.map((item) => (
          <SwiperSlide key={item.id}>
            
            <div className="w-full h-[600px] bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
              
              <div className="flex flex-col md:flex-row gap-10 justify-center items-center h-full px-6">

                {/*  Text Section */}
                <div className="space-y-5 text-center md:text-left">
                  <h3 className="text-red-500 font-semibold text-sm">
                    Powering Your World with the Best in Electronics
                  </h3>

                  <h1 className="text-3xl md:text-4xl font-bold uppercase text-white max-w-[500px]">
                    {item.title}
                  </h1>

                  <p className="text-gray-400 max-w-[500px]">
                    {item.description}
                  </p>

                  <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 py-2 cursor-pointer rounded-md mt-2 hover:scale-110 transition-all">
                    Shop Now
                  </button>
                </div>

                {/*  Image Section */}
                <div>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-[250px] md:w-[400px] rounded-full shadow-2xl hover:scale-105 transition duration-300"
                  />
                </div>

              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/*  Custom Navigation Buttons */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#f53347] text-white p-3 rounded-full text-xl hover:scale-110 transition cursor-pointer"
      >
        <AiOutlineArrowLeft />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#f53347] text-white p-3 rounded-full text-xl hover:scale-110 transition cursor-pointer"
      >
        <AiOutlineArrowRight />
      </button>

        <Category/>

    </div>
  )
}

export default Carousel