import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCar, getAllCar } from "../../actions/carAction";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export const CarList = () => {
  const { cars, loading } = useSelector((state) => state.carReducer);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1); // Current page number
  const itemsPerPage = 7; // Number of items to show per page
  console.log(loading);
  useEffect(() => {
    dispatch(getAllCar());
  }, [dispatch]);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1); // Move to the next page
  };

  const prevPage = () => {
    setPage((prevPage) => prevPage - 1); // Move to the previous page
  };

  const handleDelete = (id) => {
    dispatch(deleteCar(id));
  };
  // Calculate the start and end index of the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="relative shadow-md w-[80vw] sm:rounded-lg">
      {loading ? (
        <div className="w-full border bg-white h-screen flex items-center justify-center">
          <img src="/loading.gif" alt="" className="" />
        </div>
      ) : (
        <table className="w-full text-sm shadow-lg rounded-2xl text-left rtl:text-right text-gray-500 dark:text-gray-500">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Vehicle On Rent
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                # ID
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Model
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Fuel Type
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cars &&
              cars.slice(startIndex, endIndex).map((car, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={car._id}
                >
                  <th
                    scope="row"
                    className="px-6 py-1 whitespace-nowrap dark:text-white"
                  >
                    {startIndex + index + 1}
                  </th>
                  <td className="px-6 py-2">
                    <img
                      src={car.image}
                      className="px-2  w-20 h-14 object-fill"
                      alt=""
                    />
                  </td>
                  <td className="px-6 py-2 font-semibold">{car.name}</td>
                  <td className="px-6 py-2">{car.catagory}</td>
                  <td className="px-6 py-2">{car.price}</td>
                  <td className="px-6 py-2">{car.feulType}</td>
                  <td className="px-6 py-2 flex  gap-5 text-2xl text-blue-400 mt-4">
                    <span className="">
                      <FaEdit />
                    </span>
                    <button onClick={() => handleDelete(car._id)} className="">
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      <div className="flex justify-between my-2 px-5">
        <button
          className={`bg-blue-300 p-1 w-20 rounded-lg ${
            page === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={prevPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className={`bg-blue-300 p-2 w-20 rounded-lg ${
            endIndex >= cars.length ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={nextPage}
          disabled={endIndex >= cars.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};
