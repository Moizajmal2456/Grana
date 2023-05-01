import React from "react";
import style from "./styles.module.scss";
import { Button } from "../Button/Button";

export const DescriptionCards = ({image, title, text, buttonText, buttonType}) => {
return(
    <div className={style.Description_cards}>
        <img src={image} alt="invent graphic "/>
        <h2>{title}</h2>
        <p>{text}</p>
        <Button title={buttonText} type={buttonType}/>
    </div>
);
};