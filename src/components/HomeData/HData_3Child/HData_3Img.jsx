import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineHeart } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

const HData_3Img = () => {
    const nav = useNavigate()
    const detail = () =>{
        nav(`/detail`)
    }
    return (
            <div onClick={detail} className=' relative w-full' >
            <div className=' w-full h-full border rounded-xl relative' >
                <img className=' rounded-xl h-full w-full' src="https://i.pinimg.com/564x/90/93/4b/90934bb981337d0f328b942585559d9d.jpg" alt="" />
                <div className='' >
                    <div className=' absolute flex flex-col gap-1 top-0 right-0 ' >
                        <div className=' relative' >
                            <div className=' bg-white opacity-40 py-6 px-6 rounded-t-lg' ></div>
                            <div className=' absolute top-0 right-0 flex justify-center items-center w-full h-full' >
                                <AiOutlinePlus className=' text-xl' />
                            </div>
                        </div>
                        <div className=' relative' >
                            <div className='bg-white opacity-40 py-6 px-6 rounded-bl-lg' ></div>
                            <div className=' absolute top-0 right-0 flex justify-center items-center w-full h-full' >
                                <AiOutlineMinus className=' text-xl' />
                            </div>
                        </div>
                    </div>
                    <div className=' absolute bottom-0 right-0' >
                        <div className=' relative' >
                            <div className='bg-white rounded-br-lg opacity-40 py-6 px-6' ></div>
                            <div className=' absolute top-0 right-0 flex justify-center items-center w-full h-full' >
                                <AiOutlineHeart className=' text-xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col items-center justify-center mt-3 w-full ' >
                <h1 className=' text-xl text-b font-medium' >design 1</h1>
                <span className=' text-lg text-b font-thin' >price : $100</span>
            </div>
        </div>
    )
}

export default HData_3Img
