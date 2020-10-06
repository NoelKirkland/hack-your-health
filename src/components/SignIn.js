import React from "react";
import firebase from "firebase/app";
import styled from 'styled-components';
import Container from 'react-bootstrap/Container'


function SignIn(){
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("Successfully signed out!");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  const SignIn = styled.b`
    font-size: 20px;
  `;

  
  return (
    <React.Fragment>
      <Container>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <form onSubmit={doSignIn} className="navbar-form navbar-left">
            <SignIn>Sign in: </SignIn>
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
          <div class="nav navbar-nav navbar-right">
            <button onClick={doSignOut}>Sign out</button>
          </div>
        </div>
      </nav>
      </Container>
    </React.Fragment>
  );
}

export default SignIn;