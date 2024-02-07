import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaCar } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { RiParentFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {useDispatch} from "react-redux"
import {userLogout} from "../../actions/userAction"
export const Sidebar = () => {
  const dispatch = useDispatch();
  const logout = ()=>{
    dispatch(userLogout("Successfully Logout!"))
    localStorage.removeItem("userInfo")
    localStorage.removeItem("reduxState");
    localStorage.removeItem("emailSentFlag");
  }
  return (
    <div className="border-r px-5 py-10 w-[16vw] fixed h-screen flex flex-col dark text-white p">
      <div className="text-xl   lg:text-[28px] italic  font-mono  text-white ">
          Car Rental
      </div>

      <ul className="flex mt-14 flex-col gap-6 text-gray-300 ">
        <NavLink to="/">
          <li className="flex gap-2  items-center">
            <AiOutlineDashboard className="text-xl" />
            <span className="text-lg font-thin">Dashboard</span>
          </li>
        </NavLink>
        <NavLink to=" ">
          <li className="flex gap-2 text-lg items-center">
            <IoHomeOutline className="text-xl" />
            <span className="text-lg font-thin">Home</span>
          </li>
        </NavLink>
        <NavLink to="/cars">
          <li className="flex gap-2 text-lg items-center">
            <FaCar className="text-xl"  />
            <span className="text-lg font-thin">Cars</span>
          </li>
        </NavLink>
        <NavLink to="/users">
          <li className="flex gap-2 text-lg items-center">
            <RiParentFill className="text-xl"  />
            <span className="text-lg font-thin">Customers</span>
          </li>
        </NavLink>
        <NavLink>
          <li className="flex gap-2 text-lg items-center">
            <IoIosLogOut className="text-xl"  />
            <span onClick={logout} className="text-lg font-thin">Sign out</span>
          </li>
        </NavLink>
        <NavLink to="/addCar">
          <li className="flex gap-2 text-lg items-center relative">
            <FaCar className="text-xl"/>
            <span className="absolute bottom-[12px] left-[-5px] text-2xl font-bold">+</span>
            <span className="text-lg font-thin">Add Car</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};
