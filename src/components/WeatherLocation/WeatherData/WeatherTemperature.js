import React from 'react';
import WeatherIcons from 'react-weathericons';
import './styles.css';
import PropTypes from 'prop-types';

const getWeatherIcon = (weatherState)=>{
    return <WeatherIcons name={weatherState} size='4x' className="wicon"/>
}

const WeatherTemperature = ({temperature, weatherState})=>{
    return (<div className="WeatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{temperature}</span>
        <span className="temperatureType">ºC</span>
    </div>);
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired
}

export default WeatherTemperature;