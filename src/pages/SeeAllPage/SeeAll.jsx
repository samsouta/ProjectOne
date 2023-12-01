import { Button } from '@mantine/core'
import React, { useState } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'
import SeeAllCard from './seeAllCard.jsx/SeeAllCard'
import { useGetProductsQuery } from '../../feature/Api/dbApi'

const SeeAll = () => {
    const {data: products} = useGetProductsQuery('getProducts');
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
                    products?.map((item) => {
                        return (
                            <SeeAllCard key={item?.id} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SeeAll
