import {
  USER_LOGIN,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
  } from "../ActionTypes/userAcitonTypes";
import { USER_LOGOUT } from "../constants/userConstant";
  
  const initialState = {
    userInfo: [] || localStorage.getItem("userInfo"),
    loading: false,
    success: false,
    message: '',
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
      case USER_SIGNUP_REQUEST:
        return {
          ...state,
          loading: true,
          message: action.payload, // Clear any previous errors
        };
  
      case USER_LOGIN_SUCCESS:
        console.log(action.payload.data)
        return {
          ...state,
          userInfo: action.payload.data,
          loading: false,
          success: true,
          message: action.payload.message, // Clear any previous errors
        };
      case USER_SIGNUP_SUCCESS:
        return {
          ...state,
          userInfo: action.payload,
          loading: false,
          success: true,
          message: action.payload, // Clear any previous errors
        };
      case USER_LOGOUT:
        return {
          ...state,
          userInfo: [],
        }
      case USER_LOGIN:
        return{
          ...state,
          userInfo: action.payload
        }
  
      case USER_LOGIN_FAIL:
      case USER_SIGNUP_FAIL:
        return {
          ...state,
          loading: false,
          message: action.payload, // Set the message message from the action payload
        };
  
      default:
        return state;
    }
  };
  