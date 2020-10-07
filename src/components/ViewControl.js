import React from 'react';
import HomePage from './HomePage';
import NewDailyInventoryForm from './daily-inventory/NewDailyInventoryForm';
import DailyInventoryDetails from './daily-inventory/DailyInventoryDetails'
import DailyInventoryList from './daily-inventory/DailyInventoryList.js'
import { withFirestore, isLoaded } from "react-redux-firebase";
import { Alert, Container, Col, Row } from 'react-bootstrap';

class ViewControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      creatingDailyInventoryForm: false,
      viewingDailyInventoryList: false,
      viewingHomePage: true,
      selectedInventoryForm: null
    }
  }

  handleAddingNewResponseToList = () => {
    this.setState({
      selectedInventoryForm: null
    })
  };

  handleClickingHomeButton = () => {
    this.setState({
      creatingDailyInventoryForm: false,
      viewingDailyInventoryList: false,
      viewingHomePage: true
    });
  }

  handleSelectingCreateCustomInventoryForm = () => {
    console.log("handleSelectingCreateCustomInventoryForm is triggered");
    this.setState({
      creatingDailyInventoryForm: true,
      viewingHomePage: false
    })
  }

  handleSelectingViewDailyInventoryFormList = () => {
    this.setState({
      creatingDailyInventoryForm: false,
      viewingHomePage: false,
      viewingDailyInventoryList: true
    });
  }

  handleViewingSelectedDailyInventoryForm = (id) => {
    this.props.firestore
      .get({ collection: "inventoryForms", doc: id })
      .then((dailyInventory) => {
        const firestoreInventoryForm = {
          name: dailyInventory.get("name"),
          q1: dailyInventory.get("q1"),
          q2: dailyInventory.get("q2"),
          q3: dailyInventory.get("q3"),
          q4: dailyInventory.get("q4"),
          q5: dailyInventory.get("q5"),
          q6: dailyInventory.get("q6"),
          q7: dailyInventory.get("q7"),
          q8: dailyInventory.get("q8"),
          id: dailyInventory.id
        }
        this.setState({
          selectedInventoryForm: firestoreInventoryForm
      })
    });
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
    //       <Container>
    //         <Container>
    //           <Alert variant='danger'>
    //             <Alert.Heading>Uh oh!</Alert.Heading>
    //             You must be 
    //               <Alert.Link href="/signin"> signed in </Alert.Link>
    //             to access the application. Or, 
    //               <Alert.Link href="/signup"> sign up </Alert.Link>
    //             if you haven't already created an account.
    //           </Alert>
    //         </Container>
    //       </Container>
    //     </React.Fragment>
    //   );
    // }
    // if (isLoaded(auth) && auth.currentUser != null) {
    // }
    let currentlyVisibleState = null;
    if(this.state.selectedInventoryForm !== null){
      currentlyVisibleState = <DailyInventoryDetails
        onNewResponseCreation={this.handleAddingNewResponseToList}
        dailyInventory={this.state.selectedInventoryForm}
      />
    } else if(this.state.creatingDailyInventoryForm){
      currentlyVisibleState = <NewDailyInventoryForm/>
    } else if(this.state.viewingDailyInventoryList){
      currentlyVisibleState = <DailyInventoryList
        onDailyInventorySelection={this.handleViewingSelectedDailyInventoryForm}
      />
    } else if (this.state.viewingHomePage){
      currentlyVisibleState = <HomePage 
        onSelectingCreateCustomInventoryForm={this.handleSelectingCreateCustomInventoryForm}
        onSelectingViewDailyInventoryFormList={this.handleSelectingViewDailyInventoryFormList}
      />
    }
      return(
        <React.Fragment>
          {currentlyVisibleState}
          <Container>
            <Row>
              <Col>
              </Col>
              <Col>
                <button class="home-button" onClick={this.handleClickingHomeButton}>Home</button>
              </Col>
              <Col>
              </Col>
            </Row>
          </Container>
        </React.Fragment>
      )
  }
}

export default withFirestore(ViewControl);