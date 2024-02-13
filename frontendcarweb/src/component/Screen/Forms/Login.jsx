import React, { useEffect, useState } from "react";
import "./form.css";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";
import { userLogin } from "../../../actions/userAction";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.userReducer);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    // Check for success state changes
    if (state.success) {
      toast("Successfully Login");
      navigate(-1);
    }
  }, [state.success]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = userData;
    if (!email) {
      toast("please enter email");
    } else if (!password) {
      toast("please enter password");
    } else {
      dispatch(userLogin(userData));
      console.log(state);
      if (state.userInfo) {
        toast("Successfully Login");
        navigate("/");
      }
    }
  };

  return (
    <div className="flex flex-col w-6/6  px-5 md:px-14">
      <div className="w-6/6  flex md:flex-row flex-col">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 5, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: "1" }}
          className="md:w-3/6"
        >
          <div className=" flex flex-col gap-3 py-10 md:pr-10 ">
            <h3 className="text-4xl text-bold">Who are we?</h3>
            <p className="text-[#4d95ec] mb-10">
              Working hours of Renty customer care team are 9am - 6pm
            </p>
            <p className="opacity-60">
              Our team is key to our success. We take pride in our work and go
              above and beyond to deliver the best possible customer experience.
              We personally use our car rental services, so we can be sure of
              customer satisfaction.
            </p>
          </div>
        </motion.div>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 5, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: "1" }}
            className="md:w-3/6"
          >
            <form
              onSubmit={handleSubmit}
              className=" border-4 p-5 md:p-10 flex flex-col gap-3 rounded-lg"
            >
              <h1 className="text-3xl font-bold mb-5">LOG IN</h1>
              <div className="flex flex-col border py-2 px-3 rounded-md">
                <label className="text-xs label pb-1 opacity-70">EMAIL *</label>
                <input
                  className="bg-transparent pl-0 text-sm focus:outline-none"
                  type="email"
                  placeholder="Enter your email"
                  onChange={handleInput}
                  name="email"
                />
              </div>
              <div className="flex flex-col border py-2 px-3 rounded-md">
                <label className="text-xs label pb-1 opacity-70">
                  PASSWORD *
                </label>
                <input
                  className="bg-transparent pl-0 text-sm focus:outline-none"
                  type="password"
                  placeholder="Enter your password"
                  onChange={handleInput}
                  name="password"
                />
              </div>
              <input
                type="submit"
                className="border button py-2 cursor-pointer rounded-md bg-blue-500 text-white"
                value="LOGIN"
              />
              {/* <GoogleLogin
            onSuccess = {onSuccess}
            onError = {onFailure}
            buttonText = "Login"
            isSignedIn = {true}
            clientId = '417158747491-a5tpqo2gnkn544tj2j3vee8aqg0tnl2g.apps.googleusercontent.com'
            cookiePolicy = {'single_host_origin'}
          /> */}
              <div className="flex justify-center mt-5">
                <p>
                  Dont have an account?{" "}
                  <NavLink
                    to="/register"
                    className="border py-3 px-2 rounded-md font-bold text-xs"
                  >
                    CREATE AN ACCOUNT
                  </NavLink>
                </p>
              </div>
              {/* <div className="flex justify-center mt-5">
            <p>Forgot your password? <NavLink className="border py-3 px-2 rounded-md font-bold text-xs">PASSWORD RESET</NavLink></p>
          </div> */}
            </form>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
