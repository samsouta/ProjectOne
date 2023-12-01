import React from 'react'
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const SeeAllCard = (props) => {
    const {title,img,price,id} = props
    const nav = useNavigate();
    const detailFun = ()=>{
        nav(`/detail/${id}`)
    }
  return (
    <div>
    <div onClick={detailFun} className=' relative w-[200px] h-[250px]' >
        <div className=' w-full h-full border rounded-xl relative' >
            <img className=' rounded-xl h-full w-full' src={img} alt="" />
            <div className=' flex  w-full justify-between absolute bottom-0' >
                <div className=' relative w-[100px] ' >
                <div className='bg-white rounded-bl-lg rounded-tr-lg opacity-40 py-6 px-6' ></div>
                    <span className=' absolute top-3 left-1 text-a font-medium' size='md' color="violet">Add To Card</span>
                </div>
                <div className=' relative' >
                    <div className='bg-white rounded-tl-lg rounded-br-lg opacity-40 py-6 px-6' ></div>
                    <div className=' absolute top-0 right-0 flex justify-center items-center w-full h-full' >
                        <AiOutlineHeart className=' text-xl' />
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div className=' flex flex-col items-center justify-center mt-3 w-full ' >
        <h1 className=' text-xl text-b font-medium' >{title}</h1>
        <span className=' text-lg text-b font-thin' > $ {price}</span>
    </div>
</div>
  )
}

export default SeeAllCard
