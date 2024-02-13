import React, { useState } from "react";
import { BsFillFilterSquareFill } from "react-icons/bs";
export const Sidebar = ({ filteredList }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [priceRange, setPriceRange] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const handleCheckboxChange = (value) => {
    const updatedOption = selectedOption === value ? null : value;
    setSelectedOption(updatedOption);
    filteredList({ selectedOption: updatedOption, priceRange, selectedColors });
  };

  const handlePriceRangeChange = (range) => {
    const updatedRange = priceRange === range ? null : range;
    setPriceRange(updatedRange);
    filteredList({ selectedOption, priceRange: updatedRange, selectedColors });
  };

  const handleColorChange = (color) => {
    const isSelected = selectedColors === color;
    setSelectedColors(isSelected ? null : color);
    filteredList({
      selectedOption,
      priceRange,
      selectedColors: isSelected ? null : color,
    });
  };

  return (
    <div className="border px-2 flex flex-col">
      <div className="flex gap-2 items-center text-blue-400 pt-3">
        <BsFillFilterSquareFill />
        <h3 className="">Filters</h3>
      </div>
      <h2 className="text-xl my-4 font-semibold">Category</h2>
      <div className="flex flex-wrap gap-5 md:flex-col md:gap-4 lg:pl-2">
        <div className="">
          <input
            type="checkbox"
            checked={selectedOption === "Budget"}
            onChange={() => handleCheckboxChange("Budget")}
            className="w-5 h-5"
          />
          <span className="ml-2 text-lg text-gray-500 font-thin">Budget</span>
        </div>
        <div className="">
          <input
            type="checkbox"
            checked={selectedOption === "Standard"}
            onChange={() => handleCheckboxChange("Standard")}
            className="w-5 h-5"
          />
          <span className="ml-2 text-lg text-gray-500 font-thin">Standard</span>
        </div>
        <div className="">
          <input
            type="checkbox"
            checked={selectedOption === "Luxury"}
            onChange={() => handleCheckboxChange("Luxury")}
            className="w-5 h-5"
          />
          <span className="ml-2 text-lg text-gray-500 font-thin">Luxury</span>
        </div>
        <div className="">
          <input
            type="checkbox"
            checked={selectedOption === "Suv"}
            onChange={() => handleCheckboxChange("Suv")}
            className="w-5 h-5"
          />
          <span className="ml-2 text-lg text-gray-500 font-thin">SUV</span>
        </div>
        <div className="">
          <input
            type="checkbox"
            checked={selectedOption === "Van"}
            onChange={() => handleCheckboxChange("Van")}
            className="w-5 h-5"
          />
          <span className="ml-2 text-lg text-gray-500 font-thin">
            VAN and Coasters
          </span>
        </div>
      </div>
      <hr className="text-red-800" />
      <h2 className="text-xl font-semibold my-4">Price</h2>
      <div className=" flex flex-wrap gap-5 md:flex-col md:gap-4 lg:pl-2">
        <div className="">
          <input
            type="checkbox"
            checked={priceRange === "1000-3000"}
            onChange={() => handlePriceRangeChange("1000-3000")}
            className="w-5 h-5"
          />
          <span className="ml-2 text-lg text-gray-500 font-thin">
            1000 - 3000
          </span>
        </div>
        <div className="">
          <input
            type="checkbox"
            checked={priceRange === "3001-5000"}
            onChange={() => handlePriceRangeChange("3001-5000")}
            className="w-5 h-5"
          />
          <span className="ml-2 text-lg text-gray-500 font-thin">
            3000- 5000
          </span>
        </div>
        <div className="">
          <input
            type="checkbox"
            checked={priceRange === "10001-15000"}
            onChange={() => handlePriceRangeChange("10001-15000")}
            className="w-5 h-5"
          />
          <span className="ml-2 text-lg text-gray-500 font-thin">
            10000 - 15000
          </span>
        </div>
        <div className="">
          <input
            type="checkbox"
            checked={priceRange === "15000-20000"}
            onChange={() => handlePriceRangeChange("15000-20000")}
            className="w-5 h-5"
          />
          <span className="ml-2 text-lg text-gray-500 font-thin">
            15000-20000
          </span>
        </div>
      </div>
      <hr className="text-red-800" />

      <h2 className="text-xl font-semibold my-4">Color</h2>
      <div className=" flex flex-wrap gap-5 md:flex-col md:gap-4 lg:pl-2">
        <div className="">
          <input
            type="checkbox"
            checked={selectedColors === "silver"}
            onChange={() => handleColorChange("silver")}
            className="w-5 h-5"
          />
          <span className="ml-2 text-lg text-gray-500 font-thin">Silver</span>
        </div>
        <div className="">
          <input
            type="checkbox"
            checked={selectedColors === "white"}
            onChange={() => handleColorChange("white")}
            className="w-5 h-5"
          />
          <span className="ml-2 text-lg text-gray-500 font-thin  ">White</span>
        </div>
        <div className="">
          <input
            type="checkbox"
            checked={selectedColors === "brown"}
            onChange={() => handleColorChange("brown")}
            className="w-5 h-5"
          />
          <span className="ml-2 text-lg text-gray-500 font-thin ">Brown</span>
        </div>
        <div className="">
          <input
            type="checkbox"
            checked={selectedColors === "black"}
            onChange={() => handleColorChange("black")}
            className="w-5 h-5"
          />
          <span className="ml-2 text-lg text-gray-500 font-thin ">Black</span>
        </div>
      </div>
      <hr className="text-red-800" />

      {/* Add more price range checkboxes as needed */}
    </div>
  );
};
