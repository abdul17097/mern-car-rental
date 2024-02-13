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

const initialState = {
  order: {},
  orders: [],
  bookedCar: [],
  loading: false,
  error: null,
  success: false,
  check: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
        loading: false,
        check: true,
      };
    case ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        check: false,
      };
    case SET_LOCALSTORAGE_DATA:
      return {
        ...state,
        order: action.payload,
      };

    // get all orders state
    case GET_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
        check: true,
      };
    case GET_ORDER_FAIL:
      return {
        ...state,
        loading: false,
      };
    case GET_BOOKCAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BOOKCAR_SUCCESS:
      return {
        ...state,
        bookedCar: action.payload,
        loading: false,
        check: true,
      };
    case GET_BOOKCAR_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
