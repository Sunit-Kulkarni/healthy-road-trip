import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar.js';
import Map from './Map/Map.js';
import Homepage from './Homepage/Homepage.js';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
     <div>
        <NavBar />
      
        <Route exact path = "/" component = {Homepage} />
        <Route path = "/map" component = {Map} />
       



     </div>

      
     

    );
  }
}

export default App;


