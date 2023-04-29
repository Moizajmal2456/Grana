import React from "react";
import style from "./styles.module.scss";
import Buy from "../../images/buy.svg";
import Sell from "../../images/sell.svg";
import Rent from "../../images/rent.svg";
import GrayEclipse from "../../images/greyEllipse.svg";
import RedEclipse from "../../images/redEllipse.svg";
import { DescriptionCards } from "../DescriptionCards/Descriptioncard";

export const Services = () => {
return(
    <div className={style.cards_wrapper}>
     <div className={style.gray_box}></div>
     <div className={style.cards}> 
      <DescriptionCards
      image={Buy}
      title="Buy a Property"
      text="Find where “perfect” meets “happy”">
      </DescriptionCards>
      </div>
      <div className={style.cards}> 
      <DescriptionCards   image={Sell}
      title="Sell a Property"
      text="Get the best value in any economy">
      </DescriptionCards>
      </div>
      <div className={style.cards}> 
      <DescriptionCards   image={Rent}
      title="Rent a Property"
      text="Live where you can love">
      </DescriptionCards>
      </div>
      <div className={style.red_box}></div>
    </div>
);
}
