import React from "react";
import { AppContext } from "../../contexts/AppContext";
import { useContext } from "react";
import "./Details.css";

export const Details = () => {
  const { detail, setDetail } = useContext(AppContext);

  const handleDelete = (index) => {    
    const newDetails = detail.filter((val,ind)=>{
        return ind===index?false:true
    })
    setDetail(newDetails)
  }

  return (
    <div className="detailContainer">
      {detail.map((value, index) => {
        return (
        
        <div key={index} className="result">
            <div className="header">
                <span>Current Weather</span>
                <span className="delete" onClick={()=>handleDelete(index)}>x</span>

            </div>
            <div className="img">
                <img 
                    src={`http://openweathermap.org/img/wn/${value.icon}@2x.png`}
                    alt="icon" 
                />
                <span>{value.temp}&deg; C</span>
            </div>

            <div className="body">
                <div className="left">
                    <div className="row">
                        <div>City/State</div>
                        <div className="vlaue">{value.state}</div>
                    </div>
                    <div className="row">
                        <div>Country</div>
                        <div className="vlaue">{value.country}</div>
                    </div>
                    <div className="row">
                        <div>Humidity</div>
                        <div className="vlaue">{value.humidity}%</div>
                    </div>
                    <div className="row">
                        <div>WindSpeed</div>
                        <div className="vlaue">NNW {value.windSpeed} km/h</div>
                    </div>
                    <div className="row">
                        <div>Atmosphere</div>
                        <div className="vlaue">{value.atmosphere}</div>
                    </div>
                    <div className="row">
                        <div>Visibility</div>
                        <div className="vlaue">{value.visibility} Km</div>
                    </div>
                </div>
            </div>            
          </div>
        
        );
      })}
    </div>
  );
};
