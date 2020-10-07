import React from "react";
import firebase from "firebase/app";
import styled from 'styled-components';
import Container from 'react-bootstrap/Container'

function SignUp(){
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("successfully signed up!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  const SignUp = styled.b`
    font-size: 20px;
  `;


  return (
    <React.Fragment>
      <Container>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <form onSubmit={doSignUp} className="navbar-form navbar-left">
              <SignUp>Sign up: </SignUp>
              <input
                type='text'
                name='signinEmail'
                placeholder='email'/>
              <input
                type='password'
                name='signinPassword'
                placeholder='Password'/>
              <button type="submit">Submit</button>
            </form>
          </div>
        </nav>
      </Container>
    </React.Fragment>
  );
}

export default SignUp;