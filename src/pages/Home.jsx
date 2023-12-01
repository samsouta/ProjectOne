import React from 'react'
import HData_1 from '../components/HomeData/Hdata_1/HData_1'
import HData_2 from '../components/HomeData/Hdata_2/HData_2'
import HData_3 from '../components/HomeData/Hdata_3/HData_3'
import HData_4 from '../components/HomeData/Hdata_4/HData_4'

const Home = () => {
  return (
    <div className=' h-[330vh]' >
      <div className=' mt-[100px] w-full' >
        <HData_1/>
        <HData_2/>
        <HData_3/>
        <HData_4/>
        
      </div>
    </div>
  )
}

export default Home
