import React from "react";
import Map from "../../images/map.webp";
import style from "./styles.module.scss"; 

export const AreaGuide = () => {
return (
 <div className={style.Wrapper}>
    <div className={style.left_section}>
    <div className={style.text}>
        <h2>Area Guide</h2>
        <p>View schools, health services, parks, security index and other details of any area</p>
    </div>
    <div className={style.input_field}>
        <input type="text" placeholder="Search Area"/>
    </div>
    </div>
    <div className={style.right_section}>
     {/* <div className={style.image}>
       <img src={Map} alt="Map"/>
    </div> */}
     </div>
 </div>
);
};