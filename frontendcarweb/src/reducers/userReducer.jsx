import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
  } from "../ActionTypes/userAcitonTypes";
  
  const initialState = {
    userInfo: [],
    loading: false,
    success: false,
    error: '',
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
      case USER_SIGNUP_REQUEST:
        return {
          ...state,
          loading: true,
          error: '', // Clear any previous errors
        };
  
      case USER_LOGIN_SUCCESS:
      case USER_SIGNUP_SUCCESS:
        return {
          ...state,
          userInfo: action.payload,
          loading: false,
          success: true,
          error: '', // Clear any previous errors
        };
  
      case USER_LOGIN_FAIL:
      case USER_SIGNUP_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload, // Set the error message from the action payload
        };
  
      default:
        return state;
    }
  };
  