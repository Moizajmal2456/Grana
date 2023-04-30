import React from "react";
import style from "./styles.module.scss";

export const Button = ({ title, type, variant, size, onClick }) => {
  return (
    <button
      className={`${style[type]} ${style[size]} ${style[variant]}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};