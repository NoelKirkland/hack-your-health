import React from 'react';
import HomePage from './HomePage';
import NewDailyInventoryForm from './daily-inventory/NewDailyInventoryForm';
import DailyInventory from './daily-inventory/DailyInvetory'
import { withFirestore, isLoaded } from "react-redux-firebase";
import { Link } from "react-router-dom";

class ViewControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      creatingDailyInventoryForm: false,
      fillingOutDailyInventoryForm: false,
      viewingHomePage: true,
      selectedInventoryForm: null
    }
  }

  handleSelectingCreateCustomInventoryForm = () => {
    console.log("handleSelectingCreateCustomInventoryForm is triggered");
    this.setState({
      creatingDialyInventoryForm: true,
      viewingHomePage: false
    })
  }

  handleSelectingFillOutYourDailyInventoryForm = (id) => {
    this.props.firestore
      .get({ collection: "inventory-forms", doc: id })
      .then((dailyInventory) => {
        const firestoreInventoryForm = {
          q1: dailyInventory.get("q1"),
          q2: dailyInventory.get("q2"),
          q3: dailyInventory.get("q3"),
          q4: dailyInventory.get("q4"),
          q5: dailyInventory.get("q5"),
          q6: dailyInventory.get("q6"),
          q7: dailyInventory.get("q7"),
          q8: dailyInventory.get("q8")
        }
        this.setState({
          creatingDialyInventoryForm: false,
          viewingHomePage: false,
          fillingOutDailyInventoryForm: true,
          selectedInventoryForm: firestoreInventoryForm
      })
    });
  }

  render(){
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser == null) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the application.</h1>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser != null) {
      let currentlyVisibleState = null;
  
      if(this.state.creatingDialyInventoryForm){
        currentlyVisibleState = <NewDailyInventoryForm/>
      } else if(this.state.fillingOutDailyInventoryForm){
        currentlyVisibleState = <DailyInventory
          onSelectingFillOutYourDailyInventoryForm={this.handleSelectingFillOutYourDailyInventoryForm}
        />
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
}

export default withFirestore(ViewControl);