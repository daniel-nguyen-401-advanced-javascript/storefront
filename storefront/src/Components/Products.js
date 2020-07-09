import React from 'react';
import {connect} from 'react-redux';

function Products(props){
  //list all products that belong to the current selected cat
  //only show prods that belong to current cat

  let productsHTML = [];
   
  for (let i = 0; i < props.products.length; i++) {
    if (props.products[i].category === props.currentCategory)
      productsHTML.push(<h3 key={i}>{props.products[i].name}</h3>);
  }

  return (
    <>
    <h2>Products</h2>
    {productsHTML}
    </>
  );
}

const mapStatetoProps = (state) => {
  return {
    products: state.products,
    currentCategory: state.currentCategory,
  };
};

export default connect(mapStatetoProps)(Products);