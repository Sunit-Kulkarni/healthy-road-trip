import React , { Component } from 'react';

class SearchBar extends Component {
    render() {
      return (
        <div className="SearchBar">
        
            <header id ="showcase">
                <h1>Explore, smile, and hit the road hungry </h1>
                <p> Eat things you <i>actually</i> like!</p>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="input-group">
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">Travel Day </button>
                                </span>
                            
                            <input className="form-control" type = "date" data-date-format="mm/dd/yyyy" placeholder="January to March...." />
                        </div>
                    </div> 
                        <div className="col-lg-6">
                            <div className="input-group">
                            <input type="text" className="form-control" placeholder="New York, Pennsylvania, California, " />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">Go!</button>
                                </span>
                            </div> 
                        </div> 
                    </div>
            </header>
         </div>
        );
    }
}

export default SearchBar;
       