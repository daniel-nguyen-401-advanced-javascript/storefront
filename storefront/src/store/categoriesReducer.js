const initState = {
  allCategories: [],
  currentCategory: '',
};

const reducer = (state = initState, action) => {

  let newState = { ...state };

  const {type, payload} = action;

  switch (type) {

    case 'GET_CATEGORIES':
      newState.allCategories = payload;
      break;

    case 'CHANGE_CATEGORY':
      newState.currentCategory = payload;
      break;

    default:
      break;
  }

  return newState;
};

export default reducer;
