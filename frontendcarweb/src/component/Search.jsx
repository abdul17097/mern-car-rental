import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useParams } from "react-router-dom";

export const Search = ({ filteredList }) => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  // Update searchQuery state when query parameter changes

  // Handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    filteredList({ searchQuery: query });
  };

  return (
    <div className=" mb-10 md:mb-32 lg:mb-14">
      <div className="absolute search_bg_image top-0 left-0 z-[-1] w-full h-[300px] md:h-[400px]"></div>
      <h1 className="text-xl md:text-4xl my-3 font-bold text-center text-blue-800  border-8 p-2">
        Explore Our Diverse Range of Vehicles: Filter by Category, Price, Color.
      </h1>
      <div className="flex justify-center my-5">
        <div className="flex items-center  h-[5vh] py-6 dark text-white gap-3 px-3 shadow max-w-lg rounded-3xl">
          <IoSearch className="text-3xl text-gray-300 " />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search cars by name..."
            className="lg:w-[600px] md:w-[300px] w-[220px] focus:outline-none text-white bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};
