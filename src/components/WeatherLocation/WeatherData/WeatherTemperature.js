import React from 'react';
import WeatherIcons from 'react-weathericons';

const WeatherTemperature = ({temperature})=>{
    return (<div>
        <WeatherIcons name='solar-eclipse' size='2x'/>
        {` ${temperature}º C`}
    </div>);
}

export default WeatherTemperature;