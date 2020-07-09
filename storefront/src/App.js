import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Products from './Components/Products';
import Categories from './Components/Categories';

// connect app to global state redux store
// wrap app in store provider
// pick individual components to connect and become consumers

function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <h1>Hello World</h1>
      <Categories />
      <Products />
    </div>
    </Provider>
  );
}

export default App;
