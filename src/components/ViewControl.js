import React from 'react';
import HomePage from './HomePage'
import NewDailyInventoryForm from './daily-inventory/NewDailyInventoryForm'

class ViewControl extends React.Component {

  constructor(){
    super();
    this.state = {
      creatingDialyInventoryForm: false,
      viewingHomePage: true
    }
  }

  render(){
    let currentlyVisibleState = null;

    if(this.state.creatingDialyInventoryForm){
      currentlyVisibleState = <NewDailyInventoryForm/>
    } else if (this.state.viewingHomePage){
      currentlyVisibleState = <HomePage/>
    }
      return(
        <React.Fragment>
          {currentlyVisibleState}
        </React.Fragment>
      )
  }
}

export default ViewControl;