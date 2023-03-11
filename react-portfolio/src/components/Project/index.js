import Card from "react-bootstrap/Card";
import React from "react";
import { useNavigate } from "react-router-dom";

function ImageAndTextExample() {
  const navigate = useNavigate();

  return (
    <>
      <h1>README GENERATOR</h1>
      <Card>
        <Card.Img
          variant="top"
          src="https://raw.githubusercontent.com/umairshah14/README-Generator/main/assets/images/Screenshot%202023-02-20%20at%2016.31.00.png"
        />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Github Repo</Card.Link>
          <Card.Link href="#">Live Deployed</Card.Link>
        </Card.Body>
      </Card>
      <button onClick={() => navigate(-1)}>Go back to all projects</button>
    </>
  );
}

export default ImageAndTextExample;

