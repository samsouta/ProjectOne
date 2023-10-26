import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import HomeFootNav from '../NavBar/FootNav/HomeFootNav'
import HomeNav from '../NavBar/HomeNav'
import AddToBuy from '../NavBar/NavPage/AddToBuy'
import FaviousPage from '../NavBar/FootNav/FooterPage/FaviousPage'
import Notification from '../NavBar/FootNav/FooterPage/Notification'
import UserProfile from '../NavBar/FootNav/FooterPage/UserProfile'
import NavRoutegarte from '../NavBar/NavRoutegarte'
import SeeAll from '../components/HomeData/SeeAllPage/SeeAll'
import DetailPage from '../components/HomeData/Detail/DetailPage'
import Login from '../pages/Login'
import Resgiter from '../pages/Resgiter'

const Path = () => {
  return (
    <div >
      <NavRoutegarte>
        <HomeNav />
      </NavRoutegarte>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addtocard' element={<AddToBuy />} />
        <Route path='/seeall' element={<SeeAll/>} />
        <Route  path='detail' element={<DetailPage/>} />
        {/* Login Page  */}
        <Route path='/login' element={<Login/>} />
        {/* resgiter */}
        <Route path='/resgiter' element={<Resgiter/>} />

        {/* footer */}
        <Route path='/favious' element={<FaviousPage />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/userprofile' element={<UserProfile />} />
      </Routes>
      <HomeFootNav />
    </div>
  )
}

export default Path
