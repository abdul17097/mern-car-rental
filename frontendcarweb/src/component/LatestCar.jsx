import React from "react";
import { CarCard } from "./Screen/AllCar/CarCard";
import { useSelector } from "react-redux";

const LatestCar = () => {
  const { cars } = useSelector((state) => state.carReducer);
  console.log(cars);
  return (
    <div className="md:px-20 px-3 flex flex-col bg-[#FFFFFF] gap-10 py-20 ">
      {/* <CarCard /> */}
    </div>
  );
};

export default LatestCar;
