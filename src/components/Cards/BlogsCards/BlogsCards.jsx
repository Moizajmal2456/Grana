import React from "react";
import style from "./styles.module.scss";

export const BlogsCards = ({image, title, text, author, date}) => {
return(
    <div className={style.Blogs_cards}>
        <div className={style.image}>
        <img src={image} alt="invent graphic "/>
        </div>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className={style.detail}>
        {/* <img src={author} alt="authorimage"/> */}
        <p>{date}</p>
        </div>
    </div>
);
};