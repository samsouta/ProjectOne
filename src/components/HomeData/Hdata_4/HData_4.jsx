import React, { useContext, useEffect, useState } from 'react'
import { Button } from '@mantine/core';
import HData_4Card from './HData_4Card';
import { useGetCategoryQuery, useGetProductsQuery } from '../../../feature/Api/dbApi';
import { stateContext } from '../../../context/stateContext';
const HData_4 = () => {
    // state area ===============
    const [genActive, setGenActive] = useState(null); // catagory active state
    const [allGenActive, setAllGenActive] = useState(false); //  ||
    const [filterProducts, setFilterProducts] = useState([]) // click catagory = filter products
    // =============================
    // api area ==========================
    const { data: products } = useGetProductsQuery('getProducts') // get product from fake store
    const { data: category } = useGetCategoryQuery('getCategory') // get category
    // =================================
    // state context area =================
    // media query screen size
    const { ScreenSize } = useContext(stateContext); // window.screen size
    //==================
    // data fetch area ============
    // fetch data for gategory
    const fetchData = async () => {
        const api = await fetch(`https://fakestoreapi.com/products`)
        const data = await api.json()
        setFilterProducts(data)
    }
    // =============
    // use effect area ==========
    // for fetchdata
    useEffect(() => {
        fetchData()
        if (genActive === null) {
            setAllGenActive(true)
        }
    }, [])
    // ==========
    // function area ===========
    // for category
    const categoryHandalar = (val, index) => {
        setGenActive(index)
        setAllGenActive(false)
        const filterItem = products?.filter((item) => item.category === val)
        setFilterProducts(filterItem)

    }
    const allCategoryHandalar = () => {
        setFilterProducts(products)
        setGenActive(null)
        setAllGenActive(true)
    }
    // ==========
    return (
        <div className=' flex flex-col items-center' >
            <div className=' mt-10 flex justify-between xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[96%] items-center mb-2' >
                <h1 className=' text-xl text-q font-bold' >Categorys</h1>
            </div>
            <div className=' flex xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] gap-2 flex-wrap xl:justify-start lg:justify-start sm:justify-center' >
                <Button onClick={allCategoryHandalar} color='#A26AF0' className={` ${allGenActive ? " btn-cus-color" : ""} hover:bg-[#FF4797] text-m font-serif`} variant="light">All</Button>
                {
                    category?.map((item, index) => {
                        return (
                            <div key={index} className=' '>
                                <Button color='#A26AF0' onClick={() => categoryHandalar(item, index)} className={` ${genActive === index ? "btn-cus-color" : " "} hover:bg-[#FF4797] text-m font-serif`} variant="light">{item}</Button>

                            </div>
                        )
                    })
                }


            </div>
            <div className=' flex flex-wrap gap-3 xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[100%]  mt-6 justify-center' >
                {
                    filterProducts?.map((item) => {
                        return (
                            <div key={item?.id}   >
                                <HData_4Card key={item?.id} {...item} />
                            </div>
                        )
                    })
                }
            </div>

            {/* scroll div */}
            <div className=' h-[200px]' ></div>
        </div>
    )
}

export default HData_4
