import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'
import h1 from '../../assets/images/HomeImage/Hdata_1img/h1.jpeg'
import h2 from '../../assets/images/HomeImage/Hdata_1img/h2.jpeg'
import h3 from '../../assets/images/HomeImage/Hdata_1img/h3.jpeg'
import h4 from '../../assets/images/HomeImage/Hdata_1img/h4.jpeg'

const HData_1 = () => {
    return (
        <div className=' flex justify-center mr-3 ml-3' >
            <div className=' w-full relative' >
                <Swiper
                    modules={[Pagination]}
                    className=' rounded-2xl relative'
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{el: '.swiper-pagination',
                    dynamicBullets: true,
                }}
                >
                    <SwiperSlide><img src={h1} className=' w-full h-[300px] object-cover' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={h2} className=' w-full h-[300px] object-cover' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={h3} className=' w-full h-[300px] object-cover' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={h4} className=' w-full h-[300px] object-cover' alt="" /></SwiperSlide>
                </Swiper>
                <div className=' swiper-pagination' ></div>
            </div>
        </div>
    )
}

export default HData_1
