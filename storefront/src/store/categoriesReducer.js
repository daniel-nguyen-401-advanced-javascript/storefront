const initState = {
  allCategories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: '' },
],
  currentCategory: 'food',
};

const reducer = (state = initState, action) => {

  let newState = { ...state };

  const {type, payload} = action;

  switch (type) {

    case 'CHANGE_CATEGORY':
      newState.currentCategory = payload;
      break;

    default:
      break;
  }

  return newState;
};

export default reducer;
