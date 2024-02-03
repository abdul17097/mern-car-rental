import {
  ORDER_FAIL,
  ORDER_REQUEST,
  ORDER_SUCCESS,
} from "../ActionTypes/orderActionTypes";
import store from "../store";

export const order = (data) => async (dispatch) => {
    
    try {
        const { carDetails, userInfo,id } = data;
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
        id: id
    }),
});
const responseData = await res.json();
dispatch({ type: ORDER_SUCCESS, payload: data });
console.log(responseData);
window.location = responseData.url;




      const storedState = localStorage.getItem('reduxState');
      const parsedState = JSON.parse(storedState);
      
    } else {
        dispatch({ type: ORDER_FAIL, payload: "Something went wrong!" });
    }
  } catch (error) {
    dispatch({ type: ORDER_FAIL, payload: "Something went wrong!" });
  }
};
