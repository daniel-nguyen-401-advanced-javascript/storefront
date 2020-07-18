import React from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';

function SimpleCart(props) {
  console.log(props.cart.cartContents);
  let cartToDisplay = [];

  for (let i = 0; i < props.cart.cartContents.length; i++) {
    cartToDisplay.push(
      <div className="listItem" key={i}>
        <Grid item >
        {props.cart.cartContents[i].name }
        <DeleteIcon onClick={
          (e) => {
            props.dispatch({
              type: 'REMOVE_FROM_CART',
              payload: props.cart.cartContents[i].name,
            });
          }
        }>
        </DeleteIcon>
        </Grid>
      </div>
    )
  }

  return (
    <>
    <div className="SimpleCart">
    <h3>Your Cart:</h3>
    
   <Grid container spacing={1} direction='column'>

    { cartToDisplay }
   
   </Grid>
    </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products.allProducts,
    cart: state.cart,
    cartCount: state.cart.cartCount,
  };
};

export default connect(mapStateToProps)(SimpleCart);