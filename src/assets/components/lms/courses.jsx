import React from "react";
import { Link as Navigate } from "react-router-dom";

export const CoursesCard = (props) => {
    return (
        <Navigate to={`${props.to}`} className="flex flex-col-reverse w-64 h-40 bg-sky-400 rounded-lg shadow-md"> 
            <div className="flex flex-col justify-center bg-white w-full h-20 rounded-b-md p-3">
                <h3 className="font-semibold">{props.module}</h3>
                <span className="text-xs">{props.title}</span>
            </div>
        </Navigate>
    )
}