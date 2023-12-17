import React from 'react'
import {Sidebar} from "./Sidebar"
import {Cars} from './Cars'
import { Search } from './Search'
import User from './User'
import { Dashboard } from './Dashboard'
import CarForm from '../Screen/CarForm/CarForm'
export const Admin = () => {
    return (
        <div className="flex h-[100vh]">
            <Sidebar/>
            <div className="flex flex-col p-5 gap-2">
            {/* <Search/> */}
            {/* <Cars/> */}
            {/* <User/> */}
            {/* <Dashboard/> */}
            <CarForm/>
            </div>
        </div>
    )
}
