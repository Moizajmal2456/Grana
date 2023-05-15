import style from "./styles.module.scss";
import { Button } from "../Button/Button";

export const Signup = () => {
return(
    <div className={style.Signup_Wrapper}>
     <div className={style.Input_Fields}>
        <div>
        <h2 color="#394b57">Signin to your account</h2>
        </div>
        <h4 color="#999">Welcome back!</h4>
        <input type="string" placeholder="+92 Phone Number"/>
        <input type="string" placeholder="Password"/>
        <Button title={"LOGIN"} type={"secondary"}/>
        <div className={style.Forgot}>
         <h4>Forgot Password?</h4>
        </div>
        <Button title={"Continue with Facebook"} type={"primary"}/>
        <Button title={"Continue with Google"} type={"primary"}/>
        <Button title={"Continue with email"} type={"primary"}/>
        <div className={style.Register}>
        <h4><u>Don't have an account? Register Now</u></h4>
        </div>
     </div>
    </div>
);
};