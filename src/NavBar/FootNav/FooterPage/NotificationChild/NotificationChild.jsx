import React, { useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import { RxCrossCircled } from 'react-icons/rx'

const NotificationChild = ({ isOpen,notiFun }) => {
 
    return (
        <div>
            <div className=' mt-6 flex justify-center' >
                <div onClick={notiFun} className="w-full mx-6 p-4 relative text-gray-500 bg-white rounded-t-lg shadow dark:bg-gray-800" role="alert">
                    <div className="flex">
                        <img className="w-8 h-8 rounded-full shadow-lg" src="https://i.pinimg.com/564x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg" alt="Jese Leos image" />
                        <div className="ml-3 text-sm font-normal">
                            <span className="mb-1 text-sm font-semibold text-gray-900">Amazon</span>
                            <div className="mb-2 text-sm font-normal"> item new design is coming now , buy it?</div>
                            <RxCrossCircled className=' absolute top-[-13px] right-[-13px] text-red-600 text-3xl' />
                        </div>
                        <button type="button" className="ml-auto -mx-1.5 my-auto justify-center items-center flex-shrink-0 text-gray-400 rounded-lg inline-flex h-9 w-9 ">
                            <MdKeyboardArrowUp className={`${isOpen ? " hidden" : "visible"} w-full h-full`} />
                            <MdKeyboardArrowDown className={`${isOpen ? "visible" : "hidden"} w-full h-full `} />
                        </button>
                    </div>
                </div>
            </div>
            {/* noticard slider */}
            <div className='' >
                <div className={` ${isOpen ? " visible animate__animated animate__fadeIn " : "hidden animate__animated animate__fadeOut"} overflow-hidden bg-white mx-6 border border-gray-200 rounded-b-lg shadow`} >
                    <div>
                        <img className=" w-full h-[400px] " src="https://i.pinimg.com/564x/ea/70/54/ea7054a35a7c78419d3ea02971f76999.jpg" alt="" />
                    </div>
                    <div className="p-5">
                        <p className="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NotificationChild
