import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';

function Categories(props) {
  let categoriesHTML = [];

  useEffect(() => {
    get();
  }, [get]);
  

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
    // get: (data) => dispatch( actions.get(data))
    categories: state.categories.allCategories,
  };
};

export default connect(mapStateToProps)(Categories);