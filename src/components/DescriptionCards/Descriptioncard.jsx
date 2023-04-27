import React from "react";

export const DescriptionCards = ({image, title, text}) => {
return(
    <div>
        <img src={image} alt="invent graphic "/>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
);
};