import React from 'react';
import PropTypes from 'prop-types';

function DailyInventory(props){
  return(
    <React.Fragment>
      <div onClick={() => props.whenDailyInventoryClicked(props.id)}>
        <h3>Dialy Inventory Form name: {props.name}</h3>
      </div>
    </React.Fragment>
  );
}

DailyInventory.propTypes = {
  name: PropTypes.string,
  whenDailyInventoryClicked: PropTypes.func
}

export default DailyInventory;