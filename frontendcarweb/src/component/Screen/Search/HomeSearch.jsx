import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { DateRangePicker, DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export default function HomeSearch() {
  const time = new Date().toLocaleTimeString();
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [selectedHour1, setSelectedHour1] = useState(null);
  const [selectedHour2, setSelectedHour2] = useState(null);

  const hours = Array.from({ length: 12 }, (_, index) => index + 1);

  const handlePickupHourChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedHour1(selectedValue);
  };

  const handleDropoffHourChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedHour2(selectedValue);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className=" flex  justify-center  "
    >
      <div className=" flex w-full md:w-auto  lg:items-center lg:w-auto shadow-xl   md:justify-center lg:justify-center   mx-5 gap-8 my-5 pt-5 lg:pt-0 flex-col lg:flex-row shadow lg:pl-5 lg:absolute bottom-8 border  rounded-xl bg-white">
        <div className="flex items-center  gap-2 ml-10 lg:ml-0">
          <CiSearch className="text-xl font-bold text-gray-500" />
          <input
            type="text"
            className=" focus:outline-none "
            placeholder="Search a car..."
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </div>
        <div className="flex items-center  gap-2 ml-10 lg:ml-0  items-center">
          <FaRegCalendarAlt className="text-gray-500 text-xl" />
          <div className="flex flex-col">
            <label htmlFor="" className="text-sm text-gray-500 font-thin">
              Pick up date
            </label>
            <input
              type="date"
              placeholder=""
              className="text-sm font-bold focus:outline-none  text-gray-600"
              value="Mon 15 Jun"
            />
          </div>
        </div>
        <div className="flex items-center  gap-2 ml-10 lg:ml-0  items-center">
          <MdOutlineWatchLater className="text-gray-500 text-xl" />
          {/* <div className="flex flex-col">
            <label htmlFor="" className="text-sm text-gray-500 font-thin">Time</label>
            <input type="date" placeholder="" className="text-sm font-bold  text-gray-600" value="Mon 15 Jun" />
          </div> */}
          <div className=" border flex p-1 rounded-md">
            <label className="text-sm" htmlFor="hour2">
              Drop off:
            </label>
            <select
              id="hour2"
              className="focus:outline-none"
              onChange={handleDropoffHourChange}
              value={selectedHour2}
            >
              {hours.map((hour) => (
                <React.Fragment key={hour}>
                  <option
                    value={`${hour}:00 AM`}
                    className="text-[#849095]"
                  >{`${hour}:00 AM`}</option>
                </React.Fragment>
              ))}
              {hours.map((hour) => (
                <React.Fragment key={hour}>
                  <option
                    value={`${hour}:00 PM`}
                    className="text-[#849095]"
                  >{`${hour}:00 PM`}</option>
                </React.Fragment>
              ))}
            </select>
            {/* {selectedHour && <p>Selected Hour: {selectedHour}</p>} */}
          </div>
        </div>
        <div className="flex items-center  gap-2 ml-10 lg:ml-0  items-center">
          <FaRegCalendarAlt className="text-gray-500 text-xl" />
          <div className="flex flex-col">
            {/* <label htmlFor="" className="text-sm text-gray-500 font-thin">
              Drop off date
            </label>
            <input
              type="date"
              placeholder=""
              className="text-sm font-bold  text-gray-600"
              value="Mon 15 Jun"
            /> */}
            <div className=" border flex p-1 rounded-md">
              <label className="text-sm" htmlFor="hour2">
                Drop off:
              </label>
              <select
                id="hour2"
                className="focus:outline-none"
                onChange={handleDropoffHourChange}
                value={selectedHour2}
              >
                {hours.map((hour) => (
                  <React.Fragment key={hour}>
                    <option
                      value={`${hour}:00 AM`}
                      className="text-[#849095]"
                    >{`${hour}:00 AM`}</option>
                  </React.Fragment>
                ))}
                {hours.map((hour) => (
                  <React.Fragment key={hour}>
                    <option
                      value={`${hour}:00 PM`}
                      className="text-[#849095]"
                    >{`${hour}:00 PM`}</option>
                  </React.Fragment>
                ))}
              </select>
              {/* {selectedHour && <p>Selected Hour: {selectedHour}</p>} */}
            </div>
          </div>
        </div>
        <div className="flex items-center  gap-2 ml-10 lg:ml-0  items-center">
          <MdOutlineWatchLater className="text-gray-500 text-xl" />
          <div className="flex flex-col">
            <label htmlFor="" className="text-sm text-gray-500 font-thin">
              Time
            </label>
            <input
              type="date"
              placeholder=""
              className="text-sm font-bold  text-gray-600"
              value="Mon 15 Jun"
            />
          </div>
        </div>
        <NavLink
          to={`/find/${query}`}
          className="flex items-center justify-center py-3 lg:px-6 lg:py-8 bg-[#005085] rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl  text-white"
        >
          Search
        </NavLink>
      </div>
    </motion.div>
  );
}
