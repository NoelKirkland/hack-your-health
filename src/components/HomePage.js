import React from 'react';
import PropTypes from "prop-types";


function HomePage(props){

  return(
    <React.Fragment>
      <h4>Calendar:</h4>
      <button>go to your calendar</button>
      <button>create a custom calendar type</button>
  
      <h4>Daily inventory:</h4>
      <button onClick={props.onSelectingViewDailyInventoryFormList} >view daily inventory list</button>
      <button onClick={props.onSelectingCreateCustomInventoryForm}>create custom inventory form</button>
  
      <h4>Other:</h4>
      <button>learn how to best use this application</button>
      <button>sign out</button>
    </React.Fragment>
  )
}

HomePage.propTypes = {
  onSelectingCreateCustomInventoryForm: PropTypes.func
}
export default HomePage;

