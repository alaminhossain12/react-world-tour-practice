/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleAddFlags }) => {
  //   console.log(country);
  const { name, flags, area, population, region, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h2>Name: {name.common}</h2>
      <p>Population: {population}</p>
      <p>
        <small>Area: {area}</small>
      </p>
      <p>
        <small>Region: {region}</small>
      </p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountries(country)}>
        Mark Visited
      </button>
      <br />
      <button onClick={() => handleAddFlags(country.flags.png)}>
        Add Flags
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I Have This Country" : "I Want Country"}
    </div>
  );
};

export default Country;
