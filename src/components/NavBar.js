import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  return(
    <React.Fragment>
      <h1>Hack Your Health!</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/signin'>Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  )
}