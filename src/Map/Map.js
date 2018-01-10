import React , { Component } from 'react';
const google = window.google;

class Map extends Component {
    
    initMap() {
        console.log('hello');
        //map options
        var options = {
          zoom: 5,
          center: {lat: 33.7490, lng: -84.3880} //atlanta
        }
        //new map
        var map = new
        google.maps.Map(document.getElementById('map'), options);
    
        addMarker({
            coordinates: {lat: 33.8373, lng: -84.4068},
            iconImage: 'https:developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<h3> Home: Buckhead, GA</h3>'
            }); //Buckhead
    
        addMarker({
            coordinates: {lat: 40.7128, lng: -74.0060},
            content: '<h3> New York, NY</h3>'
            }); //New York
    
        addMarker({
            coordinates: {lat: 39.9526, lng: -75.1652},
            content: '<h3> Philadelphia, PA</h3>'
            }); //Pennyslvania
    
        addMarker({
            coordinates: {lat: 30.3322, lng: -81.6557},
            content: '<h3> Jacksonville, FL</h3>'
            }); //Jacksonville, FL
        
        //Add Marker function
        function addMarker (props){
        var marker = new google.maps.Marker({
            position: props.coordinates, //buckhead
            map:map,
            //icon:props.iconImage
            });
    
            //check for customicon
            if(props.iconImage) {
            //set Icon Image
            marker.setIcon(props.iconImage);
            }
    
            //check content
            if(props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
                });
    
                marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
            }
    
       }
    
    }

    render() {

        return <div id = "map"></div> 
    }
    componentDidMount()  {
        this.initMap();
    }
  
}

export default Map;
       



