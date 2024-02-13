import {
  GET_BOOKCAR_FAIL,
  GET_BOOKCAR_REQUEST,
  GET_BOOKCAR_SUCCESS,
  GET_ORDER_FAIL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  ORDER_FAIL,
  ORDER_REQUEST,
  ORDER_SUCCESS,
  SET_LOCALSTORAGE_DATA,
} from "../ActionTypes/orderActionTypes";
import store from "../store";

export const order = (data) => async (dispatch) => {
  try {
    const { carDetails, userInfo, id } = data;
    if (userInfo) {
      dispatch({ type: ORDER_REQUEST });
      const res = await fetch("http://localhost:7000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          items: [
            {
              id: 1,
              quantity: 1,
              price: carDetails.totalPrice,
              name: carDetails.name,
            },
          ],
          id: id,
        }),
      });
      const responseData = await res.json();
      dispatch({ type: ORDER_SUCCESS, payload: data });
      // const {id, url} = responseData.session
      localStorage.setItem(
        "reduxState",
        JSON.stringify({ ...carDetails, paymentID: responseData.session.id })
      );

      window.location = responseData.session.url;
    } else {
      dispatch({ type: ORDER_FAIL, payload: "Something went wrong!" });
    }
  } catch (error) {
    dispatch({ type: ORDER_FAIL, payload: "Something went wrong!" });
  }
};

export const setLocalStorageData = () => {
  const localStorageData = JSON.parse(localStorage.getItem("reduxState"));

  return {
    type: SET_LOCALSTORAGE_DATA,
    payload: localStorageData,
  };
};

export const getAllOrder = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDER_REQUEST });
    const res = await fetch("http://localhost:7000/api/allorder", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { orders } = await res.json();
    console.log(orders);
    dispatch({ type: GET_ORDER_SUCCESS, payload: orders });
  } catch (error) {
    dispatch({ type: GET_ORDER_FAIL, payload: error.message });
  }
};

export const getBookedCar = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_BOOKCAR_REQUEST });
    const res = await fetch(`http://localhost:7000/api/getOrder/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { bookings } = await res.json();
    dispatch({ type: GET_BOOKCAR_SUCCESS, payload: bookings });
  } catch (error) {
    dispatch({ type: GET_BOOKCAR_FAIL, payload: error.message });
  }
};
