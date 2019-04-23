import React, { Component } from 'react';

import Category from './components/shared/category/Category';
import Search from './components/shared/search/Search';
import Product from './components/shared/products/Product'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Category />
          <Search />
          <Product />
        </div>
    );
  }
}

export default App;
