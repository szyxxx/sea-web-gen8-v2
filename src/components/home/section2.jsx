import React from "react";

export const Section2Card = (props) => {
    return (
        <div className="flex flex-col w-11/12 justify-center bg-sky-400 rounded-lg p-10 my-10 bg font-Poppins text-white gap-y-4">
            <h2 className="font-bold text-3xl">{props.text}</h2>
            <p className="font-light text-xl">{props.desc}</p>
            {props.children}
        </div>
    )
}

export const Section2StudyGroup = (props) => {
    return (
        <div className={`study-card flex rounded-lg items-center shadow-md px-6 py-2 gap-x-6`}>
          <img src={`src/pages/assets/icon/sg${props.logo}_logo.png`} alt={`${props.logo}`} className="h-[15vh]"></img>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-xl">{props.card}</h3>
            <p>{props.desc}</p>
          </div>
        </div>
    )
}

export const Section2Assistant = (props) => {
    return (
        <div className="flex flex-col w-[20vw] justify-center items-center text-center my-20 bg-gradient-to-br from-sky-400 to-blue-950 border-white border-2 rounded-md p-8 font-Poppins text-white">
          <img src={`src/pages/assets/assistants/${props.image}.png`} alt={`${props.image}`} className="max-w-[10vw] my-4"/>
          <h2 className="font-bold text-xl my-1 text-wrap">{props.assistant}</h2>
          <h3 className="text-sm">{props.position}</h3>
          <div className="inline-flex gap-x-3">
            <a href={`${props.instagram}`}><img src="src\pages\assets\assistants\instagram_social.svg" alt="instagram" className="max-w-[2vw] my-4"/></a>
            <a href={`${props.linkedin}`}><img src="src\pages\assets\assistants\linkedin_social.svg" alt="linkedin" className="max-w-[2vw] my-4"/></a>
          </div>
        </div>
    )
}