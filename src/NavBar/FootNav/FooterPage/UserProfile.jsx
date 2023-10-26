import React from 'react'
import { Button } from '@mantine/core';
import { MdArrowBackIosNew } from 'react-icons/md'
import { AiFillSetting } from 'react-icons/ai'
import { FaStar } from "react-icons/fa"
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { TbChartAreaLineFilled } from 'react-icons/tb'
import { IoMdMail } from 'react-icons/io'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const UserProfile = () => {
  const {token} = useSelector((state)=> state.auth);

    return (
        <div className=' h-[140vh]' >
            <div className={`${token ? " visible" : " hidden"}`} >
                {/* data_1 */}
                <div className=' flex justify-between mx-4 items-center mt-20' >
                    <Link to={`/`} >
                        <div>
                            <Button variant="transparent" className=' p-UserP' color="violet" radius="xs">
                                <MdArrowBackIosNew className=' text-4xl' />
                                <span className=' text-xl text-a font-medium' >Back</span>
                            </Button>
                        </div>
                    </Link>
                    <div>
                        <Button variant="light" color="violet" radius="xl">
                            <AiFillSetting className=' text-2xl' />
                            <span className=' text-xl ml-2' >Edit</span>
                        </Button>
                    </div>
                </div>
                {/* data_2 */}
                <div>
                    <div className='  flex flex-col gap-3 justify-center items-center' >
                        <img className=' w-[150px] ml-3  h-[150px] object-cover mb-5 rounded-full object-bottom' src="https://i.pinimg.com/564x/4c/d5/85/4cd58505cbacd313c24c8082efa581ad.jpg" alt="" />
                        <h1 className='  w-full text-a text-3xl font-medium text-center' >RoRonoa Zoro </h1>
                        <Button className='' variant="light" color="violet" size="md" radius="xl">Basic Plan</Button>
                        <div className=' mt-5 flex w-full justify-evenly items-center' >
                            <div className=' flex flex-col justify-center items-center' >
                                <h1 className=' text-a text-2xl font-medium' >400</h1>
                                <span className=' text-b font-normal text-xl text-gray-600' >following</span>
                            </div>
                            <div className='  flex flex-col justify-center items-center' >
                                <h1 className=' text-a text-2xl font-medium' >500</h1>
                                <span className=' text-b text-xl font-normal text-gray-600' >follower</span>
                            </div>

                        </div>
                    </div>
                </div>
                {/* data_3 */}

                <div className=' mt-20 flex gap-y-5 rounded-t-[50px] flex-col bg-[#E5E5E5] h-[80vh]' >
                    <div className=' flex justify-between items-center mt-10 mx-6' >
                        <div className=' flex gap-5 justify-center items-center' >
                            <button className=' bg-white p-3 rounded-md' ><FaStar className=' text-[#7209B7] text-4xl' /></button>
                            <h1 className=' text-2xl text-[#14213D] font-light text-a' >Become A Pro MeMber</h1>
                        </div>
                        <MdOutlineKeyboardArrowRight className=' text-4xl text-[#7209B7]' />
                    </div>
                    <div className=' flex justify-between items-center mx-6 ' >
                        <div className=' flex gap-5 justify-center items-center' >
                            <button className=' bg-white p-3 rounded-md' ><TbChartAreaLineFilled className=' text-[#7209B7] text-4xl' /></button>
                            <h1 className=' text-2xl text-[#14213D] font-light text-a' >My Statistics</h1>
                        </div>
                        <MdOutlineKeyboardArrowRight className=' text-4xl text-[#7209B7]' />
                    </div>
                    <div className=' flex justify-between items-center mx-6 ' >
                        <div className=' flex gap-5 justify-center items-center' >
                            <button className=' bg-white p-3 rounded-md' ><IoMdMail className=' text-[#7209B7] text-4xl' /></button>
                            <h1 className=' text-2xl text-[#14213D] font-light text-a' >invite a Friend</h1>
                        </div>
                        <MdOutlineKeyboardArrowRight className=' text-4xl text-[#7209B7]' />
                    </div>
                    <div className=' flex justify-between items-center mx-6 ' >
                        <div className=' flex gap-5 justify-center items-center' >
                            <button className=' bg-white p-3 rounded-md' ><FaStar className=' text-[#7209B7] text-4xl' /></button>
                            <h1 className=' text-2xl text-[#14213D] font-light text-a' >Become A Pro MeMber</h1>
                        </div>
                        <MdOutlineKeyboardArrowRight className=' text-4xl text-[#7209B7]' />
                    </div>
                    <div className=' flex justify-between items-center mx-6 ' >
                        <div className=' flex gap-5 justify-center items-center' >
                            <button className=' bg-white p-3 rounded-md' ><FaStar className=' text-[#7209B7] text-4xl' /></button>
                            <h1 className=' text-2xl text-[#14213D] font-light text-a' >Become A Pro MeMber</h1>
                        </div>
                        <MdOutlineKeyboardArrowRight className=' text-4xl text-[#7209B7]' />
                    </div>
                    <div className=' flex justify-between items-center mx-6 ' >
                        <div className=' flex gap-5 justify-center items-center' >
                            <button className=' bg-white p-3 rounded-md' ><FaStar className=' text-[#7209B7] text-4xl' /></button>
                            <h1 className=' text-2xl text-[#14213D] font-light text-a' >Become A Pro MeMber</h1>
                        </div>
                        <MdOutlineKeyboardArrowRight className=' text-4xl text-[#7209B7]' />
                    </div>
                </div>
            </div>
            {/* you need to login */}
            <div className={`${token ? ' hidden' : ' visible'} h-screen flex flex-col justify-center items-center `} >
                <h1 className=' text-a font-medium text-4xl' >You need to login</h1>
                <h1 className=' text-2xl font-medium' ><Link to={`/login`} ><span className=' font-thin text-a text-[#7B2CBF]' >Login</span></Link>now</h1>
            </div>
        </div>
    )
}

export default UserProfile
