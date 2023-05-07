import { Button } from "../Button/Button";
import mobile from "../../images/mobile.webp";
import style from "./styles.module.scss";

export const AppNow = () => {
return(
    <div className={style.Class_Wrapper}>
        <div className={style.Left_Section}>
            <h2>Get the app now</h2>
            <p>Search hundreds of thousands of up to date listings with powerful filters to find your perfect home 
                and real estate investment. Find properties and opportunities exclusive and unique to Graana.</p>
                <div className={style.Button}>
                <Button title={"Download on the App Store"} type={"primary"}/>
                <Button title={"GET IT ON Google Play"} type={"primary"}/>
                </div>
        </div>
                <div className={style.Right_Section}>
                    <img src={mobile} alt="display on mobile"/>
                </div>
    </div>
);
};