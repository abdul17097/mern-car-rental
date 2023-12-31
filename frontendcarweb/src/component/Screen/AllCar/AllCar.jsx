import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCar } from "../../../actions/carAction";
import { NavLink } from "react-router-dom";
import { MdAirlineSeatLegroomExtra } from "react-icons/md";
import { MdMotionPhotosAuto } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import HomeSearch from "../Search/HomeSearch";
export const AllCar = () => {
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.carReducer);

  useEffect(() => {
    dispatch(fetchCar());
  }, []);
  return (
    <div className="bg-[#FFFCF]  ">
      <div className="px-3 text-center border">
        <div className="">
          <div className="">
            <span className="">Where To Pick Up</span>
            <span className="">Drop-off at same location</span>
          </div>
          <div className="">
            <label htmlFor="" className="">
              Where To Do Off
            </label>
            <input type="text" className="" />
          </div>
          <div className="">
            <label htmlFor="" className="">
              Pick-Up Time
            </label>
            <input type="text" className="" />
          </div>
          <div className="">
            <label htmlFor="" className="">
              Drop-off Date
            </label>
            <input type="text" className="" />
          </div>
        </div>

        <div className="">
            <div className=""></div>
            <div className="">
                <div className="">
                    <label htmlFor="" className="">Model</label>
                    <input type="text" className=""/>
                </div>
                <div className="">
                    <label htmlFor="" className="">Vehicle TYpe</label>
                    <input type="text" className=""/>
                </div>
                <div className="">
                    <label htmlFor="" className="">Booking Type</label>
                    <input type="text" className=""/>
                </div>
            </div>
        </div>
      </div>
      <div className="mb-10 grid md:px-44 px-3 w-4/5   sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3  gap-5 md:gap-5 ">
        {cars.cars &&
          cars.cars.map((car, index) => {
            return (
              <AnimatePresence>
                <motion.div
                  // initial={{ opacity: 0 , y: -200  }}
                  // animate={{ opacity: 5, y:0 }}
                  // viewport={{ once: true }}
                  // transition={{ duration: 0.5, delay: index * 0.1}}
                  className="   rounded-3xl flex  z-[999]  flex-col  md:gap-1 bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out delay-150 "
                >
                  <div className="w-4/4 h-[150px] md:h-[120px] rounded-lg    ">
                    <img
                      src={car.image}
                      className="h-[100%]   p-2   rounded-3xl w-[100%]"
                    />
                  </div>
                  <div className="flex flex-col gap-1 p-1 mt-2">
                    <span className="text-sm pl-1 text-gray-400 p-[0px]">
                      {car.catagory}
                    </span>
                    <div className="flex items-end justify-between">
                      <h2 className="text-xl md:text-2xl text-[#024E83] pl-1 font-semibold p-[0px]  ">
                        {car.name}
                      </h2>
                      <span className="text-lg md:text-xl font-semibold pr-1 ">
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
                      <span className="text-sm md:text-md">
                        {car.seat} Seats
                      </span>
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
                      <span className="text-sm md:text-md">{car.seat}</span>
                    </div>
                  </div>
                  {/* <div className="flex justify-between items-center w-full"> */}
                  <NavLink
                    to={`/singlecar/${car._id}`}
                    className="border py-3 px-5 text-center rounded-b-3xl bg-[#1AA9E5] text-white"
                  >
                    Rent Now
                  </NavLink>
                  {/* </div> */}
                </motion.div>
              </AnimatePresence>
            );
          })}
      </div>
    </div>
  );
};
