import React from "react";
// import PropTypes from "prop-types";
import ReusableDailyInventoryForm from "./ReusableDailyInventoryForm";
import { useFirestore } from "react-redux-firebase";

function NewDailyInventoryForm(){

  const firestore = useFirestore();

  function addDailyInventoryFormToFirestore(event){
    event.preventDefault();
    
    return firestore.collection("inventoryForms").add({
      name: event.target.name.value,
      q1: event.target.q1.value,
      q2: event.target.q2.value,
      q3: event.target.q3.value,
      q4: event.target.q4.value,
      q5: event.target.q5.value,
      q6: event.target.q6.value,
      q7: event.target.q7.value,
      q8: event.target.q8.value,
    });
  }
  return(
    <React.Fragment>
      <ReusableDailyInventoryForm 
        formSubmissionHandler={addDailyInventoryFormToFirestore}
        buttonText="Create Survey" />
    </React.Fragment>
  )
}

export default NewDailyInventoryForm;