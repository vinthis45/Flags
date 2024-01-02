
import './App.css';
import React, { useEffect, useState } from "react";



function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        console.log("Error fetching data: ", error); // Log the error using console.log as well
      }
    };
  
    fetchData().catch((error) => {
      console.error("Failed to fetch ", error);
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
