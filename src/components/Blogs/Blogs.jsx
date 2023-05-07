import AuthorImage from "../../images/blogUserDummyImage.svg";
import GangaRamHospital from "../../images/Hospital-Emergency-Block.webp";
import KarachiStation from "../../images/karachi-station.webp";
import DubaiTower from "../../images/DubaiTower.webp";
import { BlogsCards } from "../BlogsCards/BlogsCards";
import style from "./styles.module.scss";
import { Button } from "../Button/Button";

export const Blogs = () => {
return(
    <div className={style.Blogs_Wrapper}>
        <h2>Graana Blogs</h2>
        <p>Trends and perspectives for buyers and investors</p>
        <div className={style.Blogs}>
       <BlogsCards 
       image={GangaRamHospital}
       title={"Ganga Ram Hospital Lahore: A"}
       text={"Ganga Ram Hospital Lahore is a premier healthcare institution that was established in 1921 by Sir Ganga Ram, a philanthropist and "}
       author={AuthorImage}
       date={"April 19, 2023 . 7 min read "}/>
       <BlogsCards 
       image={KarachiStation}
       title={"Karachi Cantt Station: History"}
       text={"Karachi Cantt Station is one of the most important and busiest railway stations in Pakistan, located near Dr. Daudpota Road "}
       author={AuthorImage}
       date={"April 19, 2023 . 7 min read "}/>
       <BlogsCards 
       image={DubaiTower}
       title={"Dubai Introduces Services to Verify"}
       text={"ISLAMABAD: Dubai Land Department (DLD) has announced the launch of a new electronic service called Madmoun, which aims to  "}
       author={AuthorImage}
       date={"April 19, 2023 . 7 min read "}/>
       </div> 
       <Button title={"View All Blogs"} type={"secondary"}/>
    </div>
);
};