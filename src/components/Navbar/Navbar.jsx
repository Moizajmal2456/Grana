import Logo from  "../../images/GraanaLogo.svg";
import { Button } from "../Button/Button";
import Modal from "react-modal";
import style from "./styles.module.scss";
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
        <Button title={"Sign In"} size={"md"} type={"primary"} onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1>Login Form</h1>
        <input type="text" placeholder="Enter Email" />
        <br />
        <br />
        <input type="password" placeholder="Enter Password" />
        <br />
        <br />
        <Button title="Login" />
      </Modal>
    </div>
</nav>
);
};
