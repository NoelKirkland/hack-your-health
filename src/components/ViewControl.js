import React from 'react';
import HomePage from './HomePage'
import NewDailyInventoryForm from './daily-inventory/NewDailyInventoryForm'

class ViewControl extends React.Component {

  constructor(){
    super();
    this.state = {
      creatingDailyInventoryForm: false,
      viewingHomePage: true
    }
  }

  handleSelectingCreateCustomInventoryForm = () => {
    console.log("handleSelectingCreateCustomInventoryForm is triggered");
    this.setState({
      creatingDialyInventoryForm: true,
      viewingHomePage: false
    })
  }

  render(){
    let currentlyVisibleState = null;

    if(this.state.creatingDialyInventoryForm){
      currentlyVisibleState = <NewDailyInventoryForm/>
    } else if (this.state.viewingHomePage){
      currentlyVisibleState = <HomePage 
      onSelectingCreateCustomInventoryForm={this.handleSelectingCreateCustomInventoryForm}
      />
    }
      return(
        <React.Fragment>
          {currentlyVisibleState}
        </React.Fragment>
      )
  }
}

export default ViewControl;