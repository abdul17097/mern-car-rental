import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { GiCarDoor } from "react-icons/gi";
import { MdAirlineSeatLegroomExtra, MdMotionPhotosAuto } from "react-icons/md";
import {useSelector} from "react-redux"
import { NavLink } from "react-router-dom";
export const Cars = () => {
    const {cars} = useSelector((state)=> state.carReducer);
    console.log(cars)
  return (
    <div className=" grid w-5/5 px-3 mt-14  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-5 md:gap-5 ">
      {cars.cars && cars.cars.map((car,index) => {return (
         <AnimatePresence>
        <motion.div 
        // initial={{ opacity: 0 , y: -200  }}
        // animate={{ opacity: 5, y:0 }}
        // viewport={{ once: true }}
        // transition={{ duration: 0.5, delay: index * 0.1}}
        className="   rounded-3xl flex  z-[999]  flex-col  md:gap-1 bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out delay-150 ">
           
           <div className="w-4/4 h-[150px] md:h-[120px] rounded-lg    ">
                <img src={car.image} className="h-[100%]   p-2   rounded-3xl w-[100%]" />
           </div>
           <div className="flex flex-col gap-1 p-1 mt-2">
           <span className="text-sm pl-1 text-gray-400 p-[0px]">{car.catagory}</span>
           <div className="flex items-end justify-between">
           <h2 className="text-xl md:text-2xl text-[#024E83] pl-1 font-semibold p-[0px]  ">{car.name}</h2>
            <span className="text-lg md:text-xl font-semibold pr-1 ">{car.price} PKR/ <span className="text-xs text-gray-400">day</span></span>

           </div>
           </div>
           <div className="flex gap-2 pb-2  px-3">
               <div className="flex flex-col  items-center gap-1    py-1  rounded-2xl">
                <div className="py-3 rounded-xl px-3 border bg-[#E0F2FD]"><MdAirlineSeatLegroomExtra  className="text-xl text-[#1BA8E4]"/></div>
                <span className="text-sm md:text-md">{car.seat} Seats</span>
               </div>
               <div className="flex flex-col  items-center gap-1    py-1  rounded-2xl">
                <div className="py-3 rounded-xl px-3 border bg-[#E0F2FD]"><MdMotionPhotosAuto className="text-xl text-[#1BA8E4]"/></div>
                <span className="text-sm md:text-md">Ac</span>
               </div>
               <div className="flex flex-col  items-center gap-1    py-1  rounded-2xl">
                <div className="py-3 rounded-xl px-3 border bg-[#E0F2FD]"><GiCarDoor className="text-xl text-[#1BA8E4]"/></div>
                <span className="text-sm md:text-md">{car.seat}</span>
               </div>
               
           </div>
           {/* <div className="flex justify-between items-center w-full"> */}
               <NavLink to={`/singlecar/${car._id}`} className="border py-3 px-5 text-center rounded-b-3xl bg-[#1AA9E5] text-white">Rent Now</NavLink>
           {/* </div> */}
        </motion.div>
        </AnimatePresence>
     )})}   
    </div>
  );
};
