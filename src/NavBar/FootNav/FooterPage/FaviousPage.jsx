import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mantine/core';
import { MdArrowBackIosNew } from 'react-icons/md'
import FaviousChild from './FaviousPageChild/FaviousChild';
import { useSelector } from 'react-redux';
import { stringify } from 'postcss';
const FaviousPage = () => {
  const [textData, setTextData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  // const [isLogin,setIsLogin] = useState(false);
  const {token} = useSelector((state)=> state.auth);

  return (
    <div className={`${token ? "h-[160vh]" : null}`} >
      <div className=' flex justify-start mt-8  mx-2' >
        <Link to={`/`} >
          <div>
            <Button variant="transparent" className='  p-UserP flex self-end' color="violet" radius="xs">
              <MdArrowBackIosNew className=' text-4xl' />
              <span className=' text-xl text-a font-medium' >Back</span>
            </Button>
          </div>
        </Link>
        <h1 className=' mx-auto text-2xl text-[#14213D] text-a ' >Liked Short</h1>
      </div>

      <div className={`mt-20 ${token ? "visible" : "hidden"}`}>
        {
          textData?.map((item) => {
            return (
              <FaviousChild key={item} />
            )
          })
        }
      </div>
      {/* you need to login */}
      <div className={` ${token ? "hidden" : "visible" } h-screen flex flex-col justify-center items-center`} >
        <h1 className=' text-a font-medium text-4xl' >You need to login</h1>
        <h1 className=' text-2xl font-medium' ><Link to={`/login`} ><span className=' font-thin text-a text-[#7B2CBF]' >Login</span></Link>now</h1>
      </div>
    </div>
  )
}

export default FaviousPage
