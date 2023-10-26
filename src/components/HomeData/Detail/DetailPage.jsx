import { Button } from '@mantine/core'
import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'

const DetailPage = () => {
  return (
    <div className='' >
      <div className=' flex justify-start mt-8  mx-2' >
        <Link to={`/`} >
          <div>
            <Button variant="transparent" className='  p-UserP flex self-end' color="violet" radius="xs">
              <MdArrowBackIosNew className=' text-4xl' />
              <span className=' text-xl text-a font-medium' >Back</span>
            </Button>
          </div>
        </Link>
        <h1 className=' mx-auto text-2xl text-[#14213D] text-a ' >Detail</h1>
      </div>
      <div className=' flex justify-center items-center h-screen mx-3' >
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
          <img className="object-cover w-full rounded-t-lg h-96 " src="https://i.pinimg.com/564x/f1/86/33/f186339ffa2feb1d1633450cd5b761e9.jpg" alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <div className=' flex items-center' >
              <Button variant="filled" color="violet" size="md" radius="xl">Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
