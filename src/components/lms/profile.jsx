import React from "react";

export const Profile = (props) => {
    return (
        <div className='inline-flex items-center gap-x-4'>
            <span className='text-2xl'>{props.name}</span>
            <img src={`${props.imageuser}`} alt='profile-picture' className='rounded-full w-12'/>
        </div>
    )
}