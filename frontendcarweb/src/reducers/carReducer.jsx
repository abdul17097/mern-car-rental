import {
  CAR_DELETE_FAIL,
  CAR_DELETE_REQUEST,
  CAR_DELETE_SUCCESS,
  CAR_LIST_FAIL,
  CAR_LIST_REQUEST,
  CAR_LIST_SUCCESS,
  CAR_SEARCH_FAIL,
  CAR_SEARCH_REQUEST,
  CAR_SEARCH_SUCCESS,
} from "../ActionTypes/carActionTypes";

const initialState = {
  category: [],
  cars: [],
  loading: false,
  error: null,
  success: false,
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAR_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CAR_SEARCH_SUCCESS:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    case CAR_SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Get All Car state
    case CAR_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CAR_LIST_SUCCESS:
      return {
        ...state,
        cars: action.payload,
        loading: false,
      };
    case CAR_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CAR_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CAR_DELETE_SUCCESS:
      const filterCarList = state.cars.filter(
        (car) => car._id !== action.payload
      );
      return {
        ...state,
        loading: false,
        cars: filterCarList,
      };
    case CAR_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
