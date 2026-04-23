import { useState, useEffect } from "react";

function Weather() {
  const URL = 'https://api.open-meteo.com/v1/forecast?latitude=27.7172&longitude=85.3240&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto';
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setWeather(data);
        // console.log(data);
      })
      .catch(err => {
        setError(err.message);
        console.error('Error fetching weather:', err);
      })
  }, []);

  return (
    <div>
      <h1>Weather in Kathmandu</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Temperature</th>
            <th scope="col">Time</th>
            <th scope="col">Humidity</th>
            <th scope="col">Wind Speed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{weather?.current?.temperature_2m}</td>
            <td>{weather?.current?.time}</td>
            <td>{weather?.current?.relative_humidity_2m}</td>
            <td>{weather?.current?.wind_speed_10m}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export default Weather;