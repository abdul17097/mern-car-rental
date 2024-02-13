import React from "react";
import { NavLink } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
export const Footer = () => {
  return (
    <div className="bg-[#0D274E] w-full  lg:px-20 px-5 py-12 gap-10 lg:mt-20 flex flex-col rounded-t-[50px] text-white">
      <div className="text-center text-[30px] lg:text-[50px] font-mone">
        Car Rental
      </div>
      <div className="grid gap-10 lg:gap-5 grid-col-1 lg:grid-cols-3 justify-between border-y border-gray-600 py-16">
        <div className=" gap-5 flex flex-col ">
          <h2 className="text-2xl  font-mono pb-5">ABOUT</h2>
          <p className="text-[#AABDBE] font-thin">
            Welcome to Car Rental, your premier destination for hassle-free car
            rentals. At Car Rental, we redefine the way you explore the world by
            providing top-notch vehicles with exceptional service.{" "}
          </p>
          <NavLink
            to="/about"
            className="bg-[#E69A2B] hover:bg-[#C2C2C2] hover:text-black flex p-2 flex items-center justify-center w-20 rounded-lg"
          >
            More
          </NavLink>
        </div>
        <div className="gap-5 flex flex-col lg:pl-24">
          <h2 className="text-2xl  font-mono pb-5">QUICK CONTACT</h2>
          <ul className="flex flex-col gap-5 text-[#AABDBE]">
            <li className="flex gap-2 items-center">
              <MdOutlinePhone className="text-[#E69A2B] text-2xl" />
              <span className="text-lg">+923495155816</span>
            </li>
            <li className="flex gap-2 items-center">
              <MdOutlineMailOutline className="text-[#E69A2B] text-2xl" />
              <span className="text-lg">abdul17097@gmail.com</span>
            </li>
            <li className="flex gap-2 items-center">
              <HiOutlineOfficeBuilding className="text-[#E69A2B] text-2xl" />
              <span className="text-lg">Office SF-489, Deans</span>
            </li>
          </ul>
        </div>
        <div className="gap-5 flex lg:pl-24 flex-col">
          <h2 className="text-2xl  font-mono pb-5">FOLLOW US</h2>
          <ul className="flex gap-5">
            <li className=" w-10 h-10 flex justify-center items-center rounded-lg bg-[#C2C2C2] hover:text-[white] text-black hover:bg-[#E69A2B]">
              <CiFacebook className="text-3xl" />
            </li>
            <li className=" w-10 h-10 flex justify-center items-center rounded-lg bg-[#C2C2C2] hover:text-[white] text-black hover:bg-[#E69A2B]">
              <IoLogoInstagram className="text-3xl" />
            </li>
            <li className=" w-10 h-10 flex justify-center items-center rounded-lg bg-[#C2C2C2] hover:text-[white] text-black hover:bg-[#E69A2B]">
              <CiTwitter className="text-3xl" />
            </li>
            <li className=" w-10 h-10 flex justify-center items-center rounded-lg bg-[#C2C2C2] hover:text-[white] text-black hover:bg-[#E69A2B]">
              <CiYoutube className="text-3xl" />
            </li>
          </ul>
        </div>
      </div>
      <div className="text-[#AABDBE] text-center  text-lg font-thin ">
        Copyright © 2023 All rights reserved.
      </div>
    </div>
  );
};
