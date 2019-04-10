import React from 'react';

const WeatherExtraInfo = ({humidity, wind})=>{
    return (<div>
        {`Humedad: ${humidity} % h`}
        <br/>
        {`Viento: ${wind} m/s w`}
    </div>);
}

export default WeatherExtraInfo;