import React from "react";
import { IoMdAdd } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { MdCarRental } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
export const Dashboard = () => {
  return (
    <div className="flex flex-col pt-5 gap-5">
      <div className="flex items-center w-[80vw] justify-between">
        <h1 className="">Dashboard</h1>
        <div className="flex gap-4">
          <div className="flex flex-row gap-3 shadow button items-center border py-2 px-8 rounded-3xl">
            <IoMdAdd />
            <span className="">Add Users</span>
          </div>
          <div className="flex flex-row gap-3 shadow button items-center border py-2 px-8 rounded-3xl">
            <IoMdAdd />
            <span className="">Add Vechiles</span>
          </div>
          <div className="flex flex-row gap-3 shadow  items-center border py-2 px-8 rounded-3xl">
            <IoPersonOutline />
            <span className="">Admanistrator</span>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex items-center p-3 border rounded-xl button">
          <MdCarRental  className="text-[40px] "/>
          <div className="flex flex-col w-[200px] items-end ">
            <span className="">Vehicle On</span>
            <span className="">Rent</span>
            <span className="">1</span>
          </div>
        </div>
        <div className="flex items-center p-3 border rounded-xl button">
          <MdEventAvailable  className="text-[40px] "/>
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
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Cell Phone
                </th>
                <th scope="col" class="px-6 py-3">
                    Start date/End date
                </th>
                <th scope="col" class="px-6 py-3">
                    Model
                </th>
                <th scope="col" class="px-6 py-3">
                    License plate
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                </th>
                <td class="px-6 py-4">
                    Mehtab Ahmmad
                </td>
                <td class="px-6 py-4">
                    +923498654876
                </td>
                <td class="px-6 py-4">
                    17-12-2023/18-12-2023
                </td>
                <td class="px-6 py-4">
                    Audi 4
                </td>
                <td class="px-6 py-4">
                    L-002
                </td>
                
            </tr>
        </tbody>
    </table>
</div>
    </div>
  );
};
