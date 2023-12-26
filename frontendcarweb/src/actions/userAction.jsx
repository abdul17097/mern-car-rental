import { USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "../ActionTypes/userAcitonTypes"
import axios from 'axios'
import { USER_LOGOUT } from "../constants/userConstant"

export const userLogin = ({email,password})=> async (dispatch)=>{
    try {
        console.log(email, password)
        
        dispatch({type: USER_LOGIN_REQUEST })
        
        const {data} = await axios.post(
            "http://localhost:7000/api/login",
            {
                email,
                password
            },
            {headers: {"Content-Type": "application/json"}}
            )
            console.log("data")
            console.log(data)
            if(data.success === true){
                localStorage.setItem("userInfo", JSON.stringify(data.data))
                dispatch({type: USER_LOGIN_SUCCESS, payload: {data:data.data, message:"Successfully Login"}})
            }else{
                dispatch({type: USER_LOGIN_FAIL, payload: "Something went wrong!"})
            }

    } catch (error) {
        dispatch({type: USER_LOGIN_FAIL,  payload: "Something went wrong!"})
    }
}

export const userSignup = ({ name, email, password, userphone, usercnic }) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNUP_REQUEST });
    console.log(name, email, password, userphone, usercnic);
    const { data } = await axios.post(
      "http://localhost:7000/api/register",
      {
        name,
        email,
        password,
        userphone,
        usercnic
      },
      {headers: {"Content-Type": "application/json"}}
    );
      console.log(data);
    if (data.success === true) {
      localStorage.setItem("userInfo", JSON.stringify(data.data));
      dispatch({ type: USER_SIGNUP_SUCCESS, payload: data.data });
    } else {
      // Dispatch USER_SIGNUP_FAIL with the error message
      dispatch({ type: USER_SIGNUP_FAIL, payload: data.message || "Signup failed" });
    }
  } catch (error) {
    // Dispatch USER_SIGNUP_FAIL with a generic error message or use error.message
    dispatch({ type: USER_SIGNUP_FAIL, payload: "Signup failed" });
  }
};


export const userLogout = (payload) => ({
  type: USER_LOGOUT,
  payload
});

export const userLoginCheck = (payload)=>({
  type: USER_LOGIN,
  payload
})