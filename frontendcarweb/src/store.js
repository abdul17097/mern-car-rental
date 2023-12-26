import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from "redux";
import  {userReducer}  from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { carReducer } from './reducers/carReducer';


const rootReducer = combineReducers({
    userReducer: userReducer,
    carReducer: carReducer
})

const initialState = [
    {name: "hello"},
    
]
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
    );

export default store;