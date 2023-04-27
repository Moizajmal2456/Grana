import style from "./styles.module.scss";
import searchIcon from "../../images/searchIcon.svg";

export const Hero  = () => {
  return (
  <div className={style["hero"]}>
     <div className={style["heading"]}>
     <h1>Buy or rent vetted properties at the
      most trusted online real estate portal</h1>
     </div>
     <div className={style["button"]}>
         <button>BUY</button>
         <button>RENT</button>
     </div>
         <div className={style["searcher"]}>
         <div className={style["input"]}>
            <input type="text" placeholder="Search by city or area" />
          </div>
         <div className={style["searchIcon"]}>
          <img src={searchIcon} alt="search" />
         </div>
         </div>
    </div>
  );  
};