import React from 'react'
import { CiMail } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
export default function User() {
    return (
        <div>
            

<div class="relative overflow-x-auto shadow-md w-[80vw] sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Customers
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">A list of all the users in your account including their name, title, email and role.</p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Role
                </th>
                
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Delete</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Mehtab
                </th>
                <td class="px-6 py-4">
                    mehtab@gmail.com
                </td>
                <td class="px-6 py-4">
                    customer
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-2xl text-blue-600 dark:text-blue-500 hover:underline"><CiEdit/></a>
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-2xl text-blue-600 dark:text-blue-500 hover:underline text-[red] "><AiOutlineDelete/></a>
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-2xl text-blue-600 dark:text-blue-500 hover:underline text-[green]"><CiMail/></a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Abdul Musavir
                </th>
                <td class="px-6 py-4">
                    abdul17097@gmail.com
                </td>
                <td class="px-6 py-4">
                    admin
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-2xl  text-blue-600 dark:text-blue-500 hover:underline"><CiEdit/></a>
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-2xl  text-blue-600 dark:text-blue-500 hover:underline text-[red] "><AiOutlineDelete/></a>
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-2xl  text-blue-600 dark:text-blue-500 hover:underline text-[green]"><CiMail/></a>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Muhammad Ummar
                </th>
                <td class="px-6 py-4">
                    ummar@gmail.com
                </td>
                <td class="px-6 py-4">
                    customer
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-2xl text-blue-600 dark:text-blue-500 hover:underline"><CiEdit/></a>
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-2xl text-blue-600 dark:text-blue-500 hover:underline text-[red] "><AiOutlineDelete/></a>
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-2xl text-blue-600 dark:text-blue-500 hover:underline text-[green]"><CiMail/></a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

        </div>
    )
}
