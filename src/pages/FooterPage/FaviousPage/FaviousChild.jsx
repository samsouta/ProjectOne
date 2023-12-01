import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { removeFavious } from '../../../context/faviousSlice';
import { CiCircleRemove } from "react-icons/ci";
import Swal from 'sweetalert2';
import { HiOutlineSearchCircle } from "react-icons/hi";
import { Link } from 'react-router-dom';


const FaviousChild = (props) => {
  const { image, price, title, id } = props;
  const dispatch = useDispatch();

  const favIconHandalar = () => {
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
        dispatch(removeFavious({ id: id }))
      }
    });
  }
  return (
    <div>
      <div className=' mt-4 flex justify-center' >
        <div className=" xl:w-full lg:w-[640px] relative grid grid-cols-3 gap-x-3 h-[150px] overflow-hidden border border-gray-200 rounded-xl shadow hover:bg-gray-100">
          <div className=' col-span-1 h-[150px]' >
            <img className="rounded-t-lg w-full h-full" src={image} alt="" />
          </div>
          <div className=" col-span-2">
            <h5 className=" text-q font-bold  text-gray-900 w-[330px] truncate ..."> {title} </h5>
            <p className="mb-3 text-q text-lg font-serif text-gray-700 "> <span className=' text-n font-bold text-[#FF006E]' >$</span> {price}</p>
          </div>
          {/* icon */}
          <div className='absolute flex top-1 right-1 gap-x-2'  >
            <Link to={`/detail/${id}`} >
              <HiOutlineSearchCircle className=' cursor-pointer text-3xl text-[#A26AF0]  ' />
            </Link>
            <CiCircleRemove onClick={favIconHandalar} className=' cursor-pointer text-[#FF4797]  text-3xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaviousChild
