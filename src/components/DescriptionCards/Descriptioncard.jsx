import React from "react";
import style from "./styles.module.scss";

export const DescriptionCards = ({image, title, text}) => {
return(
    <div className={style.Description_cards}>
        <img src={image} alt="invent graphic "/>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
);
};