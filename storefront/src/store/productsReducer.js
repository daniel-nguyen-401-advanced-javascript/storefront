const initState = {
  allProducts: [],
};

export default (state = initState, action) => {

  let newState = { ...state };

  const {type, payload} = action;

  switch (type) {

    case 'GET_PRODUCTS':
      newState.allProducts = payload;
      return payload;

    default:
      break;
  }

  return newState;
};
