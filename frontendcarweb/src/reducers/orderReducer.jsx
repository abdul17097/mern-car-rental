import {
  ORDER_FAIL,
  ORDER_REQUEST,
  ORDER_SUCCESS,
} from "../ActionTypes/orderActionTypes";

const initialState = {
  order: {},
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
      console.log(action.payload);
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

    default:
      return state;
  }
};
