import React from 'react'
import { Input } from '@mantine/core';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
const Resgiter = () => {
  return (
    <div className=' flex justify-center items-center mt-32' >
        <form className=' flex flex-col gap-6 bg-[#E5E5E5] p-8 w-[80%] h-[400px] rounded-2xl' >
         <Input placeholder="Enter Your Email" size='md' />
         <Input placeholder="Enter Your Password " size='md' />
         <Input placeholder="Confirm Password " size='md' />
         <Button variant="filled" className=' btn-resgiter' color="violet">Create Account</Button>
         <div>
            <h1 className=' text-a text-lg' >If You don't have account? <Link to={`/login`} ><span className=' text-[#7B2CBF]' >Login</span>  </Link> now</h1>
         </div>
        </form>
    </div>
  )
}

export default Resgiter
