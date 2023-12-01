import React, { useState } from 'react'
import { TbSettingsBolt } from "react-icons/tb";
import { Button, TextInput } from '@mantine/core';
import { NativeSelect } from '@mantine/core';
import Profile from './Profile';
import MyOrder from './MyOrder';
import OrderCancelling from './OrderCancelling';


function getStepContent(step) {
    switch (step) {
        case 0:
            return <Profile />;
        case 1:
            return <MyOrder />;
        case 2:
            return <OrderCancelling />;
        default:
            throw new Error('Unknown step');
    }
}

const UserProfile = () => {
    const [activeStep, setActiveStep] = useState(0);
    return (
        <div className=' xl:grid xl:grid-cols-4' >
            <div className=' bg-white xl:h-screen xl:col-span-1' >
                <div className=' xl:mt-36  xl:flex xl:ps-4' >
                    <button className=' xl:flex xl:items-center xl:justify-start xl:ps-4 xl:pr-[200px] xl:py-2 xl:rounded-lg px-10 xl:hover:bg-[#F5F5F5] cursor-pointer xl:gap-2' >
                        <TbSettingsBolt className=' text-xl' />
                        <span className=' text-md text-q font-medium' >Setting</span>
                    </button>
                </div>
            </div>
            <div className=' bg-gray-100 xl:flex xl:justify-center xl:h-[110vh] xl:col-span-3' >
                <div className=' xl:mt-20 bg-red-400' >
                    <h1 className=' text-q text-3xl font-bold' >Settings</h1>
                    <div className=' xl:flex xl:justify-around xl:mt-4 ' >
                        <span onClick={()=> setActiveStep(0)} className=' text-q font-medium text-md cursor-pointer xl:hover:border-b-2 xl:hover:border-[#FF4797]' >Profile</span>
                        <span onClick={()=> setActiveStep(1)} className=' text-q font-medium text-md cursor-pointer xl:hover:border-b-2 xl:hover:border-[#FF4797]' >My Order</span>
                        <span onClick={()=> setActiveStep(2)} className=' text-q font-medium text-md cursor-pointer xl:hover:border-b-2 xl:hover:border-[#FF4797]' >Cancelling Order</span>
                        <span></span>
                    </div>
                    <div className=' bg-white xl:mt-3 xl:rounded-lg xl:w-[700px] xl:h-[640px]' >
                        {/* // components change */}
                        <div className='xl:p-6'>
                            <h1 className=' text-q text-xl font-bold xl:mb-5' >Profile Information</h1>
                            <span className=' text-q font-medium text-md' >profile</span>
                            <div className=' xl:flex xl:items-center xl:gap-x-4 xl:mt-1' >
                                <img className=' xl:w-[60px] xl:h-[60px] xl:rounded-full' src="https://i.pinimg.com/736x/61/2a/44/612a440ba4b716342d714f7653266867.jpg" alt="" />
                                <Button variant="light"><span className=' text-m font-serif text-md' >Upload Photo</span></Button>
                            </div>
                            <form className=' xl:flex xl:flex-col xl:gap-y-4 xl:mt-3' >
                                <TextInput
                                    variant="filled"
                                    label="Display name"
                                    placeholder="Name"
                                />
                                <TextInput
                                    variant="filled"
                                    label="Email"
                                    placeholder="Email"
                                />
                                <NativeSelect
                                    variant="filled"
                                    label="Country of Residence"
                                    data={['Myanmar', 'japan', 'Korea']}
                                />
                                <NativeSelect
                                    variant="filled"
                                    label="Country of Residence"
                                    data={['yangon', 'mandalay', 'taunggyi']}
                                />
                                <TextInput
                                    variant="filled"
                                    label="zip Code /postal Code"
                                    placeholder="zip/postal Code"
                                />
                                <div className=' xl:flex xl:justify-start' >
                                    <Button variant="light" className=' hover:bg-[#FF4797] hover:text-white' color="#A26AF0"><span className=' text-m font-medium text-md' >Save</span></Button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
