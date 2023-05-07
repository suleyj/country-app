import React from "react";
import { Link } from "react-router-dom";
import { useTheme} from '../context/ThemeContext'

const Card = (props) => {
  const darkTheme = useTheme()
  return (
    <Link to={`/country-app/country/${props.name}`} style={darkTheme?{textDecoration: 'none', color: '#fff'} : {textDecoration: 'none', color: '#111517'}}>
      <div className="card">
        <img src={`${props.flag}`} alt="" />
        <div className="card-info">
          <h2 className="country-name">{props.name}</h2>
          <p className="card-p">
            <span className="card-heading">Population: </span>
            {props.population}
          </p>
          <p className="card-p">
            <span className="card-heading">Region: </span>
            {props.region}
          </p>
          <p className="card-p">
            <span className="card-heading">Capital: </span>
            {props.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
