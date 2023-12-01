import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules'
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { stateContext } from '../../../context/stateContext';

const HData_1 = () => {
  const { ScreenSize } = useContext(stateContext);

    return (
        <div className=' flex justify-center' >
            <div className=' w-full  relative' >
                <Swiper
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    className=' xl:w-[100%]'
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{
                        el: '.swiper-pagination',
                        dynamicBullets: true,
                    }}
                >
                    <SwiperSlide>
                        <img src='https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            className=' w-full h-[300px] sm:h-[450px] lg:h-[500px] sm:object-center xl:w-full xl:h-[500px] object-cover' alt="" />
                    </SwiperSlide>
                    <SwiperSlide><img src="https://images.unsplash.com/photo-1561052967-61fc91e48d79?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className=' w-full h-[300px] sm:h-[450px] lg:h-[500px] sm:object-center xl:w-full xl:h-[500px] object-cover' alt="" /></SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.unsplash.com/photo-1542058186993-286fdce0b580?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        className=' w-full h-[300px] sm:h-[450px] lg:h-[500px] sm:object-center xl:w-full xl:h-[500px] object-cover' alt="" /></SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        className=' w-full h-[300px] sm:h-[450px] lg:h-[500px] sm:object-center xl:w-full xl:h-[500px] object-cover' alt="" /></SwiperSlide>
                </Swiper>
                <div className=' absolute xl:top-[50px] lg:top-[50px]  md:top-[50px] sm:top-[50px]  top-[40px] flex flex-col gap-2 z-10 xl:left-[30px] sm:left-[30px]  lg:left-[30px] md:left-[30px] left-[10px] ' >
                    <h1 className=' text-q xl:text-[4rem] lg:text-[4rem] md:text-[3rem] sm:text-[3rem] text-[1.5rem] w-[300px] xl:w-[600px] lg:w-[600px] md:w-[600px] sm:w-[600px]   leading-tight text-white font-bold' >When Surfing is EveryDay Fashion</h1>
                    <p className='  text-q xl:text-xl lg:text-xl md:text-xl sm:text-xl text-md font-serif w-[300px] xl:w-[500px] lg:w-[500px]  md:w-[500px] sm:w-[500px]  text-gray-200 ' >Find your contemporary style for trendy and stylish clothes, Maximize your appearance !</p>
                    <div className=' flex justify-start mt-4' >
                        <Link to={`/login`} >
                    <Button className='bg-hover-btn rounded-full xl:px-7 lg:px-7 px-4' variant="filled" size={`${ScreenSize >= 640  ? "xl" : "xs"}`} ><span className=' text-m font-serif xl:text-xl lg:text-xl md:text-xl sm:text-xl text-sm' >Shop Now</span></Button>
                        
                        </Link>
                    </div>
                </div>
                <div className=' swiper-pagination mt-4' ></div>
            </div>
        </div>
    )
}

export default HData_1
