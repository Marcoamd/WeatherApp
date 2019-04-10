import React from 'react';
import WeatherIcons from 'react-weathericons';
import './styles.css';
import PropTypes from 'prop-types';

const getWeatherIcon = ()=>{
    return <WeatherIcons name='solar-eclipse' size='4x' className="wicon"/>
}

const WeatherTemperature = ({temperature})=>{
    return (<div className="WeatherTemperatureCont">
        {getWeatherIcon()}
        <span className="temperature">{temperature}</span>
        <span className="temperatureType">ºC</span>
    </div>);
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired
}

export default WeatherTemperature;