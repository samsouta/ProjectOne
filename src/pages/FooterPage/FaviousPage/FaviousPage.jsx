import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mantine/core';
import { MdArrowBackIosNew } from 'react-icons/md'
import FaviousChild from './FaviousChild';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { stateContext } from '../../../context/stateContext';
import { HiInformationCircle } from 'react-icons/hi';
import { Alert } from 'flowbite-react';
const FaviousPage = () => {
  const { favItems, saved } = useSelector((state) => state.fav);
  const { ScreenSize } = useContext(stateContext);

  const token = Cookies.get("token");
  return (
    <div>
      <div className={`flex flex-col justify-start mt-5  mx-2 ${ScreenSize >= 1024 ? " hidden" : " visible"}`} >
        <div className=' flex justify-center ' >
          <h1 className=' text-xl text-[#14213D] text-a ' >Saved</h1>
        </div>
        <Link to={`/`} >
          <div className=' mt' >
            <Button variant="transparent" className='  p-UserP flex self-end' color="violet" radius="xs">
              <MdArrowBackIosNew className=' text-xl' />
              <span className=' text-lg text-a font-medium' >Back</span>
            </Button>
          </div>
        </Link>
      </div>
      <div className=' xl:flex xl:justify-center lg:flex lg:justify-center' >
      <div className={`mt-20 xl:px-44 xl:w-[1000px] lg:w-[1000px] lg:mt-32 ${token ? "visible" : "hidden"}`}>
        {
          favItems?.map((item) => {
            return (
              <FaviousChild key={item.id} {...item} />
            )
          })
        }
      </div>
      </div>
      {/* hidden area >>>>>>>>>>*/}
      {/* not saved */}
      <div className=' xl:flex xl:justify-center xl:items-center' >
      <div className={`${token ? " visible" : " hidden"} `} >
      <div className={`flex justify-center mt-28 lg:mt-56 ${saved === 0 ? " visible" : " hidden"}`} >
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium text-md">Item Not Saved!</span>
        </Alert>
      </div>
      </div>
      </div>
      {/* you need to login */}
      <div className={` ${token ? "hidden" : "visible"} h-[300px] flex flex-col justify-center items-center`} >
        <h1 className=' text-a font-medium text-4xl' >You need to login</h1>
        <h1 className=' text-2xl font-medium' ><Link to={`/login`} ><span className=' font-thin text-a text-[#7B2CBF]' >Login</span></Link>now</h1>
      </div>
    </div>
  )
}

export default FaviousPage
