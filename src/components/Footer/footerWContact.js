import React from "react";
import Contact from "../Contact";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./footer.css";
import "./cv.pdf";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

import axios from 'axios'
import fileDownload from 'js-file-download'
 




export default function FooterAndContact() {
  
// function to download CV
  const handleDownload = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
  }
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "rgb(56, 44, 44)", display: "flex" }}
    >
      <MDBContainer
        className="pt-4"
        style={{
          display: "flex",
          alignContent: "center",
          flexDirection: "column-reverse",
          flexWrap: "wrap",
        }}
      >
        <section style={{}}>
          <h1 style={{ color: "white" }} className="pt-2">
            Contact Me
          </h1>

          <Container className="center">
            <Row>
              <Col xl="12">
                <Contact></Contact>
              </Col>
            </Row>
          </Container>

          {/* SOCIAL LINKS */}

          {/* CV BUTTON */}
          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            id="iconStyle"
            role="button"
            onClick={() => {handleDownload('./cv.pdf', 'Umair-Shah-CV.pdf')}}
          >
            <MDBIcon fas className="fa-file-alt iconStyle" />
          </MDBBtn>

          {/* EMAIL BUTTON */}
          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="mailto:umairshah14@hotmail.com"
            role="button"
          >
            <MDBIcon fas className="fa-envelope iconStyle" />
          </MDBBtn>

          {/* LINKEDIN BUTTON */}
          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://www.linkedin.com/in/umair-shah-/"
            role="button"
          >
            <MDBIcon fab className="fa-linkedin iconStyle" />
          </MDBBtn>

          {/* GITHUB BUTTON */}
          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://github.com/umairshah14"
            role="button"
          >
            <MDBIcon fab className="fa-github iconStyle" />
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}
