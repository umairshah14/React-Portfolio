import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import "./gallery.css"

function Project(props) {
  return (
    <Col lg="4" md="6" sm="12" style={{padding:"1rem"}}>
      <Card style={{ width: "25rem", minHeight:"24rem"}}>
        <Card.Img variant="top" src={props.image} style={{minHeight:"12rem", objectFit: "cover"}}/>
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
