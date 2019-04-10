import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = ()=>{
    return (<div>
        <WeatherTemperature temperature={20}/>
        <WeatherExtraInfo humidity={'10'} wind={'1'}/>
    </div>)
}

export default WeatherData;