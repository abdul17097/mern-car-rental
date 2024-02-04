import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLocalStorageData } from '../actions/orderAction';

export const Success = () => {
    const dispatch = useDispatch();


useEffect(() =>{
    dispatch(setLocalStorageData())
},[])
  return (
    <div className='h-[30vh] flex justify-center items-center'>
        <div className="border w-96 h-32 flex justify-center items-center rounded-xl bg-green-500 shadow-2xl text-white text-2xl">Payment Success</div>
    </div>
  )
}
