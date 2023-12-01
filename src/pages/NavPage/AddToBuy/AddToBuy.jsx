import { Button } from '@mantine/core'
import React, { useContext, useEffect, useState } from 'react'
// react icon
import { MdArrowBackIosNew, MdPayment } from 'react-icons/md'

import { Link, useNavigate } from 'react-router-dom'
import AddToCard from './AddToCard'
import { useSelector } from 'react-redux'
import { stateContext } from '../../../context/stateContext'
import { useGetProductsQuery } from '../../../feature/Api/dbApi'
import { Input } from '@mantine/core';

const AddToBuy = () => {
  const [promo, setPromo] = useState('');
  // STATE AREA >>>>>>
  const { addedCard, totalAmount, card } = useSelector((state) => state.addtocard)
  const [hideTotalBar, setHideTotalBar] = useState(false)
  const { data: products } = useGetProductsQuery('getProducts');

  const { ScreenSize } = useContext(stateContext);
  const nav = useNavigate()
  useEffect(() => {
    if (card === 0) {
      setHideTotalBar(true);
    } else {
      setHideTotalBar(false)
    }
  }, [card])

  // HANDALAR AREA>>>>>>>>
  // promo code btn working
  const btnPromo = () => {
    // null 
  }
  // pay function
  const payHandalar = () => {
    nav(`/checkout`)
  }
  // back function
  const backHandalar = () => {
    nav(`/`)
  }


  return (
    <div className='lg:mt-32 xl:mt-32' >
      <div className={`flex flex-col justify-start mt-5  mx-2 ${ScreenSize >= 1024 ? " hidden" : " visible"}`} >
        <div className=' flex justify-center ' >
          <h1 className=' text-xl text-[#14213D] text-a ' >Add To Card</h1>
        </div>
        <div className='' >
          <Button onClick={backHandalar} variant="transparent" className='  p-UserP flex self-end' color="violet" radius="xs">
            <MdArrowBackIosNew className=' text-xl' />
            <span className=' text-lg text-a font-medium' >Back</span>
          </Button>
        </div>
      </div>
      {/* Data */}
      <div className=' md:mt-10 sm:mt-10 flex justify-center' >
        <div className=' w-[90%] ' >
          <table className={` w-full ${hideTotalBar ? " hidden" : " block"} ${ScreenSize < 1024 ? " hidden" : " visible"}`} >
            <tr className=' border-b-2 grid grid-cols-6 h-[70px] border-gray-300' >
              <th className=' col-span-2 text-q font-bold text-md' >Description</th>
              <th className=' col-span-1 text-q font-bold text-md' >Size</th>
              <th className=' col-span-1 text-q font-bold text-md' >Quantity</th>
              <th className=' col-span-1 text-q font-bold text-md' >Remove</th>
              <th className=' col-span-1 text-q font-bold text-md' >Price</th>
            </tr>
          </table>
          <div>{
            addedCard?.map((item) => {
              return (
                <AddToCard key={item?.id}  {...item} />
              )
            })


          }</div>
            <div className={`${hideTotalBar ? " hidden" : " block"} `} >
            <div className={` xl:flex xl:justify-between xl:items-center lg:flex lg:justify-between lg:items-center bg-gray-100 p-5 shadow-sm rounded-md  mt-10`} >
            <div className=' md:flex md:justify-end md:items-center sm:flex sm:justify-end sm:items-center flex justify-end items-center' >
              <div className={` w-[250px] rounded-md`} >
                <div className=' flex justify-between items-center w-full ' >
                  <h1 className=' text-n font-bold text-xl' >Total :</h1>
                  <div className='' > 
                    <span className=' text-n font-bold text-2xl text-[#FF4797]' >$ </span>
                    <span className='text-q font-medium text-xl ' >{totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex xl:items-center xl:justify-end lg:items-center lg:justify-end  md:flex-row sm:flex-col sm:items-end sm:gap-y-5 md:mt-6 sm:mt-6 gap-x-5 flex-col items-end gap-y-3 mt-6' >
              <form onSubmit={btnPromo} className=' flex gap-x-5 xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col gap-3' action="">
                <Input size='md' required value={promo} onChange={(e) => setPromo(e.target.value)} placeholder="Please enter promo code" />
                <Button size='md' type='submit' radius="sm" className='text-lg text-m font-medium hover:bg-[#FF4797]' color='#A26AF0' variant="filled">Apply Discount</Button>
              </form>
              {/* pay comfired info*/}
              <div onClick={payHandalar} className={` ${hideTotalBar ? " hidden" : " visible"}`}  >
                <Button className='hover:bg-[#FF4797] hover:text-white' variant="filled" size='md' color="#A26AF0"><MdPayment className={`text-xl mr-2`} /> <span className=' text-lg text-m font-medium' >Check Out</span></Button>
              </div>
            </div>
          </div>
            </div>
        </div>
      </div>




      {/* HIDDEN AREA >>>>>>> */}
      {/* empty card alert */}
      <div className=' h-[300px] lg:w-full flex sm:flex justify-center items-center lg:justify-center' >
        <div className={` ${hideTotalBar ? " block" : " hidden"} lg:w-[400px] w-[200px] sm:w-[400px] p-4 mb-4 sm:mt-28 text-red-800 border border-red-300 rounded-lg bg-red-50`} role="alert">
          <div className="flex flex-col items-center gap-y-3">
            <h3 className="text-lg text-q text-[#FF4797] font-medium">Empty Card !</h3>
            <div>
              <Link to={`/`}>
                <Button className=' text-m font-serif' variant="outline" color="#FF4797" radius="md">Buy Now </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* scroll div */}
      <div className=' h-[200px]' ></div>
    </div>
  )
}

export default AddToBuy
