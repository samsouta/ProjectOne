import React, { useContext, useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCard } from '../../../context/addToCardSlice';
import { stateContext } from '../../../context/stateContext';
import Cookies from 'js-cookie';
import { addToFavious } from '../../../context/faviousSlice';
import { Button } from '@mantine/core';

const HData_3Img = (props) => {
    const { image, title, price, id } = props;
    const [cardAnimate, setCardAnimate] = useState(false);
    const { shopAnimate, setShopAnimate, favAnimate, setFavAnimate } = useContext(stateContext);
    const [addFav, setAddFav] = useState(false);
    const token = Cookies.get("token");
    const dispatch = useDispatch();
    const nav = useNavigate()
    const detail = () => {
        nav(`/detail/${id}`)
    }
    const AddToCardHandalar = () => {
        try {
            if (token) {
                dispatch(addToCard({ card: 1, addedCard: props, price: price }))
                setCardAnimate(true)
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
    const faviconHandalar = () => {
        try {
            if (token) {
                setAddFav(!addFav)
                dispatch(addToFavious({ favItems: props, id: id }))
                setFavAnimate(true);
                setTimeout(() => {
                    setFavAnimate(false)
                }, 1000);
            } else {
                nav(`/login`)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className={` relative w-[200px] h-[260px]`} >
                <div className=' w-full h-full border rounded-xl relative' >
                    <img className=' rounded-xl h-full w-full' src={image} alt="" />
                    <div className=' absolute flex bottom-2 justify-around w-full' >
                        <Button onClick={AddToCardHandalar} className=' hover:bg-[#FF4797] text-m' radius="xl" variant="filled" color="hsl(265, 82%, 68%)" size="xs"><span className=' xl:text-xs lg:text-xs md:text-xs sm:text-xs text-[10px]' >Add To Card</span></Button>
                        <Button onClick={detail} variant="filled" radius="xl" className='hover:bg-[#FF4797] text-m' color="hsl(265, 82%, 68%)" size="xs">
                            <span className=' xl:text-xs lg:text-xs md:text-xs sm:text-xs text-[10px] ' >Detail</span>
                        </Button>

                    </div>
                    <div onClick={faviconHandalar} className=' absolute top-1 right-1' >
                        <div className=' relative ' >
                            <div className={`rounded-tl-lg bg-white  rounded-full opacity-80 py-4 px-4`}  ></div>
                            <div className=' absolute top-0 right-0 flex justify-center items-center w-full h-full' >
                                <AiOutlineHeart className={` ${addFav ? " hidden" : " block "} text-xl hover:text-[#FF4797]`} />
                                <AiFillHeart className={` ${addFav ? " block text-[#FF4797]" : " hidden"} text-xl `} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=' flex flex-col items-center justify-center mt-3 w-full ' >
                <h1 className=' text-sm text-q font-bold w-[150px] truncate ...' >{title}</h1>
                <span className=' text-md text-q font-thin' > <span className=' text-n font-bold text-[#FF006E]' >$</span> {price}</span>
            </div>
            {/* HIDDEN AREA */}
            {/* copy card for animated */}
            <div className={` ${cardAnimate ? " block  animate__animated animate__zoomOutUp animate__faster	500ms" : " hidden"} absolute  w-full z-50 bottom-16 left-0  `}  >
                <div className=' w-full h-full border rounded-xl relative' >
                    <img className=' rounded-xl h-full w-full' src={image} alt="" />
                    <div className=' absolute flex bottom-2 justify-around w-full' >
                        <Button onClick={AddToCardHandalar} className=' hover:bg-[#FF4797] text-m' radius="xl" variant="filled" color="hsl(265, 82%, 68%)" size="xs"><span className=' xl:text-xs lg:text-xs md:text-xs sm:text-xs text-[10px]' >Add To Card</span></Button>
                        <Button onClick={detail} variant="filled" radius="xl" className='hover:bg-[#FF4797] text-m' color="hsl(265, 82%, 68%)" size="xs">
                            <span className=' xl:text-xs lg:text-xs md:text-xs sm:text-xs text-[10px] ' >Detail</span>
                        </Button>

                    </div>
                    <div onClick={faviconHandalar} className=' absolute top-1 right-1' >
                        <div className=' relative ' >
                            <div className={`rounded-tl-lg bg-white  rounded-full opacity-80 py-4 px-4`}  ></div>
                            <div className=' absolute top-0 right-0 flex justify-center items-center w-full h-full' >
                                <AiOutlineHeart className={` ${addFav ? " hidden" : " block "} text-xl hover:text-[#FF4797]`} />
                                <AiFillHeart className={` ${addFav ? " block text-[#FF4797]" : " hidden"} text-xl `} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HData_3Img
