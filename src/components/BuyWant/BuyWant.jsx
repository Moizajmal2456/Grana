import React from "react";
import invest from "../../images/invest.webp";
import wanted from "../../images/wanted.webp";
import style from "./styles.module.scss";
import { DescriptionCards } from "../DescriptionCards/Descriptioncard";

export const BuyWant = () => {
return(
<div className={style.section_style}>
    <DescriptionCards
    image={invest}
    title="Invest"
    text="Invest in fully legal Imarat projects. Our “Ownerships & Approvals, Demand & Delivery” approach ensures fantastic returns with full risk mitigation"
    buttonText="Invest Now"
    buttonType="secondary"
    />
    <DescriptionCards
    image={wanted}
    title="Wanted"
    text="In just 3 clicks activate a team of experts to find the properties you need"
    buttonText="Wanted"
    buttonType="secondary"/>
    </div>
);
};