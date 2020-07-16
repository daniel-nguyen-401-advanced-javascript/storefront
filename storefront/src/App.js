import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Products from './Components/Products';
import Categories from './Components/Categories';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import './styles/styles.scss';

// connect app to global state redux store
// wrap app in store provider
// pick individual components to connect and become consumers

function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <Header />
      <br />
      <Categories />
      <Products />
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
