import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Col from 'react-bootstrap/Col';

function Project(props) {
  return (
    <Col lg="4" md="6" sm="12" style={{padding:"1rem"}}>
      <Card style={{ width: "25rem"}}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        {props.modal}
      </Card>
    </Col>
  );
}

export default Project;
