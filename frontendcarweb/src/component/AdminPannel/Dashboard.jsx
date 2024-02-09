import React, { useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { MdCarRental } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllOrder } from "../../actions/orderAction";
export const Dashboard = () => {
  const { orders } = useSelector((state) => state.orderReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrder());
  }, [dispatch]);
  return (
    <div className="flex flex-col pt-5 gap-5">
      <div className="flex items-center w-[80vw] justify-between">
        <h1 className="">Dashboard</h1>
        <div className="flex gap-4">
          <div className="flex flex-row gap-3 shadow button items-center border py-2 px-8 rounded-3xl">
            <IoMdAdd />
            <NavLink to="/register" className="">
              Add Users
            </NavLink>
          </div>
          <div className="flex flex-row gap-3 shadow button items-center border py-2 px-8 rounded-3xl">
            <IoMdAdd />
            <NavLink to="/addCar" className="">
              Add Vechiles
            </NavLink>
          </div>
          <div className="flex flex-row gap-3 shadow  items-center border py-2 px-8 rounded-3xl">
            <IoPersonOutline />
            <span className="">Admanistrator</span>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex items-center p-3 border rounded-xl button">
          <MdCarRental className="text-[40px] " />
          <div className="flex flex-col w-[200px] items-end ">
            <span className="">Vehicle On</span>
            <span className="">Rent</span>
            <span className="">1</span>
          </div>
        </div>
        <div className="flex items-center p-3 border rounded-xl button">
          <MdEventAvailable className="text-[40px] " />
          <div className="flex flex-col w-[200px] items-end ">
            <span className="">Vehicle On</span>
            <span className="">Rent</span>
            <span className="">1</span>
          </div>
        </div>
      </div>

      <div class="relative overflow-x-auto shadow-md w-[80vw] sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Vehicle On Rent
            {/* <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">A list of all the users in your account including their name, title, email and role.</p> */}
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                #
              </th>
              <th scope="col" class="px-6 py-3">
                Image
              </th>
              <th scope="col" class="px-6 py-3">
                UName
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Model
              </th>
              <th scope="col" class="px-6 py-3">
                Start date/End date
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Catagory
              </th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order, index) => (
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={order._id}
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td class="px-6 py-4">
                    <img
                      src={order.car.image}
                      className="border p-2 rounded-xl shadow-md w-20 h-14 object-fill"
                      alt=""
                    />
                  </td>
                  <td class="px-6 py-4">{order.user.name}</td>
                  <td class="px-6 py-4">{order.user.email}</td>
                  <td class="px-6 py-4">{order.name}</td>
                  <td class="px-6 py-4">{order.bookedTimeSlots.from}</td>
                  <td class="px-6 py-4">{order.totalAmount}</td>
                  <td class="px-6 py-4">{order.car.catagory}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
