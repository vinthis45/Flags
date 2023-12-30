
import './App.css';
import React, { useEffect, useState } from "react";



function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
        throw error;
      });
  }, []);

  return (
    <div className="App">
      {countries.length ?
        countries.map((country) => (
          <div key={country.cca3} className="cardStyle">
            <img
              src={country.flags.png}
              className="imgStyle"
              alt={`Flag of ${country.name.common}`}
            />
            <h2>{country.name.common}</h2>
          </div>
        )) : (
          <div>Loading...</div>
        )
      }
    </div>
  );
}


export default App;
