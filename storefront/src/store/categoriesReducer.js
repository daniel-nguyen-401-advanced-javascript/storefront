const initState = {
  allCategories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: '' },
],
  currentCategory: 'food',
};

const reducer = (state = initState, action) => {

  let newState = { ...state };

  switch (action.type) {

    case 'CHANGE_CATEGORY':
      newState.currentCategory = action.payload;
      break;

    case 'ADD_CATEGORY':
      newState.allCategories.push(action.payload);
      break;

    default:
      break;
  }

  return newState;
};

const addCat = (category) => {
  return { type: 'ADD_CATEGORY', payload: category};
};

const changeCat = (category) => {
  return { type: 'CHANGE_CATEGORY', payload: category};
};

export default reducer;
export {addCat, changeCat};