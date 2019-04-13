import React from 'react';
import WeatherLocation from './index';

const LocationList = (props) => {
    //     let cities = props.cities;
    //     console.log(cities[0]);
    //     return (<div>
    //         {createWeatherLocations(cities)}
    //     </div>);
    let cities = props.cities;
    return (<div>
        {generateWeatherData(cities)}
    </div>);
}
const generateWeatherData = (cities) => {
    let weatherLocations = cities.map((city, i) => {
        return <WeatherLocation city={city} key={i} />
    });
    return weatherLocations;
}

const createWeatherLocations = (cities) => {
    // let weatherLocations = [];
    // for(let city of cities)
    // {
    //     weatherLocations.push(<WeatherLocation city={city}/>);
    // }
    // return weatherLocations;

}

export default LocationList;