import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBookedCar } from "../actions/orderAction";
const Cart = () => {
  const dispatch = useDispatch();
  const { bookedCar, loading } = useSelector((state) => state.orderReducer);
  const { userInfo } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  console.log(bookedCar);
  const { id } = useParams();
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    dispatch(getBookedCar(id));
  }, [dispatch, userInfo]);
  return (
    <div className="container mx-auto my-10 px-5 md:px-10">
      <h2 className="text-2xl font-bold mb-4">Your Booked Cars</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {(bookedCar && bookedCar.length === 0) || bookedCar == undefined ? (
            <p>No cars booked.</p>
          ) : (
            bookedCar &&
            bookedCar.map((order) => (
              <div
                key={order.car._id}
                className="bg-white rounded-lg shadow-md p-4"
              >
                <img
                  src={order.car.image}
                  alt={order.car.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold mb-2">
                  Model: {order.car.name}
                </h3>
                <p className="text-gray-500 mb-2">Year: {order.car.year}</p>
                <p className="text-gray-500 mb-2">Color: {order.car.color}</p>
                <p className="text-gray-500 mb-2">
                  Mieage: {order.car.mileage}
                </p>
                <p className="text-gray-500 mb-2">
                  Transmission: {order.car.transmission}
                </p>
                <p className="text-gray-500 mb-2">
                  FeulType: {order.car.feulType}
                </p>
                <p className="text-gray-500 mb-2">
                  Price: {order.car.price} PKR
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
