import React, { useEffect } from "react";
import "./Home.css";
import { HeroSection } from "./HeroSection/HeroSection";
import { fetchCar, getAllCar } from "../../actions/carAction";
import { useDispatch } from "react-redux";
import HomeSearch from "./Search/HomeSearch";
import { OfferExperiance } from "./Search/OfferExperiance";
import { Catagoryies } from "./Search/Catagoryies";
import { motion } from "framer-motion";
import LatestCar from "../LatestCar";
export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCar());
  }, []);
  return (
    <>
      <HeroSection />
      <HomeSearch />
      <Catagoryies />

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-5/5 py-10 mb-12"
      >
        <div className="bgLine   w-full">
          <div className=" mx-3 md:mx-20  bg-[#FEFEFE] shadow-lg flex  md:gap-20 flex-col  md:justify-between p-4 md:p-10 bgCarImage   rounded-lg">
            <div className="w-5/5 flex flex-col  ">
              <h6 className="text-xl text-[#1AA9E5] pb-5">OUR BENIFITS</h6>
              <snap className="md:text-[50px] font-bold ">Why you should </snap>
              <p className="md:text-[50px] font-bold ">
                <span className="text-[#E56232]">rent a car </span>
                with us?
              </p>
            </div>
            <div className="w-6/6 flex flex-wrap gap-5  justify-around    md:flex-row">
              <div className=" flex gap-5 items-center    py-1 md:py-4">
                <span className="md:text-[50px] text-lg font-bold text-[#1AA9E5] text-right ">
                  450
                </span>
                <div className="flex flex-col font-bold opacity-60 md:text-xl">
                  <span>rental</span>
                  <span>companies</span>
                </div>
              </div>
              <div className=" flex gap-5 items-center   py-1 md:py-4 ">
                <span className="md:text-[50px] text-lg font-bold text-[#1AA9E5] text-right ">
                  315
                </span>
                <div className="flex flex-col font-bold opacity-60 md:text-xl">
                  <span>rental cars</span>
                  <span>registered</span>
                </div>
              </div>
              <div className=" flex gap-5 items-center   py-1 md:py-4">
                <span className="md:text-[50px] text-lg font-bold text-[#1AA9E5] text-right ">
                  35k
                </span>
                <div className="flex flex-col font-bold opacity-60 md:text-2xl">
                  <span>satsified</span>
                  <span>clients</span>
                </div>
              </div>
              <div className=" flex gap-5 items-center   py-1 md:py-4">
                <span className="md:text-[50px] text-lg font-bold text-[#1AA9E5] text-right  ">
                  60
                </span>
                <div className="flex flex-col font-bold opacity-60 md:text-xl">
                  <span>seconds average</span>
                  <span>booking time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OfferExperiance />
        <LatestCar />
      </motion.div>
    </>
  );
};
