import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import HomeFootNav from '../NavBar/FootNav/HomeFootNav'
import HomeNav from '../NavBar/Pc/HomeNav'
import AddToBuy from '../pages/NavPage/AddToBuy/AddToBuy'
import FaviousPage from '../pages/FooterPage/FaviousPage/FaviousPage'
import Notification from '../pages/FooterPage/Notification/Notification'
import UserProfile from '../pages/FooterPage/userProfilePage/UserProfile'
import DetailPage from '../pages/Detail/DetailPage'
import Login from '../pages/Login'
import Resgiter from '../pages/Resgiter'
import Search from '../pages/NavPage/search/Search'
import Setting from '../pages/NavPage/MenuPage/Setting'
import Help from '../pages/NavPage/MenuPage/Help'
import ContactUs from '../pages/NavPage/MenuPage/ContactUs'
import About from '../pages/NavPage/MenuPage/About'
import PayMethod from '../pages/payMethod/PayMethod'
import { stateContext } from '../context/stateContext'
import HomeNavTwo from '../NavBar/Phone and tabalet/HomeNavTwo'
import RoutegartNav from "../NavBar/Phone and tabalet/RoutegartNav";
import Checkout from "../pages/check out/Checkout";
import ErrPage from '../pages/error/ErrPage'

const Path = () => {
  const { ScreenSize } = useContext(stateContext);

  return (
    <div>
      {/* show nav for screen size pc  */}
      <div className={`${ScreenSize < 1024 ? " hidden" : " visible"}`} >
        <HomeNav />
      </div>
      {/* show nav for tabelat or phone */}
      <div className={`${ScreenSize >= 1024 ? " hidden" : " visible"}`} >
          <RoutegartNav>
              <HomeNavTwo />
          </RoutegartNav>
      </div>
      <div>

      </div>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/search' element={<Search/>} />
        <Route path='/addtocard' element={<AddToBuy />} />
        {/*<Route path='/seeall' element={<SeeAll/>} />*/}
        <Route  path='/detail/:id' element={<DetailPage/>} />
        {/*/!* menu page *!/*/}
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/about' element={<About/>}/>
        {/* /!* pay  *!/*/}
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/paymethod' element={<PayMethod/>} />
        {/*/!* Login Page  *!/*/}
        <Route path='/login' element={<Login />} />
        {/* /!* resgiter *!/ */}
        <Route path='/resgiter' element={<Resgiter />} />

        {/*/!* footer *!/*/}
        <Route path='/favious' element={<FaviousPage />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/userprofile' element={<UserProfile />} />
        {/* error page */}
        <Route path='/error' element={<ErrPage/>} />
      </Routes>
      <HomeFootNav />
    </div>
  )
}

export default Path
