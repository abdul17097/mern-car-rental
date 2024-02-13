import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Catagoryies = () => {
  return (
    <motion.div className="md:px-20 px-3 flex flex-col bg-[#FFFFFF] gap-10 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-[35px] text-[#005085] font-semibold"
      >
        What type of car are you looking for?
      </motion.h1>
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:justify-around md:item-center md:justify-between  gap-5">
        <NavLink to="/search/Budget" className="">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 hover:border p-5 hover:rounded-xl hover:shadow-xl"
          >
            <img
              src="/budget.png"
              alt=""
              className="w-60 h-32 hover:bg-[red] "
            />
            <h2 className="text-[18px] text-[#005085] font-bold">Budget</h2>
            <p className="text-[18px] font-thin">Daihastu Mira or similar</p>
          </motion.div>
        </NavLink>
        <NavLink to="/search/Standard" className="">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 hover:border p-5 hover:rounded-xl hover:shadow-xl"
          >
            <img src="/standard.png" alt="" className="w-60 h-32 " />
            <h2 className="text-[18px] text-[#005085] font-bold">Standard</h2>
            <p className="text-[18px] font-thin">Toyota Corolla or similar</p>
          </motion.div>
        </NavLink>
        <NavLink to="/search/Luxury" className="">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 hover:border p-5 hover:rounded-xl hover:shadow-xl"
          >
            <img src="/Luxurycar.png" alt="" className="w-60 h-32 " />
            <h2 className="text-[18px] text-[#005085] font-bold">Luxury</h2>
            <p className="text-[18px] font-thin">Marcedes Benz or similar</p>
          </motion.div>
        </NavLink>
        <NavLink to="/search/Suv" className="">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 hover:border p-5 hover:rounded-xl hover:shadow-xl"
          >
            <img src="/suv.png" alt="" className="w-60 h-32 " />
            <h2 className="text-[18px] text-[#005085] font-bold">SUV</h2>
            <p className="text-[18px] font-thin">Land Cruiser or similar</p>
          </motion.div>
        </NavLink>
        <NavLink to="/search/Van" className="">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 hover:border p-5 hover:rounded-xl hover:shadow-xl"
          >
            <img src="/vans.png" alt="" className="w-60 h-32 " />
            <h2 className="text-[18px] text-[#005085] font-bold">
              VAN and Coasters
            </h2>
            <p className="text-[18px] font-thin">Toyota Coaster or similar</p>
          </motion.div>
        </NavLink>
      </div>
    </motion.div>
  );
};
