import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

function RoutegartNav({children}) {
    const [hideNav,setHideNav] = useState();
    const location = useLocation()

    useEffect(()=>{
        if(location.pathname === '/userprofile' || location.pathname === '/favious' || location.pathname === '/notification' || location.pathname === '/addtocard' || location.pathname === '/search' ){
            setHideNav(false)
        } else {
            setHideNav(true)

        }
    },[location])
    return (
        <div >
            {
                hideNav && children
            }
        </div>
    );
}

export default RoutegartNav;