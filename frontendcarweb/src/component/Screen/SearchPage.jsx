import React, { useEffect, useState } from "react";
import { Search } from "../Search";
import { Sidebar } from "../Sidebar";
import { CarCard } from "./AllCar/CarCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCar } from "../../actions/carAction";
import { useParams } from "react-router-dom";
const SearchPage = () => {
  const { cars } = useSelector((state) => state.carReducer);
  const [filteredCars, setFilteredCars] = useState([]);
  const dispatch = useDispatch();
  const query = useParams();
  useEffect(() => {
    dispatch(getAllCar());
    setFilteredCars(cars);
  }, [dispatch]);

  const filteredList = ({
    selectedOption,
    priceRange,
    selectedColors,
    searchQuery,
  }) => {
    const filtered = cars.filter((car) => {
      // Filter by car name
      if (
        searchQuery &&
        !car.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Filter by selected category
      if (selectedOption && car.catagory !== selectedOption) {
        return false;
      }

      // Filter by price range
      if (priceRange) {
        const [minPrice, maxPrice] = priceRange.split("-").map(Number);
        if (car.price < minPrice || car.price > maxPrice) {
          return false;
        }
      }

      // Filter by selected colors
      if (
        selectedColors &&
        selectedColors.length > 0 &&
        !selectedColors.includes(car.color)
      ) {
        return false;
      }

      return true;
    });

    setFilteredCars(filtered);
  };
  //   const filteredList = ({
  //     selectedOption,
  //     priceRange,
  //     selectedColors,
  //     searchQuery,
  //   }) => {
  //     console.log(selectedColors, selectedOption, priceRange, searchQuery);
  //     const filtered = cars.filter((car) => {
  //       // Filter by car name
  //       if (
  //         searchQuery &&
  //         !car.name.toLowerCase().includes(searchQuery.toLowerCase())
  //       ) {
  //         return false;
  //       }

  //       // Filter by selected category
  //       if (selectedOption && car.category !== selectedOption) {
  //         return false;
  //       }

  //       // Filter by price range
  //       if (priceRange) {
  //         const [minPrice, maxPrice] = priceRange.split("-").map(Number);
  //         if (car.price < minPrice || car.price > maxPrice) {
  //           return false;
  //         }
  //       }

  //       // Filter by selected colors
  //       if (
  //         selectedColors &&
  //         selectedColors.length > 0 &&
  //         !selectedColors.includes(car.color)
  //       ) {
  //         return false;
  //       }

  //       return true;
  //     });

  //     setFilteredCars(filtered);
  //   };

  return (
    <div className="flex  flex-col mb-5 gap-5 md:px-6 lg:px-20">
      <Search filteredList={filteredList} />
      <div className="max-w-full grid md:grid-cols-4 grid-cols-1">
        <Sidebar filteredList={filteredList} />
        <div className="md:col-span-3 border-4 p-2">
          <div className="grid py-5 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCars.map((car, index) => (
              <CarCard car={car} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
