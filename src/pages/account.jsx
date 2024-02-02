import React from "react";
import { Sidebar } from "../assets/components/lms/navbar";

function Account() {
    return (
      <div className='flex'>
        <Sidebar></Sidebar>
        <main className='flex flex-1 flex-col py-16 px-8 pl-32  font-Poppins'>
          <h1 className='text-3xl font-bold'>Account</h1>
          <div className='flex flex-col bg-sky-400 p-9 my-10 rounded-lg text-white gap-y-3 h-80'>
            <div className="inline-flex items-baseline justify-between">
                <h2 className='font-semibold text-md mb-6'>Profile Details</h2>
                <button className="bg-white text-black p-2 text-sm font-bold rounded-lg">Edit Profile</button>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-x-16 gap-y-8">
                <div className="flex flex-col gap-y-2">
                    <span className="text-sm">Username</span>
                    <input className="border border-white bg-transparent rounded-md h-12 px-4 font-extralight"></input>
                </div>
                <div className="flex flex-col gap-y-2">
                    <span className="text-sm">Username</span>
                    <input className="border border-white bg-transparent rounded-md h-12 px-4 font-extralight"></input>
                </div>
                <div className="flex flex-col gap-y-2">
                    <span className="text-sm">Username</span>
                    <input className="border border-white bg-transparent rounded-md h-12 px-4 font-extralight"></input>
                </div>
                <div className="flex flex-col gap-y-2">
                    <span className="text-sm">Username</span>
                    <input className="border border-white bg-transparent rounded-md h-12 px-4 font-extralight"></input>
                </div>
                <div className="flex flex-col gap-y-2">
                    <span className="text-sm">Username</span>
                    <input className="border border-white bg-transparent rounded-md h-12 px-4 font-extralight"></input>
                </div>
                <div className="flex flex-col gap-y-2">
                    <span className="text-sm">Username</span>
                    <input className="border border-white bg-transparent rounded-md h-12 px-4 font-extralight"></input>
                </div>
            </div>
          </div>
          <div className='flex flex-col bg-sky-400 p-9 my-10 rounded-lg text-white gap-y-3 h-80'>
            <h2 className='font-semibold text-md mb-6'>Grades</h2>
            <div className="flex justify-center overflow-x-auto">
                <table className="table-auto w-full overflow-auto">
                <thead>
                    <tr>
                    <th>Module</th>
                    <th>Presence</th>
                    <th>TP</th>
                    <th>TA</th>
                    <th>D1</th>
                    <th>D2</th>
                    <th>D3</th>
                    <th>D4</th>
                    <th>I1</th>
                    <th>I2</th>
                    <th>Assistant</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Present</td>
                    <td>85</td>
                    <td>85</td>
                    <td>85</td>
                    <td>85</td>
                    <td>85</td>
                    <td>85</td>
                    <td>85</td>
                    <td>85</td>
                    <td>DAO</td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>Present</td>
                    <td>85</td>
                    <td>85</td>
                    <td>85</td>
                    <td>85</td>
                    <td>85</td>
                    <td>85</td>
                    <td>85</td>
                    <td>85</td>
                    <td>DAO</td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>Present</td>
                    <td>85</td>
                    <td>85</td>
                    <td>85</td>
                    <td>85</td>
                    <td>85</td>
                    <td>85</td>
                    <td>85</td>
                    <td>85</td>
                    <td>DAO</td>
                    </tr>
                </tbody>
                </table>
            </div>
          </div>
        </main>
    </div>
    )
}

export default Account  