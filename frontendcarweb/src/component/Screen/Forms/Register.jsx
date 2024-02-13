import React, { useEffect, useState } from "react";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { userSignup } from "../../../actions/userAction";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userphone: "",
    password: "",
    usercnic: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo, success } = useSelector((state) => state.userReducer);
  const handleEvent = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const { name, email, userphone, password, usercnic } = formData;
    if (!name || !email || !userphone || !password || !usercnic) {
      toast("Please fill all the fields");
    } else {
      try {
        await dispatch(
          userSignup({ name, email, password, userphone, usercnic })
        );
        if (success) {
          navigate("/"); // Redirect to the home page
          toast("Signup successful");
        }
      } catch (error) {
        toast("Signup failed");
      }
    }
  };

  return (
    <div className="flex flex-col w-6/6 mb-10 px-5 md:px-14">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 5, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: "1" }}
        >
          <div className="w-6/6  flex flex-col md:flex-row mt-5">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 5, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: "1" }}
              className="md:w-3/6 flex flex-col gap-3 py-10 md:pr-10"
            >
              <h3 className="text-4xl text-bold">Enjoy the ride</h3>
              <p className="text-[#4298FF] mb-10">
                Online chat with customer care representative
              </p>
              <p className="opacity-60">
                We combine many years of experience with the most efficient and
                effective working practices. We understand the car rental market
                and also the specific requirements of the modern user. It is our
                desire to create truly unique, useful platforms for our clients.
              </p>
            </motion.div>
            <form
              className="md:w-3/6 border-4 md:p-10 p-5 flex flex-col gap-3 rounded-lg"
              onSubmit={submitForm}
            >
              <h1 className="text-3xl font-bold mb-5">REGISTER</h1>
              <div className="flex flex-col border py-2 px-3 rounded-md">
                <label className="text-xs label pb-1 opacity-70">EMAIL *</label>
                <input
                  className="bg-transparent pl-0 text-sm focus:outline-none"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  onChange={(event) => handleEvent(event)}
                />
              </div>
              <div className="flex flex-col border py-2 px-3 rounded-md">
                <label className="text-xs label pb-1 opacity-70">
                  PHONE NUMBER *
                </label>
                <input
                  className="bg-transparent pl-0 text-sm focus:outline-none"
                  type="text"
                  placeholder="Enter your email"
                  name="userphone"
                  onChange={(event) => handleEvent(event)}
                />
              </div>
              <div className="flex flex-col border py-2 px-3 rounded-md">
                <label className="text-xs label pb-1 opacity-70">NAME *</label>
                <input
                  className="bg-transparent pl-0 text-sm focus:outline-none"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  onChange={(event) => handleEvent(event)}
                />
              </div>
              <div className="flex md:flex-row flex-col gap-3 md:justify-between py-4">
                <div className="flex flex-col w-full border py-2 px-3 rounded-md">
                  <label className="text-xs label pb-1 opacity-70">
                    PASSWORD *
                  </label>
                  <input
                    className="bg-transparent pl-0 text-sm focus:outline-none"
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    onChange={(event) => handleEvent(event)}
                  />
                </div>
                <div className="flex flex-col w-full border py-2 px-3 rounded-md">
                  <label className="text-xs label pb-1 opacity-70">
                    CNIC *
                  </label>
                  <input
                    className="bg-transparent pl-0 text-sm focus:outline-none"
                    type="number"
                    placeholder="Enter your cnic"
                    name="usercnic"
                    onChange={(event) => handleEvent(event)}
                  />
                </div>
              </div>
              <input
                type="submit"
                className="border button py-3 rounded-md bg-blue-500 text-white"
                value="REGISTER"
              />
              <div className="flex justify-center mt-5">
                <p>
                  Already have account?{" "}
                  <NavLink
                    to="/login"
                    className="border py-2 px-2 rounded-md font-bold text-xs"
                  >
                    LOG IN
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
