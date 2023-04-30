import React from "react";
import style from "./styles.module.scss";
import { IconWithText } from "../IconWithText/IconwithText";
import RentIcon from "../../images/rent_icon.svg";
import HomeIcon from "../../images/home_icon.svg";
import ArrowIcon from "../../images/areaGuideArrow.svg";

export const PropertyCard = ({property}) => {
return(
    <div className={style.card_wrapper}>
    <img src={property.area_image} alt="City"/>
    <p>{property.area_name}</p>
    <IconWithText icon_image={RentIcon}
    icon_text={property.properties_for_rent + " for rent"} />
    <IconWithText icon_image={HomeIcon}
    icon_text={property.properties_for_sale + " for sale"} />
    <IconWithText icon_image={ArrowIcon}
    icon_text={"View Area Guide"} />
    </div>
);
};