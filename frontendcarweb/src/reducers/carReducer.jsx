import { CAR_LIST_FAIL, CAR_LIST_REQUEST, CAR_LIST_SUCCESS } from "../ActionTypes/carActionTypes"

const initialState = {
    cars: [],
    loading: false,
    error: null,
    success: false
}

export const carReducer = (state = initialState, action)=>{
    switch (action.type) {
        case CAR_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CAR_LIST_SUCCESS:

            return {
                ...state,
                cars: action.payload,
                loading: false
            }
        case CAR_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
                
        default:
            return state
    }
}