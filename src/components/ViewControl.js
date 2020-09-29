import React from 'react';
import NewDailyInventoryForm from './daily-inventory/NewDailyInventoryForm'

class ViewControl extends React.Component {

  constructor(){
    super();
    this.state = {
      creatingDialyInventoryForm: true
    }
  }

  render(){
    let currentlyVisibleState = null;

    if(this.state.creatingDialyInventoryForm){
      currentlyVisibleState = <NewDailyInventoryForm/>
    }
      return(
        <React.Fragment>
          {currentlyVisibleState}
        </React.Fragment>
      )
  }
}

export default ViewControl;