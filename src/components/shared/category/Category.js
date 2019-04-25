import React, { Component } from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";

class Category extends Component {
    render() {
        return (
            <div className="App">
                <div className="container margin-top-30">
                    <div className="btn-group category-groups" role="group" aria-label="Basic example">
                        <Link to="/"><button type="button" className="btn btn-secondary">Movies</button></Link>
                        <Link to="/shows"><button type="button" className="btn btn-secondary">TV Shows</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;
