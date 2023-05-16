import style from "./styles.module.scss";
import { Button } from "../Button/Button";
import Email from "../../images/email.svg";
import Facebook from "../../images/facebook.svg";
import Google from "../../images/google.svg";

export const Signup = () => {
return(
    <div className={style.Signup_Wrapper}>
     <div className={style.Input_Fields}>
        <div>
        <h2 color="#394b57">Signin to your account</h2>
        </div>
        <h4 color="#999">Welcome back!</h4>
        <input type="string" required placeholder="+92 Phone Number"/>
        <input type="string" required placeholder="Password"/>
        <Button title={"LOGIN"} type={"secondary"}/>
        <div className={style.Forgot}>
         <h4>Forgot Password?</h4>
        </div>
         <div className={style.Or}>
         <div className={style.Line}></div>
         <div className={style.Text}><p>OR</p></div>
         <div className={style.Line}></div>
         </div>
        <button > <img src={Facebook} alt="facebook icon"/>Continue with Facebook</button>
        <button> <img src={Google} alt="google icon"/>Continue with Google</button>
        <button> <img src={Email} alt="email icon"/>Continue with Email</button>
        <div className={style.Register}>
        <h4><u>Don't have an account? Register Now</u></h4>
        </div>
     </div>
    </div>
);
};