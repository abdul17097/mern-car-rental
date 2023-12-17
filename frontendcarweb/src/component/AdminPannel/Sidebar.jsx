import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaCar } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { RiParentFill } from "react-icons/ri";
export const Sidebar = () => {
  return (
    <div className="border-r px-5 py-10 w-[18%] flex flex-col dark text-white p">
      <div className="text-xl   lg:text-[28px] italic  font-mono  text-white ">
          Car Rental
      </div>

      <ul className="flex mt-14 flex-col gap-6 text-gray-300 ">
        <li className="flex gap-2  items-center">
          <AiOutlineDashboard className="text-xl" />
          <span className="text-lg font-thin">Dashboard</span>
        </li>
        <li className="flex gap-2 text-lg items-center">
          <IoHomeOutline className="text-xl" />
          <span className="text-lg font-thin">Home</span>
        </li>
        <li className="flex gap-2 text-lg items-center">
          <FaCar className="text-xl"  />
          <span className="text-lg font-thin">Cars</span>
        </li>
        <li className="flex gap-2 text-lg items-center">
          <RiParentFill className="text-xl"  />
          <span className="text-lg font-thin">Customers</span>
        </li>
        <li className="flex gap-2 text-lg items-center">
          <IoIosLogOut className="text-xl"  />
          <span className="text-lg font-thin">Sign out</span>
        </li>
      </ul>
    </div>
  );
};
