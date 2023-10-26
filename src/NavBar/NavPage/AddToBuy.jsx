import { Button } from '@mantine/core'
import React, { useState } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'
import AddToCard from './AddToBuyChild/AddToCard'

const AddToBuy = () => {
  const[dataTest,setDataTest] = useState([1,2,3,4,5]);
  return (
    <div className=' h-[110vh]' >
       <div className=' flex justify-start mt-8  mx-2' >
        <Link to={`/`} >
          <div>
            <Button variant="transparent" className='  p-UserP flex self-end' color="violet" radius="xs">
              <MdArrowBackIosNew className=' text-4xl' />
              <span className=' text-xl text-a font-medium' >Back</span>
            </Button>
          </div>
        </Link>
        <h1 className=' mx-auto text-2xl text-[#14213D] text-a ' >Add To Card</h1>
      </div>
      {/* Data */}
      <div className=' mt-14' >
        {
            dataTest?.map((item,index)=>{
              return(
                <AddToCard key={index}/>
              )
            })
        }
      </div>
      {/* footer */}
        <div className=' mt-7 w-full flex justify-center items-center bg-[#E5E5E5] shadow-xl rounded-xl' >
          <div className=' flex justify-between items-center w-[350px] p-5 ' >
            <h1 className=' text-a font-normal text-2xl' >Total : </h1>
            <span className=' text-b font-thin text-xl' >$2500</span>
          </div>
        </div>
    </div>
  )
}

export default AddToBuy
