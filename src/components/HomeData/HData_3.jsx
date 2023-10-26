import React, { useState } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import HData_3Img from './HData_3Child/HData_3Img';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/free-mode';


const HData_3 = () => {
  const [textI, setTextI] = useState([1, 2, 3, 4, 5, 6, 7])
  return (
    <div>
      <div className=' flex flex-col w-full mr-[200px' >
        <div className=' mt-10 flex justify-between items-center mx-2 mb-2' >
          <h1 className=' text-xl text-a' >Top Products</h1>
          <Link to={`/seeall`} >
            <button type="button" className="text-[#AC3CF6]  border border-[#AC3CF6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 ">See All</button>
          </Link>
        </div>
        <div className=' mt-2 w-full px-2 ' >
          <Swiper
            modules={[FreeMode]}
            freeMode={true}
            slidesPerView={2}
            spaceBetween={30}
            className=' w-full'
          
          >

            {
              textI?.map((item,index) => {
                return (
                  <div key={index}>
                    <SwiperSlide >
                      <HData_3Img />
                    </SwiperSlide>
                  </div>
                )
              })
            }

          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default HData_3
