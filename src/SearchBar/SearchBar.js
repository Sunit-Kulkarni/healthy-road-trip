import React , { Component } from 'react';

class SearchBar extends Component {
    render() {
      return (
        <div className="SearchBar">
        
            <header id ="showcase">
                <h1>Explore, smile, and hit the road hungry </h1>
                <p> Eat things you <i>actually</i> like!</p>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="input-group">
                                <span class="input-group-btn">
                                    <button class="btn btn-default" type="button">Find Dates </button>
                                </span>
                            <input type="text" class="form-control" placeholder="January to March...." />
                        </div>
                    </div> 
                        <div class="col-lg-6">
                            <div class="input-group">
                            <input type="text" class="form-control" placeholder="New York, Pennsylvania, California, " />
                                <span class="input-group-btn">
                                    <button class="btn btn-default" type="button">Go!</button>
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
       