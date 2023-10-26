import React from 'react'
import {RxCrossCircled} from 'react-icons/rx'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

const AddToCard = () => {
    return (
        <div>
            <div className=' mt-4 mx-10 shadow-2xl relative' >
                <div className="flex w-full h-[100px] items-center overflow-hidden border border-gray-200 rounded-xl shadow hover:bg-gray-100">
                    <img className="object-cover w-[100px] rounded-t-lg h-full mr-16" src="https://i.pinimg.com/564x/bb/24/69/bb2469f3f0e61b4aa9e40c938a101d13.jpg" alt="" />
                    <div className="flex justify-start h-full mt-1 flex-col w-full">
                        <h5 className="mb-1 text-x w-[250px] text-a font-bold  text-gray-900 truncate ...">Noteworthy </h5>
                        <p className="mb-3 text-b text-lg font-normal text-gray-700 ">Price : $ 500</p>
                    </div>
                    {/* icon */}
                    <RxCrossCircled className=' absolute top-1 right-1 text-2xl text-red-400' />
                    <div className=' flex justify-end gap-x-40 w-full items-cente absolute bottom-1' >
                        <div className=' flex justify-between px-3 items-center w-[250px]' > 
                        <AiOutlineMinus className=' text-4xl' />
                        <div className='text-2xl flex justify-center items-center font-medium w-[250px] text-a'>1</div>
                        <AiOutlinePlus className=' text-4xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToCard
