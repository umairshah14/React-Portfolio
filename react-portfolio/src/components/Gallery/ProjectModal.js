import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

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
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          View project info
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Card.Img className="img-fluid" style={{ width: "60rem" }} variant="top" src={props.image} />
        <Modal.Body>{props.detailedDescription}</Modal.Body>
        <Card.Link href={props.githubRepo}>Github Repo</Card.Link>
        <Card.Link href={props.deployed}>{props.deployed === "" ? "" : "Live Deployed"}
        </Card.Link>
      </Modal>
    </>
  );
}

export default ProjectModal;
