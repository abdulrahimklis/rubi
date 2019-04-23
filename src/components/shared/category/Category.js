import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <div className="App">
                <div className="container margin-top-30">
                    <div className="btn-group category-groups" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary">Movies</button>
                        <button type="button" className="btn btn-secondary">TV Shows</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;
