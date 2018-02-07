import React , { Component } from 'react';
import { GoogleApiWrapper, Map, Marker  } from 'google-maps-react';
import './Map.css';



class MapContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            markers:[]
        }
    }


    sendCredentialsHandler = (e) => {
        console.log(e.target);
    }
    

    render() {

        var plotMarkers = this.state.markers.map((marker, index)=>{
            
            //gives markers a variable name then stores it
            return <Marker key = {index}
                                // name ={}
                                position= {{lat:marker.lat, lng:marker.lng}} 
                                />
        });

        

        return (

            <Map google = {this.props.google} zoom={15}
                initialCenter=  {{
                    lat: 33.7490,
                    lng: -84.3880
                }}
            >
                {plotMarkers}

            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCnBY-yCl6U-ZVE6cMGc2GOFXEAe7cCv40"    
})(MapContainer); 
       



