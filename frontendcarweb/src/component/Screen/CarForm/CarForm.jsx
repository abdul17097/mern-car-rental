import React, { useState } from "react";
import { toast } from "react-toastify";
import {useDispatch} from "react-redux"

import carAddValidation from "../../../utils/formVaidation";
import { addCar } from "../../../actions/carAction";
const CarForm = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: "",
    catagory: "",
    year: "",
    color: "",
    mileage: "",
    transmission: "",
    maxSpeed: "",
    feulType: "",
    price: "",
    seat: "",
    reverseCamera: "",
    bluetooth: "",
    fmRadio: "",
    climateControl: "",
    image: null, // Initialize image as null
  });

  const handleChange = (e) => {
    const { name, value, type} = e.target;
    if(type === "file"){
      setFormData({...formData, image: e.target.files[0]})
    }else{
    setFormData({ ...formData, [name]: value });
  }};

  const handleSubmit = async (e) => {
    e.preventDefault();
    let message = carAddValidation(formData);
    if (message) {
      toast.error(message);
    } else {
      console.log(formData);
      dispatch(addCar(formData))
    }
  };

  return (
    <div className="mt-10 flex justify-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md w-5/6 flex border-8 flex-col rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="flex justify-between gap-5">
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              id="name"
              placeholder="Car Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="catagory"
            >
              Category
            </label>
            <select
              id="myDropdown"
              name="catagory"
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled selected className="">
                Select a Category
              </option>
              <option value="Luxury">Luxury Car</option>
              <option value="Sprots">Sprots Car</option>
              <option value="Business">Business Car</option>
              <option value="Van">Van Car</option>
            </select>
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="year"
            >
              Year
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="year"
              id="year"
              placeholder="Car Year"
              value={formData.year}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between gap-5">
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="color"
              >
                Color
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="color"
                id="color"
                placeholder="Car Color"
                value={formData.color}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="mileage"
              >
                Mileage
              </label>
              <select
                id="myDropdown"
                onChange={handleChange}
                name="mileage"
                className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled selected>
                  Select a Mileage
                </option>
                <option value="0-1000km">0-1000km</option>
                <option value="1000-2000km">1000-2000km</option>
                <option value="2000-3000km">2000-3000km</option>
                <option value="3000-4000km">3000-4000km</option>
                <option value="4000-5000km">4000-5000km</option>
                <option value="5000-6000km">5000-6000km</option>
              </select>
            </div>
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="transmission"
              >
                Transmission
              </label>
              <select
                id="myDropdown"
                name="transmission"
                onChange={handleChange}
                className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled selected>
                  Select a Transmission
                </option>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
                <option value="CVT">CVT</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Max Speed
              </label>
              <select
                id="myDropdown"
                name="maxSpeed"
                onChange={handleChange}
                className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled selected>
                  Select a Speed
                </option>
                <option value="190">190</option>
                <option value="220">220</option>
                <option value="240">240</option>
              </select>
            </div>
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Feul Type
              </label>
              <select
                id="myDropdown"
                name="feulType"
                onChange={handleChange}
                className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Petrol">Petrol</option>
                <option value="CNG">CNG</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="color"
              >
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="price"
                id="color"
                max="12000"
                min="0"
                placeholder="Enter price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Seats
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="seat"
                placeholder="Enter number of seat"
                value={formData.seat}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Reverse Camera
              </label>
              <select
                id="myDropdown"
                name="reverseCamera"
                onChange={handleChange}
                className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled selected>
                  Select a option
                </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Bluetooth
              </label>
              <select
                id="myDropdown"
                name="bluetooth"
                onChange={handleChange}
                className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled selected>
                  Select a option
                </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <div className="mb-4 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                FM Radio
              </label>
              <select
                id="myDropdown"
                onChange={handleChange}
                name="fmRadio"
                className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled selected>
                  Select a option
                </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Climate Control
              </label>
              <select
                id="myDropdown"
                name="climateControl"
                onChange={handleChange}
                className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled selected>
                  Select a option
                </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
          </div>
          <input
            type="file"
            id="imageInput"
            onChange={handleChange}
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            accept="image/*"
            class="mb-4"
          />
          {/* {formData.image && (
            <div className="w-full  flex justify-center my-10 ">
              <img
                src={formData.image && formData.image}
                class="w-[30rem] h-[30rem] rounded-lg"
                title="er"
                name="image"
              />
            </div>
          )} */}
        </div>
        {/* Add more form fields here */}
        <div className="flex w-full items-center justify-between">
          <button
            className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Car
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
