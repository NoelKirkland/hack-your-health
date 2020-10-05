import React from 'react';
import HomePage from './HomePage';
import NewDailyInventoryForm from './daily-inventory/NewDailyInventoryForm';
import { withFirestore, isLoaded } from "react-redux-firebase";
import { Link } from "react-router-dom";

class ViewControl extends React.Component {

  constructor(props){
    super(props);
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
    // const auth = this.props.firebase.auth();
    // if (!isLoaded(auth)) {
    //   return (
    //     <React.Fragment>
    //       <h1>Loading...</h1>
    //     </React.Fragment>
    //   );
    // }
    // if (isLoaded(auth) && auth.currentUser == null) {
    //   return (
    //     <React.Fragment>
    //       <h1>You must be signed in to access the application.</h1>
    //       <Link to="/signin">Sign In</Link>
    //       <Link to="/signup">Sign Up</Link>
    //     </React.Fragment>
    //   );
    // }
    // if (isLoaded(auth) && auth.currentUser != null) {
    // }
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

export default withFirestore(ViewControl);