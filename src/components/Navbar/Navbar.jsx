import React from "react";
import Logo from  "../../images/GraanaLogo.svg";
import { Button } from "../Button/Button";
import Modal from "react-modal";
import style from "./styles.module.scss";
import { Link } from "react-router-dom";
const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
  
    },
  };
  
  Modal.setAppElement("#root");

export const Navbar  = ( ) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      // subtitle.style.color = "#f00";
    }
  
    function closeModal() {
      setIsOpen(false);
    }
return(
<nav>
    <div className={style.left_menu}>
     <div className={style.logo}>
      <Link to="/">
     <img src={Logo} alt="logo"></img>
      </Link>
     </div>
     <div className={style.menu_items}>
      <ul>
        <Link to="/buy">
        <li>BUY</li>
        </Link>
        <li>SELL</li>
        <li>RENT</li>
        <li>INVEST</li>
    </ul>
     </div>
    </div>
    <div className={style.right_menu}>
        <ul>WANTED</ul>
        <Link to="/singup">
        <Button title={"Sign In"} size={"md"} type={"primary"}/>
        </Link>
        </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className={style.heading}>Sign in to your account</h2>
        <h4 className={style.h4}>Welcome back!</h4>
        <input type="number" placeholder="+92 Phone Nummber" />
        <br />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <br />
        <Button title="Login" type={"secondary"} size={"lg"}/>
        <p className={style.p}>Forgot Password</p>
        <Button title="Continue with Facebook" type={"primary"} size={"lg"}/>
        <Button title="Continue with Google " type={"primary"} size={"lg"}/>
        <Button title="Continue with Email" type={"primary"} size={"lg"}/>
        <p className={style.p1}>Don't have an account? Register Now</p>
      </Modal>
</nav>
);
};
