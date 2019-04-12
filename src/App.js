import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherLocation from './components/WeatherLocation';
import LocationList from './components/WeatherLocation/LocationList';
import { any } from 'prop-types';

class App extends Component {
  render() {
    let cities = [
      "Arequipa, PE",
      "Lima, PE",
      "Puno, PE",
      "Ica, PE",
    ];
    return (
      <div className="App">
        <LocationList cities={cities}/>
      </div>
    );
  }
}

export default App;