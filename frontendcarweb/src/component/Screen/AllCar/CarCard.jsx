import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { GiCarDoor } from "react-icons/gi";
import { MdAirlineSeatLegroomExtra, MdMotionPhotosAuto } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const CarCard = ({ car }) => {
  return (
    <AnimatePresence>
      <motion.div
        // initial={{ opacity: 0 , y: -200  }}
        // animate={{ opacity: 5, y:0 }}
        // viewport={{ once: true }}
        // transition={{ duration: 0.5, delay: index * 0.1}}
        className="rounded-xl flex bg-[#FFFFFF] relative z-[999] md:w-[100%] w-[100%]   flex-col  md:gap-1 bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out delay-150 "
      >
        <div className="m-w-[440px] h-[180px] scale-x-[-1]  rounded-md">
          <img
            src={car.image}
            className="h-[100%]   p-2 object-contain   bottom-20 left-14 rounded-3xl w-[100%]"
          />
        </div>
        <div className="flex flex-col gap-1 h-[100%] p-1 mt-2">
          <span className="text-sm pl-1 text-gray-400 p-[0px]">
            {car.catagory}
          </span>
          <div className="flex items-end justify-between">
            <h2 className="text-xl md:text-xl capitalize text-[#024E83] pl-1 font-semibold p-[0px]  ">
              {car.name}
            </h2>
            <span className="text-lg md:text-lg font-semibold pr-1 ">
              {car.price} PKR/{" "}
              <span className="text-xs text-gray-400">day</span>
            </span>
          </div>
        </div>
        <div className="flex gap-2 pb-2  px-3">
          <div className="flex flex-col  items-center gap-1    py-1  rounded-2xl">
            <div className="py-3 rounded-xl px-3 border bg-[#E0F2FD]">
              <MdAirlineSeatLegroomExtra className="text-xl text-[#1BA8E4]" />
            </div>
            <span className="text-sm md:text-md">{car.seat} Seats</span>
          </div>
          <div className="flex flex-col  items-center gap-1    py-1  rounded-2xl">
            <div className="py-3 rounded-xl px-3 border bg-[#E0F2FD]">
              <MdMotionPhotosAuto className="text-xl text-[#1BA8E4]" />
            </div>
            <span className="text-sm md:text-md">Ac</span>
          </div>
          <div className="flex flex-col  items-center gap-1    py-1  rounded-2xl">
            <div className="py-3 rounded-xl px-3 border bg-[#E0F2FD]">
              <GiCarDoor className="text-xl text-[#1BA8E4]" />
            </div>
            <span className="text-sm md:text-sm">{car.seat}</span>
          </div>
        </div>
        {/* <div className="flex justify-between items-center w-full"> */}
        <NavLink
          to={`/singlecar/${car._id}`}
          className="border py-3 px-5 text-center rounded-b-xl bg-[#1AA9E5] text-white"
        >
          Rent Now
        </NavLink>
        {/* </div> */}
      </motion.div>
    </AnimatePresence>
  );
};
