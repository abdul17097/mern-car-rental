import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./component/Screen/Home";
import { Header } from "./component/Header/Header";
import { Register } from "./component/Screen/Forms/Register";
import { Login } from "./component/Screen/Forms/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarForm from "./component/Screen/CarForm/CarForm";
import LandingPage from "./component/Screen/LandingPage/LandingPage";
import { SingleCar } from "./component/Screen/SingleCar/SingleCar";
import { AllCar } from "./component/Screen/AllCar/AllCar";
import AboutUs from "./component/Screen/About Us/AboutUs";
import { gapi } from "gapi-script";
import { Contact } from "./component/Screen/Contact/Contact";
import "./App.css";
import { Admin } from "./component/AdminPannel/Admin";
import { Footer } from "./component/Footer/Footer";
import { Cars } from "./component/AdminPannel/Cars";
import User from "./component/AdminPannel/User";
import { Sidebar } from "./component/AdminPannel/Sidebar";
import { Dashboard } from "./component/AdminPannel/Dashboard";
import WhatsAppButton from "./component/WhatsAppButton/WhatsAppButton";
import { useSelector, useDispatch } from "react-redux";
import { userLoginCheck } from "./actions/userAction";
import { Success } from "./component/Success";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLoginCheck(JSON.parse(localStorage.getItem("userInfo"))));
  }, []);

  const { userInfo } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  return (
    <>
      <ToastContainer />
      {userInfo && userInfo.isAdmin ? (
        <>
          <div className="flex h-[100vh] w-[100vw] ">
            <Sidebar />
            <div className="flex flex-col p-5 gap-2 relative left-[16vw]">
              <Routes>
                <Route path="/register" element={<Register />} />
                {/* <Route path='/login' element={<Login/>}/> */}
                <Route path="/addCar" element={<CarForm />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/users" element={<User />} />
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <>
          <Header />
          {/* <h3 onClick={()=> navigate(-1)} className="border">Back</h3> */}

          <WhatsAppButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/allCar" element={<AllCar />} /> */}
            <Route path="/search/:catagory" element={<AllCar />} />
            <Route path="/singlecar/:id" element={<SingleCar />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/success" element={<Success />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
