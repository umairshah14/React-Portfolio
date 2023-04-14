import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./contact.css"
const submitMessage = () =>{
  alert("Message sent!")
  }
function ContactMeForm() {

  
  return (
      <div style={{ width: "30rem" }}>
        <Form>
          <Form.Group className="mb-3 center" controlId="formBasicEmail">
            <Form.Label style={{color:"white"}}>Subject</Form.Label>
            <Form.Control type="input" placeholder="Enter subject here" />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{color:"white"}}>Message</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" className="pb-3">
              <Form.Control
              type="input"
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Form.Group>
          <Button variant="primary" type="submit" id="submitBtn" onClick={submitMessage} className="submitBtn" style={{boxShadow:"none"}}>
            Submit
          </Button>
        </Form>
      </div>
  );
}

export default ContactMeForm;
