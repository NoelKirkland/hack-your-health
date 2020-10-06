import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';

const Border = styled.div`
border: 1px solid #000000;
margin: 5px
`;

function NavBar(){
  return(
    <Border>
      <Navbar bg="light">
        <Link to='/'>
          <Navbar.Brand>Hack Your Health</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="/signup">Sign up   |</a>
          </Navbar.Text>
          <Navbar.Text>
            <a href="/signin">|   Sign in</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </Border>
  )
}

export default NavBar;