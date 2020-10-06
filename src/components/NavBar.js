import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarHeaderText = styled.h1`
font-size: 80px;
text-align: center;
color: #39ff14;
background-color: black;
`;

const NavBarButtons = styled.li`
display: inline;
padding: 1%;
`;

function NavBar(){
  return(
    <React.Fragment>
      <NavBarHeaderText>Hack Your Health!</NavBarHeaderText>
      <ul>
        <NavBarButtons>
          <Link to='/'>Home</Link>
        </NavBarButtons>
        <NavBarButtons>
          <Link to='/signin'>Sign In</Link>
        </NavBarButtons>
      </ul>
    </React.Fragment>
  )
}

export default NavBar;