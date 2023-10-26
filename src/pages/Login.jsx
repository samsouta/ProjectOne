import React, { useState } from 'react'
import { Input } from '@mantine/core';
import { Button } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../feature/Api/authApi';
import { useDispatch } from 'react-redux';
import { addUser } from '../context/authSlice';

const Login = () => {
  const [email, setEmail] = useState('samxmovies@gmail.com');
  const [password, setPassword] = useState('1234samxmovies');
  const nav = useNavigate()
  const dispatch = useDispatch()
  const [login] = useLoginMutation();
  const loginFun = async(e) => {
   try {
    e.preventDefault()
    const user = {email,password}
    const {data} = await login(user)
    if(data.success){
      dispatch(addUser({user:data?.user, token:data?.token}))
      nav(`/userprofile`)
    } else{
      console.log('login again')
    }
    console.log(data)
   } catch (error) {
    console.log(error)
   }
  }
  return (
    <div className=' flex justify-center items-center mt-32' >
      <form onSubmit={loginFun} className=' flex flex-col gap-6 bg-[#E5E5E5] p-8 w-[80%] h-[400px] rounded-2xl' >
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email" size='md' />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password " size='md' />
        <Button type='submit' variant="filled" className=' btn-login' color="violet">LogIn</Button>
        <div>
          <h1 className=' text-a text-lg' >If You have already account? <Link to={`/resgiter`} ><span className=' text-[#7B2CBF]' >create account</span>  </Link> now</h1>
        </div>
      </form>
    </div>
  )
}

export default Login
