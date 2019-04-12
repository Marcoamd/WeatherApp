import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';


class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        this.state = { // Almacena todas las variables reactivas
            city: 'Cargando',
            data: null //{
            //     temperature: 4,
            //     humidity: 10,
            //     wind: 1,
            //     weatherState: 'day-sunny'
            // }
        };
        
        console.log("Constructor");
    }

    componentWillMount(){
        console.log("UNSAFE componentWillMount");
    }
    componentDidMount(){
        console.log("componentDidMount");
        this.updateState();
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUpdate(){
        console.log("UNSAFE componentWillUpdate");
    }

    getUrlWeatherByCity = (city) => {
        let apiKey = "3aa1d338c3da9b34ea8e0267abd0dd93";
        return `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;
    }

    transformData(json) {

        let weatherState = '';
        let id = json.weather[0].id;
        if(id >= 200 && id < 300)
        {
            weatherState = 'day-thunderstorn';
        }else if(id >= 300 && id < 400)
        {
            weatherState = 'showers';            
        }else if(id >= 500 && id < 600)
        {
            weatherState = 'day-rain';            
        }else if(id >= 600 && id < 700)
        {
            weatherState = 'day-snow';            
        }else if(id >= 801 && id < 805)
        {
            weatherState = 'day-cloudy';            
        }else{
            
            weatherState = 'day-sunny';
        }

        let data = {
            temperature: json.main.temp,
            humidity: json.main.humidity,
            wind: json.wind.speed,
            weatherState: weatherState
        }
        return data;
    }

    updateState = () => {
        // let pais = ", PE";
        // let city = "Puno";
        let url = this.getUrlWeatherByCity(this.props.city);

        fetch(url).then((response) => {
            return response.json();
        }).then((json) => {
            let data = this.transformData(json);
            this.setState({
                city: this.props.city,
                data: data
            })
        });
    }

    render() {
        console.log("render");
        return (<div className="weatherLocationCont">
            <Location city={this.state.city} />
            {this.state.data ? <WeatherData data={this.state.data} /> : <CircularProgress/>}            
        </div>);
    }
};

export default WeatherLocation;