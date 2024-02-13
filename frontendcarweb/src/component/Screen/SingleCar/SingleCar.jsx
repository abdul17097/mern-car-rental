import React, { useState, useEffect } from "react";
import { MdEventSeat } from "react-icons/md";
import { FaRadio } from "react-icons/fa6";
import { BiBluetooth } from "react-icons/bi";
import { AiFillCamera } from "react-icons/ai";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../SingleCar/SingleCar.css";
import { DateRangePicker, DateRange } from "react-date-range";
import { addDays, differenceInDays, previousDay } from "date-fns";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { convertTo24Hour } from "../../../utils/convertHoureTo24";
import { getDates } from "../../../utils/getDate";
import { order } from "../../../actions/orderAction";

export const SingleCar = () => {
  const [data, setData] = useState({});
  const { userInfo } = useSelector((state) => state.userReducer);
  const { loading } = useSelector((state) => state.orderReducer);
  console.log(loading);
  const dispatch = useDispatch();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [carDetails, setCarDetails] = useState([
    {
      totalPrice: 0,
      pickUpHour: null,
      dropOffHour: null,
      pickupDate: null,
      dropOffDate: null,
      totalDriverDayPrice: "",
      driver: false,
      totalRentalDay: null,
      price: null,
      name: null,
      day: null,
      userId: null,
      emailSend: false,
    },
  ]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getCar = async () => {
      try {
        const response = await fetch(
          `http://localhost:7000/api/oneCar/${params.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const datas = await response.json();
        setData(datas.car);
        setTotalPrice(datas.car.price); // Initialize totalPrice with the base price
        setCarDetails((prevState) => ({
          ...prevState,
          totalPrice: datas.car.price,
        }));
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };
    getCar();
  }, [params.id]);

  const makePayment = async () => {
    try {
      if (!carDetails.pickUpHour || !carDetails.dropOffHour) {
        toast.error("Please select both pickup and drop-off times.");
        return;
      } else if (userInfo) {
        dispatch(order({ carDetails, userInfo, id: params.id }));
      } else {
        navigate("/login");
        return;
      }
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  };
  const handleDateChange = (item) => {
    // Set the end date to the selected date
    const selectedStartDate = item.selection.startDate;
    const selectedEndDate = item.selection.endDate;
    const updatedEndDate = addDays(selectedEndDate, 1); // Increment by 1 day

    setState([
      {
        startDate: selectedStartDate,
        endDate: updatedEndDate,
        key: "selection",
      },
    ]);
  };
  const hours = Array.from({ length: 12 }, (_, index) => index + 1);

  useEffect(() => {
    const daysDifference = differenceInDays(
      state[0].endDate,
      state[0].startDate
    );

    setCarDetails((prevState) => ({
      ...prevState,
      totalRentalDay: daysDifference,
      totalDriverDayPrice: daysDifference * data.driver,
      pickupDate: getDates(state[0].startDate),
      dropOffDate: getDates(state[0].endDate),
    }));

    const pickupHour24 = carDetails.pickUpHour
      ? convertTo24Hour(carDetails.pickUpHour)
      : 0;
    const dropoffHour24 = carDetails.dropOffHour
      ? convertTo24Hour(carDetails.dropOffHour)
      : 0;
    const hoursDifference = Math.abs(dropoffHour24 - pickupHour24);

    const totalHours = daysDifference * 24 + hoursDifference;
    const hourlyRate = data.price / 24;
    const totalPrice = totalHours * hourlyRate;
    const originalNumber = carDetails.driver
      ? totalPrice + data.driver * daysDifference
      : totalPrice;

    const totalPrices = Math.round(originalNumber / 100) * 100;
    setTotalPrice(totalPrices);
    setCarDetails((previousState) => ({
      ...previousState,
      totalHours: totalHours,
      emailSend: true,
      userId: userInfo && userInfo.id,
      totalPrice: totalPrices,
      price: data.price,
      name: data.name,
      carId: data._id,
      day: daysDifference,
    }));
  }, [
    carDetails.driver,
    state,
    data.price,
    carDetails.pickUpHour,
    carDetails.dropOffHour,
  ]);
  return (
    <>
      {data && (
        <div className="w-6/6 py-10 relative bottom-16 font-serif ">
          <h1 className="px-14  py-5 text-3xl font-semibold">{data.name}</h1>
          <div className="flex">
            <div className="md:w-3/6 w-6/6  px-5 md:px-12">
              <motion.img
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                src={data.image}
                className="rounded-lg w-full  border-8 shadow-lg  md:w-full"
              />
              <p className=" my-5 w-full md:w-6/6 md:h-48   md:py-3 font-sans rounded-lg bg-[#F7F8FA]">
                The car is available for daily, weekly and monthly rental. You
                can also check our <span>hourly offers page</span>{" "}
              </p>
              <div>
                <div className="py-5">
                  <h2 className="text-2xl font-bold pb-5">Specifications</h2>
                  <div className="flex flex-wrap justify-around gap-5 w-full">
                    {data.year && (
                      <div className="flex  w-1/5  flex-col">
                        <span className="text-xs text-[#8c98ab]">YEAR</span>
                        <span className="text-[#212529] text-sm">
                          {data.year}
                        </span>
                      </div>
                    )}
                    {data.color && (
                      <div className="flex  w-1/5  flex-col">
                        <span className="text-xs text-[#8c98ab]">COLOR</span>
                        <span className="text-[#212529] text-sm">
                          {data.color}
                        </span>
                      </div>
                    )}
                    {data.mileage && (
                      <div className="flex  w-1/5  flex-col">
                        <span className="text-xs text-[#8c98ab]">MILEAGE</span>
                        <span className="text-[#212529] text-sm">
                          {data.mileage}
                        </span>
                      </div>
                    )}
                    {data.maxSpeed && (
                      <div className="flex  w-1/5  flex-col">
                        <span className="text-xs text-[#8c98ab]">
                          MAX SPEED
                        </span>
                        <span className="text-[#212529] text-sm">
                          {data.maxSpeed}
                        </span>
                      </div>
                    )}
                    {data.transmission && (
                      <div className="flex  w-1/5  flex-col">
                        <span className="text-xs text-[#8c98ab]">
                          TRANSMISSION
                        </span>
                        <span className="text-[#212529] text-sm">
                          {data.transmission}
                        </span>
                      </div>
                    )}
                    {data.feulType && (
                      <div className="flex  w-1/5  flex-col">
                        <span className="text-xs text-[#8c98ab]">
                          FUEL TYPE
                        </span>
                        <span className="text-[#212529] text-sm">
                          {data.feulType}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <hr></hr>
                <div className="py-5">
                  <h2 className="text-2xl font-bold pb-5">Features</h2>
                  <div className="flex flex-wrap ">
                    {data.seat && (
                      <div className="flex w-3/6 py-3 gap-2 items-center ">
                        <span>
                          <MdEventSeat className="text-lg text-[#13428D]" />
                        </span>
                        <span>{data.seat} Seats</span>
                      </div>
                    )}
                    {data.fmRadio && (
                      <div className="flex w-3/6 py-3 gap-2 items-center">
                        <span>
                          <FaRadio className="text-lg text-[#13428D]" />
                        </span>
                        <span>FM Radio</span>
                      </div>
                    )}
                    {data.bluetooth && (
                      <div className="flex w-3/6 py-3 gap-2 items-center">
                        <span>
                          <BiBluetooth className="text-lg text-[#13428D]" />
                        </span>
                        <span>Bluetooth</span>
                      </div>
                    )}
                    {data.reverseCamera && (
                      <div className="flex w-3/6 py-3 gap-2 items-center">
                        <span>
                          <AiFillCamera className="text-lg text-[#13428D]" />
                        </span>
                        <span>Reverse Camera</span>
                      </div>
                    )}
                    {data.climateControl && (
                      <div className="flex w-3/6 py-3 gap-2 items-center">
                        <span>
                          <AiFillCamera className="text-lg text-[#13428D]" />
                        </span>
                        <span>Reverse Camera</span>
                      </div>
                    )}
                  </div>
                </div>
                <hr></hr>
                <div className="py-5">
                  <h2 className="text-2xl font-bold pb-2">Type of Car</h2>
                  <p className="text-gray-500 text-md">{data.catagory}</p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-3/6 px   md:flex hidden flex-col px-12"
            >
              <div className="flex bg-gray-100 rounded-2xl flex-col">
                <div className="flex flex-col p-5 w-6/6 gap-5 ">
                  <div className="flex justify-between sm:flex-col sm:gap-2 md:flex-row">
                    <p className="text-sm text-gray-400">
                      PRICE FOR A{" "}
                      <span className="bg-blue-900 text-white text-sm px-1 rounded">
                        1day
                      </span>
                    </p>
                    <p className="text-sm text-gray-400">
                      Feel free to chat or call us directly
                    </p>
                  </div>
                  <span className="text-3xl font-semibold">
                    {data.price} PKR
                  </span>
                </div>
                <div className="w-6/6 flex justify-center flex-col m-5 p-5 rounded-lg bg-white">
                  <div className="flex flex-col gap-5 pb-5">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">
                        RENTAL DATE RANGE
                      </span>
                      <span className="text-sm text-gray-400">YOUR RENTAL</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-2xl">Choose rental dates</span>
                      <span className="text-2xl">{carDetails.day} day</span>
                    </div>
                  </div>
                  <DateRange
                    className="w-full"
                    editableDateInputs={true}
                    onChange={handleDateChange}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 30)}
                  />
                  <div className="flex justify-between  ">
                    <div className="border flex p-1 rounded-md">
                      <label className="text-sm" htmlFor="hour">
                        Pick up:
                      </label>
                      <select
                        id="hour"
                        className="focus:outline-none"
                        onChange={(e) =>
                          setCarDetails((prevState) => ({
                            ...prevState,
                            pickUpHour: e.target.value,
                          }))
                        }
                        value={carDetails.pickUpHour}
                      >
                        {hours.map((hour) => (
                          <React.Fragment key={hour}>
                            <option
                              value={`${hour}:00 AM`}
                              className="text-[#849095]"
                            >{`${hour}:00 AM`}</option>
                          </React.Fragment>
                        ))}
                        {hours.map((hour) => (
                          <React.Fragment key={hour}>
                            <option
                              value={`${hour}:00 PM`}
                              className="text-[#849095]"
                            >{`${hour}:00 PM`}</option>
                          </React.Fragment>
                        ))}
                      </select>
                      {/* {selectedHour && <p>Selected Hour: {selectedHour}</p>} */}
                    </div>
                    <div className=" border flex p-1 rounded-md">
                      <label className="text-sm" htmlFor="hour2">
                        Drop off:
                      </label>
                      <select
                        id="hour2"
                        className="focus:outline-none"
                        onChange={(e) =>
                          setCarDetails((prevState) => ({
                            ...prevState,
                            dropOffHour: e.target.value,
                          }))
                        }
                        value={carDetails.dropOffHour}
                      >
                        {hours.map((hour) => (
                          <React.Fragment key={hour}>
                            <option
                              value={`${hour}:00 AM`}
                              className="text-[#849095]"
                            >{`${hour}:00 AM`}</option>
                          </React.Fragment>
                        ))}
                        {hours.map((hour) => (
                          <React.Fragment key={hour}>
                            <option
                              value={`${hour}:00 PM`}
                              className="text-[#849095]"
                            >{`${hour}:00 PM`}</option>
                          </React.Fragment>
                        ))}
                      </select>
                      {/* {selectedHour && <p>Selected Hour: {selectedHour}</p>} */}
                    </div>
                  </div>

                  {/* <DateRange
                  editableDateInputs={true}
                  onChange={item => setState([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                /> */}
                </div>
                {/* <div className=" mx-5 mb-5 rounded-lg p-5 flex flex-col gap-4 bg-white bg-">
                  <span className="text-sm text-gray-400">
                    PERSONAL INFORMATION
                  </span>
                  <span className="text-2xl">Your booking details</span>
                  <div className="flex flex-col px-2 gap-1  rounded-lg pl-3">
                    <label htmlFor="" className="text-xs">
                      PHONE NUMBER
                    </label>
                    <input
                      className=" py-2 border border-gray-300 pl-2 rounded focus:outline-none"
                      max={11}
                      placeholder="Enter the Number"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col px-2 gap-1  rounded-lg pl-3">
                    <label htmlFor="" className="text-xs">
                      LOCATION
                    </label>
                    <input
                      className=" py-2 border border-gray-300 pl-2 rounded focus:outline-none"
                      max={11}
                      placeholder="Enter the Location"
                      type="text"
                    />
                  </div>
                </div> */}
                <div className="px-10 flex flex-col gap-1 pb-5">
                  <span className="text-sm text-gray-400 ">
                    BOOKING SUMMERY
                  </span>
                  <div className="flex justify-between">
                    <span className="text-sm">Rental (1 day)</span>
                    <span className="text-sm">{data.price} PKR</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          setCarDetails((prevState) => ({
                            ...prevState,
                            driver: e.target.checked,
                          }))
                        }
                      />
                      <span className="text-sm">Driver</span>
                    </div>
                    <span className="text-sm">{data.driver} PKR</span>
                  </div>
                  {totalPrice > 0 && (
                    <div className="flex justify-between -t-2 -dashed mt-2 pt-2">
                      <span className="text-2xl">Total</span>
                      <span className="text-2xl">{totalPrice} PKR</span>
                    </div>
                  )}
                </div>
                <div className="bg-[#E2F8CF] pl-10 py-5 flex justify-between rounded-b-lg items-center">
                  <button
                    disabled={carDetails.totalRentalDay ? false : true}
                    className={` py-3  rounded-lg bg-[#0069D9] hover:bg-[#0069D9] flex items-center gap-3 text-white px-6`}
                    onClick={makePayment}
                  >
                    CHECKOUT{" "}
                    {loading ? (
                      <img
                        src="/spinner1.gif"
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      ""
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex  justify-center px-5 md:hidden ">
            {/* <button className="py-3 rounded-lg font-bold bg-[#0069D9] hover:bg-[#0069D9] text-white px-6">Checkout</button>
             */}
            <button
              data-modal-target="static-modal"
              data-modal-toggle="static-modal"
              disabled={carDetails.totalRentalDay ? false : true}
              class="block font-bold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Checkout
            </button>
          </div>

          <div
            id="static-modal"
            data-modal-backdrop="static"
            tabindex="-1"
            aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative  w-full  max-w-2xl max-h-full">
              <div class="relative mt-20 bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  {/* <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Static modal
                </h3> */}
                  <button
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="static-modal"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="flex bg-gray-100 rounded-2xl flex-col">
                  <div className="flex flex-col p-5 w-6/6 gap-5 ">
                    <div className="flex justify-between flex-col gap-2">
                      <p className="text-sm text-gray-400">
                        PRICE FOR A{" "}
                        <span className="bg-blue-900 text-white text-sm px-1 rounded">
                          1 DAY
                        </span>
                      </p>
                      <p className="text-sm text-gray-400">
                        Feel free to chat or call us directly
                      </p>
                    </div>
                    <span className="text-3xl font-semibold">
                      {data.price} PKR
                    </span>
                  </div>
                  <div className="w-6/6 flex justify-center flex-col m-5 p-5 rounded-lg bg-white">
                    <div className="flex flex-col gap-5 pb-5">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-400">
                          RENTAL DATE RANGE
                        </span>
                        <span className="text-sm text-gray-400">
                          YOUR RENTAL
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-2xl">Choose rental dates</span>
                        <span className="text-2xl">{carDetails.day}</span>
                      </div>
                    </div>
                    <DateRange
                      className="w-full"
                      editableDateInputs={true}
                      onChange={(item) => setState([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={state}
                      minDate={new Date()}
                      maxDate={addDays(new Date(), 30)}
                    />
                  </div>
                  <div className=" mx-5 mb-5 rounded-lg p-5 flex flex-col gap-4 bg-white bg-">
                    <span className="text-sm text-gray-400">
                      PERSONAL INFORMATION
                    </span>
                    <span className="text-2xl">Your booking details</span>
                    <div className="flex flex-col px-2 gap-1  rounded-lg pl-3">
                      <label htmlFor="" className="text-xs">
                        PHONE NUMBER
                      </label>
                      <input
                        className=" py-1  focus:outline-none"
                        max={11}
                        placeholder="enter the number"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="px-10 flex flex-col gap-1 pb-5">
                    <span className="text-sm text-gray-400 ">
                      BOOKING SUMMERY
                    </span>
                    <div className="flex justify-between">
                      <span className="text-sm">Rental (1 day)</span>
                      <span className="text-sm">{data.price} PKR</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          onChange={(e) =>
                            setCarDetails((prevState) => ({
                              ...prevState,
                              driver: e.target.checked,
                            }))
                          }
                        />
                        <span className="text-sm">Driver</span>
                      </div>
                      <span className="text-sm">{data.driver} PKR</span>
                    </div>
                    {totalPrice > 0 && (
                      <div className="flex justify-between -t-2 -dashed mt-2 pt-2">
                        <span className="text-2xl">Total</span>
                        <span className="text-2xl">{totalPrice} PKR</span>
                      </div>
                    )}
                  </div>
                  <div className="bg-[#E2F8CF] pl-10 py-5 flex justify-between rounded-b-lg items-center">
                    <button
                      className=" py-3 rounded-lg bg-[#0069D9] hover:bg-[#0069D9] text-white px-6"
                      onClick={makePayment}
                    >
                      CHECKOUT
                    </button>
                  </div>
                </div>

                {/* <div class="p-4 md:p-5 space-y-4">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div> */}
                {/* <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="static-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="static-modal" type="button" class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
