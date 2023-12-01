import { Button } from '@mantine/core'
import React, { useContext, useEffect } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDetailQuery } from '../../feature/Api/dbApi'
// mantine
import { stateContext } from '../../context/stateContext'
// import { Rating } from 'flowbite-react';
import { Rating } from '@mantine/core'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { addToCard } from '../../context/addToCardSlice'

const DetailPage = () => {

  // state >>>>>>>>>>>>.
  const { id } = useParams();
  const { data: product } = useDetailQuery(id)
  const nav = useNavigate()
  const location = useLocation()
  const token = Cookies.get("token");
  const dispatch = useDispatch();


  const { setSearchHideNav,setShopAnimate, setShowNavBar, ScreenSize } = useContext(stateContext);

  // HANDALAR AREA >>>>>
  // add to card working
  const AddToCardHandalar = () => {
    try {
        if (token) {
            dispatch(addToCard({ card: 1, addedCard: product, price: product?.price }))
            setShopAnimate(true)
            setTimeout(() => {
                setShopAnimate(false)
            }, 1000);
        } else {
            nav(`/login`)
        }
    } catch (error) {
        console.log(error)
    }
}
  const backBtnHandalar = () => {
    setSearchHideNav(false)
    nav(`/`)
  }
  useEffect(() => {
    if (location.pathname === `/detail/${id}`) {
      setShowNavBar(false)
    }
  }, [location])
  return (
    <div className=' mt-[100px]' >
      <div className={`flex flex-col justify-start mt-5 mx-2 ${ScreenSize >= 1024 ? " hidden" : " visible"} `} >
        <div className=' flex justify-center ' >
          <h1 className=' text-xl text-[#14213D] text-a ' >Detail</h1>
        </div>
        <div onClick={backBtnHandalar} className=' mt' >
          <Button variant="transparent" className='  p-UserP flex self-end' color="violet" radius="xs">
            <MdArrowBackIosNew className=' text-xl' />
            <span className=' text-lg text-a font-medium' >Back</span>
          </Button>
        </div>
      </div>

      <div className=' mt-10 grid gap-y-10 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 ' >
        <div className='  col-span-1 flex justify-center' >
          <div className=' grid grid-cols-1 gap-2 lg:w-[80%] md:w-[60%] sm:w-[50%] w-[60%]' >
            {/* img */}
            <div className=' col-span-1 border-[#FF4797] mt-3 border-2 overflow-hidden rounded-2xl' >
              <img className='w-full xl:h-[400px] lg:h-[400px] md:h-[300px] sm:h-full' src={product?.image} />
            </div>
            {/* img */}
            <div className='  col-span-1' >
              <div className=' grid grid-cols-4 gap-2' >
                <div className=' col-span-1 border-[#FF4797] mt-3 border-2 overflow-hidden rounded-2xl' >
                  <img className=' w-full xl:h-[150px] lg:h-[150px] md:h-[60px] ' src={product?.image} />

                </div>
                <div className=' col-span-1 border-[#FF4797] mt-3 border-2 overflow-hidden rounded-2xl' >
                  <img className=' w-full xl:h-[150px] lg:h-[150px] md:h-[60px] ' src={product?.image} />

                </div>
                <div className=' col-span-1 border-[#FF4797] mt-3 border-2 overflow-hidden rounded-2xl' >
                  <img className=' w-full xl:h-[150px] lg:h-[150px] md:h-[60px] ' src={product?.image} />

                </div>
                <div className=' col-span-1 border-[#FF4797] mt-3 border-2 overflow-hidden rounded-2xl' >
                  <img className=' w-full xl:h-[150px] lg:h-[150px] md:h-[60px] ' src={product?.image} />

                </div>

              </div>
            </div>
          </div>
        </div>

        <div className=' col-span-1 flex justify-center' >
          <div className='flex flex-col gap-4 xl:w-[90%] lg:w-[80%] w-[90%]'>
            <h1 className=' text-2xl text-q font-semibold' >{product?.title}</h1>
            <p className=' text-lg text-gray-500 font-light text-q' >{product?.description}</p>
            {/* /rating  */}
            <div className=' flex gap-1 items-center gap-x-3' >
             <Rating value={product?.rating?.rate}  defaultValue={0} />
            <span className=' text-q font-bold text-sm' >{product?.rating?.rate}</span>
            </div>
            <span className=' text-3xl text-q font-thin' ><span className=' text-[#FF4797] text-3xl font-bold text-n mr-2' >$</span>{product?.price}</span>
            <div className=' flex gap-x-5' >
            <Button variant="filled" size='md' radius='xl' color='hsl(265, 82%, 68%)' className=' hover:bg-[#FF4797] text-m font-serif' >Buy Now</Button>
            <Button onClick={AddToCardHandalar} variant="filled" size='md' radius='xl' color='hsl(265, 82%, 68%)' className=' hover:bg-[#FF4797] text-m font-serif' >Add To Card</Button>
            </div>
          </div>
        </div>



      </div>
      {/* scrll div */}
      <div className=' h-[200px]' ></div>
    </div>
  )
}

export default DetailPage
