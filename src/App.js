import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar.js';
import Map from './Map/Map.js';
import SearchBar from './SearchBar/SearchBar.js';

class App extends Component {
  render() {
    return (
     <div>
        <NavBar />
        <SearchBar />
        <Map />
     </div>

    );
  }
}

export default App;


