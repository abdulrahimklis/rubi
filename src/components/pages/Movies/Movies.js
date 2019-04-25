import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './Movies.css'

class Category extends Component {
    constructor() {
        super();
        this.state = {
            'movies': []
        }
    }
    componentDidMount() {
        this.getData();
    }

    getData() {
        const url = "https://api.themoviedb.org/3/movie/6c1e1b431886ead5f7c4051e68d18ed9/lists?api_key=6c1e1b431886ead5f7c4051e68d18ed9&language=en-US&page=2";
        axios.get(url)
            .then((data) => {
                // this.state.movies = data;
                console.log(data.data.results);
                this.setState({'movies': data.data.results});
                console.log(this.state.movies);
            });
    }
    render() {
        return (
            <div className="container">
                <div  className="flex-box">
                    {this.state.movies&&this.state.movies.map((item, index) => {
                        console.log(item);
                        if(item.poster_path) {
                            return (
                                <div key={index}>
                                    <img src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} alt=""/>
                                    <div className="nameOfMovie">{item.name}</div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default Category;
