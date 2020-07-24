import React, {useEffect} from 'react';
import {connect} from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import * as actions from '../store/storeActions.js';

function Products(props){

  const {getProducts} = props;

  //to get products on load? I'm not sure
  useEffect( () => {
    getProducts();
  }, [getProducts]);

  //list all products that belong to the current selected cat
  //only show prods that belong to current cat
  let productsHTML = [];
   
  for (let i = 0; i < props.products.length; i++) {
    if (props.products[i].category === props.currentCategory)
      productsHTML.push(<Grid item xs={6} md={4} lg={3}key={i}><Card className='card' key={i}>
        <CardActionArea>
          <CardMedia
            className='card-media'
            image="/static/images/cards/contemplative-reptile.jpg"
            title={props.products.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.products[i].name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.products[i].description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Quantity: {props.products[i].inStock}
          </Button>
          <Button variant="outlined" size="small" color="primary" onClick={(e) => {
          props.addToCart(props.products[i]);
        }}>
            Add to cart ${props.products[i].price}
          </Button>
        </CardActions>
      </Card></Grid>);
  }

  return (
    <>
    <div className='Products'>
  
    <Grid container spacing={3} direction='row'>
    
    {productsHTML}
    
    </Grid>
    </div>
    </>
  );
}

const mapStateToProps = (state) => {
  
  return {
    products: state.products.allProducts,
    currentCategory: state.categories.currentCategory,
    cartCount: state.cart.cartCount,
  };
};

const mapDispatchToProps = (dispatch, getState) => ({
  getProducts: (data) => dispatch( actions.getProducts(data)),
  addToCart: (data) => dispatch(actions.addToCart(data)),
 
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);