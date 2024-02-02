import React from "react";

export const Section = (props) => {
    return (
        <section className={`${props.class} flex flex-col items-center justify-center py-20`}>
            {props.children}
        </section>
    )
}

export const Section1Span = (props) => {
return (
    <span className={`text-6xl font-Cascadia font-semibold ${props.color}`}>{props.text}</span>
)
}

export const Section1Button = (props) => {
    return (
        <button className={`flex items-center justify-center rounded-lg text-xl border-2 font-Cascadia ${props.border} ${props.bg} text-lg font-bold ${props.textcolor} hover:bg-sky-800 hover:text-white hover:border-transparent ${props.height} ${props.width}`}>{props.text}</button>
    )
}


  