import React , { Component } from 'react';
import { InfoWindow, GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import './Map.css';
import axios  from 'axios';  
import {withRouter} from 'react-router-dom';

class MapContainer extends React.Component {

    constructor(props) {
        super(props);
        //the city lives in this 
        this.state = {
            markers:[], 
            destination: props.match.params.city 
        }
    }

    mapIsReady(mapProps, map) {
        //set map up for display directions
        const {google} = mapProps; 
        this.directionsService = new google.maps.DirectionsService(map);
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.directionsDisplay.setMap(map);

        var destination; 
        if(this.state.destination == 'nyc'){
            destination = "New York, NY";
        } else if (this.state.destination == 'philadelphia'){
            destination = "Philadelphia, PA";
        } else if (this.state.destination == 'raleigh'){
            destination = "Raleigh, NC"; 
        }
        this.directionsService.route({
            origin: "Atlanta, GA", 
            destination: destination, 
            traelMode: 'DRIVING'
        }, (response, status) => {
            if (status === 'OK') {
                this.directionsDisplay.setDirections(response); 
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
        
        //AXIOS 
        axios.get('/restaurants/' + this.state.destination)
        .then(({restaurants})=>{
           this.setState({
             markers: restaurants
           })
        });
    }

    render() {
        var plotMarkers = this.state.markers.map((marker, index)=>{
            
            //gives markers a variable name then stores it
            return <Marker key = {index}
                                position= {{
                                    lat:marker.lat, 
                                    lng:marker.lng}} 
                                />
        });

        return (
          
          <div className = "MapContainer">  
                <Map google = {this.props.google}
                    zoom={5}
                    onReady={this.mapIsReady.bind(this)} 
                    initialCenter=  {{
                        lat: 33.7490,
                        lng: -84.3880
                    }}
                >

                {this.state.markers.map((location, index)=>{
                    return (
                    <Marker key={index} onClick={this.onMarkerClick}
                        position={location}/>
                    )
                })}

                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCnBY-yCl6U-ZVE6cMGc2GOFXEAe7cCv40"    
})(withRouter(MapContainer));