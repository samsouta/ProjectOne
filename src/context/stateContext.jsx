import { data } from "autoprefixer";
import React, { createContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";


export const stateContext = createContext();


export const StateContextProvider = ({ children }) => {
  // media query screen size
  const [ScreenSize, setScreenSize] = useState(window.innerWidth)
  const [showNavBar, setShowNavBar] = useState(false);
  const [showPcNav, setShowPcNav] = useState(true);
  const [shopAnimate, setShopAnimate] = useState(false);
  const [favAnimate, setFavAnimate] = useState(false);
  const [searchHideNav, setSearchHideNav] = useState(false)
  const [showLogInSuccess, setShowLogInSuccess] = useState(false)
  const [isShowBage, setIsShowBage] = useState(false)
  const { card } = useSelector((state) => state.addtocard)
  const [errReq, setErrReq] = React.useState(false)


  // for add to card working 
  useEffect(() => {
    if (card === 0) {
      setIsShowBage(false)
    } else {
      setIsShowBage(true)
    }
  }, [card])

  // media query screen size
  const mediaHandalar = () => {
    setScreenSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", mediaHandalar)
  }, [setScreenSize])

  const data = {
    shopAnimate, setShopAnimate, favAnimate, setFavAnimate, ScreenSize, showPcNav, setShowPcNav,
    searchHideNav, setSearchHideNav, showNavBar, setShowNavBar, showLogInSuccess, setShowLogInSuccess,
   isShowBage,errReq, setErrReq


  }
  return (
    <stateContext.Provider value={data} >
      {children}
    </stateContext.Provider>

  )
}