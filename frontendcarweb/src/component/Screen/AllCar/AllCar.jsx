import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchCar } from "../../../actions/carAction";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { MdAirlineSeatLegroomExtra } from "react-icons/md";
import { MdMotionPhotosAuto } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { CarCard } from "./CarCard";
export const AllCar = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.carReducer);
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  useEffect(() => {
    dispatch(fetchCar(params));
  }, []);
  return (
    <div className="bg-[#FFFFFF]  ">
      <h3 onClick={() => navigate(-1)} className="border">
        Back
      </h3>
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
              <label htmlFor="" className="">
                Model
              </label>
              <input type="text" className="" />
            </div>
            <div className="">
              <label htmlFor="" className="">
                Vehicle TYpe
              </label>
              <input type="text" className="" />
            </div>
            <div className="">
              <label htmlFor="" className="">
                Booking Type
              </label>
              <input type="text" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10 flex grid justify-between gap-10 md:px-44 px-3 w-5/5 border   sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        {category.cars &&
          category.cars.map((car, index) => {
            return <CarCard car={car} key={index} />;
          })}
      </div>
    </div>
  );
};
