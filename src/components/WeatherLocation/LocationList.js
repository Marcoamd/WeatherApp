import React from 'react';
import WeatherLocation from './index';
import PropTypes from 'prop-types';



const LocationList = (props) => {

    let cities = props.cities;
    let onSelectLocation = props.onSelectLocation;

    //---------------------------------------------
    
    const generateWeatherData = (cities) => {
        let weatherLocations = cities.map((city, i) => {
            return <WeatherLocation city={city} key={i} onWeatherLocationClick={()=>{
                onSelectLocation(city);
            }} />
        });
        return weatherLocations;
    }
    //---------------------------------------------

    return (<div>
        {generateWeatherData(cities)}
    </div>);
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectLocation: PropTypes.func.isRequired
}

export default LocationList;