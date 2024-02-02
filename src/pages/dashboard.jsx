import React from 'react';
import { Sidebar } from '../components/lms/navbar';
import { ButtonSort } from '../components/lms/dashboard';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';

function Dashboard() {
  return (
    <div className='flex'>
      <Sidebar />
      <main className='flex flex-1 flex-col py-16 px-8 pl-32  font-Poppins'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <div className='flex flex-col bg-sky-400 p-6 my-10 rounded-md text-white gap-y-3 flex-1'>
          <h2 className='font-semibold text-2xl'>Timeline</h2>
          <div className='flex gap-x-4'>
            <ButtonSort label="Filter By" option1="Next 3 Days" option2="Next 5 Days" option3="Next 7 Days" />
            <ButtonSort label="Sort By" option1="Sort by date" option2="Sort by course name" option3="Sort by last accessed" />
          </div>
          <hr className='my-2' />
          <div className='my-2'>
            <h3 className='font-semibold'>Sunday, 7th January</h3>
            <a href="" className='flex justify-between items-center bg-white text-black rounded-md p-4 my-2 shadow-md'>
              <h4 className='font-semibold'>Modul 1 - Tugas Pendahuluan</h4>
              <div className='flex items-center gap-x-2'>
                <MdOutlineAccessTimeFilled className='text-lg text-sky-400' />
                <span className='text-sky-400 font-semibold'>10:00 AM</span>
              </div>
            </a>
            <a href="" className='flex justify-between items-center bg-white text-black rounded-md p-4 my-2 shadow-md'>
              <h4 className='font-semibold'>Modul 1 - Jurnal</h4>
              <div className='flex items-center gap-x-2'>
                <MdOutlineAccessTimeFilled className='text-lg text-sky-400' />
                <span className='text-sky-400 font-semibold'>10:00 AM</span>
              </div>
            </a>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img className="w-28" src='src\pages\assets\icon\NoActivities_vector.png' alt='No Activities' />
            <span className='font-semibold'>No activities required action</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
