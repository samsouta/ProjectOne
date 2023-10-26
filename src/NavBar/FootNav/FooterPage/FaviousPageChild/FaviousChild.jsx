import React from 'react'
import {AiFillHeart} from 'react-icons/ai'


const FaviousChild = () => {
  return (
    <div>
        <div className=' mt-4 mx-2 relative' >
        <div className="flex w-full h-[100px] items-center overflow-hidden border border-gray-200 rounded-xl shadow hover:bg-gray-100">
          <img className="object-cover w-[100px] rounded-t-lg h-full mr-16" src="https://i.pinimg.com/564x/bb/24/69/bb2469f3f0e61b4aa9e40c938a101d13.jpg" alt="" />
          <div className="flex flex-col w-full">
            <h5 className="mb-2 text-x w-[250px] text-a font-bold  text-gray-900 truncate ...">Noteworthy </h5>
            <p className="mb-3 text-b text-lg font-normal text-gray-700 ">Price : $ 500</p>
          </div>
          {/* icon */}
          <AiFillHeart className=' absolute text-[#7B2CBF] top-1 right-1 text-3xl' />  
        </div>
      </div>
    </div>
  )
}

export default FaviousChild
