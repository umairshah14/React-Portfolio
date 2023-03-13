import React from "react";
import ContactMeForm from "../Contact/contactMeForm";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function FooterAndContact() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "black", display:"flex"}}
    >
      <MDBContainer className="pt-4" >
        <section style={{justifyContent:"center", }}>
      <h1 style={{color:"white"}} className="pt-2">Contact Me</h1>

          <ContactMeForm ></ContactMeForm>
          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fas className="fa-file-alt"/>
          </MDBBtn>
          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fas className="fa-envelope"/>
          </MDBBtn>
          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa-linkedin" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa-github" />
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}
