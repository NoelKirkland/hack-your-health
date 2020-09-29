import React from 'react';

function HomePage(){
  return(
    <React.Fragment>
      <h4>Calendar:</h4>
      <button>go to your calendar</button>
      <button>create a custom calendar type</button>
  
      <h4>Daily inventory:</h4>
      <button>fill out your daily inventory form</button>
      <button>create custom inventory form</button>
  
      <h4>Other:</h4>
      <button>learn how to best use this application</button>
      <button>sign out</button>
    </React.Fragment>
  )
}

export default HomePage;

