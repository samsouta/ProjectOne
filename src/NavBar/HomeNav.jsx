import React, { useRef, useState } from 'react'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { FiShoppingCart } from 'react-icons/fi'
import { BiSearch, BiSolidHelpCircle, BiLogOut } from 'react-icons/bi'
import { AiTwotoneSetting, AiTwotoneCustomerService } from 'react-icons/ai'
import { FiAlertCircle } from "react-icons/fi"
import { Link } from 'react-router-dom'
import { Input } from '@mantine/core';
import { useSelector } from 'react-redux'
import { useLogoutMutation } from '../feature/Api/authApi'
import { Loader } from '@mantine/core';

const HomeNav = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const { token } = useSelector((state) => state.auth);
  const [logout, { isLoading }] = useLogoutMutation();

  const menuFun = () => {
    setMenuToggle(true)
  }
  const searchFun = () => {
    setIsOpenSearch(true)
  }
  const buyFun = () => {

  }
  const LogoutHandarler = async () => {
    try {
      if (isLoading) {
        setShowLoading(true)
        console.log('load')
      }
      const userToken = await logout(token)
      console.log(userToken)
    } catch (error) {
      console.log(error)
    }
  }
  const sideBarRef = useRef();
  const menuProfileRef = useRef();
  const searchIconRef = useRef();
  const searchInputRef = useRef();
  window.addEventListener('click', (e) => {
    if (e.target !== sideBarRef.current && e.target !== menuProfileRef.current) {
      setMenuToggle(false)
    }
  })
  window.addEventListener('click', (e) => {
    if (e.target !== searchInputRef.current && e.target !== searchIconRef.current) {
      setIsOpenSearch(false)
    }
  })
  return (
    <div className=' c-HomeContainer w-full' >
      {/* loading */}
      <div className={`h-screen flex justify-center items-center ${showLoading ? " visible" : " hidden"} `} >
        <div className=' absolute rounded-lg z-50 bg-[#E5E5E5] p-[50px]' >
          <Loader color="violet" type="bars" />
        </div>
      </div>
      <div className=' relative mt-3 flex justify-between ' >
        <div ref={menuProfileRef} onClick={menuFun} className=' absolute px-6 py-6 left-1' ></div>
        <HiOutlineMenuAlt2 className=' text-4xl ml-2' />

        <div className=' w-[100px]  mr-3 flex justify-between items-center' >
          <Link to={`/addtocard`} >
            <div onClick={buyFun} className=' relative' >
              <span className=" absolute bottom-5 left-5 inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-white bg-[#7B2CBF] rounded-full">
                2
              </span>
              <FiShoppingCart className=" text-3xl" />
            </div>
          </Link>
          <div onClick={searchFun} >
            <div ref={searchIconRef} onClick={searchFun} className=' absolute  px-6 py-5 top-0 right-1' ></div>
            <BiSearch className=' text-3xl' />
          </div>
        </div>
      </div>
      {/* searchbar */}
      <div className={`${isOpenSearch ? "visible" : "hidden"}  `} >
        <div className=' absolute top-2 w-full' >
          <Input ref={searchInputRef} size='md' className=' mx-2' radius="xl" placeholder="Search" />
        </div>
      </div>
      {/* Memu side bar */}
      <div ref={sideBarRef} className={` ${menuToggle ? "visible" : "hidden"} absolute top-0 bg-[#E5E5E5] w-[250px] h-[100vh]`} >
        {/* useProfile */}
        <div>
          <div className={`${token ? " hidden" : " visible"}   flex flex-col justify-center items-center mt-10`}>
            <Link to={`/login`} >
              <button type="button" className="text-[#7B2CBF] hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Login</button>
            </Link>
            <h1 className=' text-[#14213D] flex flex-col justify-center items-center ' >If you don't have account <span className=' text-[#7B2CBF]' >Create Account</span></h1>
          </div>
        </div>
        <div className={`${token ? " visible" : " hidden"} absolute top-10 w-full flex items-center `}>
          <div className='' >
            <img className=' w-[50px] ml-3  h-[50px] object-cover rounded-full object-bottom' src="https://i.pinimg.com/564x/4c/d5/85/4cd58505cbacd313c24c8082efa581ad.jpg" alt="" />
          </div>

          <div className=' ml-7' >
            <h1 className=' text-a text-xl font-extralight  w-[150px] truncate ...' >RoRonoa Zoro </h1>
          </div>
        </div>

        <div className={` ${token ? " visible" : " hidden"}  absolute top-40 w-full`} >
          <div className=' flex items-center gap-x-4 mx-3 ' >
            <AiTwotoneSetting className=' text-3xl' />
            <span className=' text-b font-medium text-lg' >Setting</span>
          </div>
        </div>

        <div className={` ${token ? " visible" : " hidden"} absolute top-56 w-full`} >
          <div className=' flex items-center gap-x-4 mx-3 ' >
            <BiSolidHelpCircle className=' text-3xl' />
            <span className=' text-b font-medium text-lg' >Help & Report</span>
          </div>
        </div>

        <div className={`absolute top-72 w-full ${token ? " visible" : " hidden"}`} >
          <div className=' flex items-center gap-x-4 mx-3 ' >
            <AiTwotoneCustomerService className=' text-3xl' />
            <span className=' text-b font-medium text-lg' >Coustom</span>
          </div>
        </div>

        <div className={`absolute top-[350px] w-full ${token ? " visible" : " hidden"}`} >
          <div className=' flex items-center gap-x-4 mx-3 ' >
            <FiAlertCircle className=' text-3xl' />
            <span className=' text-b font-medium text-lg' >About</span>
          </div>
        </div>
        <div className={` absolute bottom-[100px] w-full flex justify-center ${token ? " visible" : " hidden"}`}>
          <button onClick={LogoutHandarler} type="button" className="text-white text-b bg-[#7209B7] hover:bg-violet-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-3 py-1.5 text-center inline-flex items-center mr-2">
            <BiLogOut className=' text-xl mr-2 ' />
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeNav
