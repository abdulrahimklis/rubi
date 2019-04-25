import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

// import components
import Category from './components/shared/category/Category';
import Search from './components/shared/search/Search';
import Product from './components/shared/products/Product';

// import pages
import Movies from './components/pages/Movies/Movies'
import Shows  from './components/pages/Shows/Shows'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Category />
                <Search />
                <Route exact path='/' component={Movies} />
                <Route exact path='/shows' component={Shows} />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
