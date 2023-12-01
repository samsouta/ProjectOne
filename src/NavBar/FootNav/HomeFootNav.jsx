import React, { useContext, useEffect, useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsFillHeartFill, BsFillBellFill, BsPersonFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { stateContext } from '../../context/stateContext'

const HomeFootNav = () => {
  const [isActiveHome, setIsActiveHome] = useState(false)
  const [isActiveFav, setIsActiveFav] = useState(false)
  const [isActiveNoti, setIsActiveNoti] = useState(false)
  const [isActiveUserP, setIsActiveUserP] = useState(false)
  const [favAnimateBage,setFavAnimateBage] = useState(false)
  const {favAnimate,setSearchHideNav,ScreenSize } = useContext(stateContext);
  const {saved} = useSelector((state) => state.fav);  
  const location = useLocation();
  const nav = useNavigate();
  useEffect(()=>{
    if(saved === 0) {
      setFavAnimateBage(false)
    }else {
      setFavAnimateBage(true)
    }

  },[saved])
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
    setSearchHideNav(false)
    
    nav(`/`)
  }
  const faviousFun = () => {
    setIsActiveHome(false)
    setIsActiveFav(true)
    setIsActiveNoti(false)
    setIsActiveUserP(false)
    setSearchHideNav(false)
    nav(`/favious`)
  }
  const notiFun = () => {
    setIsActiveHome(false)
    setIsActiveFav(false)
    setIsActiveNoti(true)
    setIsActiveUserP(false)
    setSearchHideNav(false)
    nav(`/notification`)
  }
  const userProfileFun = () => {
    setIsActiveHome(false)
    setIsActiveFav(false)
    setIsActiveNoti(false)
    setIsActiveUserP(true)
    setSearchHideNav(false)
    nav(`/error`)
  }
  return (
    <div className={`${ ScreenSize >= 1024 ? " hidden" : " visible"}`} >
      <div className=' c-container  bg-violet-500 h-[50px] flex items-center justify-center rounded-t-3xl' >
        <footer className=' w-full' >
          <div className=' w-full flex justify-evenly items-center gap-10' >
            <div onClick={homeFun} >
              <AiFillHome className={` ${isActiveHome ? 'text-[#14213D]' : 'text-white'} text-xl   `} />
            </div>
            <div onClick={faviousFun} className={`${favAnimate ? "animate__animated animate__bounce " : ""} relative`} >
              <BsFillHeartFill className={`${isActiveFav ? 'text-[#14213D]' : 'text-white'} text-xl ${favAnimate ? " text-red" : ""}   `} />
              <span className={` ${favAnimateBage ? " block" : " hidden"} bg-red-800 absolute bottom-5 left-3 text-white text-xs font-medium px-1.5 rounded-full`}>{saved}</span>

            </div>
            <div onClick={notiFun} >
              <BsFillBellFill className={`${isActiveNoti ? 'text-[#14213D]' : 'text-white'} text-xl   `} />
            </div>
            <div onClick={userProfileFun} >
              <BsPersonFill className={`${isActiveUserP ? 'text-[#14213D]' : 'text-white'} text-xl   `} />
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default HomeFootNav
