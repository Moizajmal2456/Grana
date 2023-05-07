import React, { useEffect, useState } from "react";
import style from "./styles.module.scss";
import { citiesList } from "../../Data/data";
import { Button } from "../Button/Button";
import { PropertyCard } from "../Cards/PropertyCard/Propertycard";

export const PropertiesByArea = ({title , propertiesList }) => {
  // const [properties , setProperties] = useState([]);

  // useEffect(() => {
  //   const data = propertiesList;
  //   setProperties(data);
  // }, []);
return(
<div className={style.Properties_Area}>
<h2>{title}</h2>
<div className={style.cities_Name}>
{citiesList.map((city) => {
  return (
    <Button
    key={city.id}
    title={city.name}
    // onClick={() => handleCityClick(city.id)}
    />
    );
  })}
  </div>
  <div className={style.properties_cards}>
      {propertiesList.map((property) => {
        return(
          <PropertyCard property={property}/>
          );
        })
      }
      </div>
</div>
);
} ;