import React from "react";
import { Sidebar } from "../components/lms/navbar";
import { CoursesCard } from "../components/lms/courses";

function Courses() {
    return (
    <div className='flex'>
      <Sidebar />
      <main className='flex flex-1 flex-col py-16 px-8 pl-32  font-Poppins'>
        <h1 className='text-3xl font-bold'>Courses</h1>
        <div className='grid grid-cols-3 grid-rows-3 my-10 gap-y-14'>
            <CoursesCard to="/modul" module="Modul 1" title="Dasar dan Pengenalan Bahasa C"></CoursesCard>
            <CoursesCard to="/modul" module="Modul 2" title="Dasar dan Pengenalan Bahasa C"></CoursesCard>
            <CoursesCard to="/modul" module="Modul 3" title="Dasar dan Pengenalan Bahasa C"></CoursesCard>
            <CoursesCard to="/modul" module="Modul 4" title="Dasar dan Pengenalan Bahasa C"></CoursesCard>
            <CoursesCard to="/modul" module="Modul 5" title="Dasar dan Pengenalan Bahasa C"></CoursesCard>
            <CoursesCard to="/modul" module="Modul 6" title="Dasar dan Pengenalan Bahasa C"></CoursesCard>
        </div>
      </main>
    </div>
    )
}

export default Courses