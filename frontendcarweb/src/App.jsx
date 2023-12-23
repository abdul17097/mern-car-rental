import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './component/Screen/Home'
import { Header } from './component/Header/Header'
import { Register } from './component/Screen/Forms/Register'
import { Login } from './component/Screen/Forms/Login'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CarForm from './component/Screen/CarForm/CarForm'
import LandingPage from './component/Screen/LandingPage/LandingPage'
import { SingleCar } from './component/Screen/SingleCar/SingleCar'
import { AllCar } from './component/Screen/AllCar/AllCar'
import AboutUs from './component/Screen/About Us/AboutUs'
import {gapi} from 'gapi-script'
import { Contact } from './component/Screen/Contact/Contact'
import "./App.css"
import { Admin } from './component/AdminPannel/Admin'
import { Footer } from './component/Footer/Footer'
function App() {
    function start(){
      gapi.client.init({
        clientId : '417158747491-a5tpqo2gnkn544tj2j3vee8aqg0tnl2g.apps.googleusercontent.com',
        scope: ""
      })
      gapi.load('client: auth2', start)
    }
  return (
    <>
       <ToastContainer/>
    <Header/>
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/allCar' element={<AllCar/>}/>
      <Route path='/addCar' element={<CarForm/>}/>
      <Route path='/singlecar/:id' element={<SingleCar/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>} />
      {/* <Route path='/dashboard' element={<Admin/>} /> */}

    </Routes>
    <Footer/>
    </>
  )
}

export default App
