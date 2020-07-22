import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';
import * as actions from '../store/storeActions.js';

function Categories(props) {
  const {getCategories} = props;
  
  let categoriesHTML = [];

  useEffect(() => {
    getCategories();
  }, [getCategories]);
  

  for (let i = 0; i < props.categories.length; i++) {
    categoriesHTML.push(
      <Button
        variant='contained'
        color='primary'
        key={i}
        onClick={(e) => {
          //change current cat
          props.dispatch({
            type: 'CHANGE_CATEGORY',
            payload: props.categories[i].name,
          });
        }}
        >
          {props.categories[i].displayName || props.categories[i].name}
        </Button>,
    );
  }
  return <>
  <div className='Categories'>
  <h3>Categories</h3>
  {categoriesHTML}
  </div>
  </>;
}

const mapStateToProps = (state) => {
  return {
    categories: state.allCategories,
  };
};

const mapDispatchToProps = (dispatch, getState) => ({
  getCategories: (data) => dispatch( actions.getCategories(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);