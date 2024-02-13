import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCar } from "../../../actions/carAction";

const AboutUs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCar());
  }, []);
  return (
    <div>
      <div className="md:block hidden ">
        <img
          src="/aboutus.jpg"
          alt=""
          className="relative object-cover  bottom-20 z-[-1]  h-[400px] w-[100%]"
        />
      </div>
      <div className="md:hidden ">
        <img
          src="/about-mobile.jpg"
          alt=""
          className="relative   h-[250px] object-cover w-[100%]"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: "0.9" }}
        className="px-5 py-5  flex flex-col gap-5 md:px-32"
      >
        <h2 className="text-2xl font-bold  first-letter:text:3xl md:first-letter:text-4xl">
          ABOUT US
        </h2>
        <p className="">
          Welcome to Car Rental, your premier destination for hassle-free car
          rentals. At Car Rental, we redefine the way you explore the world by
          providing top-notch vehicles with exceptional service. Whether you're
          embarking on a business trip, family vacation, or a weekend getaway,
          our diverse fleet of well-maintained cars ensures a comfortable and
          reliable journey. <br />
          <br /> Experience convenience at your fingertips with our
          user-friendly online booking platform, transparent pricing, and
          flexible rental options. Choose Car Rental for a seamless and
          enjoyable car rental experience that goes beyond transportation – it's
          about making every journey memorable. Your adventure starts with us.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: "1" }}
        className="px-5 py-5 flex flex-col gap-5 md:px-32"
      >
        <h2 className="text-2xl font-semibold  first-letter:text-2xl md:first-letter:text-4xl">
          What we do
        </h2>
        <p className="">
          At Car Rental, we specialize in delivering unparalleled car rental
          services designed to enhance your travel experience. Our dedicated
          team is committed to providing top-notch vehicles, ensuring your
          journeys are not just about transportation but about creating lasting
          memories. <br />
          <br /> With a diverse fleet of well-maintained cars, transparent
          pricing, and a user-friendly online booking platform, we redefine
          convenience in car rentals. Whether it's a business trip, family
          vacation, or a spontaneous getaway, we take pride in offering
          reliable, comfortable, and stylish transportation options. Choose Car
          Rental for a seamless journey from booking to destination, where every
          ride is an opportunity to explore with ease and comfort.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
