const initState = {
  cartContents: [],
};

const reducer = (state = initState, action) => {
  
  let newState = {...state};

  switch (action.type) {
    
    case 'ADD_TO_CART':
      newState.cartContents.push(action.payload);
      break;
    
    case 'REMOVE_FROM_CART':
      newState.cartContents = newState.cartContents.filter((val) => {
        return val.name !== action.payload;
      });
      break;

    default:
      break;
  }

  return newState;
}

const addItem = (product) => {
  return { type: 'ADD_TO_CART', payload: product};
};

const removeItem = (product) => {
  return { type: 'REMOVE_FROM_CART', payload: product};
};

export default reducer;
export { addItem, removeItem };
