import React, { useEffect, useState } from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { getAllCar } from "../../../actions/carAction";

export const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCar());
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.subject || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
    } else {
      // Handle form submission logic here
      console.log("Form submitted:", formData);
      // Clear form data after submission if needed
      const res = await fetch("http://localhost:7000/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      setFormData({
        subject: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:px-5 md:py-5  lg:px-40 w-[100%]  ">
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 5, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: "1" }}
        className=" w-[100%] md:w-[60%] p-5 flex flex-col gap-5 py-10"
      >
        <h1 className="text-xl font-bold first-letter:text-2xl md:first-letter:text-4xl">
          Contact US
        </h1>
        <span className="">
          If you need any help with car rental feel free to write us
        </span>

        <div className="my-5  ">
          <span className="my-5 flex font-semibold">Inquries & Support</span>
          <div className="flex flex-col w-[100%]   gap-10 md:w-[60%] md:flex-row justify-between  text-blue-500">
            <span className="flex gap-3 items-center ">
              <MdOutlinePhoneInTalk className="text-2xl " />
              +923495155816{" "}
            </span>
            <span className="flex gap-5 items-center">
              <FaWhatsapp className="text-[green] text-2xl " />
              WhatsApp
            </span>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 5, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: "1" }}
          className="md:w-3/6 mx-2"
        >
          <form
            className=" border-4 p-10 flex flex-col gap-3 rounded-lg"
            onSubmit={handleSubmit}
          >
            <h1 className="text-xl font-bold mb-5">Contact US</h1>
            <div className="flex flex-col border py-2 my-3 px-3 rounded-md">
              <label className="text-xs label pb-1 opacity-70">Subject *</label>
              <input
                className="bg-transparent pl-0 text-sm focus:outline-none"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter your subject"
              />
            </div>
            <div className="flex flex-col border py-2 px-3 my-3 rounded-md">
              <label className="text-xs label pb-1 opacity-70">EMAIL *</label>
              <input
                className="bg-transparent pl-0 text-sm focus:outline-none"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col border py-2 px-3 my-3 rounded-md">
              <label className="text-xs bg-tranparent label pb-1 opacity-70">
                MESSAGE *
              </label>
              <textarea
                className=" pl-0 text-sm focus:outline-none"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="border dark py-2  rounded-md bg-blue-500 text-white"
            >
              SEND MESSAGE
            </button>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
