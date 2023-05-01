import { Navbar } from "../components/Navbar/Navbar";
import { PropertiesByArea } from "../components/PropertiesByArea/PropertiesByArea";
import { propertiesList } from "../Data/data";

export const BuyPage = () => {
return(<>
    <Navbar/>
    <PropertiesByArea title="Top areas by city"
propertiesList={propertiesList}/>
</>
);
};