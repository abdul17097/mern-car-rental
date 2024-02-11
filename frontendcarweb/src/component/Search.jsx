import React from "react";
import { IoSearch } from "react-icons/io5";

export const Search = () => {
  return (
    <div className="px-3">
      <h1 className="text-4xl mt-3">Vheicles</h1>
      <div className="">
        <div className="flex items-center h-[5vh] py-6 dark text-white gap-3 px-3 shadow max-w-sm   rounded-3xl">
          <IoSearch className="text-2xl text-gray-300 " />
          <input
            type="text"
            className="w-[600px] focus:outline-none text-white bg-transparent"
            placeholder="Select car name,model"
          />
        </div>
      </div>
    </div>
  );
};
