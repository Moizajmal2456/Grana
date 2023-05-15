import React from "react";
import style from "./styles.module.scss";
import Buy from "../../images/buy.svg";
import Sell from "../../images/sell.svg";
import Rent from "../../images/rent.svg";
import { DescriptionCards } from "../Cards/DescriptionCards/Descriptioncard";

export const Services = () => {
return(
    <div className={style.cards_wrapper}>
     <div className={style.gray_box}></div>
     <div className={style.cards}> 
      <DescriptionCards
      image={Buy}
      title="Buy a Property"
      text="Find where “perfect” meets “happy”"
      buttonText="BROWSE PROPERTIES"
      buttonType="primary"/> 
      </div>
      <div className={style.cards}> 
      <DescriptionCards   image={Sell}
      title="Sell a Property"
      text="Get the best value in any economy"
      buttonText="ADD DETAILS"
      buttonType="primary"/>
      </div>
      <div className={style.cards}> 
      <DescriptionCards   image={Rent}
      title="Rent a Property"
      text="Live where you can love"
      buttonText="FIND RENTAL"
      buttonType="primary"/>
      </div>
      <div className={style.red_box}></div>
    </div>
);
}
