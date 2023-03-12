import Card from "react-bootstrap/Card";
import React, { useState } from 'react';

function Project(props) {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      {props.modal}
    </Card>
  );
}

export default Project;
