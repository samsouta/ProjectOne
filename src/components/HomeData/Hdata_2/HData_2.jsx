import React, { useContext } from 'react'
import { Button } from '@mantine/core'
import { stateContext } from '../../../context/stateContext';
import { Link } from '@mui/material';
const HData_2 = () => {
    const { ScreenSize } = useContext(stateContext);

    return (
        <div className=' mt-14 md:p-5 mx-2 flex justify-center' >
            <div className=' grid grid-cols-3 gap-2 xl:w-[90%]  lg:w-[90%]  md:w-[90%]  sm:w-[90%] w-[99%] shadow-sm' >
                <div className=' col-span-1 relative' >
                    <img className=' w-full xl:h-[500px] md:h-[400px] sm:h-[300px] h-[200px]' src="https://i.pinimg.com/474x/7c/05/d3/7c05d3133dbd3a30d0a5bd68d8a8a193.jpg" alt="" />
                    <p className=' absolute xl:bottom-16 lg:bottom-16 md:bottom-16 sm:bottom-16 bottom-10 text-white text-q xl:text-xl lg:text-xl md:text-xl sm:text-xl text-sm font-bold xl:left-3 lg:left-3 md:left-3 sm:left-3 left-1 z-10' >New Realese</p>
                    <div className=' flex  xl:gap-3 lg:gap-3 md:gap-3 sm:gap-3 gap-1 absolute xl:bottom-5 lg:bottom-5 md:bottom-5 sm:bottom-5 bottom-2    xl:left-3 lg:left-3 md:left-3 sm:left-3 ' >
                        <a href='https://assemblesg.com/?gclid=Cj0KCQiAgqGrBhDtARIsAM5s0_nfiXWD5ET8R7HWDR0wFRt2jWWIXGuwaeOL0PRoBDaNXuiqRvlA3dEaArpqEALw_wcB' >
                            <Button variant="filled" className=' text-m btn-VA' size='xs' radius="xl"><span className={`${ScreenSize > 640 ? "sm" : "text-[10px]"} text-m`} >Men</span></Button>
                        </a>
                        <a href="https://www.hellomagazine.com/fashion/news/20220304134360/best-suits-for-women/">
                            <Button variant="filled" className=' text-m btn-VA' size='xs' radius="xl"><span className={`${ScreenSize > 640 ? "sm" : "text-[10px]"} text-m`} >Girl</span></Button>

                        </a>
                    </div>
                </div>
                <div className=' col-span-1 grid grid-rows-2 gap-2' >
                    <div className=' relative' >
                        <div className=' absolute xl:bottom-6 lg:bottom-6 md:bottom-6 sm:bottom-6 bottom-1 xl:left-6 lg:left-6 md:left-6 sm:left-6 left-1 z-10' >
                            <p className=' text-white text-q xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-sm font-bold ' >Fresh Look</p>
                            <p className='  text-white text-m xl:text-md lg:text-md md:text-md sm:text-md text-sm font-serif' >Teens Collection</p>

                        </div>
                        <img className=' row-span-1 w-full  xl:h-[245px] md:h-[195px] sm:h-[145px] h-[95px]' src="https://i.pinimg.com/474x/5d/2e/e2/5d2ee25ec835e72cda808eb1a082bb57.jpg" alt="" />
                    </div>
                    <div className=' relative' >
                        <div className=' absolute xl:bottom-6 lg:bottom-6 md:bottom-6 sm:bottom-6 bottom-1 xl:left-6 lg:left-6 md:left-6 sm:left-6 left-1 z-10' >
                            <p className=' text-white text-q xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-sm font-bold' >Beauty Comfy</p>
                            <p className='  text-white text-m xl:text-md lg:text-md md:text-md sm:text-md text-sm font-serif' >Women Collection</p>

                        </div>
                        <img className=' row-span-1 w-full xl:h-[245px] md:h-[195px] sm:h-[145px] h-[95px]' src="https://i.pinimg.com/564x/87/e7/55/87e755b1cce5b0c3a22b1ec4d468aba7.jpg" alt="" />
                    </div>
                </div>
                <div className=' col-span-1 relative' >
                    <p className=' absolute xl:bottom-16 lg:bottom-16 md:bottom-16 sm:bottom-16 bottom-10  xl:text-xl lg:text-xl md:text-xl sm:text-xl text-sm text-white text-q font-bold left-3 z-10' >Gentle Style</p>
                    <div className=' flex gap-3 absolute  xl:bottom-5 lg:bottom-5 md:bottom-5 sm:bottom-5 bottom-2 xl:left-3 lg:left-3 md:left-3 sm:left-3 left-1' >
                        <a href="https://www.made-suits.com/tailor-made-suits-bespoke-suits-singapore?gad_source=1&gclid=Cj0KCQiAgqGrBhDtARIsAM5s0_kDHh5ifGNfPeUGEaednoLxhWj2RcfAKRwh4UGaM_0FfkeYji6hQDgaAnmwEALw_wcB">
                        <Button variant="filled" className=' text-m btn-VA' size='xs' radius="xl"><span className={`${ScreenSize > 640 ? "sm" : "text-[10px]"} text-m`} >More</span></Button>
                        </a>
                    </div>
                    <img className='  w-full xl:h-[500px] md:h-[400px] sm:h-[300px] h-[200px]' src="https://i.pinimg.com/474x/b6/0d/46/b60d462fc9c18886d1ab68b5c6357e28.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HData_2
