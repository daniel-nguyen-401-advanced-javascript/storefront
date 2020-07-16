const initState = {
  allProducts: [
    {
        name: 'TV',
        description: 'See all the things',
        stock: 5,
        price: 400,
        category: 'electronics',
    },
    {
        name: 'Macbook',
        description: 'Do all the things',
        stock: 7,
        price: 1200,
        category: 'electronics',
    },
    {
        name: 'Carrot',
        description: 'Crunch all the things',
        stock: 25,
        price: 0.3,
        category: 'food',
    },
    {
        name: 'Cake',
        description: 'Lie all the things',
        stock: 10,
        price: 5,
        category: 'food',
    },
  ],
};

const reducer = (state = initState, action) => {

  let newState = { ...state };

  switch (action.type) {
  
    case 'ADD_PRODUCT':
      newState.allProducts.push(action.payload);
      break;
    
    case 'ADD_TO_CART':
      //NOT WORKING
      newState.allProducts.stock--;
      break;
    default:
      break;
  }

  return newState;
};

const addProd = (product) => {
  return { type: 'ADD_PRODUCT', payload: product};
};

export default reducer;
export {addProd};