import React, { useEffect, useState } from "react";
import { Search } from "../Search";
import { Sidebar } from "../Sidebar";
import { CarCard } from "./AllCar/CarCard";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./LandingPage/Card";
import { getAllCar } from "../../actions/carAction";

const SearchPage = () => {
  const { cars } = useSelector((state) => state.carReducer);
  const [filteredCars, setFilteredCars] = useState(cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCar());
  }, [dispatch]);
  //   useEffect(() => {
  //     setFilteredCars(cars);
  //   }, []);
  //   const filteredList = ({ selectedOption, priceRange }) => {
  //     // If no category or price range is selected, return all cars
  //     // if (!selectedOption || !priceRange) {
  //     //   setFilteredCars(cars);
  //     //   return;
  //     // }

  //     const filtered = cars.filter((car) => {
  //       // Filter by selected category
  //       if (selectedOption && car.catagory !== selectedOption) {
  //         return false;
  //       }

  //       // Filter by price range
  //       if (priceRange) {
  //         const [minPrice, maxPrice] = priceRange.split("-").map(Number);
  //         if (car.price < minPrice || car.price > maxPrice) {
  //           return false;
  //         }
  //       }

  //       return true;
  //     });

  //     setFilteredCars(filtered);
  //   };
  const filteredList = ({ selectedOption, priceRange, selectedColors }) => {
    // If no category or price range is selected, return all cars
    //   if (!selectedOption || !priceRange || !selectedColors.length) {
    //     return cars;
    //   }

    const filtered = cars.filter((car) => {
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
      if (selectedColors.length > 0 && !selectedColors.includes(car.color)) {
        return false;
      }

      return true;
    });

    return filtered;
  };

  console.log(filteredCars);
  return (
    <div className="flex flex-col gap-5  md:px-6 lg:px-20">
      <Search filteredList={filteredList} />
      <div className="max-w-full grid md:grid-cols-4 grid-cols-1 ">
        <Sidebar cars={cars} filteredList={filteredList} />
        <div className="md:col-span-3 border p-2">
          <div className="grid py-5 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cars &&
              filteredCars.map((car, index) => {
                return <CarCard car={car} key={index} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
