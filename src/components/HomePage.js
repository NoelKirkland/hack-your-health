import React from 'react';
import PropTypes from "prop-types";
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';


function HomePage(props){

  const HomePageButton = styled.button`
  margin: 2px;
  `
  return(
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <h4>Calendar:</h4>
            <HomePageButton>go to your calendar</HomePageButton>
            <HomePageButton>create a custom calendar type</HomePageButton>
          </Col>
          <Col>
            <h4>Daily inventory:</h4>
            <HomePageButton onClick={props.onSelectingViewDailyInventoryFormList} >view daily inventory list</HomePageButton>
            <HomePageButton onClick={props.onSelectingCreateCustomInventoryForm}>create custom inventory form</HomePageButton>
          </Col>
          <Col>
            <h4>Other:</h4>
            <HomePageButton>learn how to best use this application</HomePageButton>
            <HomePageButton>sign out</HomePageButton>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

HomePage.propTypes = {
  onSelectingCreateCustomInventoryForm: PropTypes.func
}
export default HomePage;

