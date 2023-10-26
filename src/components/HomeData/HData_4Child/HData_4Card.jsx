import React from 'react'
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const HData_4Card = () => {
    const nav = useNavigate();
    const detail = ()=>{
        nav(`/detail`)
    }
  return (
    <div>
      <div onClick={detail} className=' relative w-[180px] h-[250px] border rounded-xl mt-6 mx-2' > 
        <img className=' w-full h-full rounded-xl' src="https://i.pinimg.com/564x/22/4b/0d/224b0d242d4d2e2ac856f95ee70948a6.jpg" alt="" />
        <div>
            <h1 className=' mt-2 text-a font-medium text-xl' >Title</h1>
            <span className=' text-b text-gray-400 font-mono' >Price- $100</span>
        </div>
        {/* icon */}
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
    </div>
  )
}

export default HData_4Card
