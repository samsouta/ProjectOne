import React, { useEffect, useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsFillHeartFill, BsFillBellFill, BsPersonFill } from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const HomeFootNav = () => {
  const [isActiveHome, setIsActiveHome] = useState(false)
  const [isActiveFav, setIsActiveFav] = useState(false)
  const [isActiveNoti, setIsActiveNoti] = useState(false)
  const [isActiveUserP, setIsActiveUserP] = useState(false)
  const location = useLocation();
  const nav = useNavigate();
  useEffect(() => {
    if (location.pathname === '/') {
      setIsActiveHome(true)
      setIsActiveFav(false)
      setIsActiveNoti(false)
      setIsActiveUserP(false)
    }
    if (location.pathname === '/favious') {
      setIsActiveHome(false)
      setIsActiveFav(true)
      setIsActiveNoti(false)
      setIsActiveUserP(false)
    }
    if (location.pathname === '/notification') {
      setIsActiveHome(false)
      setIsActiveFav(false)
      setIsActiveNoti(true)
      setIsActiveUserP(false)
    }
    if (location.pathname === '/userprofile') {
      setIsActiveHome(false)
      setIsActiveFav(false)
      setIsActiveNoti(false)
      setIsActiveUserP(true)
    }

  }, [location])
  const homeFun = () => {
    setIsActiveHome(true)
    setIsActiveFav(false)
    setIsActiveNoti(false)
    setIsActiveUserP(false)
    nav(`/`)
  }
  const faviousFun = () => {
    setIsActiveHome(false)
    setIsActiveFav(true)
    setIsActiveNoti(false)
    setIsActiveUserP(false)
    nav(`/favious`)
  }
  const notiFun = () => {
    setIsActiveHome(false)
    setIsActiveFav(false)
    setIsActiveNoti(true)
    setIsActiveUserP(false)
    nav(`/notification`)
  }
  const userProfileFun = () => {
    setIsActiveHome(false)
    setIsActiveFav(false)
    setIsActiveNoti(false)
    setIsActiveUserP(true)
    nav(`/userprofile`)
  }
  return (
    <div>
      <div className=' c-container h-[60px] flex items-center justify-center rounded-t-3xl' >
        <footer className=' w-full' >
          <div className=' w-full flex justify-evenly items-center gap-10' >
            <div onClick={homeFun} >
              <AiFillHome className={` ${isActiveHome ? 'text-[#14213D]' : 'text-white'} text-3xl   `} />
            </div>
            <div onClick={faviousFun}>
              <BsFillHeartFill className={`${isActiveFav ? 'text-[#14213D]' : 'text-white'} text-3xl   `} />
            </div>
            <div onClick={notiFun}>
              <BsFillBellFill className={`${isActiveNoti ? 'text-[#14213D]' : 'text-white'} text-3xl   `} />
            </div>
            <div onClick={userProfileFun} >
              <BsPersonFill className={`${isActiveUserP ? 'text-[#14213D]' : 'text-white'} text-3xl   `} />
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default HomeFootNav
