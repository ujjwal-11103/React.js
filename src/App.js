import React, { useEffect, useState } from 'react';

export default function App() {

  const [weatherData, setWeatherData] = useState([])

  async function checkweather(city) {

    const api_key = "c7848b1913cb882c176585e7bfc7f4c1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const data = await fetch(`${url}`)
      .then(response => response.json());

    setWeatherData(data);
    console.log(data);

  }

  useEffect(() => {
    let city = prompt("Enter city Name = ")
    checkweather(city);
  }, []);

  return (
    <div>
      <h1>Hello</h1>

      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
          <tr>
            <td style={cellStyle}>Name</td>
            <td style={cellStyle}>Temp (℉)</td>
            <td style={cellStyle}>Pressure (pa)</td>
            <td style={cellStyle}>Humidity  (g/m3)</td>
          </tr>

          <tr>
            <td style={cellStyle}>{weatherData.name}</td>
            <td style={cellStyle}>{weatherData.main?.temp}</td>
            <td style={cellStyle}>{weatherData.main?.pressure}</td>
            <td style={cellStyle}>{weatherData.main?.humidity}</td>

            {/* Optional chaining (?.) ka use isliye kiya gaya hai taki jab aap weatherData.main.temp ya kisi aur nested property ko access karte hain, aur agar koi intermediate property (jaise ki main) undefined hai toh bhi aapko error nahi milega, aur aapka code sahi tarah se chalega.*/}

          </tr>

        </tbody>
      </table>
    </div>
  );
}

const cellStyle = {
  border: '1px solid black',
  padding: '8px',
  textAlign: 'center',
};
