import Logo from  "../../images/GraanaLogo.svg";
import style from "./styles.module.scss";

export const Navbar  = ( ) => {
return(
<nav>
    <div className={style["left-menu"]}>
     <div className={style["logo"]}>
     <img src={Logo} alt="logo"></img>
     </div>
     <div className={style["menu-items"]}>
      <ul>
        <li>BUY</li>
        <li>SELL</li>
        <li>RENT</li>
        <li>INVEST</li>
    </ul>
     </div>
    </div>
    <div className={style["right-menu"]}>
        <ul>WANTED</ul>
        <button>SIGN IN</button>
    </div>
</nav>
);
};
