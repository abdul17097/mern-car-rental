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
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../ActionTypes/userAcitonTypes";
import { USER_LOGOUT } from "../constants/userConstant";

const initialState = {
  userInfo: [],
  users: [],
  loading: false,
  success: false,
  message: "",
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
        userInfo: false,
        success: false,
      };
    case USER_LOGIN:
      return {
        ...state,
        userInfo: action.payload,
      };

    case USER_LOGIN_FAIL:
    case USER_SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        message: action.payload, // Set the message message from the action payload
      };
    // user delete state
    case USER_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_DELETE_SUCCESS:
      const filterUser = state.users.filter(
        (user) => user._id !== action.payload
      );
      return {
        ...state,
        loading: false,
        users: filterUser,
        success: true,
      };
    case USER_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
      };

    // user Update state
    case USER_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case USER_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
      };

    // Get All Users State
    case USER_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_GET_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        success: true,
      };
    case USER_GET_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
};
