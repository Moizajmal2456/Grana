import style from "./styles.modules.scss";
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
              <ol>About</ol>
              <ol>Our Story</ol>
              <ol>Our Blog</ol>
              <ol>Career</ol>
              <ol>Gurus</ol>
             </ul>
            </div>
            <div className={style.Quick_Links}>
             <ul>
              <ol>Quick Links</ol>
              <ol>Projects in Pakistan</ol>
              <ol>Projects in Karachi</ol>
              <ol>Projects in Islamabad</ol>
              <ol>Projects in Lahore</ol>
             </ul> 
            </div>
            <div className={style.ContactUs}>
             <ul>
              <ol>Contact Us</ol>
              <ol>info@graana.com</ol>
              <ol>111-555-555</ol>
             </ul> 
            </div>
            <div className={style.images}>
             <h3>Follow Us</h3> 
             <img src={Instagram} alt="instgram" /> 
             <img src={Linkedin} alt="linkedin" />
             <img src={Twitter} alt="twitter" />
             <img src={Youtube} alt="youtube" />
             <img src={Facebook} alt="facebook" />         
            </div>
        </div>
     <div className={style.Terms}> 
        <p>Copyright 2023 Graana. All rights reserved</p>
        <p>Terms & Conditions | Privacy Policy | Desclaimer</p>
     </div>
     <div className={style.Footer}>
        <img src={FooterImg} alt="footer"/>
     </div>
    </div>
);
};