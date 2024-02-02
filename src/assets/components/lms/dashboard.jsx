import React from "react";

export const ButtonSort = (props) => {
    return (
        <select className='border-white border text-xs bg-transparent p-2 rounded-lg'>
            <optgroup label={`${props.label}`}>
                <option className="text-black">{props.option1}</option>
                <option className="text-black">{props.option2}</option>
                <option className="text-black">{props.option3}</option>
            </optgroup>
        </select>
    )
}