import React, { Component } from 'react';
import ForecastItem from './ForecasItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import { transformForecastData } from './../services/transfromForecastData';

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves']
const dataEjemplo = {
    temperature: 10,
    humidity: 10,
    wind: 11,
    weatherState: 'thunderstorm'
}

class ForecastExtended extends Component{

    constructor(props){
        super(props);
        this.state = {
            forecastData: null
        }
    }    

    componentDidMount(){
        let {city} =  this.props;
        let url = this.getUrlWeatherForecastByCity(city);
        fetch(url).then((response)=>{
            return response.json();
        }).then((data)=>{
            transformForecastData(data);
            this.setState({
                forecastData:1
            });
        });
    }

    getUrlWeatherForecastByCity = (city) => {
        let apiKey = "3aa1d338c3da9b34ea8e0267abd0dd93";
        return `http://api.openweathermap.org/data/2.5//forecast?q=${city}&appid=${apiKey}&units=meters`;
    }

    renderForecastItemDay(){
        let forecastItem = days.map((day, i) => { //elemento, indice, y todo el array
            return <ForecastItem weekDay={day} hour={10} data={dataEjemplo} key={i}/>
        });
        return forecastItem;
    }

    render(){
        let {forecastData} = this.state;
        return (<div>
            <h2>Pronóstico extendido de {this.props.city}</h2>
            {forecastData ? this.renderForecastItemDay() : <CircularProgress/>}
        </div>);
    }    
}

export default ForecastExtended;