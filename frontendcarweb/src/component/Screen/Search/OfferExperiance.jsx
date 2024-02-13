import "./OfferExperiance.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export const OfferExperiance = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex md:my-20 my-3"
    >
      <div className="md:mx-20  offer border w-full px-5 md:px-10 py-10 md:py-16 md:rounded-xl ">
        <div className="flex flex-col gap-2 text-gray-300 items-start">
          <p className="font-semibold text-xl">Limited Offer</p>
          <h3 className="text-[25px] md:text-[50px] font-semibold">
            <span className="text-[red]">30% </span>
            Off For First <br /> Time Rent a Car
          </h3>
          <NavLink
            to="#"
            className=" md:px-6 py-2 px-2 md:py-3 rounded text-white flex  items-center gap-2 bg-[#1AA9E5] font-bold"
          >
            <span>Get Started </span>
            <FaArrowRight />
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
};
