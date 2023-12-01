import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SearchChild = (props) => {
    const { title, id } = props
    const nav = useNavigate()
    const detail = () => {
        nav(`/detail/${id}`)

    }
    return (
        <div onClick={detail} >
            {/* search result */}
            <div>
                <div className="  w-full bg-white p-2 cursor-pointer  hover:bg-gray-100">
                    <h5 className=" text-md font-medium text-q truncate ... w-[300px] sm:w-[500px] md:w-full">{title}</h5>
                </div>
            </div>
        </div>
    )
}

export default SearchChild
