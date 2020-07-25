import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import ShoppingCart from './Components/ShoppingCart';
// import Products from './Components/Products';
import ProductsWithRouter from './Components/Products';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App>
      <Switch>
      <Route path='/products/:id' component={ProductDetails}/>
      <Route path='/cart' component={ShoppingCart}/>
      </Switch>
    </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


