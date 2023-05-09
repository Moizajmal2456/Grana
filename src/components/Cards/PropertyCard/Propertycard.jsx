import React from "react";
import style from "./styles.module.scss";
import { IconWithText } from "../../IconWithText/IconwithText";
import RentIcon from "../../../images/rent_icon.svg";
import HomeIcon from "../../../images/home_icon.svg";
import ArrowIcon from "../../../images/areaGuideArrow.svg";

export const PropertyCard = ({property}) => {
return(
    <div key={property.id} className="card">
      <div className={style.cards}>
         <div className={style.image}>
           <img src={property.area_image} alt="City"/>
         </div>
          <p>{property.area_name}</p>
          <div className={style.rs_div}>
          <IconWithText icon_image={RentIcon}
          icon_text={property.properties_for_rent + " for rent"} />
          <IconWithText icon_image={HomeIcon}
          icon_text={property.properties_for_sale + " for sale"} />
          
          </div>
          <hr/>
       </div>
    </div>
);
};