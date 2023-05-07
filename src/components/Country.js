import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


const Country = (props) => {
  const [data, setdata] = useState([]);
  const url = "https://restcountries.com/v2/all"
  useEffect(() => {
    axios.get(url).then((res) => {
      setdata(res.data);
    });
  }, []);
  const { name } = useParams();
  
  return <div className='country-box'> <div className='country-container'>
    <Link  to="/country-app" style={{ textDecoration: 'none', color:'#000'}}><div className='back'><i className="fas fa-long-arrow-alt-left"></i> Back</div></Link>
    {data.map((item, index) => {
    return item.name === name ? (
      <div key={index} className='country'>
        <div className='country-img-box' style={{backgroundImage: `url(${item.flag})`}}>
          <img className="country-img" src={`${item.flag}`} alt=""  />
        </div>
        <div className='details-container'>
        <h1 className='details-h1'>{item.name}</h1>
          <div className='details'>
            <div>
              <p><strong>Native Name: </strong><span>{item.nativeName}</span></p>
              <p><strong>Population: </strong><span>{item.population.toLocaleString("en-US")}</span></p>
              <p><strong>Region: </strong><span>{item.region}</span></p>
              <p><strong>Sub Region:</strong> {item.subregion}</p>
              <p><strong>Capital:</strong> {item.capital}</p>
            </div>
            <div>
              <p><strong>Top Level Domain: </strong> {item.topLevelDomain[0]}</p>
              <p><strong>Currencies: </strong> {item.currencies !== undefined ? item.currencies.map(e=> e.name).join(", "): "None"}</p>
              <p><strong>Languages: </strong> {item.languages.map(e=> e.name).join(", ")}</p>
            </div>
          </div>
          <div className='borders'>
            <p><strong>Border Countries: </strong> </p>
            <div className='border-item'>
              {item.borders !== undefined ? item.borders.map((e, index)=>{return <div key={index}className='border'>{e}</div>}): <div>None</div>}
            </div>
          </div>
        </div>
      </div>
      
    ) : null;
  })}
  </div>
  </div>;
};

export default Country;
