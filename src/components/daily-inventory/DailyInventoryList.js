import React from "react";
//import PropTypes from "prop-types";
import DailyInventory from "./DailyInventory";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";

function DailyInventoryList(props){

  useFirestoreConnect([{ collection: "inventoryForms" }]);

  const dailyInventoryForms = useSelector((state) => state.firestore.inventoryForms);

  if(isLoaded(dailyInventoryForms)){
    return (
      <React.Fragment>
        <hr />
        {dailyInventoryForms.map((dailyInventory) => {
          return (
            <DailyInventory
              whenDailyInventoryClicked={props.onDailyInventorySelection}
              name={dailyInventory.name}
              q1={dailyInventory.q1}
              q2={dailyInventory.q2}
              q3={dailyInventory.q3}
              q4={dailyInventory.q4}
              q5={dailyInventory.q5}
              q6={dailyInventory.q6}
              q7={dailyInventory.q7}
              q8={dailyInventory.q8}
              id={dailyInventory.id}
              key={dailyInventory.key}
              />
          )
        })}
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    );
  }
}

export default DailyInventoryList;