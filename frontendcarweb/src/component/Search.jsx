import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useParams } from "react-router-dom";

export const Search = ({ filteredList }) => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  console.log(query);
  // Update searchQuery state when query parameter changes

  // Handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    filteredList({ searchQuery: query });
  };

  return (
    <div className="">
      <h1 className="text-4xl my-3 font-bold">Vehicles</h1>
      <p className="py-4 text-lg text-blue-400">
        Explore Our Diverse Range of Vehicles: Filter by Category, Price, Color.
      </p>
      <div className="">
        <div className="flex items-center h-[5vh] py-6 dark text-white gap-3 px-3 shadow max-w-sm rounded-3xl">
          <IoSearch className="text-2xl text-gray-300 " />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search cars by name..."
            className="w-[600px] focus:outline-none text-white bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};
