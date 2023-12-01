import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchChild from './SearchChild'
// import { TextInput } from '@mantine/core';
import { getSearch, removeSearch } from '../../../context/searchSlice';
import { useGetProductsQuery } from '../../../feature/Api/dbApi';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { stateContext } from '../../../context/stateContext';
import { TextInput } from '@mantine/core';
const Search = () => {
    // state >>>>>>>>>>>>>
    const [searchInput, setSearchInput] = useState("");

    // >>>>>>>>>>>>
    const { ScreenSize } = useContext(stateContext);

    const nav = useNavigate();
    const dispatch = useDispatch();
    const { data: apiProducts } = useGetProductsQuery('getProducts')
    const { products } = useSelector((state => state.search))


    // handalar area>>>>>>>>>>>>>>
    // FOR search working // edited 
    useEffect(() => {
        if (searchInput === '') {
            dispatch(removeSearch({ non: [] }))
        }
    }, [])
    const searchBackHandalar = () => {
        nav(`/`)
        dispatch(removeSearch({ non: [] }))

    }
    const searchHandalar = (e) => {
        setSearchInput(e.target.value)
        if (e.target.value === '') {
            dispatch(removeSearch({ non: [] }))
        } else {
            const searchProducts = apiProducts?.filter((item) => item.title.replace(/-/, '').toLowerCase().includes(searchInput.toLowerCase()))
            dispatch(getSearch({ searchProducts: searchProducts }))
        }
    }
    // >>>>>>>>>
    return (
        <div className={`relative ${ScreenSize <= 1024 ? " visible" : " hidden"}`} >
            {/* search input  */}
            <div className={` bg-[#8338EC] py-2 `} >
                <div className='animate__slideInRight animate__animated px-2 flex  items-center ' >
                    <IoIosArrowBack onClick={searchBackHandalar} className={` text-3xl font-bold `} />

                    <TextInput
                        value={searchInput}
                        onChange={searchHandalar}
                        className=' w-full lg:w-[400px] '
                        radius="xl"
                        placeholder="search"
                    />
                </div>
            </div>
            {/* search show data */}
            <div className=' flex justify-end pr-3' >
                <div className=' rounded-lg overflow-hidden overflow-y-scroll w-[350px] sm:w-[600px] md:w-[700px] h-[500px]' >
                    {
                        products?.map((item) => {
                            return (
                                <SearchChild key={item.id} {...item} />
                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}

export default Search
