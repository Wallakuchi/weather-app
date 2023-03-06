import axios from "axios";
import React, { useContext } from "react";
import { Details } from "../Details";
import "./App.css";
import { AppContext } from "../../contexts/AppContext";

export const App = () => {
  const { detail, setDetail, place, setPlace } = useContext(AppContext);

  const handleClick = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=394208692b366a9241361d721c381893&units=metric`
      );
      const data = response.data;
      console.log(response)

      setDetail([
        ...detail,
        {
          state: data.name,
          humidity: data.main.humidity,
          temp: data.main.temp,
          atmosphere: data.weather[0].main,
          icon: data.weather[0].icon,
          windSpeed: data.wind.speed,
          country:data.sys.country,
          visibility:data.visibility,
        }
      ]);
    } catch (error) {
      alert('insert valid city name');
    }
  };
  return (
    <div className="appContainer">
      <div className="inputField">
        <label htmlFor="city">
          Enter City &nbsp;
          <input
            type="text"
            name="city"
            id="city"
            value={place}
            onChange={(event) => setPlace(event.target.value)}
          />
        </label>

        <button className="btn" type="submit" onClick={handleClick}>
          Add City
        </button>
      </div>

      <Details />
    </div>
  );
};
