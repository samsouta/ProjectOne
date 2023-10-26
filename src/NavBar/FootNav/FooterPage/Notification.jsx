import { Button } from '@mantine/core'
import React, { useState } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'
import NotificationChild from './NotificationChild/NotificationChild'
import { useSelector } from 'react-redux'

const Notification = () => {
  const [testItem, setTestItem] = useState([1, 2, 3, 4, 5, 6])
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const notiFun = (index) => {
    if (isOpen === index) {
      return setIsOpen(null)
    }
    setIsOpen(index)
  }
  return (
    <div className='' >
      <div className=' flex justify-start mt-8  mx-2' >
        <Link to={`/`} >
          <div>
            <Button variant="transparent" className='  p-UserP flex self-end' color="violet" radius="xs">
              <MdArrowBackIosNew className=' text-4xl' />
              <span className=' text-xl text-a font-medium' >Back</span>
            </Button>
          </div>
        </Link>
        <h1 className=' mx-auto text-2xl text-[#14213D] text-a ' >Notification</h1>
      </div>

      <div className={`${token ? " visible" : " hidden"}`} >
        {
          testItem?.map((item, index) => {
            return (
              <NotificationChild isOpen={index === isOpen} key={index} notiFun={() => notiFun(index)} />
            )
          })
        }
      </div>
      {/* you need to login */}
      <div className={` ${token ? "hidden" : "visible"} h-screen flex flex-col justify-center items-center`} >
        <h1 className=' text-a font-medium text-4xl' >You need to login</h1>
        <h1 className=' text-2xl font-medium' ><Link to={`/login`} ><span className=' font-thin text-a text-[#7B2CBF]' >Login</span></Link>now</h1>
      </div>
      <div className=' mt-[100px]' >a</div>
    </div>
  )
}

export default Notification
