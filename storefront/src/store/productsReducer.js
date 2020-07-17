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
    {
      name: 'Pie',
      description: 'Pie all the things',
      stock: 11,
      price: 5,
      category: 'food',
    },
    {
      name: 'Mooncake',
      description: 'Moon all the things',
      stock: 61,
      price: 2,
      category: 'food',
    },
    {
      name: 'ShortRibs',
      description: 'Lick all the things',
      stock: 22,
      price: 12,
      category: 'food',
    },
    {
      name: 'Cornbread',
      description: 'Crumble all the things',
      stock: 44,
      price: 2,
      category: 'food',
    },
    {
      name: 'LongRibs',
      description: 'Long all the things',
      stock: 13,
      price: 18,
      category: 'food',
    },
    {
      name: 'MedRibs',
      description: 'Med all the things',
      stock: 15,
      price: 16,
      category: 'food',
    },
    {
      name: 'iPad',
      description: 'Touch all the things',
      stock: 12,
      price: 300,
      category: 'electronics',
    },
    {
      name: 'AirPods',
      description: 'Hear all the things',
      stock: 34,
      price: 150,
      category: 'electronics',
    },
    {
      name: 'Nintendo Switch',
      description: 'Play all the things',
      stock: 1,
      price: 350,
      category: 'electronics',
    },
    {
      name: 'PS5',
      description: 'Sony all the things',
      stock: 1,
      price: 550,
      category: 'electronics',
    },
    {
      name: 'XBone',
      description: 'Meh all the things',
      stock: 99,
      price: 1,
      category: 'electronics',
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
      //action.payload.name
      for (let i = 0; i < newState.allProducts.length; i++) {
        if (newState.allProducts[i].name === action.payload.name){
          newState.allProducts[i] = {...newState.allProducts[i], stock: newState.allProducts[i].stock -1};
        }
      }
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