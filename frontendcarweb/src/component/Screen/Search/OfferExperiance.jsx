import './Search.css'
import React from 'react'
import {NavLink} from "react-router-dom"
import { FaArrowRight } from "react-icons/fa6";
export const OfferExperiance = () => {
    return (
        <div className="flex my-20  ">
            <div className="mx-20 offer border w-full px-10 py-16 rounded-xl ">
                <div className="flex flex-col gap-2 items-start">
                <p className="font-semibold text-xl">Limited Offer</p>
                <h3 className="text-[50px] font-semibold">
                    <span className="text-[red]">30% </span>
                    Off For First <br/> Time Rent a Car
                </h3>
                <NavLink to="#" className=" px-6 py-3 rounded text-white flex  items-center gap-2 bg-[#1AA9E5] font-bold" >
                    <span>Get Started </span> 
                
                <FaArrowRight /> </NavLink>
                </div>
            </div>
        </div>
    )
}
