import {
  CAR_LIST_FAIL,
  CAR_LIST_REQUEST,
  CAR_LIST_SUCCESS,
  CAR_ADD_REQUEST,
  CAR_SEARCH_REQUEST,
  CAR_SEARCH_SUCCESS,
  CAR_SEARCH_FAIL,
  CAR_DELETE_REQUEST,
  CAR_DELETE_SUCCESS,
  CAR_DELETE_FAIL,
  CAR_UPDATE_REQUEST,
  CAR_UPDATE_SUCCESS,
  CAR_UPDATE_FAIL,
} from "../ActionTypes/carActionTypes";
import axios from "axios";
import { toast } from "react-toastify";

// Action creator using Redux Thunk
export const fetchCar = (params) => async (dispatch) => {
  try {
    dispatch({ type: CAR_SEARCH_REQUEST });
    const response = await fetch(
      `https://mern-car-rental-alpha.vercel.app/api/search/${params.catagory}`,
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
        "https://mern-car-rental-alpha.vercel.app/api/addCar",
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
    const res = await fetch(
      "https://mern-car-rental-alpha.vercel.app/api/allCar",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { cars } = await res.json();
    console.log(cars);
    dispatch({ type: CAR_LIST_SUCCESS, payload: cars });
  } catch (error) {
    dispatch({ type: CAR_LIST_FAIL, payload: error.message });
  }
};

export const deleteCar = (id) => async (dispatch) => {
  console.log(id);
  try {
    dispatch({ type: CAR_DELETE_REQUEST });
    const res = await fetch(
      `https://mern-car-rental-alpha.vercel.app/api/deleteCar/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await res.json();

    if (responseData.success) {
      dispatch({ type: CAR_DELETE_SUCCESS, payload: id });
      toast.success("Car Deleted successfully");
    }
  } catch (error) {
    dispatch({ type: CAR_DELETE_FAIL, payload: "Something went wrong" });
  }
};

export const updatecar = (formData, id) => async (dispatch) => {
  try {
    dispatch({ type: CAR_UPDATE_REQUEST });
    const res = await fetch(`http://localhost:7000/api/updateCar/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        AC: formData.AC,
        bluetooth: formData.bluetooth,
        catagory: formData.catagory,
        climateControl: formData.climateControl,
        color: formData.color,
        door: formData.door,
        driver: formData.driver,
        feulType: formData.feulType,
        mileage: formData.mileage,
        name: formData.name,
        price: formData.price,
        reverseCamera: formData.reverseCamera,
        seat: formData.seat,
        transmission: formData.transmission,
        wheel: formData.wheel,
      }),
    });
    const responseData = await res.json();
    console.log(responseData);
    if (responseData.success) {
      toast.success("Car Updated successfully");
      dispatch({ type: CAR_UPDATE_SUCCESS });
    } else {
      dispatch({ type: CAR_UPDATE_FAIL, payload: "Something went wrong" });
      toast.error("Something went wrong");
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: CAR_UPDATE_FAIL, payload: "Something went wrong" });
    toast.error("Something went wrong");
  }
};
