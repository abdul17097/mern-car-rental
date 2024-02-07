import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLocalStorageData } from '../actions/orderAction';
import { useNavigate } from 'react-router-dom';

export const Success = () => {
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.orderReducer);
  const isAuthenticated = useSelector((state) => state.userReducer.userInfo);

  const history = useNavigate();

  const sendEmail = async () => {
    try {
      const {'0' : _, ...rest} = JSON.parse(localStorage.getItem("reduxState"))
      console.log(rest);
      
      const res = await fetch('http://localhost:7000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rest),
      });

      const responseData = await res.json();
      console.log(responseData);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  
  useEffect(() => {
    const fetchDataAndSendEmail = async () => {
      // Check if the email has already been sent
      
        await dispatch(setLocalStorageData());
        await sendEmail();
      
    };

    fetchDataAndSendEmail();
  }, [dispatch]);

  useEffect(() => {
    // Redirect to login page if user is not authenticated
    if (!isAuthenticated) {
      history('/login');
    }
  }, [isAuthenticated, history]);

  return (
    <div className="h-[30vh] flex justify-center items-center">
      <div className="border w-96 h-32 flex justify-center items-center rounded-xl bg-green-500 shadow-2xl text-white text-2xl">
        {isAuthenticated ? (
          'Payment Success'
        ) : (
          <p>Please log in to view the success page.</p>
        )}
      </div>
    </div>
  );
};
