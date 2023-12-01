import { Button } from '@mantine/core'
import React, { useContext } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'
import NotificationChild from './NotificationChild'
import Cookies from 'js-cookie'
import { stateContext } from '../../../context/stateContext'
import { useGetNewProductsQuery } from '../../../feature/Api/notiApi'
import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

const Notification = () => {
 
//  const {data} = useGetNewProductsQuery('getNewProducts')
//   const {articles} = data;

  const { ScreenSize } = useContext(stateContext);

  const token = Cookies.get("token");
  return (
    <div className=' lg:mt-28' >
      <div className={`flex flex-col justify-start mt-5  mx-2 ${ScreenSize >= 1024 ? " hidden" : " visible"}`} >
        <div className=' flex justify-center ' >
          <h1 className=' text-xl text-[#14213D] text-a ' >Notification</h1>
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

      <div className=' flex justify-center items-center' >
        <div className={`${token ? " visible" : " hidden"} xl:w-[600px] sm:w-[600px] `} >
          {/* {
            articles?.map((item, index) => {
              return (
                <NotificationChild  key={index} {...item} />
              )
            })
          } */}
        </div>
      </div>

      {/* Hidden AREA>>>>>>>> */}
      {/* you need to login */}
      <div className={` ${token ? "hidden" : "visible"} h-[300px] flex flex-col justify-center items-center`} >
        <h1 className=' text-a font-medium text-4xl' >You need to login</h1>
        <h1 className=' text-2xl font-medium' ><Link to={`/login`} ><span className=' font-thin text-a text-[#7B2CBF]' >Login</span></Link>now</h1>
      </div>
      <div className=' xl:flex xl:justify-center xl:items-center' >
      <div className={`${token ? " visible" : " hidden"} `} >
      <div className={`flex justify-center mt-28 lg:mt-56`} >
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium text-md"> Empty Notification!</span>
        </Alert>
      </div>
      </div>
      </div>
      <div className=' mt-[100px]' ></div>
    </div>
  )
}

export default Notification
