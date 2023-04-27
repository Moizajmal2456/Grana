import React from "react";
import { DescriptionCards } from "../DescriptionCards/Descriptioncard";
import invest from "../../../images/invest.wepg";
import wanted from "../../images/wanted.wepg";

export const BuyWant = () => {
return(
<>
    <DescriptionCards
    // image={invest}
    title="Invest"
    text="Invest in fully legal Imarat projects. Our “Ownerships & Approvals, Demand & Delivery” approach ensures fantastic returns with full risk mitigation"
    />

    <DescriptionCards
    // image={wanted}
    title="Wanted"
    text="In just 3 clicks activate a team of experts to find the properties you need"/>
</>
);
};