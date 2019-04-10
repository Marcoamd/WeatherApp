import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const data = {
    temperature: 5,
    humidity: 20,
    wind: 10
}

const data2 = {
    temperature: 10,
    humidity: 80,
    wind: 30
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = { // Almacena todas las variables reactivas
            city: 'Arequipa',
            data
        };
    }

    updateState = ()=>{
        this.setState({
            city: 'Lima',
            data: data2
        })
    }

    render() {
        return (<div className="weatherLocationCont">
            <Location city={this.state.city} />
            <WeatherData data={this.state.data} />
            <button onClick={this.updateState}>
                Actualizar Estado
            </button>
        </div>);
    }
};

export default WeatherLocation;