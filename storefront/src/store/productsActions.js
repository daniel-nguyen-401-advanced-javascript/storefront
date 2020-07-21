import axios from 'axios';

export const get = () => async dispatch => {
  let results = await axios.get('https://api-js401.herokuapp.com/api/v1/products')
  dispatch(createInitialList(results.data.results))
}

const createInitialList = payload => {
  return {
    type: 'GET_PRODUCTS',
    payload
  }
}

export const add = payload => {
  return {
    type: 'ADD_PRODUCT',
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
    payload
  }
}