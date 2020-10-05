import React from "react";
import PropTypes from "prop-types";
//import DailyInventory from "./DailyInventory";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";

function DailyInventoryList(props){

  useFirestoreConnect([{ collection: "inventoryForms" }]);

  const dailyInventoryForms = useSelector((state) => state.firestore.ordered.inventoryForms);

  if(isLoaded(dailyInventoryForms)){
    return (
      <React.Fragment>
        <hr />
        {dailyInventoryForms.map((dailyInventory) => {
          return (
            <dailyInventory
              whenDailyInventoryClicked={props.onDailyInventorySelection}
              name={dailyInventory.name}
              q1={dailyInventory.q1}
              q2={dailyInventory.q2}
          )
        })}
      </React.Fragment>
    )
  }
}

export default DailyInventoryList;