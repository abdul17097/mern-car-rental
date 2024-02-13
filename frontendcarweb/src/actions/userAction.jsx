import {
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_GET_FAIL,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_LOGIN,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_UPDATE_REQUEST,
} from "../ActionTypes/userAcitonTypes";
import axios from "axios";
import { USER_LOGOUT } from "../constants/userConstant";
import { toast } from "react-toastify";

export const userLogin =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });

      const { data } = await axios.post(
        "http://localhost:7000/api/login",
        {
          email,
          password,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      if (data.success === true) {
        localStorage.setItem("userInfo", JSON.stringify(data.data));
        toast.success("Login Successfully");
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: { data: data.data, message: "Successfully Login" },
        });
      } else {
        dispatch({ type: USER_LOGIN_FAIL, payload: "Something went wrong!" });
      }
    } catch (error) {
      dispatch({ type: USER_LOGIN_FAIL, payload: "Something went wrong!" });
    }
  };

// export const userSignup = ({ name, email, password, userphone, usercnic }) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_SIGNUP_REQUEST });
//     const  data  = await axios.post(
//       "http://localhost:7000/api/register",
//       {
//         name,
//         email,
//         password,
//         userphone,
//         usercnic
//       },
//       {headers: {"Content-Type": "application/json"}}
//     );
//       console.log(data);
//     if (data.success === true) {
//       localStorage.setItem("userInfo", JSON.stringify(data.data));
//       dispatch({ type: USER_SIGNUP_SUCCESS, payload: data.data });
//     } else {
//       // Dispatch USER_SIGNUP_FAIL with the error message
//       dispatch({ type: USER_SIGNUP_FAIL, payload: data.message || "Signup failed" });
//     }
//   } catch (error) {
//     // Dispatch USER_SIGNUP_FAIL with a generic error message or use error.message
//     dispatch({ type: USER_SIGNUP_FAIL, payload: "Signup failed" });
//   }
// };

export const userSignup =
  ({ name, email, password, userphone, usercnic }) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_SIGNUP_REQUEST });

      const res = await fetch("http://localhost:7000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, userphone, usercnic }),
      });

      const responseData = await res.json();
      if (responseData.success) {
        localStorage.setItem("userInfo", JSON.stringify(responseData.data));
        dispatch({ type: USER_SIGNUP_SUCCESS, payload: responseData.data });
        toast("Signup successful");
      } else if (!responseData.success) {
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: responseData.message || "Signup failed",
        });
        toast(responseData.message);
      }
    } catch (error) {
      dispatch({ type: USER_SIGNUP_FAIL, payload: "Signup failed" });
      toast("Signup failed");
    }
  };

export const userLogout = (payload) => ({
  type: USER_LOGOUT,
  payload,
});

export const userLoginCheck = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const deleteUser = (userId) => async (dispatch) => {
  try {
    dispatch({ type: USER_DELETE_REQUEST });
    // Perform the delete operation (e.g., send DELETE request to API)
    const res = await fetch(`http://localhost:7000/api/userDelete/${userId}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await res.json();
    if (responseData.success) {
      dispatch({ type: USER_DELETE_SUCCESS, payload: userId });
    } else {
      // If the response status is not OK, throw an error
      throw new Error("Failed to delete user");
    }
  } catch (error) {
    dispatch({ type: USER_DELETE_FAIL, payload: error.message });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USER_GET_REQUEST });

    const res = await fetch("http://localhost:7000/api/allUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { users } = await res.json();

    dispatch({ type: USER_GET_SUCCESS, payload: users });
  } catch (error) {
    dispatch({ type: USER_GET_FAIL, payload: error.message });
  }
};
