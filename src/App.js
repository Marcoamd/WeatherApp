import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherLocation from './components/WeatherLocation';
import LocationList from './components/WeatherLocation/LocationList';
import { any } from 'prop-types';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    let cities = [
      "Arequipa, PE",
      "Lima, PE",
      "Puno, PE",
      "Ica, PE",
    ];
    return (
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <br />
        <Row>
          <h1>Titutlo</h1>
        </Row>
        <Row>
          <h5>API de climas y pronóstico</h5>
        </Row>
        <Row>
          <LocationList cities={cities} />
        </Row>
      </Container>
    );
  }
}

export default App;