import style from "./styles.module.scss";
import Instagram from "../../images/instagram.webp";
import Linkedin from "../../images/linkedin.webp";
import Twitter from "../../images/twitter.webp";
import Youtube from "../../images/youtube.webp";
import Facebook from "../../images/facebook.webp";
import FooterImg from "../../images/footer.svg";

export const Footer = () => {
return(
    <div className={style.Footer_wrapper}>
        <div className={style.Link_wrapper}>
            <div className={style.About}>
             <ul>
              <ol><b>About</b></ol>
              <ol>Our Story</ol>
              <ol>Our Blog</ol>
              <ol>Career</ol>
              <ol>Gurus</ol>
             </ul>
            </div>
            <div className={style.Quick_Links}>
             <ul>
              <ol><b>Quick Links</b></ol>
              <ol>Projects in Pakistan</ol>
              <ol>Projects in Karachi</ol>
              <ol>Projects in Islamabad</ol>
              <ol>Projects in Lahore</ol>
             </ul> 
            </div>
            <div className={style.ContactUs}>
             <ul>
              <ol><b>Contact Us</b></ol>
              <ol>info@graana.com</ol>
              <ol>111-555-555</ol>
             </ul> 
            </div>
            <div className={style.Follow}>
             <h3>Follow Us</h3> 
             <div className={style.Images}>
             <img src={Instagram} alt="instgram" /> 
             <img src={Linkedin} alt="linkedin" />
             <img src={Twitter} alt="twitter" />
             <img src={Youtube} alt="youtube" />
             <img src={Facebook} alt="facebook" />         
             </div>
            </div>
        </div>
     <div className={style.Terms}> 
        <p>Copyright 2023 Graana. All rights reserved</p>
        <p>Terms & Conditions | Privacy Policy | Desclaimer</p>
     </div>
     <div className={style.footer}>
        <img src={FooterImg} alt="footer"/>
     </div>
    </div>
);
};