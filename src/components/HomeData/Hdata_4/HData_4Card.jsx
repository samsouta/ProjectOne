import React, { useContext, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { stateContext } from '../../../context/stateContext'
import '../../../../node_modules/animate.css/animate.css';
import Cookies from 'js-cookie'
import { addToFavious } from '../../../context/faviousSlice'


const HData_4Card = (props) => {
    const { id, image, title, price } = props
    const { setFavAnimate } = useContext(stateContext);
    const [addFav, setAddFav] = useState(false);
    const token = Cookies.get("token");
    const nav = useNavigate();
    const dispatch = useDispatch();
    const detail = () => {
        nav(`/detail/${id}`)

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
        <div className=' relative' >
            <div className={` cus-card-hov relative xl:w-[200px] lg:w-[200px] md:w-[200px] sm:w-[200px] w-[170px] h-[260px]`} >
                <div className=' w-full h-full border cursor-pointer rounded-xl relative' >
                    <img onClick={detail} className=' rounded-xl h-full w-full' src={image} alt="" />
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
                <h1 className=' text-sm text-q font-bold truncate ... w-[150px] ' >{title}</h1>
                <span className=' text-lg text-q font-thin' > <span className=' text-n font-bold text-[#FF006E]' > $</span> {price}</span>
            </div>
        </div>
    )
}

export default HData_4Card
