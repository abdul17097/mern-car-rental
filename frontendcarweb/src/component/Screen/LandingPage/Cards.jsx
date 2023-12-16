import React from "react";
import { NavLink } from "react-router-dom";

function Cards({data}) {
  console.log(data);
  return (
    <div className="w-68 p-2 flex flex-col gap-2 rounded-md bg-[#FFFFFF]  border border-gray-150 shadow-md hover:shadow-xl transition-shadow duration-400 ease-in-out ">
      <img
        className=" h-36"
        src='/marcedees.png'
      />
      <NavLink to="" className="flex items-center">
        {/* <img
          src="https://renty.ae/assets/icons/site/brand/rolls-royce.png"
          className="w-7 h-5"
        /> */}
        <h2 className="text-lg font-thin">{data.name}</h2>
      </NavLink>
      <div className="border flex gap-2 items-center w-20 py-1 rounded-3xl bg-[#E7F6FF] justify-center">
        <svg className="w-4 h-4"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
            stroke="#101010"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
            stroke="#101010"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span className="text-sm">Dubai</span>
      </div>
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 512 512"
        >
          <path
            d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
            fill="#fbbb00"
          />
          <path
            d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
            fill="#518ef8"
          />
          <path
            d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
            fill="#28b446"
          />
          <path
            d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
            fill="#f14336"
          />
        </svg>
        <span>4.8</span>
        <span>⭐⭐⭐⭐⭐</span>
      </div>
      <div className="flex justify-between">
        <span className="text-[#004EC1]">1 Day</span>
        <span className="font-[600] text-lg">{data.price} pkr</span>
      </div>
      <button className="rounded-md dark bg-[#004EC1] text-white flex w-full justify-center py-1 text-lg font-bold  ">
        Rental Details
      </button>
    </div>
  );
}

export default Cards;
