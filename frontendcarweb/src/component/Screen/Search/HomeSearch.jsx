import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { DateRangePicker, DateRange } from "react-date-range";
import { addDays } from "date-fns";

export default function HomeSearch() {
  const time = new Date().toLocaleTimeString();
  const [data, setData] = useState({});
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  return (
    <div className=" flex  justify-center  ">
      <div className=" flex w-full md:w-auto  lg:items-center lg:w-auto shadow-xl   md:justify-center lg:justify-center   mx-5 gap-8 my-5 pt-5 lg:pt-0 flex-col lg:flex-row shadow lg:pl-5 lg:absolute bottom-8 border  rounded-xl bg-white">
        <div className="flex items-center  gap-2 ml-10 lg:ml-0">
          <CiSearch className="text-xl font-bold text-gray-500" />
          <input type="search" className=" focus:outline-none " placeholder="Pick up location..." />
        </div>
        <div className="flex items-center  gap-2 ml-10 lg:ml-0  items-center">
          <FaRegCalendarAlt className="text-gray-500 text-xl" />
          <div className="flex flex-col">
            <label htmlFor="" className="text-sm text-gray-500 font-thin">Pick up date</label>
            <input type="date" placeholder="" className="text-sm font-bold  text-gray-600" value="Mon 15 Jun" />
          </div>
        </div>
        <div className="flex items-center  gap-2 ml-10 lg:ml-0  items-center">
          <MdOutlineWatchLater className="text-gray-500 text-xl"/>
          <div className="flex flex-col">
            <label htmlFor="" className="text-sm text-gray-500 font-thin">Time</label>
            <input type="date" placeholder="" className="text-sm font-bold  text-gray-600" value="Mon 15 Jun" />
          </div>
        </div>
        <div className="flex items-center  gap-2 ml-10 lg:ml-0  items-center">
          <FaRegCalendarAlt className="text-gray-500 text-xl" />
          <div className="flex flex-col">
            <label htmlFor="" className="text-sm text-gray-500 font-thin">Drop off date</label>
            <input type="date" placeholder="" className="text-sm font-bold  text-gray-600" value="Mon 15 Jun" />
          </div>
        </div>
        <div className="flex items-center  gap-2 ml-10 lg:ml-0  items-center">
          <MdOutlineWatchLater className="text-gray-500 text-xl"/>
          <div className="flex flex-col">
            <label htmlFor="" className="text-sm text-gray-500 font-thin">Time</label>
            <input type="date" placeholder="" className="text-sm font-bold  text-gray-600" value="Mon 15 Jun" />
          </div>
        </div>
        <button className="flex items-center justify-center py-3 lg:px-6 lg:py-8 bg-[#005085] rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl  text-white">Search</button>

      </div>
    </div>
  );
}
