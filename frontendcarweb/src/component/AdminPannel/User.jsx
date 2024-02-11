import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../actions/userAction";
import { AiOutlineDelete } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function User() {
  const dispatch = useDispatch();
  const { userInfo, users, loading } = useSelector(
    (state) => state.userReducer
  );
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userInfo);
    if (userInfo && !userInfo.isAdmin) {
      navigate("/");
    }
    dispatch(getAllUsers());
  }, [dispatch]);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md w-[80vw] sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Customers
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              A list of all the users in your account including their name,
              title, email, and role.
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Email</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.slice(startIndex, endIndex).map((user) => (
                <tr
                  key={user._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.name}
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    {user.isAdmin ? "Admin" : "Customer"}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="cursor-pointer font-medium text-2xl text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <AiOutlineDelete />
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href={`mailto:${user.email}`}
                      className="font-medium text-2xl text-blue-600 dark:text-blue-500 hover:underline "
                    >
                      <CiMail />
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
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
            endIndex >= users.length ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={nextPage}
          disabled={endIndex >= users.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}
