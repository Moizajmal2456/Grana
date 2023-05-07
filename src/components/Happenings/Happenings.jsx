import { HappeningsCards } from "../Cards/HappeningsCards/Happenings";
import Roshan from "../../images/roshan.svg";
import FloodRelief from "../../images/graanaCare.svg";
import ESG from "../../images/esg.svg";
import style from "./styles.module.scss";

export const Happenings  = () => {
return(
    <div className={style.Happenings_Wrapper}>
        <h2>Happenings</h2>
        <p>Navigate through the landscape of some of our most well-received campaigns!</p>
        <div className={style.Cards}>
        <HappeningsCards 
        image={Roshan}
        text={"Roshan Apna Ghar is an initiative led by the State Bank of Pakistan (SBP) that aims to ease the Pakistani diaspora around the world. The scheme is availableto all the customers of Roshan Digital Account (RDA)"}
        title={"Read More"}/>
        <HappeningsCards
        image={FloodRelief}
        text={"Flood Relief Fund is an initiative led by Graana.com in collaboration with Pak Army. Pakistan has declared a state of emergency as floods have wreaked havoc across the country. The devastating floods"}
        title={"Read More"}/>
        <HappeningsCards
        image={ESG}
        text={"ESG is vital for curating a sustainable ecosystem, initiative led by Graana.com.As the 8th most affected region by climate change, it is high time Pakistan’s private sector shifts towards eco-friendly"}
        title={"Read More"}/>
        </div>
    </div>
);
};