import React , { Component } from 'react';
import {Link } from 'react-router-dom';
import $ from 'jquery'; 
import logo from '../longLOGO2.png';
import './NavBar.css';



class NavBar extends Component {
    state = {
        openSlideMenu: false
    }

    toggleNewSlideMenu() {
        const doesShow = this.state.openSlideMenu; 
        this.setState({openSlideMenu:!doesShow}) 

    }



    render() {
      return (
        <div className="NavBar">
            <nav className="navbar">
            <span className = "open-slide">
                <a href ="#" onClick={this.toggleNewSlideMenu.bind(this)}>
                    <svg width = "30" height = "30">
                        <path d = "M0, 5 30, 5" stroke="#fff" stroke-width="5"/>
                        <path d = "M0,14 30,14" stroke="#fff" stroke-width="5"/>
                        <path d = "M0,23 30,23" stroke="#fff" stroke-width="5"/>
                    </svg>
                </a>
            </span>

            <img src = {logo } height="50px" />
        
            <ul className="navbar-nav">
            
                <li className = "navbarWords"><Link to = "/Login"> Login </Link> </li> 
                <li className = "navbarWords"><a href="#"> | </a></li> 
                <li className = "navbarWords"><Link to = "/SignUp">Sign Up </Link></li>
                <div id="root" style={{float:"left"}}></div>
            </ul>
            </nav>

            

            <div id= "side-menu" className = "side-nav" style ={{width: this.state.openSlideMenu ? "250px" : "0px"}}>
                <a href ="#" className="btn-close" onClick={this.toggleNewSlideMenu.bind(this)}>&times;</a>
                <a href = "#">Start New Trip</a>
                <a href = "">Sign Up</a>
                <a href = "">Login</a>
            </div>
   

        </div>

        );
    }
}

export default NavBar;