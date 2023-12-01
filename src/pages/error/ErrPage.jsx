import React from 'react'
import { BiSolidError } from "react-icons/bi";
const ErrPage = () => {
  return (
    <div className=' flex flex-col justify-center items-center h-screen' >
        <BiSolidError className=' text-[100px]'  />
      <h1 className=' text-4xl font-semibold text-q '  >maintenance site</h1>
    </div>
  )
}

export default ErrPage
