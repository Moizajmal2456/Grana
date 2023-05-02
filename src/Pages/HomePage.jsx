import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { BuyWant } from "../components/BuyWant/BuyWant";
import { Services } from "../components/Services/Services";
import { AreaGuide } from "../components/AreaGuide/AreaGuide";
import { propertiesList } from "../Data/data";
import { PropertiesByArea } from "../components/PropertiesByArea/PropertiesByArea";
import { Blogs } from "../components/Blogs/Blogs";

export const HomePage = () => {
return( <>
<Navbar/>
<Hero/>
{/* <button onClick={createUser}>Create User</button>
<button onClick={signInUser}> Sign In</button>   */}
<BuyWant/>
<Services/>
<AreaGuide/>
<PropertiesByArea title="Top areas by city"
propertiesList={propertiesList}/>
<PropertiesByArea title="Recent Properties For Rent"
propertiesList={propertiesList}/>
<PropertiesByArea title="Recent Properties For Sale"
propertiesList={propertiesList}/>
<Blogs/>
</>
);
};