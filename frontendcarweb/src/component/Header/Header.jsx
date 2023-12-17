import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const links = [
    {
      to: "/",
      linkText: "Home",
    },
    {
      to: "/allcar",
      linkText: "Vehicles",
    },
    {
      to: "/about",
      linkText: "About",
    },
    {
      to: "/contact",
      linkText: "Contact",
    },
    {
      to: "/login",
      linkText: "Login",
    },
    {
      to: "/register",
      linkText: "Signup",
    },
    // {
    //   to: "/dashboard",
    //   linkText: "Dashboard",
    // },
  ];

  const variants = {
    open: { height: "100%" },
    closed: { height: "60px" },
  };

  const toggleVariants = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`dark ${toggle ? "h-[100%]" : "h-[60px]"}  h-[60%] lg:mb-20 flex flex-col  px-5 justify-between lg:flex-row lg:justify-between lg:px-10 lg:h-[80px] lg:items-center w-[100%]`}
      >
        <div className="text-xl   lg:text-3xl italic flex h-full pt-3 lg:pt-0  justify-between gap-2  items-center font-mono  text-white ">
          <div className="flex gap-2">
            <div className="lg:first-letter:text-4xl first-letter:text-3xl">
              Car{" "}
            </div>
            <div className="lg:first-letter:text-4xl first-letter:text-3xl">
              Rental
            </div>
          </div>
          {!toggle ? (
            <div
              className="flex flex-col gap-2"
              onClick={() => setToggle(!toggle)}
            >
              <div className="h-[3px] w-8 bg-[white] lg:hidden"></div>
              <div className="h-[3px] w-8 bg-[white] lg:hidden"></div>
              <div className="h-[3px] w-8 bg-[white] lg:hidden"></div>
            </div>
          ) : (
            <motion.div
              className="flex w-8 h-full relative top-0 right-0   gap-2"
              onClick={() => setToggle(!toggle)}
              variants={toggleVariants}
              initial="closed"
              animate={toggle ? "open" : "closed"}
              transition={{ duration: "0.5" }}

            >
              <div className="h-[3px] w-8 bg-[white] absolute top-0 lg:hidden rotate-[50deg]"></div>
              <div className="h-[3px] w-8 bg-[white] absolute top-0 lg:hidden rotate-[140deg]"></div>
            </motion.div>
          )}
        </div>
        <AnimatePresence>
          {/* {toggle && ( */}
            <motion.div
              key="menu"
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <ul className="h-[90vh]  lg:h-full flex flex-col items-center gap-6 p-4 lg:p-0 flex justify-center   lg:flex-row ">
                {links.map((element, index) => (
                  <motion.li
                    initial={{ opacity: 0, x: 350, y: 100 }}
                    whileInView={{ opacity: 5, x: 0, y: 0 }}
                    transition={{ duration: "0.5", delay: index * 0.12 }}
                    key={index}
                    viewport={{ once: true }}
                    className="rounded flex justify-center w-[90px]"

                  >
                    <NavLink
                      to={element.to}
                      onClick={()=> setToggle(!toggle)}
                      className="block opacity-100 py-2 focus:border-b-2  font-thin text-lg lg:text-xl flex justify-center text-white  hover:text-white  lg:flex lg:p-1 lg:w-[100px] lg:justify-center "
                    >
                      {element.linkText}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          {/* )} */}
        </AnimatePresence>
        
      </motion.div>
    </>
  );
};