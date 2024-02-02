import React from "react";

export const UserInput = (props) => {
    return (
        <div className="text-sm w-full">
            <span className="font-light">{props.field}</span>
            <input type={`${props.type}`} placeholder={`${props.placeholder}`} className="font-extralight w-full border border-sky-400 rounded-lg p-2"/>
        </div>
    )
}