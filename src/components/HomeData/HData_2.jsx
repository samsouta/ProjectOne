import React, { useState } from 'react'
import 'flowbite';
import HData_2Img from './HData_2Child/HData_2Img';

const HData_2 = () => {
    const [textImg, setTextImg] = useState([1,2,3])
    return (
        <div className=' flex flex-col w-full' >
            <div className=' mt-10 flex items-center mx-2 mb-2' >
                <h1 className=' text-xl text-a' >Categories</h1>
            </div>
            <div className=' w-full flex gap-2 justify-center' >
            {
                textImg?.map(item =>{
                    return(
                        <HData_2Img {...item} />
                    )
                })
            }
            </div>
        </div>
    )
}

export default HData_2
