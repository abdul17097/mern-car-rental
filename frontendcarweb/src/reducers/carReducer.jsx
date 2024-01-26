import { CAR_LIST_FAIL, CAR_LIST_REQUEST, CAR_LIST_SUCCESS, CAR_SEARCH_FAIL, CAR_SEARCH_REQUEST, CAR_SEARCH_SUCCESS } from "../ActionTypes/carActionTypes"

const initialState = {
    cars: [],
    loading: false,
    error: null,
    success: false
}

export const carReducer = (state = initialState, action)=>{
    switch (action.type) {
        case CAR_SEARCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CAR_SEARCH_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                cars: action.payload,
                loading: false
            }
        case CAR_SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
                
        default:
            return state
    }
}