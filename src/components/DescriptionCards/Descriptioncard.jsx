import React from "react";
export const DescriptionCards = ({image, title, text, button}) => {
return(
    <div>
        <img src={image} alt=""/>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
);
};