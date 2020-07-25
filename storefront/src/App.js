import React from 'react';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import store from './store';
// import Products from './Components/Products';
import {ProductsWithRouter} from './Components/Products';
import Categories from './Components/Categories';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import SimpleCart from './Components/SimpleCart';
import Grid from '@material-ui/core/Grid';
import ProductDetails from './Components/ProductDetails';
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
      <Grid className="topMod" container spacing={3} direction='row'>
        <Grid className="catBox" item xs={6} md={6} lg={6}>
      <Categories />
        </Grid>
        <Grid className="cartBox" item xs={6} md={6} lg={6}>
      <SimpleCart className="SimpleCart"/>
        </Grid>
      </Grid>
        <h2>Products</h2>
      <div className="body">
      <ProductsWithRouter />
      </div>
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
