import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind})=>{
    return (<div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad: ${humidity} % h`}</span>
        <span className="extraInfoText">{`Viento: ${wind} m/s w`}</span>
    </div>);
}

// Validación de campos a travéz de la librería PropTypes
WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
}
export default WeatherExtraInfo;