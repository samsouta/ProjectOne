import { Button } from '@mantine/core'
import React, { useState } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'
import SeeAllCard from './seeAllCard.jsx/SeeAllCard'

const SeeAll = () => {
    const [data_test, setData_test] = useState([1, 2, 3, 4, 5, 6, 7]);
    return (
        <div className=' h-[180vh]' >
            <div className=' flex justify-start mt-10 z-0  mx-2' >
                <Link to={`/`} >
                    <div>
                        <Button variant="transparent" className='  p-UserP flex self-end' color="violet" radius="xs">
                            <MdArrowBackIosNew className=' text-4xl' />
                            <span className=' text-xl text-a font-medium' >Back</span>
                        </Button>
                    </div>
                </Link>
                <h1 className=' mx-auto text-2xl text-[#14213D] text-a ' >See All</h1>
            </div>

            <div className=' mt-[60px] flex justify-center items-center gap-2 flex-wrap' >
                {
                    data_test?.map((item, index) => {
                        return (
                            <SeeAllCard key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SeeAll
