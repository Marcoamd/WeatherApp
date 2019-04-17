import React, { Component } from 'react';
import ForecastItem from './ForecasItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import { transformForecastData } from './../services/transfromForecastData';

const dataEjemplo = {
    temperature: 10,
    humidity: 10,
    wind: 11,
    weatherState: 'thunderstorm'
}

class ForecastExtended extends Component {

    constructor(props) {
        super(props);
        this.state = {
            forecastData: null
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city != this.props.city){
            this.setState({
                forecastData:null
            });
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city =>{
        let url = this.getUrlWeatherForecastByCity(city);
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            let forecastData = transformForecastData(data);
            this.setState({
                forecastData: forecastData
            })
        });
    }

    getUrlWeatherForecastByCity = (city) => {
        let apiKey = "3aa1d338c3da9b34ea8e0267abd0dd93";
        return `http://api.openweathermap.org/data/2.5//forecast?q=${city}&appid=${apiKey}&units=meters`;
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    renderForecastItemDays(forecastData){
        let ForecastItems = forecastData.map((forecastItem,i)=>{
            return <ForecastItem weekDay={forecastItem.weekDay}
                                 data={forecastItem.data}
                                 hour={forecastItem.hour}
                                 key={i}/>
        });
        return ForecastItems;
    }

    render(){
        let {forecastData} = this.state;

        return (<div>
            <h2>Pronostico extendido de {this.props.city}</h2>
            {forecastData ? this.renderForecastItemDays(forecastData) : <CircularProgress/>}
        </div>)
    }
}

export default ForecastExtended;