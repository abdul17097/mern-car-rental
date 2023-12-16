import React, { useEffect } from 'react'
import {useSelector} from "react-redux"
import { Card } from './Card';
import Cards from './Cards'

function LandingPage() {
  const {cars} = useSelector((state)=> state.carReducer);
  const luxury = cars.cars?.filter((item)=> item.catagory === "Luxury").slice(0,2)
  return (
    <div className='mt-5 px-10 border W-5/5'>
    <h1 className='text-4xl font-semi-bold'>Experience the luxury style of Pakistan</h1>
    <div className='flex justify-between items-center py-5'>
        <p className='text-xl font-thin'>Amazing luxury cars with different styles.</p>
        <button className='border px-3 text-sm py-1 font-semibold rounded-xl bg-[#00A0E1] text-white'>LUXURY CARS </button>
    </div>
    <div className='grid  grid-cols-1 w-[100%] md:grid-cols-2 lg:grid-cols-2 gap-5  '>
      {luxury && luxury.map((item)=>(
        <Card data={item}/>
      ))} 
        
    </div>
    </div>
  )
}

export default LandingPage