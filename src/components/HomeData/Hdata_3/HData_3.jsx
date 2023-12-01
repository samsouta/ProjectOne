import React, { useContext } from 'react'
// import required modules
import HData_3Img from './HData_3Img';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useGetProductsQuery } from '../../../feature/Api/dbApi';
import { stateContext } from '../../../context/stateContext';
const HData_3 = () => {
  // api fetching data
  const { data: products } = useGetProductsQuery('getProducts');
  // state context area ========
  // scree size
  const { ScreenSize } = useContext(stateContext);
  return (
    <div className=' flex justify-center ' >
      <div className=' flex flex-col xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[99%] xl:px-6 lg:px-6 md:px-6 sm:px-6 px-2' >
        <div className=' mt-10 flex flex-col gap-y-2 mb-2' >
          <h1 className=' text-2xl text-m font-semibold' >Our <span className=' text-[#FF4797]' >Popular</span> Products</h1>
          <p className=' text-q xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[400px] w-[300px] font-thin leading-tight' >The Best Spring Collection and The Summer Collection in the  world the best fall Collection...</p>
        </div>
        <div className=' mt-2 w-full' >
          <Swiper
            slidesPerView={ScreenSize > 1024 ? 5.1 : 3.5}
            spaceBetween={1}
            loop={true}
            
            navigation={true}
            modules={[ Navigation]}
            className={`mySwiper ${ScreenSize > 768 ? " visible" : " hidden"}`}
            
            
          >
            {
              products?.map((item, index) => {
                return (
                  <div key={index}>
                    <SwiperSlide >
                      <HData_3Img {...item} />
                    </SwiperSlide>
                  </div>
                )
              })
            }
          </Swiper>
          {/* // under screen 768  */}
          <Swiper
            slidesPerView={ScreenSize > 768 ? 3.5 : 2.5}
            spaceBetween={1}
            loop={true}
            
            navigation={true}
            modules={[ Navigation]}
            className={`mySwiper ${ScreenSize > 768 || ScreenSize < 640 ? " hidden" : ""}`}
            
          >
            {
              products?.map((item, index) => {
                return (
                  <div key={index}>
                    <SwiperSlide >
                      <HData_3Img {...item} />
                    </SwiperSlide>
                  </div>
                )
              })
            }
          </Swiper>
          {/* // under 640 screen */}
          <Swiper
            slidesPerView={ScreenSize > 500 ? 3.5 : 1.7}
            spaceBetween={1}
            loop={true}
            
            navigation={true}
            modules={[ Navigation]}
            className={`mySwiper ${ScreenSize >= 640 ? " hidden" : " visible"}`}
            
          >
            {
              products?.map((item, index) => {
                return (
                  <div key={index}>
                    <SwiperSlide >
                      <HData_3Img {...item} />
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
