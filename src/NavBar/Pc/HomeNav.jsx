import React, { useContext, useEffect, useState } from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
// react icons AREA ===========
import { IoNotifications } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { stateContext } from '../../context/stateContext';
import Cookies from 'js-cookie';
import { useLogoutMutation } from '../../feature/Api/authApi';
import { logOut } from '../../context/authSlice';
import { Loader } from '@mantine/core';
// react icons ---------------
import { TextInput } from '@mantine/core';
import { getSearch, removeSearch } from '../../context/searchSlice';
import { useGetProductsQuery } from '../../feature/Api/dbApi';


const HomeNav = () => {
  // state area >>>>>.
  // const [isActiveHome, setIsActiveHome] = useState(false)
  // const [isActiveHelp, setIsActiveHelp] = useState(false)
  // const [isActiveSaved, setIsActiveSaved] = useState(false)
  // const [isActiveContact, setIsActiveContact] = useState(false)
  const [showLoading, setShowLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState({})
  const [isActiveNoti, setIsActiveNoti] = useState(false)
  const [showLogOutSuccess, setShowLogOutSuccess] = useState(false);
  //state >>>>>>>>>
  const { products } = useSelector((state => state.search))

  const { data: apiProducts } = useGetProductsQuery('getProducts')
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch()
  const nav = useNavigate()
  const token = Cookies.get("token");
  const { shopAnimate, isShowBage, ScreenSize } = useContext(stateContext);
  const { card } = useSelector((state) => state.addtocard)
  useEffect(() => {
    if (token) {
      const user = JSON.parse(Cookies.get('user'))
      setUser(user)
    } else {
      return;
    }
  }, [])
  // function handalar area >>>>>>>>>>>.
  // handalar area>>>>>>>>>>>>>>
  // FOR search working
  const detail = (id) => {
    nav(`/detail/${id}`)
    dispatch(removeSearch({ non: [] }))
    setSearchInput("")

  }
  useEffect(() => {
    if (searchInput === '') {
      dispatch(removeSearch({ non: [] }))
    }
  }, [])
  const searchHandalar = (e) => {
    setSearchInput(e.target.value)
    if (e.target.value === '') {
      dispatch(removeSearch({ non: [] }))
    } else {
      const searchProducts = apiProducts?.filter((item) => item.title.replace(/-/, '').toLowerCase().includes(searchInput.toLowerCase()))
      dispatch(getSearch({ searchProducts: searchProducts }))
    }
  }

  // for logout working 
  const logOutHandalar = async () => {
    try {
      setShowLoading(true)
      const userToken = await logout(token)
      console.log(userToken)
      dispatch(logOut())
      nav(`/`)
      if (userToken.success) {
        return;
      } else {
        setShowLoading(false)
        if (showLoading === false) {
          setShowLogOutSuccess(true)
        }
        setTimeout(() => {
          setShowLogOutSuccess(false)
        }, 1000);
      }

    } catch (error) {
      console.log(error)
    }
  }
  // for setting working

  const settingHandalar = () => {
    nav(`/userprofile`)
  }
  // NAVBAR ACTIVE >>>>>
  // useEffect(() => {
  //   if (location.pathname === '/') {
  //     setIsActiveHome(true)
  //   } else {
  //     setIsActiveHome(true)
  //     nav('/')
  //   }
  // }, [])
  // for save working
  const savedHandalar = () => {
    nav(`/favious`)
    // setIsActiveContact(false)
    // setIsActiveHelp(false)
    // setIsActiveHome(false)
    // setIsActiveNoti(false)
    // setIsActiveSaved(true)
  }
  // for noti working
  const notiHandalar = () => {
    nav(`/notification`)
    // setIsActiveContact(false)
    // setIsActiveHelp(false)
    // setIsActiveHome(false)
    // setIsActiveNoti(true)
    // setIsActiveSaved(false)
  }
  // for help and report woking
  const helpHandalar = () => {
    nav(`/help`)
    // setIsActiveContact(false)
    // setIsActiveHelp(true)
    // setIsActiveHome(false)
    // setIsActiveNoti(false)
    // setIsActiveSaved(false)
  }
  // for contact woking
  const contactHandalar = () => {
    nav(`/contact`)
    // setIsActiveContact(true)
    // setIsActiveHelp(false)
    // setIsActiveHome(false)
    // setIsActiveNoti(false)
    // setIsActiveSaved(false)
  }
  //for add to card working
  const addToCardHandalar = () => {
    nav(`/addtocard`)
  }
  // for search icon 
  // const searchHandalar = () => { >>>>>>>>>
  //   // setIsSearchToggle(true)
  //   nav(`/search`)
  // }
  // for home icon working
  // const homeHandalar = () => {
  //   nav(`/`)
  //   setIsActiveContact(false)
  //   setIsActiveHelp(false)
  //   setIsActiveHome(true)
  //   setIsActiveNoti(false)
  //   setIsActiveSaved(false)

  // }
  // =======>>>>>>>>
  return (
    <div className='' >
      <Navbar className=' w-full bg-[#8338EC] fixed top-0 z-50' >
        <Link to={`/`} >
          <Navbar.Brand>
            <img src="https://i.pinimg.com/564x/46/d2/3e/46d23e8cf35f6df796f8ce411105c02d.jpg" className="mr-3 h-6 sm:h-9 rounded-full" alt="Flowbite React Logo" />
            <span className="self-center text-m whitespace-nowrap text-xl font-semibold dark:text-white">STM Shopping Myanmar</span>
          </Navbar.Brand>
        </Link>
        <div className="flex justify-end items-center md:order-2 w-[250px]">
          {/* add to card icon and search icon */}
          <div className=' flex gap-5 mr-4 '>
            <div onClick={notiHandalar} className={`  cursor-pointer select-none ${isActiveNoti ? " text-[#FF006E]" : " text-white"} `} >
              <IoNotifications className='hover:text-[#FF006E] text-2xl text-white' />
            </div>
            <div className=' relative' onClick={addToCardHandalar}  >
              <span className={`${isShowBage ? " visible" : " hidden"} absolute bottom-4 left-2 inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-white bg-red-500 rounded-full`}>
                {card}
              </span>
              <PiShoppingCartSimpleFill className={`cursor-pointer text-2xl hover:text-[#FF006E]   ${shopAnimate ? "animate__animated animate__bounce animate__repeat-1 text-red-600" : " text-white"}  `} />
            </div>
            <div className='cursor-pointer'>
              <div className={`px-2 mt-4 flex absolute bottom-[13px] right-64 items-center`} >
                <TextInput
                  value={searchInput}
                  rightSection={<IoSearch className={`  cursor-pointer text-xl font-bold`} />}
                  onChange={searchHandalar}
                  className=' w-full'
                  radius="xl"
                  size='sm'
                  placeholder="search"
                />
              </div>
            </div>
          </div>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <div className={`${token ? " visible" : " hidden"}`} >
              <Dropdown.Header>
                <span className="block text-lg text-q font-bold">{user?.name}</span>
                <span className="block truncate text-sm text-q font-medium">{user?.email}</span>
              </Dropdown.Header>
              <Dropdown.Item className=' text-q font-medium' onClick={savedHandalar} >Saved</Dropdown.Item>
              <Dropdown.Item className=' text-q font-medium' onClick={helpHandalar} >Help & report</Dropdown.Item>
              <Dropdown.Item className=' text-q font-medium' onClick={contactHandalar} >contact</Dropdown.Item>
              <Dropdown.Item className=' text-q font-medium' onClick={settingHandalar} >Settings</Dropdown.Item>
              <Dropdown.Divider />
              <div onClick={logOutHandalar} ><Dropdown.Item className=' text-q font-medium' >Sign out</Dropdown.Item></div>
            </div>
            <Link to={`/login`} >
              <div className={`${token ? " hidden" : " visible"}`}><Dropdown.Item>Sign In</Dropdown.Item></div>
            </Link>
          </Dropdown>
          <Navbar.Toggle />

        </div>
        {/* <Navbar.Collapse  >
          <Navbar.Link onClick={homeHandalar} className={`cursor-pointer  select-none ${isActiveHome ? " text-[#FF006E]" : " text-white"} `} >
            <div className=' hover:text-[#FF006E] relative' >
              <IoMdHome className=' text-lg absolute right-[44px]' />
              <span className=' text-md text-n font-bold ' >Home</span>
            </div>
          </Navbar.Link>
          <Navbar.Link onClick={savedHandalar} className={`cursor-pointer  select-none  ${isActiveSaved ? " text-[#FF006E]" : " text-white"}`} >
            <div className=' relative hover:text-[#FF006E]' >
              <BsBookmarkFill className={`text-xs absolute right-[44px] top-1 ${favAnimate ? " text-red-500 animate__animated animate__bounce" : ""}`} />
              <span className=' text-md text-n font-bold' >Saved</span>

            </div>
          </Navbar.Link>
          <Navbar.Link onClick={helpHandalar} className={` cursor-pointer select-none ${isActiveHelp ? " text-[#FF006E]" : " text-white"}`} >
            <div className=' relative hover:text-[#FF006E] ' >
            <MdHelp className=' text-md absolute right-[94px] top-1' />
              <span className=' text-md text-n font-bold' >Help&Report</span>

            </div>
          </Navbar.Link>
          <Navbar.Link onClick={contactHandalar} className={` cursor-pointer select-none  ${isActiveContact ? " text-[#FF006E]" : " text-white"}`} >
            <div className=' relative hover:text-[#FF006E]' >
              <MdLocalPhone className=' text-xl absolute right-[54px]' />
              <span className=' text-md text-n font-bold' >Contact</span>
            </div>
          </Navbar.Link>
        </Navbar.Collapse> */}
      </Navbar>
      {/* HIDDEN AREA >>>>>>>> */}
      <div className='' >
        <div className={`h-screen flex justify-center items-center ${showLoading ? " visible" : " hidden"} `} >
          <div className={`absolute rounded-lg z-50 bg-[#E5E5E5] p-[50px]`} >
            <Loader color="violet" type="bars" />
          </div>
        </div>
        {/* log out success model */}
        <div className={`h-screen flex justify-center items-center visible  ${showLogOutSuccess ? " visible" : " hidden"} `} >
          <div className={`absolute flex flex-col justify-center items-center rounded-lg z-50 bg-[#E5E5E5] p-[20px]`} >
            <BsEmojiHeartEyesFill className=' text-violet-500 text-4xl mb-5' />
            <h1 className=' text-xl text-green-300  font-mono' >logout success</h1>
          </div>
        </div>
      </div>
      {/* search result */}
        <div className=' fixed top-[60px] lg:right-[50px] right-[260px] z-50 rounded-lg overflow-hidden overflow-y-scroll h-[500px]' >
        {
        products?.map((item, index) => {
          return (
              <div key={index} onClick={()=> detail(item?.id)} className="  w-full bg-white p-2 cursor-pointer  hover:bg-gray-100">
                <h5 className=" text-md font-medium text-q truncate ... w-[200px] sm:w-[450px]">{item?.title}</h5>
              </div>
          )
        })
      }
        </div>
        </div>
  )
}

export default HomeNav
