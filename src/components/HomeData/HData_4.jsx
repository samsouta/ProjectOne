import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import HData_4Card from './HData_4Child/HData_4Card';
const HData_4 = () => {
    const [textC,setTextC] = useState([1,2,3,4,5,6,7,8,9,10])
    return (
        <div>
            <div>
            <div className=' mt-10 flex justify-between items-center mx-2 mb-2' >
                <h1 className=' text-xl text-a' >Best Collection</h1>
            </div>
            <Swiper
                modules={FreeMode}
                spaceBetween={10}
                slidesPerView={4}
                className=' ml-2'
                freeMode={true}
            >
                <SwiperSlide className=''>
                        <button type="button" className="text-[#7209B7] min-h-[45px] w-full hover:text-white border border-[#7209B7] hover:bg-[#7209B7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-b rounded-lg text-sm px-5 py-1.5 text-center "> All </button>
                </SwiperSlide>
                <SwiperSlide className=''>
                        <button type="button" className="text-[#7209B7] min-h-[45px] w-full hover:text-white border border-[#7209B7] hover:bg-[#7209B7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-b rounded-lg text-xs px-5 py-1.5 text-center "> Woman Fashion </button>
                </SwiperSlide>
                <SwiperSlide className=''>
                        <button type="button" className="text-[#7209B7] min-h-[45px] w-full hover:text-white border border-[#7209B7] hover:bg-[#7209B7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-b rounded-lg text-xs px-5 py-1.5 text-center "> Man Fashion </button>
                </SwiperSlide>
                <SwiperSlide className=''>
                        <button type="button" className="text-[#7209B7] min-h-[45px] w-full hover:text-white border border-[#7209B7] hover:bg-[#7209B7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-b rounded-lg text-xs px-5 py-1.5 text-center "> Boy Fashion </button>
                </SwiperSlide>
                <SwiperSlide className=''>
                        <button type="button" className="text-[#7209B7] min-h-[45px] w-full hover:text-white border border-[#7209B7] hover:bg-[#7209B7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-b rounded-lg text-xs px-5 py-1.5 text-center "> Girl Fashion </button>
                </SwiperSlide>
            </Swiper>
        </div>
            <div className=' flex flex-wrap gap-y-16 justify-center items-center' >
                {
                    textC?.map((item)=>{
                        return(
                            <div key={item} >
                                <HData_4Card/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HData_4
