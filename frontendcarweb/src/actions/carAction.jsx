import {
  CAR_LIST_FAIL,
  CAR_LIST_REQUEST,
  CAR_LIST_SUCCESS,
  CAR_ADD_REQUEST,
  CAR_SEARCH_REQUEST,
  CAR_SEARCH_SUCCESS,
  CAR_SEARCH_FAIL,
} from "../ActionTypes/carActionTypes";
import axios from "axios";
// Action creator using Redux Thunk
export const fetchCar = (params) => async (dispatch) => {
  try {
    dispatch({ type: CAR_SEARCH_REQUEST });
    const response = await fetch(
      `http://localhost:7000/api/search/${params.catagory}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    dispatch({ type: CAR_SEARCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CAR_SEARCH_FAIL, payload: "Something went wrong!" });
  }
};

export const addCar = (formData) => async (dispatch) => {
  try {
    let imageUrl;

    if (formData.image) {
      const formImage = new FormData();
      formImage.append("file", formData.image);
      formImage.append("upload_preset", "notezipper"); // Create this in Cloudinary

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dusob1oit/image/upload`,
        {
          method: "POST",
          body: formImage,
        }
      );

      const data = await response.json();
      imageUrl = data.secure_url;

      // Make the second API call with the formData and imageUrl
      const { data: datas } = await axios.post(
        "http://localhost:7000/api/addCar",
        {
          ...formData,
          image: imageUrl,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    // Handle errors
    console.error("Error in addCar:", error);
  }
};

export const getAllCar = () => async (dispatch) => {
  try {
    dispatch({ type: CAR_LIST_REQUEST });
    const res = await fetch("http://localhost:7000/api/allCar", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { cars } = await res.json();
    dispatch({ type: CAR_LIST_SUCCESS, payload: cars });
  } catch (error) {
    dispatch({ type: CAR_LIST_ERROR, payload: error.message });
  }
};
