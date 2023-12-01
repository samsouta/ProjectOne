import React from 'react'
import { Card, Dropdown } from 'flowbite-react';
import { Button } from '@mantine/core';
import { FaFacebook, FaTelegram } from "react-icons/fa";
import sithumin from '../../../assets/images/developer/sithumin.jpeg'
const ContactUs = () => {
  return (
    <div className=' mt-20 flex mx-4 justify-center' >
      <Card className="max-w-sm">
        <div className="flex justify-end px-4 pt-4">
        </div>
        <div className="flex flex-col items-center pb-10">
          <img className=' xl:h-[300px] xl:w-[300px] h-[200px] w-[200px] rounded-full' src={sithumin} alt="" />
          <h5 className="mb-1 text-xl text-q  font-bold text-gray-900 dark:text-white">Si Thu Min</h5>
          <span className="text-sm text-q font-medium text-gray-500 dark:text-gray-400">Web & Web App Developer</span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <a href="https://www.facebook.com/samsouta99/">
              <Button href="www.google.com" variant="filled" leftSection={<FaFacebook className=' text-lg' />} color="indigo">FaceBook</Button>
            </a>
            <a href="https://web.telegram.org/k/">
              <Button variant="filled" leftSection={<FaTelegram className=' text-lg' />} >Telegram</Button>

            </a>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ContactUs
