import React, { Component } from 'react';
import axios from 'axios';

import './Product.css'

class Category extends Component {
    state = {
        movies: []
    };

    getData() {
        axios.get(`https://api.themoviedb.org/3/movie/6c1e1b431886ead5f7c4051e68d18ed9/lists?api_key=6c1e1b431886ead5f7c4051e68d18ed9&language=en-US&page=2&include_image_language=1`)
            .then(res => {
                this.state.movies = res.data;
                console.log(this.state.movies)
            })
    }

    images = [{

    }];

    render() {
        return (
            <div className="container">
                <div className="flex-box">
                    <div>
                        <img className="width-100" src="https://picsum.photos/200" alt="image"/>
                        <span> test</span>
                    </div>
                    <div>
                        <img className="width-100" src="https://picsum.photos/200" alt="image"/>
                        <span> test</span>
                    </div>
                    <div>
                        <img className="width-100" src="https://picsum.photos/200" alt="image"/>
                        <span> test</span>
                    </div>
                    <div>
                        <img className="width-100" src="https://picsum.photos/200" alt="image"/>
                        <span> test</span>
                    </div>
                    <div>
                        <img className="width-100" src="https://picsum.photos/200" alt="image"/>
                        <span> test</span>
                    </div>
                </div>
                {/*<button onClick={this.getData()}>Click</button>*/}
            </div>
        );
    }
}

export default Category;
