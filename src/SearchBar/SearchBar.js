import React , { Component } from 'react';
import './SearchBar.css'; 
import {DropdownButton, MenuItem,  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';


class SearchBar extends Component {
    NYC(){
        this.props.history.push('/map/nyc')
    }

    Philly(){
        this.props.history.push('/map/philly')
    }

    Raleigh(){
        this.props.history.push('/map/raleigh')
    }

    render() {
      return (
        <div className="SearchBar">
            <header id ="showcase">
                <h1 className = "company"> Veggie Voyagers </h1>
                <h1>Explore, smile, and hit the road happy </h1>
                <p> Eat things you <i>actually</i> like!</p>
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group" >
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">Travel Day </button>
                                </span>
                            <input className="form-control" type = "date" data-date-format="mm/dd/yyyy" placeholder="January to March...." />
                        </div>
                    </div> 
                    <div className="col-md-6">
                       
                        <DropdownButton
                            title = {"Select a state"} 
                            id = {'dropdown1'}
                        >
                        <MenuItem onSelect={this.NYC.bind(this)} eventKey = "Atlanta to NY"> Atlanta, GA to New York, NY </MenuItem>
                        <MenuItem divider />
                        <MenuItem onSelect={this.Philly.bind(this)} eventKey = "Atlanta to PA"> Atlanta, GA to Philadelpha, PA </MenuItem>
                        <MenuItem divider />
                        <MenuItem onSelect={this.Raleigh.bind(this)} eventKey = "Atlanta to NC"> Atlanta, GA to Raleigh, NC</MenuItem>

                        </DropdownButton>  

                    </div>
                </div>
            </header>
        </div>
        );
    }
}

export default withRouter(SearchBar); //allows document to change routes 
       