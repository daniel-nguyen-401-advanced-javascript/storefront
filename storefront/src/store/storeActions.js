import axios from 'axios';

export const getProducts = () => async dispatch => {
  let results = await axios.get('https://api-js401.herokuapp.com/api/v1/products')
  dispatch(renderProducts(results.data.results))
}

const renderProducts = payload => {
  return {
    type: 'GET_PRODUCTS',
    payload
  }
}

export const getCategories = () => async dispatch => {
  let results = await axios.get('https://api-js401.herokuapp.com/api/v1/categories')
  dispatch(renderCategories(results.data));
}

const renderCategories = payload => {
  return {
    type: "GET_CATEGORIES",
    payload
  }
}

export const addToCart = payload => {
  return {
    type: 'ADD_TO_CART',
    payload
  }
}

export const remove = (id) => async dispatch => {
  await axios.delete(`https://api-js401.herokuapp.com/api/v1/products/${id}`);
  dispatch(actualRemove(id))
}

const actualRemove = id => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: id
  }
}

export const changeCat = payload => {
  return {
    type: 'CHANGE_CATEGORY',
    payload
  }
}
