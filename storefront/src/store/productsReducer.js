const initState = {
  allProducts: [],
};

export default (state = initState, action) => {

  let newState = { ...state };

  const {type, payload} = action;

  switch (type) {

    case 'GET_PRODUCTS':
      console.log('inside getProductsReducer');
      newState.allProducts = payload;
      // return newState;
      break;
    default:
      break;
  }

  return newState;
};
