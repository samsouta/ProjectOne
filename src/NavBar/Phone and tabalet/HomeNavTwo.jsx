import React, { useContext, useEffect, useRef, useState } from 'react'
import { Navbar } from 'flowbite-react';
import { FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdMenuOpen } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { Button, Loader } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { BsEmojiHeartEyesFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../../feature/Api/authApi';
import { logOut } from '../../context/authSlice';
import { stateContext } from '../../context/stateContext';
import { IoSettings } from "react-icons/io5";
const HomeNavTwo = () => {
    const [isShowMenuBar, setIsShowMenuBar] = useState(false);
    const [isShowLogin, setIsShowLogin] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [userInfo,setUserInfo] = useState();
    const [showLogOutSuccess, setShowLogOutSuccess] = useState(false);
    // state >>>>>>>>>>
    const { shopAnimate, isShowBage } = useContext(stateContext);
    const { profileImage, userName } = useSelector((state) => state.userprofile) // user profile
    const { card } = useSelector((state) => state.addtocard)
    const dispatch = useDispatch();
    const [logout] = useLogoutMutation();
    const nav = useNavigate()
    // cookies area ===
    const token = Cookies.get("token");

    useEffect(() => {
        if (token) {
          const user = JSON.parse(Cookies.get('user'))
          setUserInfo(user)
        } else {
          return;
        }
      }, [])
    // ====
    // for is show login working === 
    useEffect(() => {
        if (token) {
            setIsShowLogin(true)
        } else {
            setIsShowLogin(false)
        }
    }, [token])
    // ===
    // handalar area >>>>>>>>>>>>>
    // for search icon ==========
    const searchHandalar = () => {
        try {
            if (token) {
                nav(`/search`)
            } else {
                nav(`/login`)
            }
        } catch (error) {
            console.log(error)
        }

    }
    //========
    // for add to card shoping icon =========

    const addToCardHandalar = () => {
        nav(`/addtocard`)
    }
    //=========
    // for menu working ====
    const menuIcon = useRef();
    const menuBar = useRef();
    const menuIconHandalar = () => {
        setIsShowMenuBar(true)
    }
    window.addEventListener('click', (e) => {
        try {
            if (e.target !== menuIcon.current && e.target !== menuBar.current) {
                setIsShowMenuBar(false)
            }
        } catch (error) {
            console.log(error)
        }
    })
    // for help and report working
    const helpHandalar = () => {
        nav(`/help`)
    }
    // for contact working
    const contactHandalar = () => {
        nav(`/contact`)
    }
    // for setting working
    const settingHandalar = () => {
        nav(`/error`)
    }
    // =====
    // for logout working 
    const LogOutHandalar = async () => {
        try {
            setShowLoading(true)
            const userToken = await logout(token)
            nav(`/`)
            console.log(userToken)
            dispatch(logOut())
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
    return (
        <div className=' relative' >
            <Navbar className=' bg-[#8338EC] fixed w-full z-50 top-0' >
                <div className=' flex justify-between w-full items-center' >
                    <div className=' relative' onClick={menuIconHandalar} >
                        <div ref={menuIcon} className=' absolute top-1  py-3 px-4 rounded-full' ></div>
                        <MdMenuOpen className=' text-3xl text-white select-none' />
                    </div>
                    <div className=' flex justify-around w-[100px]' >
                        <div onClick={addToCardHandalar} className=' relative' >
                            <span className={` ${isShowBage ? " visible" : " hidden"}  absolute bottom-4 left-2 inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-white bg-red-500 rounded-full`} >
                                {card}

                            </span>
                            <FaShoppingCart className={` select-none text-white text-2xl ${shopAnimate ? "animate__animated animate__bounce animate__repeat-1 text-red-600" : ""}  `} />
                        </div>
                        <div onClick={searchHandalar} >
                            <FiSearch className=' select-none text-white text-2xl' />
                        </div>
                    </div>
                </div>
            </Navbar>
            {/* hidden area */}
            {/* menu bar */}
            <div ref={menuBar} className={`fixed w-[200px] top-0 z-50 bg-white h-full ${isShowMenuBar ? " visible" : " hidden"}`} >
                <div className={`${isShowLogin ? " visible " : " hidden"}`} >
                    <Link to={`/error`} >
                        <div className=' flex items-center select-none gap-y-2 mt-5' >
                            <div className=' w-[40%] flex justify-start' >
                                {
                                    profileImage ? <img className=' w-[50px] ml-3  h-[50px] object-cover rounded-full object-center' src={URL.createObjectURL(profileImage)} alt="" /> : <img className=' w-[50px] ml-3  h-[50px] object-cover rounded-full object-bottom' src="https://i.pinimg.com/564x/1d/f4/f0/1df4f0d121b142dbeaf4c236b46216d1.jpg" alt="" />
                                }
                            </div>
                            <div className=' w-[60%] flex justify-center items-center' >

                                <h1 className=' text-a text-lg font-extralight  w-[150px] truncate ...' >{userInfo?.name}</h1>

                            </div>
                        </div>
                    </Link>
                    <div className='  px-3 flex flex-col gap-y-[100px] mt-[100px]' >
                        <div className=' flex flex-col gap-y-4' >
                            <div onClick={helpHandalar} className=' select-none flex items-center gap-2' >
                                <IoMdHelpCircleOutline className=' text-2xl' />
                                <span className=' text-a text-lg' >Help&Report</span>
                            </div>
                            <div onClick={contactHandalar} className=' select-none flex items-center gap-2' >
                                <IoMdContact className=' text-2xl' />
                                <span className=' text-a text-lg' >Contact</span>
                            </div>
                            <div onClick={settingHandalar} className=' select-none flex items-center gap-2' >
                                <IoSettings className=' text-2xl' />
                                <span className=' text-a text-lg' >Setting</span>
                            </div>
                        </div>
                        <Button onClick={LogOutHandalar} className='' variant="light" color="red">Log Out</Button>
                    </div>
                </div>
                {/* is not have token show login  */}
                <div className={` ${isShowLogin ? " hidden" : " visible"} h-screen flex flex-col justify-center items-center`} >
                    <h1 className=' text-a font-medium text-xl' >You need to login</h1>
                    <h1 className=' text-xl font-medium' ><Link to={`/login`} ><span className=' font-thin text-a text-[#7B2CBF]' >Login</span></Link> now</h1>
                </div>
            </div>
            {/* log out loading */}
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
                        <h1 className=' text-xl text-green-300 text-a font-mono' >logout success</h1>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HomeNavTwo
