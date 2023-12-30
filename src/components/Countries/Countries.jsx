/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Countries.css";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [addFlags, setAddFlags] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleVisitedCountries = (country) => {
    // console.log(country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  const handleAddFlags = (flag) => {
    // console.log(country);
    const newAddFlags = [...addFlags, flag];
    setAddFlags(newAddFlags);
  };
  return (
    <div>
      <h2>Countries All: {countries.length}</h2>
      <div>
        <h2>Countries Name: {visitedCountries.length}</h2>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div>
        {addFlags.map((flag, idx) => (
          <img className="img" key={idx} src={flag}></img>
        ))}
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleAddFlags={handleAddFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
