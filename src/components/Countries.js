import React from 'react';
import Card from "./Card";
const Countries = ({data}) => {
 
  return <div className='countries-box'><div className='country-grid'>{data.map((item, key) => {
    return (
      <Card 
        key = {key}
        flag={item.flag}
        name={item.name}
        population={item.population.toLocaleString("en-US")}
        region={item.region}
        capital={item.capital != null ? item.capital : ""}
      />
    );
  })}
  </div>
  </div>;
};

export default Countries;
