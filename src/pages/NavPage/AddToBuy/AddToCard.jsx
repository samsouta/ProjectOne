import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addItemQualtity, removeCard, removeItemQualtity } from '../../../context/addToCardSlice'
import Swal from 'sweetalert2'
import { Button } from 'flowbite-react'
import { NativeSelect } from '@mantine/core'

const AddToCard = (props) => {
    const { image, title, id, price, qualtity } = props
    const oneItemPrice = price * qualtity

    const dispatch = useDispatch()
    const removeCardHandalar = () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "##A26AF0",
            cancelButtonColor: "#FF4797",
            confirmButtonText: " delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"

                });
                dispatch(removeCard({ id: id, price: price, qualtity: qualtity }))

            }
        });
    }
    const addItemHandalar = () => {
        dispatch(addItemQualtity({ id: id, price: price, qualtity: qualtity }))
    }
    const removeItemHandalar = () => {
        if (qualtity <= 1) {
            return;
        } else {
            dispatch(removeItemQualtity({ id: id, price: price }))
        }
    }
    return (
        <div>
            <div className=' xl:grid xl:grid-cols-1 lg:grid lg:grid-cols-1 mt-5 border-b-2 pb-4 ' >
                <div className=' xl:col-span-1  lg:col-span-1' >
                    <div className=' xl:grid xl:grid-cols-6 lg:grid lg:grid-cols-6 md:relative md:h-[100px] sm:relative sm:h-[100px] relative' >
                        <div className=' xl:col-span-2 flex xl:items-center xl:gap-x-3 xl:justify-between lg:col-span-2  lg:items-center lg:gap-x-3 lg:justify-between md:gap-x-3 sm:gap-x-3 gap-x-2' >
                            <img className=' xl:w-[100px]  xl:h-[100px] lg:w-[100px]  lg:h-[100px] md:w-[100px] md:h-[100px] sm:w-[100px] sm:h-[100px] w-[80px] h-[100px] ' src={image} alt={title} />
                            <span className=' text-q font-bold text-md xl:w-[300px] lg:w-[200px] md:w-[400px] sm:w-[200px] w-[100px]  truncate ...' >{title}</span>
                        </div>
                        <div className=' xl:col-span-1 xl:static lg:static lg:col-span-1 md:absolute md:top-0 md:right-[90px] sm:absolute sm:top-0 sm:right-[150px] absolute top-0 right-[70px]'  >
                            <div className=' flex xl:justify-center xl:items-center lg:justify-center lg:items-center h-full' >
                            <NativeSelect className=' text-m text-md font-serif' data={['S', 'M', 'XL', 'XXL']} />
                            </div>
                        </div>
                        <div className=' xl:col-span-1 xl:static lg:static lg:col-span-1 md:absolute md:right-9 md:top-0 sm:absolute sm:right-14 sm:top-0 absolute right-7 top-0' >
                            <div className=' flex xl:justify-around xl:items-center xl:flex-row lg:flex-row lg:justify-around lg:items-center md:flex-col md:justify-center md:items-center sm:flex-col sm:justify-center sm:items-center flex-col justify-center items-center h-full' >
                                <div onClick={removeItemHandalar} className=' bg-gray-50 border-2 border-gray-100 rounded-md text-m p-2  cus-bg font-serif' color="light">
                                    <AiOutlineMinus className='' />
                                </div>
                                <div className='text-xl font-medium text-q'>{qualtity}</div>
                                <div onClick={addItemHandalar}  className=' bg-gray-50 border-2 border-gray-100 rounded-md text-m p-2     cus-bg font-serif' color="light">
                                    <AiOutlinePlus className='' />
                                </div>
                            </div>
                        </div>
                        <div className=' xl:col-span-1 xl:static lg:static lg:col-span-1 md:absolute md:top-0 md:right-0 sm:absolute sm:top-0 sm:right-0 absolute top-0 right-0' >
                            <div className=' flex xl:justify-center xl:items-center lg:justify-center lg:items-center h-full' >
                            <FaRegTrashAlt onClick={removeCardHandalar}  className=' text-red-500 sm:text-xl xl:text-2xl cursor-pointer' />
                            </div>
                        </div>
                        <div className=' xl:col-span-1 xl:static lg:static lg:col-span-1 md:absolute md:bottom-8 md:left-[150px] sm:absolute sm:bottom-8 sm:left-[150px] absolute bottom-8 left-[100px] ' >
                            <div className=' flex xl:justify-center xl:items-center lg:justify-center lg:items-center h-full' >
                        <p className=" text-q text-lg font-serif text-gray-700 "> <span className=' text-n font-bold text-[#FF006E]' >$</span>{oneItemPrice.toFixed(2)}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToCard
