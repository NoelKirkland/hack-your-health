import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container, Row, Col } from 'react-bootstrap';

function DailyInventory(props){
  return(
    <React.Fragment>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body onClick={() => props.whenDailyInventoryClicked(props.id)}>
                  <Card.Text>{props.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

DailyInventory.propTypes = {
  name: PropTypes.string,
  whenDailyInventoryClicked: PropTypes.func
}

export default DailyInventory;