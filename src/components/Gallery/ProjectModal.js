import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {
 
  MDBIcon
  
} from "mdb-react-ui-kit";

function ProjectModal(props) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)} style={{backgroundColor:"#382c2c", marginLeft:"8px"}}>
          View project info
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton className="modal-header text-center">
          <Modal.Title
            style={{ textDecoration: "underline", fontSize: "35px" }}
            className="modal-title w-100"
          >
            {props.name}
          </Modal.Title>
        </Modal.Header>
        <Card.Img
          className="img-fluid"
          style={{ width: "55rem", alignSelf: "center", height: "auto"}}
          variant="top"
          src={props.image}
        />
        <Modal.Body>{props.detailedDescription}</Modal.Body>
        <Container className="center">
          <Row>
            <Col xxl="12">
              <Button id="noOutline" style={{ margin: "1rem", backgroundColor:"#382c2c"}} href={props.githubRepo}>
                <i className="fa-brands fa-github"></i>
                <br></br>
                Github Repo
              </Button>
              <Button id="noOutline"style={{ margin: "1rem", backgroundColor:"#382c2c"}} href={props.deployed}>
                <MDBIcon fas icon="mouse" />
                <br></br>
                {props.deployed === ""
                  ? "No Live Deployment"
                  : "Live Deployment"}
          
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  );
}

export default ProjectModal;
