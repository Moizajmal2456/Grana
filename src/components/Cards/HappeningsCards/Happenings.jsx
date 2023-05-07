import React from "react";
import style from "./styles.module.scss";

export const HappeningsCards = ({image,text,title}) => {
return(
    <div className={style.Happenings_cards}>
        <div className={style.image}>
        <img src={image} alt="invent graphic "/>
        </div>
        <p>{text}</p>
        <h4>{title}</h4>
    </div>
);
};