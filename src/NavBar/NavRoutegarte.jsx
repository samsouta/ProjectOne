import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const NavRoutegarte = ({children}) => {
    const location = useLocation();
    const [showNavBar,setShowNavBar] = useState(false);

    useEffect(()=>{
        if(location.pathname === '/userprofile' || location.pathname === '/favious' || location.pathname === '/notification' || location.pathname === '/addtocard' || location.pathname === '/seeall' ||location.pathname === '/addtocard' || location.pathname === '/detail' || location.pathname === '/login' || location.pathname === '/resgiter'    ){
            setShowNavBar(false)
        } else {
            setShowNavBar(true)
        }
    },[location])
  return (
    <div>
        {
            showNavBar && children
        }
    </div>
  )
}

export default NavRoutegarte
