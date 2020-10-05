import React from 'react';
import ViewControl from './ViewControl';
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <ViewControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
